const mongoose = require("mongoose");
const querySchema = new mongoose.Schema({
  ticketNo: { type: Number, unique: true, required: true },
  organizationName: { type: String, required: true },
  customerName: { type: String, required: true },
  customerEmailId: { type: String, unique: true, required: true },
  customerMobNo: { type: String, unique: true, required: true },
  queryType: { type: String, required: true },
  otherQueryType: { type: String, required: true },
  queryDescription: { type: String, required: true },
  queryNature: { type: String, required: true },
  queryAssignerTo: { type: String, required: true },
  teamName: { type: String, required: true },
  queryStatus: { type: String, required: true },
  queryStage: { type: String, required: true },
  stageChangeDate: { type: Date, required: true },
  futureRequestReason: { type: String, required: true },
  queryAgeing: { type: Number, required: true },
  createDateAndTime: { type: Date, required: true },
  createdBy: { type: Number, required: true },
  modifyDateAndTime: { type: Date, required: true },
  modifyBy: { type: String, required: true },
  closureDateAndTime: { type: Date, required: true },
  testingStatus: { type: Date, required: true },
  testingDoneBy: { type: String, required: true },
  testingAgeing: { type: Number, required: true },
  testingCompletionDate: { type: Date, required: true },
  priority: { type: String, required: true },
  notes: { type: String, required: true },
  attachment: { type: String, required: true },
  totalAgeing: { type: Number, required: true },
  customerRating: { type: Number, required: true },
  customerFeedback: { type: String, required: true },
});

module.exports = mongoose.model("Query", querySchema);
