import React from 'react';

import config from '../config/images.json';

type Props = {
  src: string;
  ratio: '16:9' | 'original';
  sizes: string;
  lazy: boolean;
};

const widths = [128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];
const originalSizes: Record<string, number[]> = config;

const Picture = ({ src, ratio, sizes, lazy = true }: Props): JSX.Element => {
  const [w, h] = ratio !== 'original' ? ratio.split(':').map(i => +i) : [1, 1];
  const getSrcSet = (format = 'jpeg'): string =>
    widths
      .map(
        i =>
          `/images/${src}_${
            ratio === 'original' ? 'original' : `${w}_${h}`
          }_${i}.${format} ${i}w`
      )
      .join(', ');

  return (
    <div
      className={`${
        ratio !== 'original' && `aspect-w-${w} aspect-h-${h} bg-gray-100`
      }`}
    >
      <picture>
        {['webp', 'jpeg'].map(format => (
          <source
            key={`src-${format}`}
            type={`image/${format}`}
            srcSet={getSrcSet(format)}
            sizes={sizes}
          />
        ))}
        <img
          loading={lazy ? 'lazy' : 'eager'}
          className="w-full h-auto my-0"
          alt={`Unsplash photograph by ${src
            .replace(/-.{11}-unsplash$$/g, '')
            .replace('-', ' ')}`}
          src={`/images/${src}_${w}_${h}_1200.jpeg`}
          srcSet={getSrcSet()}
          sizes={sizes}
          width={ratio === 'original' ? originalSizes?.[src]?.[0] : w}
          height={ratio === 'original' ? originalSizes?.[src]?.[1] : h}
        />
      </picture>
    </div>
  );
};

export default Picture;
