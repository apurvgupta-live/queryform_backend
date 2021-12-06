const express = require("express");
const router = express.Router();
const {
  addQuery,
  getUserById,
  getUser,
  updateUser,
  getQueries,
} = require("../controllers/query");
const { body, validationResult } = require("express-validator");

const validation = [
  body("ticket", "Enter the ticket no"),
  body("OrganisationName", "Enter the organisation name"),
  body("customerEmailId", "Enter the Email").isEmail(),
  body("customerMobNo", "Enter the Mobile No").isNumeric(),
  body("queryType", "Enter the query Type"),
  body("otherQueryType", "Enter the other query type"),
  body("queryDescription", "Enter query description"),
  body("queryNature", "Enter the query nature"),
  body("queryAssignerTo", "Enter the query assigner"),
  body("teamName", "Enter team name"),
  body("queryStatus", "Enter query status"),
  body("queryStage", "Enter query stage"),
  body("stageChangeDate", ""),
  body("futureRequestReason", ""),
  body("queryAgeing", ""),
  body("createDateAndTime", ""),
  body("createdBy", ""),
  body("modifyDateAndTime", ""),
  body("modifyBy", ""),
  body("closureDateAndTime", ""),
  body("testingStatus", ""),
  body("testingDoneBy", ""),
  body("testingAgeing", ""),
  body("testingCompletionDate", ""),
  body("priority", ""),
  body("notes", ""),
  body("attachment", ""),
  body("totalAgeing", ""),
  body("customerRating", ""),
  body("customerFeedback", ""),
];

//PARAMETER ROUTE
router.param("userId", getUserById);

//WRITE ROUTE
router.post("/addQuery", validation, addQuery);

//READ ROUTE
router.get("/user/:userId", getUser);
router.get("/getqueries", getQueries); //For Frontend
//UPDATE USER
router.put("/user/:userId", updateUser);

module.exports = router;
