# Smart File Sharing System Cloud
# SecureShare — FileDock

### Secure File Sharing and File Management Platform

SecureShare (FileDock) is a web-based file-sharing platform that allows users to upload files, generate shareable links, track downloads, and manage shared files from a centralized dashboard. It provides a simple way to share files while maintaining control over access and link expiration.

**Live Demo:** [http://15.206.163.11](http://15.206.163.11)  
**GitHub Repository:** [SecureShare](https://github.com/iambadal/SecureShare)

---

## Features

- **User Authentication:** Secure registration and login using JWT-based authentication.
- **File Upload:** Upload and manage files through an intuitive interface.
- **Shareable Links:** Generate unique links to share uploaded files.
- **Download Tracking:** Track the number of downloads for shared files.
- **File Management:** View upload history and manage uploaded files.
- **Link Expiration:** Support for time-limited file-sharing links.
- **Cloud Storage:** Integrates with Cloudinary for file storage.
- **Responsive Interface:** Modern and responsive user interface.

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, Vite |
| Styling | CSS, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT, bcrypt |
| File Storage | Cloudinary |
| Web Server | Nginx |
| Cloud Platform | AWS EC2 |
| Version Control | Git, GitHub |

## System Architecture

The application follows a client-server architecture deployed on AWS.

```text
              User / Browser
                    |
                    v
             AWS EC2 Instance
                    |
                    v
                  Nginx
                    |
             +------+------+
             |             |
             v             v
        React Frontend   API Requests
        (Static Build)       |
                             v
                       Node.js / Express
                             |
                    +--------+--------+
                    |                 |
                    v                 v
                MongoDB           Cloudinary
                 Atlas            File Storage
```

### Architecture Components

1. **AWS EC2:** Hosts the application on a cloud-based virtual machine.
2. **Nginx:** Serves the React production build and forwards API requests to the backend.
3. **React Frontend:** Provides the user interface for authentication, uploading, sharing, and file management.
4. **Node.js and Express:** Handles API requests, authentication, file operations, and application logic.
5. **MongoDB Atlas:** Stores application data and file metadata.
6. **Cloudinary:** Provides cloud-based file storage.

## Project Structure

```text
SecureShare/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

*Note: The folder structure above represents the main application organization. Adjust it if your repository contains additional directories.*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v20.19+ recommended)
- npm
- Git
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the Repository

```bash
git clone https://github.com/iambadal/SecureShare.git
cd SecureShare
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CORS_ORIGIN=http://localhost:5173
PUBLIC_BASE_URL=http://localhost:8000

USE_LOCAL_DB=false
```

Replace the placeholder values with your own credentials.

**Important:** Never commit your `.env` file or expose database passwords, API keys, or JWT secrets in a public repository.

### 5. Run the Backend

From the project root:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:8000
```

### 6. Run the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

## AWS Deployment

SecureShare is deployed on an AWS EC2 instance using Amazon Linux 2023.

### Deployment Configuration

| Component | Configuration |
|---|---|
| Cloud Provider | AWS |
| Compute Service | EC2 |
| Instance Type | t3.micro |
| Operating System | Amazon Linux 2023 |
| Web Server | Nginx |
| Backend Runtime | Node.js |
| Database | MongoDB Atlas |
| File Storage | Cloudinary |
| Deployment Region | Asia Pacific (Mumbai) |

### Deployment Workflow

1. Launch an EC2 instance on AWS.
2. Configure instance access using AWS Systems Manager Session Manager.
3. Install Node.js, Git, and Nginx.
4. Clone the GitHub repository.
5. Install backend and frontend dependencies.
6. Configure production environment variables.
7. Build the React frontend:

```bash
cd frontend
npm run build
```

8. Copy the production build to the Nginx web directory:

```bash
sudo mkdir -p /var/www/secureshare
sudo cp -r dist/. /var/www/secureshare/
```

9. Configure Nginx to serve frontend files and reverse-proxy `/api/` requests to the backend on port 8000.
10. Restart Nginx and verify the public application URL.

**Deployment URL:** http://15.206.163.11

---

## Security Considerations

- Passwords are hashed before storage.
- JWT authentication is used for protected operations.
- Sensitive configuration is stored in environment variables.
- Database access is configured through MongoDB Atlas.
- Cloudinary credentials are maintained outside source code.
- Nginx acts as the public-facing web server and API reverse proxy.

For production use, configure HTTPS, restrict network access, and review application logging and credential management.

## Future Improvements

- Custom domain and HTTPS configuration.
- Enhanced file access controls.
- Password-protected sharing links.
- File size and upload limits.
- Improved monitoring and application logging.
- Automated deployment using CI/CD.

## Contributors

Developed as a **Cloud Computing academic project** by a team of three members.

## License

This project is developed for educational and academic purposes. Add an appropriate open-source license if you intend to distribute it under one.
