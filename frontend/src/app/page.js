"use client";
import "./globals.css";
import Image from "next/image";
import DOC from "../images/doc.svg";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import RIGHT from "../images/CaretRight.svg";
import RIGHTTWO from "../images/CaretRight2.svg";
import BGABOUT from "../images/aboutBG.svg";
import AWARDS from "../images/Trophy.svg";
import HEADDESK from "../images/andAwards.svg";
import HEADPHONE from "../images/andAwardsPhone.svg";
import CARDS from "../components/Cards/Cards.jsx";
import Appointment from "../components/appointment/appointment.jsx";
import Nav from '@/components/Nav/Nav'
// import BG from '../images/newhero.svg'


export default function Home() {
  const list = [
    {
      id: 1,
      up: "40+",
      down: "Treatments and Services",
    },
    {
      id: 2,
      up: "8",
      down: "Years of Experience",
    },
    {
      id: 3,
      up: "96%",
      down: "Customer Satisfaction",
    },
    {
      id: 4,
      up: "45+",
      down: "Success Therapies",
    },
  ];
  const list2 = [
    {
      id: 1,
      up: "Six sigma healthcare award",
      down: "March 2022",
    },
    {
      id: 2,
      up: "Excellence in facial esthetics",
      down: "December 2017",
    },
    {
      id: 3,
      up: "Best young cosmetologist of the year",
      down: "december 2018",
    },
    {
      id: 4,
      up: "Interdisciplinary dentist of the year",
      down: "December 2017",
    },
  ];

  const [replay, setReplay] = useState(true);
  const placeholderText = [
    { type: "heading1", text: "Discover  Your True  Beauty with  Expert" },
    {
      type: "heading2",
      text: "Aesthetic  Care",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div>
      <Nav/>
      <div className="heroCON">
        <div className="heroRightTxt">
          Hi, I’m Dr. Akanksha Agarwal{" "}
          <span className="heroSpan">PGDCC | B.D.S.</span>
        </div>
        <motion.div
          className="App"
          initial="hidden"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <div className="containerL">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>

        <Image className="docImg" src={DOC} alt="" />
        <div className="textThree">
          Experience Unmatched Bliss! Pamper and Rejuvenate Your Mind, Body, and
          Soul
        </div>
        <div className="heroBTNS">
          <button className="heroBTN1">
            Book an appointment{" "}
            <Image className="rightIMG" src={RIGHT} alt="" />
          </button>
          <button className="heroBTN2">Online Consultation</button>
        </div>
        {list.map((list) => {
          return (
            <div className="outerLIST" key={list.id}>
              <div className="setLIST">
                <div className="listUP">{list.up}</div>
                <div className="listDOWN">{list.down}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="homeAbout">
        <div className="headAbout">ABOUT</div>
        <Image className="aboutBG" src={BGABOUT} alt="" />
        <div className="aboutTxt">
          Meet Dr. Akanksha Agarwal, a career-oriented and enthusiastic facial
          aesthetician with a passion for excellence.{" "}
          <span className="aboutTxtSpan">
            {" "}
            Currently serving as a consultant at LA MiDAS aesthetics and
            visiting consultant/lecturer in One Aesthetics
          </span>
          , Gurgaon, Dr. Agarwal's expertise extends to multiple clinics in
          Delhi, Hyderabad, Moradabad, and Bangalore.
        </div>
        <div className="hover-underline-animation">
          <a className="aboutLinkL" href="/">
            Learn more about me{" "}
            <Image className="aboutArrow" src={RIGHTTWO} alt="" />{" "}
          </a>
        </div>
      </div>
      <div>
        <div className="aANDaCON">
          <div className="AWARDSHEADING">
            <div className="awardsHEADINDCON">
              <span className="awardsAND">&</span>
              <div className="AADIV">
                <span className="awardsACH">AWARDS</span>
                <span className="awardsACH"> ACHEIVMENTS</span>
              </div>
            </div>
          </div>
          <div className="awardsCon">
            {list2.map((list2) => {
              return (
                <div className="outerLIST2" key={list2.id}>
                  <Image className="trophy" src={AWARDS} alt="" />
                  <div className="setLIST2">
                    <div className="listUP2">{list2.up}</div>
                    <div className="listDOWN2">{list2.down}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CARDS />
      <Appointment/>
      
    </div>
  );
}
