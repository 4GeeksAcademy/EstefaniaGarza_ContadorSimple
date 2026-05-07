import React from "react";

const SecondsCounter = (props) => {

    const time = props.seconds.toString().padStart(6,"0")
    

    return <div className="d-inline-flex align-items-center box my-2 p-2 gap-3 rounded-4 bg-secondary text-white">
        <i className="fa-regular fa-clock font-size"></i>

        {
            time.split("").map((num,i) =>{
                return (
                <div key ={i} className="box font-size p-2 rounded-4"> {num} </div>)
            })
        }
    </div>
}
export default SecondsCounter;