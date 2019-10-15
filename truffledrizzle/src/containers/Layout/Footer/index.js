import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <footer>
        {this.state.date.getFullYear()}
      </footer>
    );
  }
}

export default Footer;
