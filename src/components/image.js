import './image.css';

import React from 'react';

const Image = () => {
    return (
        <div className='show'>
            <img
                src="https://images.pexels.com/photos/4098908/pexels-photo-4098908.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="Imagen increible"
                width="100%"
            />
        </div>
    );
};

export default Image;
