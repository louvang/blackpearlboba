const header = document.createElement('header');

const leftDiv = document.createElement('div');
leftDiv.classList.add('left-nav');

const homeLink = document.createElement('a');
homeLink.href = '#home';
homeLink.id = 'nav-home';
homeLink.classList.add('selected', 'navLink');
homeLink.append('Home');

const menuLink = document.createElement('a');
menuLink.href = '#menu';
menuLink.id = 'nav-menu';
menuLink.classList.add('navLink');
menuLink.append('Menu');

leftDiv.append(homeLink);
leftDiv.append(menuLink);

const logoDiv = document.createElement('div');
logoDiv.id = 'logo';
const logoImg = document.createElement('img');
logoImg.src = 'img/logo.svg';

logoDiv.append(logoImg);
logoDiv.append('Black Pearl Boba');

const rightDiv = document.createElement('div');
rightDiv.classList.add('right-nav');

const storyLink = document.createElement('a');
storyLink.href = '#our-story';
storyLink.id = 'nav-story';
storyLink.classList.add('navLink');
storyLink.append('Our Story');

const contactLink = document.createElement('a');
contactLink.href = '#contact';
contactLink.id = 'nav-contact';
contactLink.classList.add('navLink');
contactLink.append('Contact');

rightDiv.append(storyLink);
rightDiv.append(contactLink);

header.append(leftDiv);
header.append(logoDiv);
header.append(rightDiv);

export default header;
