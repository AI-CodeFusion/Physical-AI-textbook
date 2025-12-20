/**
 * Data Models for Physical AI & Humanoid Robotics Textbook
 * Based on data-model.md specifications
 */

export interface Module {
  id: string; // unique identifier, e.g., "module-1-ros2"
  title: string; // e.g., "The Robotic Nervous System (ROS 2)"
  description: string; // brief overview of the module
  order: number; // sequence in the course
  lessons: string[]; // array of Lesson IDs
  prerequisites: string[]; // array of Module IDs
  learningObjectives: string[]; // array of learning objectives
  estimatedDuration: number; // in hours
}

export interface Part {
  id: string; // unique identifier, e.g., "part-1-1-ros-basics"
  title: string; // e.g., "ROS 2 Basics"
  description: string; // brief overview of the part
  moduleId: string; // reference to parent Module
  order: number; // sequence within the module
  chapters: string[]; // array of Chapter IDs
}

export interface Chapter {
  id: string; // unique identifier, e.g., "chapter-1-1-2-nodes"
  title: string; // e.g., "Understanding ROS 2 Nodes"
  description: string; // brief overview of the chapter
  partId: string; // reference to parent Part
  order: number; // sequence within the part
  lessons: string[]; // array of Lesson IDs
  content: string; // main content in MDX format
  learningObjectives: string[]; // array of learning objectives
  prerequisites: string[]; // array of Chapter IDs
}

export interface Lesson {
  id: string; // unique identifier, e.g., "lesson-1-1-2-1-node-creation"
  title: string; // e.g., "Creating Your First Node"
  description: string; // brief overview of the lesson
  chapterId: string; // reference to parent Chapter
  order: number; // sequence within the chapter
  content: string; // main content in MDX format
  type: 'text' | 'code-along' | 'quiz' | 'simulation' | 'project'; // lesson type
  estimatedDuration: number; // in minutes
  prerequisites: string[]; // array of Lesson IDs
  resources: string[]; // array of Resource IDs
  assessments: string[]; // array of Assessment IDs
}

export interface Assessment {
  id: string; // unique identifier, e.g., "assessment-1-1-2-1-quiz"
  type: 'multiple-choice' | 'short-answer' | 'code-submission' | 'practical-exercise';
  question: string; // the question text
  options?: string[]; // for multiple choice
  correctAnswer: string | number | any[]; // the correct answer
  explanation: string; // explanation of correct answer
  lessonId: string; // reference to associated lesson
}

export interface Resource {
  id: string; // unique identifier, e.g., "resource-1-1-2-1-code-sample"
  title: string; // e.g., "Node Creation Code Sample"
  type: 'code' | 'video' | 'simulation' | '3d-model' | 'documentation' | 'external-link';
  url: string; // path or external URL
  description: string; // brief explanation of resource
  relatedLessonId: string; // reference to associated lesson
  downloadable: boolean; // whether resource can be downloaded
}

export interface UserProgress {
  userId: string; // unique user identifier
  lessonId: string; // reference to lesson
  status: 'not-started' | 'in-progress' | 'completed' | 'assessed';
  completionDate?: Date; // when lesson was completed
  assessmentScore?: number; // if applicable
  timeSpent: number; // in minutes
}

export interface Simulation {
  id: string; // unique identifier, e.g., "simulation-1-1-2-1-ros-node"
  title: string; // e.g., "ROS Node Communication Simulation"
  description: string; // brief description of the simulation
  type: 'gazebo' | 'unity' | 'isaac-sim' | 'custom';
  url: string; // path to simulation
  lessonId: string; // reference to associated lesson
  embedded: boolean; // whether simulation is embedded in lesson
}