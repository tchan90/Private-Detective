const express = require('express');
const router = express.Router();

module.exports = (param) => {

    const { directoryService } = param;
    const { personaliseService } = param;

     
    router.get('/', async(req, res, next) => {
        //load bookmarked destination
       
        return res.render('Directory');
    });

   //get information for specific directory
   router.get('/:name', async(req,res,next)=>{
    try {
        const promises = [];
        promises.push(directoryService.getCharacter(req.params.name));
        promises.push(directoryService.getEvidenceforCharacter(req.params.name));
        const result = await Promise.all(promises);

        if(!result[0]){
            return next();
        }

        return res.render('directory/detail', {
            page: req.params.name,
            directory: result[0],
            evidence: result[1],
        });
    }catch (err){
        return next(err);
    }

});

    return router;

};