import { BrowserRouter, Routes as AppRoutes, Route } from "react-router-dom";
import IndexPage from "./pages";
import DetailPage from "./pages/detail";

export default function Router() {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </AppRoutes>
    </BrowserRouter>
  );
}
