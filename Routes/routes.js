let router = require('express').Router();

router.get('/',function(req,res){
    res.json({
        status : 'API Works',
        message : "Welcome to Stock-Market"
    })
});

const users = require('../Model/Models');
const countermodel =require('../Model/Models');
router.post('/add',(req,res) => {
    var user = new users();
    user.name = req.body.name;
    user.save((err,users) => {
        if(err) {
            return res.status(400).send({
                message : err
            });
        }
        else {
            return res.status(201).send({
                message : "Stock added successfully",
                data : user
            });
        }
    })
});

var Controller = require('../Controller/Controller.js');

router.route('/get-all')
.get(Controller.index)

router.route('/:user_id')
.get(Controller.view)
.patch(Controller.update)
.put(Controller.update)
.delete(Controller.Delete);

module.exports = router;
