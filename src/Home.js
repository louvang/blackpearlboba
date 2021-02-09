const home = document.createElement('div');
home.classList.add('container');
home.id = 'home';

const landingHead = document.createElement('h1');
landingHead.classList.add('landing-head');
landingHead.append('Milk tea, lattes, and smoothies. Oh my!');

const landingP = document.createElement('p');
landingP.append(`Here at Black Pearl Boba, we only the best ingredients. Smoothies are made with real fruit. Our premium teas
are dried and pressed from the hills of Thailand. And our black tapioca pearls are hand-crafted in-house every
morning.`);

const landingSub = document.createElement('h2');
landingSub.classList.add('center');
landingSub.append(`It's the boba tea that you deserve.`);

const splashImg = document.createElement('img');
splashImg.src = 'img/boba-splash.jpg';
splashImg.alt = 'Black Pearl BOba';
splashImg.classList.add('splash');

home.append(landingHead);
home.append(landingP);
home.append(landingSub);
home.append(splashImg);

export default home;
