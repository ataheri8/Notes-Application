console.log(uuidv4())

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'ByEdited'
}

renderNotes(notes, filters)

document.querySelector('#create').addEventListener('click', (e) => {
    const noteId = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign('/edit.html#' + noteId)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format("MMMM Do, YYYY"))
// console.log(now.fromNow())
// const nowTimeStamp = now.valueOf()

// console.log(moment(nowTimeStamp).toString())

const nowz = moment()
nowz.year(1995).month(10).date(8)
console.log(nowz.format("MMM D, YYYY"))