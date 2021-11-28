const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: [
            'Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual',
        ],
    },

    {
        id: 'dog-2',
        name: 'Bernense Moutain Dog',
        temperament: ['Affectionate','Intelligent', 'Loyal','Faithful'],
    },

    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: [
            'Intelligent',
            'Even Tempered',
            'Kind',
            'Agile',
            'Outgoing',
            'Trusting',
            'Gentle',
        ],
    },

    {
        id: 'dog-4',
        name: 'Husky',
        temperament: [
            'Intelligent',
            'Independent',
            'Playful',
            'Athletic'
        ]
    },

    {
        id: 'dog-5',
        name: 'Yorkshire terrier',
        temperament: ['Playful', 'Lively', 'Trusting','Faithful'],
    },
]

console.log(dogs.find(dog=> dog.name === 'Bernese Mountain Dog'));
console.log(dogs.some(dog=> dog.temperament === 'Aggresive'));
console.log(dogs.some(dog=> dog.temperament === 'Trusting'));
console.log(dogs.every(dog=> dog.temperament === 'Trusting'));
console.log(dogs.every(dog=> dog.temperament === 'Intelligent'));
console.log(dogs.map(dog=> dog.name));
console.log(dogs.filter(dog=> dog.temperament.includes('Faithful')));
console.log(dogs.find(dog=> dog.name === 'Husky'));
console.log(dogs.every(dog => dog.temperament ==='Playful'));
console.log(dogs.reduce((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament]
}, []));

