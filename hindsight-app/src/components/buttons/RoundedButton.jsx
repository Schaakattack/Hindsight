import { Link } from "react-router-dom";

const RoundedButton = ({ children, to, icon, className, addClass }) => {
	let customClassName = `${className} font-medium text-xx-small text-white border border-white py-2.2 min-w-md rounded-btn relative hover:after:block hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-btn hover:after:bg-btn-outline-bg hover:after:absolute disabled:bg-btn-default-disabled-bg-color disabled:after:bg-transparent disabled:text-btn-disabled-color btn-default`;

	return (
		<Link
			to={to}
			className={`flex justify-center ${customClassName} ${addClass}`}
		>
			{icon && <img src={icon} className="btn-icon" alt="" />} {children}
		</Link>
	);
};

export default RoundedButton;
