const request = require('request');
const mongoose = require('mongoose');
const menud = mongoose.model('Menu');

const menuCreate = (req, res) => {
  menud.create({
    name: req.body.name,
    price: req.body.address,
    description: req.body.description,
  }, (err, menu) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(menu);
    }
  });
  
};
const menuDeleteOne = (req, res) => {
  const { menuid } = req.params;
  if (menuid) {
    menud
      .findByIdAndRemove(menuid)
      .exec((err, menu) => {
        if (err) {
          return res
            .status(404)
            .json(err);
        }
        res
          .status(204)
          .json(null);
      }
      );
  } else {
    res
      .status(404)
      .json({
        "message": "No menu"
      });
  }
};
const menuReadOne = (req, res) => {
  menud
  .find()
  .then(products => {
      return products;
  })
  .catch(err => {
      return res.json({ msg: "Unable to fetch the products-"+err, err: true });
  });

  menud
  .find()
  .exec((err, products) => {
    if (!products) {
      return res
        .status(404)
        .json({"message": "products not found"});
    } else if (err) {
      return res
        .status(404)
        .json(err);
    } else {
      return res
        .status(200)
        .json(products);
    }
  });
};

const menuUpdateOne = (req, res) => {
  if (!req.params.menuid) {
    return res
      .status(404)
      .json({
        "message": "Not found, menuid is required"
      });
  }
  menud
    .findById(req.params.menuid)
    .exec((err, menu) => {
      if (!menu) {
        return res
          .json(404)
          .status({
            "message": "menuid not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      menu.name = req.body.name;
      menu.price = req.body.price;
      menu.description = req.body.description;
      menu.save((err, menu) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(menu);
        }
      });
    }
    );
};
const rendermenupage = (req, res, responseBody) => {
  res.render('menu-list', {
    title: 'our menu list',
    menu: responseBody
  });
};
const menulist = (req, res) => {
  const path = '/api/menu';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      rendermenupage(req, res, body);
    }
  );

}

module.exports = {
  menuCreate,
  menuDeleteOne,
  menuReadOne,
  menuUpdateOne
};