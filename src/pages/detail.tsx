import { useParams } from "react-router-dom";
import useGetSpecies from "../query/useGetSpecies";

type Params = {
  id: string;
};
const DetailPage = () => {
  const params = useParams<Params>();
  const { id } = params;

  const { data } = useGetSpecies(id);
  console.log(data);

  return <div>detail</div>;
};

export default DetailPage;
