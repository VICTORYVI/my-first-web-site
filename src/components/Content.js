import { Component } from "react";

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        
        <p><img src={this.props.img} alt={this.props.title}></img></p>
      </article>
    );
  }
}

export default Content;