var express = require('express');
var router = express.Router();

// require the main controllers file
const ctrlHome = require('../controllers/home');
const ctrlAbout = require('../controllers/about');
const ctrlMenu = require('../controllers/menu');
const ctrlOrderdetails = require('../controllers/orderdetails');

//Reference the index method of the controllers in the route definition
router.get('/', ctrlHome.index)
router.get('/about', ctrlAbout.about)
router.get('/about/review/new', ctrlAbout.addReview);

// MENU
router
  .route('/menu')

  // .get(ctrlMenu.menuListByDistance)                 
  .post(ctrlMenu.menuCreate)
  .get(ctrlMenu.menuReadOne);
router
  .route('/menu/:menuid')

  .put(ctrlMenu.menuUpdateOne)
  .delete(ctrlMenu.menuDeleteOne);
//order
router
.route('/orderdetails')
.post(ctrlOrderdetails.orderdetailsCreate)

router
  .route('/orderdetails/:orderdetailsid')
  .get(ctrlOrderdetails.orderdetailsReadOne)
  .put(ctrlOrderdetails.orderdetailsUpdateOne)
  .delete(ctrlOrderdetails.orderdetailsDeleteOne);

module.exports = router;
