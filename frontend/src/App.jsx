import { Outlet } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <Layout>
        <Outlet />
      </Layout>
    </HelmetProvider>
  );
}
