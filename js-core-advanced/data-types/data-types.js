function isEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        if (!isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

const country1 = {
    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    capital: {
        name: "Берн",
        population: 126598
    }
};
const copyCountry1 = {
    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    capital: {
        name: "Берн",
        population: 126598
    }
};
const country2 = {
    name: "Франция",
    languages: ["английский", "французский"],
    capital: {
        name: "Париж",
        population: 354627
    }
};
console.log(isEqual(country1, copyCountry1));
console.log(isEqual(country1, country2));