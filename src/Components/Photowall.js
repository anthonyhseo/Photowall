import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Photo from './Photo';

const Photowall = props => {
  return (
    <div>
      <Link to="/AddPhoto" className="addIcon" />
      <div className="photoGrid">
        {props.posts
          .sort(function(x, y) {
            return y.id - x.id;
          })
          .map((post, i) => {
            return (
              <Photo key={i} post={post} {...props} index={i} />
            );
          })}
      </div>
    </div>
  );
};

Photowall.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Photowall;
