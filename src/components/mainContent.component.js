import React from 'react';
import './assets/css/mainContent.css';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import * as FontAwesome from 'react-icons/lib/fa';

function Main(){
    return(
        <div className="main">
              <div className="mainHead">
                  <div className="catList">
                      <span className="catItem">Everything</span>
                      <span className="catItem">Live Auction</span>
                      <span className="catItem">Eligible for Auction</span>
                      <span className="catItem">Buy New Only</span>
                  </div>
                  <div className="sort">
                    <span className="sortText">Sort by:</span>
                    <span className="sortList">Lowest Price<FontAwesome.FaAngleDown className="faIcon1"/></span>
                    <div class="dropdown-content">
                        <ul>
                            <li className="sortLi">Highest</li>
                            <li className="sortLi">Popular</li>
                            <li className="sortLi">Recommended</li>
                        </ul>
                    </div>
                  </div>
              </div>
              <div className="catalog">
                  <div className="box1">
                      <img className="boxImage" src={image3} alt="card"/>
                      <div className="new">NEW</div>
                      <div className="views"><FontAwesome.FaEye className="eyeIcon"/>435</div>
                      <div className="catalogBody">
                        <span className="subHead1">LIVE AUCTION</span>
                        <span className="subHead2">3 days left</span>
                        <div className="itemTitle">Original iPhone Boxes By Apple Liquidation Lot<hr className="titleHr"></hr></div>
                        <div className="itemDetails">
                            <div className="bidetails"><div className="bidPrice">$200</div><div className="bidHead">Current Bid</div></div>
                            <div className="mrspDetaails"><div className="msrpPrice"><strike>$500</strike></div><div className="msrpHead">MSRP</div></div>
                            <div className="unitsDetails"><div className="unitsQty">20</div><div className="unitsHead">Units</div></div>
                        </div>
                        <div className="catButton">
                            <button className="viewButton">View</button>
                            <button className="watchButton">Watch</button>
                        </div>
                      </div>
                  </div>
                  <div className="box1">
                  <img className="boxImage" src={image2} alt="card"/>
                  <div className="used">USED</div>
                  <div className="views"><FontAwesome.FaEye className="eyeIcon"/>565</div>
                  <div className="catalogBody">
                        <span className="subHead1 eligAuc">ELIGIBLE FOR AUCTION</span>
                        <div className="itemTitle">Original iPhone Boxes By Apple Liquidation Lot<hr className="titleHr"></hr></div>
                        <div className="itemDetails">
                            <div className="bidetails"><div className="bidPrice">$1200</div><div className="bidHead">Current Bid</div></div>
                            <div className="mrspDetaails"><div className="msrpPrice"><strike>$4000</strike></div><div className="msrpHead">MSRP</div></div>
                            <div className="unitsDetails"><div className="unitsQty">346</div><div className="unitsHead">Units</div></div>
                        </div>
                        <div className="catButton">
                            <button className="viewButton">View</button>
                            <button className="watchButton">Watch</button>
                        </div>
                      </div>
                  </div>
                  <div className="box1">
                  <img className="boxImage" src={image1} alt="card"/>
                  <div className="catalogBody">
                        <span className="subHead1 newListed">NEWLY LISTED</span>
                        <div className="itemTitle">Original iPhone Boxes By Apple Liquidation Lot<hr className="titleHr"></hr></div>
                        <div className="itemDetails">
                            <div className="bidetails"><div className="bidPrice">$9200</div><div className="bidHead">Current Bid</div></div>
                            <div className="mrspDetaails"><div className="msrpPrice"><strike>$12000</strike></div><div className="msrpHead">MSRP</div></div>
                            <div className="unitsDetails"><div className="unitsQty">60</div><div className="unitsHead">Units</div></div>
                        </div>
                        <div className="catButton">
                            <button className="soldButton">Sold</button>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="loadBar">Load more</div>
          </div>
    )
}

export default Main