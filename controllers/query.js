const Query = require("../models/query");

//ADD QUERY
exports.addQuery = async (req, res) => {
  console.log(req.body);
  const queryObj = new Query(req.body);
  try {
    const savedObj = await queryObj.save();
    if (!savedObj) throw new Error("can not save object into db");

    return res.json({
      isValidExecution: true,
      query: savedObj,
    });
  } catch (error) {
    return res.json({
      isValidExecution: false,
      error: error.message,
    });
  }
};

//GET USER BY ID
exports.getUserById = (req, res, next, id) => {
  Query.findById(id).exec((err, user) => {
    if (err || user) {
      return res.status(400).json({
        error: "No User Found",
      });
    }
    res.profile = user;
    next();
  });
};

//GET USER
exports.getUser = (req, res) => {
  return res.json(req.profile);
};

//UPDATE USER
exports.updateUser = (req, res) => {
  Query.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized for updating the info",
        });
      }
      res.json(user);
    }
  );
};
