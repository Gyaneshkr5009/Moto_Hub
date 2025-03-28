# Moto-Hub

Moto-Hub is a feature-rich web application designed to simplify the process of buying, selling, and renting vehicles. Built with modern technologies like React, Vite, and Tailwind CSS, it offers a seamless and intuitive user experience. Whether you're a car enthusiast, a dealer, or someone looking for their next ride, Moto-Hub has you covered.

---

## 🚀 Features

### User Features
- **User Authentication**: Secure login and registration powered by Clerk.
- **Dynamic Listings**: Add, edit, and delete car listings with real-time updates.
- **Advanced Search**: Filter cars by category, make, condition, price, and more.
- **Financial Calculator**: Calculate monthly payments for car loans directly on the platform.
- **Real-Time Messaging**: Communicate with buyers and sellers using Sendbird's chat integration.

### Admin Features
- **Image Management**: Upload and manage car images using Appwrite's storage service.
- **Database Management**: Manage listings and user data with Drizzle ORM and PostgreSQL.
- **Analytics**: Track the most searched cars and user interactions.

### Design Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern UI**: Built with Tailwind CSS for a clean and professional look.
- **Interactive Components**: Dynamic carousels, dropdowns, and modals for enhanced usability.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: PostgreSQL, Drizzle ORM
- **Authentication**: Clerk
- **Storage**: Appwrite
- **Messaging**: Sendbird
- **Utilities**: Axios, Moment.js, Faker.js

---

## 📦 Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Appwrite** account for image storage
- **Clerk** account for authentication

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory**:
   ```bash
   cd car-hub
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
VITE_APPWRITE_PROJECT_ID=<your-appwrite-project-id>
VITE_APPWRITE_STORAGE_ID=<your-appwrite-storage-id>
VITE_DRIZZLE_DATABASE_URL=<your-database-url>
```

### Running the Application

1. **Start the development server**:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

---

## 🗄️ Database Setup

Moto-Hub uses PostgreSQL as its database. To set up the database schema, run the following command:

```bash
npm run db:push
```

To explore the database visually, use the Drizzle Studio:
```bash
npm run db:studio
```

---

## 🏗️ Building for Production

To build the application for production, run:
```bash
npm run build
```

The production-ready files will be available in the `dist` directory.

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can get involved:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Submit a pull request**.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 📧 Contact

For any questions or feedback, feel free to reach out:
- **Email**: support@moto-hub.com
- **Website**: [Moto-Hub](https://moto-hub.com)
