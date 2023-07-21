import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home({children}:{children:string}) {
  return (
    <>
    <Header/>
    <div className="w-11/12 mx-auto min-h-[calc(100vh-200px)]">
    {children}
    </div>
    <Footer/>
    </>
  );
}
