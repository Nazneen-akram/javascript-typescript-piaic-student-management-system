import inquirer from 'inquirer';

let students = {};
let studentId = 1001;

const mainMenu = async () => {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'Select an action:',
    choices: ['Enroll', 'View Balance', 'Fee Payment', 'Status', 'Return to Menu'],
  });

  switch (action) {
    case 'Enroll':
      await enroll();
      break;
    case 'View Balance':
      await viewBalance();
      break;
    case 'Fee Payment':
      await feePayment();
      break;
    case 'Status':
      status();
      break;
    case 'Return to Menu':
      return;
  }

  await mainMenu();
};

const enroll = async () => {
  const { cnic, name, age, course } = await inquirer.prompt([
    { type: 'input', name: 'cnic', message: 'Enter your CNIC (without dashes):' },
    { type: 'input', name: 'name', message: 'Enter your name:' },
    { type: 'input', name: 'age', message: 'Enter your age:' },
    {
      type: 'list',
      name: 'course',
      message: 'Select a course:',
      choices: ['Web 3.0 and Metaverse', 'E-commerce using Shopify', 'Generative AI for Health Care'],
    },
  ]);

  if (students[cnic]) {
    console.log('A student with this CNIC already exists.');
    return;
  }

  studentId++;
  students[cnic] = { id: studentId, name, age, course, balance: 4500 };
};

const viewBalance = async () => {
  const { cnic } = await inquirer.prompt({ type: 'input', name: 'cnic', message: 'Enter your CNIC:' });

  if (!students[cnic]) {
    console.log('No student with this CNIC exists.');
    return;
  }

  console.log(`Your Outstanding balance is ${students[cnic].balance}`);
};

const feePayment = async () => {
  const { cnic, amount } = await inquirer.prompt([
    { type: 'input', name: 'cnic', message: 'Enter your CNIC:' },
    { type: 'input', name: 'amount', message: 'Enter the amount to pay:' },
  ]);

  if (!students[cnic]) {
    console.log('No student with this CNIC exists.');
    return;
  }

  if (amount!= 4500) {
    console.log('The amount needs to be 4500.');
    return;
  }

  students[cnic].balance = 0;
  console.log('Your fee is paid')
};

const status = () => {
  for (let cnic in students) {
    console.log(`CNIC: ${cnic}`);
    console.log(`Name: ${students[cnic].name}`);
    console.log(`ID: ${students[cnic].id}`);
    console.log(`Course Enrolled: ${students[cnic].course}`);
    console.log(`Outstanding Balance: ${students[cnic].balance}`);
    console.log('------------------------');
  }
};

mainMenu();
