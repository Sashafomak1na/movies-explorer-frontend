import React from "react";

function FilterType({ shortFilm, handleCheckBox }) {
  return (
    <fieldset className="checkbox">
      <label className="checkbox__switch">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={shortFilm}
          onChange={handleCheckBox}
        />
        <span className="checkbox__slider"></span>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </fieldset>
  );
}

export default FilterType;
