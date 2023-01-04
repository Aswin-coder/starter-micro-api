module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const tutorialstest = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/user", tutorials.create);

    router.post("/test", tutorialstest.createtest);

    router.post("/role", tutorials.createrole);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    router.get("/test", tutorials.findtest);
    router.get("/role", tutorials.findrole);

    router.get("/current", tutorials.findCurrent);


    router.get("/user", tutorials.findAlluser);
  
    // Retrieve all published Tutorials
    router.get("/admin", tutorials.findAllAdmin);

    router.get("/hr", tutorials.findAllHr);
  
    // Retrieve a single Tutorial with id
    router.get("/user/:id", tutorials.findOne);

    router.get("/current/:id", tutorials.findOneCurrent);
  
    // Update a Tutorial with id
    router.put("/user/:id", tutorials.update);

    router.put("/role/:id", tutorials.updaterole);

    router.put("/current/:id", tutorials.updateCurrent);

  
    // Delete a Tutorial with id
    router.delete("/user/:id", tutorials.delete);
    router.delete("/role/:id", tutorials.deleterole);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/data', router);
  };