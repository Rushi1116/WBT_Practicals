import {useState} from "react"
import MovieTable from "./MovieTable.js";

function Movie(){
    const [movie, setMovie] = useState([]);
    const save = function(event){
        event.preventDefault()
        var name = event.target.name.value;
        var actor = event.target.actor.value;
        var release = event.target.release.value;
        var mtype = event.target.mtype.value;
        var obj = {
            name : name,
            actor : actor,
            release : release,
            mtype : mtype
        }
        setMovie([...movie, obj])
    }
    return (<div>
        <form onSubmit={save}>
            Enter Movie Name : <input type="text" name="name" /><br/>
            Enter Actor : <input type="text" name="actor" /><br/>
            Enter Release Date : <input type="date" name="release" /><br/>
            Enter Movie Type : <input type="radio" name="mtype" value = "2d" />2D
            <input type="radio" name="mtype" value = "3d" />3D
            <input type="radio" name="mtype" value = "imax" />IMAX<br/>
            <button>SAVE</button>
        </form>
        <MovieTable movie = {movie}/>
    </div>);
}

export default Movie;