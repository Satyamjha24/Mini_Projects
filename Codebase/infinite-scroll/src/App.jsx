import InfiniteScroll from "./Components/InfiniteScroll";

function App() {
  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-center font-bold text-blue-600 m-4 font-serif tracking-widest">
          Infinite Scrolling App
        </h1>
        <InfiniteScroll />
      </div>
    </>
  );
}

export default App;
