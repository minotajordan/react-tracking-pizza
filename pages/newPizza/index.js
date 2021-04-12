import React, { useState } from "react";
import Head from "next/head";
import styles from "./Pizza.module.css";
import Nav from "../../components/nav";
import { connect } from "react-redux";
import { addPizza } from "../../redux/actions/productAction";

const NewPizza = ({ data_ingredient, addPizza, products }) => {
  const [name, setName] = useState("");
  const [fristName, setFristName] = useState("");
  const [phone, setPhone] = useState("");
  const [pizzaSelect, setPizzaSelect] = useState("");

  const [pizza, setPizza] = useState({
    ingredient: [{ id: 1 }],
  });

  const handleShowDetails = (item) => {
    setPizzaSelect(item);
    console.log("handleShowDetails", item);
  };

  const handleSavePizza = () => {
    const payload = {
      name,
      ingredient: pizza.ingredient,
    };
    addPizza({ payload });
  };

  const pizzaDetails = () => {
    return (
      <>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {pizzaSelect.name}( ${" "}
                    {pizzaSelect.ingredient && data_ingredient
                      .map(
                        (key) =>
                          pizzaSelect.ingredient.some((e) => e.id === key.id) &&
                          pizzaSelect.ingredient.filter((e) => e.id === key.id)
                            .length * key.price
                      )
                      .reduce((previous, current) => previous + current)}
                    )
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">{renderDetailsPizza()}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-dark">
                    New Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleListPizza = () => {
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name pizza</th>
            <th scope="col">Total ingredients</th>
            <th scope="col">Price total</th>
            <th scope="col" className="d-flex justify-content-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.ingredient.length}</td>
              <td>
                {data_ingredient
                  .map(
                    (key) =>
                      item.ingredient.some((e) => e.id === key.id) &&
                      item.ingredient.filter((e) => e.id === key.id).length *
                        key.price
                  )
                  .reduce((previous, current) => previous + current)}
              </td>
              <td className="d-flex justify-content-end">
                <a onClick={() => handleShowDetails(item)}>
                  <button
                    type="button"
                    class="btn btn-sm btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Details
                  </button>
                </a>
                <a onClick={() => alert()}>
                  <button type="button" class="btn btn-sm btn-dark">
                    New Order
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleAddPizza = (id) => {
    const new_ingredient = pizza.ingredient.push({ id });
    setPizza({ ...pizza, ...new_ingredient });
  };

  const handleRemove = (id) => {
    const remove_ingredient = pizza.ingredient.filter((item) => item.id != id);
    setPizza({ ...pizza, ...{ ingredient: remove_ingredient } });
  };

  const handleTotalPrice = () => {
    const acumulator = data_ingredient
      .map(
        (key) =>
          pizza.ingredient.some((e) => e.id === key.id) &&
          pizza.ingredient.filter((e) => e.id === key.id).length * key.price
      )
      .reduce((previous, current) => previous + current);
    return acumulator;
  };

  const renderIngredientSelect = () => {
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Ingredient</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Total</th>
            <th scope="col" className="d-flex justify-content-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data_ingredient.map(
            (item) =>
              pizza.ingredient.some((e) => e.id === item.id) && (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      {pizza.ingredient.filter((a) => a.id === item.id).length}
                    </td>
                    <td>
                      {pizza.ingredient.filter((a) => a.id === item.id).length *
                        item.price}
                    </td>
                    <td className="d-flex justify-content-end">
                      <a onClick={() => handleRemove(item.id)}>
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

  const renderDetailsPizza = () => {
    return (
      <>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Ingredient</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {data_ingredient.map(
              (item) =>
                pizzaSelect.ingredient &&
                pizzaSelect.ingredient.some((e) => e.id === item.id) && (
                  <>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        {
                          pizzaSelect.ingredient.filter((a) => a.id === item.id)
                            .length
                        }
                      </td>
                      <td>
                        {pizzaSelect.ingredient.filter((a) => a.id === item.id)
                          .length * item.price}
                      </td>
                    </tr>
                  </>
                )
            )}
          </tbody>
        </table>
        <hr />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Nombre"
        />
        <hr />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Telefono"
        />
      </>
    );
  };

  const renderIngredient = () => {
    return data_ingredient.map((item) => (
      <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <a onClick={() => handleAddPizza(item.id)}>
              <i
                class={`${styles.add_pizza} fas fa-plus-square text-primary`}
              ></i>
            </a>
          </div>
          <span>{item.name}</span>
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
          {pizzaDetails()}
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

                  <div className="col-8">
                    <div className="col-xl-12 col-lg-12">
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
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="for example: Pizza de la casa"
                              />
                            </div>
                          </div>
                          {handleTotalPrice() === 0 ? (
                            <h3 className="text-center">
                              Please add ingredients
                            </h3>
                          ) : (
                            renderIngredientSelect()
                          )}
                          <button
                            type="button"
                            disabled={
                              handleTotalPrice() === 0 || name.length === 0
                            }
                            onClick={() => handleSavePizza()}
                            className="btn btn-outline-primary"
                          >
                            Save Pizza
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12 col-lg-12">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">
                            List Pizza
                          </h6>
                        </div>
                        <div className="card-body">{handleListPizza()}</div>
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
                                <strong>$ {handleTotalPrice()}</strong>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total ingredient
                                <span className="badge badge-primary badge-pill">
                                  {pizza.ingredient.filter((a) => a).length}
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
                            <ul className="list-group">{renderIngredient()}</ul>
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
  products: state.product.product,
});

const mapDispatchToProps = (dispatch) => ({
  addPizza: (string) => dispatch(addPizza(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPizza);
