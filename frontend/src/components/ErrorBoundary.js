import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        toast.error('Something went wrong. Please try again.');
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-fallback">
                    <h1>Oops! Something went wrong.</h1>
                    <p>{this.state.error?.message || 'An unexpected error occurred.'}</p>
                    <Link to="/">Return to Home</Link>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;