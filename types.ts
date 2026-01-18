
export interface PerformanceMetric {
  label: string;
  value: string;
  subtext: string;
  modalDescription?: string;
  modalDetails?: string[];
}

export interface CareerItem {
  id: number;
  title: string;
  description: string;
  points: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

export interface InterviewItem {
  id: number;
  name: string;
  role: string;
  context: string;
  quote: string;
  tags: string[];
}
