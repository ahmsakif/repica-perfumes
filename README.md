# Repica - Luxury Perfume Store Application

A modern e-commerce web application built with Next.js 16, featuring a public storefront for browsing luxury perfumes and a protected admin interface for inventory management.

🔗 **Live Demo:** [https://repica-perfumes.vercel.app/](https://repica-perfumes.vercel.app/)

## 🚀 Features

### 1. Landing Page (7 Sections)
A fully responsive home page including:
- **Hero Section:** Immersive banner.
- **Features:** Trust signals (Free Shipping, Authenticity).
- **Best Sellers:** Dynamic data fetching of top products.
- **Promotional Banner:** Seasonal offers.
- **About Brand:** Brand story and statistics.
- **Testimonials:** Customer reviews.
- **Newsletter:** Subscription form.

### 2. Product Management
- **Shop Page:** Displays all available perfumes fetched from the internal API.
- **Details Page:** Dynamic routing (`/perfumes/[id]`) to show specific product details.
- **Add Item Form:** Protected interface to add new products to the runtime database.

### 3. Authentication & Security
- **Mock Authentication:** Secure cookie-based login system.
- **Middleware Protection:** Automatically redirects unauthenticated users trying to access `/admin` routes.
- **Dynamic Navbar:** Context-aware navigation (shows Login vs. Dashboard based on auth status).

### 4. Technical Highlights
- **Framework:** Next.js 16 (App Router).
- **Styling:** Tailwind CSS (Responsive Grid & Flexbox).
- **Backend:** Next.js API Routes acting as a mock Express/JSON server.
- **Notifications:** Toast notifications for successful actions.

---

## 🛠️ Setup & Installation

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/repica-perfumes.git](https://github.com/your-username/repica-perfumes.git)
   cd repica-perfumes
   ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Run the development server**
    ```bash
    npm run dev
    ```
4. **Open in browser** Visit [http://localhost:3000](http://localhost:3000)