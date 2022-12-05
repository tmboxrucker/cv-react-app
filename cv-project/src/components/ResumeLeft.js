import React from "react";

class ResumeLeft extends React.Component {  
    render() {
        return (
            <div className="resumeLeft">
                <Photo />
                <Contact />
                <Hobbies />
                <Skills />
            </div>
        )
    }
}

export default ResumeLeft;