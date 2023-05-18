const historyModel = require('../models/history')

const createHistory = function (req, res, next) {
    const history = new historyModel(req.body)
    history.save().then((data) => res.send(data))
        .catch((err) => res.send(err))

}

const getHistories = function (req, res, next) {

    historyModel.find({}).then((data) => res.send(data))
        .catch((err) => res.send(err))

}

const deleteHistories = function (req, res, next) {
    const { id } = req.params
    if (id) {
        historyModel.findByIdAndDelete(id).then((data) => {
            res.send(data)
        })
         .catch((err) => res.send(err))
    }
    else {
        historyModel.deleteMany({}).then((data) => {
            res.send(data); // Success
        })
        .catch((err) => {
            res.send(err);
        })
}
}

module.exports = { createHistory, getHistories, deleteHistories }