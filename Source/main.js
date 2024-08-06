import './masuk.js';
import './header.js';
import './footer.js';

function main() {
    const getNotes = () => {
        fetch('https://notes-api.dicoding.dev/v2#/notes')
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.status === 'success') {
                    renderAllNotes(responseJson.data);
                } else {
                    showResponseMessage(responseJson.message);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            });
    };

    const insertNotes = (notes) => {
        fetch('https://notes-api.dicoding.dev/v2/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(notes),
        })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === 'success') {
                showResponseMessage(responseJson.message);
                return getNotes();
            } else {
                showResponseMessage(responseJson.message);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const updateNotes = (notes, noteId) => {
        fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}/archive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === 'success') {
                showResponseMessage(responseJson.message);
                return getNotes();
            } else {
                showResponseMessage(responseJson.message);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const removeNotes = (noteId) => {
        fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === 'success') {
                showResponseMessage(responseJson.message);
                return getNotes();
            } else {
                showResponseMessage(responseJson.message);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    getNotes();
}

document.addEventListener('DOMContentLoaded', () => {
    const insertButton = document.getElementById('InsertButton');
    const showButton = document.getElementById('ShowButton');
    const deleteButton = document.getElementById('DeleteButton');
    const idNotesInput = document.getElementById('idNotes');
    const titleNotesInput = document.getElementById('titleNotes');
    const bodyInput = document.getElementById('body');

    insertButton.addEventListener('click', () => {
        const notes = {
            title: titleNotesInput.value,
            body: bodyInput.value
        };
        insertNotes(notes);
    });

    showButton.addEventListener('click', () => {
        getNotes();
    });

    deleteButton.addEventListener('click', () => {
        const noteId = idNotesInput.value;
        removeNotes(noteId);
    });
    updateButton.addEventListener('click', () => {
        const noteId = idNotesInput.value;
        const action = document.querySelector('input[name="updateAction"]:checked').value;
        updateNotes(noteId, action);
    });
});
