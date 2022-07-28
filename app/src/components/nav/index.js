import styles from "./nav.module.scss";

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/assets/images/Creatrix_Primary_Color_Inverse.png'

const Navigation = () => {
    return (
      <div className={styles.mainNavWrapper}>
        <Link href={"/"}>
          <a>
            <Image 
                src={logo}
                width={125}
                height={50}  
                alt={'Creatrix Logo'}  
            />
          </a>
        </Link>
        
        <nav className={styles.mainNavigation}>
          <Link href={"/about-us"}>
            <a>About Us</a>
          </Link>
          <Link href={"/our-space"}>
            <a>Our Space</a>
          </Link>
          <Link href={"/events"}>
            <a>Events</a>
          </Link>
          <Link href={"/faq"}>
            <a>FAQ</a>
          </Link>
        </nav>
      </div>
    );
}

export default Navigation