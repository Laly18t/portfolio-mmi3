import { useParams } from "react-router-dom";
import data from '../data';
import TopPage from "../components/TopPage.jsx";
import transition2 from "../assets/transitionHomePart3.svg";
import sun from "../assets/sun.svg";
import link from "../assets/external-link.svg";


function Project() {
    let { projectId } = useParams();

    if (typeof data[projectId] === 'undefined') {
        return (<div className="flex wrap w-screen h-screen">Aucun projet trouvé</div>);
    }

    const projectData = data[projectId];
    { console.log("data >>", projectData) }


    return (
        <>

            <TopPage page="projet" titreText={projectData.class} text={projectData.short_description} />

            <div className="flex wrap">
                <div className="w-1/3 h-fit m-4 bg-vertt z-0 rounded">
                    <img className="z-10 p-1 w-fit" src={projectData.img[1].src} alt={projectData.img[1].alt} />
                </div>

                <div className="w-2/3 m-4">
                    <p>{projectData.description}</p>

                    <div>
                        <p className="mt-4 mb-4 decoration-terracota text-end"><span className=" bg-terracota p-2 rounded-xl text-beigee"><b>Année :</b> {projectData.date} ( {projectData.class} )</span> </p>
                        <p className="w-full mb-4 decoration-vertt text-end"><span className=" bg-vertt p-2 rounded-xl text-black"><b>Rôles : </b> {projectData.roles.join(" - ")}</span></p>
                        <h5 className="mb-4"><b><u className="decoration-terracota">Outils :</u></b></h5>
                        <ul className="ml-8 mb-4 list-disc">{projectData.tools.map((tool) => (<li className="list-disc" key={tool}> {tool}</li>))}</ul>
                        {projectData.link ? (
                            <a href={projectData.link} target="_blank" className=" bg-vertt p-2 rounded-xl text-black flex w-fit"><b className="pr-4">Lien vers le projet</b><img src={link} alt="lien vers le site"></img> </a>
                        ) : null
                        }
                    </div>
                </div>
            </div>
            <div className="flex wrap">
                <div className="w-1/3 h-fit m-4 bg-terracota rounded">
                    <img className="z-10 p-1 w-fit" src={projectData.img[2].src} alt={projectData.img[2].alt} />
                </div>
                <div className="w-1/3 h-fit m-4 bg-vertt rounded">
                    <img className="z-10 p-1 w-fit" src={projectData.img[3].src} alt={projectData.img[3].alt} />
                </div>
                <div className="w-1/3 h-fit m-4 bg-terracota rounded">
                    <img className="z-10 p-1 w-fit" src={projectData.img[4].src} alt={projectData.img[4].alt} />
                </div>
            </div>

            <div className="homePart5 home wrap">
                <div className="transitionHomePart3 flex align-center justify-end -mb-20">
                    <img className="" src={transition2}></img>
                    <h2 className="titreProject stroke pl-4 pb-24">Compétences acquises</h2>
                </div>
            </div>

            <div className="bgProjectPart3 mb-8">
                <div className="projectPart3 home wrap flex justify-center items-center">
                    <div>
                        <p className="mb-8">{projectData.skill[0]}</p>
                        <p className="mt-8">{projectData.skill[1]}</p>
                    </div>
                    <img className="w-1/4" src={sun}></img>
                    <div>
                        <p>{projectData.skill[2]}</p>
                        <p>{projectData.skill[3]}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col wrap">
                <h5 className="stroke titreProject">Conclusion :</h5>
                <p className="mx-64 mt-4">{projectData.conclusion}</p>
            </div>
        </>
    );
}

export default Project;