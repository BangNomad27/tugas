import React, {Component} from 'react';
import LineChart from './LineChart';
import Tester from '../images/tester.png';

export default class Sidebar extends Component {
  render() {
    return (
      <aside>
        <div className="headBx">
          <h3 className="head-title">News</h3>
          <div data-select>
            <i class='bx bxs-chevron-left'></i>
            <select>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </select>
          </div>
        </div>

        <div className="chart">
          <LineChart />
        </div>

        <h3 className="head-title border">Pictures</h3>
        <div className="row">
          <div className="col">
            <div className="thumb">
              <img src={Tester} alt="Tester" />
            </div>
            <div className="text">
              <p>Presiden Jokowi Tinj...</p>
            </div>
          </div>
          <div className="col">
            <div className="thumb">
              <img src={Tester} alt="Tester" />
            </div>
            <div className="text">
              <p>Presiden Jokowi Tinj...</p>
            </div>
          </div>
          <div className="col">
            <div className="thumb">
              <img src={Tester} alt="Tester" />
            </div>
            <div className="text">
              <p>Presiden Jokowi Tinj...</p>
            </div>
          </div>
          <div className="col">
            <div className="thumb">
              <img src={Tester} alt="Tester" />
            </div>
            <div className="text">
              <p>Presiden Jokowi Tinj...</p>
            </div>
          </div>
        </div>

        <h3 className="head-title border">TV News</h3>
                <div className="row">
          <div className="col">
            <div className="thumb">
              <img src={Tester} alt="Tester" />
            </div>
            <div className="text">
              <p>Presiden Jokowi Tinj...</p>
            </div>
          </div>
          <div className="col">
            <div className="thumb">
              <img src={Tester} alt="Tester" />
            </div>
            <div className="text">
              <p>Presiden Jokowi Tinj...</p>
            </div>
          </div>
          <div className="col">
            <div className="thumb">
              <img src={Tester} alt="Tester" />
            </div>
            <div className="text">
              <p>Presiden Jokowi Tinj...</p>
            </div>
          </div>
          <div className="col">
            <div className="thumb">
              <img src={Tester} alt="Tester" />
            </div>
            <div className="text">
              <p>Presiden Jokowi Tinj...</p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}