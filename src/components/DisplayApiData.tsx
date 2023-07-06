import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../redux";

const DisplayApiData = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.product);

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card">
      <div className="card-header bg-info text-white text-uppercase">Display data coming from api</div>
      <div className="card-body overflow-auto">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {data?.map((product:any, index:number)=> {
          return <tr>
              <td>{index+1}</td>
              <td>
                <img src={product.thumbnail} alt={product.title} className="img-thumbnail" width={50} />
              </td>
              <td>{product.title}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
          </tr>
        })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayApiData;
