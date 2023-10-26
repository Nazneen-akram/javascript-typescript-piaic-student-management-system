# javascript-typescript-piaic-student-management-system

# Student Management System

This is a simple Node.js command-line program that allows you to manage student records. It provides options for enrolling students, viewing their balance, making fee payments, and displaying the status of all enrolled students.

## Usage

1. Make sure you have Node.js installed on your system.

2. Clone or download this repository to your local machine.

3. Open your terminal or command prompt and navigate to the directory where you've placed the code.

4. Run the following command to start the Student Management System:

```bash
node your_script_name.js
```
## Features
### Main Menu
The program presents a main menu with the following options:

* Enroll: Enroll a new student.
* View Balance: Check the outstanding balance of a student.
* Fee Payment: Make a fee payment.
* Status: Display the status of all enrolled students.
* Return to Menu: Return to the main menu (use this option to navigate between actions).

### Enroll
* Enroll a student by providing the following details:
* CNIC (13 digits, without dashes)
* Name
* Age
* Course selection (choose from available options)
* 
### View Balance
* View the outstanding balance of a student by providing their CNIC.
  
### Fee Payment
* Make a fee payment by providing the student's CNIC and the fee amount (fixed at 4500).
* The program checks if the CNIC exists and if the provided amount matches the fixed fee.

### Status
* Display the status of all enrolled students, including:
* CNIC
* Name
* Student ID
* Enrolled Course
* Outstanding Balance
## Example
Here's how you can use the program:

1. Select an action from the main menu.
2. Follow the prompts to perform the selected action.
   
## Author
Nazneen Akram
