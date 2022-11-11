function addStyle() {
  const ID = "privacy_mode";

  const existentStyle = document.querySelector(`#${ID}`);

  if (existentStyle) {
    return existentStyle.remove();
  }

  const style = document.createElement("style");

  style.id = ID;

  const styleString = `
    * {
      color: transparent !important;
      text-shadow: 0 0 7px rgba(0, 0, 0, 0.5) !important;
    }

    img {
      filter: blur(8px) !important;
    }
  `;

  style.textContent = styleString;
  document.head.append(style);
}

addStyle();
