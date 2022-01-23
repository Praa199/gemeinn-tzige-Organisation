var express = require("express");
var router = express.Router();
const ProjectModel = require("../models/projects");
const SupportertModel = require("../models/supporters");
let id;
var projekt;

/* GET current project page. */
router.get("/:id", function (req, res, next) {
  id = req.params.id;
  ProjectModel.findById(id)
    .then((response) => {
      projekt = response;
      res.render("../views/project-views/current-project.hbs", { projekt });
      console.log(projekt.project_name);
    })
    .catch((err) => {
      console.log(err);
    });
});

let formData;

// formular is sent
router.post("/${id}/formular", function (req, res, next) {
  console.log("id when form is sent", id);
  const {
    first_name,
    family_name,
    e_mail,
    street,
    city,
    zip_code,
    country,
    project_name,
    project_id: id,
    date_of_support,
    ammount,
    public,
    comments,
    newsletter,
  } = req.body;
  console.log("formular is being sent", req.body);
  //error when formular does not provide name, lastname and email
  if (!first_name || !family_name || !e_mail) {
    res.render("/:id", {
      errorMessage: "Formular nicht ausgefüllt",
    });
    return;
  }

  //current supporter is searched in database
  SupportertModel.findOne({ e_mail: e_mail })
    .then((unterstützer) => {
      console.log("unterstützer found", unterstützer);
      //when supporter is in database, registration is updated
      if (unterstützer) {
        SupportertModel.findOneAndUpdate(
          { e_mail: unterstützer.e_mail },
          {
            first_name: first_name,
            family_name: family_name,
            e_mail: e_mail,
            address: {
              street: street,
              city: city,
              zip_code: zip_code,
              country: country,
            },
            $push: {
              support: [
                {
                  project_name: projekt.project_name,
                  project_id: id,
                  date_of_support: Date.now(),
                  ammount: ammount,
                  public: public,
                  comments: comments,
                  newsletter: newsletter,
                },
              ],
            },
          },
          { new: true }
        )
          .then((result) => {
            console.log("updated supporter", result);
            res.redirect(`/eigentliche/:id`);
          })
          .catch((err) => {
            console.log("error updatin existing supporter", err);
            res.redirect(`/eigentliche/:id`);
          });

        //when supporter is not in database, registration is created
      } else if (!unterstützer) {
        SupportertModel.create({
          first_name,
          family_name,
          e_mail,
          address: { street, city, zip_code, country },
          support: [
            {
              project_name,
              project_id: id,
              date_of_support: Date.now(),
              ammount,
              public,
              comments,
              newsletter,
            },
          ],
        })
          .then((success) => {
            console.log("created supporter", succes);
            res.redirect(`/eigentliche/:id`);
          })
          .catch((err) => {
            console.log(err);
            res.redirect("/eigentliche/:id", {
              errorMessage: "Server error",
            });
          });
      }
      res.render("../views/project-views/current-project.hbs", { projekt });
    })
    .catch((err) => {
      console.log("unterstützer error", err);
    });
});

module.exports = router;
