import styles from "./faq.module.scss";
import PageLayout from "../../src/layout";

const Faq = () => {
  return (
    <PageLayout pageTitle={"FAQ"}>
      <div className={styles.faqWrapper}>
        <h4>FAQ</h4>
      </div>
    </PageLayout>
  );
};

Faq.title = "FAQ";

export default Faq;
