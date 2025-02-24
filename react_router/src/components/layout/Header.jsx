import { NavLink } from "react-router-dom";

export const Header = () => {


const getNavLinkStyle=({isActive})=>{
    return {
      color:isActive?"blue":"black",
    };
  }


  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get MovieMix, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <p>MovieMix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="/" className={({isActive})=> isActive ? "nav-link active":"navlink"
                  
                }>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" style={({isActive})=>{
                  return {
                    color:isActive?"blue":"black",
                  };
                }}>
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="movie" style={getNavLinkStyle}>
                  Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
             
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

