export const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <div className="footer-container container">
          <div className="content_1">
            <p>MovieMix</p>
            <p>
              Welcome to Moviemix, your ultimate destination for funtastic
              movies paltform !
            </p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div className="content_2">
            <h4>Check out movies here</h4>
            <a href="#">Computer Store</a>
            <a href="#">Laptop Store</a>
            <a href="#">Accessories</a>
            <a href="#">Sales & Discount</a>
          </div>
          <div className="content_3">
            <h4>Experience</h4>
            <a href="./contact.html">Contact Us</a>
            <a href="" target="_blank">
              Payment Method
            </a>
            <a href="" target="_blank">
              Fun and Romantic
            </a>
            <a href="" target="_blank">
              high quality download
            </a>
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt">
            <p style={{"color":"green"}}>Design and Code by Teertharaj Turkar</p>
          </div>
        </div>
      </footer>
    </>
  );
};
