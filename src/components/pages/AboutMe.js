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
      <TitleBanner>About me</TitleBanner>
      <BlogDisplayNav />
      <div className={styles.BtnContainer}>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(40);
          }}
        >
          Bio
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(310);
          }}
        >
          Employment
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(580);
          }}
        >
          Education
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(850);
          }}
        >
          Skills
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(1100);
          }}
        >
          Hobbies
        </button>
      </div>
      <div id="bio">
        <AboutMeCard>
          <h2>Bio</h2>
          <div>
            <p className={styles.aboutMeContent}>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now. When, while the lovely
              valley teems with vapour around me, and the meridian sun strikes
              the upper surface of the impenetrable foliage of my trees, and but
              a few stray gleams steal into the inner sanctuary, I throw myself
              down among the tall grass by the trickling stream; and, as I lie
              close to the earth, a thousand unknown plants are noticed by me:
              when I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence of the Almighty, who
              formed us in his own image
            </p>
          </div>
        </AboutMeCard>
      </div>
      <div id="employment">
        <AboutMeCard>
          <h2>Employment</h2>
          <div>
            <p className={styles.aboutMeContent}>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now. When, while the lovely
              valley teems with vapour around me, and the meridian sun strikes
              the upper surface of the impenetrable foliage of my trees, and but
              a few stray gleams steal into the inner sanctuary, I throw myself
              down among the tall grass by the trickling stream; and, as I lie
              close to the earth, a thousand unknown plants are noticed by me:
              when I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence of the Almighty, who
              formed us in his own image
            </p>
          </div>
        </AboutMeCard>
      </div>
      <div id="education">
        <AboutMeCard>
          <h2>Education</h2>
          <div>
            <p className={styles.aboutMeContent}>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now. When, while the lovely
              valley teems with vapour around me, and the meridian sun strikes
              the upper surface of the impenetrable foliage of my trees, and but
              a few stray gleams steal into the inner sanctuary, I throw myself
              down among the tall grass by the trickling stream; and, as I lie
              close to the earth, a thousand unknown plants are noticed by me:
              when I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence of the Almighty, who
              formed us in his own image
            </p>
          </div>
        </AboutMeCard>
      </div>
      <div id="skills">
        <AboutMeCard>
          <h2>Skills</h2>
          <div>
            <p className={styles.aboutMeContent}>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now. When, while the lovely
              valley teems with vapour around me, and the meridian sun strikes
              the upper surface of the impenetrable foliage of my trees, and but
              a few stray gleams steal into the inner sanctuary, I throw myself
              down among the tall grass by the trickling stream; and, as I lie
              close to the earth, a thousand unknown plants are noticed by me:
              when I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence of the Almighty, who
              formed us in his own image
            </p>
          </div>
        </AboutMeCard>
      </div>
      <div id="hobbies">
        <AboutMeCard>
          <h2>Hobbies</h2>
          <div>
            <p className={styles.aboutMeContent}>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now. When, while the lovely
              valley teems with vapour around me, and the meridian sun strikes
              the upper surface of the impenetrable foliage of my trees, and but
              a few stray gleams steal into the inner sanctuary, I throw myself
              down among the tall grass by the trickling stream; and, as I lie
              close to the earth, a thousand unknown plants are noticed by me:
              when I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence of the Almighty, who
              formed us in his own image
            </p>
          </div>
        </AboutMeCard>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
