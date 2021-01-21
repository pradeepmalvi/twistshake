import React from "react";
import "./faq.styles.scss";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";

// react accordian
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function FAQPage() {
  return (
    <div className="faq">
      <div className="inner-container">
        <div className="left">
          <div className="left-title">
            <span className="icon">
              <AiOutlineArrowRight />
            </span>
            <h2>FAQ</h2>
          </div>
          <ul className="list">
            <li>FAQ</li>
          </ul>
        </div>
        <div className="right">
          <div className="content">
            <p className="title">FAQ</p>

            <div className="accordians-content-container">
              <Accordion allowZeroExpanded>
                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>
                            Can I cancel / change or add to an existing order?
                          </span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Due to our quick delivery times, your order will be
                        processed immediately after you place your order and
                        thus we can not cancel, modify or add products.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>

                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>What are the shipping costs?</span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Shipping costs 9,90 EUR Free shipping on orders over 100
                        EUR. For orders to Norway, shipping is 99 NOK and Free
                        shipping is 1000 NOK.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>How long does delivery take?</span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Average delivery time is 5-12 business days for standard
                        freight and 1-3 days for express. We work as hard as we
                        can to send your order as quickly as possible!
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>How do I know my order has gone through?</span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Once we have received an order from you, we will send a
                        confirmation to your email address. It is therefore
                        important that you enter the correct email address when
                        making an order. We recommend that you save the
                        confirmation to facilitate any future contact with our
                        customer service. Confirmation also represents your
                        receipt of the purchase. If you notice any errors please
                        contact service@twistshake.com immediately with your
                        order number attached.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>How do I return a product?</span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        In order to be entitled to a return, the product must be
                        unused and in the same condition as you received. It
                        must also be in the original package.You are responsible
                        for paying your own shipping costs on return.To complete
                        your return, contact us at service@twistshake.com with
                        your order number.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>Does Twistshake have a store to visit?</span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We do not have our own shop but our products are
                        available in selected grocery stores and also
                        children/baby shops.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>

                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>
                            I'm interested in working with you, where do I turn?
                          </span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        How fun to hear that you like our products. If you are
                        interested in working with us, send an email to
                        collab@twistshake.com with links to your social media
                        channels as well as a short presentation of yourself. If
                        we want to proceed with a cooperation, one of our team
                        will be back to you.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>

                <div className="each-accordian-item">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="heading-title">
                          <span>Do you offer discounts on your products?</span>
                          <span>
                            <RiArrowDropDownLine />
                          </span>
                        </div>
                        <p className="accordian-title"></p>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Occasionally we offer discounts on our products. Be sure
                        to subscribe to our newsletter to receive special offers
                        and product launches.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
