import React, { Component } from "react";

import PageTemplate from "./components/PageTemplate";
import TodoInput from "./components/TodoInput";
import TodoInputContainer from "./containers/TodoInputContainer";

export class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInputContainer />
      </PageTemplate>
    );
  }
}

export default App;
