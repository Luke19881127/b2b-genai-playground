import React, { useState } from 'react';
import { ChevronRight, Building2, Users, Trophy, Target, Lightbulb } from 'lucide-react';

interface AssessmentFormProps {
  onSubmit: (data: any) => void;
}

export const AssessmentForm: React.FC<AssessmentFormProps> = ({ onSubmit }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    industry: '',
    business_function: '',
    competitive_factors: [],
    target_audience: '',
    value_proposition: '',
  });

  const questions = [
    {
      title: 'Industry Identification',
      description: 'What industry does your business operate in?',
      field: 'industry',
      icon: Building2,
    },
    {
      title: 'Business Function',
      description: 'Describe your primary business function',
      field: 'business_function',
      icon: Users,
    },
    {
      title: 'Competitive Advantages',
      description: 'What are your key competitive differentiators?',
      field: 'competitive_factors',
      icon: Trophy,
    },
    {
      title: 'Target Audience',
      description: 'Define your ideal customer profile',
      field: 'target_audience',
      icon: Target,
    },
    {
      title: 'Value Proposition',
      description: 'What unique value do you provide to customers?',
      field: 'value_proposition',
      icon: Lightbulb,
    },
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onSubmit(formData);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const currentQuestion = questions[step];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          {React.createElement(currentQuestion.icon, { 
            className: "w-6 h-6 text-blue-600 mr-2" 
          })}
          <h2 className="text-2xl font-bold text-gray-800">
            {currentQuestion.title}
          </h2>
        </div>
        <p className="text-gray-600">{currentQuestion.description}</p>
      </div>

      <div className="mb-6">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          value={formData[currentQuestion.field as keyof typeof formData]}
          onChange={(e) => updateFormData(currentQuestion.field, e.target.value)}
          placeholder="Enter your response..."
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Question {step + 1} of {questions.length}
        </div>
        <button
          onClick={handleNext}
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {step === questions.length - 1 ? 'Submit' : 'Next'}
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};