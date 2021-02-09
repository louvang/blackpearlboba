import header from './Header';
import home from './Home';
import menu from './Menu';
import ourStory from './OurStory';
import contact from './Contact';
import footer from './Footer';

const content = document.getElementById('content');
content.append(header);

// Initialization
content.append(home);

// Event Listeners
const allNavItems = document.querySelectorAll('.navLink');
const homeNav = document.getElementById('nav-home');
const menuNav = document.getElementById('nav-menu');
const ourStoryNav = document.getElementById('nav-story');
const contactNav = document.getElementById('nav-contact');

homeNav.addEventListener('click', function () {
  homeNav.classList.add('selected');
  removeSelected();
  removeContainer();
  content.append(home);
  content.append(footer);
});

menuNav.addEventListener('click', function () {
  menuNav.classList.add('selected');
  removeSelected();
  removeContainer();
  content.append(menu);
  content.append(footer);
});

ourStoryNav.addEventListener('click', function () {
  ourStoryNav.classList.add('selected');
  removeSelected();
  removeContainer();
  content.append(ourStory);
  content.append(footer);
});

contactNav.addEventListener('click', function () {
  contactNav.classList.add('selected');
  removeSelected();
  removeContainer();
  content.append(contact);
  content.append(footer);
});

// Helper Functions
const removeSelected = () => {
  allNavItems.forEach((navItem) => {
    navItem.classList.remove('selected');
  });
};

const removeContainer = () => {
  const container = document.querySelector('.container');
  container.remove();

  const footer = document.getElementById('footer');
  footer.remove();
};

content.append(footer);
