import React from 'react';
import styles from './card.module.css';

export type CardProps = {};

export default function Card({
  className,
  ...props
}: CardProps & React.BaseHTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.card} ${className ?? ''}`} {...props} />;
}
