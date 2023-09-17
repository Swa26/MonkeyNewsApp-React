import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import classes from './navbar.module.css';
export class NavbarCompo extends Component {
  static propTypes = {}
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-light-tertiary bg-dark navbar-dark">
          <Container>
            <Navbar.Brand to="/"><img src='https://res.9appsinstall.com/group1/M02/4A/C4/q4YBAFid5Z-AFL2tAAAh4TPusKs930.png?x-oss-process=style/mq200' alt='Brand-Logo' height={'30rem'} />NewsMonkey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link >
                  <Link className={classes.link} to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className={classes.link}  to="/business">Business</Link>
                  </Nav.Link>
                <Nav.Link>
                  <Link className={classes.link}  to="/entertainment">Entertainment</Link>
                  </Nav.Link>
                <Nav.Link><Link className={classes.link}  to="/general">General</Link></Nav.Link>
                <Nav.Link><Link className={classes.link}  to="/health">Health</Link></Nav.Link>
                <Nav.Link><Link className={classes.link}  to="/science">Science</Link></Nav.Link>
                <Nav.Link><Link className={classes.link}  to="/sports">Sports</Link></Nav.Link>
                <Nav.Link><Link className={classes.link}  to="/technology">Technology</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavbarCompo