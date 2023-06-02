import React, { memo, useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/data");
    const items = await data.json();
    setData(items);
  };
  return (
    <section>
      <div className="container-fluid">
        <h1 className="mt-5">Welcome</h1>
        <p>{data}</p>
      </div>
    </section>
  );
};
export default (Data);
