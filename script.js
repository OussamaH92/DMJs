const population = [

    { nom: "Dupont", ville: "evry", sex: "f", born: 1970 },
    { nom: "Dupont", ville: "Paris", sex: "f", born: 1980 },
    { nom: "Brusel", ville: "belfort", sex: "h", born: 1969 },
    { nom: "SuperDupont", ville: "Evry", sex: "f", born: 1971 },
    { nom: "Leroy", ville: "Paris", sex: "f", born: 1984 },
    { nom: "Tony", ville: "belfort", sex: "h", born: 2000 },

];

const question1 = (population.filter(({sex:element}) => element.includes("f"))).filter(element => 2021 - element.born > 40);

const question2 = ((population.filter(({ville:element}) => element.toLowerCase() === "evry")).filter(element => 2021 - element.born > 50)).filter(({sex:element}) => element.includes("f"))

console.log(question1)
console.log(question2)