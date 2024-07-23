console.log('Background script running.');

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  if (message.type === "password-check") {
    console.log('Creating notification with message:', message.message);
    browser.notifications.create({
      "type": "basic",
      "iconUrl": browser.runtime.getURL("icons/icon-48.png"),
      "title": "Password Check",
      "message": message.message
    });
  }
});

async function checkPassword(password) {
  console.log('Checking password in background:', password);
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
