"use client";

import styles from "./page.module.css";
import ScalingSection from "../components/scaling";
import { useLanguage } from "../components/language_context";

export default function Home() {
  const { language } = useLanguage();
  
  return (
    <main className={styles.main}>
      
      <ScalingSection>
        <div className={styles.top}>
          <div className={styles.main_title}>
            <h1>
              {language === "en" ? "Welcome!" : "Velkommen!"}
            </h1>
          </div>
          <video src={'./video.mp4'} autoPlay muted loop className={styles.video}/>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.introduction}>
          <h1>
            {language === "en" ? "Introduction" : "Introduksjon"}
          </h1>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.text}>
          <h1>
            {language === "en" ? "Hi! Welcome to my website :D" : "Hei! Velkommen til nettsiden min :D"}
          </h1>
        </div>
      </ScalingSection>
      
    </main>
    );
}