import './watch.scss'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import { Link, useLocation} from 'react-router-dom'
function Watch() {
    const location = useLocation()
    //console.log(location)
    const {movie} = location
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlinedIcon />
                    Back
                </div>
            </Link>
            <video 
                className="video" 
                autoPlay 
                progress="true"
                controls
                src={movie.video}
            />

        </div>
    )
}

export default Watch
