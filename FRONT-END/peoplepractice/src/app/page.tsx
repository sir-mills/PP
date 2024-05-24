export default function Home() {
  return (
    <main className="main-container relative flex">
      <div className="side-container w-[250px] h-[1109px] bg-white flex-shrink-0"></div>
      <div className="content-container relative w-[1190px] h-[1109px] bg-[#F8FAFC] ">
        <div className="header-container w-[1190px] h-[88px] bg-[#FFFFFF] sticky top-0"></div>
        <div className="overview-container w-[1126px] h-[124px] top-[200px] left-[32px] bg-blue-100"></div>
        <div className="charts flex flex-wrap justify-between w-[1126px]">
          <div className="graph-container w-[662px] h-[364px] top-[396px] left-[32px] bg-blue-300"></div>
          <div className="chart-container w-[413px] h-[364px] top-[396px] left-[721px] bg-blue-200"></div>
        </div>
        <div className="analytics-container "></div>
      </div>
    </main>
  );
}
