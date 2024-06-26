import gif from "../assets/plant-cat.gif";


function Footer() {
    return (
        <div className="divFooter w-full wrap">
            <footer aria-label="pied de page">
                <div className="flex justify-between w-full">
                    <nav>
                        <ul>
                            <li><a className="transition ease-out hover:ease-in duration-100 hover:underline" href="/">Accueil</a></li>
                            <li><a className="transition ease-out hover:ease-in duration-100 hover:underline" href="/projets">Mes Projets</a></li>
                            <li><a className="transition ease-out hover:ease-in duration-100 hover:underline" href="/competences">Mes Compétences</a></li>
                            <li><a className="transition ease-out hover:ease-in duration-100 hover:underline" href="/experiences">XP</a></li>
                        </ul>
                    </nav>
                    <img className="gifLaly" src={gif}></img>
                </div>
                <p className="text-center pb-1">Fait avec ❤️ par Laly <b className="text-terracota">|</b> <a href="/mentions-legales">Mentions Légales</a></p>
            </footer>
        </div>
    );
}

export default Footer;