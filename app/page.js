import Mainbar from "./_components/Mainbar";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
export default function Home() {
  return (
    <div className="grid grid-cols-9 bg-slate-800 text-stone-100">
      <div className="col-start-1 col-end-3 border-r border-r-stone-800">
        {" "}
        <Sidebar />
      </div>
      <div className="col-start-3 col-end-10 border-r  ">
        <Mainbar />
      </div>
    </div>
  );
}
