const inquirer = require('inquirer');
const fs = require('fs');

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

        switch (answers) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'Quit':
                exit();
                break;
        
            default:
                break;
        }

    // Department
    viewAllDepartments = () => {
        
    }
}

questions();