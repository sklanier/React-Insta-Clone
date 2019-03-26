import React from 'react';
import PropTypes from './../../../node_modules/prop-types';
import dummyData from '../../dummy-data';

function PostContainer(props) {
  console.log(props);
  return (
    <>
      {props.post.map(dummyData => (
        <div key={dummyData.username} className="post">
          <img src={dummyData.imageUrl} alt={dummyData.username} />
          <div>
            <h3>{dummyData.name}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

PostContainer.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.string,
    })
  )
};

export default PostContainer;