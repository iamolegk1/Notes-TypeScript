import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import { Note } from "./types";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
