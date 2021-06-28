const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/csdd-blog");
mongoose.connection.on('connected', function () {
    console.log("------ mongodb数据库成功------");
});

const Article = mongoose.model('Article', new mongoose.Schema({
    parent: { type: String, require: true },
    title: { type: String, require: true },
    tags: { type: Array, require: true },
    abstracts: { type: String, require: true },
    createdDate: { type: String, require: true },
    imgUrl: { type: String, require: false }
}))

const Models = {
    Article: Article,
};

// 新增数据
// User.create({
//     username: "test_00",
//     password: "testttttt"
// }, function (err, doc) {
//     if (!err) {
//         // console.log(doc);
//     } else {
//         console.log(err);
//     }
// })

// 新增数据
// List.create({
//     year:2020,
//     month: 1,
//     afterSalary: 1,
//     rent:1,
//     utilities: 1,
//     shop: 1,
//     deposit:1,
//     remark: "",
//     action: ""
// }, function (err, doc) {
//     if (!err) {
//         // console.log(doc);
//     } else {
//         console.log(err);
//     }
// })

module.exports = Models;
