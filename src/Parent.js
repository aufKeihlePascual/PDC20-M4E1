import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";

function Parent() {
    return (
        <div className="container">
            <div>
                <h1 className="Parent-Header">HTML Website Template</h1>
                <ChildTwo/>
                <ChildOne/>
                <ChildThree/>
            </div>
            
        </div>
    );
}

export default Parent;