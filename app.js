const validator = require('validator')
const chalk = require('chalk');
const yargs =require('yargs');

// console.log(process.argv); default
// console.log(yargs.argv); library
// yargs.version('1.0.1');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function () {
    console.log('Removing a new note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
    console.log('Listing the note!')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
    console.log('Reading a new note!')
    }
})

console.log(yargs.argv)
