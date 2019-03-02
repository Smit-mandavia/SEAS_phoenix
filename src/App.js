import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, List } from "semantic-ui-react";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";

// no change yet
class App extends Component {
  state = { toAdd: null, events: [], ngos: [] };

  renderList = listData => (
    <List>
      {listData.map(dataItem => (
        <List.Item>{dataItem}</List.Item>
      ))}
    </List>
  );

  render() {
    return (
      <div className="App" style={{ padding: "10px" }}>
        <Button onClick={() => this.setState({ toAdd: "event" })}>
          Add Event
        </Button>
        <Button onClick={() => this.setState({ toAdd: "ngo" })}>
          Add NGO's
        </Button>
        {this.state.toAdd === "event" && (
          <div style={{ paddingTop: "5px" }}>
            <Input
              onChange={e => {
                this._inputValue = e.target.value;
              }}
            />
            <Button
              onClick={() => {
                if (this._inputValue)
                  this.setState({
                    events: [...this.state.events, this._inputValue],
                    toAdd: null
                  });
              }}
            >
              Add
            </Button>
          </div>
        )}
        {this.state.toAdd === "ngo" && (
          <div style={{ paddingTop: "5px" }}>
            <Input
              onChange={e => {
                this._inputValue = e.target.value;
              }}
            />
            <Button
              onClick={() => {
                if (this._inputValue)
                  this.setState({
                    ngos: [...this.state.ngos, this._inputValue],
                    toAdd: null
                  });
              }}
            >
              Add
            </Button>
          </div>
        )}
        {this.state.events.length > 0 ? (
          <div style={{ paddingTop: "5px" }}>
            <div style={{ padding: "5px", fontSize: "20px", fontWeight: 600 }}>
              Events
            </div>
            <div>{this.renderList(this.state.events)}</div>
          </div>
        ) : null}
        {this.state.ngos.length > 0 ? (
          <div style={{ paddingTop: "5px" }}>
            <div style={{ padding: "5px", fontSize: "20px", fontWeight: 600 }}>
              NGOs
            </div>
            <div>{this.renderList(this.state.ngos)}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
