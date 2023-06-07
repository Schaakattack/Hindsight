import DefaultButton from "../buttons/DefaultButton";
import Tick from "../../assets/pricing/tick.png";
import Cross from "../../assets/pricing/cross.png";
const PlanItem = ()=>{
    return (
        <div className="gap-8 flex flex-col text-center place-items-center">
            <span className="py-[10px] text-light-grey-3">30 Days Trial</span>
            <div className="p-[8px] w-fit rounded border rounded-3 border-dark-grey-4">
                <img src={Tick}></img>
            </div>
            <div className="p-[8px] w-fit rounded border rounded-3 border-dark-grey-4">
                <img src={Tick}></img>
            </div>
            <div className="p-[8px] w-fit rounded border rounded-3 border-dark-grey-4">
                <img src={Tick}></img>
            </div>
            <div className="p-[8px] w-fit rounded border rounded-3 border-dark-grey-4">
                <img src={Tick}></img>
            </div>
            <div className="p-[8px] w-fit rounded border rounded-3 border-dark-grey-4">
                <img src={Tick}></img>
            </div>
            <div className="py-[10px] w-fit text-light-grey-3">
                <span>1 Team Members</span>
            </div>
            <div className="p-[8px] w-fit rounded border rounded-3 border-dark-grey-4">
                <img src={Tick}></img>
            </div>
            <DefaultButton className="btn-sm" addClass="w-fit" to="/premium"> Choose Plan </DefaultButton>
        </div>
    )
}

export default PlanItem;