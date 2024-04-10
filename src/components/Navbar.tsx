const Navbar = () => {
	const handleNavigation = (url: string) => {
		window.location.href = url
	}
	return (
		<nav>
			<ul>
				<li
					onClick={() => handleNavigation('/')}
					onKeyUp={() => handleNavigation('/')}
					onKeyDown={() => handleNavigation('/')}
				>
					Home
				</li>
				<li
					onClick={() => handleNavigation('/about')}
					onKeyUp={() => handleNavigation('/about')}
					onKeyDown={() => handleNavigation('/about')}
				>
					About
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
