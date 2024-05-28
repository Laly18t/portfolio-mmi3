
import transition2 from "../assets/transitionHomePart3.svg";
import photoLaly from "../assets/photoLaly.png";
import homeDossier from "../assets/homeDossier.svg";
import homeCouteauSuisse from "../assets/homeCouteauSuisse.svg";
import homeSouris from "../assets/homeSouris.svg";
import homeBUT from "../assets/homeBUT.svg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import TopPage from "../components/TopPage.jsx";
import Contact from "../components/Contact.jsx";
import CarrousselProjects from "../components/CarrousselProjects.jsx";



// gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);



function Home() {

    let isAnimated = true;
    const container = useRef();

    useGSAP(() => {
        // gsap code here...
        gsap.to(".part", { x: 360 }); // <-- automatically reverted

    }, { scope: container }); // <-- scope is for selector text (optional)

    function animate() {
        var el = $('.part:eq(0)'); //get first element
        let tl = gsap.timeline({
            onComplete: () => {
                isAnimated = false; //reset animation
            }
        });

        tl.addLabel("frame_0", "0");

        let mySplitText = new SplitText($('.part:eq(1)'), { type: "words,chars" });
        let chars = mySplitText.chars; //an array of all the divs that wrap each character
        console.log(chars);
        tl.to(el, {
            opacity: 0, translateY: -40, duration: 0.5, onComplete: () => {
                el.remove(); // when disappear remove first element
            }
        }, "frame_0");

        tl.to($('.part:eq(1)'), { opacity: 1, translateY: 0, duration: 0.5 }, "frame_0")
        tl.from(chars, { duration: 0.5, opacity: 0, translateY: 50, ease: "back", stagger: 0.05 }, "frame_0");
        tl.play();
        isAnimated = true;
    }

    return (
        <>
            <TopPage />
            <div className="homePart2 home relative wrap">
                <h2 id="moiLink" className="titreHomePart2 stroke">Qui suis-je ?</h2>
                <div className="flex w-full mt-56">
                    <div className="w-2/3">
                        <p className="text-4xl mb-8">Teissier Laly - <b className="stroke">une rêveuse</b></p>
                        <p className="mb-4 text-2xl text-justify">Actuellement étudiante en MMI à l'IUT de Chambéry, je me spécialise dans le développement web et la gestion de projet. </p>
                        <p className="mb-4 text-justify">👉 Avant d’arriver dans cette formation, je me connaissais rien à ce grand domaine qu’est le multimédia, mais ce monde m’avait toujours intéressé. Au début, ce qui me passionnait était la communication, puis j’ai découvert avec cette formation que grâce au développement, je pouvais combiner plusieurs domaines et en plus créer quelques choses de tangible rien qu’avec mon ordinateur ! </p>
                        <p className="mb-4 text-justify">👉 Plus j’en apprends dans ce domaine, plus j’ai l’impression de découvrir un monde infini de possibilité de création. En apprendre toujours plus chaque jours est un moteur de création pour moi !</p>
                        <p>👉 Mais je suis avant tout un couteau suisse et j'aiguise mes fonctionnalités en fonction des nouvelles choses que j’apprends au quotidien.</p>



                    </div>
                    <img src={photoLaly}></img>
                </div>

            </div>

            <div className="transitionHomePart3 flex align-center justify-end wrap -mb-20">
                <img className="" src={transition2}></img>
                <h2 className="titreHomePart3 stroke pl-4 pb-24">Mes domaines</h2>
            </div>
            <div className="bgHomePart3 pt-4">
                <div className="homePart3 home wrap">
                    <div className="flex justify-center">
                        <img src={homeDossier}></img>
                        <p className="p-4 text-5xl strokeTerracota"> Gestion de projet</p>
                        <img src={homeDossier}></img>
                    </div>
                    <div ref={container}>
                        <div className="part text-center text-2xl"> &gt; Organisation - Suivi - Accompagnement - Animation - Autonomie - Planification - Présence 360°  </div>
                    </div>
                    <div className="flex pt-8 justify-center">
                        <img src={homeSouris}></img>
                        <p className="p-4 text-5xl strokeTerracota">Développement web</p>
                        <img src={homeSouris}></img>
                    </div>
                    <div className="flex pt-8 justify-center">
                        <img src={homeCouteauSuisse}></img>
                        <p className="p-4 text-5xl strokeTerracota">Multimédia</p>
                        <img src={homeCouteauSuisse}></img>
                    </div>
                    <div className="flex pt-8 justify-center">
                        <p className="p-4 text-5xl strokeTerracota">Autres</p>
                    </div>
                </div>
            </div>

            <CarrousselProjects />

            <div className="homePart5 home wrap">
                <div className="transitionHomePart3 flex align-center justify-end -mb-20">
                    <img className="" src={transition2}></img>
                    <h2 className="titreHomePart5 stroke pl-4 pb-24">Ma formation</h2>
                </div>
            </div>
            <div className="bgHomePart5">
                <div className="homePart5 home wrap">
                    <div className="mt-8 mb-8">
                        <div className="flex items-center justify-center">
                            <img src={homeBUT}></img>
                            <div>
                                <p className="text-2xl"><b className="text-5xl">BUT MMI</b> (Métiers du Multimédia et de l’Internet)</p>
                                <p className="text-center">- Spécialité développement web -</p>
                            </div>
                        </div>
                        <p className="mt-8 text-center text-xl w-2/3 m-auto ">Grâce à cette formation, j’ai pu découvrir de nombreux domaines du multimédia comme l’audiovisuel, la communication, le graphisme et le développement web.
                            Cela m’a permis de devenir un véritable couteau-suisse du web ! </p>
                    </div>
                </div>
            </div>

            <Contact />
        </>
    );
}

export default Home;