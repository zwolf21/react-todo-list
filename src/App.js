import React, { Component } from "react";

import PageTemplate from "./components/PageTemplate";
import TodoInput from "./components/TodoInput";

export class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInput />
      </PageTemplate>
    );
  }
}

export default App;
