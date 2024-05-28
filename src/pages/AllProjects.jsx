import { useParams } from "react-router-dom";
import { useState } from 'react';
import data from '../data';

function AllProjects() {
    // let { projectId } = useParams();

    const tabs = [
        { title: 'Développement web', items: ['Développement web', 'Électronique', 'Intégration', 'Développement de jeux vidéo'], color: 'bg-vertt', text: 'text-black' },
        { title: 'Gestion de projet', items: ['Gestion de projet'], color: 'bg-terracota', text: 'text-beigee' },
        { title: 'Multimédia', items: ['Communication', 'Rédaction', 'Conception', 'Graphisme', 'Audiovisuel'], color: 'bg-vertt', text: 'text-black' },
        { title: 'Autres', items: ['Perso'], color: 'bg-terracota', text: 'text-beigee' },
    ];

    const [selectedTab, setSelectedTab] = useState(tabs[0]);


    function switchSkill(tabIndex) {
        setSelectedTab(tabs[tabIndex])
    }


    return (
        <div className="flex flex-col wrap">
            <h1 className="text-3xl font-bold underline text-vertt">Mes projets : </h1>
            <div className="allProjects">
                <div className="mt-4  flex -mb-1">
                    {tabs.map((tab, index) => {
                        return (<a onClick={() => switchSkill(index)} className={`allProjectsGestion cursor-pointer ${selectedTab.title == tab.title ? 'font-bold' : 'font-normal'} ${tab.color} ${tab.text} pb-2 mr-2 rounded-t-xl px-5 py-2`}>{tab.title}</a>)

                    })}
                </div>
                <div className="flex">
                    <ul className={` ${selectedTab.color} text-black rounded-bl p-2 grid grid-cols-4 gap-3 w-full justify-items-center`}>
                        {Object.entries(data).map(([idProject, project]) => {
                            if (selectedTab.items.some(r => project.skill.includes(r))) {
                                console.log("data :", project.img[0].src)
                                return (
                                    <a className="allProjectsLi w-60 m-2 bg-beigee p-4 rounded h-60" href={`/projet/${idProject}`}>
                                        <li className="flex flex-col h-full justify-between" key={idProject}>
                                            <u>LIEN</u> {project.title}
                                            <img className="w-16 m-auto" src={project.img[0].src} alt={project.img[0].alt}></img>
                                            <p className="relative bottom-0 bg-terracota p-2 rounded-2xl text-beigee">{project.date}</p>
                                        </li>
                                    </a>
                                );

                            } else if (selectedTab.items.some(r => project.category == "Perso")) {
                                return (
                                    <a className="allProjectsLi w-60 m-2 bg-beigee p-4 rounded h-60" href={`/projet/${idProject}`}>
                                        <li className="flex flex-col h-full justify-between" key={idProject}>
                                            <u>LIEN</u> {project.title}
                                            <img className="w-16 m-auto" src={project.img[0].src} alt={project.img[0].alt}></img>
                                            <p className="relative bottom-0 bg-terracota p-2 rounded-2xl text-beigee">{project.date}</p>
                                        </li>
                                    </a>
                                );
                            }

                        })}
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default AllProjects;