import "./App.css";
import image from "./assets/img/homendeferro.jpg";
import ContainerLeft from "./components/ContainerLeft";
import ContainerRight from "./components/ContainerRight";

function App() {
  return (
    <main>
      <div className="card-principal">
        <ContainerLeft image={image} />

        <ContainerRight />
      </div>
    </main>
  );
}

export default App;
