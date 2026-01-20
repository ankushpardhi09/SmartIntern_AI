# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Development Plan

For a detailed 50-day development plan with step-by-step instructions, see [docs/development-plan.md](docs/development-plan.md).


smartintern-ai/
│
├── frontend/                         ← React (Feature-Based)
│   ├── src/
│   │   ├── app/
│   │   │   ├── App.jsx
│   │   │   ├── routes.jsx
│   │   │   └── store.js
│   │   │
│   │   ├── features/
│   │   │
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── auth.api.js
│   │   │
│   │   │   ├── student-profile/
│   │   │   │   ├── ProfileForm.jsx
│   │   │   │   ├── SkillSelector.jsx
│   │   │   │   └── profile.api.js
│   │   │
│   │   │   ├── recommendations/
│   │   │   │   ├── RecommendationList.jsx
│   │   │   │   ├── RecommendationCard.jsx
│   │   │   │   ├── ExplainModal.jsx
│   │   │   │   └── recommendations.api.js
│   │   │
│   │   │   ├── allocation/
│   │   │   │   ├── AllocationStatus.jsx
│   │   │   │   └── allocation.api.js
│   │   │
│   │   │   ├── admin-dashboard/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── MetricsCard.jsx
│   │   │   │   ├── AllocationTable.jsx
│   │   │   │   └── admin.api.js
│   │   │
│   │   │   └── language/
│   │   │       ├── LanguageToggle.jsx
│   │   │       └── translations.js
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   └── Loader.jsx
│   │   │   └── utils/constants.js
│   │   │
│   │   └── main.jsx
│   │
│   └── tailwind.config.js
│
├── backend/                          ← Node.js + Express
│   ├── src/
│   │   ├── models/
│   │   │   ├── Student.js
│   │   │   ├── Internship.js
│   │   │   └── Allocation.js
│   │   │
│   │   ├── routes/
│   │   │   ├── student.routes.js
│   │   │   ├── internship.routes.js
│   │   │   ├── ai.routes.js
│   │   │   └── admin.routes.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── student.controller.js
│   │   │   ├── ai.controller.js
│   │   │   └── admin.controller.js
│   │   │
│   │   ├── services/
│   │   │   └── aiClient.js
│   │   │
│   │   └── server.js
│
├── ai-services/                      ← Python AI Microservice
│   ├── app/
│   │   ├── main.py
│   │   ├── models/
│   │   │   ├── recommender.py
│   │   │   ├── allocator.py
│   │   │   └── fairness.py
│   │   ├── utils/
│   │   │   ├── similarity.py
│   │   │   └── scoring.py
│   │   └── schemas/api_schema.py
│   │
│   └── requirements.txt
│
├── database/                         ← MongoDB Collections
│   ├── students
│   ├── internships
│   ├── companies
│   ├── allocations
│   └── audit_logs
│
├── docs/
│   ├── architecture.md
│   ├── api-contracts.md
│   └── ai-logic.md
│
└── README.md
