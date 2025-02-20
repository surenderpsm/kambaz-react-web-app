import {useParams} from "react-router";
import {Link, useLocation} from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();  // Now 'cid' will be used in the paths

  const links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` },
  ];

  function isActive(path: string) {
    return pathname === path;
  }

  return (
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        {links.map((link) => (
            <Link
                key={link.path}
                to={link.path}
                className={`list-group-item border border-0 ${isActive(link.path) ? 'text-black' : 'text-danger'}`}>
              {isActive(link.path) && (
                  <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '100%',
                        width: '3px',
                        backgroundColor: 'black',
                      }}
                  />
              )}
              {link.label}
            </Link>
        ))}
      </div>
  );
}