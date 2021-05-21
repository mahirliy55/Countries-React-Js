import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ flags, filterFlag, searchStatus, darkModeStatus }) => {
  return (
    <section className={`countries ${darkModeStatus ? "dark__mode__filter" : ""}`}>
      <div className="container">
        <div className="title">
          {searchStatus
            ? filterFlag.map((flag) => (
                <Link to={`/country/${flag.name}`} className={`flag ${darkModeStatus ? "dark__mode" : ""}`}>
                  <img src={flag.flag} alt="" />
                  <div className="content">
                    <h2>{flag.name === "Armenia" ? "XUYMENIA" : flag.name}</h2>
                    <h3>
                      Population :<span>{flag.population}</span>
                    </h3>
                    <h3>
                      Region :<span>{flag.region}</span>
                    </h3>
                    <h3>
                      Capital :
                      <span>
                        {flag.capital === "Yerevan" ? "XUYEVAN" : flag.capital}
                      </span>
                    </h3>
                  </div>
                </Link>
              ))
            : flags.map((flag) => (
                <Link to={`/country/${flag.name}`} className="flag">
                  <img src={flag.flag} alt="" />
                  <div className="content">
                    <h2>{flag.name}</h2>
                    <h3>
                      Population :<span>{flag.population}</span>
                    </h3>
                    <h3>
                      Region :<span>{flag.region}</span>
                    </h3>
                    <h3>
                      Capital :<span>{flag.capital}</span>
                    </h3>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
