import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";


import NavBar from './components/navbar'

// components
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Order from './pages/order'
import OrderList from './pages/orderList'
import AuthManagerOrderList from './pages/authManagerOrederList'
import AuthManagerOrder from './pages/authManagerOrder'
import login from './pages/login'
import SupplierList from "./pages/supplierList"
import SiteList from "./pages/siteList"
import newSupplier from "./pages/newSupplier"
import newSite from "./pages/newSite"

export default function App() {
  return (
    <Router>
    <div className="container">
      <br/>

  <Route exact path="/" component={login} />
  <Route path="/Dashboard" component={Dashboard} />
  <Route path="/OrderList"  component={OrderList} />
  <Route path="/Order/:id" component={Order}/>
  <Route path="/AuthManagerOrderList"  component={AuthManagerOrderList} />
  <Route path="/AuthManagerOrder/:id" component={AuthManagerOrder}/>
  <Route path="/SupplierList" component={SupplierList}/>
  <Route path="/newSupplier" component={newSupplier}/>
  <Route path="/SiteList" component={SiteList}/>
  <Route path="/newSite" component={newSite}/>
  </div>
  </Router>
  )
}
