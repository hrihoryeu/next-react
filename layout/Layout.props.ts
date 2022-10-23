import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactNode } from 'react';
export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}
