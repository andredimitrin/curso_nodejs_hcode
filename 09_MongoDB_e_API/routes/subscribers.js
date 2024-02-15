const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');


router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', getSubscribers, (req, res) => {
    res.json(res.subscriber)
})

router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        userName: req.body.userName,
        userChannel: req.body.userChannel,
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.patch('/:id', getSubscribers,async (req, res) => {
    if(req.body.userName != null) {
        res.subscriber.userName = req.body.userName
    }
    if(req.body.userChannel != null) {
        res.subscriber.userChannel = req.body.userChannel
    }
    try {
        const updateSubscriber = await res.subscriber.save()
        res.json(updateSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/:id', getSubscribers, async (req, res) => {
    try {
        if (!res.subscriber) {
            return res.status(404).json({ message: 'Subscriber not found' });
        }
        await Subscriber.findByIdAndDelete(req.params.id);
        res.json({ message: 'Subscriber deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




async function getSubscribers(req, res, next) {
    try {
        const foundSubscriber = await Subscriber.findById(req.params.id);
        if (foundSubscriber == null) {
            return res.status(404).json({ message: 'Can not find subscriber' });
        }
        res.subscriber = foundSubscriber;
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}







module.exports = router;