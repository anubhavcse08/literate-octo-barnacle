var fs = require('fs'),
    xml2js = require('xml2js');

    var parse = new xml2js.Parser();
    fs.readFile('cd_catalog.xml', function(err,data){
        parse.parseString(data, function(err, result) {
            console.dir(result);
            console.log('Read Finished...')
        })
    })