default login admin/admin
# CISSP Exam Simulator

A full-stack web application designed to help users prepare for the CISSP (Certified Information Systems Security Professional) exam and other certifications. It features dynamic exam generation, detailed results analysis, admin management for questions, users, exam templates, and certifications.

## Features

* **User Authentication:** Secure user registration (default 'user' role), login, and logout.
* **Role-Based Access Control:** Admin panel accessible only to users with the 'admin' role.
* **Dynamic Exam Generation:**
    * **Multi-Certification Support:** Take exams for various certifications (e.g., CISSP, CISM, CKA).
    * **Flexible Exam Types:** Choose from predefined templates (Full CISSP Exam, Mock CISSP Exam) or create custom exams with specific question counts and durations.
    * **Weighted Question Selection:** CISSP exams use domain-weighted question distribution. Other certifications can be non-weighted (random selection).
    * **Shuffled Options:** Answer options are randomized for each exam attempt.
    * **Timer & Progress Bar:** Real-time tracking during the exam.
    * **Early Exam Submission:** Option to end the exam before time runs out.
    * Supports **Single-Choice** and **Multiple-Response** question types.
* **Comprehensive Exam Results:**
    * Overall score percentage.
    * Domain-specific performance breakdown (for weighted exams).
    * Detailed question review with correct answers, user answers, and explanations.
    * Filtering of questions on results page (all, correct, incorrect, by domain).
* **User Score History:** Track exam progress over time with a visual graph and a table of past attempts.
* **Admin Panel:**
    * **Question Management:** Full CRUD (Create, Read, Update, Delete) operations for exam questions.
    * **Question Import:** Import questions from a JSON file or by pasting JSON text.
    * **Question Filtering & Search:** Filter questions by certification, domain, type, difficulty, and active status, with a search bar.
    * **Pagination:** Manage large question banks with paginated display.
    * **User Management:** View all users, assign/revoke admin roles, and delete user accounts.
    * **Exam Template Management:** Create, Read, Update, and Delete custom exam templates.
    * **Certification Management:** Create, Read, Update, and Delete certification names (e.g., CISSP, CISM, K8S).
    * Organized with a clean, tabbed interface.

## Technologies Used

* **Frontend:** React.js
    * `react-router-dom`: For client-side routing.
    * `axios`: For API requests.
    * `chart.js`, `react-chartjs-2`: For score visualization.
* **Backend:** Node.js (Express.js)
    * `express`: Web framework.
    * `mongoose`: MongoDB ODM.
    * `bcryptjs`: For password hashing.
    * `jsonwebtoken`: For JWT authentication.
    * `cors`: For Cross-Origin Resource Sharing.
    * `dotenv`: For environment variables.
* **Database:** MongoDB

## Local Development Setup

Follow these steps to get the application running on your local machine.

1.  **Prerequisites:**
    * Node.js (LTS version recommended) and npm installed.
    * MongoDB Community Server installed and running locally (default port 27017).
    * Git installed.

2.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/BLANK93/cissp-exam-simulator.git](https://github.com/BLANK93/cissp-exam-simulator.git)
    cd cissp-exam-simulator
    ```

3.  **Backend Setup (`server` directory):**
    ```bash
    cd server
    npm install
    ```
    * Create a `.env` file in the `server` directory with the following content:
        ```
        MONGO_URI="mongodb://localhost:27017/cissp_exam_db"
        PORT=5000
        JWT_SECRET="your_very_strong_and_secret_jwt_key" # IMPORTANT: Change this to a strong, random string
        ```
    * Start the backend server:
        ```bash
        npm run dev
        ```
        (This uses `nodemon` for auto-restarts on file changes)

4.  **Frontend Setup (`client` directory):**
    * Open a new terminal window.
    ```bash
    cd ../client
    npm install
    ```
    * Start the React development server:
        ```bash
        npm start
        ```

5.  **Access the Application:**
    * Open your web browser and navigate to `http://localhost:3000`.

6.  **Initial Setup (Local Database Seeding):**
    * **Register a new user** through the UI (this will be a regular user).
    * **Create an admin user manually (if you don't have one):**
        * In your `server` directory, create a temporary file `create_admin_hash.js`:
            ```javascript
            // create_admin_hash.js
            const bcrypt = require('bcryptjs');
            const readline = require('readline');
            const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
            const saltRounds = 10;
            rl.question('Enter new admin password: ', (password) => {
              bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) { console.error('Error hashing password:', err); }
                else { console.log('\n----------------------------------------\nCOPY THIS HASH:\n' + hash + '\n----------------------------------------\n'); }
                rl.close();
              });
            });
            ```
        * Run `node create_admin_hash.js` in the `server` directory, enter a password, and **copy the generated hash**.
        * Open **MongoDB Compass** (or `mongosh`) and connect to `mongodb://localhost:27017/cissp_exam_db`.
        * In the `users` collection, insert a new document:
            ```json
            {
              "username": "admin",
              "password": "YOUR_COPIED_HASH_HERE",
              "role": "admin",
              "createdAt": ISODate(),
              "updatedAt": ISODate()
            }
            ```
        * Log in as this new admin user.
    * **Populate Certifications:** Go to `Admin Panel` -> `Manage Certifications` tab. Add `CISSP`, `CISM`, `CompTIA Security+`, `CKA` (or any other certs you want).
    * **Populate Exam Templates:** Go to `Admin Panel` -> `Manage Exam Templates` tab. Create custom templates (e.g., a "CKA Practice Exam" with `isWeighted: false`).
    * **Import Questions:** Go to `Admin Panel` -> `Manage Questions` tab. Use the "Import Questions (JSON)" button to add questions for various certifications. (You can find sample CKA questions in the project's `server/seed/questions.json` if you followed the seeding guide.)

## Production Deployment on Ubuntu Server

This guide assumes you have a fresh Ubuntu Server (20.04 LTS, 22.04 LTS, or 24.04 LTS recommended) with SSH access.

1.  **Prerequisites on Server:**
    * Connect via SSH: `ssh your_username@your_server_ip_or_domain`
    * Update packages: `sudo apt update && sudo apt upgrade -y`
    * Install essential tools: `sudo apt install curl git -y`

2.  **Install Node.js and npm:**
    ```bash
    curl -fsSL [https://deb.nodesource.com/setup_lts.x](https://deb.nodesource.com/setup_lts.x) | sudo -E bash -
    sudo apt install nodejs -y
    ```

3.  **Install MongoDB Community Server:**
    ```bash
    curl -fsSL [https://www.mongodb.org/static/pgp/server-7.0.asc](https://www.mongodb.org/static/pgp/server-7.0.asc) | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg ] [https://repo.mongodb.org/apt/ubuntu](https://repo.mongodb.org/apt/ubuntu) $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
    sudo apt update
    sudo apt install -y mongodb-org
    sudo systemctl start mongod
    sudo systemctl enable mongod
    ```

4.  **Clone Your Project:**
    ```bash
    cd /var/www/
    sudo git clone [https://github.com/BLANK93/cissp-exam-simulator.git](https://github.com/BLANK93/cissp-exam-simulator.git) cissp-exam-app
    sudo chown -R your_username:your_username /var/www/cissp-exam-app
    cd /var/www/cissp-exam-app
    ```

5.  **Install Dependencies & Build Frontend:**
    ```bash
    cd server
    npm install --production
    cd ../client
    npm install --production
    npm run build
    ```

6.  **Configure Backend Environment Variables:**
    ```bash
    cd ../server
    nano .env
    ```
    Paste your production environment variables (e.g., `MONGO_URI="mongodb://localhost:27017/cissp_exam_db"`, `PORT=5000`, `JWT_SECRET="your_production_jwt_secret"`).

7.  **Seed the Database (Optional, for initial data):**
    If you want to populate your database with initial data (like questions, users, certs) from your local setup:
    ```bash
    npm run seed
    ```
    **CAUTION:** This script will clear existing data in `questions`, `users`, `examtemplates`, and `certifications` collections before importing. Use only for initial setup or full data reset.

8.  **Install and Configure PM2:**
    ```bash
    sudo npm install pm2@latest -g
    pm2 start server.js --name "cissp-backend"
    pm2 startup systemd # Copy and run the output command
    pm2 save
    ```

9.  **Install and Configure Nginx:**
    ```bash
    sudo apt install nginx -y
    sudo rm /etc/nginx/sites-enabled/default
    sudo nano /etc/nginx/sites-available/cissp-exam
    ```
    Paste the Nginx configuration (replace `your_domain_or_server_ip`):
    ```nginx
    server {
        listen 80;
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
    ```
    Save and exit.
    ```bash
    sudo ln -s /etc/nginx/sites-available/cissp-exam /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

10. **Configure UFW Firewall:**
    ```bash
    sudo ufw allow OpenSSH
    sudo ufw allow 'Nginx HTTP'
    sudo ufw allow 'Nginx HTTPS' # For Certbot later
    sudo ufw enable
    ```

11. **Set Up HTTPS with Certbot (Highly Recommended):**
    ```bash
    sudo apt install certbot python3-certbot-nginx -y
    sudo certbot --nginx -d your_domain_name # Use your actual domain here
    ```
    Follow prompts, choose `2: Redirect` for HTTP to HTTPS.

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request.

## License

[Choose and specify your license, e.g., MIT License]

---
