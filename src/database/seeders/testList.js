const {User, list} = require('../../models');

list.bulkCreate([
  {item: 'Lemon Grass', priority: 'important', quantity: 4, UserId: 2},
  {item: 'Sprouts - China Rose', priority: 'maybe', quantity: 1, UserId: 1},
  {item: 'Juice - Apple 284ml', priority: 'maybe', quantity: 1, UserId: 2},
  {item: 'Bagelers - Cinn / Brown', priority: 'maybe', quantity: 1, UserId: 2},
  {item: 'Sterno - Chafing Dish Fuel', priority: 'maybe', quantity: 1, UserId: 1},
  {item: 'Wine - Jaboulet Cotes Du Rhone', priority: 'important', quantity: 2, UserId: 1},
  {item: 'Creme De Menthe Green', priority: 'maybe',  quantity: 4,  UserId: 1},
  {item: 'Wine - Magnotta - Bel Paese White', priority: 'maybe', quantity: 3, UserId: 2},
  {item: 'Beans - Black Bean, Preserved', priority: 'important',  quantity: 4,  UserId: 2},
  {item: 'Turkey - Breast, Smoked', priority: 'maybe', quantity: 4, UserId: 1}
])
  .then((list) => {
    console.log(list);
  })
  .catch((error) => console.log(error))