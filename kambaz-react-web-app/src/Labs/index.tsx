import {Route, Routes} from 'react-router';
import Lab1 from './Lab1';
import {Navigate} from "react-router-dom";
import TOC from "./TOC.tsx";

function Lab2() {
  return null;
}

function Lab3() {
  return null;
}

export default function Labs() {
  return (
      <div id={"wd-labs"}>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2/*" element={<Lab2 />} />
          <Route path="Lab3" element={<Lab3 />} />
        </Routes>
      </div>
  )
};