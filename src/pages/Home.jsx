/* Images */
import transition2 from "../assets/transitionHomePart3.svg";
import photoLaly from "../assets/photoLaly.png";
import homeDossier from "../assets/homeDossier.svg";
import homeCouteauSuisse from "../assets/homeCouteauSuisse.svg";
import homeSouris from "../assets/homeSouris.svg";

/* import */
import React, { useState, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/* Components */
import TopPage from "../components/TopPage.jsx";
import Contact from "../components/Contact.jsx";
import CarrousselProjects from "../components/CarrousselProjects.jsx";
import School from "../components/School.jsx";



function Home() {

    const words1 = ['Organisation', 'Suivi', 'Accompagnement', 'Animation de réunion', 'Autonomie', 'Planification', 'Présence 360°', 'Gestion des tâches', 'Organisation de réunion', 'Relation client'];
    const words2 = ['E-commerce', 'Sobriété numérique', 'API REST', 'Borne d’arcade', 'Wordpress', 'Animation web', 'Jeux vidéo'];
    const words3 = ['Montage vidéo', 'Identité graphique', 'Maquette de site web', 'Création de publicité', 'Interview vidéo ou article', 'Emission de radio', 'Écriture'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words1.length);
            setIndex((prevIndex) => (prevIndex + 1) % words2.length);
            setIndex((prevIndex) => (prevIndex + 1) % words3.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <>
            <TopPage />
            <div className="homePart2 home relative wrap">
                <h2 id="moiLink" className="titreHomePart2 stroke">Qui suis-je ?</h2>
                <div className="flex w-full md:mt-56">
                    <div className="w-2/3">
                        <p className="text-4xl mb-8">Teissier Laly - <b className="stroke">une rêveuse</b></p>
                        <p className="mb-4 text-2xl text-justify">Actuellement étudiante en MMI à l'IUT de Chambéry, je me spécialise dans le développement web et la gestion de projet. </p>
                        <p className="mb-4 text-justify">👉 Avant d’arriver dans cette formation, je me connaissais rien à ce grand domaine qu’est le multimédia, mais ce monde m’avait toujours intéressé. Au début, ce qui me passionnait était la communication, puis j’ai découvert avec cette formation que grâce au développement, je pouvais combiner plusieurs domaines et en plus créer quelques choses de tangible rien qu’avec mon ordinateur ! </p>
                        <p className="mb-4 text-justify">👉 Plus j’en apprends dans ce domaine, plus j’ai l’impression de découvrir un monde infini de possibilité de création. En apprendre toujours plus chaque jours est un moteur de création pour moi !</p>
                        <p>👉 Mais je suis avant tout un couteau suisse et j'aiguise mes fonctionnalités en fonction des nouvelles choses que j’apprends au quotidien.</p>



                    </div>
                    <img className="object-contain" src={photoLaly}></img>
                </div>

            </div>

            <div className="transitionHomePart3 flex align-center justify-end wrap -mb-20">
                <img className="" src={transition2}></img>
                <h2 className="titreHomePart3 stroke pl-4 pb-24">Mes domaines</h2>
            </div>
            <div className="bgHomePart3 pt-4 pb-8">
                <div className="homePart3 home wrap">

                    <div className="flex justify-center">
                        <img src={homeDossier}></img>
                        <p className="p-4 text-xl lg:text-5xl strokeTerracota text-center"> Gestion de projet</p>
                        <img src={homeDossier}></img>
                    </div>
                    <div>
                        <TransitionGroup>
                            <CSSTransition
                                key={index}
                                timeout={500}
                                classNames="fade"
                            >
                                <div className="part text-center text-lg lg:text-2xl text-terracota underline decoration-wavy decoration-vertt">
                                    &gt; {words1[index]}
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>

                    <div className="flex pt-8 justify-center">
                        <img src={homeSouris}></img>
                        <p className="p-4 text-xl lg:text-5xl strokeTerracota text-center">Développement web</p>
                        <img src={homeSouris}></img>
                    </div>
                    <div>
                        <TransitionGroup>
                            <CSSTransition
                                key={index}
                                timeout={500}
                                classNames="fade"
                            >
                                <div className="part text-center text-lg lg:text-2xl text-terracota underline decoration-wavy decoration-vertt">
                                    &gt; {words2[index]}
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>

                    <div className="flex pt-8 justify-center">
                        <img src={homeCouteauSuisse}></img>
                        <p className="p-4 text-xl lg:text-5xl strokeTerracota text-center">Multimédia</p>
                        <img src={homeCouteauSuisse}></img>
                    </div>
                    <div>
                        <TransitionGroup>
                            <CSSTransition
                                key={index}
                                timeout={500}
                                classNames="fade"
                            >
                                <div className="part text-center text-lg lg:text-2xl text-terracota  underline decoration-wavy decoration-vertt">
                                    &gt; {words3[index]}
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>
            </div>

            <CarrousselProjects />



            <School />

            <Contact id="contactLink" />
        </>
    );
}

export default Home;