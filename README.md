default login admin/admin
# CISSP Exam Simulator

CISSP Exam Simulator
A full-stack web application designed to help users prepare for the CISSP (Certified Information Systems Security Professional) exam and other certifications. It features dynamic exam generation, detailed results analysis, and robust admin management tools.

Features
User Authentication: Secure user registration (default 'user' role), login, and logout.

Role-Based Access Control: Admin panel accessible only to users with the 'admin' role.

Dynamic Exam Generation:

Multi-Certification Support: Take exams for various certifications (e.g., CISSP, CISM, CKA).

Flexible Exam Types: Choose from predefined templates (Full CISSP, Mock CISSP) or create custom exams with specific question counts and durations.

Weighted/Non-Weighted Selection: CISSP exams can use domain-weighted distribution; other certifications or custom exams can be purely random.

Shuffled Options: Answer options are randomized for each exam attempt.

Timer & Progress Bar: Real-time tracking during the exam.

Early Exam Submission: Option to end the exam before time runs out.

Supports Single-Choice and Multiple-Response question types.

Comprehensive Exam Results:

Overall score percentage.

Domain-specific performance breakdown (for weighted exams).

Detailed question review with correct answers, user answers, and explanations.

Filtering of questions on results page (all, correct, incorrect, by domain).

User Score History: Track exam progress over time with a visual graph and a table of past attempts.

Admin Panel:

Question Management: Full CRUD (Create, Read, Update, Delete) operations.

Question Importing: Import questions from a JSON file or by pasting JSON text.

Question Filtering & Search: Filter by certification, domain, type, difficulty, active status, and search bar.

Pagination: Manage large question banks with paginated display.

User Management: View all users, assign/revoke admin roles, and delete user accounts.

Exam Template Management: Create, Read, Update, and Delete custom exam templates.

Certification Management: Dynamically add, Read, Update, and Delete certification names (e.g., CISSP, CISM, K8S).

Organized with a clean, tabbed UI.

User Experience: Dark/Light mode toggle with preference saving.

Technologies Used
Frontend: React.js

react-router-dom: For client-side routing.

axios: For API requests.

chart.js, react-chartjs-2: For score visualization.

Backend: Node.js (Express.js)

express: Web framework.

mongoose: MongoDB Object Data Modeling (ODM).

bcryptjs: For password hashing.

jsonwebtoken: For JSON Web Token (JWT) authentication.

cors: For Cross-Origin Resource Sharing.

dotenv: For environment variables.

Database: MongoDB

Deployment Tools: Nginx (Web Server/Reverse Proxy), PM2 (Node.js Process Manager), Certbot (HTTPS Automation)

Local Development Setup
Follow these steps to get the application running on your local machine.

Prerequisites:

Node.js (LTS version recommended) and npm installed.

MongoDB Community Server installed and running locally (default port 27017).

Git installed.

Clone the Repository:

git clone https://github.com/BLANK93/cissp-exam-simulator.git
cd cissp-exam-simulator

Backend Setup (server directory):

cd server
npm install

Create a .env file in the server directory with the following content:

MONGO_URI="mongodb://localhost:27017/cissp_exam_db"
PORT=5000
JWT_SECRET="your_very_strong_and_secret_jwt_key" # IMPORTANT: Change this to a strong, random string

Start the backend server:

npm run dev

(This uses nodemon for auto-restarts on file changes)

Frontend Setup (client directory):

Open a new terminal window.

cd ../client
npm install

Start the React development server:

npm start

Access the Application:

Open your web browser and navigate to http://localhost:3000.

Initial Data Population (Local Database Seeding):

Important: The npm run seed command (detailed below) will clear existing data in questions, users, examtemplates, and certifications collections. Use it for initial setup or if you want to reset your data.

Prepare seed data: Ensure you have questions.json, users.json, examtemplates.json, and certifications.json files inside your server/seed/ directory. These files should contain your initial data, formatted as a single JSON array (e.g., [ { ... }, { ... } ]).

If you exported them using mongoexport, ensure _id values are plain strings (e.g., "687...d") and not objects ({ "$oid": "687..." }).

Run the seed script:

cd ../server # Ensure you are in the server directory
npm run seed

Create an admin user manually (if not in your users.json seed):

In your server directory, create a temporary file create_admin_hash.js:

// create_admin_hash.js
const bcrypt = require('bcryptjs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const saltRounds = 10; // Must match your User model's salt rounds
rl.question('Enter new admin password: ', (password) => {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) { console.error('Error hashing password:', err); }
    else { console.log('\n----------------------------------------\nCOPY THIS HASH:\n' + hash + '\n----------------------------------------\n'); }
    rl.close();
  });
});

Run node create_admin_hash.js, enter a password, and copy the generated hash.

Open MongoDB Compass (or mongosh) and connect to mongodb://localhost:27017/cissp_exam_db.

In the users collection, insert a new document:

{
  "username": "admin",
  "password": "YOUR_COPIED_HASH_HERE",
  "role": "admin",
  "createdAt": { "$date": "2025-01-01T00:00:00.000Z" },
  "updatedAt": { "$date": "2025-01-01T00:00:00.000Z" }
}

Log in as this new admin user.

Populate Certifications & Exam Templates (if not via seed script): Go to Admin Panel -> Manage Certifications tab to add CISSP, CISM, CKA, etc. Then, go to Manage Exam Templates to create custom exam templates for these certifications.

Production Deployment on Ubuntu Server
This guide assumes you have a fresh Ubuntu Server (20.04 LTS, 22.04 LTS recommended) with SSH access. Avoid Ubuntu 24.04 LTS for now due to MongoDB repository compatibility.

Phase 1: Server Preparation - Connect & Update
Connect to Your Ubuntu Server via SSH:

ssh your_username@your_server_ip_or_domain

(Replace your_username and your_server_ip_or_domain with your actual server details.)

Update Server Packages:

sudo apt update
sudo apt upgrade -y

Install Essential Tools:

sudo apt install curl git -y

Phase 2: Install Backend & Database Software on Server
A. Install Node.js and npm:

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install nodejs -y

Verify: node -v, npm -v

B. Install MongoDB:

curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

Verify: sudo systemctl status mongod

Phase 3: Deploy Your Application Code
Clone Your Project from Git:

cd /var/www/
sudo git clone https://github.com/BLANK93/cissp-exam-simulator.git cissp-exam-app
sudo chown -R your_username:your_username /var/www/cissp-exam-app # Change ownership to your SSH user
cd /var/www/cissp-exam-app

Install Dependencies & Build Frontend:

cd server
npm install --production
cd ../client
npm install --production
npm run build
cd ..

Phase 4: Configure Production Environment
A. Set Environment Variables (.env):

cd server
nano .env

Paste your production environment variables:

MONGO_URI="mongodb://localhost:27017/cissp_exam_db"
PORT=5000
JWT_SECRET="your_very_strong_unique_jwt_secret_key_here_please_change_this"

Save and exit.

B. Install and Configure PM2:

sudo npm install pm2@latest -g
pm2 start server.js --name "cissp-backend"
pm2 startup systemd # Copy and run the output command
pm2 save

C. Install and Configure Nginx:

sudo apt install nginx -y
sudo rm /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/sites-available/cissp-exam

Paste the Nginx configuration (replace your_domain_or_server_ip):

server {
    listen 80; # Or 8080 if 80 is in use: listen 8080;
    server_name your_domain_or_server_ip;

    root /var/www/cissp-exam-app/client/build;
    index index.html index.htm;

    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}

Save and exit.

sudo ln -s /etc/nginx/sites-available/cissp-exam /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

Phase 5: Secure Your Server (Firewall & HTTPS)
A. Configure UFW Firewall:

sudo ufw allow OpenSSH
sudo ufw allow 'Nginx HTTP'
sudo ufw allow 'Nginx HTTPS' # For Certbot later
sudo ufw enable

Verify: sudo ufw status

B. (Highly Recommended) Set Up HTTPS with Certbot:

sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your_domain_name # Use your actual domain here

Follow prompts, choose 2: Redirect for HTTP to HTTPS.

Phase 6: Initial Data Population & Final Verification
Seed the Database (Optional, for initial data):
If you want to populate your database with initial data (like questions, users, certs) from your local setup:

cd /var/www/cissp-exam-app/server # Ensure you are in the server directory
npm run seed

CAUTION: This script will clear existing data in questions, users, examtemplates, and certifications collections before importing. Use only for initial setup or full data reset.

Final Browser Test:

Open your web browser and navigate to your domain name (e.g., https://your_domain.com) or your server's public IP address (e.g., http://your_server_ip:8080 if you configured Nginx to listen on 8080).

Test everything thoroughly:

Register a new user.

Log in (as a regular user and as admin).

Go to Admin Panel -> Manage Certifications. Add CISSP, CISM, K8S (if not already there from seeding).

Go to Admin Panel -> Manage Exam Templates. Create custom templates for these certs.

Take a Full/Mock/Custom exam for different certifications (CISSP, CISM, K8S).

Check exam results, score history, and Admin Panel management tabs.

Git Workflow for Deploying Changes
Once your initial deployment is done, here's the typical workflow for future updates:

Local Development: Make changes on a feature branch (e.g., git checkout -b feature/new-feature).

Commit Locally: git add ., git commit -m "feat: implement new feature"

Push Feature Branch: git push -u origin feature/new-feature

Create Pull Request (on GitHub): Open a PR from feature/new-feature to main (or master).

Review & Merge PR: Get your code reviewed and merge it into your main (or master) branch on GitHub.

Deploy to Server:

SSH into your server.

Navigate to /var/www/cissp-exam-app.

git pull origin main (or master)

cd server && npm install --production && cd .. (if backend dependencies changed)

cd client && npm install --production && npm run build && cd .. (if frontend dependencies or code changed)

pm2 restart cissp-backend

sudo systemctl restart nginx

Clear browser cache.
