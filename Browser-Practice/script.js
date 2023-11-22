//Functions we Might Need

//roll die function
function roll_die(number=6) {
  return Math.floor(Math.random()*number);
}

//Function to generate enemy traits
//Do Later
//The idea is that we feed it a dictionary (or many) of traits and it randomly assigns them to a random enemy
var current_enemy = [];

// Sample Data Structure for Enemy: Name, element, Description, health stat, attack_stat, mana_stat
var enemy_dictionary = {names: ["Alpha", "Beta", "Gamma"], element: ["water", "fire", "electric"]};

//Sample Function to create an enemy
//Inputs: Takes in the dictionary we are using for that area:
//Notes: I know Python Functions has "Optional Values". I want to use something like that to make it easier to create an enemy so you don't need all the values present.
function create_enemy (enemy_dictionary) {
  //let returned_enemy = [];
  let name_length = enemy_dictionary['names'].length;
  let name_random = roll_die(name_length);
  let selected_name = enemy_dictionary['names'][name_random];

  // console.log(`Testing Name generation. Name length is ${name_length} and random name chosen is ${enemy_dictionary['names'][name_random]}`);
  console.log(`Testing Name generation. Name length is ${name_length} and random name chosen is ${selected_name}`);

  let element_length = enemy_dictionary['element'].length;
  let element_random = roll_die(element_length);
  let selected_element = enemy_dictionary['element'][element_random];
  // console.log(`Testing element generation. element length is ${element_length} and random name chosen is ${enemy_dictionary['element'][element_random]}`);
  console.log(`Testing element generation. element length is ${element_length} and random name chosen is ${selected_element}`);

  return selected_name, selected_element;

}

create_enemy(enemy_dictionary);


// Player data for now:
//player stats : name, health, level, mana, race, attack, weapon type, element, block
let player_dictionary = {name: "test_player", level: 1, health: 100, mana: 50, race: "", attack: 0, weapon_type: "", element: "", block: 1, exp:25};

let current_exp = player_dictionary.exp;
let level_coeficient = (player_dictionary.level / 10) + 1;
let base_mana = 50 * level_coeficient;
player_dictionary.mana = base_mana;
let base_health = 100 * level_coeficient;
player_dictionary.health = base_health;
if(player_dictionary.level == 1){
  player_dictionary.mana = 50
  player_dictionary.health = 100
};


  






function levelUp(exp){
  if((current_exp + exp) >= 100){
    player_dictionary.level = player_dictionary.level + 1;
    player_dictionary.exp = (current_exp + exp) - 100 ;
    
  }
  else{
    player_dictionary.exp = current_exp + exp
  }
  
  
}


/*

//Function to do damage calcs (disconnected from everything. Should just have the damage and block values)
//INPUTS: The attacker's attack value, The defender's block value
//OUTPUTS: The value for how much damage the defender takes
function damage_calc(attack_power, block_value) {

  //Example calculation 1: lets say block was 20 and damage was 10. Block - damage = 10. 10 >=10. So do what Pokemon does and do at least 1 damage
  if (block_value => attack_power) {
    return 1
  }

  //Example Calulation 2: Lets say Block was 8, damage was 10. 8 - 10 = -2. -2 < 10. So End result is that the player should lose 2/10 or 20% of their health, rounded up
  
  
  return  Math.ceil((block_value - attack_power)/attack_power)
  
    
  
}

//Function to manually create every aspect of an enemy. Could be useful in testng
//Inputs: The individual stats for the enemy you wish to edit. In order: They are  name,  element, description, health stat, attack_stat, mana_stat. Since this is a manual creator, we can set level and stats directly for now. We could create a seperate function to adjust stats using level if we need to

//level will be like coeficient so if the level is 2 multiply everything by 1.2 etc. Sure

/*
 function CreateEnemy(){
  current_enemy"dictionary" = random_enemy(Location, Level)
}

// Move the Roll Die function outside of Battle so we can more easily control turns
//roll the dice for 1 or 2 to know who attacks first
//current_turn = roll_die(2)

function Battle(current_enemy, location, current_turn){
  //damage variable to hold the current damage dealth
  let damage = 0
  let block_value = 0
  if (current_turn == 1) { 

    //roll the dice for the base damage dealt (without any modifications)
    damage = roll_die(player_dictionary['attack'])

    //calculate damage after block by finding the percentage out of damage that wielding-block equal too and then mulitplying it by damage
    block_value = current_enemy['block'] - damage

    //Example calculation 1: lets say block was 20 and damage was 10. Block - damage = 10. 10 >=10. So do what Pokemon does and do at least 1 damage

    //Example Calulation 2: Lets say Block was 8, damage was 10. 8 - 10 = -2. -2 < 10. So End result is that the player should lose 2/10 or 20% of their health, rounded up

    //I kinda what to use a function that calcs this stuff rather than copy past the damage calcs in both if statements

    //Made the function Now to use it
    damage = damage_calcs(damage, block_value)

    //Room here to implement the 10% shifting thing.

    //Since damage is negative, shouldn't the sum be positive?

    player_dictionary['health'] = player_dictionary['health'] + damage



    
    
  }
  else {

    //roll the dice for the base damage dealt (without any modifications)
    damage = roll_die(current_enemy['attack'])

    //calculate damage after block by finding the percentage out of damage that wielding-block equal too and then mulitplying it by damage
    block_value = player_dictionary['block'] - damage

    //Made the function Now to use it
    damage = damage_calcs(damage, block_value)

    //Room here to implement the 10% shifting thing

    //Since damage is negative, shouldn't the sum be positive?

    current_enemy['health'] = current_enemy['health'] + damage
    
  }
  //roll the dice for the base damage dealt (without any modifications)
   
  // compare block/weapon wielding
  //calculate damage after block by finding the percentage out of damage that wielding-block equal too and then mulitplying it by damage
  //minus the energy assigned to attack (randomly +/- 10% to assingend value)
  //check health of both if someone died break out of fight
  otherwise ran fight again but dont roll the dice and just switch attaker
  //If we want to switch attackers, then the roll die should probably be outside of the function, or be an optional arguement

  // We should have return values that indicate different things

  if (player_dictionary['health'] < 0) {
    //We need a return value that tells us player is dead
    return 1
  }
  if (current_enemy['health'] < 0) {
    return 2
  }

}
*/




//Do Later. Create a Function to do the Battle Stuff. I need some way of testing it out without messing with the Html


// form part from me
function setName(playerNameValue,player_dictionary){
  player_dictionary.name = playerNameValue};


document.addEventListener("DOMContentLoaded", function() {
  
  const levelStatus = document.getElementById("level");
  const player_mana = document.getElementById("mana");
  const player_health = document.getElementById("health");
  const nameForm = document.getElementById("name_form");
  const playerName = document.getElementById("player_name");
  const travler_name = document.getElementById("travler_name");
  let current_health = 85;






   let current_mana_set = 10;










  
  let health_percentage = (current_health/player_dictionary.health )*100
  let mana_percentage = (current_mana_set/player_dictionary.mana)*100

  levelStatus.textContent = "Level: " + player_dictionary.level;
  player_health.style.fontSize = "2vw";
  player_health.textContent = "Health: " + current_health + "/" + player_dictionary.health
  player_health.style.background = 'linear-gradient(to right, #db343c ' + health_percentage + '%, #262727 10%)';
  player_mana.style.fontSize = "2vw";
  player_mana.textContent = "Mana: " + current_mana_set + "/" + player_dictionary.mana;
  player_mana.style.background = 'linear-gradient(to right, #3493db ' + mana_percentage + '%, #262727 10%)';

 
   
    

  nameForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission

      const usernameInput = document.getElementById("username");
      const playerNameValue = usernameInput.value;
      setName(playerNameValue,player_dictionary)
      travler_name.textContent = "Are You Ready To Begin Your Jorney " + player_dictionary.name +"?";

      playerName.textContent = "Name: " + player_dictionary.name;
      
      // Hide the form
      nameForm.style.display = "none";
      return playerNameValue
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
      var box = document.getElementById('page1');
      var book = document.getElementById('book');
      var page = document.getElementById('start_page')
          box.classList.add('animate');

      // Set timeout to revert the color after 1 second
      setTimeout(function() {
          testButton.style.backgroundColor = "";
          book.addEventListener('mouseleave', function() {
            
            box.classList.remove('animate'); // Remove the 'animate' class to stop the animation
          });
          

      }, 600);
  });
});

//Test the battle function:
//Create a test enemy
current_enemy = {'name': "test_enemy", 'health': 5, 'mana': 5, 'attack': 90, 'block': 5};
player_dictionary.attack = 90

//Function to do damage calcs (disconnected from everything. Should just have the damage and block values)
//INPUTS: The attacker's attack value, The defender's block value
//OUTPUTS: The value for how much damage the defender takes
function damage_calc(attack_power, block_value) {

  //Example calculation 1: lets say block was 20 and damage was 10. Block - damage = 10. 10 >=10. So do what Pokemon does and do at least 1 damage
  if (block_value => attack_power) {
    return 1
  }

  //Example Calulation 2: Lets say Block was 8, damage was 10. 8 - 10 = -2. -2 < 10. So End result is that the player should lose 2/10 or 20% of their health, rounded up
  
  
  return  Math.ceil((block_value - attack_power)/attack_power)
  
    
  
}

function damage_calc(attack_power, block_value) {

  //Example calculation 1: lets say block was 20 and damage was 10. Block - damage = 10. 10 >=10. So do what Pokemon does and do at least 1 damage
  if (block_value >= attack_power) {
    return 1
  }

  //Example Calulation 2: Lets say Block was 8, damage was 10. 8 - 10 = -2. -2 < 10. So End result is that the player should lose 2/10 or 20% of their health, rounded up
  
  
  return  Math.ceil(0-(block_value - attack_power)/attack_power)
  
    
  
}

// Move the Roll Die function outside of Battle so we can more easily control turns
//roll the dice for 1 or 2 to know who attacks first
//current_turn = roll_die(2)

function Battle(current_enemy, current_turn=1, location=1){
  //damage variable to hold the current damage dealth
  let damage = 0
  let block_value = 0
  let list_of_responses = []
  if (current_turn == 1) { 

    //roll the dice for the base damage dealt (without any modifications)
    damage = roll_die(current_enemy['attack'])

    //calculate damage after block by finding the percentage out of damage that wielding-block equal too and then mulitplying it by damage
    block_value = player_dictionary['block'] - damage

    //Example calculation 1: lets say block was 20 and damage was 10. Block - damage = 10. 10 >=10. So do what Pokemon does and do at least 1 damage

    //Example Calulation 2: Lets say Block was 8, damage was 10. 8 - 10 = -2. -2 < 10. So End result is that the player should lose 2/10 or 20% of their health, rounded up

    //I kinda what to use a function that calcs this stuff rather than copy past the damage calcs in both if statements

    //Made the function Now to use it
    damage = damage_calc(damage, block_value)

    //Room here to implement the 10% shifting thing.

    //Since damage is negative, shouldn't the sum be positive?

    player_dictionary['health'] = player_dictionary['health'] - damage;

    list_of_responses.push(`${player_dictionary.name} took ${damage} damage`)
    



    
    
  }
  else {

    //roll the dice for the base damage dealt (without any modifications)
    damage = roll_die(player_dictionary['attack'])

    //calculate damage after block by finding the percentage out of damage that wielding-block equal too and then mulitplying it by damage
    block_value = create_enemy['block'] - damage

    //Made the function Now to use it
    damage = damage_calcs(damage, block_value)

    //Room here to implement the 10% shifting thing

    //Since damage is negative, shouldn't the sum be positive?

    current_enemy['health'] = current_enemy['health'] - damage;
    list_of_responses.push(`${current_enemy.name} took ${damage} damage`)
    
  }
  //roll the dice for the base damage dealt (without any modifications)
   
  // compare block/weapon wielding
  //calculate damage after block by finding the percentage out of damage that wielding-block equal too and then mulitplying it by damage
  //minus the energy assigned to attack (randomly +/- 10% to assingend value)
  //check health of both if someone died break out of fight otherwise ran fight again but dont roll the dice and just switch attaker
  //If we want to switch attackers, then the roll die should probably be outside of the function, or be an optional arguement

  // We should have return values that indicate different things

  if (player_dictionary['health'] < 0) {
    //We need a return value that tells us player is dead
    list_of_responses.push(`${player_dictionary.name} has died`)

    return 1, list_of_responses
  }
  if (current_enemy['health'] < 0) {
    list_of_responses.push(`${current_enemy.name} has died`)
    return 2, list_of_responses
  }

  return 0, list_of_responses

}


document.addEventListener("DOMContentLoaded", function() {

  counter = 0
  const test_battle_Button = document.getElementById("test_battle_button");

  test_battle_Button.addEventListener("click", function() {
      // Change button color
      test_battle_Button.style.backgroundColor = "#00bfff"; 
      
      setTimeout(function() {
        test_battle_Button.style.backgroundColor = "";
        }, 600);

        counter = counter += 1;
        //player_dictionary.level += 1;

        //time to test the battle function:
        battle_response = Battle(enemy_dictionary, 1, 1)
        console.log(battle_response)
        document.getElementById("test_div_2").innerHTML = `Hopefully new text and counter goes up ${counter} and battle response is ${battle_response}. Player has ${player_dictionary.health} left`;





        //document.getElementById("test_div_2").innerHTML = `Hopefully new text and counter goes up ${counter} and player level is ${player_dictionary.level}`



        //document.getElementById("test_div_2").innerHTML = `Hopefully new text and counter goes up ${counter}`
        // player_dictionary.level += 1;



        
       
  });
});


