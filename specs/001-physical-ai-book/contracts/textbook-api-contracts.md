# Textbook Platform API Contracts

## Course Content API

### Get Module List
- **Endpoint**: `GET /api/modules`
- **Description**: Retrieve all available modules in the textbook
- **Authentication**: None required for public content
- **Request**:
  - Headers: 
    - `Accept: application/json`
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
    "modules": [
      {
        "id": "module-1-ros2",
        "title": "The Robotic Nervous System (ROS 2)",
        "description": "Middleware for robot control. ROS 2 Nodes, Topics, and Services. Bridging Python Agents to ROS controllers using rclpy. Understanding URDF (Unified Robot Description Format) for humanoids.",
        "order": 1,
        "estimatedDuration": 20,
        "learningObjectives": [
          "Understand ROS 2 architecture",
          "Create and run ROS 2 nodes",
          "Implement communication patterns (publish/subscribe, services)"
        ]
      }
    ]
  }
  ```

### Get Module Details
- **Endpoint**: `GET /api/modules/{moduleId}`
- **Description**: Retrieve detailed information about a specific module
- **Authentication**: None required for public content
- **Request**:
  - Path Parameter: `moduleId` (string)
  - Headers:
    - `Accept: application/json`
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
    "id": "module-1-ros2",
    "title": "The Robotic Nervous System (ROS 2)",
    "description": "Middleware for robot control. ROS 2 Nodes, Topics, and Services. Bridging Python Agents to ROS controllers using rclpy. Understanding URDF (Unified Robot Description Format) for humanoids.",
    "order": 1,
    "estimatedDuration": 20,
    "learningObjectives": [
      "Understand ROS 2 architecture",
      "Create and run ROS 2 nodes",
      "Implement communication patterns (publish/subscribe, services)"
    ],
    "parts": [
      {
        "id": "part-1-1-ros-basics",
        "title": "ROS 2 Basics",
        "description": "Fundamentals of ROS 2 architecture",
        "order": 1
      }
    ]
  }
  ```

### Get Part Details
- **Endpoint**: `GET /api/parts/{partId}`
- **Description**: Retrieve detailed information about a specific part
- **Authentication**: None required for public content
- **Request**:
  - Path Parameter: `partId` (string)
  - Headers:
    - `Accept: application/json`
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
    "id": "part-1-1-ros-basics",
    "title": "ROS 2 Basics",
    "description": "Fundamentals of ROS 2 architecture",
    "moduleId": "module-1-ros2",
    "order": 1,
    "chapters": [
      {
        "id": "chapter-1-1-1-intro",
        "title": "Introduction to ROS 2",
        "description": "Overview of ROS 2 concepts",
        "order": 1
      }
    ]
  }
  ```

### Get Chapter Content
- **Endpoint**: `GET /api/chapters/{chapterId}`
- **Description**: Retrieve the content of a specific chapter
- **Authentication**: None required for public content
- **Request**:
  - Path Parameter: `chapterId` (string)
  - Headers:
    - `Accept: application/json`
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
    "id": "chapter-1-1-1-intro",
    "title": "Introduction to ROS 2",
    "description": "Overview of ROS 2 concepts",
    "partId": "part-1-1-ros-basics",
    "order": 1,
    "content": "# Introduction to ROS 2\n\nROS 2 (Robot Operating System 2) is a flexible framework for writing robot applications...",
    "learningObjectives": [
      "Define the purpose of ROS 2",
      "Recognize the key components of ROS 2"
    ],
    "lessons": [
      {
        "id": "lesson-1-1-1-1-history",
        "title": "History of ROS",
        "description": "Evolution from ROS 1 to ROS 2",
        "order": 1
      }
    ]
  }
  ```

### Get Lesson Content
- **Endpoint**: `GET /api/lessons/{lessonId}`
- **Description**: Retrieve the content of a specific lesson
- **Authentication**: Required for tracking progress
- **Request**:
  - Path Parameter: `lessonId` (string)
  - Headers:
    - `Accept: application/json`
    - `Authorization: Bearer {token}`
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
    "id": "lesson-1-1-1-1-history",
    "title": "History of ROS",
    "description": "Evolution from ROS 1 to ROS 2",
    "chapterId": "chapter-1-1-1-intro",
    "order": 1,
    "type": "text",
    "content": "# History of ROS\n\nROS was initially developed by Willow Garage in 2007. It started as a research platform...",
    "estimatedDuration": 15,
    "resources": [
      {
        "id": "resource-1-1-1-1-history-video",
        "title": "ROS History Video",
        "type": "video",
        "url": "/resources/ros-history.mp4",
        "description": "A video overview of ROS development history"
      }
    ],
    "assessments": [
      {
        "id": "assessment-1-1-1-1-quiz",
        "type": "multiple-choice",
        "question": "When was ROS initially developed?",
        "options": [
          "2007",
          "2009",
          "2012",
          "2015"
        ],
        "correctAnswer": 0
      }
    ]
  }
  ```

## User Progress API

### Get User Progress
- **Endpoint**: `GET /api/users/{userId}/progress`
- **Description**: Retrieve the user's progress through the textbook
- **Authentication**: Required
- **Request**:
  - Path Parameter: `userId` (string)
  - Headers:
    - `Accept: application/json`
    - `Authorization: Bearer {token}`
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
    "userId": "user-123",
    "progress": [
      {
        "lessonId": "lesson-1-1-1-1-history",
        "status": "completed",
        "completionDate": "2025-12-17T10:30:00Z",
        "assessmentScore": 80,
        "timeSpent": 18
      }
    ]
  }
  ```

### Update Lesson Progress
- **Endpoint**: `PUT /api/users/{userId}/lessons/{lessonId}/progress`
- **Description**: Update the user's progress for a specific lesson
- **Authentication**: Required
- **Request**:
  - Path Parameters: `userId` (string), `lessonId` (string)
  - Headers:
    - `Content-Type: application/json`
    - `Authorization: Bearer {token}`
  - Body:
  ```json
  {
    "status": "completed",
    "timeSpent": 18
  }
  ```
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
    "lessonId": "lesson-1-1-1-1-history",
    "status": "completed",
    "completionDate": "2025-12-17T10:30:00Z",
    "timeSpent": 18
  }
  ```

## Simulation API

### Get Simulation Details
- **Endpoint**: `GET /api/simulations/{simulationId}`
- **Description**: Retrieve the details of a specific simulation
- **Authentication**: Required
- **Request**:
  - Path Parameter: `simulationId` (string)
  - Headers:
    - `Accept: application/json`
    - `Authorization: Bearer {token}`
- **Response**:
  - Status: `200 OK`
  - Body:
  ```json
  {
    "id": "simulation-1-1-2-1-ros-node",
    "title": "ROS Node Communication Simulation",
    "description": "Interactive simulation showing how ROS nodes communicate",
    "type": "custom",
    "url": "/simulations/ros-node-communication",
    "lessonId": "lesson-1-1-2-1-node-creation",
    "embedded": true
  }
  ```