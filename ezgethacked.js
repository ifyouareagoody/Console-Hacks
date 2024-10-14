// Paste this code into your browser console to work.  If you are not sure what this does, do not paste, if you are, go ahead!
const l = ['E','G','Z','T','H','A','T','C','K','D', ' '];
while (document.body.firstChild) {
  document.body.removeChild(document.body.firstChild);
}
const message = document.createElement('h1');
message.textContent = l[0] + l[2] + l[10] + l[1] + l[0] + l[3] + l[10] + l[4] + l[5] + l[7] + l[8] + l[0] + l[9]; // This is so that if you send it to your friend the troll won't be obvious!
message.style.textAlign = 'center';
message.style.color = 'red';
message.style.fontSize = '48px';
document.body.appendChild(message);
