import React from 'react';
import {ErrorScreen} from '../../views';
import RNRestart from 'react-native-restart';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: boolean;
  errorData: ErrorData | null;
}

interface ErrorData {
  reactErrorInfo: React.ErrorInfo;
  errorDescription?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: false,
    errorData: null,
  };

  static getDerivedStateFromError(error: React.ErrorInfo | Error): State {
    return {
      error: true,
      errorData: {
        reactErrorInfo: error as React.ErrorInfo,
        errorDescription: error as Error,
      },
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error: true,
      errorData: {reactErrorInfo: errorInfo, errorDescription: error},
    });
  }

  handleUserRestart = async () => {
    RNRestart.Restart();
  };

  render() {
    if (this.state.error) {
      return <ErrorScreen onRestart={this.handleUserRestart} />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
