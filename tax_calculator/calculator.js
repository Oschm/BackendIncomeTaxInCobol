const fs = require("fs");
const path = require("path");
const {
    resolve
} = require('path');

const basePath = process.env.GNUCOBOL_DIRECTORY
process.env["COB_MAIN_DIR"] = basePath;
process.env["COB_CONFIG_DIR"] = basePath + "\\config";
process.env["COB_CFLAGS"] = '-I"' + basePath + '\\include"';
process.env["COB_LDFLAGS"] = '-L"' + basePath + '\\lib"';


// Dependencies
var Cobol = require("../lib");

const calculator = {
    calculateIncomeTax: function (grossIncome, maritalStatus, year, callback) {
        // Dependencies
        console.log("calculater.js enter function calculateIncomeTax with arguments grossIncome: " + grossIncome + " maritalStatus:  " + maritalStatus + " year: " + year);
        var Cobol = require("../lib");
        // Execute some COBOL snippets
        var bla = callback
        Cobol(__dirname + "/incomeTax.cbl", {
            args: [grossIncome, maritalStatus, year]
        }, function (err, data) {
            console.log("err: " + err + " data: " + data);
            this._deleteDirFilesUsingPattern(/^tmp/);
            callback(data);

        }.bind(this));
    },
    testCobol: function (callback) {
        // Dependencies
        var Cobol = require("../lib");

        // Execute some COBOL snippets
        Cobol(__dirname + "/incomeTax.cbl", {
            args: [2000.00, "N", 2023]
        }, function (err, data) {
            console.log("err: " + err + " data: " + data);
            this._deleteDirFilesUsingPattern(/^tmp/);
            callback(data);

        }.bind(this));
    },
    _deleteDirFilesUsingPattern: function (pattern, dirPath = __dirname) {
        // default directory is the one above the current directory
        // get all file names in directory
        fs.readdir(resolve(path.dirname(dirPath)), (err, fileNames) => {
            if (err) throw err;

            // iterate through the found file names
            for (const name of fileNames) {

                // if file name matches the pattern
                if (pattern.test(name)) {

                    // try to remove the file and log the result
                    fs.unlink(resolve(name), (err) => {
                        if (err) throw err;
                        console.log(`Deleted ${name}`);
                    });
                }
            }
        });
    }
};

module.exports = calculator;