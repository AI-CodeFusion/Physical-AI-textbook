/**
 * API Contract Interfaces for Physical AI & Humanoid Robotics Textbook
 * Based on textbook-api-contracts.md specifications
 */

import { Module, Part, Chapter, Lesson, Assessment, Resource, UserProgress, Simulation } from './models';

// Course Content API Interfaces
export interface GetModuleListResponse {
  modules: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
    estimatedDuration: number;
    learningObjectives: string[];
  }>;
}

export interface GetModuleDetailsResponse extends Module {
  parts: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
  }>;
}

export interface GetPartDetailsResponse extends Part {
  chapters: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
  }>;
}

export interface GetChapterContentResponse extends Chapter {
  lessons: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
  }>;
}

export interface GetLessonContentResponse extends Lesson {
  resources: Array<{
    id: string;
    title: string;
    type: string;
    url: string;
    description: string;
    downloadable: boolean;
  }>;
  assessments: Assessment[];
}

// User Progress API Interfaces
export interface GetUserProgressResponse {
  userId: string;
  progress: UserProgress[];
}

export interface UpdateLessonProgressRequest {
  status: 'not-started' | 'in-progress' | 'completed' | 'assessed';
  timeSpent: number;
}

export interface UpdateLessonProgressResponse {
  lessonId: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'assessed';
  completionDate: string; // ISO string
  timeSpent: number;
}

// Simulation API Interfaces
export interface GetSimulationDetailsResponse extends Simulation {}

// Generic API Response Interface
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}