# Todo Backend API

A RESTful API for managing todo tasks, built with Express.js and designed to demonstrate Git branching strategies and commit message conventions.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, Delete tasks
- **RESTful API**: Clean and intuitive endpoints
- **CORS Enabled**: Configured for separate frontend deployment
- **Health Check**: API status monitoring endpoint
- **In-Memory Storage**: Simple data persistence (can be extended to database)

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check endpoint |
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-backend-repo-url>
cd todo-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## 🔧 Environment Variables

- `PORT`: Server port (default: 5000)
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:3000)

## 🌿 Git Branching Strategy

This project follows the **Git Flow** branching strategy:

### Main Branches

- **`main`**: Production-ready code
- **`develop`**: Integration branch for features

### Supporting Branches

- **`feature/*`**: New features (branch from `develop`)
- **`release/*`**: Release preparation (branch from `develop`)
- **`hotfix/*`**: Critical bug fixes (branch from `main`)

### Branch Naming Conventions

```
feature/add-task-validation
feature/implement-task-priority
bugfix/fix-task-deletion
hotfix/critical-api-error
release/v1.2.0
```

## 📝 Commit Message Conventions

We follow the **Conventional Commits** specification:

### Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```
feat(api): add task validation middleware
fix(tasks): resolve task deletion bug
docs(readme): update API documentation
style(server): format code with prettier
refactor(routes): extract task logic to service
test(tasks): add unit tests for task CRUD
chore(deps): update express to v4.18.2
```

### Breaking Changes
Use `!` after type/scope to indicate breaking changes:
```
feat(api)!: change task response format
```

## 🔄 Workflow Example

1. **Create feature branch**:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/add-task-priority
```

2. **Make changes and commit**:
```bash
git add .
git commit -m "feat(tasks): add priority field to task model"
git commit -m "feat(api): implement priority-based task sorting"
```

3. **Push and create PR**:
```bash
git push origin feature/add-task-priority
# Create Pull Request to develop
```

4. **Merge and cleanup**:
```bash
git checkout develop
git pull origin develop
git branch -d feature/add-task-priority
```

## 🧪 Testing

```bash
npm test
```

## 📦 Production Deployment

```bash
npm start
```

## 🤝 Contributing

1. Follow the branching strategy
2. Use conventional commit messages
3. Write meaningful commit descriptions
4. Test your changes before pushing
5. Create descriptive pull requests

## 📄 License

MIT License - see LICENSE file for details
