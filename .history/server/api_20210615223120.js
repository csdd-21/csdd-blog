const express = require('express');
const models = require('./db');

const app = express();
app.get('/', function (req, res) {
    res.send('<h1>hello Nodejs</h1>')
})

app.get("/tags", function (req, res) {
    models.Article.aggregate([
        {
            $match: {
                parent: req.query.parent
            }
        },
        {
            $group: {
                _id: "$tags"
            }
        },
        { $sort: { "_id": 1 } },
    ], function (err, datas) {
        let tags = []
        datas.forEach(i => {
            i._id.forEach(j => {
                tags.push(j)
            })
        })
        console.log('tags req ----', req.query, 'tags err ----', err, 'tags res ----', Array.from(new Set(tags)));
        res.json({ parent: req.query.parent, tags: Array.from(new Set(tags)) })
    })
})

app.get("/article", function (req, res) {
    let params = {}
    if (!req.query.title) {
        params = {
            parent: req.query.parent,
            tags: { $in: req.query.checkTags }
        }
    }
    if (req.query.title) {
        params = {
            title: { $regex: req.query.title },
            tags: { $in: req.query.checkTags }
        }
    }

    let promise_1 = new Promise((resolve, reject) => {
        models.Article
            .countDocuments(params)
            .then((res) => {
                resolve(res)
            })
    })
    let promise_2 = new Promise((resolve, reject) => {
        models.Article
            .find(params)
            .sort({ createdDate: req.query.sort })
            .skip(Number((req.query.skip - 1) * req.query.limit))
            .limit(Number(req.query.limit))
            .exec()
            .then((res) => {
                res.forEach((i) => {
                    i.createdDate = JSON.stringify(new Date(i.createdDate)).slice(1, 11)
                })
                resolve(res)
            })
    })
    Promise.all([promise_1, promise_2]).then((datas) => {
        console.log('articles res -----', { total: datas[0], datas: datas[1] });
        res.json({ parent: req.query.parent, total: datas[0], datas: datas[1] })
    }).catch((err) => { console.log('err', err) })
})

module.exports = app;
