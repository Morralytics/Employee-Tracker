const inquirer = require('inquirer');
const connection = require('./config/connection');
const mysqlConnection = require('./config/connection');
require('console.table');
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
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
            case 'Quit':
                mysqlConnection.end();
                break;
        }
    }
    
    // View all department
    const viewAllDepartments = () => {
        let sqlQuery = `SELECT * FROM department`;

        mysqlConnection.query(sqlQuery, (err, res) => {
            if (err) throw err;
            console.table(res);
            questions();
        });
    }

    // View all employees
    const viewAllEmployees = () => {
        let sqlQuery = `SELECT * FROM employee`;

        mysqlConnection.query(sqlQuery, (err, res) => {
            if (err) throw err;
            console.table(res);
            questions();
        })
    }

    // View all roles
    const viewAllRoles = () => {
        let sqlQuery = `SELECT * FROM roles`;

        mysqlConnection.query(sqlQuery, (err, res) => {
            if (err) throw err;
            console.table(res);
            questions();
        })
    }

    // Add employee
    const addEmployee = async () => {
        const roleChoices = `SELECT id AS VALUE FROM roles`
        const employee = await inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the first name of the employee?',
                    name: 'first_name'
                },
                {
                    type: 'input',
                    message: 'What is the last name of the employee?',
                    name: 'last_name'
                },
                {
                    type: 'list',
                    message: 'Which role does this employee fill?',
                    name: 'role',
                    choices: []
                }
            ])
    }