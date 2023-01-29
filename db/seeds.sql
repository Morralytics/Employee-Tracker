INSERT INTO department (department_name)
VALUES
    -- Need to impliment department name
    ("Video Director"),
    ("Marketing"),
    ("Game Design"),
    ("Balancing Team");

INSERT INTO roles (title, salary, department_id)
VALUES
    -- Need to impliment the values of each role
    ("Engineer", 90000, 3),
    ("Chief Exectutive", 110000, 2),
    ("Senior Engineer", 120000, 4),
    ("Graphic Designer", 65000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    -- Need to impliment values for each employee
    ("Nick", "Morris", 2, null),
    ("Josh", "Random", 4, 1),
    ("Scott", "Round", 1, 2),
    ("Madison", "Update", 3, null);

-- For notes:
    -- The department id will be linked to the role's description of the department id
    -- While the role id of the employees will link with each employee's role id
    -- The manager id holds the reference to the manager of the current employee