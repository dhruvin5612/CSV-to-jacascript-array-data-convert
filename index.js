const fs = require("fs");
const csv = require("csvtojson");
const { parser } = require('json2csv');



(async () => {
    
    const cars = await csv().fromFile("index.csv");
    console.log(cars);
    
    // const final = cars;

    // buildTable(final)

    // function buildTable(data) {
    //     var table = document.getElementById('myTable');

    //     for (var i = 0; i < data.length; i++) {
    //         var row = `<tr>
	// 						<td>${data[i].name}</td>
	// 						<td>${data[i].age}</td>
	// 						<td>${data[i].birthdate}</td>
	// 				  </tr>`
    //         table.innerHTML += row


    //     }
    // }

})();









