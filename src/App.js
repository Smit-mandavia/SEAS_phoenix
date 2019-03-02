import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, List, Grid, Select } from "semantic-ui-react";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";

const users = ["Anuj", "Smit", "Shaunak", "Akash"];
// no change yet
class App extends Component {
  state = { toAdd: null, events: [], ngos: [], transactionMode: false };

  renderList = listData => (
    <List>
      {listData.map(dataItem => (
        <List.Item key={dataItem}>{dataItem}</List.Item>
      ))}
    </List>
  );

  renderTransaction = () => {
    return (
      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column>
            <Select
              placeholder="Select user"
              options={users.map(user => {
                return { value: user, text: user };
              })}
            />
          </Grid.Column>
          <Grid.Column>
            <Select
              placeholder="Select event"
              options={this.state.events.map(user => {
                return { value: user, text: user };
              })}
            />
          </Grid.Column>
          <Grid.Column>
            <Input type="number" />
          </Grid.Column>
          <Grid.Column>
            <Button onClick={this.handleTransactionSave} primary>
              Save
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };

  handleTransactionSave = amtValue => {
    this.setState({ transactionMode: false });
  };

  render() {
    return (
      <div className="App" style={{ padding: "10px" }}>
        <Button onClick={() => this.setState({ toAdd: "event" })}>
          Add Event
        </Button>
        <Button onClick={() => this.setState({ toAdd: "ngo" })}>
          Add NGO's
        </Button>
        <Button
          primary
          onClick={() => this.setState({ transactionMode: true })}
        >
          Add Transaction
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
        {this.state.transactionMode && (
          <div style={{ padding: "10px" }}>{this.renderTransaction()}</div>
        )}
      </div>
    );
  }
}

export default App;
