import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Josh Carlson</span>
          </h1>
        </div>
      </header>
      <section id="info" className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}>Josh</span>
          <br />
          <span className={styles.title}>Carlson</span>

          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Age: </span> 27
              </li>
              <li>
                <span className={styles.grayText}>Nationality: </span> German
              </li>
              <li>
                <span className={styles.grayText}>Skill set: </span> Project Management and Financial Performance
              </li>
              <li>
                <span className={styles.grayText}>Languages: </span> English, German
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="gallery" className={styles.gallerySection}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="image1.jpg"></img>
          <img className={styles.image} src="image2.jpg"></img>
          <img className={styles.image} src="image3.jpg"></img>
        </div>
      </section>
    </main>
  );
}