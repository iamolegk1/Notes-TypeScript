import * as React from "react";

import Notes from "../Notes";
import { Note } from "../../types";
import { Container } from "react-bootstrap";
interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Container>
      <h2 className="mt-3 mb-4">Notes List</h2>
      <div>
        {notes.map((note) => (
          <Notes key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </div>
    </Container>
  );
};

export default NotesList;
