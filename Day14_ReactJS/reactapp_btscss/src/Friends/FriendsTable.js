function FriendsTable(props) {
	return (
		<div>
			<table className="table table-hover table-striped">
				<thead className="table-secondary">
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Salary</th>
						<th>Gender</th>
						<th>Language</th>
					</tr>
				</thead>
				<tbody>
					{props.friends.map((item) => {
						return (
							<tr key={item.name}>
								<td>{item.name}</td>
								<td>{item.age}</td>
								<td>{item.salary}</td>
								<td>{item.gender}</td>
								<td>{item.lang.join(" , ")}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default FriendsTable;
