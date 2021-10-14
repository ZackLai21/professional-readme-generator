// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const gpl3 =
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const mit =
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  const bsd3 =
    "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  const apache =
    "[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    let badge;
    if (license.badge === "MIT") {
      badge = mit;
    } else if (license.badge === "GPL v3") {
      badge = gpl3;
    } else if (license.badge === "Apache 2.0"){
      badge = apache;
    }else if(license.badge === "BSD 3"){
      badge = bsd3;
    }else {
      badge = "";
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
  `# ${data.title}
  ${renderLicenseBadge(data.badge)}

  ## Description
  ${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installation}
## Usage

~~~
${data.usage}
~~~
## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## How to Contribute
${data.contributing}
## Tests

~~~
${data.tests}
~~~

##Questions
if you have any questions about the repo, open an issue or contact me directly at [${data.email}](${data.email}). You can find more of my work at[${data.user}](https://github.com/${data.user}).
`;
}

module.exports = generateMarkdown;
