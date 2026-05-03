# 🚴 Bike Delivered

A modern food delivery web application built with React, Vite, TailwindCSS, and Redux Toolkit. Features a complete domain-driven architecture with mock APIs for rapid development and testing.

## ✨ Features

- **Authentication System**: Login, signup, and OTP verification with Redux state management
- **Restaurant Discovery**: Browse and search restaurants by category, location, and ratings
- **Shopping Cart**: Add items, manage quantities, and persistent cart storage
- **Order Management**: Create orders, view order history, and track order status
- **Real-time Tracking**: Track delivery riders with ETA and route information
- **Responsive Design**: Mobile-first design with TailwindCSS utility classes
- **Mock APIs**: Complete mock API layer for offline development and testing
- **PWA Ready**: Progressive Web App configuration for installability

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: TailwindCSS with custom design tokens
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **HTTP Client**: Axios with interceptors
- **Mock APIs**: Custom mock handlers with realistic delays
- **Build Tool**: Vite for fast development and production builds

## 📁 Project Structure

```
bike-delivered/
├── public/                 # Static assets and PWA manifest
├── src/
│   ├── api/                # Axios client and API interceptors
│   ├── assets/             # Global styles and branding
│   ├── components/         # Shared UI components
│   │   ├── ui/             # Button, Input, Card, Badge, Spinner
│   │   └── layout/         # Navbar and page wrappers
│   ├── config/             # Constants, environment, mapbox config
│   ├── features/           # Domain-specific feature modules
│   │   ├── auth/           # Login, signup, OTP
│   │   ├── discovery/      # Restaurant listings and search
│   │   ├── ordering/       # Cart, checkout, orders
│   │   └── tracking/       # GPS tracking and ETA
│   ├── hooks/              # Custom React hooks
│   ├── mocks/              # Mock API handlers and data
│   ├── store/              # Redux Toolkit slices
│   ├── types/              # JSDoc type definitions
│   └── utils/              # Helper functions
├── .env                    # Environment variables
├── tailwind.config.js      # Custom design system tokens
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bike-delivered
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the port shown in terminal)

### Demo Credentials

Use these credentials to log in:
- **Email**: john@example.com
- **Password**: password123

## 🎨 Design System

The application uses a custom TailwindCSS design system with:

- **Brand Colors**: Blue gradient theme (`brand-50` to `brand-900`)
- **Accent Colors**: Green for success states
- **Semantic Colors**: Success, warning, error, info
- **Custom Spacing**: Extended spacing scale for map/delivery UI
- **Typography**: Inter (body) and Poppins (display) fonts
- **Shadows**: Soft, medium, and strong elevation levels

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📱 Features Overview

### Authentication
- Email/password login with validation
- User registration with OTP verification
- Persistent sessions with localStorage
- Protected routes with auth guards

### Restaurant Discovery
- Browse featured restaurants
- Filter by category (Pizza, Burger, Japanese, etc.)
- Search by name, cuisine, or location
- View ratings, delivery time, and fees

### Shopping Cart
- Add items from restaurants
- Automatic cart clearing when switching restaurants
- Persistent cart across sessions
- Real-time total calculation

### Orders
- Create orders with delivery address
- View order history
- Track order status (pending → delivered)
- Order details with itemized breakdown

### Tracking
- Real-time rider location tracking
- ETA calculation
- Distance tracking
- Rider information and contact

## 🔌 Mock API System

The application includes a comprehensive mock API layer that simulates:

- Authentication endpoints (login, signup, OTP)
- Restaurant and menu data
- Cart operations
- Order creation and management
- Location tracking and ETA

All mock APIs include realistic response delays (300ms-1000ms) for authentic testing.

## 🎯 State Management

Redux Toolkit manages global state for:

- **Auth**: User data, tokens, authentication status
- **Cart**: Cart items, totals, persistence
- **Tracking**: Location data, routes, ETA
- **UI**: Loading states, notifications, theme

## 🌐 Environment Variables

Configure the app using `.env`:

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_MAPBOX_KEY=your_mapbox_key
VITE_APP_NAME=Bike Delivered
VITE_MOCK_API_ENABLED=true
```

## 📦 Production Build

To create a production build:

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 🐛 Debugging

- Check browser console for API errors
- Redux DevTools for state inspection
- Network tab for mock API requests
- React DevTools for component debugging

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for lightning-fast builds
- TailwindCSS for the utility-first CSS framework
- Redux Toolkit for simplified state management

---

Built with ❤️ using React, Vite, and TailwindCSS
