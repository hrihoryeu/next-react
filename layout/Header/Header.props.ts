import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactNode } from 'react';
export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
}
