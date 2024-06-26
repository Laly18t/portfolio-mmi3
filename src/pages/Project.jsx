import { useParams } from "react-router-dom";
import data from '../data';
import TopPage from "../components/TopPage.jsx";
import transition2 from "../assets/transitionHomePart3.svg";
import sun from "../assets/sun.svg";
import link from "../assets/external-link.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import myRole1 from "../assets/photo/myRole1.jpeg";
import myRole2 from "../assets/photo/myRole2.jpeg";
import myRole3 from "../assets/photo/myRole3.jpg";


function Project() {
    let { projectId } = useParams();

    if (typeof data[projectId] === 'undefined') {
        return (<div className="flex wrap w-screen h-screen">Aucun projet trouvé</div>);
    }

    const projectData = data[projectId];


    return (
        <>

            <TopPage page="projet" titreText={projectData.class} text={projectData.short_description} />

            <div className="flex flex-col md:flex-row wrap">
                <div className="w-1/3 h-fit m-4 bg-vertt z-0 rounded">
                    <LazyLoadImage className="z-10 p-1 w-fit" src={projectData.img[1].src} alt={projectData.img[1].alt} />
                </div>

                <div className="md:w-2/3 m-4">
                    <p className="text-justify" dangerouslySetInnerHTML={{ __html: projectData.description }}></p>
                    {projectData.link ? (
                        <a href={projectData.link} target="_blank" className="mt-8 bg-vertt p-2 rounded-xl text-black flex w-fit"><b className="pr-4">Lien vers le projet</b><img src={link} alt="lien vers le site"></img> </a>
                    ) : null
                    }


                    <div className="flex flex-col md:flex-row mt-8">
                        <div className="w-1/2">
                            <h5 className="mb-4"><b><u className="decoration-terracota">Outils :</u></b></h5>
                            <ul className="ml-8 mb-4 list-disc">{projectData.tools.map((tool) => (<li className="list-disc" key={tool}> {tool}</li>))}</ul>

                        </div>
                        <div className="md:w-1/2">
                            <p className="mt-4 mb-8 decoration-terracota text-end"><span className=" bg-terracota p-2 rounded-xl text-beigee"><b>Année :</b> {projectData.date} ( {projectData.class} )</span> </p>
                            <p className="w-full mb-4 decoration-vertt text-end"><span className=" bg-vertt p-2 rounded-xl text-black"><b>Rôles : </b> {projectData.roles.join(" - ")}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex wrap">
                <div className="w-1/3 h-fit m-4 bg-terracota rounded">
                    <LazyLoadImage className="z-10 p-1 w-fit" src={projectData.img[2].src} alt={projectData.img[2].alt} />
                </div>
                <div className="w-1/3 h-fit m-4 bg-vertt rounded">
                    <LazyLoadImage className="z-10 p-1 w-fit" src={projectData.img[3].src} alt={projectData.img[3].alt} />
                </div>
                <div className="w-1/3 h-fit m-4 bg-terracota rounded">
                    <LazyLoadImage className="z-10 p-1 w-fit" src={projectData.img[4].src} alt={projectData.img[4].alt} />
                </div>
            </div>
            {projectId.includes("myrole") ? (
                <div className="flex wrap">
                    <div className="w-1/3 h-fit m-4 bg-terracota rounded">
                        <LazyLoadImage className="z-10 p-1 w-fit" src={myRole1} alt="equipe de myrole" />
                    </div>
                    <div className="w-1/3 h-fit m-4 bg-vertt rounded">
                        <LazyLoadImage className="z-10 p-1 w-fit" src={myRole2} alt="equipe de myrole" />
                    </div>
                    <div className="w-1/3 h-fit m-4 bg-terracota rounded">
                        <LazyLoadImage className="z-10 p-1 w-fit" src={myRole3} alt="equipe de myrole" />
                    </div>
                </div>
            ) : null
            }

            <div className="homePart5 home wrap">
                <div className="transitionHomePart3 flex align-center justify-end -mb-20">
                    <img className="" src={transition2}></img>
                    <h2 className="titreProject stroke pl-4 pb-24">Compétences acquises</h2>
                </div>
            </div>

            <div className="bgProjectPart3 mb-8">
                <div className="projectPart3 text-center home wrap flex flex-col md:flex-row justify-center items-center">
                    <div>
                        <p className="mb-6 md:mb-12">{projectData.skill[0]}</p>
                        <p>{projectData.skill[1]}</p>
                    </div>
                    <img className="w-1/4" src={sun}></img>
                    <div>
                        <p className="mb-6 md:mb-12">{projectData.skill[2]}</p>
                        <p>{projectData.skill[3]}</p>
                    </div>
                </div>
                <div className="projectPart3 home wrap">
                    <br></br>
                    <h5 className="mb-4"><b><u className="decoration-terracota">Compétences du programme MMI3 :</u></b></h5>
                    <ul className="ml-8 mb-4 list-disc">{projectData.competences_mmi.map((competences) => (<li className="list-disc" key={competences}> {competences}</li>))}</ul>
                </div>
            </div>

            <div className="flex flex-col wrap">
                <h5 className="stroke titreProject">Conclusion :</h5>
                <p className="lg:mx-64 mt-4 text-justify" dangerouslySetInnerHTML={{ __html: projectData.conclusion }}></p>
            </div>
        </>
    );
}

export default Project;