import React from 'react'

// components
import NavBar from '../../components/main/Navigation_Bar/navbar'
import { Link } from 'react-router-dom'

export default function dashboard() {
    return (
        <>
        <NavBar/>
        <div class="jumbotron" style={{marginTop: 20}}>
            <h2 style={{textAlign: "center"}}><u>Welcome to the Procurement Staff DashBaord</u></h2>
        </div>
        <div class="card-group">

        <div class="card">
                <div class="card-body">
                        <h4 class="card-title"> <b>Orders</b></h4>
                        <p class="card-text">You can go to the Orders Section</p>
                        </div>
                <div class="card-footer">
                        <center><Link to={"/OrderList"}><button className="btn btn-primary" >Go to</button> </Link></center>
                </div>
        </div>

        <div class="card">
                <div class="card-body">
                        <h4 class="card-title"> <b>Suppliers</b></h4>
                        <p class="card-text">You can go to the Supplier Section</p>
                        </div>
                <div class="card-footer">
                        <center><Link to={"/SupplierList"}><button className="btn btn-primary" >Go to</button> </Link></center>
                </div>
        </div>
        <div class="card">
                <div class="card-body">
                        <h4 class="card-title"><b>Items</b></h4>
                        <p class="card-text">You can go to the Item Section</p>
                        </div>
                <div class="card-footer">
                        <center><Link to={"/ItemList"}><button className="btn btn-primary" >Go to</button> </Link></center>
                </div>
        </div>
        <div class="card">
                <div class="card-body">
                        <h4 class="card-title"><b>Sites</b></h4>
                        <p class="card-text">You can go to the Sites Section</p>
                        </div>
                <div class="card-footer">
                <center><Link to={"/SiteList"}><button className="btn btn-primary" >Go to</button> </Link></center>
                </div>
        </div>
        </div>

        <div class="card-group">
 
 <div class="card">
         <div class="card-body">
                 <h4 class="card-title"> <b>Deliveries</b></h4>
                 <p class="card-text">You can go to the Delivery Section</p>
                 </div>
         <div class="card-footer">
                 <center><Link to={"/delivery"}><button className="btn btn-primary" >Go to</button> </Link></center>
         </div>
 </div>
 <div class="card">
         <div class="card-body">
                 <h4 class="card-title"><b>Payments</b></h4>
                 <p class="card-text">You can go to the Payment Section</p>
                 </div>
         <div class="card-footer">
                 <center><Link to={"/paymentList"}><button className="btn btn-primary" >Go to</button> </Link></center>
         </div>
 </div>
 <div class="card">
         <div class="card-body">
                 <h4 class="card-title"><b>Policies</b></h4>
                 <p class="card-text">You can go to the Sites Section</p>
                 </div>
         <div class="card-footer">
         <center><Link to={"/policyDisplay"}><button className="btn btn-primary" >Go to</button> </Link></center>
         </div>
 </div>
 <div class="card">
         <div class="card-body">
                 <h4 class="card-title"><b>Financial Settings</b></h4>
                 <p class="card-text">You can go to the Financial Settings Section</p>
                 </div>
         <div class="card-footer">
         <center><Link to={"/accountDisplay"}><button className="btn btn-primary" >Go to</button> </Link></center>
         </div>
 </div>
 </div>

       </>
    )
}
