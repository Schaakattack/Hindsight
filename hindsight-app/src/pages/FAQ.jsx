import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Accordion = ({ heading, content }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<li className="accordion-item list-none">
			<div
				className="accordion-toggle cursor-pointer flex flex-row justify-between bg-dark-grey-4 p-4 hover:bg-dark-grey-3"
				onClick={() => setIsActive(!isActive)}
			>
				<h3 className="m-0">{heading}</h3>
				<span>{isActive ? "-" : "+"}</span>
			</div>
			{isActive && <div className="accordion-content bg-dark-grey-2 p-4">{content}</div>}
		</li>
	);
};

const FAQ = () => {
	const accordionData = [
		{
			heading: "Will my license be automatically renewed?",
			content:
				"Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.",
		},
		{
			heading: "Can I upgrade my license?",
			content:
				"Quos quam ipsam consequatur consequatur et distinctio. Facere vel ut dolorem. Quam quo neque quos voluptates cupiditate sit quae.",
		},
		{
			heading: "Do you provide email support if I need help?",
			content:
				"Vel et quam reprehenderit velit. Possimus accusamus eos esse vero quo modi voluptas hic. Quia illo quisquam vel quis qui. Autem labore aut incidunt. Eius non voluptatem et laboriosam in.",
		},
	];
	return (
		<>
			<Header />
			<section>
				<ul className="accordion max-w-3xl">
					{accordionData.map(({ heading, content }) => (
						<Accordion heading={heading} content={content} />
					))}
				</ul>
			</section>
			<Footer />
		</>
	);
};

export default FAQ;
