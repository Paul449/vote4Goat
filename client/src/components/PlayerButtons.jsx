/*
import img1 from './assets/1000048188_480.jpg';
import img2 from './assets/1000048189_720.jpg';
import img3 from './assets/1000048190_720.jpg';
import img4 from './assets/1000048191_720(1).jpg';
import img5 from './assets/1000048192_720(1).jpg';
import img6 from './assets/1000048193_720(1).jpg';
import img7 from './assets/636469848850033350-usp-nba-brooklyn-nets -at-cleveland-cavaliers-95522351_720(1).jpg';
import img8 from './assets/Kobe_Bryant_2014.jpg';
import img9 from './assets/Magic-Johnson.jpg';
import img10 from './assets/shaquille-oneal-orlando-magic-uns igned-hardwood-classNameics-dribble-look-photograph_pi4286000_ff_4286840-4d9ea2dc602071ba80fd_full_720(1).jpg'
*/
function PlayerButtons(){
    return(
        <>
    <div className="PlayerButtons">
        <button type="button" id="Player1" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" id="Player2" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" id="Player3" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" id="Player4" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" id="Player5" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" id="Player6" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" id="Player7" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" id="Player8" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" id="Player9" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" id="Player10" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <div id="Previous">
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    </div>
    <div id="Next">
    <button type="button"  className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
    </div>
        </div>
      </>  
);
}
export default PlayerButtons;