const menu = document.createElement('div');
menu.classList.add('container');
menu.id = 'menu';

const firstCol = document.createElement('div');
firstCol.classList.add('col-2');

const icedTeaHeading = document.createElement('h2');
icedTeaHeading.append('Iced Tea');
const icedTeaList = document.createElement('ul');
const icedTeas = [
  'Black Tea',
  'Jasmin Tea',
  'Oolong Tea',
  'Green Tea',
  'White Peach Tea',
  'Strawberry Tea',
  'Passionfruit Tea',
];
icedTeas.forEach((tea) => {
  let li = document.createElement('li');
  li.append(tea);
  icedTeaList.append(li);
});

const milkTeaHeading = document.createElement('h2');
milkTeaHeading.append('Milk Tea & Latte');
const milkTeaList = document.createElement('ul');
const milkTeas = [
  'Black Tea',
  'Jasmin Tea',
  'Oolong Tea',
  'Green Tea',
  'White Peach Tea',
  'Strawberry Tea',
  'Passionfruit Tea',
];
milkTeas.forEach((tea) => {
  let li = document.createElement('li');
  li.append(tea);
  milkTeaList.append(li);
});

firstCol.append(icedTeaHeading);
firstCol.append(icedTeaList);
firstCol.append(milkTeaHeading);
firstCol.append(milkTeaList);

const secondCol = document.createElement('div');
secondCol.classList.add('col-2');

const smoothieHeading = document.createElement('h2');
smoothieHeading.append('Smoothies');
const smoothieList = document.createElement('ul');
const smoothies = [
  'Mango Smoothie',
  'Passionfruit Smoothie',
  'Strawberry Banana Smoothie',
  'White Peach Smoothie',
  'Vanilla Smoothie',
  'Oreo Chocolate Smoothie',
  'Caramel Macchiato Smoothie',
  'Mint Chocolate Smoothie',
];
smoothies.forEach((smoothie) => {
  let li = document.createElement('li');
  li.append(smoothie);
  smoothieList.append(li);
});

const toppingsHeading = document.createElement('h2');
toppingsHeading.append('Toppings');
const toppingsList = document.createElement('ul');
const toppings = [
  'Tapioca Pearls',
  'Popping Boba (Mango, Lychee, Peach, Strawberry)',
  'Cream Cheese Foam',
  'Simple Syrup Shot',
  'Strawberry Syrup Shot',
  'Caramel Shot',
];
toppings.forEach((topping) => {
  let li = document.createElement('li');
  li.append(topping);
  toppingsList.append(li);
});

secondCol.append(smoothieHeading);
secondCol.append(smoothieList);
secondCol.append(toppingsHeading);
secondCol.append(toppingsList);

menu.append(firstCol);
menu.append(secondCol);

export default menu;
