import {Link} from "react-router";

export default function TOC() {
  return (
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Labs 1</Link></li>
        <li><Link to="/Labs/Lab2">Labs 2</Link></li>
        <li><Link to="/Labs/Lab3">Labs 3</Link></li>
      </ul>
  )
}