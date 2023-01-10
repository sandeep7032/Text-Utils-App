import "./Navbar.css";
import { useState } from "react";
const Navbar = (props) => {
	const [check, setCheck] = useState(false);
	const [darkMode, setDarkMode] = useState("");

	const darkThemeHandler = () => {
		if (!check) {
			setCheck(true);
			setDarkMode("dark");
		} else {
			setCheck(false);
			setDarkMode("");
		}
	};

	props.darkModeHandler(darkMode);

	return (
		<nav className={`nav ${darkMode}`}>
			<div className="home">
				<h4>TextUtils</h4>
				<h5>Home</h5>
			</div>
			<div className="toggle">
				<input onChange={darkThemeHandler} type="checkbox" />
				<h4>Enable Dark Mode</h4>
			</div>
		</nav>
	);
};
export default Navbar;