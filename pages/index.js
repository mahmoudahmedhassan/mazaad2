import { Contenders, Header, Navbar, Slider } from "../components";
export default function Home() {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="container flex flex-wrap w-full">
      <Slider/>
      <Contenders/>
    </div>
    </>
  )
}
