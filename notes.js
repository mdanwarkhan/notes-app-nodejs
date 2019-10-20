const fs = require("fs");
const chalk = require("chalk");
const getNotes = function() {
  return "Your notes";
};

const addNotes = function(title, body) {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(function(note) {
  //   return note.title === title;
  // });

  const duplicateNote = notes.find(note => note.title === title); 

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New title added");
  } else {
    console.log("Title exist already");
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed "));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note removed "));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));
  notes.forEach(note => {
    console.log(chalk.yellow(note.title));
  });
};


const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find( note => note.title === title)
  if(note) {
    console.log(chalk.inverse(note.title));
    console.log(chalk.inverse(note.body));
  } else {
    console.log(chalk.red('No notes found'));
  }
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
