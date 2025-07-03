
const fs = require("fs");

const yargs = require("yargs");

const data10 = require("./data10");

yargs.command({
    command: "add",
    describe: "to add a new person",
    builder: {
        id: {
            describe: "Person's unique ID",
            demandOption: true, 
            type: "number"      
        },
        fname: {
            describe: "Person's first name",
            demandOption: true, 
            type: "string"      
        },
        lname: {
            describe: "Person's last name",
            demandOption: true, 
            type: "string"    
        },
        age: {
            describe: "Person's age",
            demandOption: true, 
            type: "number"      
        },
        city: {
            describe: "Person's city",
            demandOption: true,
            type: "string"      
        }
    },
    handler: (x) => {
        data10.addPerson(x.id, x.fname, x.lname, x.city, x.age);
    }
});

yargs.command({
    command: "delete",
    describe: "to delete a specific person by ID",
    builder: {
        id: {
            describe: "ID of the person to delete",
            demandOption: true, 
            type: "number"      
        }
    },
    handler: (x) => {
        data10.deleteData(x.id);
    }
});

yargs.command({
    command: "delete-all",
    describe: "to delete all people data",
    handler: () => {
        data10.deleteAllData();
    }
});

yargs.command({
    command: "read",
    describe: "to read a specific person's data by ID",
    builder: {
        id: {
            describe: "ID of the person to read",
            demandOption: true, 
            type: "number"      
        }
    },
    handler: (x) => {
        data10.readData(x.id);
    }
});

yargs.command({
    command: "list",
    describe: "to list all people's data (ID, Name, Age, City)",
    handler: () => {
        data10.listData();
    }
});

yargs.command({
    command: "list-names-cities",
    describe: "to view full name (first name + last name) and city of each person",
    handler: () => {
        data10.listFullNamesAndCities();
    }
});

yargs.parse();
