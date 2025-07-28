import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  menuClick(){
    /*alert("Testing...");*/
    const navlist=document.getElementById("navlist");
    //navlist.style.display="block";
    navlist.classList.toggle("active");
  }
  render() {
    return (
      <>
        <header> 
          <nav>
             <div className='logo'>My Website</div>
             <ul id="navlist">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
             </ul>
             <div className='menu'onClick={()=>this.menuClick()}>&#9776;</div>
          </nav>
        </header>
        <section>
          <h1>Welcome to My Responsive Website</h1>
            <p>This design adopts that various screen sizes</p>
        </section>
        <footer>Copyright 2025. All rights  reserved.</footer>
      </>
    );
  }
}