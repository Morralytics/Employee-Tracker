const inquirer = require('inquirer');
const connection = require('./config/connection');
// const fs = require('fs');
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
    }
    
    // Department
    const viewAllDepartments = () => {
        let sqlQuery = `SELECT * FROM department`;

        mysqlConnection.query(sqlQuery, (err, res, fields) => {
            if (err) throw err;
            console.log(res);
            questions();
        });
    }