import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./testContext";

const TimeList=()=>{
    const context=useContext(TestContext);
    console.log(context);
    return (
        <div className="main_time_list">
            {context.timeArr.map((item)=>
            <Item key={Math.random()}>{item}</Item>
            )}
        </div>
    )
}
export default TimeList;