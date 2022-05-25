const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    const result = people.reduce((obj, person) => {
        if (!person.yearOfDeath)  person.yearOfDeath = currentYear; 
        if (Object.keys(obj).length === 0) obj = person;
        const personAge = person.yearOfDeath - person.yearOfBirth;
        const objAge = obj.yearOfDeath - obj.yearOfBirth;
        return (personAge > objAge) ? person : obj;  

    }, {});

    return result;
};
// Do not edit below this line
module.exports = findTheOldest;
