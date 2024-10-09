import "./Footer.scss";

export default function Footer() {
  return (
    <div className="wrapperFooter">
      <div className="fotterBox">
        <div className="linkBox">
          <div className="product">
            <p>Product</p>
            <a href="#">How it works</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
          </div>
          <div className="product">
            <p>About form</p>
            <a href="#">Our team</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Stores</a>
          </div>
          <div className="product">
            <p>Connect</p>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
          </div>
          <div className="product">
            <p>Contact</p>
            <a href="#">info@gmail.com</a>
            <a href="#">000-000-0000</a>
            <a href="#">0000 Willa River Suite 000</a>
          </div>
        </div>
        <div className="newsLetter">
          <p className="topText">Newsletter</p>
          <p className="middleText">Join our weekly maiiling list</p>
          <p className="bottomText">Name *</p>
          <div className="search">
            <form>
              <input type="text" placeholder="Input text placeholder" />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottomBox">
        <div className="leftBox">
          <p>Terms and conditions</p>
          <p>Legal</p>
          <p>Pattents</p>
        </div>
        <div className="rightBox">
          <p>Designed to be loved © 2008-2021</p>
        </div>
      </div>
    </div>
  );
}
