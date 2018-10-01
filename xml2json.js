let fs = require('fs');
xml2js = require('xml2js');

let parser = new xml2js.Parser();
fs.readFile(__dirname + '/ExampleFeedSrikanth.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        fs.writeFile("data.json", JSON.stringify(result, undefined, 4), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("XML is converted to JSON");
        });
    });
});