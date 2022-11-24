import classes from './Loader.module.css';
 
function Loading() {
    return <div className={classes.appLoader}>
        loading Company data......
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        
        <span class="sr-only">Loading...</span>

    </div>
}
export default Loading;


