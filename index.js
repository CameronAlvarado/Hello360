import React from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";

export default class Hello360 extends React.Component {
  // Our component will keep track of this state
  state = {
    count: 0,
    active: false,
  };

  // This method increments our count, triggering a re-render
  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  highlightBox = () => {
    this.setState({ active: !this.state.active });
    console.log(this.state.active);
  };

  // // Once the component mounts, run the increment method every second
  // componentDidMount() {
  //   setInterval(this._incrementCount, 1000);
  // }

  render() {
    return (
      <View style={styles.panel}>
        <VrButton
          onEnter={this.highlightBox}
          onExit={this.highlightBox}
          onClick={this._incrementCount}
          style={
            this.state.active ? styles.activeGreetingBox : styles.greetingBox
          }
        >
          <Text style={styles.greeting}>{`Count: ${this.state.count}`}</Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  activeGreetingBox: {
    padding: 20,
    backgroundColor: "#4e5457",
    borderColor: "white",
    borderWidth: 2,
  },
});

AppRegistry.registerComponent("Hello360", () => Hello360);
