import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="w-100">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="d-flex align-items-center justify-content-center">
      <div className="content">
        <div className="d-flex gap-3 mb-4 ">
          <AddClientModal />
          <AddProjectModal />
        </div>
        <Projects />
        <hr />

        <Clients />
        </div>
        </div>
    </div>
  );
}
