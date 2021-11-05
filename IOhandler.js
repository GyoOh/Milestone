/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 
 * Author: 
 * 
 */


  PNG = require('pngjs').PNG,
  path = require('path');
  
  const unzipper = require('unzipper');
  const fs = require("fs");
const { resolve } = require('path');
  
 
  


  
/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  fs.createReadStream('./myfile.zip')
  .pipe(unzipper.Extract({ path: 'gyo' }));
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */

const readDir = dir => {
  return new Promise((resolve, reject) => {
    fs.readdir("gyo", (err,data) => {
      if (err) {
        reject(err);
        } else {
          data.shift(data.shift());
          resolve(data);
          }
        })
      })
    };
      

readDir("gyo").then(data => {console.log(data)})


/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */

const grayScale = (pathIn, pathOut) => {

};

module.exports = {
  unzip,
  readDir,
  grayScale
};
    