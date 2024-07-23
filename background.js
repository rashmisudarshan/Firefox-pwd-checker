async function checkPassword(password) {
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
  
  browser.browserAction.onClicked.addListener(async () => {
    const password = prompt("Enter the password to check:");
    if (!password) return;
  
    const isPwned = await checkPassword(password);
    const message = isPwned ? "This password has been found in a data breach!" : "This password is safe.";
    
    browser.notifications.create({
      "type": "basic",
      "iconUrl": browser.runtime.getURL("icons/icon-48.png"),
      "title": "Password Check",
      "message": message
    });


  });

  browser.runtime.onMessage.addListener(async (message) => {
    if (message.password) {
      return checkPassword(message.password);
    }
  });
  
  