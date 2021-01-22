import React, { useEffect, useState } from "react";
import "./aboutPage.styles.scss";

import { AiOutlineArrowRight } from "react-icons/ai";

import Axios from "../../axios/axios";
import requests from "../../axios/requests";

import HtmlParser from "react-html-parser";

import AnchorLink from "react-anchor-link-smooth-scroll";

export default function AboutPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(requests.pages).then((res) => {
      console.log(res.data.pages);
      setData(res.data.pages["about-us"]);
    });
  }, []);

  return (
    <div className="aboutUs">
      <div className="inner-container">
        <div className="left">
          <div className="left-title">
            <span className="icon">
              <AiOutlineArrowRight />
            </span>
            <h2>{data.length > 0 ? data[0].page_title : " "}</h2>
          </div>
          <ul className="list">
            {data.length > 0 &&
              data.map((eachset, index) => (
                <AnchorLink offset="80" href={`#para${index}`}>
                  <li key={index}>{eachset.page_sub_title}</li>
                </AnchorLink>
              ))}
          </ul>
        </div>
        <div className="right">
          {data.length > 0
            ? data.map((eachSet, index) => (
                <div key={index} id={`para${index}`}>
                  <h1 className="para-title">{eachSet.page_sub_title}</h1>
                  <div className="para">
                    {HtmlParser(eachSet.page_subtitle_content)}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

{
  /* <h1 className="para-title">Why Twistshake</h1>
<div className="para">
  Choosing what brand of baby products to use for your child can seem
  like an overwhelming decision. There are so many alternatives. Some
  focus on aesthetics, some on technical gimmicks. We know that for
  you, the wellbeing of your baby is always the focal point. That’s
  why we want you to be able to give your baby the time and the
  attention he or she deserves, without the burdens of everyday life
  coming in the way.
</div>
<h1 className="para-title">Innovation and function</h1>
<div className="para">
  Twistshake aspires to develop products that are simple and safe to
  use, yet also offers an appealing design. We are of the opinion that
  aiming for functionality does not mean that we can ignore
  aesthetics, and our designers are always looking for ways to combine
  practicality with eye-pleasing design. We have won several awards
  regarding design and functionality which for us is a confirmation
  that we develop safe, functional and appealing products. Babies are
  unique. They all have their individual needs, and these change at
  the same fierce rate that the babies themselves grow and develop.
  Our goal is to become experts in all the phases babies go through.
  When a child is faced with new challenges we want to be there to
  assist him by way of our innovative and safe line of products.
  Manufacturing articles aimed at babies is synonymous with an immense
  responsibility. We guarantee products of the absolute highest
  quality through compliance with all the legal quality controls, as
  well as through regular internal check-ups and quality inquiries.
  This mentality permeates not only the manufacturing process: it is a
  cornerstone of Twistshake’s entire business.
</div>
<h1 className="para-title">Quality and material</h1>
<div className="para">
  All of Twistshake’s products are BPA-free. Twistshake cares about
  your safety. We want to give your child the best possible start in
  life. Twistshake’s products only utilizes raw materials that meet
  all the safety regulations in regards to foodstuffs. We have
  hand-picked materials of only the highest quality, and we believe
  this is something that becomes clear when you encounter our
  products. It is there, at first glance and first feel. The way we
  work involves regular quality inquiries that are performed in
  co-operation with world class test labs, all in order to guarantee
  quality and safety of the absolute highest order
</div>

<h1 className="para-title">Our history</h1>
<div className="para">
  In 2011 I was babysitting my aunt’s son. This task demanded full
  attention and it quickly became clear to me that I would have a
  tough time combining this with all the other things that the sitting
  involved. The biggest time-sink was the feeding: the servings came
  in intricate plastic bags, the formula clogged, clean-up was a
  hassle and when food time was over the kitchen was a complete mess.
  In the following months I was often tasked with babysitting. The
  problems I encountered the first time didn’t magically disappear,
  and being confronted with them time and time again made me think of
  ways to lessen the mountain of a work that appeared every time my
  cousin was to be fed. At that moment I couldn’t imagine that I would
  one day have the opportunity to introduce a baby bottle designed to
  specifically address these problems. As time passed my cousin grew
  out of his baby bottle, and I didn’t think more of the complications
  that can arise from preparing a bit of baby formula. Until a summer
  day not long after, when I witnessed a woman with a baby stroller.
  In the stroller, the woman’s baby is agitated, hungry and screaming.
  The stressed mother struggles hurriedly with bags of formula and
  baby bottles and before long everything is on the ground, while the
  baby is wailing even louder. I run over as fast as I can and help
  her with the clean-up while she soothes her child. I recognized the
  situation that the mother was in, and it took me back to when I had
  been babysitting my cousin. The ideas and solutions that had been in
  my mind back then immediately came back to me. It almost felt like a
  sign; the problems I had encountered as a babysitter had still not
  been solved. To ensure that I was on the right track, I discussed
  these ideas with some of my friends who are parents. They all spoke
  of the same complications. Some had their own solutions to these
  headaches, but many of them just felt dissatisfied with the lack of
  products on offer. After this inquiry I had come up with three ideas
  that eventually became cornerstones in our work at Twistshake:
  Prevention of clogging in the baby formula An effective way to
  handle servings Easy clean-up We want to create a product that is
  both practical and easy and which in itself is a whole new way to
  address the needs of parents and their children. Today, we are proud
  to present Twistshake, a baby bottle specifically developed with
  these cornerstones in mind. And it would not have happened if I had
  not encountered that struggling mother on that summer day. Vienar
  Roaks Founder and CEO – Twistshake of Sweden
</div> */
}
