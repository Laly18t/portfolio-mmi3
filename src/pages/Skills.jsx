import TopPage from '../components/TopPage';
import Chillome from '../assets/Chillome.pdf';


function Skills() {
    return (
        <>
            <TopPage page="competences" titreText="Mes compétences" text="Découvrez mes compétences dans le monde du multimédia" />
            <div className="wrap">
                <h2 className="titreProject stroke text-center pb-4">Compétences du programmes</h2>

                <h3 className="stroke text-2xl titre py-4">Entreprendre</h3>
                <ul className='lienA pb-8'>
                    <li><p>Piloter un produit, un service ou une équipe : <a href="/projet/mmix" target="_blank">MMIX</a> - <a href="/projet/idol" target="_blank">idol</a> - <a href="/projet/myrole_v3_gestionproj" target="_blank">MyRole V3</a>
                    </p> </li>
                    <li><p>Maitriser la qualité en projet web ou multimédia : <a href="/projet/muew" target="_blank">muew</a> - <a href="/projet/myrole_v3_gestionproj" target="_blank">MyRole V3</a>
                    </p></li>
                    <li><p>Concevoir un projet d’entreprise innovante : <a href="/projet/tagaday" target="_blank">Tagaday</a> - <a href={Chillome} target="_blank">Chillôme</a>
                    </p>        </li>
                    <li><p>Défendre un projet de manière convaincante : <a href="/projet/tagaday" target="_blank">Tagaday</a> - <a href={Chillome} target="_blank">Chillôme</a>
                    </p>  </li>
                </ul>
                <h3 className="stroke text-2xl titre py-4">Développer</h3>
                <ul className='lienA'>
                    <li>
                        <p>Développer à l’aide d’un framework de développement côté client : <a href="/projet/muew" target="_blank">Muew</a> - <a href="/projet/myrole_v3_dev" target="_blank">MyRole</a>
                        </p></li>
                    <li>
                        <p>Développer à l’aide d’un framework de développement côté serveur : <a href="/projet/serre" target="_blank">Serre connectée</a> - <a href="/projet/myrole_v3_dev" target="_blank">MyRole</a>
                        </p></li>
                    <li>
                        <p>Développer des dispositifs interactifs sophistiqués : <a href="/projet/serre" target="_blank">Serre connectée</a> - <a href="/projet/mapping" target="_blank">Jeu mapping</a> - <a href="/projet/mosquito" target="_blank">Borne anti-moustiques</a>
                        </p></li>
                    <li><p>Concevoir et développer des composants logiciels, plugins ou extensions : pas de projets...</p>  </li>
                    <li><p>Maîtriser l'hébergement et le déploiement d'applications : <a href="/projet/muew" target="_blank">Muew</a> - <a href="/projet/myrole_v2" target="_blank">MyRole</a> - Mon portfolio</p></li>
                </ul>
            </div>
        </>
    );

}

export default Skills;