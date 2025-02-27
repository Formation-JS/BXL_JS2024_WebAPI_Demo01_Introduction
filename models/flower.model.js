const fakeDb = {

    flowers: [
        {
            id: 1,
            name: 'Rosa',
            commonName: 'Rose',
            family: 'Rosaceae',
            description: 'Fleur délicate aux pétales souvent parfumés, symbolisant l\'amour.',
            variety: 'Rosier de Damas',
            origins: 'Asie',
            toxicity: false
        },
        {
            id: 2,
            name: 'Lilium',
            commonName: 'Lis',
            family: 'Liliaceae',
            description: null,
            variety: 'Lis tigré',
            origins: 'Hémisphère nord tempéré',
            toxicity: true
        },
        {
            id: 3,
            name: 'Tulipa',
            commonName: 'Tulipe',
            family: 'Liliaceae',
            description: null,
            variety: null,
            origins: 'Asie centrale',
            toxicity: false
        },
        {
            id: 4,
            name: 'Narcissus',
            commonName: 'Narcisse',
            family: 'Amaryllidaceae',
            description: 'Fleur printanière symbolisant la renaissance et la beauté.',
            variety: 'Narcisse jaune',
            origins: 'Europe et Afrique du Nord',
            toxicity: true
        },
        {
            id: 5,
            name: 'Helianthus',
            commonName: 'Tournesol',
            family: 'Asteraceae',
            description: 'Grande fleur jaune qui suit la course du soleil.',
            variety: 'Tournesol commun',
            origins: 'Amérique du Nord',
            toxicity: false
        },
        {
            id: 6,
            name: 'Orchidaceae',
            commonName: 'Orchidée',
            family: 'Orchidaceae',
            description: 'Fleur exotique avec une grande diversité de formes et de couleurs.',
            variety: 'Orchidée papillon',
            origins: 'Tropical',
            toxicity: false
        },
        {
            id: 7,
            name: 'Aster',
            commonName: null,
            family: 'Asteraceae',
            description: 'Fleur étoilée symbolisant l\'amour et la sagesse.',
            variety: 'Aster de Nouvelle-Angleterre',
            origins: 'Eurasie et Amérique du Nord',
            toxicity: false
        },
        {
            id: 8,
            name: 'Dahlia',
            commonName: null,
            family: 'Asteraceae',
            description: 'Fleur colorée aux nombreuses variétés et formes.',
            variety: null,
            origins: 'Mexique et Amérique centrale',
            toxicity: false
        },
        {
            id: 9,
            name: 'Chrysanthemum',
            commonName: 'Chrysanthème',
            family: 'Asteraceae',
            description: 'Fleur d\'automne symbolisant la longévité et la fidélité.',
            variety: 'Chrysanthème des jardins',
            origins: 'Asie',
            toxicity: false
        },
        {
            id: 10,
            name: 'Lavandula',
            commonName: 'Lavande',
            family: 'Lamiaceae',
            description: 'Fleur parfumée utilisée en aromathérapie et en cuisine.',
            variety: 'Lavande officinale',
            origins: 'Méditerranée',
            toxicity: false
        }
    ]
    ,
    flowerLastId: 10
}

const flowerModel = {

    find: () => {
        return structuredClone(fakeDb.flowers);
    },

    findById: (id) => {
        const flower = fakeDb.flowers.find(f => f.id === id);
        return structuredClone(flower);
    },

    insert: ({ name, commonName, family, description, variety, origins, toxicity }) => {
        if(!name?.trim() || !family?.trim() || !origins?.trim() || toxicity === undefined) {
            throw new Error('Fail insert in FakeDB !');
        }

        fakeDb.flowerLastId++;

        const flower = {
            id: fakeDb.flowerLastId, 
            name, commonName, family, description, variety, origins, toxicity
        }
        fakeDb.flowers.push(flower);

        return structuredClone(flower);
    },

    modify: (id, { name, commonName, family, description, variety, origins, toxicity }) => {

        if(!name?.trim() || !family?.trim() || !origins?.trim() || toxicity === undefined) {
            throw new Error('Fail update in FakeDB !');
        }

        const flower = fakeDb.flowers.find(f => f.id === id);

        if(!flower) {
            return false;
        }

        flower.name = name;
        flower.commonName = commonName;
        flower.family = family;
        flower.description = description;
        flower.variety = variety;
        flower.origins = origins;
        flower.toxicity = toxicity;
        return true;
    },

    remove: (id) => {
        const index = fakeDb.flowers.findIndex(f => f.id === id);
        fakeDb.flowers.splice(index, 1);
    }

};

export default flowerModel;
