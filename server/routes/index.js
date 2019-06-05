const express = require('express');
const router = express.Router();

//import directory routes
const directoryRoutes = require('./directory');
//import case_file route
const caseFile = require('./casefile');
//import feedback route
const feedback = require('./feedback');
//import how to play route
const howtoplay = require('./howtoplay');
//import notes route
const notes = require('./notes');
//import solve route
const solve = require('./solve');



//export function, response to route
module.exports = (param) => {

    const{ directoryService } = param;
    const { personaliseService } = param;
    const {notesService} = param;

    router.get('/', (req,res,next) => {
        return res.render('index');

});

    //load Directory middleware
   router.use('/directory', directoryRoutes(param));
    //load Casefile middleware
    router.use('/casefile', caseFile());
     //load Feedback middleware
     router.use('/feedback', feedback(param));
     //load How to Play middleware
    router.use('/howtoplay', howtoplay());
    //load Notes middleware
     router.use('/notes', notes(param));
     //load Solve middleware
   router.use('/solve', solve());
 return router;

};