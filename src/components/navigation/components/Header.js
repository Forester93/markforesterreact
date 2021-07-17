import React from "react";

function Header() {
  return (
    <div>
      {" "}
      <header class="header">
        <ul class="menu align-items-start">
          <li>
            <a class="menu-btn" href="/">
              Welcome
            </a>
          </li>
          <li>
            <a class="menu-btn" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a class="menu-btn" href="/contact">
              Contact Me
            </a>
          </li>
          <li>
            <a class="menu-btn" href="./assets/files/MarkF_FullStackResume.pdf">
              Résumé
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;