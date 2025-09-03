# 🏨 Hotel-Wallet

Hotel-Wallet is a web application platform for the **management of extra services in hotels**.  
It helps hotels organize, track, and manage additional services offered to guests, with a modern and user-friendly interface.

---

## 📸 Preview

![Hotel-Wallet Screenshot](./assets/preview.png)  
*(Replace `./assets/preview.png` with the path or URL to your image)*

---

## 🚀 Features

- Manage extra hotel services (spa, laundry, transport, etc.)
- Dashboard with data visualization (charts & stats)
- Secure backend with REST API
- Responsive design using Bulma CSS
- Real-time updates for hotel staff

---

## 🛠️ Tech Stack

### Client Side
- [Next.js](https://nextjs.org/) – React framework with SSR
- [Bulma](https://bulma.io/) – CSS framework for responsive UI
- Charts libraries (data visualization)

### Server Side
- [Express.js](https://expressjs.com/) – REST API framework
- [MongoDB](https://www.mongodb.com/) – NoSQL database
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Hotel-Wallet.git
   cd Hotel-Wallet

So for your full example, in the `README.md` it would look like this:

```markdown
```bash
##############################################
# 📦 Install dependencies
##############################################

# 👉 Client Side
cd "Client Side"
npm install

# 👉 Server Side
cd "../Server Side"
npm install


##############################################
# ⚙️ Set environment variables
##############################################

# Inside the "Server Side" folder, create a file named ".env"
# Add the following:
MONGO_URI=your_mongodb_connection_string
PORT=5000


##############################################
# 🚀 Run the application
##############################################

# Start the backend
cd "Server Side"
npm run dev

# Start the frontend
cd "../Client Side"
npm run dev


##############################################
# 📂 Project Structure
##############################################

Hotel-Wallet/
│
├── Client Side/      # 🖥️ Next.js frontend
│   ├── pages/        # 📄 Routes
│   ├── components/   # 🧩 Reusable UI components
│   └── styles/       # 🎨 Bulma + custom CSS
│
├── Server Side/      # ⚡ Express backend
│   ├── models/       # 🛢️ Mongoose models
│   ├── routes/       # 🌐 API routes
│   ├── controllers/  # 🧠 Business logic
│   └── server.js     # 🚀 Entry point
│
└── README.md
