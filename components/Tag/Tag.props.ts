import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';
import { ReactNode } from 'react';
export interface PProps extends DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size: 's' | 'm' | 'l'
  children: ReactNode
}