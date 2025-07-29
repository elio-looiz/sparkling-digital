// app/projects/ford-dealership/_components/InteractiveImage.tsx
'use client';

import Image from 'next/image';
import styles from './InteractiveImage.module.css';

type Props = {
  src: string;
  alt: string;
  heightClassName?: string; // Позволяет задавать высоту снаружи
};

export default function InteractiveImage({
  src,
  alt,
  heightClassName = 'h-96',
}: Props) {
  return (
    // 'style' используется для динамической установки фона, чтобы псевдо-элементы могли его унаследовать
    <div
      className={`${styles.imageContainer} ${heightClassName} w-full rounded-2xl`}
      style={{ background: `url(${src}) center center / cover` }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={styles.image}
      />
    </div>
  );
}