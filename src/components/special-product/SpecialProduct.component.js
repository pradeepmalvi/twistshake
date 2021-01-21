import React from "react";

import { FiTruck, FiCheck } from "react-icons/fi";
import { AiOutlineSafety } from "react-icons/ai";
import Button from "../button/Button.component";
import RectangleBadge from "../rectangle-badge/RectangleBadge.component";
import RoundBadge from "../round-badge/RoundBadge.component";
import Counter from "../counter/Counter.component";
import ProductSlider from "../product-slider/ProductSlider.component";

export default function SpecialProduct() {
  return (
    <div className="special-product">
      <div className="container">
        <div className="top">
          <div className="product-imgs-container">
            <div className="images">
              <div className="img">
                <img
                  src="https://products.twistshake.com/images/606_4535056eb5-78835-1-original.jpg?q=70&fit=clip&w=800&fm=jpg&bg=FAFAFA&auto=format"
                  alt="product-img"
                />
              </div>
              <div className="img">
                <img
                  src="https://products.twistshake.com/images/606_14e8b9966c-78835-2-original.jpg?q=70&fit=clip&w=800&fm=jpg&bg=FAFAFA&auto=format"
                  alt="product-img"
                />
              </div>
            </div>
            <div className="badges">
              <RoundBadge>50%</RoundBadge>
              <RectangleBadge>Free Shipping</RectangleBadge>
            </div>
          </div>
          <div className="product-details-container">
            <div className="product-title">
              <div className="product-name">Tour All Covered</div>
              <div className="stock">
                {" "}
                <span className="signal-success"></span> In stock
              </div>
            </div>
            <div className="extra-customization">0 mth+/Mixed colors</div>
            <div className="price">
              <div className="previous">6888</div>
              <div className="latest">3455 SEK</div>
            </div>
            <div className="product-description">
              Tour All Covered is the ultimate stroller package including
              everything you need for smooth, functional rides with your child.
              Besides our stylish stroller we have included the perfect
              accessories for your everyday journeys.
            </div>
            <div className="counter-and-btn">
              <Counter />
              <Button>Add To Basket</Button>
            </div>
            <div className="extra-details">
              <div className="safe-payment">
                <span className="icon">
                  <AiOutlineSafety />
                </span>
                <span className="text">Safe payment</span>
              </div>
              <div className="fast-delivery">
                <span className="icon">
                  <FiTruck />
                </span>
                <span className="text">Fast deliveries around the world</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mid">
          <ProductSlider />
        </div>
        <div className="bottom">
          <div className="description">
            <div className="left">
              <h4 className="product-desc-title">product Description</h4>
              <div className="description-text">
                Avoid single-use products by filling a Twistshake Squeeze bag
                with tasty, nutritious meals for your child. You can use
                home-made purées or smoothies made from fruits, berries and
                vegetables. A refreshing, fruit purée for when your child is
                thirsty, or for a hungry child, or why not fill them up with a
                savoury porridge rich in iron? The sky’s the limit when it comes
                to creating yummy fillings for your child's squeeze bag! <br />{" "}
                There are lots of recipes just a Google-search away if you need
                some ideas to start you off! Children are usually keen to watch
                the creative process of converting the raw ingredients into
                purées, or smoothies, for their squeeze bags, and it’s a perfect
                opportunity to start their interest in cooking. Once you get
                started, time flies, and you won’t be able to wait for the next
                time you need to re-fill your child's squeeze bags! To make your
                life easier, bring your child’s favourite Twistshake Squeeze bag
                snacks with you on walks with the stroller, and picnics or
                outings. Children are known to quickly become tired and hungry
                when their blood sugar drops, so you can stay one step ahead of
                your child by always having refreshing squeeze bags in your bag.
                <br />A squeeze bag can also serve as a perfect complement to
                the baby bottle, a bit like a cuddly toy to squeeze when feeling
                tired! We think that stylish design is just as important as
                smart functionality, so you will find Twistshake’s Squeeze bags
                in many wonderful and exotic patterns. Let your child choose the
                ones they like, so when you are out and about it might help to
                whet their appetite when they see their favourite squeeze bags!
                The squeeze bags come in lots of different designs: fruits,
                marble, animals and flowers - which pattern would your little
                one choose? Twistshake’s Squeeze bag is of course, completely
                free of BPA. It is available in two sizes for different needs:
                100 ml and 220 ml. They are dishwasher safe on the upper rack
                (don't forget to remove the cap) and with their double ziplock
                are also extra strong to prevent leaks. Tip! Store your squeeze
                bags in the freezer and take them out in the morning so they can
                thaw nicely, just before snack time. Twistshake’s Squeeze bags
                are completely safe for cooler latitudes. Why not have your own
                cool box at the bottom of the freezer where your child can join
                in and choose their favourite? Write the contents on the freeze
                tape so that you do not forget their flavours! Fill the squeeze
                bag all the way up to prevent unwanted air from reducing the
                shelf life and taste. Feel free to add some lemon to the squeeze
                bags where appropriate, for a longer shelf life.
              </div>
            </div>
            <div className="right">
              <h4 className="product-desc-title">Features</h4>
              <div className="description-text">
                <div className="feature">
                  <span className="check-icon">
                    <FiCheck />
                  </span>
                  BPA free - a safe and secure product for you and your child.
                </div>
                <div className="feature">
                  <span className="check-icon">
                    <FiCheck />
                  </span>
                  Dishwasher safe - works great in the dishwasher on the upper
                  rack.
                </div>
                <div className="feature">
                  <span className="check-icon">
                    <FiCheck />
                  </span>
                  Freezer safe - save time by making large quantities at once to
                  freeze in your squeeze bags, so you have them at the ready
                  when you need them.
                </div>
                <div className="feature">
                  <span className="check-icon">
                    <FiCheck />
                  </span>
                  Two sizes - holds 100ml / 200ml for the big ones and the
                  little ones.
                </div>
                <div className="feature">
                  <span className="check-icon">
                    <FiCheck />
                  </span>
                  Refillable squeeze bags refill - environmentally friendly,
                  reusable squeeze bags.
                </div>
                <div className="feature">
                  <span className="check-icon">
                    <FiCheck />
                  </span>
                  Double ziplock - ensures that the contents do not leak out
                  into your bag.
                </div>
                <div className="feature">
                  <span className="check-icon">
                    <FiCheck />
                  </span>
                  Trendy designs - choose from 24 wonderful designs based on the
                  following themes: fruits, marbles, animals and flowers.
                </div>
              </div>
            </div>
          </div>
          <div className="add-to-basket">
            <div className="img">
              <img
                src="https://products.twistshake.com/images/472_8588b5cdeb-73412-original.jpg?q=70&fit=clip&w=400&fm=jpg&auto=format"
                alt=""
              />
            </div>
            <div className="product-details">
              <div className="product-title">
                <div className="product-name">Tour All Covered</div>
              </div>
              <div className="extra-customization">0 mth+/Mixed colors</div>
              <div className="price">
                <div className="previous">6888</div>
                <div className="latest">3455 SEK</div>
              </div>
              <div className="add-to-basket-btn">
                <Button>Add to basket</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
