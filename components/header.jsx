const Header = () => {
  return (
    <header className="flex justify-between p5 items-center">
      <div className="flex gap-4">
        <h1 className="font-bold">Brainwave.io</h1>
        <ul className="flex gap-2 text-sm">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="bg-indigo-600 text-white py-3 px-2 rounded-md">
        Get started a project
      </button>
    </header>
  );
};

export default Header;
