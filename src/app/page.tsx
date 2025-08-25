"use client";

import styles from "./page.module.css";
import ScalingSection from "../components/scaling";
import { useLanguage } from "../components/language_context";
import ResumeButton from "../components/resume_button";
import Link from "next/link";
import "../components/button.css";

export default function Home() {
  const { language } = useLanguage();
  
  return (
    <main className={styles.main}>

      <ScalingSection>
        <div>
          <div className={styles.hero_container}>
            <img src={'/images/portrait.jpg'} className={styles.hero_image}/>
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
      
      {/* <ScalingSection>
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
      </ScalingSection> */}

      <div className={styles.section}>
        <img src="/images/cyber-gløs-vignette.jpg" className={styles.image}/>
      </div>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Education" : "Utdanning"}
            </h1>
            <p>
              {language === "en" ? "Read about my studies, courses, exchange program, and more." : "Les om studiene, fag, utveksling og mer."}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <Link href="/education">
              <button className="button">
                {language === "en" ? "Read more" : "Les mer"}
              </button>
            </Link>
          </div>
        </div>
      </ScalingSection>

      <div className={styles.section}>
        <img src="/images/experience_illustration.png" className={styles.image} style={{aspectRatio: "2.2/1", maxWidth: "100vw"}}/>
      </div>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Experience" : "Erfaring"}
            </h1>
            <p>
              {language === "en" ? "Read about the various summer jobs I have had." : "Les om de ulike sommerjobbene jeg har hatt."}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <Link href="/experience">
              <button className="button">
                {language === "en" ? "Read more" : "Les mer"}
              </button>
            </Link>
          </div>
        </div>
      </ScalingSection>

      <div className={styles.section}>
        <img src="/images/interests_vignette.jpg" className={styles.image}/>
      </div>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Interests" : "Interesser"}
            </h1>
            <p>
              {language === "en" ? "Read about my interests such as volleyball, DJ-ing, filmmaking, and more." : "Les om mine interesser som volleyball, DJ-ing, filmproduksjon og mer."}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <Link href="/interests">
              <button className="button">
                {language === "en" ? "Read more" : "Les mer"}
              </button>
            </Link>
          </div>
        </div>
      </ScalingSection>
      
    </main>
    );
}