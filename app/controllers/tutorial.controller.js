const Tutorial = require("../models/tutorial.model.js");



// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    eid: req.body.eid,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin,
    //cname: req.body.cname,
    //clogin: req.body.clogin,
    //cadmin: req.body.cadmin,
  });



  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

exports.createtest = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    a: req.body.a,
    b: req.body.b,
    c: req.body.c,
    d: req.body.d,

  });



  // Save Tutorial in the database
  Tutorial.createtest(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

exports.createrole = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    rid: req.body.rid,
    rname: req.body.rname,
    redit: req.body.redit,
    radd: req.body.radd,
    rdelete: req.body.rdelete,

  });



  // Save Tutorial in the database
  Tutorial.createrole(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};









// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    Tutorial.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};


exports.findtest = (req, res) => {
  const title = req.query.title;

  Tutorial.gettest(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findrole = (req, res) => {
  const title = req.query.title;

  Tutorial.getrole(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

  
exports.findAllAdmin = (req, res) => {
    Tutorial.getAllAdmin((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};

exports.findCurrent = (req, res) => {
  Tutorial.getCurrent((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};


exports.findAllHr = (req, res) => {
  Tutorial.getAllHr((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};


exports.findAlluser = (req, res) => {
  const title = req.query.title;

  Tutorial.getAlluser(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findAllPublished = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};


// Find a single Tutorial with a id
exports.findOne = (req, res) => {
    Tutorial.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Tutorial with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};

exports.findOneCurrent = (req, res) => {
  Tutorial.findByIdCurrent(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tutorial.updateById(
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Update a Tutorial identified by the id in the request


exports.update = (req, res) => {
  // Validate Request
if (!req.body) {
  res.status(400).send({
    message: "Content can not be empty!"
  });
}

console.log(req.body);

Tutorial.updateById(
  req.params.id,
  new Tutorial(req.body),
  (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  }
);

};

exports.updaterole = (req, res) => {
  // Validate Request
if (!req.body) {
  res.status(400).send({
    message: "Content can not be empty!"
  });
}

console.log(req.body);

Tutorial.updateByIdrole(
  req.params.id,
  new Tutorial(req.body),
  (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  }
);

};


exports.updateCurrent = (req, res) => {
  // Validate Request
if (!req.body) {
  res.status(400).send({
    message: "Content can not be empty!"
  });
}

console.log(req.body);

Tutorial.updateByIdCurrent(
  req.params.id,
  new Tutorial(req.body),
  (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  }
);

};




// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    Tutorial.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Tutorial with id " + req.params.id
            });
          }
        } else res.send({ message: `Tutorial was deleted successfully!` });
      });
};
exports.deleterole = (req, res) => {
  Tutorial.removerole(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Tutorial with id " + req.params.id
          });
        }
      } else res.send({ message: `Tutorial was deleted successfully!` });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        else res.send({ message: `All Tutorials were deleted successfully!` });
      });
};