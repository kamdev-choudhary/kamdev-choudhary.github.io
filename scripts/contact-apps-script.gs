/**
 * Contact form endpoint for the portfolio.
 *
 * Receives a submission from the static site, appends it to a Google Sheet
 * and emails a copy. Replaces the Next.js /api/contact route, which cannot
 * exist on GitHub Pages.
 *
 * ---------------------------------------------------------------------------
 * SETUP
 * ---------------------------------------------------------------------------
 * 1. Create a Google Sheet. From its URL, copy the id:
 *      https://docs.google.com/spreadsheets/d/<THIS PART>/edit
 *    Put it in SHEET_ID below.
 *
 * 2. In that Sheet: Extensions -> Apps Script. Replace the default file with
 *    this one and save.
 *
 * 3. Deploy -> New deployment -> type "Web app", then:
 *      Execute as:      Me
 *      Who has access:  Anyone          <- required; "Anyone with Google
 *                                          account" will NOT work
 *    Authorise when prompted, then copy the /exec URL.
 *
 * 4. Add that URL to the GitHub repository as a variable (not a secret, since
 *    it is inlined into the public bundle anyway):
 *      Settings -> Secrets and variables -> Actions -> Variables -> New
 *      Name:  PUBLIC_CONTACT_ENDPOINT
 *      Value: https://script.google.com/macros/s/..../exec
 *
 *    For local development, put the same line in a `.env` file.
 *
 * 5. Re-run the deploy workflow.
 *
 * Note: after editing this script you must deploy a NEW VERSION
 * (Deploy -> Manage deployments -> edit -> Version: New version) or the live
 * endpoint keeps running the old code.
 *
 * The client sends `Content-Type: text/plain` deliberately: it keeps the
 * request a CORS "simple request", so the browser skips the preflight that
 * Apps Script cannot answer. The body is still JSON.
 */

/** @type {string} Sheet that stores submissions. */
var SHEET_ID = "PASTE_YOUR_SHEET_ID_HERE";

/** @type {string} Where the notification email is sent. */
var NOTIFY_EMAIL = "kamdevchoudhary@gmail.com";

/** @type {string} Tab name; created automatically if missing. */
var SHEET_NAME = "Enquiries";

var MAX_LENGTHS = { name: 100, email: 200, message: 5000 };
var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: "empty_body" });
    }

    var data = JSON.parse(e.postData.contents);

    // Bots fill the honeypot. Accept silently so they do not retry.
    if (clean(data.website, 200)) {
      return json({ ok: true });
    }

    var name = clean(data.name, MAX_LENGTHS.name);
    var email = clean(data.email, MAX_LENGTHS.email);
    var message = clean(data.message, MAX_LENGTHS.message);

    if (name.length < 2 || !EMAIL_PATTERN.test(email) || message.length < 10) {
      return json({ ok: false, error: "validation" });
    }

    appendRow(name, email, message);
    notify(name, email, message);

    return json({ ok: true });
  } catch (error) {
    console.error("Contact submission failed: " + error);
    return json({ ok: false, error: "server" });
  }
}

/** Lets you confirm the deployment is live by opening the URL in a browser. */
function doGet() {
  return json({ ok: true, status: "contact endpoint is live" });
}

function appendRow(name, email, message) {
  var book = SpreadsheetApp.openById(SHEET_ID);
  var sheet = book.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
    sheet.appendRow(["Received", "Name", "Email", "Message"]);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([new Date(), name, email, message]);
}

function notify(name, email, message) {
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "Portfolio enquiry from " + name,
    replyTo: email,
    body: "Name: " + name + "\nEmail: " + email + "\n\n" + message,
  });
}

function clean(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function json(payload) {
  return ContentService.createTextOutput(
    JSON.stringify(payload),
  ).setMimeType(ContentService.MimeType.JSON);
}
