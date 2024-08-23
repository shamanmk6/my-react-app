import React from "react";
import "./Tools.css";
import AddNew from "./AddNew";
class Tools extends React.Component {
  render() {
    const { children, onAction, labelValue, onAdd, onRefresh,onSearch} = this.props;

    const onlyChild = React.Children.only(children);

    const count = React.Children.count(onlyChild.props.children);

    

    return (
      <div className="list-tools">
        <div className="list-header">
          <div className="searchInput">
            <input placeholder="Search Month" onChange={(evnt)=>{onSearch(evnt)}} />
          </div>
          <div>
            <select value={labelValue} onChange={onAction} name="status">
              <option value="all">ALL</option>
              <option value="active">ACTIVE</option>
              <option value="non-active">NON-ACTIVE</option>
            </select>
            <AddNew onAdd={onAdd} />
            <button onClick={onRefresh}>Refresh</button>
          </div>
        </div>

        {children}

        <div className="list-footer">Total {count} Items</div>
      </div>
    );
  }
}

export default Tools;
