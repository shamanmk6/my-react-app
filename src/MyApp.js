import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DummyPage from "./pages/DummyPage";
import Usage from "./pages/Usage";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "home",
    };
  }

  handleMenuSelect = (value) => {
    console.log(value);

    this.setState({
      currentSelected: value,
    });
  };

  getPage = () => {
    const { currentSelected } = this.state;
    console.log("selcetd is", currentSelected);
    switch (currentSelected) {
      case "home":
        return <HomePage />;

      case "usage":
        return <Usage  key="usage" name="usage" />;

      case "settings":
         return <DummyPage key="settings" name="settings" />;
        

      case "logout":
        return <DummyPage key="logout" name="logout" />;
      

      default:
        break;
    }
  };

  render() {
    return (
      <div className="app">
        <Header onMenuSelect={this.handleMenuSelect} />
        <div className="app-body">{this.getPage()}</div>

        <hr />
        <Footer />
      </div>
    );
  }
}

export default MyApp;
