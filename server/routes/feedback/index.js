const express = require('express');
const router = express.Router();

module.exports = (param) => {

    const{feedbackService} = param;
     
    router.get('/', async (req, res, next) => {

        const feedbacklist = await feedbackService.getList();
            try{

            return res.render('feedback', {
                page:'Feedback',
                feedbacklist,
                success: req.query.success,
                });
        }catch(err){
            return err;
        }
});
    router.post('/', async(req,res,next) => {
        try {
            
            const feedbacklist = await feedbackService.getList();
            const fbName = req.body.fbName.trim();
            const fbTitle = req.body.fbTitle.trim();
            const fbMessage = req.body.fbMessage.trim();

            if(!fbName || !fbTitle || !fbMessage){
                return res.render('feedback',
                {
                    page: 'Feedback',
                    error: true,
                    fbName,
                    fbTitle,
                    fbMessage,
                    feedbacklist
                });
            }
            await feedbackService.addEntry(fbName, fbTitle, fbMessage);
                return res.redirect('/feedback?success=true')
        }catch(err){
            return next(err);
        }            
    });
    return router;
};