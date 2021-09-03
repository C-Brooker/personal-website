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
      <h3 className={styles.status}>Status:</h3>
      <h4 className={styles.status}>
        Currently Seeking Opportunities in Software Development
      </h4>
      <BlogDisplayNav />
      <div className={styles.BtnContainer}>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(100);
          }}
        >
          Bio
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(410);
          }}
        >
          Employment
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(660);
          }}
        >
          Education
        </button>
        <button
          className={styles.aboutMeBtn}
          onClick={() => {
            scrollToTop(930);
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
            <div className={styles.aboutMeContent}>
              As someone who enjoys being both creative and innovative I found
              that creating something out of nothing through coding was a great
              experience that I definitely wanted to grow at. I initially
              started by learning the fundamentals of Python to get a simple
              understanding of key-programming constructs and from this I
              decided to branch out into front-end development using JavaScript,
              HTML5, CSS3 and React to create the website you are using now.
              From completing this website I learned how to effectively learn
              and apply new programming concepts. For the future, I want to
              continously develop my coding ability as well as diversify my
              skill-set. Because of this, while expanding my knowledge of React
              and Javascript, I will also begin teaching myself Java so that
              eventually I will be able to effectively tackle full-stack
              problems.
            </div>
          </div>
        </AboutMeCard>
      </div>
      <div id="employment">
        <AboutMeCard>
          <h2>Employment</h2>
          <div>
            <div className={styles.aboutMeContent}>
              <h5 className={styles.topHeader}>
                Jp Morgan - Insight (Jul 21 - Aug 21)
              </h5>
              - Performed technical research into multiple crypto currencies
              before pitching our strongest investment opportunity employees and
              fellow work experience participants.
              <br />
              - Attended seminars where I learned about different roles at the
              company including investment banking, corporate banking,
              commodities, asset management and cyber-security.
              <br />- Proactively organised meetings with existing employees to
              learn more about their roles and experiences with JP Morgan.{" "}
              <h5 className={styles.header}>
                InvestIn - Insight (Jul 21 - Aug 21)
              </h5>
              - Participated in aninvestment challenge where I performed
              investment research for multiple companies and composed a
              portfolio to maximise returns along with a group of fellow
              students, achieving second place.
              <br /> - Completed case study with fellow students where we
              advised BMW on valuation for an acquisition by Volkswagen.
              <br /> - Participated in simulated trading competition where I
              achieved 200% returns.
              <br /> - Performed SWOT analysis to during qualitative analysis of
              potential investments.
              <br /> - Attended valuation workshops where I learned about
              technical analysis and fundamental analysis.
              <h5 className={styles.header}>PwC - Insight (Jul 21)</h5>
              -Participated in data cleansing and exploration workshop where I
              learned how to extract key insights from data using Excel.
              <br /> - Attended a technology workshop where I learned about the
              applications of digital audit and data analytics.
              <br /> - Participated in networking events and proactively set up
              meetings with employees to learn about their roles.
              <h5 className={styles.header}>
                Mcdonalds - Crew member (Aug 19 -)
              </h5>
              - Working part-time alongside my A-levels studies.
              <br /> - Providing excellent customer service to hundreds of
              customers on a daily basis.
              <br /> - Meeting tight deadlines to produce orders on time.
              <br /> - Trained across tills, cooking appliances and restaurant
              floor to become a versatile team member.
              <h5 className={styles.header}>
                Newspaper Courier (Aug 17- Jul 19)
              </h5>
              - Delivered hundreds of papers weekly to the correct address every
              morning before school.
              <br /> - Building relationships with the shops customers through
              friendly conversation.
              <br /> - Optimized the route to maximize the efficiency and
              accuracy of delivery.
            </div>
          </div>
        </AboutMeCard>
      </div>
      <div id="education">
        <AboutMeCard>
          <h2>Education</h2>
          <div>
            <div className={styles.aboutMeContent}>
              <h5 className={styles.topHeader}>A-Levels (2019 - 2021)</h5>
              Clacton County High School Sixth Form
              <br />
              Mathematics (B)
              <br />
              Computer Science (C)
              <br />
              Information Technology (D*)
              <h5 className={styles.header}>GCSEs (2014 - 2019)</h5>
              Clacton County High School
              <br />
              9 GCSE’s grade 4-9
              <br />
              including:
              <br />
              Mathematics (9)
              <br />
              Computer Science (7)
              <br />
              Physics (6)
            </div>
          </div>
        </AboutMeCard>
      </div>
      <div id="skills">
        <AboutMeCard>
          <h2>Skills</h2>
          <div>
            <div className={styles.aboutMeContent}>
              <ul className={styles.aboutMeList}>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
                <li>Microsoft Excel</li>
                <li>Microsoft Office</li>
                <li>Research</li>
                <li>Sales</li>
                <li>Strategy</li>
                <li>Social Media</li>
                <li>Customer Relationship Management (CRM)</li>
                <li>Leadership</li>
                <li>Problem Solving</li>
                <li>Conflict Resolution</li>
                <li>Communication</li>
                <li>Presentations</li>
                <li>Organization Skills</li>
                <li>Time Management</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </AboutMeCard>
      </div>
      <div id="hobbies">
        <AboutMeCard>
          <h2>Hobbies</h2>
          <div>
            <div className={styles.aboutMeContent}>
              <h5 className={styles.topHeader}>Investing</h5>I have recently
              started to invest into the crypto-currency markets, using my wages
              from McDonalds. In order to maximise my returns, I consistently
              perform thorough market research and make sure that I am up to
              date with relevant news.
              <h5 className={styles.header}>Running</h5>I initially started
              running as a simple challenge of the couch to 5k. However, from
              doing this challenge I developed a love for running long distances
              and developing my own mental fortitude to consistently push myself
              further. Now, I frequently organise trail-runs with my friends as
              I find it is a scenic way to enjoy my passion for running
              <h5 className={styles.header}>Cooking</h5> I enjoy exercising my
              creativity thorough learning and practising new recipes. It is
              always interesting to turn individual items into a dish that is
              stunning to look at, tastes phenomenal and provides me with the
              opportunity to expand my cookery ability.
            </div>
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
