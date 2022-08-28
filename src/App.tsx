import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./types";

const initialState = {
  title: "Evening",
  text: "Cook dinner",
  id: new Date().toString(),
  color: "#ffffffff",
  date: new Date().toString(),
};

function App() {
  const [notes, setNotes] = useState<Note[]>([initialState]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <NotesList notes={notes} setNotes={setNotes} />
      </Container>
    </>
  );
}

export default App;
