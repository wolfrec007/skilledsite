const tCodesData = [
    {
        "Area": "",
        "Transaction": "ZPDF",
        "Tcode Description": "Conver Spool to PDF"
    },
    {
        "Area": "",
        "Transaction": "SM37",
        "Tcode Description": "Overview of job selection"
    },
    {
        "Area": "",
        "Transaction": "SP02",
        "Tcode Description": "Display Spool Requests"
    },
    {
        "Area": "Fixed Assets",
        "Transaction": "AR02",
        "Tcode Description": "Call Up Asset History Sheet"
    },
    {
        "Area": "Fixed Assets",
        "Transaction": "AS03",
        "Tcode Description": "Display Asset Master Record"
    },
    {
        "Area": "Fixed Assets",
        "Transaction": "AW01N",
        "Tcode Description": "Asset Explorer"
    },
    {
        "Area": "",
        "Transaction": "F-23",
        "Tcode Description": "Return Bill of Exchange Pmt Request"
    },
    {
        "Area": "Sales",
        "Transaction": "F.23",
        "Tcode Description": "A/R: Account Balances"
    },
    {
        "Area": "Sales",
        "Transaction": "F.31",
        "Tcode Description": "Credit Management - Overview"
    },
    {
        "Area": "Sales",
        "Transaction": "F.32",
        "Tcode Description": "Credit Management - Missing Data"
    },
    {
        "Area": "Sales",
        "Transaction": "F.33",
        "Tcode Description": "Credit Management - Brief Overview"
    },
    {
        "Area": "P2P",
        "Transaction": "F.42",
        "Tcode Description": "A/P: Account Balances"
    },
    {
        "Area": "Account",
        "Transaction": "FAGLB03",
        "Tcode Description": "Display Balances"
    },
    {
        "Area": "Account",
        "Transaction": "FAGLL03",
        "Tcode Description": "G/L Account Line Items (New)"
    },
    {
        "Area": "Account",
        "Transaction": "FB03",
        "Tcode Description": "Display Document"
    },
    {
        "Area": "Account",
        "Transaction": "FB04",
        "Tcode Description": "Document Changes"
    },
    {
        "Area": "P2P",
        "Transaction": "FBL1N",
        "Tcode Description": "Vendor Line Items"
    },
    {
        "Area": "Account",
        "Transaction": "FBL3N",
        "Tcode Description": "G/L Account Line Items"
    },
    {
        "Area": "Sales",
        "Transaction": "FBL5N",
        "Tcode Description": "Customer Line Items"
    },
    {
        "Area": "Sales",
        "Transaction": "FD03",
        "Tcode Description": "Display Customer (Accounting)"
    },
    {
        "Area": "Sales",
        "Transaction": "FD10N",
        "Tcode Description": "Customer Balance Display"
    },
    {
        "Area": "Sales",
        "Transaction": "FD33",
        "Tcode Description": "Display Customer Credit Management"
    },
    {
        "Area": "P2P",
        "Transaction": "FK03",
        "Tcode Description": "Display Vendor (Accounting)"
    },
    {
        "Area": "",
        "Transaction": "S_ALR_87012284",
        "Tcode Description": "Financial Statements"
    },
    {
        "Area": "",
        "Transaction": "S_ALR_87012277",
        "Tcode Description": "G/L Account Balances"
    },
    {
        "Area": "P2P",
        "Transaction": "S_ALR_87012103",
        "Tcode Description": "List of Vendor Line Items"
    },
    {
        "Area": "P2P",
        "Transaction": "S_ALR_87012086",
        "Tcode Description": "Vendor List"
    },
    {
        "Area": "P2P",
        "Transaction": "S_ALR_87012082",
        "Tcode Description": "Vendor Balances in Local Currency"
    },
    {
        "Area": "Fixed Assets",
        "Transaction": "S_ALR_87011964",
        "Tcode Description": "Asset Balances"
    },
    {
        "Area": "P2P",
        "Transaction": "S_AC0_52000888",
        "Tcode Description": "Payables: Profit Center"
    },
    {
        "Area": "Sales",
        "Transaction": "S_AC0_52000887",
        "Tcode Description": "Receivables: Profit Center"
    },
    {
        "Area": "",
        "Transaction": "SA39",
        "Tcode Description": "SA38 for Parameter Transaction"
    },
    {
        "Area": "P2P",
        "Transaction": "MIR4",
        "Tcode Description": "Call MIRO - Change Status"
    },
    {
        "Area": "",
        "Transaction": "KSB1",
        "Tcode Description": "Cost Centers: Actual Line Items"
    },
    {
        "Area": "",
        "Transaction": "KOB1",
        "Tcode Description": "Orders: Actual Line Items"
    },
    {
        "Area": "",
        "Transaction": "KO03",
        "Tcode Description": "Display Internal Order"
    },
    {
        "Area": "",
        "Transaction": "FSS4",
        "Tcode Description": "G/L Account Changes in Company Code"
    },
    {
        "Area": "",
        "Transaction": "FS10N",
        "Tcode Description": "Balance Display"
    },
    {
        "Area": "Account",
        "Transaction": "FS03",
        "Tcode Description": "Display Master Record"
    },
    {
        "Area": "",
        "Transaction": "FKI0",
        "Tcode Description": "Execute Report"
    },
    {
        "Area": "P2P",
        "Transaction": "FK10N",
        "Tcode Description": "Vendor Balance Display"
    },
    {
        "Area": "P2P",
        "Transaction": "FK10",
        "Tcode Description": "Vendor Account Balance"
    },
    {
        "Area": "",
        "Transaction": "S_ALR_87012287",
        "Tcode Description": "Document Journal"
    },
    {
        "Area": "",
        "Transaction": "ZFIR003A",
        "Tcode Description": "MRA Pending Report"
    },
    {
        "Area": "",
        "Transaction": "ZFIR004",
        "Tcode Description": "FI Wrapper Program"
    },
    {
        "Area": "",
        "Transaction": "ZFIR003",
        "Tcode Description": "MRA Tracking Report"
    },
    {
        "Area": "",
        "Transaction": "ZFIR002",
        "Tcode Description": "Display Accounting Documents"
    },
    {
        "Area": "",
        "Transaction": "ZFIR007",
        "Tcode Description": "Internal Order Cost Center Check Rep"
    },
    {
        "Area": "Tax",
        "Transaction": "ZFIR008",
        "Tcode Description": "Service Tax Report"
    },
    {
        "Area": "Account",
        "Transaction": "ZFIR012",
        "Tcode Description": "Current Asset / Laibility Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZFIR018",
        "Tcode Description": "Payment List 2"
    },
    {
        "Area": "Sales",
        "Transaction": "ZFIR020",
        "Tcode Description": "Customer Due Aging"
    },
    {
        "Area": "Account",
        "Transaction": "ZFIR001",
        "Tcode Description": "Display General Ledger Balance"
    },
    {
        "Area": "P2P & GST",
        "Transaction": "ZFIF005N",
        "Tcode Description": "Debit Note"
    },
    {
        "Area": "",
        "Transaction": "ZFIF001",
        "Tcode Description": "Voucher Print"
    },
    {
        "Area": "Sales",
        "Transaction": "ZFBL5N",
        "Tcode Description": "Customer Line Items"
    },
    {
        "Area": "P2P",
        "Transaction": "ZFBL1N",
        "Tcode Description": "Vendor Line Items"
    },
    {
        "Area": "P2P",
        "Transaction": "XK04",
        "Tcode Description": "Vendor Changes (Centrally)"
    },
    {
        "Area": "P2P",
        "Transaction": "XK03",
        "Tcode Description": "Display vendor (centrally)"
    },
    {
        "Area": "Account",
        "Transaction": "S_PL0_86000030",
        "Tcode Description": "G/L Account - Balances"
    },
    {
        "Area": "",
        "Transaction": "S_PL0_86000028",
        "Tcode Description": "Fin. Statements: Act/Act Comparison"
    },
    {
        "Area": "",
        "Transaction": "S_BCE_68000174",
        "Tcode Description": "IMG activity: SIMG_CFMENUORFBOB08"
    },
    {
        "Area": "",
        "Transaction": "ZFIR021",
        "Tcode Description": "Power Steam Auto Booking Report"
    },
    {
        "Area": "Tax",
        "Transaction": "ZFIR108",
        "Tcode Description": "Tax Document Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZFIR102",
        "Tcode Description": "Vendor Bank Details"
    },
    {
        "Area": "",
        "Transaction": "ZFIR099",
        "Tcode Description": "KR Document Details"
    },
    {
        "Area": "GST",
        "Transaction": "ZFIR098",
        "Tcode Description": "GST Hold/Payable Report Wrapper"
    },
    {
        "Area": "GST",
        "Transaction": "ZFIR097",
        "Tcode Description": "Taxable Outward Supply"
    },
    {
        "Area": "Sales",
        "Transaction": "ZFIR091",
        "Tcode Description": "Customer Balance Report"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZFIR089",
        "Tcode Description": "Stock Movement Report"
    },
    {
        "Area": "Production",
        "Transaction": "ZFIR075",
        "Tcode Description": "BOM Variance"
    },
    {
        "Area": "Fixed Assets",
        "Transaction": "ZFIR049",
        "Tcode Description": "Asset  Transfer Details"
    },
    {
        "Area": "",
        "Transaction": "ZFIR046",
        "Tcode Description": "Inter Unit Transfer Detail  Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZFIR041",
        "Tcode Description": "Budget Vs Actual Report"
    },
    {
        "Area": "P2P & Logistics",
        "Transaction": "ZFIR039",
        "Tcode Description": "Freight Register"
    },
    {
        "Area": "Account",
        "Transaction": "ZFIR038",
        "Tcode Description": "GL Balances Profit Center Wise"
    },
    {
        "Area": "P2P",
        "Transaction": "ZFIR037",
        "Tcode Description": "Plant Wise Cane Cost Summary"
    },
    {
        "Area": "P2P",
        "Transaction": "ZFIR034",
        "Tcode Description": "Vendor Due Ageing"
    },
    {
        "Area": "P2P",
        "Transaction": "ZFIR030",
        "Tcode Description": "Vendor Master with CIN details"
    },
    {
        "Area": "Tax",
        "Transaction": "ZFIR029",
        "Tcode Description": "TDS Report"
    },
    {
        "Area": "Sales",
        "Transaction": "ZFIR027",
        "Tcode Description": "Customer Account Balances"
    },
    {
        "Area": "Account",
        "Transaction": "ZFIR026",
        "Tcode Description": "Accounting Doc. Of GRN and Invoice"
    },
    {
        "Area": "",
        "Transaction": "ZPT_QTA10",
        "Tcode Description": "Absence Quota Information"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR024",
        "Tcode Description": "Employee Hold Payment Report"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR019",
        "Tcode Description": "Employee Leave Balance Detail Report"
    },
    {
        "Area": "Fixed Assets & HR",
        "Transaction": "ZHRR017",
        "Tcode Description": "Emplyee Asset Details"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR016",
        "Tcode Description": "Employee Reimbursement Report"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR012",
        "Tcode Description": "Employee PAN/PF/Bank Details"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR011",
        "Tcode Description": "Emplyee Details"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR010",
        "Tcode Description": "Leave Encashment Details"
    },
    {
        "Area": "",
        "Transaction": "PT_QTA10",
        "Tcode Description": "Absence Quota Information"
    },
    {
        "Area": "",
        "Transaction": "S_AHR_61016380",
        "Tcode Description": "Logged Changes in Infotype Data"
    },
    {
        "Area": "HR",
        "Transaction": "S_PH0_48000450",
        "Tcode Description": "Date Monitoring"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR001",
        "Tcode Description": "ATTENDANCE REPORT"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR002",
        "Tcode Description": "HR Reports"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR009",
        "Tcode Description": "Employee Loans/Advances Report"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR007",
        "Tcode Description": "Employee Loan Overview for ESS"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR004",
        "Tcode Description": "Man Power Details ( Department Wise"
    },
    {
        "Area": "HR",
        "Transaction": "ZHRR005",
        "Tcode Description": "Leave Consumption  Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMF005",
        "Tcode Description": "CANE PO SAP V/S CMS"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR001",
        "Tcode Description": "Purchase Requition Display Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR004",
        "Tcode Description": "Order Value Report(Including Tax)"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR005",
        "Tcode Description": "PO Last Price Report by Release Grp"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR006",
        "Tcode Description": "Inbound Pending for GRN"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR009",
        "Tcode Description": "Material Moving Average Price Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR011",
        "Tcode Description": "PO Ageing"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR012",
        "Tcode Description": "Material Tracking report (RGP)"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR015",
        "Tcode Description": "Process Info PR To Payment"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR019",
        "Tcode Description": "PERIODIC PO DETAILS"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR020",
        "Tcode Description": "CANE PO DETAIL"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR021",
        "Tcode Description": "PO Pending For Release"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR022",
        "Tcode Description": "PO Pending For Release Summary"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR023",
        "Tcode Description": "Stock Position of critical items"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR025",
        "Tcode Description": "PR PEnding For Release"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR026",
        "Tcode Description": "PR Pending For Release Summary"
    },
    {
        "Area": "P2P",
        "Transaction": "MSRV6",
        "Tcode Description": "Service List for Entry Sheet"
    },
    {
        "Area": "P2P",
        "Transaction": "ME2N",
        "Tcode Description": "Purchase Orders by PO Number"
    },
    {
        "Area": "P2P",
        "Transaction": "ME2M",
        "Tcode Description": "Purchase Orders by Material"
    },
    {
        "Area": "P2P",
        "Transaction": "ME2L",
        "Tcode Description": "Purchase Orders by Vendor"
    },
    {
        "Area": "P2P",
        "Transaction": "ME2K",
        "Tcode Description": "Purch. Orders by Account Assignment"
    },
    {
        "Area": "P2P",
        "Transaction": "ME2J",
        "Tcode Description": "Purchase Orders for Project"
    },
    {
        "Area": "P2P",
        "Transaction": "ME2C",
        "Tcode Description": "Purchase Orders by Material Group"
    },
    {
        "Area": "P2P",
        "Transaction": "ME23N",
        "Tcode Description": "Display Purchase Order"
    },
    {
        "Area": "P2P",
        "Transaction": "ME23",
        "Tcode Description": "Display Purchase Order"
    },
    {
        "Area": "Inventory",
        "Transaction": "MC.9",
        "Tcode Description": "INVCO: Material Anal.Selection,Stock"
    },
    {
        "Area": "P2P",
        "Transaction": "MC$O",
        "Tcode Description": "PURCHIS: Material Freqs. Selection"
    },
    {
        "Area": "Inventory",
        "Transaction": "MBBS",
        "Tcode Description": "Display valuated special stock"
    },
    {
        "Area": "Inventory",
        "Transaction": "MB5S",
        "Tcode Description": "Display List of GR/IR Balances"
    },
    {
        "Area": "Inventory",
        "Transaction": "MB5B",
        "Tcode Description": "Stocks for Posting Date"
    },
    {
        "Area": "Inventory",
        "Transaction": "MB59",
        "Tcode Description": "Material Doc. List"
    },
    {
        "Area": "Inventory",
        "Transaction": "MB56",
        "Tcode Description": "Analyze batch where-used list"
    },
    {
        "Area": "Production",
        "Transaction": "ZMMR028",
        "Tcode Description": "Services With Consumption GL"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR029",
        "Tcode Description": "Import PO Detail"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR030",
        "Tcode Description": "PO with Terms of Payment"
    },
    {
        "Area": "Sales",
        "Transaction": "ZMMR032",
        "Tcode Description": "Intersegment Sale & GRN"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR034",
        "Tcode Description": "Material Price Compare"
    },
    {
        "Area": "Production",
        "Transaction": "ZMMR035",
        "Tcode Description": "CHEMICAL MATERIAL CONSUMPTION REPORT"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR036",
        "Tcode Description": "PO Release Efficiency Report"
    },
    {
        "Area": "",
        "Transaction": "ZMMR037",
        "Tcode Description": "Monitoring tool for proct & services"
    },
    {
        "Area": "Account",
        "Transaction": "ZMMR038",
        "Tcode Description": "PlantWise Expenses Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR040",
        "Tcode Description": "Service Entry Sheet Pending Release"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR042",
        "Tcode Description": "Inbounds Delv Dt prior to Entry Date"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR044",
        "Tcode Description": "Stock Ageing"
    },
    {
        "Area": "",
        "Transaction": "ZMMR045",
        "Tcode Description": "PR assigned to users list"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR047",
        "Tcode Description": "Purchase Register"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR054",
        "Tcode Description": "Invoice Date before PO/SO Date"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR055",
        "Tcode Description": "Service Order Register"
    },
    {
        "Area": "Insurance",
        "Transaction": "ZMMR056",
        "Tcode Description": "Insurance Claim Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR058",
        "Tcode Description": "Service Order details"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR059",
        "Tcode Description": "PO get Condition Value"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR060",
        "Tcode Description": "Stock Movement Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR062",
        "Tcode Description": "Vendor Master Details"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR069",
        "Tcode Description": "Inbound Pending for GRN"
    },
    {
        "Area": "Inventory",
        "Transaction": "VL06I",
        "Tcode Description": "Inbound Delivery Monitor"
    },
    {
        "Area": "",
        "Transaction": "ZREL02",
        "Tcode Description": "License Summary Details"
    },
    {
        "Area": "Export",
        "Transaction": "ZREL01",
        "Tcode Description": "EXIM:Licence Report"
    },
    {
        "Area": "",
        "Transaction": "ZPPF003",
        "Tcode Description": "Daily Activity Control Sheet"
    },
    {
        "Area": "",
        "Transaction": "ZMMR070",
        "Tcode Description": "Rawsugar Imp/Dom License Details"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR071",
        "Tcode Description": "Material Cost Analysis Report"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR083",
        "Tcode Description": "HOD Level GRN Pending Quality"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR084",
        "Tcode Description": "Purchase Details Report"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR085",
        "Tcode Description": "Material Closing Stock Details"
    },
    {
        "Area": "Inventory",
        "Transaction": "MB53",
        "Tcode Description": "Display Plant Stock Availability"
    },
    {
        "Area": "P2P",
        "Transaction": "ME2S",
        "Tcode Description": "Services per Purchase Order"
    },
    {
        "Area": "P2P",
        "Transaction": "ME2W",
        "Tcode Description": "Purchase Orders for Supplying Plant"
    },
    {
        "Area": "Inventory",
        "Transaction": "ME33K",
        "Tcode Description": "Display Contract"
    },
    {
        "Area": "P2P",
        "Transaction": "ME3L",
        "Tcode Description": "Outline Agreements per Vendor"
    },
    {
        "Area": "P2P",
        "Transaction": "ME3N",
        "Tcode Description": "Outline Agreements by Agreement No."
    },
    {
        "Area": "P2P",
        "Transaction": "ME43",
        "Tcode Description": "Display Request For Quotation"
    },
    {
        "Area": "P2P",
        "Transaction": "ME48",
        "Tcode Description": "Display Quotation"
    },
    {
        "Area": "P2P",
        "Transaction": "ME53N",
        "Tcode Description": "Display Purchase Requisition"
    },
    {
        "Area": "P2P",
        "Transaction": "ME5A",
        "Tcode Description": "Purchase Requisitions: List Display"
    },
    {
        "Area": "P2P",
        "Transaction": "ME5J",
        "Tcode Description": "Purchase Requisitions for Project"
    },
    {
        "Area": "",
        "Transaction": "ME5K",
        "Tcode Description": "Requisitions by Account Assignment"
    },
    {
        "Area": "P2P",
        "Transaction": "ME5W",
        "Tcode Description": "Resubmission of Purch. Requisitions"
    },
    {
        "Area": "P2P",
        "Transaction": "ME9F",
        "Tcode Description": "Message Output: Purchase Orders"
    },
    {
        "Area": "Inventory",
        "Transaction": "MI23",
        "Tcode Description": "Disp. Phys. Inv. Data for Material"
    },
    {
        "Area": "Inventory",
        "Transaction": "MIGO",
        "Tcode Description": "Goods Movement"
    },
    {
        "Area": "Inventory",
        "Transaction": "MIGO",
        "Tcode Description": "Goods Movement"
    },
    {
        "Area": "P2P",
        "Transaction": "MK03",
        "Tcode Description": "Display vendor (Purchasing)"
    },
    {
        "Area": "P2P",
        "Transaction": "MKVZ",
        "Tcode Description": "List of Vendors: Purchasing"
    },
    {
        "Area": "P2P",
        "Transaction": "ML81N",
        "Tcode Description": "Service Entry Sheet"
    },
    {
        "Area": "",
        "Transaction": "MM03",
        "Tcode Description": "Display Material &"
    },
    {
        "Area": "",
        "Transaction": "MM04",
        "Tcode Description": "Display Material Change Documents"
    },
    {
        "Area": "Inventory",
        "Transaction": "MM60",
        "Tcode Description": "Materials List"
    },
    {
        "Area": "Inventory",
        "Transaction": "MMBE",
        "Tcode Description": "Stock Overview"
    },
    {
        "Area": "P2P",
        "Transaction": "MSRV3",
        "Tcode Description": "Service List for Purchase Order"
    },
    {
        "Area": "P2P",
        "Transaction": "AC03",
        "Tcode Description": "Service Master"
    },
    {
        "Area": "",
        "Transaction": "CV03N",
        "Tcode Description": "Display document"
    },
    {
        "Area": "",
        "Transaction": "MB03",
        "Tcode Description": "Display Material Document"
    },
    {
        "Area": "",
        "Transaction": "MB23",
        "Tcode Description": "Display Reservation"
    },
    {
        "Area": "Inventory",
        "Transaction": "MB25",
        "Tcode Description": "Reservation List"
    },
    {
        "Area": "Inventory",
        "Transaction": "MB51",
        "Tcode Description": "Material Doc. List"
    },
    {
        "Area": "Inventory",
        "Transaction": "MB52",
        "Tcode Description": "List of Warehouse Stocks on Hand"
    },
    {
        "Area": "",
        "Transaction": "IQS3",
        "Tcode Description": "Display Notification - Extended View"
    },
    {
        "Area": "",
        "Transaction": "IW23",
        "Tcode Description": "Display PM Notification"
    },
    {
        "Area": "",
        "Transaction": "IW33",
        "Tcode Description": "Display PM Order"
    },
    {
        "Area": "",
        "Transaction": "IW39",
        "Tcode Description": "Display PM orders"
    },
    {
        "Area": "",
        "Transaction": "ZPMR001",
        "Tcode Description": "Open PM Order Details"
    },
    {
        "Area": "",
        "Transaction": "ZPMR005",
        "Tcode Description": "Cost Center / Fund Center Report"
    },
    {
        "Area": "Production",
        "Transaction": "ZPPR012",
        "Tcode Description": "Crushing & Bagging Report"
    },
    {
        "Area": "Production",
        "Transaction": "C203",
        "Tcode Description": "Display Master Recipe"
    },
    {
        "Area": "",
        "Transaction": "CO09",
        "Tcode Description": "Availability Overview"
    },
    {
        "Area": "Production",
        "Transaction": "COOISPI",
        "Tcode Description": "Process Order Information System"
    },
    {
        "Area": "Production",
        "Transaction": "COR3",
        "Tcode Description": "Display Process Order"
    },
    {
        "Area": "Production",
        "Transaction": "CORT",
        "Tcode Description": "Display Process Order Confirmation"
    },
    {
        "Area": "Production",
        "Transaction": "CS03",
        "Tcode Description": "Display Material BOM"
    },
    {
        "Area": "Production",
        "Transaction": "CS11",
        "Tcode Description": "Display BOM Level by Level"
    },
    {
        "Area": "Production",
        "Transaction": "CS12",
        "Tcode Description": "Multilevel BOM"
    },
    {
        "Area": "Production",
        "Transaction": "CS13",
        "Tcode Description": "Summarized BOM"
    },
    {
        "Area": "Production",
        "Transaction": "CS14",
        "Tcode Description": "BOM Comparison"
    },
    {
        "Area": "",
        "Transaction": "CS15",
        "Tcode Description": "Single-Level Where-Used List"
    },
    {
        "Area": "",
        "Transaction": "ZPPR002",
        "Tcode Description": "Chk Confirmatn Qty Against Proc Ord"
    },
    {
        "Area": "Fixed Assets",
        "Transaction": "CJ13",
        "Tcode Description": "Display WBS Element"
    },
    {
        "Area": "",
        "Transaction": "CJ33",
        "Tcode Description": "Display Project Release"
    },
    {
        "Area": "Fixed Assets",
        "Transaction": "CN43N",
        "Tcode Description": "Overview: WBS Elements"
    },
    {
        "Area": "Production",
        "Transaction": "S_ALR_87013532",
        "Tcode Description": "Plan/Actual/Variance"
    },
    {
        "Area": "Production",
        "Transaction": "S_ALR_87013558",
        "Tcode Description": "Budget/Actual/Commitmt/Rem.Plan/Assg"
    },
    {
        "Area": "",
        "Transaction": "ZQMT002",
        "Tcode Description": "Inspection Lot Selection List - SRSL"
    },
    {
        "Area": "",
        "Transaction": "QA33",
        "Tcode Description": "Display data for inspection lot"
    },
    {
        "Area": "",
        "Transaction": "QA13",
        "Tcode Description": "Display usage decision"
    },
    {
        "Area": "",
        "Transaction": "QA03",
        "Tcode Description": "Display inspection lot"
    },
    {
        "Area": "",
        "Transaction": "MCVZ",
        "Tcode Description": "QMIS: Ven. Analysis- Q Not. Overview"
    },
    {
        "Area": "P2P",
        "Transaction": "MCVX",
        "Tcode Description": "QMIS: Vendor analysis defects"
    },
    {
        "Area": "P2P",
        "Transaction": "MCVP",
        "Tcode Description": "QMIS: vendor analysis items Q notif."
    },
    {
        "Area": "P2P",
        "Transaction": "MCVI",
        "Tcode Description": "QMIS: Vendor Analysis - Quantities"
    },
    {
        "Area": "P2P",
        "Transaction": "MCVG",
        "Tcode Description": "QMIS: Vendor Analysis - Lot Numbers"
    },
    {
        "Area": "P2P",
        "Transaction": "MCVD",
        "Tcode Description": "QMIS: Quant. Results for Vendor"
    },
    {
        "Area": "P2P",
        "Transaction": "MCVC",
        "Tcode Description": "QMIS: Vendor Analysis - Qty Overview"
    },
    {
        "Area": "P2P",
        "Transaction": "MCVB",
        "Tcode Description": "QMIS: General Results for Vendor"
    },
    {
        "Area": "P2P",
        "Transaction": "MCVA",
        "Tcode Description": "QMIS: Vendor Analysis Lot Overview"
    },
    {
        "Area": "General",
        "Transaction": "SU53",
        "Tcode Description": "Evaluate Authorization Check"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMR094",
        "Tcode Description": "Material Code Creation Report"
    },
    {
        "Area": "Inventory",
        "Transaction": "ZMMT015",
        "Tcode Description": "Material Code Creation"
    },
    {
        "Area": "Export",
        "Transaction": "ZSDR065",
        "Tcode Description": "CHA Bill Tracking"
    },
    {
        "Area": "Export",
        "Transaction": "ZSDR071",
        "Tcode Description": "Port Closing Stock"
    },
    {
        "Area": "Export",
        "Transaction": "ZSDR060",
        "Tcode Description": "Exim document pendency Status report"
    },
    {
        "Area": "",
        "Transaction": "ZSDR056N",
        "Tcode Description": "Contract balance period wise"
    },
    {
        "Area": "Production",
        "Transaction": "ZSDR055",
        "Tcode Description": "Nomination Balance Report"
    },
    {
        "Area": "",
        "Transaction": "ZSDR075",
        "Tcode Description": "CI to PI Details Report"
    },
    {
        "Area": "",
        "Transaction": "ZSDR082N",
        "Tcode Description": "Contract Released Records"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR011",
        "Tcode Description": "EXPORT Plantwise"
    },
    {
        "Area": "",
        "Transaction": "ZSDR010",
        "Tcode Description": "List of Contract"
    },
    {
        "Area": "Production",
        "Transaction": "ZSDR008",
        "Tcode Description": "Material Wise Prod & Issue Summary"
    },
    {
        "Area": "",
        "Transaction": "ZSDR053",
        "Tcode Description": "Nomination Details"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR052",
        "Tcode Description": "Export Contract Detail"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR051",
        "Tcode Description": "Export Contract Detail"
    },
    {
        "Area": "",
        "Transaction": "ZSDR045",
        "Tcode Description": "Contract Details"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR036",
        "Tcode Description": "Customer Master list"
    },
    {
        "Area": "Export",
        "Transaction": "ZSDR027",
        "Tcode Description": "Shipping Bill Report"
    },
    {
        "Area": "",
        "Transaction": "ZSDR017",
        "Tcode Description": "Open SD documents list"
    },
    {
        "Area": "P2P",
        "Transaction": "ZSDR016A",
        "Tcode Description": "Weigh Bridge Interface Report - New"
    },
    {
        "Area": "P2P",
        "Transaction": "ZSDR016",
        "Tcode Description": "Weigh Bridge Interface Report"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR013",
        "Tcode Description": "Plant wise EXPORT Summary"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR012",
        "Tcode Description": "EXPORT Summary"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR007",
        "Tcode Description": "Sales Relisation Report"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR004",
        "Tcode Description": "Sales Order Flow Report"
    },
    {
        "Area": "Export",
        "Transaction": "ZSDR003",
        "Tcode Description": "Contract List Against Deal Report"
    },
    {
        "Area": "Export",
        "Transaction": "ZSDR002N",
        "Tcode Description": "Contract Summary Report New"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR002",
        "Tcode Description": "Sales Contract Summary Report"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR001N",
        "Tcode Description": "Sales Register Report for KBK"
    },
    {
        "Area": "Sales",
        "Transaction": "ZSDR001",
        "Tcode Description": "Sales Report"
    },
    {
        "Area": "Sales",
        "Transaction": "XD03",
        "Tcode Description": "Display Customer (Centrally)"
    },
    {
        "Area": "",
        "Transaction": "VL03N",
        "Tcode Description": "Display Outbound Delivery"
    },
    {
        "Area": "",
        "Transaction": "VF03",
        "Tcode Description": "Display Billing Document"
    },
    {
        "Area": "",
        "Transaction": "VA45N",
        "Tcode Description": "List of Contracts"
    },
    {
        "Area": "",
        "Transaction": "VA45",
        "Tcode Description": "List of Contracts"
    },
    {
        "Area": "",
        "Transaction": "VA43",
        "Tcode Description": "Display Contract"
    },
    {
        "Area": "Sales",
        "Transaction": "VA05N",
        "Tcode Description": "List of Sales Orders"
    },
    {
        "Area": "Sales",
        "Transaction": "VA05",
        "Tcode Description": "List of Sales Orders"
    },
    {
        "Area": "Sales",
        "Transaction": "VA03",
        "Tcode Description": "Display Sales Order"
    },
    {
        "Area": "General",
        "Transaction": "ZBCR013",
        "Tcode Description": "SAP USER ID & Role-wise T-code access"
    },
    {
        "Area": "P2P",
        "Transaction": "ME49",
        "Tcode Description": "Price comparison list"
    },
    {
        "Area": "Inventory",
        "Transaction": "VL33N",
        "Tcode Description": "Display inbound delivery"
    },
    {
        "Area": "Inventory",
        "Transaction": "VL31N",
        "Tcode Description": "Create inbound delivery"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMF001",
        "Tcode Description": "Purchase Requisition Print"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMF002",
        "Tcode Description": "Reservation Print"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMF003",
        "Tcode Description": "RFQ Comparative Statement form"
    },
    {
        "Area": "P2P",
        "Transaction": "S_ALR_87012089",
        "Tcode Description": "Display Changes to Vendor"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR037",
        "Tcode Description": "All open items (PO, PR, SR, SO, GRN)"
    },
    {
        "Area": "P2P",
        "Transaction": "ZMMR045",
        "Tcode Description": "PR pending for PO (Open PR)"
    },
    {
        "Area": "General",
        "Transaction": "SUIM",
        "Tcode Description": "User Information System"
    },
    {
        "Area": "P2P",
        "Transaction": "ZSDR093",
        "Tcode Description": "Unmanned Weight Bridge Trip Report"
    },
    {
        "Area": "P2P",
        "Transaction": "ZSDR048",
        "Tcode Description": ""
    },
    {
        "Area": "Inventory",
        "Transaction": "IH09",
        "Tcode Description": "Display material Item list"
    },
    {
        "Area": "Production",
        "Transaction": "CS80",
        "Tcode Description": "List of BOM changes during a period"
    },
    {
        "Area": "",
        "Transaction": "",
        "Tcode Description": ""
    },
    {
        "Area": "",
        "Transaction": "",
        "Tcode Description": ""
    },
    {
        "Area": "",
        "Transaction": "",
        "Tcode Description": ""
    },
    {
        "Area": "",
        "Transaction": "",
        "Tcode Description": " "
    }
];