import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >

// maybe?????
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/1000048188_480.jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/1000048189_720.jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/1000048190_720.jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/1000048191_720(1).jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        
        <!-- Item 5 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/1000048192_720(1).jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 6 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/1000048193_720(1).jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 7 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/636469848850033350-usp-nba-brooklyn-nets -at-cleveland-cavaliers-95522351_720(1).jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 8 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/Kobe_Bryant_2014.jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 9 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/Magic-Johnson.jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 10 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div ="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={"App/vote4goat/client/src/assets/shaquille-oneal-orlando-magic-uns igned-hardwood-classics-dribble-look-photograph_pi4286000_ff_4286840-4d9ea2dc602071ba80fd_full_720(1).jpg"} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>

    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
// Maybe??????
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
