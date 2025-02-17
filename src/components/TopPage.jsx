import happy from "../assets/happy.svg";
import transition1 from "../assets/transition1.svg";

function TopPage(page, text, titreText) {
    let contenu = "";
    let img = "";

    if (page.page === "projet" || page.page === "experiences" || page.page === "competences") {
        contenu = (
            <>
                <p className="text-2xl"><b className="stroke">{page.titreText} :</b></p>
                <p>{page.text}</p>
            </>
        );
        img = (
            <svg className="transition w-full -mt-16" width="1280" height="384" viewBox="0 0 1280 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="path" d="M-50 3C73.5 84 97.9 349.2 263.5 268C429.1 186.8 429.5 109.5 312 138.5C194.5 167.5 150 354.5 379.5 378.5C615.021 403.13 1017.5 138.5 1358 234.5" stroke="#9FC4AD" stroke-width="7px"/>
            </svg>
        );
    } else {
        contenu = (
            <>
                <p className="text-2xl">Étudiante en <b className="stroke">multimédia</b>, j’utilise mes compétences <b className="stroke">pluridisciplinaire</b> pour varier mes créations !</p>
                <br></br>
                <p className="text-2xl">Etant <b className="stroke">perfectionniste</b> dans l’âme, j’aime apprendre grâce à mes projets et découvrir de <b className="stroke">nouveaux domaines</b>.</p>
            </>
        );
        img = (
            <svg className="transition w-full sm:-mt-16" width="1280" height="384" viewBox="0 0 1280 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="path" d="M-50 3C73.5 84 97.9 349.2 263.5 268C429.1 186.8 429.5 109.5 312 138.5C194.5 167.5 150 354.5 379.5 378.5C615.021 403.13 1017.5 138.5 1358 234.5" stroke="#9FC4AD" stroke-width="7px"/>
            </svg>
        );
    }

    return (
        <div className="topPage">
            <div className="homePart1 home relative z-1 text-center w-2/3 wrap">
                <img className="flex absolute w-16 -top-10 -right-14 -z-1" src={happy}></img>
                {contenu}
            </div>
            {img}
        </div>
    );
}

export default TopPage;