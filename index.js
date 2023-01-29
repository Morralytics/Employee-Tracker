const inquirer = require('inquirer');
const fs = require('fs');
// const mysqlConnection = require('./config/connection');

const sql = require('mysql2');
require('dotenv').config();

const connection = sql.createConnection(
    {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        host: "localhost",
        port: 3306
    }
);

connection.connect((err) => {
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
                connection.end();
                break;
        }

    // Department
    viewAllDepartments = () => {

    }
}