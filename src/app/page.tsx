import styles from "./page.module.css";
import ScalingSection from "../components/scaling";

export default function Home() {
  
  return (
    <main className={styles.main}>
      
      <ScalingSection>
        <div className={styles.top}>
          <div className={styles.main_title}>
            <h1>
              welcome!
            </h1>
          </div>
          <video src={'./video.mp4'} autoPlay muted loop className={styles.video}/>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.introduction}>
          <h1>
            Introduction
          </h1>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.text}>
          <h1>
            Hi! Welcome to my website :D
          </h1>
        </div>
      </ScalingSection>
      
    </main>
    );
}