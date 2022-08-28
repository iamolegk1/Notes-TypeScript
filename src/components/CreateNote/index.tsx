import React, { useState, useRef } from "react";

import { Alert, Button, Container, Form } from "react-bootstrap";
import { Note } from "../../types";

interface ICreateNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = useState<string>("");

  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are required");
    }

    setError("");
    setNotes([
      ...notes,
      {
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        id: new Date().toString(),
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };

  return (
    <Container fluid>
      <h3>Create Note</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control ref={titleRef} type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            ref={textRef}
            placeholder="Text note"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#ffffff"
            title="Choose color"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" size="lg" variant="success">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default CreateNote;
