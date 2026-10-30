
import { createContext, useContext, useState } from 'react';
import {
  getAllNotes,
  addNote as addNoteData,
  deleteNote as deleteNoteData,
  archiveNote as archiveNoteData,
  unarchiveNote as unarchiveNoteData,
} from '../utils/local-data';

const NotesContext = createContext(null);

function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => getAllNotes());

  function refreshNotes() {
    setNotes([...getAllNotes()]);
  }

  function addNoteHandler({ title, body }) {
    addNoteData({ title, body });
    refreshNotes();
  }

  function deleteNoteHandler(id) {
    deleteNoteData(id);
    refreshNotes();
  }

  function archiveNoteHandler(id) {
    archiveNoteData(id);
    refreshNotes();
  }

  function unarchiveNoteHandler(id) {
    unarchiveNoteData(id);
    refreshNotes();
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNoteHandler,
        deleteNoteHandler,
        archiveNoteHandler,
        unarchiveNoteHandler,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

function useNotes() {
  return useContext(NotesContext);
}

export { NotesProvider, useNotes };
