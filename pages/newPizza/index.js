import React, { useState } from "react";
import Head from "next/head";
import styles from "./Pizza.module.css";
import Nav from "../../components/nav";
import { connect } from "react-redux";

const NewPizza = ({ data_ingredient }) => {
  const [pizza, newPizza] = useState({
    name: "Pizza de uva",
    ingredient: [1, 2, 3, 8, 10],
  });

  const renderIngredientSelect = () => {
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Ingredient</th>
            <th scope="col">Price</th>
            <th scope="col"  className="d-flex justify-content-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {data_ingredient.map(
            (item) =>
              pizza.ingredient.includes(item.id) && (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td className="d-flex justify-content-end">
                      <a href='#'>
                        <i class="fas fa-minus-circle text-danger"></i>
                      </a>
                    </td>
                  </tr>
                </>
              )
          )}
        </tbody>
      </table>
    );
  };

  const renderIngredient = () => {
    return data_ingredient.map((item) => (
      <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <i class={`${styles.add_pizza} fas fa-plus-square text-primary`}></i>
            </div>
            <span>
            {item.name}
          </span>
          <span className="badge badge-primary badge-pill">$ {item.price}</span>
        </li>
      </>
    ));
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
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
                  {/* Pie Chart */}
                  <div className="col-xl-8 col-lg-12">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Create Pizza
                        </h6>
                      </div>
                      <div className="card-body">

                          <div className="form-group row">
                            <label
                              htmlFor="inputPassword"
                              className="col-sm-2 col-form-label"
                            >
                              Name
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="for example: Pizza de la casa"
                              />
                            </div>
                          </div>

                        {renderIngredientSelect()}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-12">
                    <div className="col-xl-12 col-lg-12">
                      <div className="card shadow mb-4">
                        {/* Card Header - Dropdown */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Total
                          </h6>
                        </div>
                        {/* Card Body */}
                        <div className={`${styles.h170} card-body`}>
                          <div className="chart-pie pt-4 pb-2">
                            <ul className="list-group">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total price
                                <span className="badge badge-primary badge-pill">
                                  2
                                </span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total ingredient
                                <span className="badge badge-primary badge-pill">
                                  1
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="mt-4 text-center small">
                            <i className="fas fa-circle text-info" /> Referral
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12 col-lg-12">
                      <div className="card shadow mb-4">
                        {/* Card Header - Dropdown */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Ingredients
                          </h6>
                        </div>
                        {/* Card Body */}
                        <div
                          className={`${styles.panel_ingredients} card-body`}
                        >
                          <div className="chart-pie pt-4 pb-2">
                            <ul className="list-group">
                              {renderIngredient()}
                            </ul>
                          </div>
                          <div className="mt-4 text-center small">
                            <i className="fas fa-circle text-info" /> Referral
                          </div>
                        </div>
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
};

const mapStateToProps = (state) => ({
  data_ingredient: state.ingredient.ingredient,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewPizza);
