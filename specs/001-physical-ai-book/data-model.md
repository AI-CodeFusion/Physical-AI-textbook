# Data Model: Physical AI & Humanoid Robotics Textbook

## Entities

### Module
- **id**: string (unique identifier, e.g., "module-1-ros2")
- **title**: string (e.g., "The Robotic Nervous System (ROS 2)")
- **description**: string (brief overview of the module)
- **order**: integer (sequence in the course)
- **lessons**: array of Lesson IDs
- **prerequisites**: array of Module IDs
- **learningObjectives**: array of strings
- **estimatedDuration**: integer (in hours)

### Part
- **id**: string (unique identifier, e.g., "part-1-1-ros-basics")
- **title**: string (e.g., "ROS 2 Basics")
- **description**: string (brief overview of the part)
- **moduleId**: string (reference to parent Module)
- **order**: integer (sequence within the module)
- **chapters**: array of Chapter IDs

### Chapter
- **id**: string (unique identifier, e.g., "chapter-1-1-2-nodes")
- **title**: string (e.g., "Understanding ROS 2 Nodes")
- **description**: string (brief overview of the chapter)
- **partId**: string (reference to parent Part)
- **order**: integer (sequence within the part)
- **lessons**: array of Lesson IDs
- **content**: string (main content in MDX format)
- **learningObjectives**: array of strings
- **prerequisites**: array of Chapter IDs

### Lesson
- **id**: string (unique identifier, e.g., "lesson-1-1-2-1-node-creation")
- **title**: string (e.g., "Creating Your First Node")
- **description**: string (brief overview of the lesson)
- **chapterId**: string (reference to parent Chapter)
- **order**: integer (sequence within the chapter)
- **content**: string (main content in MDX format)
- **type**: enum ["text", "code-along", "quiz", "simulation", "project"]
- **estimatedDuration**: integer (in minutes)
- **prerequisites**: array of Lesson IDs
- **resources**: array of Resource IDs
- **assessments**: array of Assessment IDs

### Assessment
- **id**: string (unique identifier, e.g., "assessment-1-1-2-1-quiz")
- **type**: enum ["multiple-choice", "short-answer", "code-submission", "practical-exercise"]
- **question**: string (the question text)
- **options**: array of strings (for multiple choice)
- **correctAnswer**: string/integer/array (the correct answer)
- **explanation**: string (explanation of correct answer)
- **lessonId**: string (reference to associated lesson)

### Resource
- **id**: string (unique identifier, e.g., "resource-1-1-2-1-code-sample")
- **title**: string (e.g., "Node Creation Code Sample")
- **type**: enum ["code", "video", "simulation", "3d-model", "documentation", "external-link"]
- **url**: string (path or external URL)
- **description**: string (brief explanation of resource)
- **relatedLessonId**: string (reference to associated lesson)
- **downloadable**: boolean (whether resource can be downloaded)

### UserProgress
- **userId**: string (unique user identifier)
- **lessonId**: string (reference to lesson)
- **status**: enum ["not-started", "in-progress", "completed", "assessed"]
- **completionDate**: datetime (when lesson was completed)
- **assesmentScore**: integer (if applicable)
- **timeSpent**: integer (in minutes)

### Simulation
- **id**: string (unique identifier, e.g., "simulation-1-1-2-1-ros-node")
- **title**: string (e.g., "ROS Node Communication Simulation")
- **description**: string (brief description of the simulation)
- **type**: enum ["gazebo", "unity", "isaac-sim", "custom"]
- **url**: string (path to simulation)
- **lessonId**: string (reference to associated lesson)
- **embedded**: boolean (whether simulation is embedded in lesson)

## Relationships

- Module contains many Parts
- Part belongs to one Module and contains many Chapters
- Chapter belongs to one Part and contains many Lessons
- Lesson belongs to one Chapter and contains many Resources and Assessments
- Assessment belongs to one Lesson
- Resource refers to one Lesson
- Simulation refers to one Lesson
- UserProgress connects Users and Lessons