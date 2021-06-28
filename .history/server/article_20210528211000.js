const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/csdd-blog");
mongoose.connection.on('connected', function () {
    console.log("mongodb数据库成功！");
});

const Article = mongoose.model('Article', new mongoose.Schema({
    parent: { type: String, require: true },
    title: { type: String, require: true },
    tags: { type: Array, require: true },
    abstracts: { type: String, require: true },
    createdDate: { type: String, require: true },
    imgUrl: { type: String, require: false }
}))

// 新增数据
// Article.create({
//     parent: 'study',
//     title: 'test_study_1',
//     tags:['a'],
//     abstracts: ['b'],
//     createdDate: '2020-01-10',
//     imgUrl:""
// }, function (err, doc) {
//     if (!err) {
//         // console.log(doc);
//     } else {
//         console.log(err);
//     }
// })

//删除数据
// User.remove({ age: 20 }, function (err, doc) {
//   console.log(doc);
// })

//修改数据
// User.update({ name: "功夫熊猫1" }, { $set: { age: 28 } }, function (err, doc) {
//   console.log(doc);
// })

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
            
            console.log("req.query", req.query)
            articles.forEach((i) => {
                i.createdDate = JSON.stringify(new Date(i.createdDate)).slice(1, 11)
            })
            console.log("server res ------", articles)
            // console.log("length res ------", total)
            res.json({ total: total, datas: articles })
        })

})

app.listen('8100', function () {
    console.log("8100");
})