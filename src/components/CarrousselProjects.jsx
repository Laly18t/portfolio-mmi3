import data from '../data';
import Marquee from '../Marquee';
import '../assets/css/marquee.css';
import gsap from "gsap";

document.querySelectorAll('.cardItem').forEach((element) => {
    // Générer un nombre aléatoire entre 5 et 15 (en secondes)
    const randomSeconds = Math.floor(Math.random() * (15 - 5 + 1) + 5);

    new Marquee({
        el: element.querySelector('.cardContainer'),
        container: element,
        destroyEl: false,
        directLoad: true,
        autoplay: true,
        direction: 1,
        timingAnimation: [1, 100], // 1 sec for 500px,
        duration: randomSeconds
    });
})



function CarrousselProjects() {
    return (
        <div className="homePart4 flex flex-col items-center home wrap mt-16">
            <div className="transitionHomePart3 flex align-center justify-center">
                <h2 className="titreHomePart4 stroke pl-4 pb-24">Mes productions</h2>
            </div>
            <div className="cardScroll pt-8">
                <p className="text-2xl">Découvrez mes projets réalisés en cours ou en dehors de l’école !</p>
                <ul className="flex cardContainer overflow-x-scroll">
                    {Object.entries(data).map(([idProject, project]) => {
                        if (project.on_top === true) {
                            return (
                                <>
                                    <a className='cardItem' href={`/projet/${idProject}`}>
                                        <li key={idProject} className="cardLi bg-terracota p-1 rounded-lg m-4 text-white">
                                            lien {project.title} / {project.skill.join(" - ")}
                                        </li>
                                    </a>
                                </>
                            );
                        }
                    })}
                </ul>

            </div>
        </div>
    );
}
export default CarrousselProjects;