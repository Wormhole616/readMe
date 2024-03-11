class markDown {

    static renderLicenseBadge(license){
        const badges = {
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            mit:'[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)            ',
            gnugplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_V3-blue.svg)](https://opensource.org/license/cern-ohl-s/)'
         }
    return badges[license]
}

static renderLicenseLink(license) {
    const licenseLinks = {
        isc: '[ISC](https://choosealicense.com/licenses/isc/)',
        mit: '[MIT](https://choosealicense.com/licenses/mit/)',
        gnugplv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
    }
    return licenseLinks[license]
}

static renderLicenseSection(license){
    if(license) {
        return `Licensed under the ${this.renderLicenseLink(license)} license`
    } else 
        return ''
    }


static generateReadme(answers){
        return `

# ${answers.title}
    
${this.renderLicenseBadge(answers.license)}

## Table of Content
- [Project Description](#Description)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Installation](#Installation)
- [Questions](#Questions)
- [Lincese](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Contribution 
${answers.contribution}

## Installation 
${answers.installation}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseSection(answers.license)}
    `
    }
}

module.exports = markDown