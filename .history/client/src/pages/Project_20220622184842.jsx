import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <div className="content">
            <Link to="/" className="btn btn-ligh btn-sm w-25 d-inline ms-auto">
              Back
            </Link>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <h6 className="mt-3">Project Status</h6>
            <h6 className="lead">{data.project.status}</p>

            <ClientInfo client={data.project.client} />
            <EditProjectForm project={data.project} />
            <DeleteProjectButton projectId={data.project.id} />
          </div>
        </div>
      )}
    </>
  );
}
