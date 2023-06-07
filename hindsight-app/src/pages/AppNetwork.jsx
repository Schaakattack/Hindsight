import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import EthereumIcon from "../assets/dapp/explorer/ethereum.png";
import SolanaIcon from "../assets/dapp/explorer/solana.png";
import CosmosIcon from "../assets/dapp/explorer/cosmos.png";
import PolygonIcon from "../assets/dapp/explorer/polygon.png";
import BNBIcon from "../assets/dapp/explorer/bnb.png";
import AvalancheIcon from "../assets/dapp/explorer/avalanche.png";
import FantomIcon from "../assets/dapp/explorer/fantom.png";
import CardanoIcon from "../assets/dapp/explorer/cardano.png";

import ExplorerNetworkItem from "../components/items/ExplorerNetworkItem";

const AppNetwork = () => {
	const NETWORK_LIST = [
		{
			id: 0,
			icon: EthereumIcon,
			title: "Ethereum",
			enabled: true,
		},
		{
			id: 1,
			icon: SolanaIcon,
			title: "Solana",
			enabled: true,
		},
		{
			id: 2,
			icon: CosmosIcon,
			title: "Cosmos",
			enabled: false,
		},
		{
			id: 3,
			icon: PolygonIcon,
			title: "Polygon",
			enabled: false,
		},
		{
			id: 4,
			icon: BNBIcon,
			title: "BNB",
			enabled: false,
		},
		{
			id: 5,
			icon: AvalancheIcon,
			title: "Avalanche",
			enabled: false,
		},
		{
			id: 6,
			icon: FantomIcon,
			title: "Fantom",
			enabled: false,
		},
		{
			id: 7,
			icon: CardanoIcon,
			title: "Cardano",
			enabled: false,
		},
	];

	return (
		<>
			<Header isApp={true} />
			<section className="container mx-auto max-w-xl">
				<h1 className="text-light-grey-2 text-center text-xxx-large-f mt-20 mb-16">
					Select Network
				</h1>
				<ul className="accordion grid grid-cols-4 grid-rows-2 gap-6">
					{NETWORK_LIST.map((network, id) => (
						<ExplorerNetworkItem key={id} {...network} />
					))}
				</ul>
			</section>
			<Footer />
		</>
	);
};

export default AppNetwork;
