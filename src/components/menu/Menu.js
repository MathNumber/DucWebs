import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#banner">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#introduction">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skill">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#project">Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
