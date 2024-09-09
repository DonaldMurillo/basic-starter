# BasicStarter

A modern, feature-rich starter template for full-stack web development.

## Features

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Express.js with TypeScript
- **Project Structure**: NX monorepo
- **Code Concatenation**: Python script for LLM context preparation
- **Documentation**: Separate folder for project requirements and specifications

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Python 3.x (for concatenator script)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/basic-starter.git
   cd basic-starter
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

Use NX commands to run various parts of the application:

- Start the frontend development server:

  ```
  npx nx serve basic-starter
  ```

- Build the project:

  ```
  npx nx build basic-starter
  ```

- Run tests:
  ```
  npx nx test basic-starter
  ```

## Using the Concatenator

The concatenator is a Python script that combines all project files into a single text file. This is useful for providing context to Large Language Models (LLMs) for code analysis and generation tasks.

1. Navigate to the `lib/scripts` directory:

   ```
   cd lib/scripts
   ```

2. Run the concatenator:

   ```
   python concatenator.py --root ../../
   ```

3. Find the output file (e.g., `concatenated_main_20240908_191552.txt`) in the project root.

## shadcn/ui Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components. To add new components:

1. Run the shadcn CLI:

   ```
   npx shadcn-ui@latest add <component-name>
   ```

2. Import and use the component in your React files:
   ```typescript
   import { Button } from '@/components/ui/button';
   ```

## Project Documentation

The `/documentation` folder contains important project-related documents:

- `requirements.md`: Detailed project requirements and specifications
- Other documentation files related to project architecture, design decisions, and development guidelines

Refer to these documents for in-depth information about the project's structure, goals, and development practices.

## License

This project is licensed under the MIT License.
