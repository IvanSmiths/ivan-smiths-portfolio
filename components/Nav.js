import Link from 'next/link';
import { Component } from 'react';

export class Nav extends Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <nav className="nav">
        <div className="logo-cnt">
          <Link href="/">
            <a className="small-font">Home</a>
          </Link>
        </div>
        <div className="cnt-link">
          <ul className={toggle ? 'toggle' : ''}>
            <li>
              <Link href="/skills">
                <a onClick={this.menuToggle} className="small-font">
                  Skills
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a onClick={this.menuToggle} className="small-font">
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a onClick={this.menuToggle} className="small-font">
                  Works
                </a>
              </Link>
            </li>
            <li className="small-font">
              <Link href="/about">
                <a onClick={this.menuToggle}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a onClick={this.menuToggle} className="small-font">
                  Contact
                </a>
              </Link>
            </li>
            <li onClick={this.menuToggle} className="close">
              X
            </li>
          </ul>
          <div onClick={this.menuToggle} className="menu small-text">
            Menu
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
