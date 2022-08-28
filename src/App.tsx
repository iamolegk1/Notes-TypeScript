import React, { useState } from "react";

import Header from "./components/Header";
import { Note } from "./types";

const initialState = {
  title: "",
  text: "",
  id: "",
  color: "#ffffffff",
  date: "",
};

function App() {
  const [notes, setNotes] = useState<Note[]>([initialState]);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
