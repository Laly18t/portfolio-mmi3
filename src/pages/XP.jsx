import TopPage from '../components/TopPage';
import rapportStage from '../assets/Rapport-Stage-Laly-Teissier.pdf';

function XP() {
    return (
        <>
            <TopPage page="experiences" titreText="Mes expériences" text="Découvrez mon parcours dans le monde du multimédia" />
            <div className='lg:ml-24 mt-8 wrap timelineXP w-full'>
                <ol>
                    <li className='w-fit pr-2'>
                        <p className="text-terracota">Septembre 2023 - juillet 2024</p>
                        <p><span className='stroke titreXP pr-4'>Alternance</span> à <b>MyRole</b> -&gt; Web-application de dématéralisation des ressources humaines dans le monde du cinéma</p>
                        <p>Suivi et gestion de projet du développement de la refonte de l'application</p>
                    </li>
                    <li>
                        <p className="text-terracota">Mai - juillet 2023</p>
                        <p><span className='stroke titreXP'>Stage</span> à <b>Vas-y Paulette</b> -&gt; Agence de communication créative</p>
                        <p className='mb-4'>Stagiaire en gestion de projets</p>
                        <span className=" bg-vertt p-2 rounded-xl text-sm text-black hover:text-beigee transition"><a href={rapportStage} target='_blank'>Lien vers mon rapport de stage</a></span>
                    </li>
                    <li>
                        <p className="text-terracota">2021 - 2024</p>
                        <p><span className='stroke titreXP'>BUT</span> <b>Métiers du Multimédia et de l'Internet</b> (3 ans)</p></li>
                    <li>
                        <p className="text-terracota">2018 - 2021</p>
                        <p><span className='stroke titreXP'>Baccalauréat</span> spécialités Mathématiques et Sciences Economiques et Sociales (mention Bien)</p></li>
                </ol>
            </div>
        </>
    );
}
export default XP;