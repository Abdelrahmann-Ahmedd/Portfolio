import React, { PureComponent } from 'react';
import "./Layout.css";
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Aside from '../Aside/Aside';
class Layout extends PureComponent {

    render() {
        return (
            <>
                <div className="layout container-fluid">
                    <div className="row gx-0">
                        <div className="col-xl-3 col-lg-2 col-md-2 col-sm-1">
                            <Aside/>
                        </div>
                        <div className="col-xl-9 col-lg-10 col-md-10 col-sm-11 col-xs-12">
                            <Navbar/>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Layout