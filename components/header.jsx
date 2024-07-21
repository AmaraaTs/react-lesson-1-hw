const Header = () => {
  return (
    <header className="flex justify-between p5 items-center mx-60 my-3">
      <div className="flex gap-4 text-xl">
        <h1 className="font-bold">Brainwave.io</h1>
        <ul className="flex gap-10 font-bold text-xs items-center ml-12">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="bg-indigo-600 text-white py-3 px-4 rounded-md text-sm">
        Get started a project
      </button>
    </header>
  );
};

export default Header;
