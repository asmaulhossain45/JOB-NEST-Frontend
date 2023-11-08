import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-3 justify-items-center bg-Slate text-White px-4 py-10">
        <div className="flex flex-col space-y-2">
          <header className="footer-title opacity-100">
            <Link to="/">
              <img
                className="w-16 md:w-24"
                src="https://i.ibb.co/znt07n6/Logo.png"
                alt=""
              />
            </Link>
          </header>
          <a className="link link-hover">+945157695</a>
          <a className="link link-hover">job@nest.co</a>
          <a className="link link-hover">Bangladesh</a>
        </div>
        <nav className="flex flex-col space-y-2">
          <header className="footer-title">Social</header>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
        </nav>
        <nav className="flex flex-col space-y-2">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="text-center bg-Slate text-White border-t-2 border-White py-6">
        <p>Copyright © 2023</p>
        <p>All right reserved By AH SOHAG</p>
      </div>
    </footer>
  );
};

export default Footer;
