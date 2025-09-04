const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for separate frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// In-memory storage (for simplicity)
let tasks = [
  {
    id: uuidv4(),
    text: 'Learn Git branching strategies',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    text: 'Practice commit message conventions',
    completed: false,
    createdAt: new Date().toISOString()
  }
];

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Todo Backend API is running',
    timestamp: new Date().toISOString()
  });
});

// Routes
// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Add new task
app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  
  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Task text is required' });
  }

  const newTask = {
    id: uuidv4(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update task
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (text !== undefined) {
    tasks[taskIndex].text = text.trim();
  }
  
  if (completed !== undefined) {
    tasks[taskIndex].completed = completed;
  }

  tasks[taskIndex].updatedAt = new Date().toISOString();
  res.json(tasks[taskIndex]);
});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`🚀 Todo Backend API is running on port ${PORT}`);
  console.log(`📡 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});
