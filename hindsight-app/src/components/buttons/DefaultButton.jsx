import { Link } from "react-router-dom";

const DefaultButton = ({ children, to, icon, className, addClass }) => {
	let customClassName = "";

	if (className == "btn-default") {
		customClassName =
			"font-brand-medium font-medium text-sm text-btn-default-color bg-transparent rounded-btn focus:bg-btn-default-pressed-bg-color focus:bg-none disabled:bg-btn-default-disabled-bg-color disabled:text-btn-disabled-color btn-default";
	} else if (className == "btn-md") {
		customClassName =
			"font-brand-bold font-bold text-base text-btn-default-color bg-primary-brand-3 py-4.3 px-6 hover:text-white hover:no-underline rounded-btn hover:bg-btn-default-hover-bg-color hover:bg-none focus:bg-btn-default-pressed-bg-color focus:bg-none disabled:bg-btn-default-disabled-bg-color disabled:text-btn-disabled-color btn-default";
	} else if (className == "btn-lg") {
		customClassName =
			"font-brand-bold font-bold text-xx-medium text-btn-default-color bg-primary-brand-3 py-5 px-6 rounded-btn hover:bg-btn-default-hover-bg-color hover:bg-none focus:bg-btn-default-pressed-bg-color focus:bg-none disabled:bg-btn-default-disabled-bg-color disabled:text-btn-disabled-color btn-default";
	} else if (className == "btn-sm") {
		customClassName =
			"font-medium text-xx-small text-btn-default-color bg-primary-brand-3 py-2.5 px-5 min-w-md hover:text-white hover:no-underline rounded-btn hover:bg-btn-default-hover-bg-color hover:bg-none focus:bg-btn-default-pressed-bg-color focus:bg-none disabled:bg-btn-default-disabled-bg-color disabled:text-btn-disabled-color btn-default";
	} else if (className == "btn-outline") {
		customClassName =
			"font-brand-bold text-base text-btn-default-color border border-btn-outline-border-color bg-primary-brand-3 bg-clip-text text-fill-transparent py-3.5 px-6 rounded-btn relative hover:after:block hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-btn hover:after:bg-btn-outline-bg hover:after:absolute disabled:bg-btn-default-disabled-bg-color disabled:after:bg-transparent disabled:text-btn-disabled-color btn-default";
	} else if (className == "btn-outline-md") {
		customClassName =
			"font-medium text-base text-btn-default-color border border-btn-outline-border-color bg-primary-brand-3 bg-clip-text text-fill-transparent py-2.2 px-5 rounded-btn relative hover:after:block hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-btn hover:after:bg-btn-outline-bg hover:after:absolute disabled:bg-btn-default-disabled-bg-color disabled:after:bg-transparent disabled:text-btn-disabled-color btn-default";
	} else if (className == "btn-outline-sm") {
		customClassName =
			"font-bold text-x-small text-yellow-2 border border-yellow-2 min-w-xxl py-2 px-6.5 rounded-btn relative hover:after:block hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-btn hover:after:bg-btn-outline-bg hover:after:absolute disabled:bg-btn-default-disabled-bg-color disabled:after:bg-transparent disabled:text-btn-disabled-color btn-default";
	} else if (className == "btn-outline-xs") {
		customClassName =
			"font-medium text-xx-small text-yellow-2 border border-yellow-2 py-2.2 min-w-md rounded-btn relative hover:text-yellow-1 hover:no-underline hover:after:block hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:rounded-btn hover:after:bg-btn-outline-bg hover:after:absolute disabled:bg-btn-default-disabled-bg-color disabled:after:bg-transparent disabled:text-btn-disabled-color btn-default";
	}

	return (
		<Link
			to={to}
			className={`flex justify-center gap-2 ${customClassName} ${
				addClass == undefined ? "" : addClass
			}`}
		>
			{icon && <img src={icon} className="btn-icon" alt="" />} {children}
		</Link>
	);
};

export default DefaultButton;
