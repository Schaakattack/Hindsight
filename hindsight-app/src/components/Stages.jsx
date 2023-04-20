import { Outlet, Link } from "react-router-dom"

import StageItem from "./StageItem"

import Stage1 from '../assets/roadmap/stage-1.svg'
import Stage2 from '../assets/roadmap/stage-2.svg'
import Stage3 from '../assets/roadmap/stage-3.svg'
import Stage4 from '../assets/roadmap/stage-4.svg'

const STAGE_LIST = [
    { text: 'Stage 1', icon: Stage1, desc: "Proof of concept with test data from from ERC and NFT contract address" },
    { text: 'Stage 2', icon: Stage2, desc: "Improve product, Connect with DAOs, Marketing and fixing bugs as needed." },
    { text: 'Stage 3', icon: Stage3, desc: "Add classifications for exchanges and other entities. Get feedback from participating communities and users" },
    { text: 'Stage 4', icon: Stage4, desc: "Full Launch for ETH and SOL networks. Making asked improvements and adding additional views" }
];

export default function Stages(){
    return (
        <section className="stage pt-[75px] pb-[100px] relative">
            <div className="container mx-auto flex justify-center flex-col gap-[63px]">
                <h2>Roadmap</h2>
                <div className="flex gap-[21px] text-center pb-[29px]">
                    {STAGE_LIST.map((item, idx) => (
                        <StageItem { ...item } />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link to='/roadmap' className="btn btn-md py-5 px-6 rounded-xl">View Detailed Roadmap</Link>
                </div>
            </div>
            <div className="stage-bg z-[-2] relative"></div>
        </section>
    )
}