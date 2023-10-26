import React from 'react';

function ListItem({note}) {
    return (
        <>
            <h3> {note.body} </h3>
        </>
    )
}

export default ListItem;