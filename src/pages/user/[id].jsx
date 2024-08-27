import React from 'react';

const index = (props) => {
  console.log(props);
  return (
    <div>
      <h1>user page</h1>
      <hr />
      带来的参数是{props.match.params.id}
    </div>
  );
};

export default index;
