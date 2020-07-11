import React from 'react';
import { Card } from 'antd';


const ListOfProjects = ({ data }) => {

  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '10px',
    backgroundColor: 'white', 
  };

console.log(data);
  const list = data && data.map((el) => {
    console.log(el.homepage)
    return(
        <Card hoverable title={el.name} key={el.name}
          extra={<a href={el.homepage}>More</a>} style={{ width: 300 }}>
          <span>stars: </span>{el.stargazers_count}
          <p></p>
          <span>forks: </span>{el.forks}
        </Card>
    )
  });
  return (
    <>
      <div style={styles}>
        {list}
      </div>
    </>
  );
}
 
export default ListOfProjects;