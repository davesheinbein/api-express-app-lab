const User = require('../../models/user');

module.exports = {
    // index,
    // create,
    // update,
    // delete: deleteOne,
    signup
}

// function index(req, res) {
//     User.find({}, function (err, users) {
//         res.status(200).json(users)
//     })
// }

// function create(req, res) {
//     User.create(req.body, function (err, user) {
//         res.status(201).json(user)
//     })
// }

// function update(req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, updatedUser) {
//         res.status(200).json(updatedUser)
//     })
// }

// async function deleteOne(req, res) {
//     // User.findByIdAndRemove(req.params.id).then(err, deleteMessage)
//     try {
//         const deletedUser = await User.findByIdAndRemove(req.params.id);

//         if(deletedUser){
//             res.status(200).json(deletedUser)
//         } else {
//             res.status(404)
//         }

//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

function signup(req, res) {
    res.status(201).json({ username: "Steve", signup: "is signed up" })
}
