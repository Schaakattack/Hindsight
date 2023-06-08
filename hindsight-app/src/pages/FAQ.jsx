import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const Accordion = ({ heading, content }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<li className="accordion-item list-none">
			<div
				className={`accordion-toggle cursor-pointer flex flex-row justify-between bg-dark-grey-4 p-4 rounded-tl-md rounded-tr-md ${!isActive? 'rounded-bl-md rounded-br-md':''}`}
				onClick={() => setIsActive(!isActive)}
			>
				<h3 className="m-0 text-light-grey-2 text-x-medium font-brand-regular">{heading}</h3>
				<span className="text-yellow-2 text-x-medium font-brand-regular">
                    {isActive ? "-" : "+"}
                </span>
			</div>
			{isActive && <div className="accordion-content font-brand-regular bg-dark-grey-4 p-4 rounded-bl-md rounded-br-md text-light-grey-2">{content}</div>}
		</li>
	);
};

const FAQ = () => {
	const accordionData = [
		{
            id: 1,
			heading: "What is Hindsight?",
			content: "Hindsight is a blockchain visualizer. We take data from the blockchain and portray it in an easy-to-understand format. Hindsight is focused on helping users avoid rug pulls and other malicious activity.",
		},
        {
            id: 2,
			heading: "Can we suggest or add a new blockchain?",
			content: "Users can suggest additional networks by joining our Discord. As we add new networks we will take votes and get user input on which to implement and prioritize.",
		},
        {
            id: 3,
			heading: "How frequently is the data on Highsight update?",
			content: "Data is updated each time you retrieve the visual. Therefore, refreshing the page will not refresh the data, you will need to search the token or asset again.",
		},
        {
            id: 4,
			heading: "Can I filter and sort the data I want to see on hindsight?",
			content: "Users will be able to filter the asset types (NFT or tokens) when viewing a wallet and shortly after will be able to exclude specific tokens or collections. Users will also be able to filter out shape types (ICO, exchange, wallets, staking or mining) they do not wish to see in that ecosystem. (This can be expanded to the wallet side, based on user feedback)",
		},
        {
            id: 5,
			heading: "What blockchain does Hindsight support?",
			content: "Currently, we only support the Solana and Ethereum networks. One of Cosmos, Polygon or Avalanche will be the next supported.",
		},
        {
            id: 6,
			heading: "How does Hindsight work?",
			content: "In short, the user can enter the asset or wallet adress they would like to view. HindSight then fetches the transaction history (this is why there is sometime a delay), categorizes and processes it, and then displays the information in a visually pleasing way. Thus, allowing users to make sense of, and use, the information in the best possible.",
		},
        {
            id: 7,
			heading: "What is shape mode?",
			content: "Shape mode is a birds-eye view of an NFT collect or token ecosystem that should allow users to see centralization points and to be able to see how central or centralized a project really is.",
		},
        {
            id: 8,
			heading: "How can i get in touch with Hindsight team for enquiries and feedback?",
			content: "You can reach us at our Discord (https://discord.gg/Ej9YYjG6) or by emailing us at ContactUs@hindsight.vip",
		},
	];
	return (
		<>
			<Header />
			<section className="container mx-auto">
                <h1 className="text-light-grey-2 text-center text-xxx-large-f mt-20 mb-16">Frequently Asked Questions</h1>
				<ul className="accordion grid grid-cols-2 gap-6">
					{accordionData.map(({id, heading, content }) => (
						<Accordion heading={heading} content={content} className="rounded-md bg-dark-grey-4 " key={id} />
					))}
				</ul>
			</section>
			<Footer />
		</>
	);
};

export default FAQ;
