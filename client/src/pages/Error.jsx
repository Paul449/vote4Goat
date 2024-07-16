import {useRouteError} from 'react-router-dom';
export default function ErrorPage(){
const RouteError = useRouteError();
console.error(RouteError);
return(<>
    <div id='error'>
        <h1>Error!!!,Unfortunately something unexpected happened</h1>
        <p>Please Try Again Later!!!</p>
        <p>
            <i>{RouteError.statusText || RouteError.message}</i>
        </p>
    </div>
</>)
}