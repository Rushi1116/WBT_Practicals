function MovieTable(props){
    return <div>
        <table border ="1">
            <thead>
            <tr>
                <th>Movie</th>
                <th>Actor</th>
                <th>Release Date</th>
                <th>Movie Type</th>
            </tr>
            </thead>
            <tbody>
                {props.movie.map((item) => {
                    return <tr>
                        <td>{item.name}</td>
                        <td>{item.actor}</td>
                        <td>{item.release}</td>
                        <td>{item.mtype}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default MovieTable;