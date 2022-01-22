var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  project_name: { type: String, required: true, maxLength: 30 },
  // supporters: [
  //   {
  //     supporters: [{ type: Schema.Types.ObjectId, ref: "Supporter" }],
  //   },
  // ],
  address: {
    street: { type: String, maxLength: 50 },
    city: { type: String, maxLength: 50 },
    zip_code: { type: Number, required: true, maxLength: 6 },
    country: { type: String, maxLength: 20 },
  },
  description: { type: String },
});

// Virtual for author's full name
ProjectSchema.virtual("name").get(function () {
  // To avoid errors in cases where an supporter does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  var fullname = "";
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ", " + this.first_name;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
});

// Virtual for supporter's URL
ProjectSchema.virtual("url").get(function () {
  return "/project/supporter/" + this._id;
});

let ProjectModel = mongoose.model("Project", ProjectSchema);

//Export model
module.exports = ProjectModel;
