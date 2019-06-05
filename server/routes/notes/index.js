const express = require('express');
const router = express.Router();

module.exports = (param) => {

    //const{notesService} = param;
    const{personaliseService} = param;
    const { directoryService } = param;

     
    router.get('/', async (req, res, next) => {
        //user's bookmarked images
        const bookmarkEvidence = await
        personaliseService.getUsersBookmarkedEvidence("Chris_Tri");
        const usersBookmarkedEvidence = await directoryService.getEvidenceforCharacter(bookmarkEvidence);
    
        const noteslist = await personaliseService.getList();
            try{

            return res.render('notes', {
                page:'Notes',
                noteslist,
                success: req.query.success,
                evidence: usersBookmarkedEvidence
                });
        }catch(err){
            return err;
        }

    });

    return router;
};