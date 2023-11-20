# **Assignment IX**
## **Tech Stacks Used :**
* **React**
* **Express.js**
* **MongoDB**
* **Node.js**
## **Folder Structure :**
```plaintext
project-root/
│
├── frontend/            # React frontend-side code
│   ├── public/        # Public assets
│   ├── src/           # React source code
│   │   ├── components/   # React components
│   │   │   ├── Home/
│   │   │   │   ├── Home.js
│   │   │   ├── About/
│   │   │   │   ├── About.js
│   │   │   ├── Contact/
│   │   │   │   ├── Contact.js
│   │   │   ├── Jobs/
│   │   │   │   ├── Jobs.js
│   │   │   ├── Login/
│   │   │   │   ├── Login.js
│   │   │   ├── Card/
│   │   │   │   ├── Card.js
│   │   ├── App.js        # Main React component
│   │   ├── index.js      # Entry point
│   └── package.json     # frontend-side dependencies and scripts
│
├── backend/            # Express backend-side code
│   ├── routers/userRoutes.js        # Express route handlers
│   ├── controllers/userControllers.js        # Express controllers
│   ├── models/user.js        # Database models (e.g., MongoDB schemas)
│   ├── server.js      # Entry point for the backend
│   └── package.json   # backend-side dependencies and scripts
│
└── README.md          # Project documentation
``````
## **Commands**
### **frontend**
```
cd frontend
npm install        # Install dependencies
npm start          # Run the development backend for the frontend
``````
### **backend**
```
cd backend
npm install        # Install dependencies
node server.js  
```
### **Port Information**
```
frontend: http://localhost:3000
backend: http://localhost:5000
```
## Clone Repository
To clone this repository to your local machine, use the following commands:
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
