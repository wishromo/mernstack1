import React from "react";

const Child2 = ({ showList, items }) => {
  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold">Child 2</h2>
      {showList && (
        <ul className="list-disc list-inside">
          {items.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Child2;