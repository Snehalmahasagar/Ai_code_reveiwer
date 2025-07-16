🧠 AI-Powered Code Reviewer 🚀
An intelligent full-stack application built with the MERN stack that uses Google Gemini AI to analyze and review code, offering valuable suggestions and improvements in real-time. This project is perfect for learning modern full-stack development and integrating AI APIs into real-world applications.

🌟 Features
✅ Code Review with AI – Send your code to the backend, and receive AI-generated suggestions.

⚙️ Gemini AI Integration – Utilizes Gemini API to process and understand code intelligently.

🔄 Express.js Backend – Handles API requests and communicates with Gemini API.

💻 React Frontend – User-friendly interface to paste and review your code.

📫 Postman Testing – API endpoints tested with Postman for robustness.

🚀 Real-time Feedback – Instantly view AI-generated code reviews and improvement tips.

🛠️ Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js, Express
API Testing	Postman
AI Service	Gemini API
Runtime	Nodemon

📂 Project Structure
bash
Copy
Edit
code-editor/
├── backend/          # Express server handling Gemini API calls
└── frontend/         # React frontend for code input & review display
🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/code-editor.git
cd code-editor
2. Setup the Backend
bash
Copy
Edit
cd backend
npm install
npx nodemon
Make sure to create a .env file and add your Gemini API key:

env
Copy
Edit
GEMINI_API_KEY=your_api_key_here
3. Setup the Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
📬 API Usage (via Postman)
POST /review
Send code in the request body to receive AI-powered suggestions.

json
Copy
Edit
{
  "code": "function add(a, b) { return a + b; }"
}
💡 Use Case Ideas
Improve your coding logic and structure

Learn best practices from AI feedback

Quickly review code without manual walkthroughs

🧠 Powered By
Gemini API

React.js

Express.js

🤝 Contributing
Pull requests are welcome! If you have suggestions or want to improve the project, feel free to open an issue.

📄 License
MIT License

