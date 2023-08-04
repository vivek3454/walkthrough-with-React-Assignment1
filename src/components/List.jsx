import React from 'react'

function List(props) {
    const listItems = props.items.map((item) =>
      <li key={item}>{item}</li>
    );
    
    return <ul style={{width: '75px', marginInline: 'auto'}}>{listItems}</ul>;
  }
  

export default List