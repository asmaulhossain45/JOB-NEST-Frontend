const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-3 justify-items-center bg-Slate text-White px-4 py-10">
        <nav className="flex flex-col space-y-2">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav className="flex flex-col space-y-2">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
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
