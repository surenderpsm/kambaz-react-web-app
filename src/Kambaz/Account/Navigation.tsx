import { FaSignInAlt, FaUser, FaUserPlus } from "react-icons/fa";
import { Link,useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const location = useLocation();
  return (
      <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        <Link
            to="/Kambaz/Account/Signin"
            id="wd-signin-link"
            className={`list-group-item ${location.pathname === '/Kambaz/Account/Signin' ? 'active bg-primary text-white' : 'text-danger border-0'}`}
        >
          <FaSignInAlt className="me-2" /> Signin
        </Link>

        <Link
            to="/Kambaz/Account/Signup"
            id="wd-signup-link"
            className={`list-group-item ${location.pathname === '/Kambaz/Account/Signup' ? 'active bg-primary text-white' : 'text-danger border-0'}`}
        >
          <FaUserPlus className="me-2" /> Signup
        </Link>

        <Link
            to="/Kambaz/Account/Profile"
            id="wd-profile-link"
            className={`list-group-item ${location.pathname === '/Kambaz/Account/Profile' ? 'active bg-primary text-white' : 'text-danger border-0'}`}
        >
          <FaUser className="me-2" /> Profile
        </Link>
      </div>
  );
}
