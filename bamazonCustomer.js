var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",
//  REMEMBER TO SET PASSWORD TO ******* WHEN FINAL PUSH TO GITHUB AND POST INSTRUCTIONS IN README 
  // Your password
  password: "Kohlieo86",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});
function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "What product would you like to buy?(select item number)",
          "How many units of the product would you like to purchaces"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "What product would you like to buy?(select item number)":
          productToBuy();
          break;
  
        case "How many units of the product would you like to purchaces":
          howManyToBuy();
          break;
  
        }
      });
  }