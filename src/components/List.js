import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.map(item => {
        return (
          <li className='list-group-item' key={item.id}>{item.name}</li>
          );
        })}
        {/* {everything needs a unique key for react to be able to update it} */}
    </ul>
  );
}

export default List;
