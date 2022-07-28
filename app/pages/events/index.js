import styles from "./events.module.scss";
import PageLayout from "../../src/layout";

const Events = () => {
  return (
    <PageLayout pageTitle={"Events Us"}>
      <div className={styles.eventsWrapper}>
        <h4>Events </h4>
      </div>
    </PageLayout>
  );
};

Events.title = "Events Us";

export default Events;
