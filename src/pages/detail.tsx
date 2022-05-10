import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};
const DetailPage = () => {
  const params = useParams<Params>();
  const id = params.id;

  return <div>detail</div>;
};

export default DetailPage;
