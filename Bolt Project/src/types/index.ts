export interface User {
  id: string;
  email: string;
  organization_id: string;
  role: 'admin' | 'user';
  created_at: string;
}

export interface Assessment {
  id: string;
  user_id: string;
  industry: string;
  business_function: string;
  competitive_factors: string[];
  target_audience: string;
  value_proposition: string;
  created_at: string;
}

export interface LearningPath {
  id: string;
  user_id: string;
  assessment_id: string;
  modules: LearningModule[];
  progress: number;
  status: 'not_started' | 'in_progress' | 'completed';
  created_at: string;
}

export interface LearningModule {
  id: string;
  title: string;
  type: 'application' | 'technical' | 'people_skills' | 'selling_skills' | 'industry';
  content: string;
  status: 'locked' | 'available' | 'completed';
  completion_percentage: number;
}