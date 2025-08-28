import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AvailablePartsPage from "./pages/AvailablePartsPage";
import OrderOverviewPage from "./pages/OrderOverviewPage";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/available-parts" element={<AvailablePartsPage />} />
        <Route path="/order-overview" element={<OrderOverviewPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
