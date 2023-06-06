const HowItWorks = ()=>{
    return (
        <section className="relative z-10 bg-dark-grey-4 mb-40">
            <div className="container max-w-xl mx-auto py-10">
                <div className="text-xxx-large-x text-light-grey-3 text-center mb-12">How it works</div>
                <div className="grid grid-cols-4 gap-28 place-items-center">
                    <div className="text-center flex flex-col gap-4">
                        <span className="text-light-grey-4 text-large-semi-bold">Step 1</span>
                        <span className="text-light-grey-4">Click on the launch app button to go to the Hindsight Scanner page</span>
                    </div>
                    <div className="text-center flex flex-col gap-4">
                        <span className="text-light-grey-4 text-large-semi-bold">Step 2</span>
                        <span className="text-light-grey-4">Select a network you want to explore from the list of supported networks</span>
                    </div>
                    <div className="text-center flex flex-col gap-4">
                        <span className="text-light-grey-4 text-large-semi-bold">Step 3</span>
                        <span className="text-light-grey-4">Select a token from the selected network</span>
                    </div>
                    <div className="text-center flex flex-col gap-4">
                        <span className="text-light-grey-4 text-large-semi-bold">Step 4</span>
                        <span className="text-light-grey-4">Explore wallets, view connections, travel in time</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HowItWorks;