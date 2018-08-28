var router = require('express').Router();
const passportService = require('./passport');
const passport = require('passport');
const StaffController = require('../controllers/StaffController');
const Schedule = require('../controllers/Schedule');
const Product = require('../controllers/ProductController');
const AuthenticationController = require('../controllers/authentication_controller');
const CustomerInfoController = require('../controllers/CustomerInfoController');
const TransactionController = require('../controllers/TransactionController');
var requireAuth = passport.authenticate('jwt',{session: false});
var requireLogin = passport.authenticate('local',{session: false});
const Verify = require('../controllers/Verify');

// Auth 

function app(req,res,next){
	res.send("RUNNING LIVE SERVER FOR THESIS...")
}
 
router.route('/')
		.get(app);

router.route('/signup')
	.post(AuthenticationController.signup);

router.route('/signin')
	.post([requireLogin,AuthenticationController.signin]);

router.route('/customersignup')
	.post(AuthenticationController.customersignup);
router.route('/customersignin')
	.post(AuthenticationController.customersignin);
router.route('/services')
	.post(AuthenticationController.services);
router.route('/addservices')
	.post(AuthenticationController.addservices);
router.route('/staffBulk')
	.post(AuthenticationController.staffBulk);
router.route('/staffSpecialBulk')
	.post(AuthenticationController.staffSpecialBulk);
router.route('/customerBulk')
	.post(AuthenticationController.customerBulk);
router.route('/availservice')
	.post(AuthenticationController.availservice);
router.route('/savecustomer')
	.post(CustomerInfoController.savecustomer);
router.route('/updateservices')
	.post(AuthenticationController.updateservices);
router.route('/savecustomerservices')
	.post(CustomerInfoController.saveCustomerServices);
router.route('/savecustomerlocation')
	.post(CustomerInfoController.saveCustomerLocation);
router.route('/saveadminreport')
	.post(TransactionController.saveAdminReport);
router.route('/savetransaction')
	.post(TransactionController.saveTransaction);
router.route('/alreadyhaveservice')
	.post(AuthenticationController.alreadyhaveservice);
router.route('/addcustomerservice')
	.post(CustomerInfoController.addcustomerservice);
router.route('/updatecustomerservicestate')
	.post(CustomerInfoController.updatecustomerservicestate);
router.route('/returnactivecustomerservices')
	.post(CustomerInfoController.returnActiveCustomerServices);
router.route('/updatecustomerinfo')
	.post(CustomerInfoController.updateCustomerInfo);
router.route('/countactive')
	.post(CustomerInfoController.countActive);
router.route('/positionactive')
	.post(CustomerInfoController.positionActive);
router.route('/getrecords')
	.post(CustomerInfoController.getRecords);
router.route('/getcustomerinfo')
	.post(CustomerInfoController.getCustomerInfo);
router.route('/getactivestaffid')
	.post(CustomerInfoController.getActiveStaffId);
router.route('/getappointment')
	.post(StaffController.getAppointment);
router.route('/updatecustomeraddress')
	.post(CustomerInfoController.updateCustomerAddress);
router.route('/getstafftransaction')
	.post(StaffController.getStaffTransaction);
router.route('/retrievestaffprofile')
	.post(StaffController.retrieveStaffProfile);
router.route('/updatestaffprofile')
	.post(StaffController.updateStaffProfile);
router.route('/loginadmin')
	.post(StaffController.loginAdmin);
router.route('/signupadmin')
	.post(StaffController.signupAdmin);
router.route('/customerqueue')
	.post(StaffController.customerQueue);
router.route('/addskills')
	.post(StaffController.addSkills);
router.route('/verify')
	.post(Verify.verify);

// deletes
router.route('/deletebyid')
	.post(AuthenticationController.deleteById);
router.route('/deleteservices')
	.post(AuthenticationController.deleteservices);
router.route('/deletebycustomerid')
	.post(AuthenticationController.deleteByCustomerId);
router.route('/deleteactiveavail')
	.post(StaffController.deleteActiveAvail);


// PRODs


router.route('/orderservice')
	.post(StaffController.orderService);
router.route('/addcat')
	.post(Product.addCat);
router.route('/getcat')
	.post(Product.getCat);
router.route('/getservicetype')
	.post(Product.getServiceType);


// change pass
router.route('/changepass')
	.post(AuthenticationController.changeCustomerPassword);



// schedules


router.route('/getscheduledemployees')
	.post(Schedule.getScheduledEmployees);

router.route('/getlaterscheduled')
	.post(Schedule.getLaterScheduled);
router.route('/getneveravailable')
	.post(Schedule.getNeverAvailable);
router.route('/setappointment')
	.post(Schedule.setAppointment);
router.route('/checkappointment')
	.post(Schedule.checkAppointment);
router.route('/getmyapp')
	.post(Schedule.getMyAppointment);
router.route('/mypos')
	.post(Schedule.myPositionOnQueue);
	
// XXX
// function protected(req,res,next){
// 	res.send("Secret");
// }

// router.route('/protected')
// 	.get(requireAuth,protected);

module.exports = router;