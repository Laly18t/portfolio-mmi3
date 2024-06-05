import logoLaly from "../assets/logoLaly.svg";

function Header() {
    return (
        <div className="divHeader w-full wrap">
            <header>
                <a href="../"><img className="logoLaly" src={logoLaly}></img></a>
                <nav className="text-beigee">
                    <ul>
                        <li><a href="/projets">Projets</a></li>
                        <li><a href="./#moiLink">Moi</a></li>
                        <li><a href="/experiences">XP</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;