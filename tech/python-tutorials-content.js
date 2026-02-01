// Python Tutorials Content - All markdown content for the SPA
window.tutorialContent = {

intro: `# 🐍 Python Scripting Essentials

Welcome to this comprehensive tutorial series on building **production-ready Python scripts**.

## What You'll Learn

| Part | Topic | Key Skills |
|------|-------|------------|
| 1 | **pathlib** | Modern file/folder operations |
| 2 | **tqdm** | Progress bars for loops |
| 3 | **Error Handling** | try/except patterns |
| 4 | **Pandas** | Data manipulation |
| 5 | **Logging** | Production logging |
| 6 | **Configuration** | External settings |
| 7 | **CLI Arguments** | argparse |
| 8 | **Type Hints** | Clear code contracts |
| 9 | **Context Managers** | Resource safety |
| 10 | **Production** | Complete template |
| 🎨 | **Clean Code** | Write better code |

## Prerequisites

- Basic Python knowledge (variables, functions, loops)
- Python 3.8+ installed
- A code editor (VS Code recommended)

## How to Use This Tutorial

1. **Read through each section** in order (use the sidebar)
2. **Type out the code examples** (don't just copy-paste!)
3. **Experiment** with variations
4. **Build something** using what you learn

---

> "The only way to learn programming is by writing programs." — Dennis Ritchie

**Ready? Click "pathlib" in the sidebar to begin! →**
`,

pathlib: `# Part 1: File Handling with pathlib

## Why pathlib?

Before pathlib, we used string manipulation:

\`\`\`python
# ❌ OLD WAY
import os
filepath = "C:\\\\Users\\\\data\\\\report.csv"
folder = os.path.dirname(filepath)
new_path = os.path.join(folder, "output", filename)
\`\`\`

\`\`\`python
# ✅ NEW WAY with pathlib
from pathlib import Path
filepath = Path("C:/Users/data/report.csv")
new_path = filepath.parent / "output" / filepath.name
\`\`\`

---

## Creating Path Objects

\`\`\`python
from pathlib import Path

# From a string
file_path = Path("data/reports/annual_report.xlsx")

# Current directory
current = Path(".")

# Home directory  
home = Path.home()

# Current working directory
cwd = Path.cwd()

# Forward slashes work on Windows too!
cross_platform = Path("C:/Users/data/file.txt")
\`\`\`

---

## Path Properties

\`\`\`python
path = Path("C:/Users/data/reports/sales_2024.xlsx")

path.name      # "sales_2024.xlsx"
path.stem      # "sales_2024"
path.suffix    # ".xlsx"
path.parent    # C:/Users/data/reports
path.parts     # ('C:\\\\', 'Users', 'data', 'reports', 'sales_2024.xlsx')
\`\`\`

---

## Joining Paths

\`\`\`python
base = Path("C:/Projects")

# Using / operator (most Pythonic!)
full_path = base / "myproject" / "src" / "main.py"
# Result: C:/Projects/myproject/src/main.py
\`\`\`

---

## Changing Names and Extensions

\`\`\`python
original = Path("data/report_v1.xlsx")

original.with_name("final_report.xlsx")  # data/final_report.xlsx
original.with_stem("report_v2")          # data/report_v2.xlsx
original.with_suffix(".csv")             # data/report_v1.csv
\`\`\`

---

## Checking Existence

\`\`\`python
path = Path("data/file.txt")

path.exists()      # Does it exist?
path.is_file()     # Is it a file?
path.is_dir()      # Is it a directory?
path.is_absolute() # Is it an absolute path?
\`\`\`

---

## Reading and Writing Files

\`\`\`python
file_path = Path("data/example.txt")

# Read entire file
content = file_path.read_text(encoding="utf-8")

# Write to file
file_path.write_text("Hello, World!", encoding="utf-8")

# Read lines
lines = file_path.read_text().splitlines()
\`\`\`

---

## Directory Operations

\`\`\`python
folder = Path("output/reports/2024")

# Create directory (with parents)
folder.mkdir(parents=True, exist_ok=True)

# List contents
for item in folder.iterdir():
    print(item)

# Find files with glob
excel_files = list(folder.glob("*.xlsx"))
all_excel = list(folder.rglob("*.xlsx"))  # Recursive
\`\`\`

---

## Quick Reference

| Operation | Code |
|-----------|------|
| Create path | \`Path("data/file.txt")\` |
| Join paths | \`path / "subdir" / "file.txt"\` |
| Get filename | \`path.name\` |
| Get extension | \`path.suffix\` |
| Check exists | \`path.exists()\` |
| Read file | \`path.read_text()\` |
| Write file | \`path.write_text("content")\` |
| Create dir | \`path.mkdir(parents=True, exist_ok=True)\` |
| Find files | \`list(path.glob("*.csv"))\` |
`,

tqdm: `# Part 2: Progress Bars with tqdm

## Basic Usage

\`\`\`python
from tqdm import tqdm
import time

# Wrap any iterable
for item in tqdm(range(100)):
    time.sleep(0.05)

# With a list
files = ["file1.csv", "file2.csv", "file3.csv"]
for file in tqdm(files, desc="Processing"):
    process(file)
\`\`\`

---

## Customization

\`\`\`python
from tqdm import tqdm

for item in tqdm(
    items,
    desc="Loading",      # Label
    unit="file",         # Item name
    ncols=80,            # Width
    colour="green"       # Color
):
    process(item)
\`\`\`

---

## Manual Updates

\`\`\`python
from tqdm import tqdm

pbar = tqdm(total=100, desc="Downloading")
for chunk in download_chunks():
    pbar.update(len(chunk))
pbar.close()
\`\`\`

---

## With Pandas

\`\`\`python
from tqdm import tqdm
tqdm.pandas()

# Progress for apply operations
df["new_col"] = df["col"].progress_apply(expensive_function)
\`\`\`

---

## Nested Progress Bars

\`\`\`python
for folder in tqdm(folders, desc="Folders"):
    files = list(folder.glob("*.csv"))
    for file in tqdm(files, desc="Files", leave=False):
        process(file)
\`\`\`

---

## Safe Printing

\`\`\`python
for item in tqdm(items):
    if error:
        tqdm.write(f"Error: {item}")  # Won't break the bar
\`\`\`
`,

errors: `# Part 3: Error Handling

## Basic try-except

\`\`\`python
try:
    result = risky_operation()
except Exception as e:
    print(f"Error: {e}")
\`\`\`

---

## Specific Exceptions

\`\`\`python
try:
    data = load_file(path)
except FileNotFoundError:
    print("File not found!")
except PermissionError:
    print("No permission!")
except Exception as e:
    print(f"Unknown error: {e}")
\`\`\`

---

## try-except-else-finally

\`\`\`python
try:
    file = open("data.txt")
    content = file.read()
except FileNotFoundError:
    content = "default"
else:
    print("File loaded successfully!")
finally:
    file.close()  # Always runs
\`\`\`

---

## Raising Exceptions

\`\`\`python
def validate_age(age):
    if age < 0:
        raise ValueError(f"Age cannot be negative: {age}")
    if age > 150:
        raise ValueError(f"Age seems unrealistic: {age}")
    return True
\`\`\`

---

## Custom Exceptions

\`\`\`python
class ValidationError(Exception):
    pass

class DataNotFoundError(Exception):
    pass

# Usage
if not data:
    raise DataNotFoundError("No records found")
\`\`\`

---

## Error Collection Pattern

\`\`\`python
errors = []

for file in files:
    try:
        process(file)
    except Exception as e:
        errors.append({"file": file, "error": str(e)})
        continue  # Keep processing others

print(f"Completed with {len(errors)} errors")
\`\`\`

---

## Guard Clauses

\`\`\`python
# ❌ NESTED
def process(data):
    if data:
        if validate(data):
            return transform(data)

# ✅ GUARD CLAUSES
def process(data):
    if not data:
        raise ValueError("No data")
    if not validate(data):
        raise ValidationError("Invalid")
    return transform(data)
\`\`\`
`,

pandas: `# Part 4: Pandas Essentials

## Reading Data

\`\`\`python
import pandas as pd

# CSV
df = pd.read_csv("data.csv")
df = pd.read_csv("data.csv", encoding="utf-8-sig")

# Excel
df = pd.read_excel("data.xlsx")
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# All as strings
df = pd.read_csv("data.csv", dtype=str)
\`\`\`

---

## Exploring Data

\`\`\`python
df.head()          # First 5 rows
df.tail()          # Last 5 rows
df.shape           # (rows, columns)
df.columns         # Column names
df.dtypes          # Data types
df.info()          # Summary
df.describe()      # Statistics
\`\`\`

---

## Selecting Data

\`\`\`python
# Single column
df["name"]

# Multiple columns
df[["name", "age"]]

# Filter rows
df[df["age"] > 30]
df[df["name"].str.contains("John")]
df[df["status"].isin(["active", "pending"])]

# Combined
df[(df["age"] > 30) & (df["status"] == "active")]
\`\`\`

---

## Modifying Data

\`\`\`python
# Add column
df["new_col"] = df["col1"] + df["col2"]

# Rename columns
df = df.rename(columns={"old": "new"})

# Drop columns
df = df.drop(columns=["unwanted"])

# Fill missing
df["col"] = df["col"].fillna(0)
\`\`\`

---

## Grouping

\`\`\`python
# Group and aggregate
summary = df.groupby("category").agg({
    "amount": "sum",
    "count": "count"
}).reset_index()

# Multiple grouping
summary = df.groupby(["year", "month"])["sales"].sum()
\`\`\`

---

## Merging

\`\`\`python
# Left join
merged = pd.merge(df1, df2, on="id", how="left")

# Multiple keys
merged = pd.merge(df1, df2, on=["id", "date"])
\`\`\`

---

## Writing Data

\`\`\`python
# CSV
df.to_csv("output.csv", index=False, encoding="utf-8-sig")

# Excel
df.to_excel("output.xlsx", index=False)

# Multiple sheets
with pd.ExcelWriter("output.xlsx") as writer:
    df1.to_excel(writer, sheet_name="Data")
    df2.to_excel(writer, sheet_name="Summary")
\`\`\`
`,

logging: `# Part 5: Logging

## Why Not print()?

\`\`\`python
# ❌ print() problems
print("Processing file...")  # No timestamp
print("Error!")              # Can't filter by severity
                             # Can't save to file easily

# ✅ logging advantages
logging.info("Processing file...")   # Timestamped
logging.error("Something failed!")   # Severity levels
                                     # Easy file output
\`\`\`

---

## Basic Setup

\`\`\`python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s | %(levelname)s | %(message)s'
)

logging.info("Started processing")
logging.warning("This might be an issue")
logging.error("Something went wrong!")
\`\`\`

---

## Log Levels

| Level | When to Use |
|-------|-------------|
| DEBUG | Detailed debugging |
| INFO | General progress |
| WARNING | Potential issues |
| ERROR | Something failed |
| CRITICAL | App can't continue |

---

## File Logging

\`\`\`python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s | %(levelname)s | %(message)s',
    handlers=[
        logging.FileHandler("app.log"),
        logging.StreamHandler()  # Also print to console
    ]
)
\`\`\`

---

## Logger Setup Function

\`\`\`python
def setup_logger(name, log_file=None):
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    
    formatter = logging.Formatter(
        '%(asctime)s | %(levelname)s | %(message)s'
    )
    
    # Console
    console = logging.StreamHandler()
    console.setFormatter(formatter)
    logger.addHandler(console)
    
    # File (optional)
    if log_file:
        file_handler = logging.FileHandler(log_file)
        file_handler.setFormatter(formatter)
        logger.addHandler(file_handler)
    
    return logger

# Usage
logger = setup_logger("myapp", "app.log")
logger.info("Application started")
\`\`\`
`,

config: `# Part 6: Configuration Management

## Why External Config?

\`\`\`python
# ❌ HARDCODED
input_folder = "C:/Users/john/data"
output_folder = "C:/Users/john/output"
tolerance = 0.01

# ✅ EXTERNAL CONFIG
config = load_config("config.yaml")
input_folder = config["input_folder"]
\`\`\`

---

## YAML Config

\`\`\`yaml
# config.yaml
input_folder: "C:/Data/Input"
output_folder: "C:/Data/Output"

processing:
  tolerance: 0.01
  date_format: "%Y-%m-%d"

columns:
  - name
  - amount
  - date
\`\`\`

---

## Loading YAML

\`\`\`python
import yaml
from pathlib import Path

def load_config(path):
    with open(path, 'r') as f:
        return yaml.safe_load(f)

config = load_config("config.yaml")
print(config["processing"]["tolerance"])  # 0.01
\`\`\`

---

## Environment Variables

\`\`\`python
import os

# Get with default
api_key = os.environ.get("API_KEY", "default-key")
debug = os.environ.get("DEBUG", "false") == "true"
\`\`\`

---

## Config Class Pattern

\`\`\`python
from dataclasses import dataclass
from pathlib import Path

@dataclass
class Config:
    input_folder: Path
    output_folder: Path
    tolerance: float = 0.01
    
    @classmethod
    def from_yaml(cls, path):
        data = yaml.safe_load(open(path))
        return cls(
            input_folder=Path(data["input_folder"]),
            output_folder=Path(data["output_folder"]),
            tolerance=data.get("tolerance", 0.01)
        )

config = Config.from_yaml("config.yaml")
\`\`\`
`,

cli: `# Part 7: Command-Line Arguments

## Why CLI Arguments?

\`\`\`bash
# Instead of editing code...
python script.py

# Users can customize behavior!
python script.py --input data/ --output results/ --verbose
\`\`\`

---

## Basic argparse

\`\`\`python
import argparse

parser = argparse.ArgumentParser(description="Process data files")

parser.add_argument("input", help="Input folder path")
parser.add_argument("-o", "--output", help="Output folder")
parser.add_argument("-v", "--verbose", action="store_true")

args = parser.parse_args()

print(args.input)
print(args.output)
print(args.verbose)
\`\`\`

---

## Argument Types

\`\`\`python
parser.add_argument("--count", type=int, default=10)
parser.add_argument("--ratio", type=float, default=0.5)
parser.add_argument("--mode", choices=["fast", "slow"])
\`\`\`

---

## Complete Example

\`\`\`python
import argparse
from pathlib import Path

def main():
    parser = argparse.ArgumentParser(
        description="Process Excel files"
    )
    
    parser.add_argument(
        "input_folder",
        type=Path,
        help="Folder containing input files"
    )
    
    parser.add_argument(
        "-o", "--output",
        type=Path,
        default=None,
        help="Output folder (default: INPUT/Output)"
    )
    
    parser.add_argument(
        "-v", "--verbose",
        action="store_true",
        help="Show detailed output"
    )
    
    args = parser.parse_args()
    
    if args.output is None:
        args.output = args.input_folder / "Output"
    
    process(args.input_folder, args.output, args.verbose)

if __name__ == "__main__":
    main()
\`\`\`
`,

types: `# Part 8: Type Hints & Documentation

## Why Type Hints?

\`\`\`python
# ❌ UNCLEAR
def process(data, options):
    ...

# ✅ CLEAR
def process(data: pd.DataFrame, options: dict) -> pd.DataFrame:
    ...
\`\`\`

---

## Basic Types

\`\`\`python
def greet(name: str) -> str:
    return f"Hello, {name}!"

def calculate(x: int, y: float) -> float:
    return x * y

def is_valid(data: list) -> bool:
    return len(data) > 0
\`\`\`

---

## Collections

\`\`\`python
from typing import List, Dict, Optional, Tuple

def process_files(files: List[str]) -> Dict[str, int]:
    ...

def find_user(id: int) -> Optional[dict]:
    # Returns dict or None
    ...

def get_stats(data: list) -> Tuple[int, float]:
    return len(data), sum(data) / len(data)
\`\`\`

---

## Docstrings (Google Style)

\`\`\`python
def calculate_total(
    amounts: List[float],
    tax_rate: float = 0.1
) -> float:
    """Calculate total with tax.
    
    Args:
        amounts: List of item amounts.
        tax_rate: Tax rate as decimal. Default 0.1.
        
    Returns:
        Total amount including tax.
        
    Raises:
        ValueError: If amounts list is empty.
        
    Example:
        >>> calculate_total([100, 200], 0.1)
        330.0
    """
    if not amounts:
        raise ValueError("Amounts cannot be empty")
    subtotal = sum(amounts)
    return subtotal * (1 + tax_rate)
\`\`\`
`,

context: `# Part 9: Context Managers

## The Problem

\`\`\`python
# ❌ Resource might not be closed
file = open("data.txt")
content = file.read()
process(content)  # What if this fails?
file.close()      # Never runs!
\`\`\`

---

## The Solution

\`\`\`python
# ✅ File always closed
with open("data.txt") as file:
    content = file.read()
    process(content)
# Automatically closed!
\`\`\`

---

## Common Context Managers

\`\`\`python
# Files
with open("data.txt", "r") as f:
    content = f.read()

# Multiple files
with open("in.txt") as fin, open("out.txt", "w") as fout:
    fout.write(fin.read().upper())

# Excel Writer
with pd.ExcelWriter("output.xlsx") as writer:
    df1.to_excel(writer, sheet_name="Data")
    df2.to_excel(writer, sheet_name="Summary")
\`\`\`

---

## Custom Context Manager

\`\`\`python
from contextlib import contextmanager
import time

@contextmanager
def timer(name):
    start = time.time()
    yield
    elapsed = time.time() - start
    print(f"{name}: {elapsed:.2f}s")

# Usage
with timer("Processing"):
    process_data()
# Output: Processing: 2.35s
\`\`\`

---

## Temporary Directory

\`\`\`python
from contextlib import contextmanager
import tempfile
import shutil
from pathlib import Path

@contextmanager
def temp_directory():
    temp = Path(tempfile.mkdtemp())
    try:
        yield temp
    finally:
        shutil.rmtree(temp)

with temp_directory() as tmp:
    (tmp / "data.txt").write_text("temp data")
# Directory auto-deleted
\`\`\`
`,

production: `# Part 10: Production Template

## Complete Script Structure

\`\`\`python
#!/usr/bin/env python
"""
Data Processor
==============
Process and validate data files.
"""

import sys
import argparse
import logging
from pathlib import Path
from typing import List, Dict
import pandas as pd
from tqdm import tqdm

# ═══════════════════════════════════════
# CONFIGURATION
# ═══════════════════════════════════════

DEFAULT_CONFIG = {
    "tolerance": 0.01,
    "output_format": "xlsx"
}

# ═══════════════════════════════════════
# LOGGING
# ═══════════════════════════════════════

def setup_logging(verbose: bool = False) -> logging.Logger:
    level = logging.DEBUG if verbose else logging.INFO
    logging.basicConfig(
        level=level,
        format='%(asctime)s | %(levelname)s | %(message)s'
    )
    return logging.getLogger(__name__)

# ═══════════════════════════════════════
# CORE FUNCTIONS
# ═══════════════════════════════════════

def find_files(folder: Path) -> List[Path]:
    return list(folder.glob("*.xlsx")) + list(folder.glob("*.csv"))

def process_file(path: Path, logger: logging.Logger) -> Dict:
    logger.info(f"Processing: {path.name}")
    try:
        df = pd.read_excel(path) if path.suffix == ".xlsx" else pd.read_csv(path)
        # Process...
        return {"status": "success", "rows": len(df)}
    except Exception as e:
        logger.error(f"Failed: {path.name} - {e}")
        return {"status": "failed", "error": str(e)}

# ═══════════════════════════════════════
# MAIN
# ═══════════════════════════════════════

def main():
    parser = argparse.ArgumentParser(description="Process data files")
    parser.add_argument("input", type=Path, help="Input folder")
    parser.add_argument("-o", "--output", type=Path, default=None)
    parser.add_argument("-v", "--verbose", action="store_true")
    args = parser.parse_args()
    
    if args.output is None:
        args.output = args.input / "Output"
    
    logger = setup_logging(args.verbose)
    
    files = find_files(args.input)
    logger.info(f"Found {len(files)} files")
    
    results = []
    for file in tqdm(files, desc="Processing"):
        result = process_file(file, logger)
        results.append(result)
    
    success = sum(1 for r in results if r["status"] == "success")
    logger.info(f"Complete: {success}/{len(files)} succeeded")
    
    return 0 if success == len(files) else 1

if __name__ == "__main__":
    sys.exit(main())
\`\`\`

---

## Checklist Before Running

- [ ] Type hints on all functions
- [ ] Docstrings on public functions
- [ ] Error handling for all I/O
- [ ] Logging instead of print
- [ ] Configuration externalized
- [ ] CLI arguments for flexibility
- [ ] Progress bars for long operations
`,

cleancode: `# 🎨 The Art of Clean Code

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler

---

## Naming: The Foundation

\`\`\`python
# ❌ BAD
def f(l):
    r = 0
    for i in l:
        r += i
    return r

# ✅ GOOD
def calculate_total(amounts):
    total = 0
    for amount in amounts:
        total += amount
    return total
\`\`\`

---

## Functions: Small and Focused

\`\`\`python
# ❌ DOES TOO MUCH
def process_file(path):
    # Load (10 lines)
    # Validate (20 lines)
    # Transform (30 lines)
    # Save (10 lines)
    ...

# ✅ SINGLE RESPONSIBILITY
def load_data(path): ...
def validate_data(data): ...
def transform_data(data): ...
def save_data(data, path): ...

def process_file(path):
    data = load_data(path)
    validated = validate_data(data)
    transformed = transform_data(validated)
    save_data(transformed, output_path)
\`\`\`

---

## Self-Documenting Code

\`\`\`python
# ❌ NEEDS COMMENT
if x > 18 and x < 65 and s == 'A':
    ...

# ✅ SELF-DOCUMENTING
is_working_age = 18 < age < 65
is_active = status == 'A'

if is_working_age and is_active:
    ...
\`\`\`

---

## DRY: Don't Repeat Yourself

\`\`\`python
# ❌ REPEATED
name1 = name1.strip().lower().replace(" ", "_")
name2 = name2.strip().lower().replace(" ", "_")
name3 = name3.strip().lower().replace(" ", "_")

# ✅ FUNCTION
def normalize(name):
    return name.strip().lower().replace(" ", "_")

name1 = normalize(name1)
name2 = normalize(name2)
name3 = normalize(name3)
\`\`\`

---

## Guard Clauses

\`\`\`python
# ❌ NESTED
def process(data):
    if data:
        if data.is_valid:
            if check_permission():
                return do_work(data)

# ✅ FLAT
def process(data):
    if not data:
        return None
    if not data.is_valid:
        raise ValidationError()
    if not check_permission():
        raise PermissionError()
    return do_work(data)
\`\`\`

---

## The Clean Code Checklist

- [ ] Descriptive variable names
- [ ] Functions do ONE thing
- [ ] No magic numbers
- [ ] Comments explain WHY, not WHAT
- [ ] No commented-out code
- [ ] Error messages are helpful
- [ ] Code is formatted consistently

---

> "Clean code always looks like it was written by someone who cares." — Robert C. Martin
`

};
