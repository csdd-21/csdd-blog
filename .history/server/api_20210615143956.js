const express = require('express');
const models = require('./db');
const { jwtSign, jwtCheck } = require('./jwt')

const app = express();
app.get('/', function (req, res) {
    res.send('<h1>hello Nodejs</h1>')
})

app.get("/article", function (req, res) {
    (async () => {
        let testRes = await Article
            .find({
                parent: req.query.parent,
                tags: { $in: req.query.checkTags },
            }).count().then((res) => {
                console.log('res  111111111111111---', res);
                total = res
            })
        console.log('res  22222222222222----');
    })()

    Article
        .find({
            parent: req.query.parent,
            tags: { $in: req.query.checkTags },
        })
        .sort({ createdDate: req.query.sort })
        .skip(Number((req.query.skip - 1) * req.query.limit))
        .limit(Number(req.query.limit))
        .exec()
        .then((articles) => {
            console.log('articles----------------------',articles);
            console.log("req.query---------------------", req)
            articles.forEach((i) => {
                i.createdDate = JSON.stringify(new Date(i.createdDate)).slice(1, 11)
            })
            console.log("server res ------", articles)
            // console.log("length res ------", total)
            res.json({ total: total, datas: articles })
        })

})

module.exports = app;
