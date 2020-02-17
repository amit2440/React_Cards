import React from "react";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  static getDerivedStateFromError(error) {
    this.setState({ hasError: true });
  }

  // componentDidCatch(error, errorInfo) {}

  render() {
    const page = this.state.hasError ? (
      <p>Please contact administrator..!!!</p>
    ) : (
      this.props.children
    );
    return <div>{page}</div>;
  }
}
export default ErrorBoundary;
