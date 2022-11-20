import { getFeaturedEvents } from "../dummy-data";

function HomePage(){
    const featuredEvents = getFeaturedEvents();

    return(
        <div>
            {/* <h1>The dummy HomePage</h1> */}
            <ul></ul>
        </div>
    );
}

export default HomePage;