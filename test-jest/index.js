const {run} = require('jest-cli');


const projectRootPath = '.';

// Add any Jest configuration options here
const jestConfig = {
 roots: ['./tests'],
 testRegex: '\\.spec\\.js$',
 rootDir: '.'
};

process.argv.push('--config', JSON.stringify(jestConfig));

// Run the Jest asynchronously
run(process.argv, projectRootPath)