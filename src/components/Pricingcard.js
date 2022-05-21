import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/pricingcard.css";

const Pricingcard = () => {
  return (
  <div className='pricing'>
      <div className='card-container'>
          <div className='card'>
              <h3>-- Basic --</h3>
              <span className='bar'></span>
              <p className='btc'>$100</p>
              <p>- 2 Days -</p>
              <p>- 3 Pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <NavLink to="/contact" className="btn_p">Purchase Now</NavLink>
          </div>
          <div className='card'>
              <h3>-- Premium --</h3>
              <span className='bar'></span>
              <p className='btc'>$200</p>
              <p>- 4 Days -</p>
              <p>- 6 Pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <NavLink to="/contact" className="btn_p">Purchase Now</NavLink>
          </div>
          <div className='card'>
              <h3>-- Business --</h3>
              <span className='bar'></span>
              <p className='btc'>$400</p>
              <p>- 5 Days -</p>
              <p>- 8 Pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <NavLink to="/contact" className="btn_p">Purchase Now</NavLink>
          </div>
      </div>
  </div>
  )
}

export default Pricingcard;