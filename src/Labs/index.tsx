import {Route, Routes} from 'react-router';
import Lab1 from './Lab1';
import Lab2 from './Labs2';
import {Navigate} from "react-router-dom";
import TOC from "./TOC.tsx";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import {Provider} from "react-redux";
import store from "./store";

export default function Labs() {
  return (
      <Provider store={store}>
        <div id={"wd-labs"}>
          <h1>Labs</h1>
          <h2>Surender Soundiramourty</h2>
          <TOC />
          <Routes>
            <Route path="/" element={<Navigate to="Lab1" />} />
            <Route path="Lab1" element={<Lab1 />} />
            <Route path="Lab2" element={<Lab2 />} />
            <Route path="Lab3/*" element={<Lab3 />} />
            <Route path="Lab4" element={<Lab4 />} />
          </Routes>
        </div>
      </Provider>
  )
};