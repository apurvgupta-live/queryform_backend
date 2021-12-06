const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
const querySchema = new mongoose.Schema(
  {
    ticket_no: { type: Number },
    mobile_no: { type: Number, required: true },
    type_of_query: { type: String, required: true },
    attachment: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

// querySchema.plugin(autoIncrement.plugin, {
//   model: "Query",
//   field: "tct_no",
//   startAt: 10000,
//   incrementBy: 1,
// });
module.exports = mongoose.model("Query", querySchema);
