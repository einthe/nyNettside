"use client";

import styles from ".././page.module.css";
import ScalingSection from "../../components/scaling";
import { useLanguage } from "../../components/language_context";
import "../../components/button.css";

export default function Experience() {
  const { language } = useLanguage();
  
  return (
    <main className={styles.main}>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.title}>
            <h1>
              {language === "en" ? "Experience" : "Erfaring"}
            </h1>
          </div>
        </div>
      </ScalingSection>
      
      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Beach volleyball coach at Jardar Volleyball" : "Sandvolleyballtrener hos Jardar Volleyball"}
            </h1>
            <div className={styles.date_container}>
              <div className={styles.date_icon}>
                <img src={"/icons/calendar_icon.svg"} />
              </div>
              <h3>
                {language === "en" ? "June - July, 2025" : "Juni - Juli, 2025"}
              </h3>
            </div>
            <p>
              {language === "en" ? "This was a training program for children, youth, and adults to play and develop skills in beach volleyball. I worked as a coach and was therefore responsible for planning and conducting training sessions." : "Dette var et treningstilbud for barn, ungdom og voksne for å spille og utvikle ferdigheter i sandvolleyball. Jeg jobbet som trener og hadde dermed ansvar for å planlegge og holde treninger."}
            </p>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Alfa Moving" : "Alfa Moving"}
            </h1>
            <div className={styles.date_container}>
              <div className={styles.date_icon}>
                <img src={"/icons/calendar_icon.svg"} />
              </div>
              <h3>
                {language === "en" ? "June - August, 2023" : "Juni - August, 2023"}
              </h3>
            </div>
            <p>
              {language === "en" ? "Alfa Moving is primarily a moving company. I worked on assignments that included driving to customers, packing and moving goods, and ensuring that all items destined for the warehouse were delivered to the correct location. I also had the opportunity to work in the warehouse." : "Alfa Moving er hovedsakelig et flyttebyrå. Her jobbet jeg med oppdrag som inkluderte å kjøre til kunder, pakking og flytting av gods og sørge for at alle varene som skulle på lageret kom til riktig sted. Jeg fikk også jobbe på lageret."}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <button className="button" onClick={() => window.open("/docs/AttestAlfaMoving.pdf", "_blank")}>
              {language === "en" ? "Work certificate" : "Attest"}
            </button>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Vallersvingen Kindergarten (Adecco)" : "Vallersvingen Barnehage (Adecco)"}
            </h1>
            <div className={styles.date_container}>
              <div className={styles.date_icon}>
                <img src={"/icons/calendar_icon.svg"} />
              </div>
              <h3>
                {language === "en" ? "February - July, 2022" : "Februar - Juli, 2022"}
              </h3>
            </div>
            <p>
              {language === "en" ? "This was simply a continuation of the job at Bærum Municipality. For financial reasons, the municipality was only able to employ me until shortly after the New Year, so in order for me to continue working there, the solution was to start working through Adecco. From there, I was able to continue in a 100% position as a substitute at Vallersvingen and Hamang kindergartens." : "Dette var bare en fortsettelse på jobben hos Bærum kommune. Av økonomiske årsaker hadde kommunen bare mulighet til å ansette meg til litt over nyåret, så for at jeg skulle kunne fortsette å jobbe der, så ble løsningen å begynne å jobbe hos Adecco. Derfra fikk jeg fortsette i 100% stilling som vikar hos Vallersvingen- og Hamang barnehage."}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <button className="button" onClick={() => window.open("/docs/AttestAdecco.pdf", "_blank")}>
              {language === "en" ? "Work certificate" : "Attest"}
            </button>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Vallersvingen Kindergarten (Bærum Municipality)" : "Vallersvingen Barnehage (Bærum kommune)"}
            </h1>
            <div className={styles.date_container}>
              <div className={styles.date_icon}>
                <img src={"/icons/calendar_icon.svg"} />
              </div>
              <h3>
                {language === "en" ? "August, 2021 - February, 2022" : "August, 2021 - Februar, 2022"}
              </h3>
            </div>
            <p>
              {language === "en" ? "Through Bærum Municipality, I worked in a 100% position as a substitute, primarily at Vallersvingen Kindergarten. There, I had the opportunity to work in both the infant/toddler department and the preschool department. For a shorter period, I was also given additional responsibility and follow-up for a child with special needs. Occasionally, I also worked at Hamang Kindergarten when needed. Vallersvingen and Hamang Kindergartens were part of the same organization and have now been merged into Valler Kindergarten." : "Gjennom Bærum kommune jobbet jeg i en 100\% stilling som vikar hos hovedsakelig Vallersvingen barnehage. Her fikk jeg mulighet til å jobbe både på småbarnsavdelingen og storbarnsavdelingen. Jeg fikk også i en kortere periode et ekstra ansvar og oppfølging av et barn som hadde ekstra behov. Av og til jobbet jeg også på Hamang barnehage da det var behov. Vallersvingen- og Hamang barnehage hørte sammen og er nå slått sammen til Valler barnehage."}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <button className="button" onClick={() => window.open("/docs/AttestVallersvingen.pdf", "_blank")}>
              {language === "en" ? "Work certificate" : "Attest"}
            </button>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "IKEA Slependen" : "IKEA Slependen"}
            </h1>
            <div className={styles.date_container}>
              <div className={styles.date_icon}>
                <img src={"/icons/calendar_icon.svg"} />
              </div>
              <h3>
                {language === "en" ? "June - September, 2021" : "Juni - September, 2021"}
              </h3>
            </div>
            <p>
              {language === "en" ? "At IKEA, I had two different types of shifts: in the restaurant and in the dishwashing area. In the restaurant, I worked at the register, restocked food, drinks, and tableware, and cleaned tables. In the dishwashing area, I mainly handled washing dishes and kitchen equipment." : "Hos IKEA hadde jeg to ulike typer vakter: restauranten og oppvasken. I restauranten jobbet jeg i kassa, fylte opp med matvarer, drikke og servise, og jeg vasket bord. I oppvasken var det generelt oppvask av servise og kjøkkenutstyr."}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <button className="button" onClick={() => window.open("/docs/AttestIKEA.pdf", "_blank")}>
              {language === "en" ? "Work certificate" : "Attest"}
            </button>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div className={styles.section}>
          <div className={styles.text}>
            <h1>
              {language === "en" ? "Foldvik Family Park" : "Foldvik Familiepark"}
            </h1>
            <div className={styles.date_container}>
              <div className={styles.date_icon}>
                <img src={"/icons/calendar_icon.svg"} />
              </div>
              <h3>
                {language === "en" ? "June - August, 2020" : "Juni - August, 2020"}
              </h3>
            </div>
            <p>
              {language === "en" ? "Here, I worked serving guests at sales outlets, supervising various play installations, and preparing simple food in the café." : "Her jobbet jeg med betjening av gjester ved utsalgssteder, være vakthold ved ulike lekeinstallasjoner og lage enklere mat i kaféen."}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <button className="button" onClick={() => window.open("/docs/AttestFoldvikFamiliepark.pdf", "_blank")}>
              {language === "en" ? "Work certificate" : "Attest"}
            </button>
          </div>
        </div>
      </ScalingSection>
      
    </main>
    );
}