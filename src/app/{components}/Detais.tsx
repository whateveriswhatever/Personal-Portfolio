import React from "react";

type ContentsParam = {
  params: string;
  prevContent: string;
  nextContent: string;
};

const Details = () => {
  return (
    <div className="absolute h-full flex items-center">
      <h1></h1>
    </div>
  );
};

export default Details;

const Content: React.FC<ContentsParam> = ({
  params,
  prevContent,
  nextContent,
}) => {
  return (
    <div className="relative block overflow-hidden">
      <a href={params}>{prevContent}</a>
    </div>
  );
};
