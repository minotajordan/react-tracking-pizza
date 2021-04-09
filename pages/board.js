import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Nav from "../components/nav";

export default function Basic() {
  
  return (
    <>
      <Head>
        <title>Structura Basic App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        ></link>
        <script
          src="../js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body id="page-top">
        <div id="wrapper">
          <Nav />
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top">
                {/* Sidebar Toggle (Topbar) */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars" />
                </button>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                  {/* Nav Item - Search Dropdown (Visible Only XS) */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* Nav Item - Messages */}
                  
                  <div className="d-none d-sm-block" />
                  {/* Nav Item - User Information */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        Admin
                      </span>
                      <img
                        className="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </a>
                    {/* Dropdown - User Information */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                        Activity Log
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                {/* Content Row */}
                {/* Content Row */}
                <div className="row">
                  {/* Area Chart */}
                  <div className="col-xl-8 col-lg-7">
                    <div className="card card-none shadow mb-4">
                      {/* Card Header - Dropdown */}

                      <div className="row">
                        <div className="col-6 col-lg-6 float-right">
                          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <div className="dropdown no-arrow">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                                <span>Dashboard</span>
                              </a>
                              <div
                                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink"
                              >
                                <div className="dropdown-header">
                                  Dropdown Header:
                                </div>
                                <a className="dropdown-item" href="#">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Another action
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-6 col-lg-6 img-board-bg">
                          <span className="float-right opacity-10">
                            <img src="img/short-d1.png" width="220px" />
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="card-body">
                        <div className="chart-area height-auto">
                          <div className="row">
                            {/* Earnings (Monthly) Card Example shadow */}
                            <div className="col-xl-4 col-md-6 mb-4">
                              <div className="card card-effect xx-border-bottom-primary h-100 xx-py-2 shadow">
                                <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                    <div className="col-auto ml-2">
                                      <i className="ico-circle fas fa-calendar fa-1x text-gray-300" />
                                    </div>
                                    <div className="col ml-4">
                                      <div className="text-md text-primary mb-1">
                                        Subscrito{" "}
                                      </div>
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        40,000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row col align-items-center justify-content-center progress-bottom">
                                  <div className="progress progress-sm">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Earnings (Monthly) Card Example */}
                            <div className="col-xl-4 col-md-6 mb-4">
                              <div className="card card-effect bg-dark xx-border-bottom-primary h-100 xx-py-2 shadow">
                                <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                    <div className="col-auto ml-2">
                                      <i className="ico-circle fas fa-calendar fa-1x text-gray-300" />
                                    </div>
                                    <div className="col ml-4">
                                      <div className="text-xs text-primary text-uppercase mb-1">
                                        Earnings (Monthly)
                                      </div>
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        40,000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row col align-items-center justify-content-center progress-bottom">
                                  <div className="progress progress-sm">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Earnings (Monthly) Card Example shadow */}
                            <div className="col-xl-4 col-md-6 mb-4">
                              <div className="card card-effect xx-border-bottom-primary h-100 xx-py-2 shadow">
                                <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                    <div className="col-auto ml-2">
                                      <i className="ico-circle fas fa-calendar fa-1x text-gray-300" />
                                    </div>
                                    <div className="col ml-4">
                                      <div className="text-md text-primary mb-1">
                                        Subscrito{" "}
                                      </div>
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        40,000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row col align-items-center justify-content-center progress-bottom">
                                  <div className="progress progress-sm">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Earnings (Monthly) Card Example shadow */}
                            <div className="col-xl-4 col-md-6 mb-4">
                              <div className="card card-effect xx-border-bottom-primary h-100 xx-py-2 shadow">
                                <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                    <div className="col-auto ml-2">
                                      <i className="ico-circle fas fa-calendar fa-1x text-gray-300" />
                                    </div>
                                    <div className="col ml-4">
                                      <div className="text-md text-primary mb-1">
                                        Subscrito{" "}
                                      </div>
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        40,000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row col align-items-center justify-content-center progress-bottom">
                                  <div className="progress progress-sm">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Earnings (Monthly) Card Example shadow */}
                            <div className="col-xl-4 col-md-6 mb-4">
                              <div className="card card-effect xx-border-bottom-primary h-100 xx-py-2 shadow">
                                <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                    <div className="col-auto ml-2">
                                      <i className="ico-circle fas fa-calendar fa-1x text-gray-300" />
                                    </div>
                                    <div className="col ml-4">
                                      <div className="text-md text-primary mb-1">
                                        Subscrito{" "}
                                      </div>
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        40,000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row col align-items-center justify-content-center progress-bottom">
                                  <div className="progress progress-sm">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Earnings (Monthly) Card Example shadow */}
                            <div className="col-xl-4 col-md-6 mb-4">
                              <div className="card card-effect xx-border-bottom-primary h-100 xx-py-2 shadow">
                                <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                    <div className="col-auto ml-2">
                                      <i className="ico-circle fas fa-calendar fa-1x text-gray-300" />
                                    </div>
                                    <div className="col ml-4">
                                      <div className="text-md text-primary mb-1">
                                        Subscrito{" "}
                                      </div>
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        40,000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row col align-items-center justify-content-center progress-bottom">
                                  <div className="progress progress-sm">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "0%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-12 col-lg-12">
                        <div className="card shadow mb-4">
                          {/* Card Body */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pie Chart */}
                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Revenue Sources
                        </h6>
                        <div className="dropdown no-arrow">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <div className="dropdown-header">
                              Dropdown Header:
                            </div>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <div className="chart-pie pt-4 pb-2"></div>
                        <div className="mt-4 text-center small">
                          <span className="mr-2">
                            <i className="fas fa-circle text-primary" /> Direct
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-success" /> Social
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-info" /> Referral
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Row */}
                <div className="row">
                  {/* Content Column */}
                  <div className="col-lg-6 mb-4">
                    {/* Project Card Example */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Projects
                        </h6>
                      </div>
                      <div className="card-body">
                        <h4 className="small font-weight-bold">
                          Server Migration{" "}
                          <span className="float-right">20%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <h4 className="small font-weight-bold">
                          Sales Tracking{" "}
                          <span className="float-right">40%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <h4 className="small font-weight-bold">
                          Customer Database{" "}
                          <span className="float-right">60%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <h4 className="small font-weight-bold">
                          Payout Details{" "}
                          <span className="float-right">80%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <h4 className="small font-weight-bold">
                          Account Setup{" "}
                          <span className="float-right">Complete!</span>
                        </h4>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    
                    {/* Approach */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Development Approach
                        </h6>
                      </div>
                      <div className="card-body">
                        <p>
                          SB Admin 2 makes extensive use of Bootstrap 4 utility
                          classes in order to reduce CSS bloat and poor page
                          performance. Custom CSS classes are used to create
                          custom components and custom utility classes.
                        </p>
                        <p className="mb-0">
                        Before working with this theme, you should become
                          familiar with the Bootstrap framework, especially the
                          utility classes.

                          Before working with this theme, you should become
                          familiar with the Bootstrap framework, especially the
                          utility classes.

                          Before working with this theme, you should become
                          familiar with the Bootstrap framework, especially the
                          utility classes.
                          Before working with this theme, you should become
                          familiar with the Bootstrap framework, especially the
                          utility classes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Test Habi 2021</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
        </div>
      </body>
    </>
  );
}
