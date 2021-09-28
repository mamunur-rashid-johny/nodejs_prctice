const fs = require('fs');
const chalk = require('chalk')



//adding notes
const addNote = (title,body)=>{
  const notes = loadNotes()
  const duplicate = notes.filter((note)=>note.title===title)

  if(duplicate.length===0){
    notes.push({
      title:title,
      body:body
    })
    saveNote(notes)
    console.log(chalk.green.inverse('New note added..'));
  }else{
    console.log(chalk.red.inverse('Already exits..'));
  }
}


//lis of notes
const listNotes=()=>{
  const notes = loadNotes()
  if(notes.length===0){
    console.log(chalk.red.inverse('no note found!'));
  }else{
    console.log(chalk.green.inverse('Your notes'));
    notes.forEach(element => {
      console.log(element.title);
    });
  }
}

//remove notes
const removeNote=(title)=>{
  const notes = loadNotes()
  const filterNote = notes.filter((note)=>note.title !=title)

  if(notes.length===filterNote.length){
    console.log(chalk.red.inverse('no note found!'));
  }else{
    console.log(chalk.green.inverse('note removed!'));
    saveNote(filterNote)
  }
  
}

//read a note
const readNote = (title)=>{
  const notes = loadNotes()
  const noteAvailable = notes.find((note)=>note.title===title)
  if(noteAvailable){
      console.log(chalk.green.inverse(noteAvailable.title));
      console.log(noteAvailable.body);
  }else{
    console.log(chalk.red.inverse('No note found'));
  }
}


const saveNote = (notes)=>{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.js',dataJSON)
}



const loadNotes = ()=>{
  try {
    const dataBuffer = fs.readFileSync('notes.js')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataBuffer)
  } catch (error) {
    return []
  }
}







module.exports ={
  addNote:addNote,
  removeNote:removeNote,
  listNotes:listNotes,
  readNote:readNote
}
 
