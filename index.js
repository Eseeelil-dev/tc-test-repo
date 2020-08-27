'use strict';

console.log(`##teamcity[blockOpened name='Start' description='Starting test run' flowId='1']`);
console.log(`Start tests`);
console.log(`User agent chrome`);
console.log(`Test count 10`);
console.log(`##teamcity[blockClosed name='Start' flowId='1']`);

console.log(`##teamcity[testSuiteStarted name='Permit' flowId='1']`);

console.log(`##teamcity[testStarted name='Create a permit' flowId='1']`);

console.log(`Open url: http://google.com`);
console.log(`Type text: blah blah`);
console.log(`Click search button`);
console.log(`Check blah blah`);

console.log(`##teamcity[testFinished name='Create a permit' duration='12500' flowId='1']`);

console.log(`##teamcity[testSuiteFinished name='Permit' flowId='1']`);
