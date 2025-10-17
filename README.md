 # 🍵 Cozy Cup

A modern, responsive e-commerce web application for food, desserts, and beverages built with React and Ant Design.

## 📖 Overview

Cozy Cup is a full-featured e-commerce platform that offers a delightful shopping experience for food lovers. The application features a clean, modern interface with smooth navigation and comprehensive product management capabilities.

## ✨ Features

- **🏠 Home Page**: Beautiful hero carousel showcasing different product categories
- **🛍️ Product Categories**: 
  - Food items
  - Desserts
  - Beverages
- **🛒 Shopping Cart**: Add, remove, and manage items in your cart
- **👤 User Registration**: User account creation and profile management
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **🎨 Modern UI**: Built with Ant Design components for a professional look
- **🧭 Navigation**: Intuitive routing with React Router DOM

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.0.0
- **UI Library**: Ant Design (antd) 5.22.4
- **Routing**: React Router DOM 7.0.2
- **Icons**: Ant Design Icons & React Icons
- **HTTP Client**: Axios 1.7.9
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Product/        # Product-related components
│   ├── Navbar.jsx      # Navigation component
│   ├── HeroSection.jsx # Hero carousel
│   ├── CategorySection.jsx
│   └── ...
├── screens/            # Page components
│   ├── Home.js         # Homepage
│   ├── Shop.js         # Shop page
│   ├── About.js        # About page
│   ├── Contact.js      # Contact page
│   └── Category.js     # Category page
├── contexts/           # React contexts
├── assets/             # Static assets
└── App.js              # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cozy_cup_s
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for the best performance.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**

## 🌟 Key Components

- **HeroSection**: Interactive carousel showcasing product categories
- **CategorySection**: Product category navigation
- **LatestArrivals**: Featured products display
- **ShoppingCart**: Cart management functionality
- **RegistrationForm**: User account creation
- **Navbar**: Main navigation with responsive design

## 🎨 Styling

The application uses a combination of:
- Ant Design's built-in styling system
- Custom CSS files for component-specific styles
- Responsive design principles for mobile compatibility

## 🔧 Configuration

The project uses standard Create React App configuration. For advanced customization, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- UI components powered by [Ant Design](https://ant.design/)
- Icons from [Ant Design Icons](https://ant.design/components/icon/) and [React Icons](https://react-icons.github.io/react-icons/)
