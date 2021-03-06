import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Jovial Chan :)
        </a>
      </h2>

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="header"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="contact"
              href="#contact"
              onClick={() => setContactSelected(false)}
            >
              Contact me
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="resume"
              href="#resume"
              onClick={() => setContactSelected(false)}
            >
              My Resume
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="project"
              href="#project"
              onClick={() => setContactSelected(false)}
            >
              My Projects
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
