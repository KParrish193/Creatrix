import styles from "./our-space.module.scss";
import PageLayout from "../../src/layout";

const Location = () => {
  return (
    <PageLayout pageTitle={"Our Location"}>
      <div className={styles.locationWrapper}>
        <div className={styles.locationCopy}>
            <h4>Our Location</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, assumenda dignissimos natus esse quos sequi architecto fugit, doloribus odio eos quas, maiores praesentium provident. Doloribus pariatur modi fugiat dolor dolores.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et impedit ullam sit pariatur nihil fuga, quisquam quo atque eum repudiandae ducimus assumenda suscipit velit itaque? Fuga at magnam eius nam!</p>
        </div>
        <div className={styles.address}>
            <div className={styles.addressCopy}>
            <h3>2480 S. Main Street</h3>
            <h3>Salt Lake City, Utah 84115</h3>
            </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Location;
