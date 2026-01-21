# 📊 Google Sheets Feedback Setup Guide

Follow these steps to connect your skilledca form to a Google Sheet.

## 1. Create the Spreadsheet
1. Go to [sheets.new](https://sheets.new)
2. Name the sheet: **SkilledCA Feedback**
3. Rename the tab at the bottom from `Sheet1` to **Feedback** (Important!)

## 2. Add Headers (Row 1)
Copy and paste these exact headers into the first row (A1 to K1):

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| timestamp | name | email | role | interest | learning_goals | difficulties | rating | source | recommend | feedback |

## 3. Add the Script
1. Click **Extensions** > **Apps Script**
2. Delete any code in `Code.gs` and paste this:

```javascript
/* 
   SkilledCA Feedback Handler 
   Accepts POST requests and saves to 'Feedback' sheet
*/

// CHANGE THIS if you renamed your sheet tab
const SHEET_NAME = 'Feedback';

function initialSetup() {
  const customProp = PropertiesService.getScriptProperties();
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  customProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('key'));
    const sheet = doc.getSheetByName(SHEET_NAME);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    const newRow = headers.map(function(header) {
      if (header === 'timestamp') {
        return new Date();
      }
      // Return the value from the form, or empty string if missing
      return e.parameter[header] || '';
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}
```

## 4. Deploy the Script
1. Save the script (Ctrl+S).
2. **Run Initial Setup**:
   - Select `initialSetup` from the dropdown (top bar).
   - Click **Run**.
   - Review permissions -> Choose Account -> Advanced -> **Go to Project (Unsafe)** -> Allow.
3. Click **Deploy** > **New Deployment**.
4. **Configuration**:
   - Select type: **Web app**.
   - Description: `Feedback Form`
   - Execute as: **Me** (your email).
   - Who has access: **Anyone** (Crucial!).
5. Click **Deploy**.
6. **Copy the "Web App URL"**.

## 5. Connect to Website
1. Go to `forms/index.html`.
2. Find this line (around line 335):
   ```javascript
   const SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Paste: Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your copied ID.
4. Save & Push! 🚀
