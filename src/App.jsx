import { useState } from "react";
import "./index.css";
import { About } from "./about/About";
import { Container } from "./component/Container";
import { Project } from "./Projects/Project";
import { Skill } from "./skills/Skill";
import { Contact } from "./contact/Contact";
import { Education } from "./education/Education";
import { Layout } from "./Layout";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Container />} />
            <Route path="about" element={<About />} />
            <Route path="explore" element={<Project />} />
            <Route path="skills" element={<Skill />} />
            <Route path="contact" element={<Contact />} />
            <Route path="education" element={<Education />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
