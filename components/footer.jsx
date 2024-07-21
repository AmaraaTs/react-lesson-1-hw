const Footer = () => {
  return (
    <footer className="py-32 bg-gray-900 flex px-72 justify-between">
      <div>
        <h6 className="text-white text-2xl">Brainwave.io</h6>
        <p className="text-white text-sm opacity-50 mt-6">
          With lots of unique blocks, you can <br />
          easily build a page without coding. <br />
          Build your next landing page.
        </p>
      </div>
      <div className="text-white text-sm opacity-70">
        <ul className="menu gap-3 flex flex-col">
          <li className="opacity-50 mb-7">Company</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="text-white text-sm opacity-70">
        <ul className="menu gap-3 flex flex-col">
          <li className="opacity-50 mb-7">Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>News</li>
          <li>Help desk</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="text-white text-sm opacity-70 mr-80">
        <ul className="menu gap-3 flex flex-col">
          <li className="opacity-50 mb-7">Services</li>
          <li>Digital Marketing</li>
          <li>Content Writing</li>
          <li>SEO for Business</li>
          <li>UI Design</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
