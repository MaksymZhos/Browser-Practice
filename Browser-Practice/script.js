//Functions we Might Need

//roll die function
function roll_die(number=6) {
  return Math.floor(Math.random()*number);
}

//Function to generate enemy traits
//Do Later
//The idea is that we feed it a dictionary (or many) of traits and it randomly assigns them to a random enemy
var current_enemy = [];

// Sample Data Structure for Enemy: Name, Type, Description, health stat, attack_stat, mana_stat
var enemy_dictionary = {names: ["Alpha", "Beta", "Gamma"], types: ["water", "fire", "electric"]};

function create_enemy (enemy_dictionary) {
  //let returned_enemy = [];
  let name_length = enemy_dictionary['names'].length;
  let name_random = roll_die(name_length);
  let selected_name = enemy_dictionary['names'][name_random];

  // console.log(`Testing Name generation. Name length is ${name_length} and random name chosen is ${enemy_dictionary['names'][name_random]}`);
  console.log(`Testing Name generation. Name length is ${name_length} and random name chosen is ${selected_name}`);

  let type_length = enemy_dictionary['types'].length;
  let type_random = roll_die(type_length);
  let selected_type = enemy_dictionary['types'][type_random];
  // console.log(`Testing Type generation. Type length is ${type_length} and random name chosen is ${enemy_dictionary['types'][type_random]}`);
  console.log(`Testing Type generation. Type length is ${type_length} and random name chosen is ${selected_type}`);

  return selected_name, selected_type;

}

create_enemy(enemy_dictionary);

// Player data for now:
let player_dictionary = {name: "", level: 1, mana: 0}


//Do Later. Create a Function to do the Battle Stuff. I need some way of testing it out without messing with the Html

function battle (player, enemy) {


}


// We need an event listener for when the page loads

document.addEventListener("DOMContentLoaded", function () {
 
//I want to have a button that I use to load the battle stuff eventually.
//Reference to test button: 
var test_button = document.getElementById("test_button");

const test_div =  document.getElementById("test_div");

test_button.onclick = function() {
  alert("Hello! I am an alert box!!");
  test_div.textContent = "Testing";

}





});



// form part from me

document.addEventListener("DOMContentLoaded", function() {
  const nameForm = document.getElementById("name_form");
  const playerName = document.getElementById("player_name");

  nameForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission

      const usernameInput = document.getElementById("username");
      const playerNameValue = usernameInput.value;

      playerName.textContent = "Name: " + playerNameValue;

      // Hide the form
      nameForm.style.display = "none";
  });

  // Bonus: Automatically focus on the input field when the page loads
  document.addEventListener("focus", function() {
      const usernameInput = document.getElementById("username");
      usernameInput.focus();
  });
});

// button fixed
document.addEventListener("DOMContentLoaded", function() {
  const testButton = document.getElementById("test_button");

  testButton.addEventListener("click", function() {
      // Change button color
      testButton.style.backgroundColor = "#00bfff"; // Change to your desired color

      // Set timeout to revert the color after 1 second
      setTimeout(function() {
          testButton.style.backgroundColor = ""; // Revert to the original color or remove this line for default color
      }, 1000);
  });
});
