const readlineSync = require('readline-sync');
let items = [];
let exit = false;


function main() {
    while (!exit) {
        let answer;
        greetings();
        console.log("Since we are good do you want to exit te app or continue?");
        answer = readlineSync.question("Exit or Continue \n");
        if (answer.toLowerCase() === "exit") {
            console.log("Bye bye");
            exit = true;
            return exit;
        }

        let item = readlineSync.question("Give me an item\n");
        console.log("You gave me " + item + " as an item\n");

        console.log("Now do you want to add it to the list?\n");
        answer = readlineSync.question("Yes or No\n");
        if (answer.toLowerCase() === "yes") {
            addItem(item);
        }


        console.log("Do you want to showcase the items in the list?\n");
        answer = readlineSync.question("Yes or No\n");
        if (answer.toLowerCase() === "yes") {
            showItems();
        }

        console.log("Now do you want to delete it from the list?\n");
        answer = readlineSync.question("Yes or No\n");
        if (answer.toLowerCase() === "yes") {
            deleteItem(item);
        }
    }
}

function greetings() {
    console.log("Hello to you trying to learn js!");
}


function addItem(item) {
    items.push(item);
    console.log(item + "addItem");
}

function deleteItem(item) {

    items.splice(item, 1);
    console.log(item + "deleteItem");
}

function showItems() {
    console.log("Here are your items:");
    items.forEach(function(item, index) {
        console.log(index + 1 + ". " + item);
    });
}

main();

