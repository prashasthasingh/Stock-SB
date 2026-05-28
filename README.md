# 📈 Stock Trading Platform

A full-stack stock trading web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Users can browse live stock data, buy/sell stocks (intraday & delivery), manage their portfolio, track transaction history, and admins can oversee all users, orders, and transactions.

---

## 🚀 Features

### 👤 User
- Register & Login with JWT-based authentication
- Browse stocks with live charts (ApexCharts / Google Charts)
- Buy & Sell stocks — Intraday or Delivery
- View personal **Portfolio** with holdings
- Track complete **Transaction History**
- Manage **Profile** (update password, view balance)

### 🛡️ Admin
- View all registered **Users**
- Monitor all **Orders** placed across the platform
- Monitor all **Transactions**
- View stock charts for any stock

---

## 🛠️ Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Frontend   | React 18, React Router v6, Bootstrap 5, Axios   |
| Charts     | ApexCharts, React Google Charts                 |
| Backend    | Node.js, Express.js                             |
| Database   | MongoDB, Mongoose                               |
| Auth       | JWT (JSON Web Tokens), bcrypt                   |
| Utilities  | cookie-parser, cors, react-hot-toast, react-icons |

---

## 📁 Project Structure

```
Code/
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/            # Route handler logic
│   ├── middlewares/            # Auth middleware (JWT verification)
│   ├── models/                 # Mongoose models
│   ├── routes/
│   │   ├── userRoute.js        # Register, Login, Logout
│   │   ├── stockRoute.js       # Buy, Sell, Get holdings
│   │   ├── orderRoute.js       # Order history
│   │   └── transactionRoute.js # Transaction records
│   ├── Schemas.js              # Mongoose schemas (User, Stock, Order, Transaction)
│   └── index.js                # Express app entry point (PORT 6001)
│
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── Landing.jsx         # Login / Register page
│       │   ├── Home.jsx            # Stock listing & market overview
│       │   ├── StockChart.jsx      # Individual stock chart (user)
│       │   ├── Portfolio.jsx       # User portfolio / holdings
│       │   ├── History.jsx         # Transaction history
│       │   ├── Profile.jsx         # User profile & settings
│       │   ├── Admin.jsx           # Admin dashboard
│       │   ├── Users.jsx           # All users (admin)
│       │   ├── AllOrders.jsx       # All orders (admin)
│       │   ├── AllTransactions.jsx # All transactions (admin)
│       │   └── AdminStockChart.jsx # Stock chart view (admin)
│       ├── components/
│       │   └── Navbar.jsx
│       ├── context/                # React context (auth state)
│       ├── RouteProtectors/        # Protected route wrappers
│       └── styles/                 # Component-level CSS
│
└── .gitignore
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://cloud.mongodb.com/))
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/stock-trading-platform.git
cd stock-trading-platform/Code
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

> 💡 Update `config/db.js` to use `process.env.MONGO_URI` if not already done.

Start the backend server:

```bash
node index.js
```

The backend will run on **http://localhost:6001**

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on **http://localhost:3000**

---

## 🗄️ Database Schemas

| Model         | Key Fields                                                                  |
|---------------|-----------------------------------------------------------------------------|
| `User`        | username, email, password (hashed), usertype (`user`/`admin`), balance     |
| `Stock`       | user, symbol, name, price, count, totalPrice, stockExchange                 |
| `Order`       | user, symbol, name, price, count, totalPrice, stockType, orderType, orderStatus |
| `Transaction` | user, type, paymentMode, amount, time                                       |

---

## 🔐 API Endpoints

### Auth Routes
| Method | Endpoint    | Description        | Auth Required |
|--------|-------------|--------------------|---------------|
| POST   | `/register` | Register new user  | ❌            |
| POST   | `/login`    | Login user         | ❌            |
| POST   | `/logout`   | Logout user        | ✅            |

### Stock Routes
| Method | Endpoint  | Description              | Auth Required |
|--------|-----------|--------------------------|---------------|
| GET    | `/stocks` | Get user's stock holdings | ✅           |
| POST   | `/buy`    | Buy a stock              | ✅            |
| POST   | `/sell`   | Sell a stock             | ✅            |

### Order Routes
| Method | Endpoint    | Description          | Auth Required |
|--------|-------------|----------------------|---------------|
| GET    | `/orders`   | Get user's orders    | ✅            |
| GET    | `/allorders`| Get all orders (admin)| ✅           |

### Transaction Routes
| Method | Endpoint         | Description                  | Auth Required |
|--------|------------------|------------------------------|---------------|
| GET    | `/transactions`  | Get user's transactions       | ✅            |
| GET    | `/alltransactions`| Get all transactions (admin) | ✅           |

---

## 🌐 App Routes (Frontend)

| Path                | Page              | Access     |
|---------------------|-------------------|------------|
| `/`                 | Landing (Login)   | Public     |
| `/home`             | Home / Market     | User       |
| `/portfolio`        | Portfolio         | User       |
| `/history`          | Transaction History | User     |
| `/profile`          | Profile           | User       |
| `/stock/:id`        | Stock Chart       | User       |
| `/admin`            | Admin Dashboard   | Admin      |
| `/users`            | All Users         | Admin      |
| `/all-orders`       | All Orders        | Admin      |
| `/all-transactions` | All Transactions  | Admin      |
| `/admin-stock/:id`  | Admin Stock Chart | Admin      |

---

## 📦 Dependencies

### Backend
- `express` — Web framework
- `mongoose` — MongoDB ODM
- `jsonwebtoken` — JWT auth
- `bcrypt` — Password hashing
- `cors` — Cross-origin resource sharing
- `cookie-parser` — Cookie handling
- `body-parser` — Request body parsing

### Frontend
- `react` / `react-dom` / `react-router-dom`
- `axios` — HTTP client
- `bootstrap` — CSS framework
- `apexcharts` / `react-apexcharts` — Stock charts
- `react-google-charts` — Charts
- `react-hot-toast` — Toast notifications
- `react-icons` — Icons

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

> Built with ❤️ using the MERN Stack
