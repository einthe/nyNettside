import styles from "./page.module.css";

export default function Volleyball() {
    return (
      <main className={styles.main}>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJ3bXh5b2R3ZnExNHMzOXRjYmkwZ2VmbGFvdnN1ZXl0dWkweGU0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QBd2kLB5qDmysEXre9/giphy.gif" className="gif" />
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
      </main>
      );
  }