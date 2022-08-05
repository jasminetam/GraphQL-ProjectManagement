import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Spinner from './Spinner';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="w-100">
        <div className="d-flex overflow-auto">
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th className="h5">Name</th>
                <th className="h5">Email</th>
                <th className="h5">Phone</th>
                <th className="h5"></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
          </div>
          </div>
      )}
    </>
  );
}
