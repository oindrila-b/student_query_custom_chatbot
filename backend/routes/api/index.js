var router = require('express').Router();
var runIntent = require("./dialogflow").runIntent;



router.get("/", function(req, res){
    res.send("Hello from backend!");
});

// /api/requestText POST 
router.post("/requestText", function(req, res){
    (async() => {
        console.log(req.body);
        var result;
        try {
            result = await runIntent(req.body.projectId, req.body.requestText);
            return res.send(
                {
                    "responseMessage": result.Response,
                    "originalQuery": result.Query, 
                    "intent": result.intent
                }
            )
        } catch (err) {
            console.error("Error encountered Here:\n", err);
        }
        
        
    })();
})

module.exports = router;