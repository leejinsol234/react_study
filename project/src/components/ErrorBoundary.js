import { Component } from 'react';

class ErrorBoundary extends Component() {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    console.log('error:', error);
    console.log('info', info);
    this.setState({ error: true });
  }
  render() {
    return this.state.error ? <div>에러발생</div> : this.props.children;
  }
}

export default ErrorBoundary;
