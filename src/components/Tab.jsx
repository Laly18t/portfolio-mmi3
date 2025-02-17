import { useState } from 'react';
import data from '../data';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React from "react";

function Tab() {
    // let { projectId } = useParams();

    const tabs = [
        { title: 'Développement web', items: ['Développement web', 'Électronique', 'Intégration', 'Développement de jeux vidéo'], color: 'bg-vertt', text: 'text-black' },
        { title: 'Gestion de projet', items: ['Gestion de projet'], color: 'bg-terracota', text: 'text-beigee' },
        { title: 'Multimédia', items: ['Communication', 'Rédaction', 'Conception', 'Graphisme', 'Audiovisuel'], color: 'bg-verttClair', text: 'text-black' },
        { title: 'Perso', items: ['Perso'], color: 'bg-terracotaClair', text: 'text-black' },
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
                    <div className={` ${selectedTab.color} text-black rounded-lg p-4 flex grid grid-col-1 md:grid-cols-3 xl:grid-cols-4 gap-4  w-full h-full justify-items-center`}>
                        {Object.entries(data).map(([idProject, project]) => {
                            if (selectedTab.items.some(r => project.skill.includes(r))) {
                                return (
                                    <a className={`flex w-full m-2 bg-beigee p-4 rounded !h-70`} href={`/projet/${idProject}`}>
                                        <div className="flex flex-col h-full justify-between w-full" key={idProject}>
                                            {project.title}
                                            <LazyLoadImage className="w-fit m-auto !h-24" src={project.img[0].src} alt={project.img[0].alt} />
                                            <p className={`relative bottom-0 ${selectedTab.color} text-sm p-2 text-beigee text-center rounded-2xl ${selectedTab.text} w-fit m-auto mt-2`}>{project.date}</p>
                                        </div>
                                    </a>
                                );

                            } else if (selectedTab.items.some(r => project.category == "Perso")) {
                                return (
                                    <a className="flex w-full m-2 bg-beigee p-4 rounded !h-70" href={`/projet/${idProject}`}>
                                        <div className="flex flex-col h-full justify-between" key={idProject}>
                                            {project.title}
                                            <img className="w-16 m-auto" src={project.img[0].src} alt={project.img[0].alt}></img>
                                            <p className={`relative bottom-0 ${selectedTab.color} text-sm text-beigee text-center ${selectedTab.text} p-2 rounded-2xl  w-fit m-auto mt-2`}>{project.date}</p>
                                        </div>
                                    </a>
                                );
                            }

                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Tab;