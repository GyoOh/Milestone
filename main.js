/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: 
 * 
 * Created Date: 
 * Author:
 * 
 */

// const IOhandler = require("./IOhandler"),
  // zipFilePath = `${__dirname}/myfile.zip`,
  // pathUnzipped = `${__dirname}/unzipped`,
  // pathProcessed = `${__dirname}/grayscaled`;
const unzipper = require('unzipper');
const fs = require("fs");
fs.createReadStream('./myfile.zip')
.pipe(unzipper.Extract({ path: 'gyo' }));
fs.readdir("gyo", (err, data) => {
  if (data.endsWith("png")) {
   
  } else {
    console.log(err);
  }
})

