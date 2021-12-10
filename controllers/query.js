const Query = require("../models/query");

//ADD QUERY
exports.addQuery = async (req, res) => {
  console.log(req.body);
  const {
    mobile_no,
    organization_name,
    customer_name,
    customer_email_id,
    type_of_query,
    attachment,
    description,
  } = req.body;

  if (
    mobile_no &&
    organization_name &&
    customer_name &&
    customer_email_id &&
    type_of_query &&
    attachment &&
    description
  ) {
    const queryObj = new Query(req.body);
  } else {
    return res.json({ message: "All Fields are required" });
  }
  try {
    let size;
    await Query.count((err, count) => {
      if (err) console.log(err);
      else size = count;
    });
    queryObj["ticket_no"] = size + 1;
    console.log("QOBJ=", queryObj);
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
    req.profile = user;
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

//GET QUERIES
exports.getQueries = async (req, res) => {
  const { _id, organization_id } = req.body;
  try {
    const queries = await Query.findOne(
      { _id: _id, organization_id: organization_id },
      "ticket_no mobile_no organization_name customer_name customer_email_id type_of_query attachment description status"
    );
    if (!queries) {
      throw new Error("Please enter valid Id, No Document found");
    } else {
      return res.status(200).json({
        isValidExecution: true,
        query: queries,
      });
    }
  } catch (error) {
    return res.status(400).json({
      isValidExecution: false,
      error: error.message,
    });
  }
};
