import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
    console.log('ImageList', props.images);
    const imgList = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })
    return (
        <div className="image-list">
            {imgList}
        </div>
    )
}

export default ImageList;
