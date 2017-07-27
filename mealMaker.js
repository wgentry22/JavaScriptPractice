  var menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  addDishToCourse: function(courseName, dishName, dishPrice){
    var dish = {
  	dish: dishName,
    price: dishPrice,
    };
    this.courses[courseName].push(dish);
  },
  generateRandomDishFromCourse: function(courseName){
    var dishes = this.courses[courseName];
    var ranNum = Math.floor(Math.random() * dishes.length);
    return dishes[ranNum];
  },
  generateRandomMeal: function(){
    var appetizers = this.generateRandomDishFromCourse('appetizers');
    var mains = this.generateRandomDishFromCourse('mains');
    var desserts = this.generateRandomDishFromCourse('desserts');
    var total = appetizers.price + mains.price + desserts.price;
    return 'Appetizer: ' + appetizers.dish +  '\nMain Course: ' + mains.dish +  '\nDessert: ' + desserts.dish + ' \nThe total for this meal is $' + total + '.';
  },
};

menu.addDishToCourse('appetizers', 'Bruschetta', 5.95);
menu.addDishToCourse('appetizers', 'Spinach Artichoke Dip', 6.15);
menu.addDishToCourse('appetizers', 'Parmesean Pretzels with Beer Cheese', 7.50);
menu.addDishToCourse('mains', 'Mighty Meaty Pizza', 11.95);
menu.addDishToCourse('mains', 'Grilled Chicken Hoagie on Pita', 5.95);
menu.addDishToCourse('mains', '10 Thai Chili Wings', 9.95);
menu.addDishToCourse('desserts', 'Brownie', 2.00);
menu.addDishToCourse('desserts', 'Brownie Sunday', 3.50);
menu.addDishToCourse('desserts', 'Chocolate Chip Cookie Sundae', 4.00);

var meal = menu.generateRandomMeal();
console.log(meal);
