import React from "react";

const Toggle = ({ toggleVisibility, toggled }) => {
  let btnText = "";
  if (toggled) {
    btnText = "Show all";
  } else {
    btnText = "Show only unchecked";
  }
  return(
    <div>
      <button onClick={toggleVisibility}>This button should filter by all or unchecked but doesn't</button>
    </div>
  );
};

export default Toggle;
