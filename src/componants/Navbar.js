import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav >
        <Link style={{padding:'2px', margin:'2px'}} to="/">Signup</Link>
        <Link style={{padding:'2px',margin:'2px'}}  to='/Login'>Login</Link>
        <Link style={{padding:'2px', margin:'2px'}} to="/contact">contact</Link>
        <Link style={{padding:'2px', margin:'2px'}} to="/list1">List1</Link>
      </nav>
    </>
  );
};
