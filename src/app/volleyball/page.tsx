import styles from "/src/app/page.module.css";

export default function Volleyball() {
    return (
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>
            coming soon!
          </h1>
        </div>
        <div className={styles.text}>
          <h1>
            This page is under development
          </h1>
        </div>
        <video src={'./video.mp4'} autoPlay muted loop className={styles.video}/>
      </main>
      );
  }