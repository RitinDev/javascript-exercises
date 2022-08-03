const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();
    let highestAge = 0;
    let oldestPerson;

    for (const person of people) {
        let age;
        if (person['yearOfDeath']) age = person['yearOfDeath'] - person['yearOfBirth'];
        else age = currentYear - person['yearOfBirth'];

        if (age <= highestAge) continue;

        highestAge = age;
        oldestPerson = person;
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
