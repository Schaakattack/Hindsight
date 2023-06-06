import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerImg01 from "@/assets/banner-img01.png";
import BannerImg02 from "@/assets/banner-img02.png";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Banner from "@/components/sections/Banner";
import SubscriptionInfo from "@/components/sections/SubscriptionInfo";
import WhatDoWe from "@/components/sections/WhatDoWe";
import Features from "@/components/sections/Features";
import Roadmap from "@/components/sections/Stages";
import Particle from "@/components/Particle";
import HowItWorks from "../components/sections/HowItWorks";
import Plans from "../components/sections/Plans";

const BANNER_LIST = [
	{
		title: "Blockchain data <br /> visualization made easy.",
		desc: "Visualize trends in blockchain tokens and network activity easily.",
		img: BannerImg02,
	},
];

function Home() {

	return (
		<>
			{/* <Particle/> */}
			<Header />
			{BANNER_LIST.map((item, idx) => (
				<Banner {...item} key={idx} />
			))}
			<SubscriptionInfo />
			<WhatDoWe />
			<HowItWorks/>
			<Features />
			<Plans/>
			<Footer />
		</>
	);
}

export default Home;