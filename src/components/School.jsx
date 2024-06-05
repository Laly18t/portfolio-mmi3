import homeBUT from "../assets/homeBUT.svg";
import transition2 from "../assets/transitionHomePart3.svg";

function School() {
    return (
        <>
            <div className="homePart5 home wrap">
                <div className="transitionHomePart3 flex align-center justify-end -mb-20">
                    <img className="" src={transition2}></img>
                    <h2 className="titreHomePart5 stroke pl-4 pb-24">Ma formation</h2>
                </div>
            </div>
            <div className="bgHomePart5">
                <div className="homePart5 home wrap">
                    <div className="mt-8 mb-8">
                        <div className="flex items-center justify-center">
                            <img src={homeBUT}></img>
                            <div>
                                <p className="text-2xl"><b className="text-5xl">BUT MMI</b> (Métiers du Multimédia et de l’Internet)</p>
                                <p className="text-center text-xl mt-4">- Spécialité développement web -</p>
                            </div>
                        </div>
                        <p className="mt-8 text-center text-xl w-2/3 m-auto ">Grâce à cette formation, j’ai pu découvrir de nombreux domaines du multimédia comme l’audiovisuel, la communication, le graphisme et le développement web.
                            Cela m’a permis de devenir un véritable couteau-suisse du web ! Je peux maintenant mettre mon expertise de chaque domaine au coeur de la gestion de vos projets. </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default School;