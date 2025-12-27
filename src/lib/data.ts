import type { Perspective } from './types';

export const images = [
  './img/img1.webp',
  './img/img2.webp',
  './img/img3.webp',
  './img/img4.webp',
  './img/img5.webp',
  './img/img6.webp',
  './img/img7.webp',
  './img/img8.webp',
  './img/img9.webp',
  './img/img10.webp',
  './img/img11.webp',
  './img/img12.webp',
];

export const perspectives: Perspective[] = [
  {
    title: 'Redefining Men\'s Style',
    description: 'Premium fashion for the modern gentleman',
    position: 'top',
  },
  {
    title: 'The Perfect Fit',
    description: 'Where comfort meets contemporary design',
    position: 'center',
  },
  {
    title: 'Upgrade Your Wardrobe',
    description: 'Explore the latest trends and essentials',
    position: 'center',
  },
  {
    title: 'OGGI Brand Factory',
    position: 'bottom',
  },
];

export const cylinderConfig = {
  radius: window.innerWidth > 768 ? 2.5 : 2.2,
  height: window.innerWidth > 768 ? 2 : 1.2,
  radialSegments: 64,
  heightSegments: 1,
};

export const particleConfig = {
  numParticles: 12,
  particleRadius: 3.3, // cylinderRadius + 0.8
  segments: 20,
  angleSpan: 0.3,
};

export const imageConfig = {
  width: 1024,
  height: 1024,
};
