import NavBar from "./components/navbar";
import MainPage from "./home/page";
import Footer from "./components/footer";
import NewCeramics from "./newceramics/page";
import Popular_products from "./popular_products/page";
import Join_club from "./components/join_club";
import GetinTouch from "./get_in_touch/page";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <MainPage />
      <NewCeramics />
      <Popular_products />
      <Join_club />
      <GetinTouch />
      <Footer />
    </div>
  );
}
