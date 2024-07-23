document.getElementById('check').addEventListener('click', async () => {
    const password = document.getElementById('password').value;
    if (!password) return;
  
    const isPwned = await browser.runtime.sendMessage({ password });
    const result = isPwned ? "This password has been found in a data breach!" : "This password is safe.";
    document.getElementById('result').textContent = result;
  });
  