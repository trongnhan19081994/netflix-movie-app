import './listItem.scss'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import AddIcon from '@material-ui/icons/Add'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})
   
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`/movies/find/${item}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGU1MTEyODFhNjQ0MjljYTNmZTEzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODUwMTk0MCwiZXhwIjoxNjI4OTMzOTQwfQ.EE3N6EGLIeDJwq71d-BpwashCpxAY1cuHmEAtzpdWaE'
                    }
                })
                setMovie(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMovie()
    }, [item])

    return (
        <Link to={{pathname: "/watch", movie: movie}}>
        <div className="listItem" 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
             <img
                src={movie.img}
                alt={movie.title}
            />
            {
                isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayCircleOutlineIcon className="icon"/>
                                <AddIcon className="icon"/>
                                <ThumbUpAltOutlinedIcon className="icon"/>
                                <ThumbDownOutlinedIcon className="icon"/>
                            </div>
                            <div className="itemInfoTop">
                                <span>1 hour 14 mins</span>
                                <span className="limit">{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                            {movie.desc}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )
            }
            
        </div>
        </Link>
    )
}

export default ListItem
