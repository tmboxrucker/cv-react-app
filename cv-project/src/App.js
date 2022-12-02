import React from "react";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    }
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
