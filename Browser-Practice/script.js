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

//Do Later. Create a Function to do the Battle Stuff



// We need an event listener for when the page loads

document.addEventListener("DOMContentLoaded", function () {


});

