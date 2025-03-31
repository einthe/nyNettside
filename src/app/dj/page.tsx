import styles from "./page.module.css";

export default function DJ() {
    return (
      <main className={styles.main}>
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ205NmRsbzJpd3N6Nm5jejUwOG56aWh1Nm85bTJocGhrNGlqaWVzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4KLv24CPUoZ0I/giphy.gif" className="gif" />
        <div className={styles.title}>
          <h1>
            also coming soon!
          </h1>
        </div>
        <div className={styles.text}>
          <h1>
            This page is under development
          </h1>
        </div>
      </main>
      );
  }