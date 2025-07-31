"use client";

import styles from "./page.module.css";
import ScalingSection from "../components/scaling";
import { useLanguage } from "../components/language_context";
import ResumeButton from "../components/resume_button";

export default function Home() {
  const { language } = useLanguage();
  
  return (
    <main className={styles.main}>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.hero_container}>
            <img src={'./IMG_20220810_235152.jpg'} className={styles.hero_image}/>
            <div className={styles.hero_text}>
              <h1>Einar Therkelsen</h1>
              <p>
                {language === "en" ? "I am studying for a master's degree in Cybersecurity and Data Communication with a specialization in Cryptographic Engineering. Here is my resume." : "Jeg studerer til mastergrad i Cybersikkerhet og Datakommunikasjon med spesialisering i Kryptografisk ingeniørvitenskap. Her er min CV."}
              </p>
              <ResumeButton />
            </div>
          </div>
        </div>
      </ScalingSection>
      
      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.top}>
            <div className={styles.main_title}>
              <h1>
                {language === "en" ? "Welcome!" : "Velkommen!"}
              </h1>
            </div>
            <video src={'./video.mp4'} autoPlay muted loop className={styles.video}/>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.introduction}>
            <h1>
              {language === "en" ? "Introduction" : "Introduksjon"}
            </h1>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Hi! Welcome to my website :D" : "Hei! Velkommen til nettsiden min :D"}
            </h1>
          </div>
        </div>
      </ScalingSection>
      
    </main>
    );
}