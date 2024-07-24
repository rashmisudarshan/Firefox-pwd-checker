Password Breach Checker Firefox Extension
Overview

The Password Breach Checker is a Firefox extension that integrates with your password manager to ensure that selected passwords are not part of any known data breaches. This extension provides an additional layer of security by checking your passwords against a database of compromised credentials.
Features

    Password Breach Check: Verify if a selected password has been part of a known data breach.
    Integration with Password Manager: Works seamlessly with your existing password manager for easy password selection and checking.
    Real-time Notifications: Get immediate feedback on the status of your password.

Installation

    Clone or download this repository to your local machine.
    Open Firefox and navigate to about:debugging.
    Click on "This Firefox" in the sidebar.
    Click the "Load Temporary Add-on..." button.
    Select the manifest.json file from the downloaded repository.

Usage

    Install the extension following the steps above.
    Open your password manager and select a password to check.
    Click on the Password Breach Checker icon in the Firefox toolbar.
    The extension will notify you if the selected password has been compromised.

Development
Prerequisites

    Node.js
    npm

Setup

    Clone this repository:

    bash

git clone https://github.com/your-username/password-breach-checker.git
cd password-breach-checker

Install the dependencies:

bash

    npm install

Building

To build the extension, run:

bash

npm run build

Testing

To run the tests, use:

bash

npm test

Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
Reporting Issues

If you encounter any issues, please open an issue in the GitHub Issues section of the repository.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgements

    Thanks to the Have I Been Pwned API for providing the breach data.
    Special thanks to the Firefox development community for their extensive documentation and support.
