// data10.js

const fs = require("fs");

const MAX_PEOPLE = 10;

const addPerson = (id, fname, lname, city, age) => {
    const allData = loadInfo();

    if (allData.length >= MAX_PEOPLE) {
        console.log(`ERROR: Maximum number of people (${MAX_PEOPLE}) reached. Cannot add more.`);
        return;
    }

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id;
    });

    if (duplicatedData.length === 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            city: city,
            age: age
        });
        savealldata(allData);
        console.log(`Person with ID ${id} added successfully.`);
    } else {
        console.log("ERROR: DUPLICATED ID. Please use a unique ID.");
    }
};

const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString();
        return JSON.parse(dataJson);
    } catch {
        return [];
    }
};

const savealldata = (allData) => {
    const saveallDataJson = JSON.stringify(allData, null, 2);
    fs.writeFileSync("data10.json", saveallDataJson);
};

const deleteData = (id) => {
    const allData = loadInfo();

    const dataTokeep = allData.filter((obj) => {
        return obj.id !== id;
    });

    if (dataTokeep.length < allData.length) {
        savealldata(dataTokeep);
        console.log(`Person with ID ${id} deleted successfully.`);
    } else {
        console.log(`Person with ID ${id} not found.`);
    }
};

const deleteAllData = () => {
    savealldata([]);
    console.log("All people data deleted successfully!");
};

const readData = (id) => {
    const allData = loadInfo();

    const itemNeeded = allData.find((obj) => {
        return obj.id === id;
    });

    if (itemNeeded) {
        console.log("\n--- Person Data ---");
        console.log(`ID: ${itemNeeded.id}`);
        console.log(`First Name: ${itemNeeded.fname}`);
        console.log(`Last Name: ${itemNeeded.lname}`);
        console.log(`Age: ${itemNeeded.age}`);
        console.log(`City: ${itemNeeded.city}`);
        console.log("-------------------");
    } else {
        console.log("ID NEEDED NOT FOUND.");
    }
};

const listData = () => {
    const allData = loadInfo();
    if (allData.length === 0) {
        console.log("No people data available.");
        return;
    }
    console.log("\n--- All People Data ---");
    allData.forEach((obj) => {
        console.log(`ID: ${obj.id}, Name: ${obj.fname} ${obj.lname}, Age: ${obj.age}, City: ${obj.city}`);
    });
    console.log("-----------------------");
};

const listFullNamesAndCities = () => {
    const allData = loadInfo();
    if (allData.length === 0) {
        console.log("No people data available.");
        return;
    }
    console.log("\n--- Full Names and Cities ---");
    allData.forEach((obj) => {
        console.log(`Name: ${obj.fname} ${obj.lname}, City: ${obj.city}`);
    });
    console.log("-----------------------------");
};

module.exports = {
    addPerson,
    deleteData,
    deleteAllData,
    readData,
    listData,
    listFullNamesAndCities
};
