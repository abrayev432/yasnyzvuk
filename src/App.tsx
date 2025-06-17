
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import Catalog from './pages/Catalog';
import Services from './pages/Services';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Delivery from './pages/Delivery';
import News from './pages/News';
import ProductDetail from './components/product/ProductDetail';
import { CartProvider } from './contexts/CartContext';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from './components/common/ScrollToTop';
import FloatingSocialButtons from './components/common/FloatingSocialButtons';
import NotFound from './pages/NotFound';
import Accessories from './pages/Accessories';
import AccessoryDetail from './pages/AccessoryDetail';
import Checkout from './pages/Checkout';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <CartProvider>
            <div className="min-h-screen bg-background">
              <ScrollToTop />
              <FloatingSocialButtons />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:productId" element={<ProductDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/news" element={<News />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/accessories/:accessoryId" element={<AccessoryDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
            </div>
          </CartProvider>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
