import { CircleLoader } from 'react-spinners';
import classes from './Loader.module.css';
 
function Loading() {
    return <div className={classes.appLoader}>
        loading Company data......
       
        <CircleLoader color="blue" />
        
        <span class="sr-only">Loading...</span>

    </div>
}
export default Loading;


