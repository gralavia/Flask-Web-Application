console.log('Script loaded');

function deleteNote(noteId) {
  console.log('Deleting note with ID:', noteId);
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {

    console.log('Note deleted successfully');
    window.location.href = "/";

  });
}