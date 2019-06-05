const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const createErrors = require('http-errors');

const routes = require('./routes');
const configs = require('./config');
const DirectoryService = require('./services/DirectoryService');
const FeedbackService = require('./services/FeedbackService');
const PersonaliseService = require('./services/PersonaliseService');


const app = express();
const config = configs[app.get('env')];

const directoryService = new DirectoryService(config.data.descriptions);
const feedbackService = new FeedbackService(config.data.feedback);
const personaliseService = new PersonaliseService(config.data.users);

//join to pug
app.set('view engine', 'pug');
//dev enviro
if(app.get('env') === 'development'){
    app.locals.pretty = true;
}
app.set('views', path.join(__dirname, './views'));


//join to public folder
app.use(express.static('../public'))

//storing feedback post data
app.use(bodyParser.urlencoded({extended: true}));

//favicon
app.get('/favicon.ico', (req,res,next) => {
    return res.sendStatus(204);
});

//middleware to load data every time request is made to server
app.use(async (req,res,next)=> {
    try{
        const names = await directoryService.getNames();
        //console.log(names);
        res.locals.directoryNames = names;
        return next();
    }catch(err){
        return next(err);
    }
    
});

//pass Services as object into routes
app.use('/', routes({
    directoryService: directoryService,
    feedbackService: feedbackService,
    personaliseService: personaliseService,
}));


//handling errors
app.use((req, res, next) => {
    return next(createErrors(404, 'File not found'))
});
app.use((err,req,res,next) => {
    res.locals.message = err.message;
    const status = err.status || 500;
    res.locals.status = status;
    //give error data if in dev mode
    res.locals.error = req.app.get('env') === "development" ? err : {};
    res.status(status);
    return res.render('error');
})



app.listen(3000);

module.export = app; //export express