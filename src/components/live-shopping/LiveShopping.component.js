import React from "react";
import Button from "../button/Button.component";
import LiveShoppingHeader from "../Live-shopping-header/LiveShoppingHeader.component";
import Row from "../row/Row.component";
import TextCard from "../text-card/TextCard.component";
import VideoCard from "../video-card/VideoCard.component";

export default function LiveShopping() {
  return (
    <div className="live-shopping">
      <LiveShoppingHeader bgimg="https://media.twistshake.com/2020/11/10115648/denice-live-copy.png?q=70&fit=clip&w=2000&h=2000&auto=format">
        <span>Black Week</span>
        <Button>
          <span>Watch</span>
        </Button>
      </LiveShoppingHeader>

      <Row>
        <div className="live-shopping-row-content right-started">
          <div className="left">
            <TextCard>
              <span>WITH DENICE</span>
              <span>Live with Denice</span>
              <span>2020-10-05</span>
              <span>
                Introducing our very own star: Denice! Do you want to learn more
                about our products and see them in motion? At our first Live
                Shopping show Denice will walk you through our popular stroller,
                the amazing click-mat, and the spill-proof sippy cups. She also
                share some mom hack from one parent to another. Enjoy!
              </span>
              <span>Play</span>
              <span>watch</span>
            </TextCard>
          </div>
          <div className="right">
            <VideoCard bgSrc="//media.twistshake.com/2020/10/08124812/d1.png?q=70&fit=clip&w=2000&h=2000&auto=format" />
          </div>
        </div>
      </Row>

      <Row>
        <div className="live-shopping-row-content left-started">
          <div className="left">
            <VideoCard bgSrc="https://media.twistshake.com/2020/10/22070140/denice-live-copy.png?q=70&fit=clip&w=2000&h=2000&auto=format" />
          </div>
          <div className="right">
            <TextCard>
              <span>WITH DENICE</span>
              <span>The Hunger Project</span>
              <span>2020-10-22</span>
              <span>
                On Thursdays live shopping Denice talks about and shows you one
                of our most popular products that has gotten a new and unique
                design. It will be launched for you here and now! This is in
                collaboration with the important project: “The Hunger Project”
                that has the goal of ending world hunger and poverty, focusing
                on women and children in need. That’s where YOU come in-
                together we can make a difference, changing the conditions for
                mothers and their children all over the world! #zerohunger
                #shareifyoucare
              </span>
              <span>Watch</span>
              <span>Products</span>
            </TextCard>
          </div>
        </div>
      </Row>
      <Row>
        <div className="live-shopping-row-content right-started">
          <div className="left">
            <TextCard>
              <span>50% OFF SITEWIDE</span>
              <span>Black Week</span>
              <span>2020-11-02</span>
              <span>
                We are starting of black week with our “Complete meal set” or
                you could call it- a spill free meal if you will. Denice will
                guide you through our fantastic “spill free” table ware that
                will make your life a bit easier and your baby´s food time, more
                fun!
              </span>
              <span>Play</span>
              <span>See products</span>
            </TextCard>
          </div>
          <div className="right">
            <VideoCard bgSrc="https://media.twistshake.com/2020/11/02115026/denice-live-1.png?q=70&fit=clip&w=2000&h=2000&auto=format" />
          </div>
        </div>
      </Row>
    </div>
  );
}
