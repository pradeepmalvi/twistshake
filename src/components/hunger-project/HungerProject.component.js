import React from "react";
import "./hunger-project.styles.scss";

import CrowselRow from "../crowsel-row/CrowselRow.component";
import TextGroup from "../text-group/TextGroup.component";
import VideoBackground from "../videoBackground/VideoBackground.component";
import ImageBackground from "../imgBackground/ImageBackground.component";
import FullWidthCard from "../full-width-card/FullWidthCard.component";
import { Link } from "react-router-dom";

export default function HungerProject() {
  return (
    <div className="hunger-project">
      <VideoBackground videoSrc="https://media.twistshake.com/2020/10/21194415/banner-THP-low-desktop.mp4" />

      <TextGroup>
        <span>What is The Hunger Project?</span>
        <span>
          The Hunger Project is a global non-profit organization, with a mission
          to end global hunger by 2030. They work in 13 countries and implement
          the program 1000 Days Nutrition worldwide, with a special focus in
          their 9 African partner countries.
        </span>
      </TextGroup>

      <CrowselRow />

      <div className="second-text">
        <TextGroup>
          <span>Twistshake x The Hunger Project</span>
          <span>
            The Hunger project invests in causes where we can be involved as
            partners and follow the work very closely. The 1000 Days Nutrition
            program in the African program countries is clearly connected to
            children which is a perfect fit for us. The program aims to reduce
            child malnutrition, starting with mothers. The program includes
            vaccinations, weight checks, maternity care and education about
            nutrition and health. This is something close to our hearts at
            Twistshake. We have redesigned our reusable squeeze bags to help
            people reduce their use of disposable products and contribute to a
            more sustainable world. We at Twistshake look forward to working
            with The Hunger project. Now you can join in and contribute. When
            you purchase our reusable squeeze bags in the Africa edition, you
            help to eliminate world hunger. You can help a mother make life
            better for her little baby. Together we can make a difference.
          </span>
        </TextGroup>
      </div>

      <div className="third-text-group">
        <TextGroup>
          <span>The Thousand Days Opportunity</span>
          <span>
            1000 days is the time from the start of a pregnancy, until the child
            is 2 years old. This time period is of crucial importance when it
            comes to shaping the future of generations to come. Knowledge of
            exclusive breastfeeding during the first months, access to
            nutritious food for both the mother and child, and access to health
            care has a tremendous impact on the child’s chances to break the
            cycle of poverty and live healthy later in life.
          </span>
        </TextGroup>
      </div>

      <div className="background-container">
        <ImageBackground imgSrc="https://media.twistshake.com/2020/10/20152341/Section1D.jpg?q=70&fit=clip&w=2000&auto=format" />
      </div>

      <div className="fourth-text-group">
        <TextGroup>
          <span>Nutrition Education</span>
          <span>
            Exclusive breastfeeding and access to the right nutritious food is
            key to a healthy life for a newborn. Since 2010 The Hunger Project
            have educated 478 986 people in nutrition, focusing on pregnant
            women, mothers and children.
          </span>
        </TextGroup>
      </div>

      <div className="full-width-card-container">
        <Link to="/product" className="product-link">
          <FullWidthCard img="https://products.twistshake.com/images/608_0c2ef88d8f-78837-1-original.jpg?q=70&fit=clip&w=800&fm=jpg&bg=FAFAFA&auto=format" />
        </Link>
      </div>

      <div className="background-container">
        <ImageBackground imgSrc="https://media.twistshake.com/2020/10/20152342/Section2D.jpg?q=70&fit=clip&w=2000&auto=format" />
      </div>
      <div className="fifth-text-group">
        <TextGroup>
          <span>Maternal Care</span>
          <span>
            Since 2010, 232 795 pregnant women have been given access to
            maternal care at The Hunger Project´s rural clinics.
          </span>
        </TextGroup>
      </div>

      <div className="full-width-card-container">
        <Link to="/product" className="product-link">
          <FullWidthCard img="https://products.twistshake.com/images/607_4a7c06b1c5-78836-1-original.jpg?q=70&fit=clip&w=800&fm=jpg&bg=FAFAFA&auto=format" />
        </Link>
      </div>

      <div className="background-container">
        <ImageBackground imgSrc="https://media.twistshake.com/2020/10/20152343/Section3D.jpg?q=70&fit=clip&w=2000&auto=format" />
      </div>

      <div className="sixth-text-group">
        <TextGroup>
          <span>Physical Monitoring</span>
          <span>
            At The Hunger Project´s clinics, we are monitoring children’s weight
            and height development to track signs of malnutrition. Last year, 98
            608 children were enrolled for monitoring (since 2010, the number is
            1 246 316).
          </span>
        </TextGroup>
      </div>

      <div className="full-width-card-container">
        <Link to="/product" className="product-link">
          <FullWidthCard img="https://products.twistshake.com/images/606_4535056eb5-78835-1-original.jpg?q=70&fit=clip&w=800&fm=jpg&bg=FAFAFA&auto=format" />
        </Link>
      </div>

      <div className="background-container">
        <ImageBackground imgSrc="https://media.twistshake.com/2020/10/20152344/Section4D.jpg?q=70&fit=clip&w=2000&auto=format" />
      </div>

      <div className="Seventh-text-group">
        <TextGroup>
          <span>Vaccinations</span>
          <span>
            Since 2010, The Hunger Project have vaccinated almost a million
            children (923 439) to protect them from dangerous infectious
            diseases. Last year, 54 467 children were vaccinated.
          </span>
        </TextGroup>
      </div>

      <div className="full-width-card-container">
        <Link to="/product" className="product-link">
          <FullWidthCard img="https://products.twistshake.com/images/605_b6c19bd61d-78834-1-original.jpg?q=70&fit=clip&w=800&fm=jpg&bg=FAFAFA&auto=format" />
        </Link>
      </div>

      <div className="background-container">
        <ImageBackground imgSrc="https://media.twistshake.com/2020/10/20152345/Section5D.jpg?q=70&fit=clip&w=2000&auto=format" />
      </div>

      <div className="Seventh-text-group">
        <TextGroup>
          <span>Meal Program</span>
          <span>
            In The Hunger Project´s nursery schools, we have given 41 000
            children access to a healthy and nutritious lunch, every day (since
            2010).
          </span>
        </TextGroup>
      </div>

      <div className="full-width-card-container">
        <Link to="/product" className="product-link">
          <FullWidthCard img="https://products.twistshake.com/images/609_6305ff272f-78838-1-original.jpg?q=70&fit=clip&w=800&fm=jpg&bg=FAFAFA&auto=format" />
        </Link>
      </div>

      <div className="quote">
        Malnutrition is one of the most common threats to children’s lives and
        wellbeing globally. 3 million children die every year from malnutrition,
        and half of those children are under five years of age. Every second
        minute, a woman dies during childbirth or during her pregnancy. The
        equation is simple. Malnourished and underweight women give birth to
        malnourished and underweight babies. The right nutrition and access to
        health care is essential, for the mother to get a safe pregnancy, and
        for the child to grow up healthy.
        <p className="light-text">Background</p>
      </div>
    </div>
  );
}
