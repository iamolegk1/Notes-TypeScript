import * as React from "react";
import { Button, Card } from "react-bootstrap";

import { Note } from "../../types";
interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <div className="mb-3">
      <Card style={{ width: "18rem", backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
          <Button
            onClick={() => handleDelete(note.id)}
            className="mt-3"
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
