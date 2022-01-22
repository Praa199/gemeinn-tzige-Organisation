var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SupporterSchema = new Schema({
  first_name: { type: String, maxLength: 30 },
  family_name: { type: String, maxLength: 30 },
  e_mail: { type: String, maxLength: 30 },
  address: {
    street: { type: String, maxLength: 50 },
    city: { type: String, maxLength: 50 },
    zip_code: { type: Number, maxLength: 6 },
    country: { type: String, maxLength: 20 },
  },
  support: [
    {
      project_name: { type: String },
      project_id: { type: Schema.Types.ObjectId, ref: "Project" },
      // date_of_support: { type: Date, default: Date.now },
      ammount: { type: Number },
      public: { type: Boolean },
      comments: { type: String, maxLength: 150 },
      newsletter: { type: Boolean },
    },
  ],
});

// Virtual for author's full name
SupporterSchema.virtual("name").get(function () {
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
SupporterSchema.virtual("url").get(function () {
  return "/project/supporter/" + this._id;
});

let SupporterModel = mongoose.model("Supporter", SupporterSchema);

//Export model
module.exports = SupporterModel;
