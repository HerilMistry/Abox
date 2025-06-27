# Abox Reimagined - Project Showcase

This is a modern project showcase website built with Next.js, Tailwind CSS, and ShadCN UI. It features AI-powered tag suggestions using Genkit and a clean, responsive design inspired by Material Design.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js) or another package manager like yarn or pnpm.

### Installation

1.  **Clone the repository:**
    First, clone the project to your local machine. If you're using Firebase Studio, you can download the code from the interface.

2.  **Install dependencies:**
    Navigate into the project directory and install the required packages.
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    The project uses Genkit with the Google AI plugin for its AI features, which requires an API key.

    - Create a new file named `.env` in the root of your project.
    - Copy the contents from `.env.example` into your new `.env` file.
    - Get a Google AI API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    - Replace `"YOUR_API_KEY_HERE"` with your actual API key in the `.env` file.

    Your `.env` file should look like this:
    ```
    GOOGLE_API_KEY="your-actual-api-key"
    ```

### Running the Development Server

Once you've installed the dependencies and set up your environment variables, you can start the development server:

```bash
npm run dev
```

This will start two processes:
- The Next.js application, which will be available at [http://localhost:9002](http://localhost:9002).
- The Genkit development server.

You can now open your browser and navigate to `http://localhost:9002` to see the application. Any changes you make to the code will be automatically reflected in the browser.
