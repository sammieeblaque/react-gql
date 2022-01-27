import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Imports
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import "./App.css";

const App = () => {
  return (
    <>
      <section className="App">
        <Routes>
          <Route index element={<CharactersList />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </section>
    </>
  );
};

export default App;
