import db from './connection.js';


// db.all   for SELECT
// db.run    for INSEERT, UPDATE, DELETE
// db.exec  can run DDL (definer tabeller) and DCL againsdt the database without parameters


// bruge `node filnavn --delete`for at aktivere ...
// const deleteMode = process.argv.find((argument) => argument.includes('delete'));
const deleteMode = process.argv.includes('delete');

console.log(deleteMode);

if (deleteMode) {
    db.exec(`DROP TABLE IF EXISTS exercises;`);
    db.exec(`DROP TABLE IF EXISTS users;`);
}

/*
SQL brug:
lowercase
snake case
plural for tables

SQLite:
int => INTEGER
AUTO_INCREMENT => AUTOINCREMENT
*/

// DDL
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE,
    role TEXT CHECK( role IN ("ADMIN", "STAFF", "USER") )
);

CREATE TABLE IF NOT EXISTS exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    created_at TEXT NOT NULL DEFAULT current_timestamp,
    difficulty INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
`);

// DML
// Her er vi i gang med seeding (dummy/hardcodede data) ...

if (deleteMode) {
    db.run(`INSERT INTO users(username, role) VALUES ('anders', 'USER');`);
    db.run(`INSERT INTO exercises (name, difficulty, user_id) VALUES ('squarts', 7, 1);`);
    db.run(`INSERT INTO exercises (name, difficulty, user_id) VALUES ('burpees', 6, 1);`);
}

