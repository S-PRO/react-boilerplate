import React from 'react';

function ListItem(props) {
  return (
    <li>
      <div>
        {props.item}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  item: React.PropTypes.any,
};

export default ListItem;
