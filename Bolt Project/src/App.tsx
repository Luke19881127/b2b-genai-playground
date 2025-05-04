import React from 'react';
import { AssessmentForm } from './components/AssessmentForm';
import { GraduationCap } from 'lucide-react';

function App() {
  const handleAssessmentSubmit = (data: any) => {
    console.log('Assessment submitted:', data);
    // TODO: Submit to Supabase
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">
              AI Sales Training Platform
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Your Personalized Training Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Let's start by understanding your business context and needs through a
            brief assessment. This will help us create a customized training program
            for you.
          </p>
        </div>

        <AssessmentForm onSubmit={handleAssessmentSubmit} />
      </main>
    </div>
  );
}

export default App;