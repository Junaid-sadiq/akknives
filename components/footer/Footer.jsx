/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { Facebook, Twitter } from 'react-feather';


const Footer = () => {
      const [email, setEmail] = useState("");
 function handleSubmit(e) {
  e.preventDefault();
  var email = document.getElementById("nl-email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if (email.match(pattern)) {
    window.location.href = `mailto:${email}`;
    return true;
  } else {
    alert("Invalid email address");
    return false;
  }
}
  return (
    <div id='footer'>
        <div className="newsletter">
            <div className="container">
            <h2>GET QUOTE</h2>
                <form className="newsletter-form-container"  onSubmit={handleSubmit}>
                    <input type="email" name="email" id="nl-email" placeholder='john@doe.com' />                    
                    <button type='submit' className='nl-submit'>Send</button>
                </form>
            </div>
        </div>
        <div className="footer-menu">
            <div className="container">
                <div className="footer-menu-items">
                    <div className="nav-items">
                            <Link href='/category/all'>
                                <span className="nav-item">All Products</span>
                            </Link>

                            <Link href='/category/premium'>
                                <span className="nav-item">Premium Products</span>
                            </Link>

                            <Link href='/about'>
                                <span className="nav-item">About</span>
                          </Link>
                          <Link href='#navbar'>
                                <span className="nav-item">Contact Us</span>
                          </Link>
                        
                      </div>
                      {/*   <div className="cr social-icons">
                              <Link href='https://www.twitter.com'>
                              <span className="nav-item ">
                                  <Twitter size={18} color='white'/>
                              </span>
                          </Link>
                      <Link href='https://www.facebook.com'>
                              <span className="nav-item social-icons">
                                  <Facebook size={18} color='white'/>
                              </span>
                              </Link>
                    </div> */}
                <div className="cr">©2023 Akknives Inc. Pakistan</div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer