import styles from "./about.module.scss";
import PageLayout from "../../src/layout";

const About = () => {
  return (
    <PageLayout pageTitle={'About Us'}>
      <div className={styles.aboutWrapper}>
        <h4>About Us</h4>
      </div>
    </PageLayout>
  );
};

About.title = "About Us";

export default About;
