***79:Building a Dynamic Navigation Bar with React Router  77 video RR4****

In this video, you'll learn how to create a dynamic navigation bar using React Router. We'll start by discussing why React is known as a Single Page Application (SPA), then move on to building a simple header using HTML and CSS. You'll see how to make the navigation bar dynamic with the NavLink component from React Router and finish by adding a footer to your app. This tutorial is perfect for developers looking to enhance their React projects with efficient navigation 💸 

-----Navigation Bar IN React----------

Single Page Application


import { NavLink } from "react-router-dom";

export const Header = () => {
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
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="movie" className="nav-link">
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