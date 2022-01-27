// Test images:
// alexander-hafemann-M-EwSRl8BK8-unsplash
// annie-spratt-Tno1Zd3T6yY-unsplash
// annie-spratt-v7DzvSEcNks-unsplash
// bastien-herve-K791VrKGVf0-unsplash
// daniil-silantev-JfAzBxcRbv4-unsplash
// daniil-silantev-T9rEFLEji5I-unsplash
// dylan-shaw-Y95DsVlJnls-unsplash
// james-padolsey-OcQ1u1e1BJM-unsplash
// kris-mikael-krister-E_6k5jKq7Jc-unsplash
// maria-vojtovicova-b4RrGlaxP_8-unsplash
// maria-vojtovicova-ektq1m_XM6c-unsplash
// maria-vojtovicova-SPvJPDXEmqA-unsplash
// maria-vojtovicova-YdzVifaWbFE-unsplash
// nicolas-j-leclercq-va_nrBLonf8-unsplash
// pascal-debrunner-eYOzdNjFfww-unsplash
// saad-chaudhry-pM2Hpsi-Hxs-unsplash

import React from 'react';

type Props = {
  src: string;
  ratio: '16:9' | 'original';
  sizes: string;
  lazy: boolean;
};

const widths = [128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

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
          className="w-full my-0"
          alt={`Unsplash photograph by ${src
            .replace(/-.{11}-unsplash$$/g, '')
            .replace('-', ' ')}`}
          src={`/images/${src}_${w}_${h}_1200.jpeg`}
          srcSet={getSrcSet()}
          sizes={sizes}
        />
      </picture>
    </div>
  );
};

export default Picture;
