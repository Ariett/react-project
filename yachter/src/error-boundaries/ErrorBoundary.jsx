import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Path from '../paths';
import NotFound from '../components/not-found/NotFound';
import Navigation from '../components/navigation/Navigation';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true,
        }
    }

    render() {
        if (this.state.hasError) {
            this.setState({
                hasError: false,
            });
            return (
                <Navigate to={Path.NotFound} />
            );
        }

        return this.props.children;
    }
}
