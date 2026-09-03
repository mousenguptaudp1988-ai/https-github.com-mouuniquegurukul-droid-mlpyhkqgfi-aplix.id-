export type FilterCategory = 'সব' | 'AI Graphic Design' | 'AI Video' | 'Website' | 'Digital Marketing';

export interface ProjectArtwork {
  type: 'vedix' | 'nivea' | 'mamaearth' | 'custom';
  variant?: 'master' | 'detail' | 'typography' | 'carton' | 'tube';
  title: string;
  subtitle?: string;
  badge?: string;
  aspectRatio: 'portrait' | 'square' | 'landscape';
  imageSrc?: string;
}

export interface GalleryItem {
  id?: string;
  title: string;
  caption: string;
  type: 'vedix' | 'nivea' | 'mamaearth' | 'custom';
  variant?: 'master' | 'detail' | 'typography' | 'carton' | 'tube';
  aspectRatio: 'portrait' | 'square' | 'landscape';
  imageSrc?: string;
}

export interface WorkflowStep {
  phase: string;
  title: string;
  description: string;
  type: 'brief' | 'strategy' | 'creation' | 'review' | 'delivery';
}

export interface CaseStudyData {
  problem: string; // সমস্যা
  strategy: string; // Strategy
  creation: string; // Creation
  delivery: string; // Delivery
  result: string; // ফলাফল
  clientOrIndustry?: string;
  toolsUsed: string[];
  deliverables: string[];
  galleryItems: GalleryItem[];
}

export interface ProjectPreviewItem {
  id: string;
  title: string;
  label: string;
  variant: 'master' | 'detail' | 'typography' | 'carton' | 'tube';
  imageSrc?: string;
}

export interface Project {
  id: string;
  code: string;
  title: string;
  category: 'AI Graphic Design' | 'AI Video' | 'Website' | 'Digital Marketing';
  projectType: string;
  description: string;
  goal: string;
  scope: string;
  focus: string[];
  artwork: ProjectArtwork;
  coverImage?: string;
  previewItems?: ProjectPreviewItem[];
  tools: string[];
  deliverables: string[];
  caseStudy?: CaseStudyData;
  clientOrIndustry?: string;
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  bengaliTitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  iconName: string;
}

export interface ToolCluster {
  id: string;
  category: string;
  bengaliTitle: string;
  tools: {
    name: string;
    level?: string;
    description: string;
  }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  bengaliTitle: string;
  description: string;
  keyOutputs: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
