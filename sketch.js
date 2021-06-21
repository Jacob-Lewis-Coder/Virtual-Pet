var dog,sadDog,happyDog;
var feed_Dog, addFood;
var foodObj, foodS = 0;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {

  database = firebase.database();
  console.log(database);

  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed_Dog = createButton("Feed The Dog");
  feed_Dog.position(500, 250);
  feed_Dog.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(550, 250);
  addFood.mousePressed(add_Food)

  foodObj = new Food()

  var dbref = database.ref('Food');
  dbref.on("value", readFoodStock);

}

function readFoodStock(data){
  foodS = data.val();
  
}

function draw() {
  background(46,139,87);
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);

 if(foodObj.getFoodStock()<= 0){
   foodObj.updateFoodStock(0)
 } else {
   foodObj.updateFoodStock(foodObj.getFoodStock()-1);
 }
 
}

function add_Food(){
  foodS++
  database.ref('/').update({
    Food : foodS
  })
}



//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
