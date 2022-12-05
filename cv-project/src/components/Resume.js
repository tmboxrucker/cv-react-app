import React from "react";
import ResumeLeft from "./ResumeLeft";
import ResumeRight from "./ResumeRight";

class Resume extends React.Component {  
    render() {
        return (
            <div className="resume">
                <ResumeLeft />
                <ResumeRight />
            </div>
        )
    }
}

export default Resume;