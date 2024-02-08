import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="bg-black p-10">
      <div className="bg-white p-10 border rounded-lg">
          <Header />

          <div className="flex justify-between flex-wrap gap-3 my-5">
            <Card color="#8272DA" title="20" subTitle="Chennai" />
            <Card color="#FD6663" title="December" subTitle="14:06:45" />
            <Card color="#FCA201" title="Built using" subTitle="React" />
          </div>

          <TodoContainer />
      </div>
    </div>
  );
}

export default App;
