const notes = require('./note.js')
const chalk = require('chalk');
const yargs = require('yargs');


//customize version
yargs.version('1.1.0')

//create add command
yargs.command({
  command:'add',
  describe:'Add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'note body',
      demandOption:true,
      type:'string'
    }
  },
  handler:function(argv){
    console.log('Title: '+argv.title);
    console.log('Body: '+argv.body);
  }
})

//create remove command
yargs.command({
  command:'remove',
  describe:'Remove a note',
  handler:function(){
    console.log('Removing a note!');
  }
})

//create list command
yargs.command({
  command:'list',
  describe:'Listing notes!',
  handler:function(){
    console.log('Listing the notes!');
  }
})

//create read command
yargs.command({
  command:'read',
  describe:'Reading notes!',
  handler:function(){
    console.log('Reading the notes!');
  }
})

yargs.parse()
//console.log(yargs.argv);
