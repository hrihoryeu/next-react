import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';
import { ReactNode } from 'react';
export interface CardProps extends DetailedHTMLProps<ParamHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue'
  children: ReactNode
}