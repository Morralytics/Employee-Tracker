const inquirer = require('inquirer');
const fs = require('fs');
const mysqlConnection = require('./config/connection');
require('dotenv').config();


mysqlConnection.connect((err) => {
    if (err) throw err;
    questions();
});

const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'userChoice',
                choices: [
                    'View all employees',
                    'Add employee',
                    'Update employee role',
                    'View all roles',
                    'Add role',
                    'View all departments',
                    'Add department',
                    'Quit'
                ]
            }
        ])

        switch (answers.userChoice) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'Quit':
                mysqlConnection.end();
                break;
        }

    // Department
    viewAllDepartments = () => {

    }
}