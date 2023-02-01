function MovieList(){
    const[movie, setMovie] = useState[1];

    const save = function(event){
        event.preventDefault();
        var name = event.target.name.value;
        setMovie([...movie, name])
    }
    return (<div>
        <form>
            Movie Name : <input type="text" name="name" />
            <button>SAVE</button>
        </form>
        <ol>
            {movie.map((item) => <li>{item}</li>)}
        </ol>
    </div>);
}

export default MovieList;