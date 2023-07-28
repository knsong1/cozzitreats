import React from 'react';
import WebTab from './webtab';
import '../index.css';
import profile from '/Users/kristinagiannoutsos/cozzitreats/cozzitreats/src/profile.JPG';
import Footer from './footer';

function About() {
  return (
    <div>
      <WebTab></WebTab>
      <h1 className="aboutWrap">About Cozzi's Treats</h1>
      <div className="profileWrap">
        <img className="profileImg" src={profile}></img>
        <div className="aboutInfo">
          <p className="aboutText">
            For the past ten years, I've poured my heart and soul into being a
            Montessori Teacher, bringing care, love, and dedication to every
            part of my job. Surprisingly, these same qualities that define my
            teaching style have spilled over into my baking adventures, and it's
            been such a joy! As a thoughtful baker, I love whipping up a variety
            of mouthwatering treats, many that have been inspired by the dietary
            needs of my loved ones, especially those who follow keto and
            gluten-free lifestyles.
            <br></br>
            <br></br>
            This creative baking journey has led me to create a delightful
            assortment of goodies that cater perfectly to these unique needs,
            while also being super careful about avoiding cross-contamination
            for those with allergies. It's amazing how my passion for teaching
            and baking merge to create a nurturing and considerate touch in
            everything I do. What's even better is that my keto and gluten-free
            baked goods taste so incredible that you can hardly tell them apart
            from the classic treats we all love!
            <br></br>
            <br></br>
            When I am not baking or teaching, I love spending time with my
            husband, nieces, and my mother.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
