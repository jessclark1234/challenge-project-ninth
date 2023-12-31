// API call?
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a couple sentence description on what your project is about'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Is there anything that needs to be installed to use this application'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Who/what is the intended usage for this project?'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What resources/developers contributed to this project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'What testing took place during the building of this application?'
        },
        {
            type: 'list',
            name: 'license',

            message: 'What license did you use for this project?',
            choices: ["MIT", "none", "BSD3", "GPL3"]
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can people contribute to this project?'
        },
    ])
};

const generateREADME = ({ projectName, description, installation, usage, credits, testing, license, contribute }) =>
    `#${projectName}

    ##Description

    ${description}

    ##Installation

    ${installation}

    ##Usage

    ${usage}

    ##Credits

    ${credits}

    ##Testing

    ${testing}

    ##License

    ${license}

    ##How to Contribute

    ${contribute}
    `;


const init = () => {
    promptUser().then(function (answers) {
        console.log(answers)
    })
}
init();

generateREADME.writeFile('README.md', generateREADME, (err) =>
    err ? console.error(err) : console.log('README complete!')
);
