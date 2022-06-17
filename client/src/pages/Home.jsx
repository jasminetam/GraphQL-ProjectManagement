import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content">
        <div className="d-flex gap-3 mb-4">
          <AddClientModal />
          <AddProjectModal />
        </div>
        <Projects />
        <hr />
        <Clients />
      </div>
    </div>
  );
}
