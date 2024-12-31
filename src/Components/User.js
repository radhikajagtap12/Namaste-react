const User = (props) => {
    const { name, location, role } = props;
	return (
		<div className="userCard">
			<h1>{name}</h1>
			<h3>{location}</h3>
			<h3>{role}</h3>
		</div>
	);
};

export default User;
