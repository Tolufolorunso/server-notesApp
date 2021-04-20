const generateID = () => {
  let notes = getNotesFromDB()
  if (!notes) return 1
  return notes[notes.length - 1].id + 1
}

const saveNoteToDB = (noteObj) => {
  const data = setLocalStorage(noteObj)
  if (!data) return alert('Something went wrong')

  alert('Note saved successfully')

  // Clear the textInput
  document.getElementById('note').value = ''
}

const setLocalStorage = (noteObj) => {
  const notes = getNotesFromDB()

  if (notes) {
    notes.push(noteObj)
    setStorage(notes)
    return notes
  } else {
    let notes = []
    notes.push(noteObj)
    setStorage(notes)
    return notes
  }
}

const setStorage = (notes) =>
  localStorage.setItem('noteTaker', JSON.stringify(notes))

const getNotesFromDB = () => {
  const notes = JSON.parse(localStorage.getItem('noteTaker'))
  return notes ? notes : null
}
