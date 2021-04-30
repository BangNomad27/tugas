import React, {Component} from 'react';

function clickHandler() {
  alert('Ok! Berhasil :)');
}

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logos">Dashboard</h1>
          <div className="icon" onClick={clickHandler}>
            <i class='bx bxs-chevron-down'></i>
          </div>
          <h1 className="title">Kementerian Pertanian</h1>
        </div>

        <div className="navbar-right">
          <div className="newBx">
            <h3 className="news" onClick={clickHandler}>Online News<i class='bx bx-caret-down' ></i></h3>
          </div>
        </div>
      </nav>
    );
  }
}