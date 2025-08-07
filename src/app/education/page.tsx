"use client";

import styles from ".././page.module.css";
import ScalingSection from "../../components/scaling";
import { useLanguage } from "../../components/language_context";
import "../../components/button.css";

export default function Education() {
  const { language } = useLanguage();
  
  return (
    <main className={styles.main}>

      <div className={styles.section_top}>
        <div style={{aspectRatio: "3/1", maxWidth: "100vw"}}>
          <img src={'/images/Hovedbygningen.jpg'} className={styles.image} style={{objectPosition: "center 25%"}}/>
        </div>
      </div>
      
      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.title}>
            <h1>
              {language === "en" ? "Education" : "Utdanning"}
            </h1>
          </div>
        </div>
      </ScalingSection>
      
      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "General information about the program" : "Om studiet generelt"}
            </h1>
            <p>
              {language === "en" ? "The program focuses on networking and security. We learn a lot about various network technologies, protocols, infrastructure, security mechanisms, and general computer science." : "Studiet fokuserer på nettverk og sikkerhet. Vi lærer mye om ulike nettverksteknologier, protokoller, infrastruktur, sikkerhetsmekanismer og generell datateknologi."}
            </p>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Specialization" : "Spesialisering"}
            </h1>
            <p>
              {language === "en" ? "I am specializing in Cryptographic Engineering. This specialization aims to provide a deeper theoretical and practical understanding of cryptographic systems and technologies, as well as the design and development of such systems and technologies." : "Jeg går spesialisering innen kryptografisk ingeniørvitenskap. Denne spesialiseringen har som mål å gi en dypere teoretisk og praktisk forståelse av kyptografiske systemer og teknologier, og det å designe og utvikle slike systemer og teknologier."}
            </p>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Exchange year" : "Utveksling"}
            </h1>
            <p>
              {language === "en" ? "This year (my fourth year of studies), I am going on exchange to the city of Bologna in Italy. I am taking courses at the University of Bologna (Università di Bologna)." : "Dette året (4. året mitt på studiet) drar jeg på utveksling til byen Bologna i Italia. Jeg tar fag hos Universitetet i Bologna (Università di Bologna)."}
            </p>
          </div>
        </div>
      </ScalingSection>
      
    </main>
    );
}