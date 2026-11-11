import type { InputHTMLAttributes } from 'react';
import './styles.css';

/** Campo de texto no mesmo visual dos formulários do Agent Studio. */
export function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={className ? `ec-input ${className}` : 'ec-input'} {...rest} />;
}
