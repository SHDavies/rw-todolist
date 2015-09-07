var React = require('react');
var AddItem = require('./AddItem.js');
var List = require('./List.js');

var ListContainer = React.createClass({
  getInitialState: function() {
    return {list: []};
  },
  handleAddItem: function(item) {
    this.setState({
      list: this.state.list.concat([item])
    });
  },
  handleRemoveItem: function(index) {
    var oldList = this.state.list;
    oldList.splice(index, 1);
    this.setState({
      list: oldList
    });
  },
  render: function() {
    return(
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center">Todo List</h3>
          <AddItem add={this.handleAddItem} />
          <List items={this.state.list} remove={this.handleRemoveItem} />
        </div>
      </div>
    );
  }
});

module.exports = ListContainer;
