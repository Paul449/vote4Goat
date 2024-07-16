
// top 4 players banner
import P1 from '../assets/eafbb100-68ac-485d-a669-a2cb91254217-large16x9_DuncanRaftersBanner.jpg';
import P2 from '../assets/37YAQF4CRVGYTMPRO7R6KOQLIE.jpg';
import P3 from '../assets/1000048188_480.jpg';
import P4 from '../assets/4f230362-fd72-4f81-9f05-152ec708e993-2018-11-18_lebron_james2_720.jpg'
import P5 from '../assets/1140-magic-johnson-lakers.jpg';
//import components needed
import PlayerButtons from '../components/PlayerButtons';
import PlayersList from '../components/PlayersList';
import NavBar from '../components/NavBar';
const Home = () => {
  return (
    <>
        <NavBar/>
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="top5">
        <div className="hidden-duration-700-ease-in-out" data-carousel-item>
            <img src={P1} className="P1" alt="..."/>
        </div>
        <div className="hidden-duration-700-ease-in-out" data-carousel-item>
            <img src={P2} className="P2" alt="..."/>
        </div>
        <div className="hidden-duration-700-ease-in-out" data-carousel-item>
            <img src={P3} className="P3" alt="..."/>
        </div>
        <div className="hidden-duration-700-ease-in-out" data-carousel-item>
            <img src={P4} className="P4" alt="..."/>
        </div>
       
        <div className="hidden-duration-700 ease-in-out" data-carousel-item>
            <img src={P5} className="P5" alt="..."/>
        </div>
        <PlayersList/>
    </div>
        <PlayerButtons/>
</div>
</>
   );
};

export default Home;