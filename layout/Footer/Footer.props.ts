import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactNode } from 'react';
export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
}
