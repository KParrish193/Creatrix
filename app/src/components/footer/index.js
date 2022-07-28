import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import facebook from "../../../public/assets/images/svgs/facebook.svg";
import instagram from "../../../public/assets/images/svgs/instagram.svg";

const Footer = () => {
    return (
      <footer className={styles.footerWrapper}>
        <nav className={styles.footerLinks}>
          <Link href={"/"}>
            <a className={styles.privacyPolicy}>Privacy Policy</a>
          </Link>
        </nav>

        <p className={styles.copyright}>Copyright &copy; Creatrix 2022</p>

        <nav className={styles.socials}>
          <a href="/">
            <Image src={facebook} />
          </a>
          <a href="/">
            <Image src={instagram} />
          </a>
        </nav>
      </footer>
    );
}

export default Footer