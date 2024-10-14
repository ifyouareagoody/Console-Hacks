// Paste this code into your browser console to work.  If you are not sure what this does, do not paste, if you are, go ahead!
const l = ['E','G','Z','T','H','A','T','C','K','D', ' '];
while (document.body.firstChild) {
  document.body.removeChild(document.body.firstChild);
}

const message = document.createElement('h1');
message.textContent = l[0] + l[2] + l[10] + l[1] + l[0] + l[3] + l[10] + l[4] + l[5] + l[7] + l[8] + l[0] + l[9]; 
message.style.color = 'red';
message.style.fontSize = '48px';
message.style.position = 'relative';
message.style.display = 'inline-block';

// makes message look like your friend actually got hacked
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `

@keyframes glitch {
  0% { transform: translate(2px, 0); }
  20% { transform: translate(-2px, 0); }
  40% { transform: translate(2px, 0); }
  60% { transform: translate(-2px, 0); }
  80% { transform: translate(2px, 0); }
  100% { transform: translate(0, 0); }
}

.glitch {
  animation: glitch 0.2s infinite;
  text-shadow: 
    -1px -1px 0 rgba(255, 0, 0, 0.8),  
     1px -1px 0 rgba(0, 0, 0, 0.5),  
    -1px 1px 0 rgba(0, 0, 0, 0.5),  
     1px 1px 0 rgba(255, 0, 0, 0.8); 
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

`;

document.head.appendChild(glitchStyle);
message.classList.add('glitch');
document.body.appendChild(message);

setInterval(() => {
  alert(l[0]+l[2]);
}, 1000);
