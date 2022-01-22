// Iteration #1
//(10)
const mongoose = require("mongoose");

// connection check(6)
require("../app.js");

const { Mongoose } = require("mongoose");

//require model(7)
const ProjectModel = require("../models/projects");

//insert into model (create = insert & insertMany)(8)
ProjectModel.insertMany([
  {
    project_name: "Save The Sharks",
    // supporters: [
    // {
    //       supporters: [00000000, 22222222, 33333333],
    //   },
    // ],
    address: {
      street: "11 Shark Av. ",
      city: "Shark City",
      zip_code: 98765,
      country: "Shark Country",
    },
    description:
      "Consequat proident velit esse veniam culpa fugiat reprehenderit aute irure irure. Nostrud excepteur adipisicing ipsum commodo esse et amet. Ex eiusmod consectetur anim fugiat. Aliquip tempor nulla minim dolor irure voluptate dolor duis. Et laboris excepteur ex laborum deserunt labore aute eiusmod est est ullamco consequat. Sint qui dolor do amet commodo. Velit ex sint exercitation est ut ad irure adipisicing laborum. Amet non velit exercitation mollit magna culpa exercitation proident consequat eiusmod minim veniam elit. Nulla voluptate irure eiusmod esse et. Nulla ad laborum laboris esse consequat ad occaecat tempor quis sunt id deserunt dolore officia. Magna est est ex et quis nulla id labore labore non cupidatat. Incididunt nostrud incididunt nostrud fugiat reprehenderit culpa exercitation. Veniam cupidatat velit ut in laborum laboris elit commodo est cupidatat eiusmod proident. Ad aute mollit nostrud do veniam excepteur eu amet. Laboris ut exercitation sint laborum eu eiusmod sint consectetur duis. Veniam et culpa excepteur labore esse consectetur laborum. In consequat nisi ex aliqua. Quis adipisicing est fugiat incididunt et ipsum dolor ex laborum enim officia.",
  },
  {
    project_name: "Save The Turtles",
    // supporters: [
    // {
    //       supporters: [444444, 555555555, 5555666],
    //   },
    // ],
    address: {
      street: "11 Turtle Av. ",
      city: "Turtle City",
      zip_code: 98765,
      country: "Turtle Country",
    },
    description:
      "Consequat proident velit esse veniam culpa fugiat reprehenderit aute irure irure. Nostrud excepteur adipisicing ipsum commodo esse et amet. Ex eiusmod consectetur anim fugiat. Aliquip tempor nulla minim dolor irure voluptate dolor duis. Et laboris excepteur ex laborum deserunt labore aute eiusmod est est ullamco consequat. Sint qui dolor do amet commodo. Velit ex sint exercitation est ut ad irure adipisicing laborum. Amet non velit exercitation mollit magna culpa exercitation proident consequat eiusmod minim veniam elit. Nulla voluptate irure eiusmod esse et. Nulla ad laborum laboris esse consequat ad occaecat tempor quis sunt id deserunt dolore officia. Magna est est ex et quis nulla id labore labore non cupidatat. Incididunt nostrud incididunt nostrud fugiat reprehenderit culpa exercitation. Veniam cupidatat velit ut in laborum laboris elit commodo est cupidatat eiusmod proident. Ad aute mollit nostrud do veniam excepteur eu amet. Laboris ut exercitation sint laborum eu eiusmod sint consectetur duis. Veniam et culpa excepteur labore esse consectetur laborum. In consequat nisi ex aliqua. Quis adipisicing est fugiat incididunt et ipsum dolor ex laborum enim officia.",
  },
  {
    project_name: "Save The Rays",
    // supporters: [
    // {
    //       supporters: [666666, 777777777, 88888888],
    //   },
    // ],
    address: {
      street: "11 Ray Av. ",
      city: "Ray City",
      zip_code: 98765,
      country: "Ray Country",
    },
    description:
      "Consequat proident velit esse veniam culpa fugiat reprehenderit aute irure irure. Nostrud excepteur adipisicing ipsum commodo esse et amet. Ex eiusmod consectetur anim fugiat. Aliquip tempor nulla minim dolor irure voluptate dolor duis. Et laboris excepteur ex laborum deserunt labore aute eiusmod est est ullamco consequat. Sint qui dolor do amet commodo. Velit ex sint exercitation est ut ad irure adipisicing laborum. Amet non velit exercitation mollit magna culpa exercitation proident consequat eiusmod minim veniam elit. Nulla voluptate irure eiusmod esse et. Nulla ad laborum laboris esse consequat ad occaecat tempor quis sunt id deserunt dolore officia. Magna est est ex et quis nulla id labore labore non cupidatat. Incididunt nostrud incididunt nostrud fugiat reprehenderit culpa exercitation. Veniam cupidatat velit ut in laborum laboris elit commodo est cupidatat eiusmod proident. Ad aute mollit nostrud do veniam excepteur eu amet. Laboris ut exercitation sint laborum eu eiusmod sint consectetur duis. Veniam et culpa excepteur labore esse consectetur laborum. In consequat nisi ex aliqua. Quis adipisicing est fugiat incididunt et ipsum dolor ex laborum enim officia.",
  },
])
  .then((result) => {
    console.log("Seeded Project");
    //always ^C or close connection after seeding(require mongoose at the top)(10):
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Project not seeded", err);
  });
