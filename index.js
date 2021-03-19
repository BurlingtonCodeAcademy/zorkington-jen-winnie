const { table } = require("console");
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

//------------------Actions---------------//

let inventory = [];
//let contents = [];
class Item {
  constructor(name, description, action, grabbable, location) {
    this.name = name;
    this.desc = description;
    this.action = action || "nothing happens...\n>_";
    this.grabbable = grabbable || false;
    this.location = location;
  }

  //if the player chooses to use, examine, grab, drop an item.
  grab() {
    // if you try to grab an item that doesn't exist it errors out
    if (this.grabbable && currentRoom === this.location) {
      inventory.push(this.name);
      return `You grabbed the ${this.name}.`;
      //push item to personal inventory to add it // this part works!
      //console.log(contents);
      //console.log(inventory);

      //(filter!==this.name) {
      // let newContents = content.filter(this.name)
      // contents.indexOf(this.name);
      // let pos = contents.indexOf(this.name);
      //newContents = contents.splice(pos, 1);
      // console.log(newContents);
      //}
    } else if (this.grabbable === false) {  // if an item isn't grabbable it wont go into their inventory and the game will tell them they can't grab it. 
      return `You can't grab that.\n>_`;
    }
    //console.log(this.name);
    ///let newContents = contents.filter(this.name); // do we need to create a new variable newcontents?
    // console.log(newContents);
    //console.log(contents);
    //let index = contents.indexOf(this.name);
    //console.log(index);
    //contents.splice(indexOf(this.name), 0, this.name);
    //let pos = contents.indexOf(this.name); //indexof is character based?
    //console.log(pos); // item is not found ....
    //let removedItem = contents.splice(index); //mayb not splice...
    //it is not working to remove item from contents
    //contents.pop(removedItem); //pop item from room contents to remove it
    //console.log(removedItem);
    
  }    // we tried to set it so the contents of a room would drop the item the user puts in their inventory

  use() {
    if (
      this.name === "cabinet" ||
      (this.name === "cabinet" && inventory.includes("studentID"))
    ) {
      // if the user has the studentID in their inventory and tries to open the cabinet, it will open.
      console.log(
        "you opened the cabinet, to find the lost and found and you drop off all your items here.\n Thank you for playing!"
      );
      process.exit();
    } else {
      return this.action;
    } // we need to add each object to one of the actions to put them into play
  }
 
  examine() {  // if the user examines an item it will return its description 
    if (this.name === "bubbler") {
      return bubbler.desc; 
    } else if (this.name === "globe") {
      return globe.desc;
    } else if (this.name === "backpack") {
      return backpack.desc;
    } else if (this.name === "folder") {
      // gives desc of undefined
      return folder.desc;
    } else if (this.name === "cabinet") {
      return cabinet.desc;
    } else if (this.name === "jacket") {
      return jacket.desc;
    } else if (this.name === "hallPass") {
      return hallpass.desc;
    } else if (this.name === "steps") {
      return steps.desc; 
    } else if (lookupTableOne.includes[this.name] === false) {
      console.log("Sorry, I can't do that");
    }  // if the item is not in the lookup table, you can't examine it. 
  }
  

  status() { // if user types in "status", it will tell them where they are and the items in their inventory.
    if (userAction === "status") {
      playerStatus ===
        console.log(
          "The player has " + inventory + " and is in the " + currentRoom
        );
    }
  }
  
}

//------------------Items-------------------//

let globe = new Item(
  "globe",
  `an old globe, with a child's name written on the base`,
  "the globe is now in your backpack",
  true,
  "classroom"
);
let chair = new Item(
  "a chair",
  "a chair at the lunch table, it looks like there's a jacket underneath....",
  "you can't grab the chair, but go ahead and have a seat!",
  false,
  "lunchroom"
);
let jacket = new Item(
  "jacket",
  "a brand-new jacket, still has the tags on",
  "you threw the jacket in your backpack",
  true,
  "lunchroom"
);
let studentID = new Item(
  "studentID",
  "Your studentID is 12345",
  "Your studentID is in your backpack",
  true,
  "schoolyard"
);
let bubbler = new Item(
  "bubbler fountain",
  `you can take a drink but that's it`,
  `you took a drink...`,
  false
);
let backpack = new Item(
  "backpack",
  `you found someone's backpack on the steps. This will be useful....`,
  "what could you do with this backpack?",
  true,
  "schoolyard"
);
let rope = new Item(
  "rope",
  "can you climb to the top of this rope...",
  `great job, you made it to the top! There's a folder up here...`,
  false,
  "gym"
);
let floor = new Item(
  "floor",
  "it looks like there's a hall pass on the floor....",
  "not sure how you can use the floor....",
  false,
  "lunchroom"
);
let hallpass = new Item(
  "hallpass",
  `there's a hallpass on the floor...`,
  "sneak out of the office back into the hall...",
  true,
  "office"
);
let quiz = new Item(
  "pop quiz",
  `here's a pop quiz for you.. what is 2 + 2?`,
  "How do you use a quiz?? you need to take the quiz.. and no cheating!",
  false,
  "classroom"
);
let cabinet = new Item(
  "cabinet",
  `what does this cabinet lead to...`,
  "you opened the cabinet to the lost and found, leave your items!",
  false
);
let steps = new Item(
  "front steps",
  "there is a backpack sitting here! what would you like to do with it?",
  "there is a backpack sitting here! what would you like to do with it?"
);
let frontDoor = new Item(
  "front door",
  `there is a sign on the front door! the sign says "You need to find all the objects and return them to the lost and found!"`,
  `the sign says "You need to find all the objects and return them to the lost and found!"`
);
let folder = new Item(
  "folder",
  "this is someone's folder, they probably don't want to lose this....",
  `Hmmm.... what could you do with a lost folder?`,
  true,
  "gym"
);
let ghost = new Item(
  "a ghost!",
  "uh oh! you ran into the tunnel ghost!!! you probably want to get out of here!",
  "you can't use a ghost.....",
  false
);
let lookupTableOne = {
  globe: globe,
  chair: chair,
  jacket: jacket,
  studentID: studentID,
  bubbler: bubbler,
  backpack: backpack,
  rope: rope,
  floor: floor,
  hallpass: hallpass,
  quiz: quiz,
  cabinet: cabinet, //how to add a code to open ?
  steps: steps,
  door: frontDoor,
  folder: folder,
  ghost: ghost,
};

// --------------------Rooms---------------------//

//defines the rooms in the school, and where you can move to from each room
let currentRoom = "schoolyard";

let roomsInSchool = {
  schoolyard: { canChangeTo: ["hall", "trees"] },
  trees: { canChangeTo: ["tunnel", "schoolyard"] },
  hall: {
    canChangeTo: ["schoolyard", "office", "lunchroom", "lounge"],
  },
  office: { canChangeTo: ["hall"] },
  lounge: { canChangeTo: ["hall"] }, // how to add a code to open?
  lunchroom: { canChangeTo: ["hall", "classroom", "gym"] },
  classroom: { canChangeTo: ["lunchroom"] },
  gym: { canChangeTo: ["lunchroom", "tunnel"] },
  tunnel: { canChangeTo: ["schoolyard", "gym"] },
};

class Room {
  constructor(description, contents, locked) {
    this.description = description;
    this.contents = contents; // this is the inventory of our room
    this.locked = locked || false;
  }
}
//each room with description, contents, and locked = true/false
let schoolyard = new Room(
  `You're outside again in the schoolyard. There is a door in front of you to get inside the school, a couple trees to the east. There is a sign on the door, and something sitting on the steps...`,
  ["studentID", "door", "steps", "backpack"],
  false
);
let trees = new Room(
  `You are amongst the trees.... is there a secret tunnel in the ground here?`,
  "there aren't any items in here....",
  false
);
let hall = new Room(
  `Welcome to the main hallway of the school. From here you can go north to go back outside, east to go to the Office, south to go to the lunchroom, or west to go to the Teachers' Lounge.(to enter the Teachers' Lounge, type "enter lounge")`,
  "there aren't any items in here....",
  false
);
let office = new Room(
  "Welcome to the office. You do not want to be here. The principal hasn't seen you YET; there's also something on the floor... ",
  ["hallpass", "floor"],
  false
);
let lounge = new Room(
  "The Teachers' Lounge is locked! You need to type in the code to enter",
  "there aren't any items in here....",
  true
);
let lunchroom = new Room(
  "You are now in the lunchroom. There is a water fountain in here, as well as a couple tables and chairs. There might be something under the chair....from here you can go back to the hall, to the classroom, or to the gym!",
  ["chair", "jacket", "bubbler"],
  false
);
let classroom = new Room(
  "welcome to the classroom! From here you can get back to the lunchroom... But first..... you have a pop quiz to take!",
  ["globe", "quiz"],
  false
);
let gym = new Room(
  "Welcome to the gym! From here you can get back to the lunchroom.... But there's a rope hanging from the ceiling... and a small cabinet at the back of the room...",
  ["folder", "rope"],
  false
);
let tunnel = new Room(
  "You're in a secret tunnel between the schoolyard and the gym! Great find! Keep going to get there....",
  ["ghost"],
  false
);

let lookupTableTwo = {
  schoolyard: schoolyard,
  trees: trees,
  hall: hall,
  office: office,
  lounge: lounge,
  lunchroom: lunchroom,
  classroom: classroom,
  gym: gym,
  tunnel: tunnel,
};
// this function locks the classroom once you enter. the only way to get out is to answer the quiz question correctly. then the classroom will unlock and you can leave! 
async function lockClassroom() {
  console.log(lookupTableTwo[classroom], "input array");
  lookupTableTwo["classroom"].locked = true;
  // else classroom.locked = false;
  while ((classroom.locked = true)) {
    let quizAnswer = await ask(
      "Uh oh.... You're locked in! \nTime for a pop quiz! Sharpen your pencils! \n Can you answer the super challenging math problem... \nWhat is 2+2?"
    );
    if (quizAnswer == "4") {
      classroom.locked = false;
      console.log(
        "Yay!! You got an A+ on the pop quiz!\n you can leave the classroom now!"
      );
      return play();
    } else {
      console.log(`So sorry, you're not good at math! Try again!`);
    }
  }
}

// the teachers' lounge is also locked. this function has it locked before you enter, and trying to enter prompts the game to ask you for the code to get in. if you get in, you're sent to the office. 
async function lockLounge() {
  console.log(lookupTableTwo[teachersLounge], "input array");
  lookupTableTwo["lounge"].locked = true;
  while ((teachersLounge.locked = true)) {
    let quizAnswer = await ask(
      "The Teachers' Lounge is locked! You have to enter the code found on your student ID..."
    );
    if (quizAnswer == "12345") {
      lounge.locked = false;
      console.log(
        "You're not supposed to be in here! You have to go to the office!"
      );
      currentRoom = office;
      return play();
    } else {
      console.log(`That's not the right code, but you probably shouldn't try to get in here....`);
    }
  }
}

async function play() {
  let answer = await ask("What would you like to do?\n>_");
  let inputArray = answer.split(" ");
  let action = inputArray[0];
  let target = inputArray[1]; //|| if (inputArray.length === 3) target = inputArray[1,2]; //figure out

  if (action === "use") {
    console.log(lookupTableOne[target].use());  
    // if user wants to "use" an item, the game will provide a relevant action or description depending on the object. 
    return play();
    // user can type in "inventory" to see what's in their inventory.
  } else if (inventory.length > 0 && action === "inventory") { 
    console.log(inventory);
    return play();
    // if nothing is in the inventory, aka its length is 0, it'll say it's empty. 
  } else if (inventory.length === 0 && action === "inventory") {
    console.log("it's empty!");
    return play();
  } else if (action === "examine") {  // if user examines an object, the game will provide its description. 
    if (lookupTableOne[target]) {  //if the item is in the lookup table, it will provide the desc.
      console.log(lookupTableOne[target].desc);
    } else console.log("sorry, you can't do that");
    return play();
  } else if (action === "contents") {
    // if user types "contents", the game will tell them what items are in that room. 
    room = lookupTableTwo[currentRoom];
    console.log(room.contents);
    return play();
  } else if (   // if the current room exists, and there aren't any items in it, the game will say so.
    currentRoom &&
    currentRoom.contents &&
    currentRoom.contents.length === 0 &&
    action === "contents"
  ) {
    console.log("There aren't any items in here");
    return play();
    // if the user types status, it will tell them what items are in their inventory and what room they're in.
  } else if (action === "status" && inventory.length > 0) {
    console.log(
      "The player has " + inventory + " and is in the " + currentRoom
    );
    return play();
    // if the user types status and they have no items it will tell them so. 
  } else if (action === "status" && inventory.length === 0) {
    console.log("The player has no items and is in the " + currentRoom);
    return play();
  } else if (action === "enter") {
    room = lookupTableTwo[target];
    console.log(room.description);
    // it wont show the description of the room now - how do we get that in?
    changeRooms();
    // if they type "enter classroom" the lockClassroom function will kick in. 
  } else if (action === "enter" && target === "classroom") {
    lockClassroom();
    console.log(this.description);
    return play();
    // if they type "enter teachersLounge" the lockLounge function will kick in.
  } else if (action === "enter" && target === "lounge") {
    lockLounge();
    console.log(this.description);
    return play();
  } else if (action === "grab") {  
    console.log(lookupTableOne[target].grab());
    return play();


  } else if (action === "drop") {
    if (
      inventory.includes(
        "globe",
        "jacket",
        "backpack",
        "hallpass",
        "folder",
        "studentID"
      )
    ) {
      console.log(
        "Thank you for returning all items to the lost and found. You win!"
      );
      process.exit();
    } else {
      console.log(
        "Sorry, you have not found all of the lost items. You cannot drop the items until you find them all! Please keep looking.."
      );
      return play();
    } //if they type anything other than these commands it will tell them it doesnt understand (how do we get it so that if they were to type "drop flkdjfalk" or "enter flkajfkld" it will tell them it doesnt understand? it will only 'not understand' single words...)
  } else {
    await ask(`sorry, I don't understand ${answer}\n>_`);
    play();
  }

  //function to check if changing between the rooms is allowed.

  //right now this doesn't work- it will both a. not let you enter any room and b. let you enter any room lol
  async function changeRooms(newRoom) {
    //console.log(newRoom);
    let validTransitions = roomsInSchool[currentRoom].canChangeTo;
    if (validTransitions.includes(newRoom)) {
      newRoom = currentRoom;
      //console.log(this.description)
      play();
    } else {
      console.log("You can't go that way\n>_");
      //for some reason this is triggered no matter what room they enter (even if it's valid) after the actual room description 
      play();
    }
  } //right now, when you enter a room it gives both the room description & the line on 460
}

/*----------Start Game---------------*/

console.log(`You are standing in the schoolyard of your new school. It is the first day. 
There is a door south of you to get inside the school, a couple trees to the east and other kids getting dropped off too. Your mom tells you as she drops you off, "don't forget your student ID, it's laying on the ground and the number is 12345!" There is a sign on the door and something sitting on the steps. From here you can enter the hall... To enter a room, type enter and the room name(exactly as it's written....)\n To interact with an object, type use and the object's name.(it may sound weird to use some of the objects, but "use" is your best option.)\n To pick something up, type grab and the object's name.\n To examine something type examine and the object's name. To see what's in your inventory, type "inventory" & to see what's in a room, type "contents"`);
play();


//after working for the entire weekend on this, and having different functions work/break/work..we would love to go over our code with Bob or a TA to have a better understanding of how to structure it best, and how to fix some of our bugs so we can resubmit!

//our main issues: 
// -telling us that we can both enter and not enter a room (and gives room description), 
// -items not leaving the room contents when they enter the player's inventory 
// -the locked teachers lounge and locked classroom don't work /aren't triggered 
// -when you try to grab the jacket it returns undefined 
// -when you click use cabinet aka open the lost and found, it tells you that you won even if you dont drop the items there/ have the items in your inventory 
// -errors out when you type something like grab "djlfal" or enter "flkajfa" like not real items or rooms, rather than just saying it doesn't understand. if you use the predefined action words, it gets confused when it doesnt understand the object of the action.