'use strict';

const { test, run, delay } = require('./runner');

function logBlock() {
    console.log(`##teamcity[blockOpened name='Start (block)' description='Starting test run' flowId='0']`);
    console.log(`##teamcity[message text='Start (block): Start (block) Start tests (Message)' flowId='0']`);
    console.log(`##teamcity[message text='Start (block): Start (block) User agent chrome (Message)' flowId='0']`);
    console.log(`##teamcity[message text='Start (block): Start (block) Test count 10 (Message)' flowId='0']`);
    console.log(`##teamcity[blockClosed name='Start (block)' flowId='0']`);
}

logBlock();

test('Create a permit', async (logStream) => {
    logStream.testMessage(`Open url: http://google.com`);
    await delay(205);
    logStream.testMessage(`Type text: blah blah`);
    await delay(1000);
    logStream.testMessage(`Click search button`);
    await delay(500);
    logStream.testMessage(`Check blah blah`);
    logStream.testMessage(`Check blah blah 2`);
});

test('Create a isolation', async (logStream) => {
    logStream.testMessage(`Open url: http://google.com/isolation`);
    await delay(200);
    logStream.testMessage(`Type text: blah blah isolation`);
    await delay(500);
    logStream.testMessage(`Click search button isolation`);
    await delay(1000);
    logStream.testMessage(`Check blah blah isolation`);
    logStream.testMessage(`Check blah blah isolation 2`);
});

run();
