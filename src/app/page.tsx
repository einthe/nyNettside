import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <div className={styles.main_title}>
          <h1>
            welcome!
          </h1>
        </div>
        <video src={'./video.mp4'} autoPlay muted loop className={styles.video}/>
      </div>
      <div className={styles.introduction}>
        <h1>
          Introduction
        </h1>
      </div>
      <div className={styles.text}>
        <h1>
          Hi! Welcome to my website :D
        </h1>
      </div>
    </main>
    );
}