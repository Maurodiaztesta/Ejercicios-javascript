const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};


let animal = animalFunction();

const {name, race} = animal;
console.log(name);
console.log(race);