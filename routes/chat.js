const router = require('express').Router();
const Chat = require('../models/chat');

router.route('/add').post((req,res)=>{
    const {id,description} = req.body;
    var newChat = new Chat({
        id,
        description
    });

    newChat.save().then(()=>{
        res.json("Chat Added");
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/').get((req,res)=>{
    Chat.find().then((chats)=>{
        res.json(chats);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/update/:id').put((req,res)=>{
    var chatId = req.params.id;
    const {id,description} = req.body;
    var updateChat = {
        id,
        description
    };
    Chat.findByIdAndUpdate(chatId,updateChat).then((update)=>{
        res.json(update);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/delete/:id').delete((req,res)=>{
    var chatId = req.params.id;
    Chat.findByIdAndDelete(chatId).then((chat)=>{
        res.json(chat);
    }).catch((err)=>{
        res.send(err);
    });
})

router.route('/:id').get((req,res)=>{
    var chatId = req.params.id;
    Chat.findById(chatId).then((chat)=>{
        res.json(chat);
    }).catch((err)=>{
        res.send(err);
    });
})

module.exports = router;