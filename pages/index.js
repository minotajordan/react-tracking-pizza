import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./Pizza.module.css";
import Nav from "../components/nav";
import { connect } from "react-redux";
import { addPizza } from "../redux/actions/productAction";
import { addTraking } from "../redux/actions/trakingAction";
import Api from './controllers/api';

const NewPizza = ({ data_ingredient, traking, addPizza, addTraking, products }) => {
  const [name, setName] = useState("");
  const [clientTemp, setClientTemp] = useState("");
  const [phoneTemp, setPhoneTemp] = useState("");
  
  const [statusOrder, setStatusOrder] = useState(false);
  const [validating, setValidating] = useState(false);
  const [validatePhone, setValidatePhone] = useState(0);
  const [pizzaSelect, setPizzaSelect] = useState("");
  const dataPayload = {
    firstName: "",
    phone: "",
    date: "",
    price: "",
    product: {},
  };
  const [payloadOrder, setPayloadOrder] = useState(dataPayload);

  const [pizza, setPizza] = useState({
    ingredient: [{ id: 1 }],
  });

  const handleShowDetails = (item) => {
    setPizzaSelect(item);
  };

  const handleShowDetailsTraking = (item, client, phone) => {
    setPizzaSelect(item);
    setClientTemp(client);
    setPhoneTemp(phone);
  };

  const handleOrder = async (value) => {
    //peding 
    setPayloadOrder({
      ...payloadOrder,
      date: new Date().toISOString(),
      product: pizzaSelect,
      price: handlePriceSelect(),
    });

    addTraking({
      payload: {...payloadOrder,
      date: new Date().toISOString(),
      product: pizzaSelect,
      price: handlePriceSelect()}
    })
    setValidating(true);
    const validate = await Api.validatePhone(payloadOrder.phone);
    if (validate) {
      console.log('API', validate);
      setValidatePhone(validate.IsValid);
      setValidating(false);
      if (validate.IsValid) {
        setStatusOrder(false);
      }
    }
  };

  const handleSavePizza = () => {
    const payload = {
      name,
      ingredient: pizza.ingredient,
    };
    addPizza({ payload });

    const remove_ingredient = pizza.ingredient.filter((item) => item.id === 1);
    setPizza({ ...pizza, ...{ ingredient: remove_ingredient } });
    setName('');
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

  const handlePriceSelect = () => {
    return data_ingredient
      .map(
        (key) =>
          pizzaSelect.ingredient.some((e) => e.id === key.id) &&
          pizzaSelect.ingredient.filter((e) => e.id === key.id).length *
            key.price
      )
      .reduce((previous, current) => previous + current);
  };

  useEffect(() => {
    console.log("payloadOrder", payloadOrder);
  }, [payloadOrder]);

  useEffect(() => {
    if (!statusOrder) {
      setPayloadOrder(dataPayload);
    }
  }, [statusOrder]);

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
                  {pizzaSelect.ingredient && handlePriceSelect()})
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">{renderDetailsPizza()}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setStatusOrder(false)}
                >
                  Cancel
                </button>
                {statusOrder && <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleOrder()}
                  disabled={!((payloadOrder.phone).length > 0 && (payloadOrder.firstName).length > 0)}
                >
                  {
                    validating 
                    ? <i className="fas fa-spinner fa-spin"></i>
                    : 'New Order'
                  }
                </button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const trakingDetails = () => {
  return (
    <>
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Details order
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                {renderDetailsPizzaTraking()}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setStatusOrder(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

  const renderTraking = () => {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Client</th>
            <th scope="col">Pizza</th>
            <th scope="col">Price total</th>
            <th scope="col" className="d-flex justify-content-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {traking.map((item, k) => (
            <tr key={k*2}>
              <td>{item.firstName}</td>
              <td>{item.product.name}</td>
              <td>
                {data_ingredient
                  .map(
                    (key) =>
                      item.product.ingredient.some((e) => e.id === key.id) &&
                      item.product.ingredient.filter((e) => e.id === key.id).length *
                        key.price
                  )
                  .reduce((previous, current) => previous + current)}
              </td>
              <td className="d-flex justify-content-end">
                <a onClick={() => handleShowDetailsTraking(item.product, item.firstName, item.phone)}>
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    View order
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderListPizza = () => {
    return (
      <table className="table table-striped">
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
          {products.map((item, k) => (
            <tr key={k*5}>
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
                    className="btn btn-sm btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Details and New order
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderIngredientSelect = () => {
    return (
      <table className="table table-striped">
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
            (item, k) =>
              pizza.ingredient.some((e) => e.id === item.id) && (
                <>
                  <tr key={k*7}>
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
                        <i className="fas fa-minus-circle text-danger"></i>
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
        <table className="table table-striped">
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
              (item, k) =>
                pizzaSelect.ingredient &&
                pizzaSelect.ingredient.some((e) => e.id === item.id) && (
                  <>
                    <tr key={k*11}>
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
        {
          (validatePhone === false) &&
            <div className="alert alert-danger" role="alert">
              <a onClick={() => setStatusOrder(true)}>
                Phone number not is valid
              </a>
            </div>
        }
        {
          (validatePhone === true) &&
          <div className="alert alert-success" role="alert">
            <a onClick={() => setStatusOrder(true)}>
              Your order has just been registered!
            </a>
          </div>
        }
        {statusOrder ? (
          <>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setPayloadOrder({ ...payloadOrder, firstName: e.target.value })
              }
              value={payloadOrder.firstName}
              placeholder="Name client"
            />
            <br />
            <input
              type="number"
              className="form-control"
              onChange={(e) =>
                setPayloadOrder({ ...payloadOrder, phone: e.target.value })
              }
              value={payloadOrder.phone}
              placeholder="Phone"
            />
          </>
        ) : (
          <div className="alert alert-primary" role="alert">
            <a onClick={() => setStatusOrder(true)}>
              Click here to add this pizza to an order.
            </a>
          </div>
        )}
      </>
    );
  };

  const renderDetailsPizzaTraking = () => {
    return (
      <>
        <span> Client:  </span>
        <strong> {clientTemp} </strong>
        <br/>
        <span> Phone:  </span>
        <strong> {phoneTemp} </strong>
        <hr/>
        <table className="table table-striped">
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
              (item, k) =>
                pizzaSelect.ingredient &&
                pizzaSelect.ingredient.some((e) => e.id === item.id) && (
                  <>
                    <tr key={k*13}>
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
        <h3>
          Total: {pizzaSelect.name}( ${" "} {pizzaSelect.ingredient && handlePriceSelect()})
        </h3>
      </>
    );
  };

  const renderIngredient = () => {
    return data_ingredient.map((item, k) => (
      <>
        <li key={ k * 2 + item.id } className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <a onClick={() => handleAddPizza(item.id)}>
              <i
                className={`${styles.add_pizza} fas fa-plus-square text-primary`}
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
          {trakingDetails()}
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
                        <div className="card-body">{renderListPizza()}</div>
                      </div>
                    </div>

                    <div className="col-xl-12 col-lg-12">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">
                            View Traking
                          </h6>
                        </div>
                        <div className="card-body">{renderTraking()}</div>
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
  traking: state.traking.traking,
});

const mapDispatchToProps = (dispatch) => ({
  addPizza: (string) => dispatch(addPizza(string)),
  addTraking: (string) => dispatch(addTraking(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPizza);
