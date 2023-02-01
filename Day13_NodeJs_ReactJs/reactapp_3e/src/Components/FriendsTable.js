function FriendsTable(props){
    return <div>
        <table border ="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Gender</th>
            </tr>
            </thead>
            <tbody>
                {props.friends.map((item) => {
                    return <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.salary}</td>
                        <td>{item.gender}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default FriendsTable;