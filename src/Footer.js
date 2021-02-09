const footer = document.createElement('footer');
footer.id = 'footer';

const leftFooter = document.createElement('div');
leftFooter.classList.add('left-footer');

const tocLink = document.createElement('a');
tocLink.href = '#';
tocLink.append('Terms & Conditions');

const privacyLink = document.createElement('a');
privacyLink.href = '#';
privacyLink.append('Privacy Policy');

leftFooter.append(tocLink);
leftFooter.append(' | ');
leftFooter.append(privacyLink);

const rightFooter = document.createElement('div');
rightFooter.classList.add('right-footer');

const ig = document.createElement('i');
ig.classList.add('fab', 'fa-instagram');

const fb = document.createElement('i');
fb.classList.add('fab', 'fa-facebook-square');

const twt = document.createElement('i');
twt.classList.add('fab', 'fa-twitter');

const pin = document.createElement('i');
pin.classList.add('fab', 'fa-pinterest');

const yt = document.createElement('i');
yt.classList.add('fab', 'fa-youtube');

rightFooter.append(ig);
rightFooter.append(fb);
rightFooter.append(twt);
rightFooter.append(pin);
rightFooter.append(yt);

footer.append(leftFooter);
footer.append(rightFooter);

export default footer;
