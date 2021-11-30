const Query = require("../models/query");

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
