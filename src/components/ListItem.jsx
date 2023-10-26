import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({note}) {

    console.log(note.id);
    return (
        <Link to={`/notes/${note.id}`}>
            <h3> {note.body}</h3>
        </Link>
    )
}

export default ListItem;