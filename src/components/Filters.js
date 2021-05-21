import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Filters = ({
  filter,
  change,
  changeFilter,
  filterRegion,
  darkModeStatus,
}) => {
  return (
    <section className={`search ${darkModeStatus ? "dark__mode__filter" : ""}`}>
      <div className="container">
        <div className="title">
          <div
            className={`search__input ${darkModeStatus ? "dark__mode" : ""}`}
          >
            <form action="" onInput={filter}>
              <SearchIcon />
              <input
                type="text"
                placeholder="Search for a country..."
                onChange={change}
                className={`${darkModeStatus ? "dark__mode" : ""}`}
              />
            </form>
          </div>
          <div
            className={` search__filter ${darkModeStatus ? "dark__mode" : ""}`}
          >
            <select name="region" id="" onChange={changeFilter} className={`${darkModeStatus ? "dark__mode" : ""}`}>
              <option value="Filter by Region" className={`${darkModeStatus ? "dark__mode" : ""}`} >Filter by Region</option>
              <option value="Africa" className={`${darkModeStatus ? "dark__mode" : ""}`}>Africa</option>
              <option value="Americas" className={`${darkModeStatus ? "dark__mode" : ""}`}>Americas</option>
              <option value="Asia" className={`${darkModeStatus ? "dark__mode" : ""}`}>Asia</option>
              <option value="Europe" className={`${darkModeStatus ? "dark__mode" : ""}`}>Europe</option>
              <option value="Oceania" className={`${darkModeStatus ? "dark__mode" : ""}`}>Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
