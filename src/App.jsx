import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <AppRoutes />
      <Footer />
    </CartProvider>
  );
}

export default App;
