const ourStory = document.createElement('div');
ourStory.classList.add('container');
ourStory.id = 'our-story';

const storyHeading = document.createElement('h1');
storyHeading.append('Our Story');

const storyP1 = document.createElement('p');
storyP1.textContent = `Black Pearl Boba is located in St. Paul, Minnesota and run by two sisters. The small shop first opened in Hmong Village with a variety of authentic fresh flavors, unique recipes, and handcrafted tapioca pearls made fresh every morning.`;

const storyP2 = document.createElement('p');
storyP2.textContent = `It started during a Pirates of the Carribean movie marathon in 2018. A craving for boba tea spurred one of the sisters to go out and find some only to see that all of the boba shop hours were closed. But venturing into one of the local Asian supermarkets, she found a packet of boba pearls and began making the beverage in her own home. The first drink was alright, but the next one was much better. From then on, boba tea was being made at home.`;

const storyP3 = document.createElement('p');
storyP3.textContent = `After a friend's bridal shower party, and getting dozens of praises for their boba tea, the friend asked if they would be willing to make a 'boba buffet' for their reception. The sisters agreed to it and after being a huge hit, decided to pursue the boba tea business.`;

const storyP4 = document.createElement('p');
storyP4.textContent = `The sisters now wake up early every morning to make their handcrafted tapioca pearls. It's hard work but worth it. Every season, flavors change to accomodate upcoming holidays. The sisters are looking to open up a cafe in the heart of the Twin Cities.`;

const sistersImg = document.createElement('img');
sistersImg.src = 'img/sisters.jpg';

ourStory.append(storyHeading);
ourStory.append(storyP1);
ourStory.append(sistersImg);
ourStory.append(storyP2);
ourStory.append(storyP3);
ourStory.append(storyP4);

export default ourStory;
