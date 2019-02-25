// For this lab, we have a restaurant that's changing the menu a bit. We'll have some menu changes that we'll be doing for each of our three changes. Let the tests guide you. 

// 1. For our first problem, set `Object.assign` to merge the following objects:
// {toast: avocado}, {mimosa: sunburst orange juice}, {eggs: bacon deviled}, {pancakes: mini skewers}
Object.assign({toast: 'avocado'}, {mimosa: 'sunburst orange juice'}, {eggs: 'bacon deviled'}, {pancakes: 'mini skewers'});


// 2. For our second problem, set `Object.assign` to merge the following objects *in the following order*: 
// {sandwich: club}, {drink: iced tea}, {sandwich: wrap}, {drink: kombucha}, {sandwich: ham and cheese}, {drink: diet coke}, {sandwich: turkey and sprouts}, {drink: iced tea}, {sandwich: chicken salad}, {drink: chicken ceasar}

Object.assign({sandwich: 'club'}, {drink: 'iced tea'}, {sandwich: 'wrap'}, {drink: 'kombucha'}, {sandwich: 'ham and cheese'}, {drink: 'diet coke'}, {sandwich: 'turkey and sprouts'}, {drink: 'iced tea'}, {sandwich: 'chicken salad'}, {sandwich: 'chicken ceasar'});



//3.  For the last challenge, let's write a function for a restaurant that accepts an old menu and some
// /changes we want to make and returns a new menu **without modifying the old
// /menu**:

function createNewMenu (oldMenu, menuChanges) {
  return Object.assign({}, oldMenu, menuChanges);
}

const tuesdayMenu = {
  cheesePlate: {
    soft: 'Chèvre',
    semiSoft: 'Gruyère',
    hard: 'Manchego'
  },
  fries: 'Sweet potato',
  salad: 'Caesar'
};

const newOfferings = {
  cheesePlate: {
    soft: 'Brie',
    semiSoft: 'Fontina'
  },
  salad: 'Southwestern'
};

const wednesdayMenu = createNewMenu(tuesdayMenu, newOfferings);

wednesdayMenu;
// => { cheesePlate: { soft: "Brie", semiSoft: "Fontina", hard: "Manchego" }, fries: "Sweet potato", salad: "Southwestern" }

tuesdayMenu;
// => { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Caesar" }
