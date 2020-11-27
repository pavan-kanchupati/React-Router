import React from 'react'
import {  BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About'
import './style.css'
import ContactUs from './ContactUs';
import Services from './Services'

function Navbar ()
{
    return(
        <div>
          
            <Router>
                <ul>
                    <li>
                        <Link className="Active" to="./">Home</Link>
                    </li>
                    
                    <li>
                        <Link className="" to="./about">About</Link>
                    </li>

                    <li>
                        <Link className="" to="./services">Services</Link>
                    </li>

                    <li>
                        <Link className="" to="./contact">Contact Us</Link>
                    </li>
                </ul>
            
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/services" component={Services}></Route>
                    <Route path="/contact" component={ContactUs}></Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Navbar;
