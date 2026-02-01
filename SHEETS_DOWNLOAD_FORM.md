# Google Sheets Integration for Download Form

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet
2. Name it: **SkilledCA Downloads**
3. Add these headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Occupation`
   - F1: `Resource Downloaded`
   - G1: `Page URL`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code and paste:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}),
      data.name,
      data.email,
      data.phone,
      data.occupation,
      data.resource,
      data.pageUrl
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Deploy → New deployment**
4. Select type: **Web app**
5. Set:
   - Description: `Download Form Handler`
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Click **Deploy** and authorize the app
7. **Copy the Web app URL** (looks like: `https://script.google.com/macros/s/.../exec`)

## Step 3: Update the Website

Replace `YOUR_GOOGLE_SCRIPT_URL` in `scripts/download-system.js` with your Web app URL.

The URL should look like:
```
https://script.google.com/macros/s/AKfycbx.../exec
```

## Testing

1. Fill out the download form on your website
2. Check Google Sheets - a new row should appear with the form data
3. The "Resource Downloaded" column will show which PDF was downloaded
