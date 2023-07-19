import React from 'react';
import './order.css';


function Order1() {
  return (
    <>

      <div className="orders-container">
        <h1>New Policies</h1>
        <div className="orders-list">
          <div className="order-item">
            <h3>Policy Code: 14</h3>
            <p>Policy Name:Endowment with Profits </p>
            <ul>
              <li>Duration : 36 Months</li>
               <li> Type : Endowment</li> 
            </ul>
           <a href='PolicyPrice'><button className="btn-prepare">Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code: 41</h3>
            <p>Policy Name : Jeevan Amrit</p>
            <ul>
              <li>Duration :24 Months</li>
              <li> Type : Endowment</li> 
            </ul>
            <a href ='/PolicyPrice'><button className="btn-prepare">Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code : 48</h3>
            <p>Policy Name :	Jeevan Ankur</p>
            <ul>
              <li>Duration : 10 Yrs</li>
              <li> Type : Endowment</li> 
            </ul>
            <a href ='/PolicyPrice'><button className="btn-prepare">Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code : 81</h3>
            <p> Policy Name : New Janaraksha</p>
            <ul>
              <li>Duration : 5 Yrs</li>
              <li>Type : Endowment</li> 
            </ul>
            <a href ='/PolicyPrice'><button className="btn-prepare">Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code : 91</h3>
            <p>Policy Name :Jeevan Shree-1 </p>
            <ul>
              <li>Duration : 7 Yrs</li>
              <li>Type : Endowment</li>
            </ul>
            <a href ='/PolicyPrice'><button className="btn-prepare">Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code : 103</h3>
            <p>Policy Name :Jeevan Pramukh</p>
            <ul>
              <li>Duration : 36 Months</li>
              <li> Type : Endowment</li> 
            </ul>
            <a href ='/PolicyPrice'><button className="btn-prepare">Add</button></a>
          </div>
         
        </div>
      </div>
      <button className="btn-prepare1">View More</button>
  
    </>
  );
}

export default Order1;
