import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Produkter from "./pages/produkter/produkter";
import Navigation from "./components/Navigation/Navigation";
import SpoergOmSundhed from "./pages/spoerg-om-sundhed/spoerg-om-sundhed.module";
import BlivMedlem from "./pages/bliv-medlem/bliv-medlem";
import Footer from "./components/Footer/footer";
import PageNotFound from "./pages/pageNotFound/pageNotFound";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/Produkter",
      element: <Produkter></Produkter>,
    },
    {
      path: "/spoerg-om-sundhed",
      element: <SpoergOmSundhed></SpoergOmSundhed>,
    },
    {
      path: "/bliv-medlem",
      element: <BlivMedlem></BlivMedlem>,
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>,
    },
  ]);

  return (
    <>
      <div>
        <Navigation></Navigation>
        <div className="globale-page-wrapper">{routes}</div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
