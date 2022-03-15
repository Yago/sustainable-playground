import React from 'react';
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.es5';
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.es5';
import LightGallery from 'lightgallery/react/Lightgallery.es5';

import Picture from './Picture';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

type Props = {
  images: string[];
};

const Gallery = ({ images }: Props): JSX.Element => {
  const onInit = () => {
    console.log('=============== lightGallery has been initialized');
  };

  return (
    <div>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 gap-2"
      >
        {images.map(image => (
          <a
            href={`/images/${image}_original_3840.jpeg`}
            key={`gallery-image-${image}`}
          >
            <Picture
              src={image}
              ratio="16:9"
              sizes="(min-width: 680px) 304px, calc(47.22vw - 8px)"
              lazy
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
