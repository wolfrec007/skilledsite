# Google Sheets Setup for Saturday Feedback Form

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet
2. Name it: **Saturday API Feedback**
3. Add these headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Content`
   - D1: `Communication`
   - E1: `Delivery`
   - F1: `Examples`
   - G1: `Complexity`
   - H1: `Practical`
   - I1: `Materials`
   - J1: `Overall`
   - K1: `Review`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code and paste:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    var name = e.parameter.name;
    var content = e.parameter.content;
    var communication = e.parameter.communication;
    var delivery = e.parameter.delivery;
    var examples = e.parameter.examples;
    var complexity = e.parameter.complexity;
    var practical = e.parameter.practical;
    var materials = e.parameter.materials;
    var overall = e.parameter.overall;
    var review = e.parameter.review || '';
    
    sheet.appendRow([
      new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}),
      name,
      content,
      communication,
      delivery,
      examples,
      complexity,
      practical,
      materials,
      overall,
      review
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
   - Description: `Saturday Feedback Handler`
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Click **Deploy** and authorize the app
7. **Copy the Web app URL**

## Step 3: Update the Form

Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` in `forms/forms_saturday.html` (around line 478) with your Web app URL.

## Testing

1. Go to `skilledca.in/forms_saturday`
2. Fill out the form with test data
3. Check your Google Sheet - a new row should appear with all ratings and review
