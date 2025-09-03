# 🏨 Hotel-Wallet

Hotel-Wallet is a web application platform for the **management of extra services in hotels**.  
It helps hotels organize, track, and manage additional services offered to guests with a modern and user-friendly interface.

---

## 📸 Preview

![Hotel-Wallet Screenshot](./assets/preview.png)  
*(Replace `./assets/preview.png` with your own image path or URL)*

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
- [Bulma](https://bulma.io/) – Responsive CSS framework
- Charts libraries for data visualization

### Server Side
- [Express.js](https://expressjs.com/) – REST API framework
- [MongoDB](https://www.mongodb.com/) – NoSQL database
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB

---

## ⚙️ Installation & Setup

### 📦 Install Dependencies
```bash
# Clone the repository
git clone https://github.com/your-username/Hotel-Wallet.git
cd Hotel-Wallet

# Client Side
cd "Client Side"
npm install

# Server Side
cd "../Server Side"
npm install
# Inside the "Server Side" folder, create a file named ".env"
MONGO_URI=your_mongodb_connection_string
PORT=5000
# Start backend
cd "Server Side"
npm run dev

# Start frontend
cd "../Client Side"
npm run dev
