const inquirer = require('inquirer');
const connection = require('./config/connection');
const mysqlConnection = require('./config/connection');
require('mysql2/promise');
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
            await addEmployee();
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
    const gatherQuery = `SELECT roles.id, roles.title, roles.salary FROM roles`

    mysqlConnection.query(gatherQuery, (err, res) => {
        if (err) throw err;

        const roles = res.map(({ id, title, salary }) => ({
            value: id,
            title: `${title}`,
            salary: `${salary}`

        }
        ));
        console.table(roles),
        inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the first name of the employee?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the last name of the employee?'
            },
            {
                type: 'list',
                name: 'role',
                message: 'Which role does this employee fill?',
                choices: roles
            }
        ])
            .then((res) => {
                const addQuery = `INSERT INTO employee SET ?`
                mysqlConnection.query(addQuery, { first_name: res.first_name, last_name: res.last_name, role_id: res.role }, (err, res) => {
                    if (err) throw err;
                    console.log('Added to employee table')
                    questions();
                })
            })
    })
}