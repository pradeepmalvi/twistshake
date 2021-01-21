import React, { useEffect, useState } from "react";
import "./contactPage.styles.scss";

import { AiOutlineArrowRight } from "react-icons/ai";
import Axios from "../../axios/axios";
import requests from "../../axios/requests";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// distributor form data
export default function Ambassador() {
  const [distributorCompany, setDisributorCompany] = useState("");
  const [distributorCountry, setDistributorCountry] = useState("");
  const [distributorName, setDistributorName] = useState("");
  const [distributorPhone, setDistributorPhone] = useState("");
  const [distributorEmail, setDistributorEmail] = useState("");
  const [distributorCompanyType, setDistributorCompanyType] = useState("");
  const [distributorMsg, setDistributorMsg] = useState("");

  const distDataToPost = {
    company: distributorCompany,
    country: distributorCountry,
    name: distributorName,
    phone: distributorPhone,
    email: distributorEmail,
    company_type: distributorCompanyType,
    message: distributorMsg,
  };

  // contact us form data
  const [subject, setSubject] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [yourMsg, setYourMsg] = useState("");

  const contactUsDataToPost = {
    subject: subject,
    name: name,
    order_number: orderNumber,
    email: contactEmail,
    message: yourMsg,
  };
  console.log(contactUsDataToPost);

  // handle distributor form submiton
  async function handleDistSubmit(e) {
    e.preventDefault();
    const res = await Axios.post(requests.distributor, distDataToPost);
    if (res.status === 200) {
      notifyDistSubmitionSuccess();

      setDisributorCompany("");
      setDistributorName("");
      setDistributorCountry("");
      setDistributorEmail("");
      setDistributorMsg("");
      setDistributorName("");
      setDistributorPhone("");
      setDistributorCompanyType("");
    }
  }

  // handle contact us form data

  async function handleContactUsSubmit(e) {
    e.preventDefault();
    const res = await Axios.post(requests.contactUs, contactUsDataToPost);
    if (res.status === 200) {
      console.log("works fine");
      notifyDistSubmitionSuccess();

      setContactEmail("");
      setName("");
      setOrderNumber("");
      setSubject("");
      setYourMsg("");
    }
  }

  const notifyDistSubmitionSuccess = () =>
    toast("thanks for contacting us. We will reach out to you soon");

  return (
    <div className="contact">
      <ToastContainer />
      <div className="inner-container">
        <div className="left">
          <div className="left-title">
            <span className="icon">
              <AiOutlineArrowRight />
            </span>
            <h2>Contact</h2>
          </div>
          <ul className="list">
            <li>Twistshake ambassador</li>
          </ul>
        </div>
        <div className="right">
          <div className="content">
            <p className="para-title">contact information</p>
            <div className="address">
              Twistshake of Sweden AB Örjansgränd 1 721 32 Västerås Sweden{" "}
              <br></br>
              service@twistshake.com
            </div>
          </div>

          <div className="form">
            <h3>contact us</h3>
            <p>
              We are happy to hear from you and will get back to you as soon as
              possible!
            </p>
            <form onSubmit={handleContactUsSubmit}>
              <div className="form-element-group common">
                <label htmlFor="company">subject</label>
                <select
                  name=""
                  id=""
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="product-delivery">Product Delivery</option>
                  <option value="order-delivery">Order & Delivery</option>
                  <option value="return-claims">Return Claims</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other-question">Other Question</option>
                </select>
              </div>
              <div className="instagram-form-group common">
                <label htmlFor="instagram">Order Number *</label>
                <input
                  type="text"
                  placeholder="Order number"
                  className="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                />
              </div>
              <div className="name common">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="instagram-form-group common">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="email-form-group common">
                <label htmlFor="msg">Your Message</label>
                <textarea
                  placeholder="Your message"
                  className="msg"
                  value={yourMsg}
                  onChange={(e) => setYourMsg(e.target.value)}
                ></textarea>
              </div>
              <div className="form-submit-btn">
                <input
                  type="button"
                  placeholder=""
                  className="submit-btn"
                  type="submit"
                />
              </div>
            </form>
          </div>
          <div className="form-1">
            <h3 className="form-1-title">
              Would you like to become a distributor?
            </h3>
            <p className="sub-title">
              Fill in the form below and we will contact you.
            </p>
            <form onSubmit={handleDistSubmit}>
              <div className="element-container">
                <div className="form-element-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    className="company"
                    value={distributorCompany}
                    onChange={(e) => setDisributorCompany(e.target.value)}
                  />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Country</label>
                  <input
                    type="text"
                    className="country"
                    value={distributorCountry}
                    onChange={(e) => setDistributorCountry(e.target.value)}
                  />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Contact Name *</label>
                  <input
                    type="text"
                    className="name"
                    value={distributorName}
                    onChange={(e) => setDistributorName(e.target.value)}
                  />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Telephone</label>
                  <input
                    type="text"
                    className="phone"
                    value={distributorPhone}
                    onChange={(e) => setDistributorPhone(e.target.value)}
                  />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Email *</label>
                  <input
                    type="text"
                    className="email"
                    value={distributorEmail}
                    onChange={(e) => setDistributorEmail(e.target.value)}
                  />
                </div>
                <div className="form-element-group">
                  <label htmlFor="company">Company type</label>
                  <input
                    type="text"
                    className="type"
                    value={distributorCompanyType}
                    onChange={(e) => setDistributorCompanyType(e.target.value)}
                  />
                </div>

                <div className="form-element-group msg-container">
                  <label htmlFor="msg">Leave a Message</label>
                  <textarea
                    id=""
                    cols="30"
                    rows="4"
                    className="message"
                    value={distributorMsg}
                    onChange={(e) => setDistributorMsg(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="submit-btn">
                <input
                  type="button"
                  placeholder=""
                  className="submit-btn"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
