const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/csdd-proj");
mongoose.connection.on('connected', function () {
    console.log("------ mongodb数据库成功------");
});

const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
}))

const List = mongoose.model('List', new mongoose.Schema({
    year: { type: Number, require: true },
    month: { type: Number, require: true },
    afterSalary: { type: Number, require: true },
    rent: { type: Number, require: true },
    utilities: { type: Number, require: true },
    shop: { type: Number, require: true },
    deposit: { type: Number, require: true },
    remark: { type: String, require: false },
    action: { type: String, require: true }
}))

const Models = {
    User: User,
    List: List,
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
