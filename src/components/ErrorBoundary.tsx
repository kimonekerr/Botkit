import React, { Component, ErrorInfo, ReactNode } from 'react';
import GlowingOrb from './ui/GlowingOrb';
import GridPattern from './ui/GridPattern';
import FloatingParticles from './ui/FloatingParticles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center justify-center">
          <GridPattern />
          <FloatingParticles />
          <div className="relative z-10 text-center px-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <GlowingOrb />
            </div>
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                AI System Recalibrating
              </h2>
              <p className="text-gray-300 mb-6">
                Our neural networks encountered an unexpected pattern. 
                The system is self-healing...
              </p>
              <div className="space-y-2 text-left bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                <p className="text-red-400">{this.state.error?.name}</p>
                <p className="text-gray-400">{this.state.error?.message}</p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg
                         transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Reinitialize System</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}