import React, { useState, useEffect } from "react";
import "../assests/css/Cart.css";
import Header from "./Header";
import TextField from "@material-ui/core/TextField";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { Button, IconButton, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "300px", // Change the width value to your desired width
    height: "10px", // Change the height value to your desired height
    fontSize: ".5rem",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Cart({
  wishlist,
  cartItems,
  handleShowDrawer,
  saveToCart,
  handleAddCartItems,
  handleRemoveCartItem,
}) {
  const classes = useStyles();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [state, setState] = useState([
    {
      // startDate: new Date(),
      startDate: new Date(),
      // endDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [value, setValue] = useState("female");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const formattDate = (date_) => {
    let current = new Date(date_);
    let c_date =
      current.getFullYear() +
      "-" +
      ("0" + (current.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + current.getDate()).slice(-2);

    return c_date;
  };

  const dateStringFormat = (date_) => {
    const dsfDate = new Date(date_).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    });

    return dsfDate;
  };

  const getQuantity = (productId) => {
    const foundItem = cartItems.find((item) => item.product_id === productId);
    if (foundItem) {
      return foundItem.quantity;
    }
  };

  const getCartTotalAmount = () => {
    let totalCount = 0;
    cartItems.map((item, index) => {
      totalCount += parseInt(item.price * parseInt(item.quantity));
    });

    return totalCount;
  };
  return (
    <div className="cart">
      <div
        style={{
          display: "flex",
          boxShadow: "rgba(23, 107, 135, 0.2) 0px 10px 50px",
        }}
      >
        <Header
          wishlist={wishlist}
          cartItems={cartItems}
          handleShowDrawer={handleShowDrawer}
          saveToCart={saveToCart}
        />
      </div>
      <div
        className="content"
        style={{
          marginTop: "2em",
          width: "85%",
        }}
      >
        {showDatePicker ? (
          <div
            style={{
              position: "absolute",
              zIndex: 10,
              left: "7em",
              top: "33em",
            }}
          >
            <DateRangePicker
              onChange={(item) => {
                setState([item.selection]);
                setStartDate(formattDate(item.selection.startDate));
                setEndDate(formattDate(item.selection.endDate));
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />
          </div>
        ) : (
          ""
        )}
        <div className="left__container">
          {/* DELIVERY  */}

          <div className="delivery__info">
            <div className="header__text">
              <p>Delivery Information</p>
            </div>

            <div className="input__container">
              <div className="inputs">
                <label>Name</label>
                <input
                  type="text"
                  style={{ background: "none" }}
                  placeholder="Full name"
                />
              </div>
              <div style={{ flex: 0.1 }}></div>
              <div className="inputs">
                <label>Mobile Number</label>
                <input
                  type="text"
                  style={{ background: "none" }}
                  placeholder="+"
                />
              </div>
            </div>
            <div className="input__container">
              <div className="inputs">
                <label>Email</label>
                <input
                  type="text"
                  style={{ background: "none" }}
                  placeholder="Email"
                />
              </div>
              <div style={{ flex: 0.1 }}></div>
              <div className="inputs">
                <label>City</label>
                <input
                  type="text"
                  style={{ background: "none" }}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="input__container">
              <div className="inputs">
                <label>Address</label>
                <input
                  type="text"
                  style={{ background: "none" }}
                  placeholder="Complete Address"
                />
              </div>
            </div>
          </div>

          {/* {SCHEDULE DELIVERY} */}
          <div className="schedule__delivery">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="header__text"
            >
              <p>Schedule Delivery</p>
              {showDatePicker ? (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#fff", color: "rgb(243, 8, 74)" }}
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon style={{ color: "rgb(243, 8, 74)" }} />}
                  onClick={() => setShowDatePicker(false)}
                >
                  Save
                </Button>
              ) : (
                ""
              )}
            </div>
            <div className="input__container">
              <div style={{ width: "100%" }}>
                <label
                  style={{
                    fontSize: "0.7rem",
                    marginBottom: "10px",
                    fontWeight: 800,
                    color: "rgb(96, 108, 93)",
                  }}
                >
                  Dates :
                </label>
                <div
                  className="date__picker"
                  onClick={() => setShowDatePicker(true)}
                >
                  {startDate != null ? (
                    <p>
                      {dateStringFormat(startDate)} -{" "}
                      {dateStringFormat(endDate)}{" "}
                    </p>
                  ) : (
                    "---"
                  )}

                  <CalendarTodayIcon
                    style={{ color: "rgb(243, 8, 74)", fontSize: "1.1rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="input__container">
              <div className="inputs">
                <label>Note</label>
                <input
                  type="text"
                  style={{ width: "93%", background: "none" }}
                  placeholder="Your Note"
                />
              </div>
            </div>
          </div>

          {/* {PAYMENT} */}
          <div className="payment" style={{ marginTop: "3em" }}>
            <div className="header__text">
              <p>Payment Method</p>
            </div>

            <FormControl component="fieldset" id="radio__con">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                id="radios"
                onChange={handleChange}
              >
                <FormControlLabel
                  className="radio__label"
                  value="gcash"
                  control={<Radio />}
                  label="Gcash"
                />
                <FormControlLabel
                  className="radio__label"
                  value="paymaya"
                  control={<Radio />}
                  label="PayMaya"
                />
                <FormControlLabel
                  className="radio__label"
                  value="cod"
                  control={<Radio />}
                  label="Cash on Delivery"
                  style={{ fontSize: ".8rem" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div style={{ flex: 1 }}></div>
        <div className="right__container">
          <div className="order__summary" style={{ position: "relative" }}>
            <div
              style={{
                height: "80vh",
                position: "relative",
              }}
            >
              <div
                className="header__text"
                style={{
                  background: "none",
                  color: "rgb(96, 108, 93)",
                }}
              >
                <p style={{ fontWeight: "800" }}>Order Summary</p>
              </div>

              <div
                className="cartItems__container"
                style={{
                  maxHeight: "58vh",
                  overflowY: "scroll",
                }}
              >
                {cartItems.map((item, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",

                        alignItems: "center",
                        marginTop: "2em",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          flex: 11,
                        }}
                      >
                        <img
                          src={item.product_img}
                          style={{
                            width: "50px",
                            maxWidth: "20%",
                            height: "50px",
                            maxHeight: "50px",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "1.5em",
                          }}
                        >
                          <p
                            style={{
                              fontSize: ".8rem",
                              fontWeight: "800",
                              color: "rgb(96, 108, 93)",
                            }}
                          >
                            {item.product_name}
                          </p>
                          <p
                            style={{
                              fontSize: ".7rem",
                              color: "rgb(96, 108, 93)",
                            }}
                          >
                            {item.price}
                          </p>
                          <p
                            style={{
                              fontSize: ".7rem",
                              color: "rgb(96, 108, 93)",
                            }}
                          >
                            {item.price}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",

                          maxWidth: "90px",
                        }}
                      >
                        <IconButton
                          aria-label="add"
                          style={{ padding: "2px 0" }}
                          onClick={() => handleAddCartItems(item.product_id, 1)}
                        >
                          <AddCircleIcon />
                        </IconButton>
                        <div
                          style={{
                            padding: "5px 10px",
                            borderRadius: "5px",
                            margin: "0 3px",
                            width: "50px",
                            textAlign: "center",
                          }}
                        >
                          <p>{getQuantity(item.product_id)}</p>
                        </div>
                        <IconButton
                          aria-label="remove"
                          style={{ padding: "2px 0" }}
                          onClick={() => handleRemoveCartItem(item.product_id)}
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cart__footer">
                <div className="footer__content">
                  <p>Subtotal</p>
                  <p>$ {getCartTotalAmount()}</p>
                </div>
                <div className="footer__content">
                  <p>Shipping</p>
                  <p>---</p>
                </div>

                <div className="footer__content">
                  <p>Total Amount</p>
                  <p>$ {getCartTotalAmount()}</p>
                </div>
                <div style={{ marginTop: "1em" }}>
                  <Button
                    variant="contained"
                    style={{
                      padding: "3px 10px",
                      textTransform: "none",
                      width: "100%",
                      backgroundColor: "rgb(243, 8, 74)",
                      color: "#fff",
                    }}
                  >
                    Confirm Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
