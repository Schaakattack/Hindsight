import { Outlet, Link } from "react-router-dom"

export default function WhatDoWe(){
    return (
        <section className="what-do-we pt-[65px] pb-[139px]">
            <div className="container mx-auto flex flex-col items-center gap-[23px] items-center">
                <h2>What is Hindsight?</h2>
                <p className="text-center">
                    Welcome to Hindsight, your go-to destination for blockchain data analysis. Our platform is designed to help you gain<br />
                    insights into token trends, price movements, and network activity from different blockchain networks in a visually<br />
                    appealing and easy-to-understand format.
                </p>
                <Link to="/roadmap" className="btn btn-secondary py-[15px] px-6 rounded-xl">View Detailed Roadmap</Link>
            </div>
        </section>
    )
}