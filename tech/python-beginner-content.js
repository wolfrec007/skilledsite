// Python Beginner Tutorials Content
const dollar = '$';
window.beginnerContent = {

    setup: `# 🚀 Module 1: Setup & First Steps

Welcome to Python! Let's get you set up and writing code in minutes.

---

## Installing Python

### Windows
1. Go to [python.org/downloads](https://python.org/downloads)
2. Download Python 3.11+ (latest version)
3. **✅ Check "Add Python to PATH"** during installation (THIS IS CRITICAL!)
4. Click "Install Now"
5. After installation, click "Disable path length limit" if prompted

### Verify Installation
Open Command Prompt (Win+R, type \`cmd\`, press Enter) and type:
\`\`\`bash
python --version
\`\`\`

You should see: \`Python 3.11.x\` or similar

**Troubleshooting:**
- If you see "command not found", Python isn't in your PATH. Reinstall and check the PATH option.
- Try \`python3 --version\` if \`python\` doesn't work
- Restart your terminal after installation

---

## Choosing a Code Editor

**For Beginners:**
- **VS Code** (Recommended) - Free, lightweight, great Python support
  - Download from [code.visualstudio.com](https://code.visualstudio.com)
  - Install Python extension from Extensions panel
- **PyCharm Community** - Full-featured Python IDE, more powerful but heavier

**Quick Start:**
VS Code is best for learning. After installing, create a new file and save it as \`hello.py\`

---

## Your First Python Program

Create a file called \`hello.py\`:

\`\`\`python
# This is a comment - Python ignores it
# Comments explain code to humans

print("Hello, World!")
print("Welcome to Python!")
\`\`\`

**Run it:**
- In VS Code: Press F5 or click Run button
- In terminal: \`python hello.py\`

**Expected Output:**
\`\`\`
Hello, World!
Welcome to Python!
\`\`\`

---

## Understanding print()

The \`print()\` function displays text to the console:

\`\`\`python
print("I can print text")
print(42)  # Numbers work too
print("Today is", "awesome")  # Multiple items
print(2 + 3)  # Even math expressions!
\`\`\`

**Output:**
\`\`\`
I can print text
42
Today is awesome
5
\`\`\`

---

## 🎯 Challenge: Build a Simple Calculator

\`\`\`python
# My first calculator
print("=== PYTHON CALCULATOR ===")
print()  # Empty line

print("Addition:", 10 + 5)
print("Subtraction:", 10 - 5)
print("Multiplication:", 10 * 5)
print("Division:", 10 / 5)
print("Power:", 2 ** 3)  # 2 to the power of 3

print()
print("Python is doing the math for us!")
\`\`\`

---

## Comments: Explaining Your Code

\`\`\`python
# Single-line comment starts with #
# Use comments to explain WHY you did something

print("This runs")  # Comment after code is OK too

# Multi-line comment approach:
# Line 1 of explanation
# Line 2 of explanation
# Line 3 of explanation

"""
Alternative multi-line comment
using triple quotes
(technically a string, but ignored if not assigned)
"""
\`\`\`

---

## Common Beginner Mistakes

**Mistake 1: Forgetting quotes**
\`\`\`python
print(Hello)  # ❌ Error - NameError
print("Hello")  # ✅ Correct
\`\`\`

**Mistake 2: Mixing quote types**
\`\`\`python
print("Hello')  # ❌ Syntax Error
print("Hello")  # ✅ Correct
print('Hello')  # ✅ Also correct
\`\`\`

**Mistake 3: Typos in function names**
\`\`\`python
Print("Hello")  # ❌ Python is case-sensitive
print("Hello")  # ✅ Correct
\`\`\`

---

## 💡 Key Takeaways

- ✅ Python is installed via python.org
- ✅ Always check "Add to PATH" during installation
- ✅ VS Code is the best editor for beginners
- ✅ \`print()\` displays output to console
- ✅ Comments start with \`#\` and explain your code
- ✅ Python does math automatically: \`+\`, \`-\`, \`*\`, \`/\`, \`**\`
- ✅ Python is case-sensitive: \`Print\` ≠ \`print\`

**Next Step:** Master variables and data types! →
`,

    variables: `# 📦 Module 2: Variables & Data Types

Variables are containers that store data. Think of them as labeled boxes holding values.

---

## Creating Variables

In Python, creating a variable is super simple - just use the \`=\` sign:

\`\`\`python
name = "Alice"
age = 25
height = 5.6
is_student = True

print(name)   # Alice
print(age)    # 25
print(height) # 5.6
print(is_student) # True
\`\`\`

**No declaration needed!** Unlike Java or C++, you don't write \`int age = 25\`. Python figures out the type automatically!

---

## Variable Naming Rules

**✅ Valid Names:**
\`\`\`python
user_name = "Bob"      # Use snake_case
age2 = 30              # Numbers OK (not at start)
_private = "secret"    # Underscore OK
CONSTANT = 100         # ALL_CAPS for constants
\`\`\`

**❌ Invalid Names:**
\`\`\`python
2name = "Bob"      # Can't start with number
user-name = "Bob"  # No hyphens
for = 10           # Can't use keywords
\`\`\`

**Best Practices:**
- Use descriptive names: \`user_age\` not \`ua\`
- Use \`snake_case\`: \`total_count\` not \`totalCount\`
- Be consistent throughout your code

---

## The 4 Basic Data Types

| Type | Example | Description | Common Uses |
|------|---------|-------------|-------------|
| \`str\` | \`"Hello"\` | Text/strings | Names, messages, text data |
| \`int\` | \`42\` | Whole numbers | Counts, ages, quantities |
| \`float\` | \`3.14\` | Decimal numbers | Prices, measurements, percentages |
| \`bool\` | \`True\` or \`False\` | Yes/No values | Flags, conditions, states |

### Checking Types

Use the \`type()\` function to see what type a variable is:

\`\`\`python
print(type("Hello"))   # <class 'str'>
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type(True))      # <class 'bool'>
\`\`\`

---

## Working with Strings

Strings can use single or double quotes:

\`\`\`python
name1 = "Alice"  # Double quotes
name2 = 'Bob'    # Single quotes - same thing!

# Use quotes inside strings
message1 = "She said 'Hello'"      # Single inside double
message2 = 'He said "Goodbye"'     # Double inside single

# Multi-line strings
poem = """Roses are red
Violets are blue
Python is awesome
And so are you!"""
\`\`\`

---

## Working with Numbers

### Integers (whole numbers)
\`\`\`python
count = 10
temperature = -5
population = 1000000
\`\`\`

### Floats (decimals)
\`\`\`python
price = 19.99
percentage = 0.75
pi = 3.14159
\`\`\`

### Integer vs Float Math
\`\`\`python
print(5 + 3)    # 8 (int)
print(5.0 + 3)  # 8.0 (float)
print(10 / 3)   # 3.333... (always float)
print(10 // 3)  # 3 (integer division)
\`\`\`

---

## Type Conversion

Sometimes you need to convert between types:

\`\`\`python
# String to number
age_text = "25"
age_number = int(age_text)  # Convert to integer
print(age_number + 5)  # 30

# Number to string
count = 100
count_text = str(count)
print("Count: " + count_text)  # "Count: 100"

# String to float
price_text = "19.99"
price = float(price_text)
print(price * 2)  # 39.98
\`\`\`

**⚠️ Be Careful:**
\`\`\`python
int("hello")  # ❌ ValueError - can't convert text to number
int("42")     # ✅ Works fine
int("3.14")   # ❌ ValueError - use float() instead
float("3.14") # ✅ Works fine
\`\`\`

---

## Boolean Values

Booleans represent True or False:

\`\`\`python
is_raining = True
is_sunny = False
has_umbrella = True

# Comparisons give booleans
print(5 > 3)   # True
print(10 < 2)  # False
print(5 == 5)  # True
\`\`\`

---

## Multiple Assignment

Assign multiple variables at once:

\`\`\`python
# Assign same value to multiple variables
x = y = z = 0

# Assign different values
name, age, city = "Alice", 25, "NYC"
print(name)  # Alice
print(age)   # 25
print(city)  # NYC
\`\`\`

---

## 🎯 Challenge: Personal Info Card

Create variables for your info and display them nicely:

\`\`\`python
# Your information
first_name = "John"
last_name = "Doe"
age = 20
city = "New York"
is_student = True
gpa = 3.8

print("=" * 30)
print("PERSONAL INFORMATION")
print("=" * 30)
print("Name:", first_name, last_name)
print("Age:", age)
print("City:", city)
print("Student:", is_student)
print("GPA:", gpa)
print("=" * 30)
\`\`\`

**Expected Output:**
\`\`\`
==============================
PERSONAL INFORMATION
==============================
Name: John Doe
Age: 20
City: New York
Student: True
GPA: 3.8
==============================
\`\`\`

---

## 💡 Key Takeaways

- ✅ Variables store data with \`name = value\`
- ✅ Python figures out types automatically (dynamic typing)
- ✅ 4 basic types: \`str\`, \`int\`, \`float\`, \`bool\`
- ✅ Use \`type()\` to check variable type
- ✅ Use \`int()\`, \`float()\`, \`str()\` to convert types
- ✅ Variable names use \`snake_case\`
- ✅ Can't start names with numbers or use keywords

**Next:** Learn how to get input from users! →
`,

    io: `# 💬 Module 3: Input & Output

Make programs interactive with user input.

---

## Getting User Input

\`\`\`python
name = input("What is your name? ")
print("Hello,", name)
\`\`\`

**⚠️ input() always returns a string!**

---

## Converting to Numbers

\`\`\`python
# String to integer
age = int(input("Enter age: "))

# String to decimal
price = float(input("Enter price: "))
\`\`\`

---

## f-Strings: Modern Formatting

\`\`\`python
name = "Alice"
age = 25

# ✅ f-strings are the best way!
print(f"My name is {name} and I am {age}")

# Format decimals
price = 19.999
print(f"Price: \${dollar}{price:.2f}")  # Price: $20.00
\`\`\`

---

## 🎯 Challenge: Interactive Quiz

\`\`\`python
print("🎮 PYTHON QUIZ 🎮")
player = input("Enter your name: ")
print(f"Welcome, {player}!")

answer = input("What is 5 + 3? ")
if answer == "8":
    print("✅ Correct!")
else:
    print("❌ Wrong!")
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`input()\` gets text from user
- ✅ \`int()\` and \`float()\` convert strings
- ✅ f-strings: \`f"Hello {name}"\`
`,

    operators: `# ➕ Module 4: Operators

Perform calculations and comparisons.

---

## Arithmetic Operators

\`\`\`python
a, b = 10, 3

print(a + b)   # 13   Add
print(a - b)   # 7    Subtract
print(a * b)   # 30   Multiply
print(a / b)   # 3.33 Divide
print(a // b)  # 3    Floor divide
print(a % b)   # 1    Remainder
print(a ** b)  # 1000 Power
\`\`\`

---

## Comparison Operators

Returns \`True\` or \`False\`:

\`\`\`python
x, y = 10, 5

print(x == y)  # False (equal)
print(x != y)  # True  (not equal)
print(x > y)   # True
print(x < y)   # False
print(x >= y)  # True
\`\`\`

---

## Logical Operators

\`\`\`python
age = 25
has_id = True

print(age >= 18 and has_id)  # True (both true)
print(age < 18 or has_id)    # True (one true)
print(not has_id)            # False
\`\`\`

---

## 🎯 Challenge: Tip Calculator

\`\`\`python
bill = float(input("Bill amount: $"))
tip_pct = float(input("Tip %: "))

tip = bill * (tip_pct / 100)
total = bill + tip

print(f"Tip: ${dollar}{tip: .2f}")
print(f"Total: ${dollar}{total:.2f}")
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`//\` = floor division, \`%\` = remainder
- ✅ \`**\` = power (2**3 = 8)
- ✅ \`and\`, \`or\`, \`not\` combine conditions
`,

    conditionals: `# 🔀 Module 5: Conditionals

Make decisions based on conditions.

---

## if Statement

\`\`\`python
age = 18

if age >= 18:
    print("You can vote!")
\`\`\`

---

## if-else

\`\`\`python
age = 15

if age >= 18:
    print("You can vote!")
else:
    print("Too young")
\`\`\`

---

## if-elif-else

\`\`\`python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Grade: {grade}")
\`\`\`

---

## 🎯 Challenge: Grade Calculator

\`\`\`python
score = float(input("Enter score: "))

if score >= 90:
    print("Grade: A 🌟")
elif score >= 80:
    print("Grade: B 👍")
elif score >= 70:
    print("Grade: C 📚")
elif score >= 60:
    print("Grade: D 📝")
else:
    print("Grade: F 😟")
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`if condition:\` runs if True
- ✅ \`elif\` = else if
- ✅ Indentation (4 spaces) required!
`,

    loops: `# 🔄 Module 6: Loops

Repeat code multiple times.

---

## for Loop

\`\`\`python
# Loop through a range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\`

---

## while Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

---

## break and continue

\`\`\`python
# break - exit loop early
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue - skip to next
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4
\`\`\`

---

## 🎯 Challenge: Number Guessing Game

\`\`\`python
import random

secret = random.randint(1, 10)
attempts = 0

print("Guess 1-10!")

while True:
    guess = int(input("Your guess: "))
    attempts += 1
    
    if guess == secret:
        print(f"🎉 Correct! {attempts} tries")
        break
    elif guess < secret:
        print("Too low!")
    else:
        print("Too high!")
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`for\` loops iterate over sequences
- ✅ \`while\` runs until condition is False
- ✅ \`break\` exits, \`continue\` skips
`,

    lists: `# 📋 Module 7: Lists

Store multiple items in one variable.

---

## Creating Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
\`\`\`

---

## Accessing Items

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])   # apple (first)
print(fruits[-1])  # cherry (last)
print(fruits[1:3]) # ['banana', 'cherry']
\`\`\`

---

## List Methods

\`\`\`python
fruits = ["apple", "banana"]

fruits.append("cherry")     # Add to end
fruits.insert(0, "mango")   # Insert at index
fruits.remove("banana")     # Remove by value
popped = fruits.pop()       # Remove last
print(len(fruits))          # Length
\`\`\`

---

## 🎯 Challenge: Todo List

\`\`\`python
todos = []

while True:
    print("\\n📝 TODO LIST")
    print("1. Add  2. View  3. Remove  4. Quit")
    
    choice = input("Choice: ")
    
    if choice == "1":
        task = input("Task: ")
        todos.append(task)
    elif choice == "2":
        for i, t in enumerate(todos, 1):
            print(f"{i}. {t}")
    elif choice == "3":
        idx = int(input("# to remove: ")) - 1
        todos.pop(idx)
    elif choice == "4":
        break
\`\`\`

---

## 💡 Key Takeaways

- ✅ Lists: \`[a, b, c]\`
- ✅ Index: \`[0]\`, Slice: \`[1:3]\`
- ✅ Methods: \`.append()\`, \`.pop()\`
`,

    dicts: `# 📚 Module 8: Dictionaries

Store key-value pairs.

---

## Creating Dictionaries

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "NYC"
}

print(person["name"])  # Alice
\`\`\`

---

## Dictionary Operations

\`\`\`python
person = {"name": "Alice", "age": 25}

# Add/Update
person["email"] = "alice@email.com"

# Get with default
phone = person.get("phone", "N/A")

# Loop through
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

---

## 🎯 Challenge: Contact Book

\`\`\`python
contacts = {}

while True:
    print("\\n📞 CONTACTS")
    print("1. Add  2. View  3. Search  4. Quit")
    
    choice = input("Choice: ")
    
    if choice == "1":
        name = input("Name: ")
        phone = input("Phone: ")
        contacts[name] = phone
    elif choice == "2":
        for n, p in contacts.items():
            print(f"{n}: {p}")
    elif choice == "3":
        name = input("Name: ")
        print(contacts.get(name, "Not found"))
    elif choice == "4":
        break
\`\`\`

---

## 💡 Key Takeaways

- ✅ Dict: \`{"key": "value"}\`
- ✅ Access: \`dict["key"]\` or \`.get()\`
- ✅ \`.items()\` loops key-value pairs
`,

    functions: `# 🔧 Module 9: Functions

Reusable blocks of code.

---

## Defining Functions

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Hello, Alice!
\`\`\`

---

## Return Values

\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
\`\`\`

---

## Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")        # Hello, Alice!
greet("Bob", "Hi")    # Hi, Bob!
\`\`\`

---

## 🎯 Challenge: Utility Functions

\`\`\`python
def calc_tip(bill, pct=15):
    return bill * pct / 100

def is_even(n):
    return n % 2 == 0

def c_to_f(c):
    return (c * 9/5) + 32

print(calc_tip(50, 20))  # 10.0
print(is_even(4))        # True
print(c_to_f(0))         # 32.0
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`def func(params):\`
- ✅ \`return\` sends value back
- ✅ Default: \`param=value\`
`,

    strings: `# 🔤 Module 10: String Methods

Manipulate text like a pro.

---

## Common Methods

\`\`\`python
text = "  Hello, World!  "

print(text.lower())   # "  hello, world!  "
print(text.upper())   # "  HELLO, WORLD!  "
print(text.strip())   # "Hello, World!"
print(text.replace("World", "Python"))
\`\`\`

---

## Split and Join

\`\`\`python
# Split into list
csv = "a,b,c"
items = csv.split(",")  # ['a', 'b', 'c']

# Join into string
words = ["Hello", "World"]
result = " ".join(words)  # "Hello World"
\`\`\`

---

## 🎯 Challenge: Text Analyzer

\`\`\`python
text = input("Enter text: ")

words = text.split()
chars = len(text.replace(" ", ""))

print(f"Words: {len(words)}")
print(f"Chars: {chars}")
print(f"Upper: {text.upper()}")
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`.lower()\`, \`.upper()\`, \`.strip()\`
- ✅ \`.split()\` breaks, \`.join()\` combines
`,

    files: `# 📁 Module 11: File I/O

Read and write files.

---

## Reading Files

\`\`\`python
with open("data.txt", "r") as f:
    content = f.read()
    print(content)
\`\`\`

---

## Writing Files

\`\`\`python
# Write (overwrites)
with open("out.txt", "w") as f:
    f.write("Hello!")

# Append
with open("out.txt", "a") as f:
    f.write("\\nMore text")
\`\`\`

---

## 🎯 Challenge: Notes App

\`\`\`python
def save(note):
    with open("notes.txt", "a") as f:
        f.write(note + "\\n")

def view():
    try:
        with open("notes.txt") as f:
            print(f.read())
    except:
        print("No notes yet!")

while True:
    print("\\n1. Add  2. View  3. Quit")
    c = input("Choice: ")
    if c == "1":
        save(input("Note: "))
    elif c == "2":
        view()
    else:
        break
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`with open()\` auto-closes file
- ✅ "r" read, "w" write, "a" append
`,

    errorbasics: `# 🛡️ Module 12: Error Handling

Handle errors gracefully.

---

## try-except

\`\`\`python
try:
    num = int(input("Number: "))
    result = 10 / num
except ValueError:
    print("Not a number!")
except ZeroDivisionError:
    print("Can't divide by 0!")
\`\`\`

---

## Common Errors

| Error | Cause |
|-------|-------|
| ValueError | Wrong type |
| ZeroDivisionError | /0 |
| FileNotFoundError | Missing file |
| IndexError | Bad list index |

---

## 🎯 Challenge: Safe Calculator

\`\`\`python
try:
    a = float(input("A: "))
    b = float(input("B: "))
    op = input("Op (+,-,*,/): ")
    
    if op == "+": print(a + b)
    elif op == "-": print(a - b)
    elif op == "*": print(a * b)
    elif op == "/": print(a / b)
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Can't /0!")
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`try:\` risky code
- ✅ \`except Error:\` handle it
`,

    modules: `# 📦 Module 13: Using Modules

Import and use Python libraries.

---

## Importing

\`\`\`python
import math
print(math.sqrt(16))  # 4.0

from math import sqrt, pi
print(sqrt(16))  # 4.0

import random as rnd
print(rnd.randint(1, 10))
\`\`\`

---

## Useful Modules

| Module | Purpose |
|--------|---------|
| math | Math functions |
| random | Random numbers |
| datetime | Dates/times |
| os | System operations |
| json | JSON data |

---

## 🎯 Challenge: Date Calc

\`\`\`python
from datetime import datetime, timedelta

today = datetime.now()
print(f"Today: {today:%Y-%m-%d}")

days = int(input("Days to add: "))
future = today + timedelta(days=days)
print(f"Future: {future:%Y-%m-%d}")
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`import module\`
- ✅ \`from module import func\`
- ✅ Use built-ins first!
`,

    listcomp: `# ⚡ Module 14: List Comprehensions

Create lists in one line!

---

## Basic Syntax

\`\`\`python
# Traditional
squares = []
for x in range(5):
    squares.append(x ** 2)

# ✅ Comprehension!
squares = [x ** 2 for x in range(5)]
\`\`\`

---

## With Filter

\`\`\`python
# Only evens
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]

# Transform
words = ["Hi", "THERE"]
lower = [w.lower() for w in words]
# ["hi", "there"]
\`\`\`

---

## 🎯 Challenge

\`\`\`python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Squares of evens
result = [x**2 for x in nums if x % 2 == 0]
print(result)  # [4, 16, 36, 64, 100]
\`\`\`

---

## 💡 Key Takeaways

- ✅ \`[expr for x in list]\`
- ✅ Add \`if\` to filter
- ✅ Cleaner than loops!
`,

    project: `# 🎯 Module 15: Final Project

Build an Expense Tracker!

---

## The Code

\`\`\`python
expenses = []

def add():
    amt = float(input("Amount: $"))
    cat = input("Category: ")
    expenses.append({"amt": amt, "cat": cat})
    print("✅ Added!")

def view():
    total = 0
    for e in expenses:
                print(f"{e['amt']:.2f} - {e['cat']}")
total += e['amt']
print(f"Total: ${dollar}{total:.2f}")

while True:
    print("\\n💰 EXPENSES")
print("1. Add  2. View  3. Quit")
c = input("Choice: ")

if c == "1": add()
    elif c == "2": view()
    else: break
\`\`\`

---

## 🎉 Congratulations!

You completed Python Basics!

### You Learned:
- ✅ Variables & Types
- ✅ Input/Output
- ✅ Operators & Conditionals
- ✅ Loops & Lists
- ✅ Dicts & Functions
- ✅ Files & Errors
- ✅ Modules & Comprehensions

**Next:** Try the Intermediate section! 🚀
`


};

// ========================================
// MERGE BEGINNER CONTENT INTO MAIN TUTORIAL CONTENT
// ========================================
// Initialize tutorialContent if it doesn't exist yet
if (!window.tutorialContent) {
    window.tutorialContent = {};
}

// Merge beginner content
Object.assign(window.tutorialContent, window.beginnerContent);

// Log for debugging
console.log('Beginner content loaded. Available modules:', Object.keys(window.beginnerContent));
console.log('All tutorial content:', Object.keys(window.tutorialContent));

// ========================================
// COMPREHENSIVE BEGINNER CODE EXPLANATIONS
// ========================================
window.beginnerExplanations = {
    // Setup & Installation (5 explanations)
    'python --version': `
        <p><strong>Why check version?</strong> Different Python versions have different features. Python 3.6+ is recommended for modern development.</p>
        <p><strong>Common output:</strong> <code>Python 3.11.5</code> - The first number (3) is the major version, second (11) is minor, third (5) is patch.</p>
        <p><strong>Troubleshooting:</strong> If command not found, Python isn't in your PATH. Reinstall and check "Add to PATH".</p>
    `,

    'print("Hello, World!")': `
        <p><strong>print() function:</strong> Displays output to the console. One of the most used functions in Python!</p>
        <p><strong>Quotes:</strong> Can use single <code>'text'</code> or double <code>"text"</code> quotes - both work the same.</p>
        <p><strong>Why "Hello, World!"?</strong> Traditional first program dating back to 1972. It's simple but proves your setup works!</p>
    `,

    '# This is a comment': `
        <p><strong>Comments:</strong> Text that Python ignores. Used to explain code to humans.</p>
        <p><strong>Best practice:</strong> Explain <em>why</em> you did something, not <em>what</em> (code shows what).</p>
        <p><strong>Keyboard shortcut:</strong> In most editors, press <code>Ctrl+/</code> to toggle comments.</p>
    `,

    // Variables & Data Types (10 explanations)
    'name = "Alice"': `
        <p><strong>Variable assignment:</strong> The <code>=</code> operator stores a value in a variable name.</p>
        <p><strong>Variable names:</strong> Can use letters, numbers, underscores. Must start with letter or underscore.</p>
        <p><strong>Naming convention:</strong> Use <code>snake_case</code> for variables: <code>user_name</code>, <code>total_count</code></p>
        <p><strong>Dynamic typing:</strong> Unlike Java/C++, you don't declare the type - Python figures it out!</p>
    `,

    'type()': `
        <p><strong>type() function:</strong> Returns the data type of any value or variable.</p>
        <p><strong>Why use it:</strong> Essential for debugging. When code behaves unexpectedly, check your types!</p>
        <p><strong>Example:</strong> <code>type(42)</code> returns <code>&lt;class 'int'&gt;</code></p>
    `,

    'int()': `
        <p><strong>Type conversion:</strong> Converts values to integer (whole number).</p>
        <p><strong>Common use:</strong> <code>age = int(input("Age: "))</code> - input() returns string, int() converts it.</p>
        <p><strong>Error handling:</strong> Throws <code>ValueError</code> if conversion fails (e.g., <code>int("hello")</code>)</p>
    `,

    'float()': `
        <p><strong>Float:</strong> Decimal numbers like 3.14, 2.5, or 100.0</p>
        <p><strong>Precision:</strong> Floats are approximate! <code>0.1 + 0.2</code> might not exactly equal <code>0.3</code> due to binary representation.</p>
        <p><strong>When to use:</strong> Money calculations, measurements, scientific data.</p>
    `,

    // Input & Output (8 explanations)
    'input()': `
        <p><strong>input() function:</strong> Pauses program and waits for user to type something.</p>
        <p><strong>Always returns string:</strong> Even if user types "5", you get <code>"5"</code> (text), not <code>5</code> (number).</p>
        <p><strong>Prompt message:</strong> <code>input("Your name: ")</code> - The text shows before cursor.</p>
    `,

    'f"Hello {name}"': `
        <p><strong>f-strings:</strong> The modern, best way to format strings in Python (3.6+).</p>
        <p><strong>Syntax:</strong> Put <code>f</code> before quote, use <code>{variable}</code> to insert values.</p>
        <p><strong>Why better:</strong> Cleaner than <code>+</code> concatenation or <code>%</code> formatting. Can include expressions: <code>f"{2+2}"</code></p>
        <p><strong>Formatting:</strong> <code>f"{price:.2f}"</code> rounds to 2 decimal places.</p>
    `,

    // Operators (12 explanations)
    'a // b': `
        <p><strong>Floor division:</strong> Divides and rounds DOWN to nearest whole number.</p>
        <p><strong>Example:</strong> <code>10 // 3 = 3</code> (not 3.33...)</p>
        <p><strong>Use case:</strong> "How many full weeks in 100 days?" → <code>100 // 7 = 14</code></p>
    `,

    'a % b': `
        <p><strong>Modulo:</strong> Returns the <em>remainder</em> after division.</p>
        <p><strong>Example:</strong> <code>10 % 3 = 1</code> (10÷3 = 3 remainder 1)</p>
        <p><strong>Common use:</strong> Check if number is even: <code>x % 2 == 0</code></p>
        <p><strong>Pro tip:</strong> <code>x % 10</code> gets last digit of x!</p>
    `,

    'a ** b': `
        <p><strong>Exponentiation:</strong> Raises a to the power of b.</p>
        <p><strong>Examples:</strong> <code>2 ** 3 = 8</code>, <code>5 ** 2 = 25</code>, <code>10 ** 3 = 1000</code></p>
        <p><strong>Square root:</strong> <code>x ** 0.5</code> is same as √x!</p>
    `,

    'x == y': `
        <p><strong>Equality comparison:</strong> Double equals checks if values are equal, returns True/False.</p>
        <p><strong>Common mistake:</strong> Don't confuse <code>==</code> (compare) with <code>=</code> (assign)!</p>
        <p><strong>Works on:</strong> Numbers, strings, booleans, lists, etc.</p>
    `,

    'and': `
        <p><strong>Logical AND:</strong> Both conditions must be True for result to be True.</p>
        <p><strong>Truth table:</strong> True and True = True. Everything else = False.</p>
        <p><strong>Real example:</strong> <code>age >= 18 and has_license</code> - need both to drive!</p>
    `,

    'or': `
        <p><strong>Logical OR:</strong> At least ONE condition must be True.</p>
        <p><strong>Real example:</strong> <code>weekend or holiday</code> - either one means you're off work!</p>
    `,

    'not': `
        <p><strong>Logical NOT:</strong> Flips True to False and vice versa.</p>
        <p><strong>Examples:</strong> <code>not True = False</code>, <code>not False = True</code></p>
        <p><strong>Common use:</strong> <code>not logged_in</code> instead of <code>logged_in == False</code></p>
    `,

    // Conditionals (8 explanations)
    'if age >= 18:': `
        <p><strong>if statement:</strong> Executes code only if condition is True.</p>
        <p><strong>Indentation:</strong> The 4 spaces before <code>print()</code> are REQUIRED in Python!</p>
        <p><strong>Colon required:</strong> Don't forget the <code>:</code> at the end of the if line.</p>
    `,

    'elif': `
        <p><strong>elif:</strong> Short for "else if". Checks another condition if previous ones were False.</p>
        <p><strong>Order matters:</strong> Python checks from top to bottom, stops at first True.</p>
        <p><strong>Multiple elif:</strong> You can have as many as needed!</p>
    `,

    'else:': `
        <p><strong>else:</strong> The "catch-all" - runs if all previous conditions were False.</p>
        <p><strong>No condition:</strong> Notice <code>else:</code> has no condition - it's the default case.</p>
        <p><strong>Optional:</strong> You don't need else if you don't want a default action.</p>
    `,

    // Loops (10 explanations)
    'for i in range(5):': `
        <p><strong>for loop:</strong> Executes code a specific number of times.</p>
        <p><strong>range(5):</strong> Generates numbers 0, 1, 2, 3, 4 (starts at 0, stops BEFORE 5).</p>
        <p><strong>Variable i:</strong> Common convention for "index" or "iterator". You can name it anything!</p>
        <p><strong>Indentation:</strong> Code inside loop must be indented 4 spaces.</p>
    `,

    'range(start, stop, step)': `
        <p><strong>range() variations:</strong></p>
        <p>• <code>range(5)</code> → 0,1,2,3,4</p>
        <p>• <code>range(1, 5)</code> → 1,2,3,4</p>
        <p>• <code>range(0, 10, 2)</code> → 0,2,4,6,8</p>
        <p><strong>Remember:</strong> ALWAYS stops BEFORE the stop number!</p>
    `,

    'while count < 5:': `
        <p><strong>while loop:</strong> Repeats as long as condition is True.</p>
        <p><strong>Danger:</strong> If condition never becomes False, loop runs forever (infinite loop)!</p>
        <p><strong>Always update:</strong> Make sure variable in condition changes inside loop.</p>
    `,

    'break': `
        <p><strong>break:</strong> Immediately exits the loop, no matter what.</p>
        <p><strong>Use case:</strong> "Keep asking until user types 'quit'"</p>
        <p><strong>Only affects:</strong> The innermost loop it's in.</p>
    `,

    'continue': `
        <p><strong>continue:</strong> Skips rest of current iteration, jumps to next one.</p>
        <p><strong>Example:</strong> "Print all numbers 0-9 except 5"</p>
        <p><strong>Difference from break:</strong> continue stays in loop, break exits completely.</p>
    `,

    // Lists (12 explanations)
    'fruits = ["apple", "banana"]': `
        <p><strong>Lists:</strong> Ordered collection of items. Can hold any type of data.</p>
        <p><strong>Square brackets:</strong> [ ] define a list.</p>
        <p><strong>Mutable:</strong> You can change, add, remove items after creating the list.</p>
        <p><strong>Mixed types:</strong> Can mix types: <code>[1, "text", True, 3.14]</code></p>
    `,

    'fruits[0]': `
        <p><strong>Indexing:</strong> Access items by position (index).</p>
        <p><strong>Zero-based:</strong> First item is [0], second is [1], etc.</p>
        <p><strong>Negative indices:</strong> [-1] is last item, [-2] is second-to-last!</p>
    `,

    'fruits[1:3]': `
        <p><strong>Slicing:</strong> Get a portion of the list.</p>
        <p><strong>Syntax:</strong> [start:stop] - includes start, excludes stop.</p>
        <p><strong>Examples:</strong></p>
        <p>• <code>[1:3]</code> → items 1 and 2</p>
        <p>• <code>[:3]</code> → first 3 items</p>
        <p>• <code>[2:]</code> → from item 2 to end</p>
    `,

    '.append()': `
        <p><strong>.append():</strong> Adds item to END of list.</p>
        <p><strong>In-place:</strong> Modifies the original list, doesn't create new one.</p>
        <p><strong>One at a time:</strong> Only adds one item. For multiple, use <code>.extend()</code></p>
    `,

    '.pop()': `
        <p><strong>.pop():</strong> Removes and RETURNS last item (or item at index).</p>
        <p><strong>Examples:</strong></p>
        <p>• <code>fruits.pop()</code> → removes last</p>
        <p>• <code>fruits.pop(0)</code> → removes first</p>
        <p><strong>Returns value:</strong> <code>x = fruits.pop()</code> stores removed item in x!</p>
    `,

    'len()': `
        <p><strong>len() function:</strong> Returns number of items in a collection.</p>
        <p><strong>Works on:</strong> Lists, strings, dictionaries, tuples, sets.</p>
        <p><strong>Common use:</strong> <code>for i in range(len(mylist)):</code></p>
    `,

    // Dictionaries (8 explanations)
    'person = {"name": "Alice"}': `
        <p><strong>Dictionaries:</strong> Store data as key-value pairs.</p>
        <p><strong>Curly braces:</strong> { } define a dictionary.</p>
        <p><strong>Keys:</strong> Usually strings, must be unique.</p>
        <p><strong>Values:</strong> Can be any type - numbers, strings, lists, even other dictionaries!</p>
    `,

    'person["name"]': `
        <p><strong>Dictionary access:</strong> Use [key] to get value.</p>
        <p><strong>KeyError:</strong> If key doesn't exist, Python raises error. Use <code>.get()</code> for safety!</p>
    `,

    '.get()': `
        <p><strong>.get() method:</strong> Safely retrieves value, returns None (or default) if key missing.</p>
        <p><strong>Syntax:</strong> <code>dict.get("key", "default")</code></p>
        <p><strong>Better than []:</strong> Won't crash your program if key doesn't exist!</p>
    `,

    '.items()': `
        <p><strong>.items() method:</strong> Returns all key-value pairs for looping.</p>
        <p><strong>Usage:</strong> <code>for key, value in dict.items():</code></p>
        <p><strong>Unpacking:</strong> Python automatically splits each pair into key and value variables.</p>
    `,

    // Functions (8 explanations)
    'def greet(name):': `
        <p><strong>Function definition:</strong> Creates reusable block of code.</p>
        <p><strong>def keyword:</strong> Short for "define".</p>
        <p><strong>Parameters:</strong> Variables in parentheses - placeholders for values you'll pass in.</p>
        <p><strong>Colon & indentation:</strong> Required, just like if/for statements!</p>
    `,

    'return': `
        <p><strong>return statement:</strong> Sends value back to whoever called the function.</p>
        <p><strong>Ends function:</strong> Code after return doesn't run!</p>
        <p><strong>No return:</strong> Function returns <code>None</code> by default.</p>
    `,

    'def greet(name="World"):': `
        <p><strong>Default parameters:</strong> Provide fallback value if argument not given.</p>
        <p><strong>Examples:</strong></p>
        <p>• <code>greet()</code> → uses "World"</p>
        <p>• <code>greet("Alice")</code> → uses "Alice"</p>
        <p><strong>Order:</strong> Required params first, then defaults!</p>
    `,

    // String Methods (6 explanations)
    '.lower()': `
        <p><strong>.lower() method:</strong> Converts ALL letters to lowercase.</p>
        <p><strong>Use case:</strong> Case-insensitive comparison: <code>user_input.lower() == "yes"</code></p>
        <p><strong>Returns new string:</strong> Doesn't modify original!</p>
    `,

    '.strip()': `
        <p><strong>.strip() method:</strong> Removes whitespace from both ends.</p>
        <p><strong>Whitespace:</strong> Spaces, tabs, newlines.</p>
        <p><strong>Essential for:</strong> User input! <code>" yes ".strip() == "yes"</code></p>
    `,

    '.split()': `
        <p><strong>.split() method:</strong> Breaks string into list at separator.</p>
        <p><strong>Default:</strong> Splits on spaces: <code>"a b c".split() = ["a", "b", "c"]</code></p>
        <p><strong>CSV parsing:</strong> <code>"a,b,c".split(",") = ["a", "b", "c"]</code></p>
    `,

    '" ".join()': `
        <p><strong>.join() method:</strong> Combines list into string with separator.</p>
        <p><strong>Syntax:</strong> <code>separator.join(list)</code></p>
        <p><strong>Example:</strong> <code>"-".join(["a", "b"]) = "a-b"</code></p>
        <p><strong>Opposite of:</strong> .split()</p>
    `,

    // File I/O (5 explanations)
    'with open() as f:': `
        <p><strong>with statement:</strong> Context manager that auto-closes file when done.</p>
        <p><strong>Why use it:</strong> Prevents file corruption, even if error occurs!</p>
        <p><strong>Modes:</strong></p>
        <p>• "r" = read</p>
        <p>• "w" = write (overwrites)</p>
        <p>• "a" = append</p>
    `,

    '.read()': `
        <p><strong>.read() method:</strong> Returns entire file content as one string.</p>
        <p><strong>Large files:</strong> Be careful - loads everything into memory!</p>
        <p><strong>Alternative:</strong> <code>.readlines()</code> returns list of lines.</p>
    `,

    '.write()': `
        <p><strong>.write() method:</strong> Writes string to file.</p>
        <p><strong>No newlines:</strong> Doesn't add \\n automatically - you must include it!</p>
        <p><strong>Mode "w":</strong> Erases file first. Use "a" to append instead.</p>
    `,

    // Error Handling (5 explanations)
    'try:': `
        <p><strong>try block:</strong> Wraps "risky" code that might raise an exception.</p>
        <p><strong>Best practice:</strong> Keep try block small - only the risky part!</p>
        <p><strong>Always with except:</strong> Can't use try without except (or finally).</p>
    `,

    'except ValueError:': `
        <p><strong>except block:</strong> Catches and handles specific error type.</p>
        <p><strong>ValueError:</strong> Raised when value is wrong type for operation (e.g., <code>int("abc")</code>)</p>
        <p><strong>Multiple except:</strong> Can catch different errors differently!</p>
        <p><strong>Don't use bare except:</strong> Always specify error type!</p>
    `,

    'except Exception as e:': `
        <p><strong>as e:</strong> Stores error object in variable e for details.</p>
        <p><strong>Print error:</strong> <code>print(f"Error: {e}")</code></p>
        <p><strong>Exception:</strong> Catches almost all errors (but too broad for production!).</p>
    `
};

// Merge explanations into global scope for use by tutorial pages
window.beginnerExplanations = window.beginnerExplanations || {};


