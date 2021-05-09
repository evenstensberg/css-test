const {run} = require('jest-cli');


const projectRootPath = '.';

// Add any Jest configuration options here
const jestConfig = {
 roots: ['./dist/tests'],
 testRegex: '\\.spec\\.js$'
};

// Run the Jest asynchronously
run([], projectRootPath)