import React from 'react';
import TrendingItem from './TrendingItem.jsx';

class Trending extends React.Component {
  constructor(props) {
    super(props);

    this.changeClickState = this.changeClickState.bind(this);
  }

  changeClickState() {
    this.props.loading(this.state.clicked);
  }


  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          {this.props.clicked ? (<img className="img-center" src="https://s3-us-west-1.amazonaws.com/zollstorage/ticket-loader-lowRes.gif"/>)
          :
          (<h1>What's Hot</h1>)
        }
        </div>
        <div id="trending" className="animate slideInUp row list-group">
           {this.props.trending.map( (item, key) =>
            <TrendingItem key={key} item={item} search={this.props.search}/>
           )}
        </div>
      </div>
    )

    {this.changeClickState(false)};

  }
}


export default Trending;