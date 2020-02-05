import React from 'react';
import './assets/css/container.css';
import Main from './mainContent.component';
import * as FontAwesome from 'react-icons/lib/fa';


function Container(){
    return(
      <div className="container-flex">
          <div className="side">
              <div><span className="filter">Filter</span><span className="clear">Clear</span></div>
              <hr></hr>
              <div className="priceHead">PRICE</div>
              <div className="priceBar">
                  <button className="min">$ Min<FontAwesome.FaAngleDown className="faIcon"/></button>
                  <button className="max">$ Max<FontAwesome.FaAngleDown className="faIcon"/></button>
              </div>
              <div className="location">
                  <div className="locationHead">LOCATION (USA)</div>
                  <hr></hr>
                  <label className="check-container">
                      West
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Midwest
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Southeast
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Northeast
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Southwest
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
              </div>
              <div className="MSRP">
                  <div className="MSRPHead">MSRP Percent Off</div>
                  <hr></hr>
                  <label className="check-container">
                      0 - 20%
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      20 - 50%
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      50 - 80%
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
              </div>
              <div className="condition">
                  <div className="conditionHead">CONDITION</div>
                  <hr></hr>
                  <label className="check-container">
                      New
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Like New
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Uninspected Returns
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Used
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Salvage
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
                  <label className="check-container">
                      Mixed
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                  </label>
              </div>
          </div>
          <Main />
      </div>
    )
}

export default Container;