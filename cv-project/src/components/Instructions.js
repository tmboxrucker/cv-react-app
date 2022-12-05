import React from "react";

class Instructions extends React.Component {
    constructor() {
        super();
        this.state = {
            display: true
        }
    }
  
    render() {
        return (
            <div>
                {this.state.display && 
                    <div id="Instructions">
                        <div className="container">
                            <h2>Instructions</h2>
                            <ul>
                                <li>provide instructions 1</li>
                                <li>provide instructions 2</li>
                                <li>provide instructions 3</li>
                            </ul>
                            <button type="button">Try me!</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Instructions;