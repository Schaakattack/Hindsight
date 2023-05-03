import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerImg01 from "@/assets/banner-img01.png";
import BannerImg02 from "@/assets/banner-img02.png";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Banner from "@/components/sections/Banner";
import WhatDoWe from "@/components/sections/WhatDoWe";
import Features from "@/components/sections/Features";
import Roadmap from "@/components/sections/Stages";
import Particle from "@/components/Particle";

const BANNER_LIST = [
	{
		title: "Blockchain data <br /> visualization<br> made easy.",
		desc: "Gain insights into token trends and network activity from different blockchain networks in a visually appealing and easy-to-understand format.",
		img: BannerImg02,
	},
];

function Home() {

	return (
		<>
			<Particle/>
			<Header />
			{BANNER_LIST.map((item, idx) => (
				<Banner {...item} key={idx} />
			))}
			<WhatDoWe />
			<Features />
			<Roadmap />
			<Footer />
		</>
	);
}

export default Home;