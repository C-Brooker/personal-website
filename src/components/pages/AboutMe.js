import BlogDisplayNav from "../layout/BlogDisplayNav";
import AboutMeCard from "../cards/AboutMeCard";
import Footer from "../layout/Footer";
import TitleBanner from "../banners/TitleBanner";
import styles from "./styles.module.css";
import { useEffect } from "react";

function AboutMe() {
  const scrollToTop = (id = 0) => {
    window.scrollTo({
      top: id,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <BlogDisplayNav />
      <div className={styles.BtnContainer}>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(5);
          }}
        >
          Bio
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(40);
          }}
        >
          Employment
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(300);
          }}
        >
          Education
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(700);
          }}
        >
          Skills
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(1200);
          }}
        >
          Hobbies
        </button>
      </div>
      <TitleBanner>About me</TitleBanner>
      <div id="bio">
        <AboutMeCard>
          <h2>Bio</h2>
          <p className={styles.aboutMeContent}>Hello Hello</p>
        </AboutMeCard>
      </div>
      <div id="employment">
        <AboutMeCard>
          <h2>Employment</h2>
          <p className={styles.aboutMeContent}>Hello Hello</p>
        </AboutMeCard>
      </div>
      <div id="education">
        <AboutMeCard>
          <h2>Education</h2>
          <p className={styles.aboutMeContent}>Hello Hello</p>
        </AboutMeCard>
      </div>
      <div id="skills">
        <AboutMeCard>
          <h2>Skills</h2>
          <p className={styles.aboutMeContent}>Hello Hello</p>
        </AboutMeCard>
      </div>
      <div id="12">
        <AboutMeCard>
          <h2>Hobbies</h2>
          <p className={styles.aboutMeContent}>Hello Hello</p>
        </AboutMeCard>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
