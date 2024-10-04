const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, person) =>{
        if (!person.yearOfDeath) person.yearOfDeath = (new Date()).getFullYear();

        const OldestAge =  oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        const Age = person.yearOfDeath - person.yearOfBirth;

        return Age > OldestAge ? person : oldestPerson;
        

    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
