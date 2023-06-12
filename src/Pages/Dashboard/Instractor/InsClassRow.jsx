import React from "react";

const InsClassRow = ({ item }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt="img" />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.name}</div>
          </div>
        </div>
      </td>
      <td className=" uppercase">{item.status}</td>
      <td>{item.students}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Update</button>
      </th>
    </tr>
  );
};

export default InsClassRow;
