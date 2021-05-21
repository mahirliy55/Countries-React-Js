/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Country extends Component {
  state = {
    item: {},
    newBorders: [],
    curren: [],
    lang: [],
  };
  componentDidMount() {
    const {
      match: {
        params: { name },
      },
    } = this.props;
    this.fetchData(name);
  }

  componentDidUpdate() {
    this.fetchData(this.props.match.params.name);
  }

  shouldComponentUpdate(nextProp, nextState) {
    return (
      nextProp.match.params.name !== this.props.match.params.name ||
      nextState.item.name !== this.state.item.name
    );
  }

  fetchData = async (name) => {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    const [data] = await response.json();

    const res = await fetch(`https://restcountries.eu/rest/v2/all`);
    const allCountry = await res.json();

    const test = data.borders.map((c) => {
      return allCountry.find((el) => {
        if (el.alpha3Code === c) {
          return el;
        }
      });
    });

    const n = test.map((el) => el.name);
    this.setState({
      newBorders: n,
      item: data,
      curren: data.currencies,
      lang: data.languages,
    });
  };

  render() {
    const e = this.state.item;
    return (
      <section
        className={`country ${this.props.darkModeFunc ? "dark__mode" : ""}`}
      >
        <div className="container">
          <div className="title">
            <Link to="/">Back</Link>
          </div>
          <div className="main">
            <div className="main__img">
              <img src={e.flag} alt="" />
            </div>
            <div className="main__desc">
              <h2>{e.name}</h2>
              <div className="allInfo">
                <div className="info">
                  <h5>
                    Native Name : <span>{e.name}</span>
                  </h5>
                  <h5>
                    Population : <span>{e.population}</span>
                  </h5>
                  <h5>
                    Region : <span>{e.region}</span>
                  </h5>
                  <h5>
                    Sub Region : <span>{e.subregion}</span>
                  </h5>
                  <h5>
                    Capital : <span>{e.capital}</span>
                  </h5>
                </div>
                <div className="desc__right">
                  <h5>
                    Top Level Domain : <span>{e.topLevelDomain}</span>
                  </h5>
                  <h5>
                    Currencies :
                    {this.state.curren.map((sal) => {
                      return <span>{sal.name}</span>;
                    })}
                  </h5>
                  <h5>
                    Language :
                    {this.state.lang.map((lan) => {
                      return <span>{lan.name}</span>;
                    })} 
                  </h5>
                </div>
              </div>
              <h5 className="countryH5">
                Border Countries :{" "}
                {this.state.newBorders.map((border) => (
                  <Link to={`/country/${border}`} className="borders">
                    <button>{border}</button>
                  </Link>
                ))}
              </h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Country;
