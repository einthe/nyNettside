"use client";

import styles from ".././page.module.css";
import ScalingSection from "../../components/scaling";
import { useLanguage } from "../../components/language_context";
import "../../components/button.css";
import Link from "next/link";

export default function Interests() {
  const { language } = useLanguage();
  
  return (
    <main className={styles.main}>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.title}>
            <h1>
              {language === "en" ? "Interests" : "Interesser"}
            </h1>
          </div>
        </div>
      </ScalingSection>

      <div className={styles.landscape}>
        <div className={styles.section}>
          <video src={'/videos/NettsideVolleyballVideo.mp4'} autoPlay muted loop playsInline webkit-playsinline="true" preload="metadata" className={styles.video}/>
        </div>
      </div>

      <div className={styles.portrait}>
        <div className={styles.section}>
          <video src={'/videos/NettsideVolleyballVideoVertical.mp4'} autoPlay muted loop playsInline webkit-playsinline="true" preload="metadata" className={styles.video}/>
        </div>
      </div>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Volleyball" : "Volleyball"}
            </h1>
            <p>
              {language === "en" ? "Volleyball has been a big part of my life and given me so much. I\’ve made many good friends, had many fantastic experiences, and gotten the chance to attend the coolest and toughest high school, namely Toppvolley Norway. I\’ve been doing this for almost 12 years and will WITHOUT A DOUBT continue :)" : "Volleyball har vært en stor del av livet mitt og gitt så mye. Jeg har fått mange gode venner, mange fantastiske opplevelser og sjansen til å gå på den kuleste og tøffeste videregående skolen, nemlig Toppvolley Norge. Jeg har holdt på i snart 12 år og kommer UTEN TVIL til å fortsette:)"}
            </p>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "DJ" : "DJ"}
            </h1>
            <p>
              {language === "en" ? "It started with volunteering, first at volleyball games at Toppvolley Norway and later for NTNUI. I quickly realized that I love creating an atmosphere during games with music and sound effects, so I went a bit ALL-IN. I got myself a DJ mixing deck, made my own sound effects in music software, and learned how DJ-ing works. Recently, I\’ve also dipped my toes into music production and even made a song, or rather a cover track. Check it out " : "Det begynte med dugnader, først på volleyballkamper på Toppvolley Norge og så seinere for NTNUI. Jeg fant fort ut at jeg elsker å skape stemning under kamper med musikk og lydeffekter, så jeg gikk litt ALL-IN. Jeg skaffet DJ-miksebord, lagde egne lydeffekter i musikkprogram og lærte hvordan DJ-ing fungerer. Nylig har jeg også dyppet tærne i musikkproduksjon og til og med laget en sang, eller en coverlåt. Sjekk den ut "}
              <Link href="https://open.spotify.com/artist/1iF71QfT8n1jCmmvWWRwKn?si=gSi3UmY5RdCOLSUoK4PYiw"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <strong>{language === "en" ? "here" : "her"}</strong>
              </Link>
              .
            </p>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Film Production" : "Filmproduksjon"}
            </h1>
            <p>
              {language === "en" ? "I started with film production when I was 13. At that time, I had just learned a new technique for creating a lightsaber effect. Since then, I\’ve enjoyed filming and editing videos. I\’ve found effects especially fun, and I\’ve even used 3D models and CGI. Here are some videos I\’ve made:" : "Jeg begynte med filmproduksjon da jeg var 13 år. Da hadde jeg akkurat lært en ny teknikk for å lage en lasersverd-effekt. Siden den gang, så har jeg likt å filme og redigere videoer. Jeg synes effekter har vært spesielt gøy, og har til og med prøvd meg på 3D modeller og CGI. Her er noen videoer jeg har laget:"}
            </p>
            <br></br>
            <p>
              <Link href="https://youtu.be/cKPU61edY-o"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <strong>Divine Intervention</strong>
              </Link>
              {language === "en" ? " (School project)" : " (Skoleprosjekt)"}
            </p>
            <br></br>
            <p>
              <Link href="https://youtu.be/f8jsQhE093o"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <strong>WW2 Sekvens</strong>
              </Link>
            </p>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Strength Training" : "Styrketrening"}
            </h1>
            <p>
              {language === "en" ? "I started strength training at TVN because it was important for staying injury-free. Later on, I enjoyed keeping it up to perform with both explosiveness and strength. In the past couple of years, I\’ve become more interested in bodybuilding, but the core of my training is the same: compound movements and raw strength and speed." : "Jeg begynte med styrketrening på TVN fordi det var viktig for å holde seg skadefri. I seinere tid har jeg likt å holde det gående for å prestere med både spenst og styrke. De siste par årene har jeg blitt mer interessert i bodybuilding, men kjernen i treningen er den samme, compound movements og rå styrke og hurtighet."}
            </p>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Programming" : "Programmering"}
            </h1>
            <p>
              {language === "en" ? "Programming has been an interest I pick up from time to time. Often it\’s to solve concrete problems, like implementing my own functionality for streaming volleyball games (I was part of a team responsible for streaming at TVN), mainly to have replays and highlights. The solution was Python code that copied video files into specific folders that could then be replayed through the streaming software OBS. I\’ve also used programming to help me with DJ-ing. To customize some shortcuts, I wrote a bit of Python to automate certain GUI actions. The best example I have of programming is this website. It\’s built with React and Next, using TypeScript and CSS." : "Programmering har vært en interesse jeg plukker opp til tider. Ofte så er det for å løse konkrete problemer som å implementere egen funksjonalitet til streaming av volleyballkamper (Jeg var med i et team som streamingansvarlig på TVN), hovedsakelig for å ha replay og highlights. Løsningen var python kode som kopierte videofiler inn i konkrete mapper som kunne spilles igjen gjennom streamingprogrammet OBS. Jeg har også brukt programmering for å hjelpe meg med DJ-ing. For å skreddersy noen shortcuts, så skrev jeg litt python for å få automatisere noen GUI handlinger. Det beste eksempelet jeg har på programmering er denne nettsiden. Den er laget med React og Next, og med språkene Typescript og CSS."}
            </p>
          </div>
        </div>
      </ScalingSection>
      
    </main>
    );
}