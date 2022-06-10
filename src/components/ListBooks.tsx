import React from "react";
import ItemBook from "./ItemBook";
const ListBooks:React.FC = () => {
  return (
    <ul style={{listStyleType: 'none', display:'flex', flexWrap: 'wrap'}}>
      <ItemBook />;
    </ul>
  );
};

export default ListBooks;
