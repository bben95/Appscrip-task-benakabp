import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import ShopLayout from "@/components/ShopLayout/ShopLayout";
import UScurrencyIcon from '../../../public/images/United States of America (US).png'
import Link from "next/link";
import instaLogo from '../../../public/images/Insta.png'
import linkedinLogo from '../../../public/images/linkedIn.png'
import paymetCardImage from '../../../public/images/payments.png'
async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=130');
  return res.json();
}
export default async function Shop() {
  const result = await getProducts();
  const products = result?.products;
  return (
    <div>
      <main className={styles.main}>
        <header className={styles.container}>
          <Navbar />
        </header>
        <div className={styles.line}>
        </div>
        <section className={`${styles.container} ${styles.hero}`}>
          <p className={styles.heroText}>
            DISCOVER OUR PRODUCTS
          </p>
          <p className={styles.heroSubText}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>
        <section className={`${styles.container}`}>
          <ShopLayout products={products} />
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={`${styles.firstsection} ${styles.container}`}>
          <div>
            <h5>BE THE FIRST TO KNOW</h5>
            <p>Sign Up for Updates from metta muse</p>
            <div className={styles.subscriptionContainer}>
              <input type="email" className={styles.emailInput} placeholder="Enter your e-mail..." />
              <button className={styles.subscribeButton}>SUBSCRIBE</button>
            </div>
            <div className={`${styles.container} ${styles.whitelineMob}`}>
            </div>
          </div>
          <div className={styles.contactUs}>
            <h5>CONTACT US</h5>
            <p>
              +44 221 133 5360
            </p>
            <p>
              customercare@metamuse.com
            </p>
            <h5>
              Currency
            </h5>
            <div>
              <div className={styles.currency}>
                <Image src={UScurrencyIcon} alt="currency-icon" width={24} height={24} style={{ display: 'inline-block' }} />
                <h6>
                  - USD
                </h6>
              </div>
              <p style={{ fontSize: 12 }}>
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.container} ${styles.whiteline}`}>
        </div>
        <div className={`${styles.secondsection} ${styles.container}`}>
          <div className={styles.navlinks}>
            <h5>
              metta muse
            </h5>
            <Link href={'!#'}><p>About US</p></Link>
            <Link href={'!#'}><p>Stories</p></Link>
            <Link href={'!#'}><p>Artisans</p></Link>
            <Link href={'!#'}><p>Boutiques</p></Link>
            <Link href={'!#'}><p>Contact Us</p></Link>
            <Link href={'!#'}><p>EU complains Docs</p></Link>
            <div className={`${styles.container} ${styles.whitelineMob}`}>
            </div>
          </div>
          <div className={styles.navlinks}>
            <h5>
              QUICK LINKS
            </h5>
            <Link href={'!#'}><p>Orders and Shipping</p></Link>
            <Link href={'!#'}><p>Join/Login as Seller</p></Link>
            <Link href={'!#'}><p>Payment & Pricing</p></Link>
            <Link href={'!#'}><p>Return & Refunds</p></Link>
            <Link href={'!#'}><p>FAQs</p></Link>
            <Link href={'!#'}><p>Privacy Policy</p></Link>
            <Link href={'!#'}><p>Terms & Conditions</p></Link>
            <div className={`${styles.container} ${styles.whitelineMob}`}>
            </div>
          </div>
          <div className={styles.social}>
            <div>
              <h5>FOLLOW US</h5>
              <div className={styles.mediaicons}>
                <Link href={'!#'}><Image src={instaLogo} alt="insta-logo" width={32} height={32} /></Link>
                <Link href={'!#'}><Image src={linkedinLogo} alt="linkedin-logo" width={32} height={32} /></Link>
              </div>
            </div>
            <div className={styles.payment}>
              <h5>
                metta muse ACCEPTS
              </h5>
              <Image src={paymetCardImage} alt="card-images" width={200} height={24} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}