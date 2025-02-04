import { Component, createRef } from "react";
import * as ReactLibrary from "react";

class App extends ReactLibrary.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      reload: 0,
      viewportWidth: window.innerWidth,
    };
    this.divRef = createRef();
  }

  componentDidMount() {
    console.log("did mount");
    // Añado un event listener tradicional de javascript y le paso el evento handler
    window.addEventListener("resize", this.updateViewportWidth);
    this.fetchApi();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.reload !== nextState.reload) {
      console.log("should update", this.state.reload, nextState.reload);
      return true;
    } else {
      return false;
    }
  }

  componentWillUnmount() {
    console.log("did unmount");
    window.removeEventListener("resize", this.updateViewportWidth);
  }

  // Event handler
  updateViewportWidth = () => {
    console.log("updateViewportWidth");
    const newWidth = window.innerWidth;
    const previousWidth = this.state.viewportWidth;
    const diffWidth = Math.abs(previousWidth - newWidth);
    console.log("diffWidth", diffWidth);
    if (diffWidth > 100) {
      console.log("more than 100", diffWidth);
      this.setState((prevState) => ({ reload: prevState.reload + 1 }));
      this.setState({ viewportWidth: newWidth });
      this.fetchApi();
    }
  };

  fetchApi = async () => {
    console.log("FETCH");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    this.setState({ data });
    console.log(data);
  };

  render() {
    return (
      <>
        <div ref={this.divRef}>
          <h1>Consultas 04-02</h1>
          <h2>{this.state.viewportWidth}</h2>
          <ul>
            {this.state.data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
