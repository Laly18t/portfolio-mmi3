import TopPage from '../components/TopPage';

function XP() {
    return (
        <>
            <TopPage page="XP" titreText="Expériences" text="Découvrez mes expériences professionnelles" />
            <h1>XP</h1>
            <div className='wrap timelineXP'>
                <ol>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ol>
            </div>
        </>
    );
}
export default XP;