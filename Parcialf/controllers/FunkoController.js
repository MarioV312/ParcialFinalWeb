var Funko = require('../models/Funko');

module.exports.save = (req, res, next) => {
    Funko.findOne({
        personaje: req.body.personaje
    })
        .then((foundFunko) => {
            if (foundFunko) {
                throw new Error(`Funko ya existente ${req.body.personaje}`);
            }
            else {
                let newFunko = new Funko({
                    personaje: req.body.personaje,
                    tamaño: req.body.tamaño,
                    precio: req.body.precio,
                    tipo: req.body.tipo
                });
                newFunko.save();
                res.redirect('/funkos/');
            }
        })
}

module.exports.getOne = (req, res, next) => {
    Funko.findOne({
        personaje: req.params.personaje
    })
        .then((foundFunko) => {
            if (foundFunko)
                return res.status(200).json(foundFunko);
            else
                return res.status(400).json(null);
        })
        .catch(err => {
            next(err);
        })
}

module.exports.getAll = (req, res, next) => {
    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;

    Funko.find({})
        .limit(perPage)
        .skip(perPage * page)
        .then((funkos) => {
            return res.status(200).json(funkos);
        }).catch(err => {
            next(err);
        })
}

module.exports.update = (req, res, next) => {
    let update = {
      ...req.body
    };
  
    Funko.findOneAndUpdate(
      {
        personaje: req.params.personaje
      },
      update,
      {
        new: true
      }
    )
      .then(updated => {
        if (updated) return res.status(200).json(updated);
        else return res.status(400).json(null);
      })
      .catch(err => {
        next(err);
      });
  };

module.exports.delete = (req, res, next) => {
    Funko.findOneAndDelete({ personaje: req.params.personaje })
        .then((data) => {
            if (data) res.status(200).json(data);
            else res.status(404).send();
        }).catch(err => {
            next(err);
        })
};