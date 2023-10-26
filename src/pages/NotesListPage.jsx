import React from 'react';
import notes from '../assests/data';
import ListItem from '../components/ListItem';


function NotesListPage() {
    return (
        <>
            {notes.map(note => (
               <ListItem note={note} />
            ) )}
        </>
    )
}

export default NotesListPage;