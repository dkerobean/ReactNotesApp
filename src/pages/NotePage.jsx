import React from "react";
import notes from '../assests/data';


function NotePage({match}) {

    let noteId = match.params.id;
    let note = notes.find(note => note.id === Number(noteId));

    return (
        <>
            <p> {note.body} </p>
        </>
    )
}

export default NotePage;