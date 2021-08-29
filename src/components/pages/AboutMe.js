import BlogDisplayNav from "../layout/BlogDisplayNav";
import AboutMeCard from "../cards/AboutMeCard";
import Footer from "../layout/Footer";
import TitleBanner from "../banners/TitleBanner";
import SubtitleBanner from "../banners/SubtitleBanner";

function AboutMe() {
  const scrollToTop = (id) => {
    window.scrollTo({
      top: id,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <SubtitleBanner>My personal Website</SubtitleBanner>
      <div>
        <button
          onClick={() => {
            scrollToTop(5);
          }}
        >
          Bio
        </button>
        <button
          onClick={() => {
            scrollToTop(40);
          }}
        >
          Employment
        </button>
        <button
          onClick={() => {
            scrollToTop(100);
          }}
        >
          Education
        </button>
        <button
          onClick={() => {
            scrollToTop(175);
          }}
        >
          Skills
        </button>
        <button
          onClick={() => {
            scrollToTop(300);
          }}
        >
          Hobbies
        </button>
      </div>
      <TitleBanner>About me</TitleBanner>
      <BlogDisplayNav />
      <div id="bio">
        <AboutMeCard>
          <h2>Bio</h2>
          <p>Hello Hello</p>
        </AboutMeCard>
      </div>
      <div id="employment">
        <AboutMeCard>
          <h2>Employment</h2>
          <p>Hello Hello</p>
        </AboutMeCard>
      </div>
      <div id="education">
        <AboutMeCard>
          <h2>Education</h2>
          <p>Hello Hello</p>
        </AboutMeCard>
      </div>
      <div id="skills">
        <AboutMeCard>
          <h2>Skills</h2>
          <p>Hello Hello</p>
        </AboutMeCard>
      </div>
      <div id="12">
        <AboutMeCard>
          <h2>Hobbies</h2>
          <p>Hello Hello</p>
        </AboutMeCard>
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
