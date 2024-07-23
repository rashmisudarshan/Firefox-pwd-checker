async function checkPassword(password) {
  console.log('Checking password:', password);
  const hash = await sha1(password);
  const prefix = hash.slice(0, 5);
  const suffix = hash.slice(5).toUpperCase();

  const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
  const data = await response.text();

  return data.includes(suffix);
}

function sha1(str) {
  const buffer = new TextEncoder("utf-8").encode(str);
  return crypto.subtle.digest("SHA-1", buffer).then(hash => {
    return Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
  });
}

function createPopup(message) {
  console.log('Creating popup with message:', message);
  const existingPopup = document.getElementById('password-breach-popup');
  if (existingPopup) {
    existingPopup.remove();
  }

  const popup = document.createElement('div');
  popup.id = 'password-breach-popup';
  popup.style.position = 'fixed';
  popup.style.bottom = '20px';
  popup.style.right = '20px';
  popup.style.padding = '10px';
  popup.style.backgroundColor = '#ffdddd';
  popup.style.color = '#d8000c';
  popup.style.border = '1px solid #d8000c';
  popup.style.borderRadius = '5px';
  popup.style.zIndex = '10000';
  popup.textContent = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 5000);
}

let typingTimer;
const doneTypingInterval = 1000; // 1 second

document.addEventListener('input', (event) => {
  if (event.target.type === 'password') {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(async () => {
      const password = event.target.value;
      if (password.length >= 8) {
        try {
          const isPwned = await checkPassword(password);
          const message = isPwned ? "This password has been found in a data breach!" : "This password is safe.";
          browser.runtime.sendMessage({ type: "password-check", message: message });
          console.log('Sent message:', message);
        } catch (error) {
          console.error('Error checking password:', error);
        }
      }
    }, doneTypingInterval);
  }
});
