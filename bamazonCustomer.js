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
    // console.log("connected as id " + connection.threadId);
  
    connection.query("SELECT * FROM products", function(err, results){
      if(err) throw err;
      console.log(results);
      connection.end();
    })


  displayAndAsk();
});
function displayAndAsk() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "Would you like to buy a product",
        choices: [
          "Yes",
          "No. Just browsing."
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Yes":
          productToBuy();
          break;
  
        case "No. Just browsing.":
          declinedSale();
          break;
        }
      });
    } 

function declinedSale(){

        console.log("Let me know if you need any help.\n");
        // inquirer
        // .prompt({
        //     message: "Let me know if you need any help."
        //   })
        displayAndAsk();
    }


function productToBuy(){
    inquirer
    .prompt({
        name: "id",
        type: "input",
        message: "Which ID of the product you would like to buy"
      })
    
    .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].id < 0) {
            inquirer
            .prompt({
                name: "id",
                type: "input",
                message: "How many units of the product would you like to buy"
              });
          }
        }

    //     // determine if bid was high enough
    //     if (chosenItem.highest_bid < parseInt(answer.bid)) {
    //       // bid was high enough, so update db, let the user know, and start over
    //       connection.query(
    //         "UPDATE auctions SET ? WHERE ?",
    //         [
    //           {
    //             highest_bid: answer.bid
    //           },
    //           {
    //             id: chosenItem.id
    //           }
    //         ],
    //         function(error) {
    //           if (error) throw err;
    //           console.log("Bid placed successfully!");
    //           start();
    //         }
    //       );
    //     }
    //     else {
    //       // bid wasn't high enough, so apologize and start over
    //       console.log("Your bid was too low. Try again...");
    //       start();
    //     }
    //   });
    // }
    // inquirer
    //   .prompt({
    //     name: "action",
    //     type: "list",
    //     message: "What would you like to do?",
    //     choices: [
    //       "What product would you like to buy?(select item number)",
    //       "How many units of the product would you like to purchaces"
    //     ]
    //   })
    //   .then(function(answer) {
    //     switch (answer.action) {
    //     case "What product would you like to buy?(select item number)":
    //       productToBuy();
    //       break;
  
    //     case "How many units of the product would you like to purchaces":
    //       howManyToBuy();
    //       break;
    //     }
      });
    }