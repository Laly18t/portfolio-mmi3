import happy from "../assets/happy.svg";
import transition1 from "../assets/transition1.svg";

function TopPage(page, text, titreText) {
    let contenu = "";
    let img = "";

    if (page.page === "projet") {
        contenu = (
            <>
                <p className="text-2xl"><b className="stroke">{page.titreText} :</b></p>
                <p>{page.text}</p>
            </>
        );
        img = (
            <img className="w-full -mt-16" src={transition1}></img>
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
            <img className="w-full -mt-16" src={transition1}></img>
        );
    }

    return (
        <>
            <div className="homePart1 home relative z-1 text-center w-2/3 wrap">
                <img className="flex absolute w-16 -top-10 -right-14 -z-1" src={happy}></img>
                {contenu}
            </div>
            {img}
        </>
    );
}

export default TopPage;