import React, { Component } from "react";

import PageTemplate from "./components/PageTemplate";
import TodoInputContainer from "./containers/TodoInputContainer";
import TodoList from "./components/TodoList";

export class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInputContainer />
        <TodoList />
      </PageTemplate>
    );
  }
}

export default App;
