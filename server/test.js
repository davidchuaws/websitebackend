const { model } = require('./server');

var models = require('./server.js').models;

var toSave = [
    {name: 'david', email: 'david@mail.com'},
    {name: 'david1', email: 'davidos@mail.com'},
    {name: 'david2', email: 'david2@mail.com'},
    {name: 'david3', email: 'david3@mail.com'},
    {name: 'test', email: 'david4@mail.com'},
    {name: 'tester', email: 'david5@mail.com'},
    {name: 'testet', email: 'david6@mail.com'},
    {name: 'tet1', email: 'david7@mail.com'},
];

toSave.map(obj => {
    models.Profile.create(obj, (err, created) => {
        console.log("Created?", created);
    });
});

var filter = {
    where: {
        name: {like: 'david'},
    },
    order: 'date ASC',
    limit: 3,
    /*
    skip: 4,
    fields: {
        email: true
    },
    include: {
        relation: 'Posts',
        scope: {
            limit: 5,
            order: 'date DESC',
            include: {
                relation: 'Image',
                limit: 1,
                where: {type: 'thumbnail'},
            },
        },
    },
    */
};

models.Profile.findOne({where: {name: 'david'}, order: 'id DESC'}, (err, found) => {
    console.log("Found?", err, found);
    //found.destroy(); // to delete
});

models.Profile.destroyAll(filter.where, (err, found) => {
    console.log("Found to destroy?", err, found);
});

models.Profile.find({where: {name: 'david'}, order: 'id DESC'}, (err, found) => {
    console.log("Found?", err, found);
});

