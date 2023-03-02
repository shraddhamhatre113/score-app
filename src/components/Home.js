import CountriesPanel from "./CountriesPanel";
import FixtureList from "./FixtureList";

function Home(){
    return (<div style={{display: 'flex'}}>
        <CountriesPanel></CountriesPanel>
        <FixtureList></FixtureList>
    </div>)
}

export default Home;