import React from "react";

import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      acitveState: "all",
      message: "",
      fileteredData: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("/data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          data: data,
          fileteredData: data,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message !== this.state.message)
      this.setState({
        message: "message",
      });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onListChange = (evnt) => {
    console.log(evnt.target.value);
    const value = evnt.target.value;

    this.setState({
      acitveState: value,
    });
  };
  handleDelete = (item) => {
    console.log("delete");
    const newList = this.state.data.filter((element) => element.id !== item.id);

    this.setState({
      data: newList,
      fileteredData: newList,
    });
  };

  handleLabelClick = (arg) => {
    this.setState({
      acitveState: arg,
    });
  };

  handleRefresh = () => {
    console.log("HandleRfresh");

    fetch("/data2.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  };
  handleAdd = (details) => {
    const data = this.state.data;

    const newData = {
      id: data.length + 1,
      title: details.title,
      descr: details.descr,
      isActive: details.isActive,
    };

    this.setState((prevState) => {
      return {
        data: [...prevState.data, newData],
        fileteredData:[...prevState.fileteredData,newData]
      };
    });
  };

  handleSearch = (evnt) => {
    const value = evnt.target.value;
    const fileteredData = this.state.data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({
      fileteredData: fileteredData,
    });
  };

  render() {
    const {acitveState ,fileteredData} = this.state;
    const newList = fileteredData.filter((item) => {
      if (acitveState === "all") {
        return true;
      }
      if (acitveState === "active") {
        return item.isActive === true;
      }
      if (acitveState === "non-active") {
        return item.isActive === false;
      }
      return false;
    });

    return (
      <Tools
        labelValue={acitveState}
        onAction={this.onListChange}
        onRefresh={this.handleRefresh}
        onAdd={this.handleAdd}
        onSearch={this.handleSearch}
      >
        <SimpleList
          onLabelClick={this.handleLabelClick}
          data={newList}
          onAction={this.handleDelete}
        />
      </Tools>
    );
  }
}

export default HomePage;
