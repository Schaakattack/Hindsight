const StageItem = ({ text, icon, desc }) => {
    return (
        <div className="stage-item rounded-xl">
            <div className="stage-item__content rounded-xl px-[26px] pt-[52px] flex flex-col gap-[15px] items-center">
                <img src={ icon } className="icon" />
                <h3>{ text }</h3>
                <p>{ desc }</p>
            </div>
        </div>
    )
}

export default StageItem;