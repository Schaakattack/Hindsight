const Breadcrumb = ()=>{
    return (
        <>
            <div className="container mx-auto mt-20">
                <div className="text-small flex gap-[10px]">
                    <span className="font-brand-regular text-dark-grey-1">Explorer</span>
                    <span className="font-brand-regular text-light-grey-2">&gt;</span>
                    <span className="font-brand-regular text-light-grey-0">Ethereum</span>
                    <span className="font-brand-regular text-light-grey-0">Network</span>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb;