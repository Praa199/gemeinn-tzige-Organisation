// Iteration #1
//(10)
const mongoose = require("mongoose");

// connection check(6)
require("../app.js");

const { Mongoose } = require("mongoose");

//require model(7)
const SupporterModel = require("../models/supporters.js");

//insert into model (create = insert & insertMany)(8)
SupporterModel.insertMany([
  {
    first_name: "Santo",
    family_name: "Enmascarado",
    e_mail: "santo@AAA.com",
    address: {
      street: "22 Wrestling av.",
      city: "Wrestling City",
      zip_code: 23456,
      country: "wrestling Country",
    },
    support: [
      {
        project_name: "save the Sharks",
        project_id: "61ebd8c4f79f4b2b211080ff",
        // date_of_support: Date.now,
        ammount: 500,
        public: false,
        comments: "Laborum labore excepteur anim pariatur.",
        newsletter: false,
      },
      {
        project_name: "save the Turtles",
        project_id: "61ebd8c4f79f4b2b21108100",
        // date_of_support: Date.now,
        ammount: 200,
        public: true,
        comments: "Eiusmod do est minim sint.",
        newsletter: true,
      },
    ],
  },

  {
    first_name: "Chapulin",
    family_name: "Colorado",
    e_mail: "chapulin@chanfle.com",
    address: {
      street: "22 Vecindad av.",
      city: "Vecindad City",
      zip_code: 23456,
      country: "Vecindad Country",
    },
    support: [
      {
        project_name: "save the Turtles",
        project_id: "61ebd8c4f79f4b2b21108100",
        // date_of_support: Date.now,
        ammount: 500,
        public: true,
        comments: "Laborum labore excepteur anim pariatur.",
        newsletter: false,
      },
      {
        project_name: "save the Rays",
        project_id: "61ebd8c4f79f4b2b21108101",
        // date_of_support: Date.now,
        ammount: 200,
        public: true,
        comments: "Eiusmod do est minim sint.",
        newsletter: true,
      },
    ],
  },
  {
    first_name: "Quetzal",
    family_name: "Coatl",
    e_mail: "quetzal@sol.com",
    address: {
      street: "33 Teotihuacan av.",
      city: "Teotihuacan City",
      zip_code: 23456,
      country: "Teotihuacan Country",
    },
    support: [
      {
        project_name: "save the Rays",
        project_id: "61ebd8c4f79f4b2b21108101",
        // date_of_support: Date.now,
        ammount: 500,
        public: true,
        comments: "Laborum labore excepteur anim pariatur.",
        newsletter: false,
      },
      {
        project_name: "save the Sharks",
        project_id: "61ebd8c4f79f4b2b211080ff",
        // date_of_support: Date.now,
        ammount: 200,
        public: true,
        comments: "Eiusmod do est minim sint.",
        newsletter: true,
      },
    ],
  },
])
  .then((result) => {
    console.log("Seeded Supporter");
    //always ^C or close connection after seeding(require mongoose at the top)(10):
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Supporter not seeded", err);
  });
