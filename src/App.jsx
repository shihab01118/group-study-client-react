import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainLayout>
        <Outlet />
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
