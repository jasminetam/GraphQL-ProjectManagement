export default function ProjectCard({ project }) {
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-title">{project.name}</h4>
            <a className="btn btn-light" href={`/project/${project.id}`}>
              <h6>View</h6>
            </a>
          </div>
          <p className="large">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
