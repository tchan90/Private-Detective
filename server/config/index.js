const path = require('path');
module.exports = {
    development: {
        sitename: 'Private Detective: A crime solving game [Development]',
        data: {
            descriptions: path.join(__dirname, '../data/descriptions.json'),
            users: path.join(__dirname, '../data/users.json'),
            feedback: path.join(__dirname, '../data/feedback.json'),
            notes: path.join(__dirname, '../data/notes.json')
        }
    },
    production: {
        sitename: 'Private Detective: A crime solving game',
        data: {
            descriptions: path.join(__dirname, '../data/descriptions.json'),
            users: path.join(__dirname, '../data/users.json'),
            feedback: path.join(__dirname, '../data/feedback.json'),
            notes: path.join(__dirname, '../data/notes.json')

        }
    }
    }
