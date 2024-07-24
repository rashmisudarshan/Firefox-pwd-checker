# Password Breach Checker Firefox Extension

## Overview
The Password Breach Checker is a Firefox extension that integrates with your password manager to ensure that selected passwords are not part of any known data breaches. This extension provides an additional layer of security by checking your passwords against a database of compromised credentials.

## Features
- **Password Breach Check:** Verify if a selected password has been part of a known data breach.
- **Integration with Password Manager:** Works seamlessly with your existing password manager for easy password selection and checking.
- **Real-time Notifications:** Get immediate feedback on the status of your password.

## Installation
1. Clone or download this repository to your local machine.
2. Open Firefox and navigate to `about:debugging`.
3. Click on "This Firefox" in the sidebar.
4. Click the "Load Temporary Add-on..." button.
5. Select the `manifest.json` file from the downloaded repository.

## Usage
1. Install the extension following the steps above.
2. Open your password manager and select a password to check.
3. Click on the Password Breach Checker icon in the Firefox toolbar.
4. The extension will notify you if the selected password has been compromised.

## Development
### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/password-breach-checker.git
   cd password-breach-checker
   
2. Install the dependencies:

        npm install

3. Building

    To build the extension, run:

        npm run build

4. Testing

    To run the tests, use:

        npm test
