"use strict";

const LunchModel = require('../models/lunch');


const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    LunchModel.create(req.body)
        .then(lunch => res.status(201).json(lunch))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    LunchModel.findById(req.params.id).exec()
        .then(lunch => {

            if (!lunch) return res.status(404).json({
                error: 'Not Found',
                message: `lunchgroup not found`
            });

            res.status(200).json(lunch)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const update = (req, res) => {
    if (Object.keys(req.body).length === 0)
    {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    LunchModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true}).exec()
        .then(lunch => res.status(200).json(lunch))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    LunchModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `LunchGroup with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const list  = (req, res) => {
    LunchModel.find({}).exec()
        .then(lunchgroups => res.status(200).json(lunchgroups))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};



module.exports = {
    create,
    read,
    update,
    remove,
    list
};