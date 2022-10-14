import Item from "./Item";

const TimeList = (props)=>{
    return(
        <div className="main_time_list">
            {props.children.map((item)=>(
                <Item key={Math.random()}>{item}</Item>
            ))}
        </div>
    )
}
export default TimeList;