const mongoose = require("mongoose");
const querySchema = new mongoose.Schema(
  {
    ticket_no: { type: String, unique: true, required: true },
    organization_name: { type: String, required: true },
    customer_name: { type: String, required: true },
    customer_email_id: { type: String, unique: true, required: true },
    customer_mob_no: { type: String, unique: true, required: true },
    query_type: { type: String, required: true },
    other_query_type: { type: String, required: true },
    query_description: { type: String, required: true },
    query_nature: { type: String, required: true },
    query_assigner_to: { type: String, required: true },
    team_name: { type: String, required: true },
    query_status: { type: String, required: true },
    query_stage: { type: String, required: true },
    stage_change_at: { type: Date, required: true },
    future_equest: { type: String, required: true },
    query_ageing: { type: String, required: true },
    create_date_and_time: { type: Date, required: true },
    created_by: { type: String, required: true },
    modify_date_and_time: { type: String, required: true },
    modify_by: { type: String, required: true },
    closure_date_and_time: { type: Date, required: true },
    testing_status: { type: String, required: true },
    testing_done_by: { type: String, required: true },
    testing_ageing: { type: String, required: true },
    testing_completion_date: { type: String, required: true },
    priority: { type: String, required: true },
    notes: { type: String, required: true },
    attachment: { type: String, required: true },
    total_ageing: { type: String, required: true },
    customer_rating: { type: String, required: true },
    customer_feedback: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
