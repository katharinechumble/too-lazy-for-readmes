// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  return `
  # ${userAnswers.title}
  # Table of Contents
  -[collaborators](#authors)
  -[description](#description)
  -[installation](#install)
  -[usage](#usage)
  -[license](#license)
  -[test](#test)
  -[questions](#issues)
  ## Collaborators
  ${userAnswers.authors}
  ## Description
  ${userAnswers.description}
  ## Installation
  ${userAnswers.install}
  ## Usage
  ${userAnswers.usage}
  ## Tests
  ${userAnswers.tests}
  ## License
  ![badge](http://img.shields.io/badge/license-${userAnswers.license}-informational)
  Application covered by ${userAnswers.license} license.
  ## Questions?
  ${userAnswers.issues}
  - ${userAnswers.username}
  - ${userAnswers.email}

`;
}

module.exports = generateMarkdown;
