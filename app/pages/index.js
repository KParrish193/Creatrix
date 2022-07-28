import styles from '../styles/Home.module.scss'
import PageLayout from '../src/layout';

const Home = () => {
  return (
    <PageLayout pageTitle={'Home'}>
      <div className={styles.homePageCopy}>
        <h4>Creatrix</h4>
      </div>
    </PageLayout>
  );
}

Home.title = "Home";

export default Home;