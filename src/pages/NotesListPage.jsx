import React from 'react';
import notes from '../assests/data';
import ListItem from '../components/ListItem';


function NotesListPage() {
    return (
        <div className="notes">
        <div className="notes-header">
            <h2 className='notes-title'>&#9782; Notes</h2>
        </div>
            <div className='notes-list'>
                {notes.map((note, index) => (
                <ListItem key={index} note={note} />
                ) )}
            </div>
        </div>
    )
}

export default NotesListPage;