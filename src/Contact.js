const contact = document.createElement('div');
contact.classList.add('container');
contact.id = 'contact';

const contactHead = document.createElement('h1');
contactHead.append('Where to Find Us');

const address = document.createElement('p');
address.append('Address: Hmong Village, St. Paul, MN');

const phone = document.createElement('p');
phone.append('Phone Number: (615) 555-0000');

const email = document.createElement('p');
email.append('Email: jacksparrow@blackpearlboba.com');

contact.append(contactHead);
contact.append(address);
contact.append(phone);
contact.append(email);

export default contact;
