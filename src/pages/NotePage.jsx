import React from "react";
import notes from '../assests/data';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assests/arrow-left.svg';


function NotePage({match}) {

    let noteId = match.params.id;
    let note = notes.find(note => note.id === Number(noteId));

    return (
        <div className="note">
        <div className="note-header">
            <h3 className="note-header">
                <Link to="/">
                    <ArrowLeft />
                </Link>
            </h3>
        </div>
            <textarea value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage;