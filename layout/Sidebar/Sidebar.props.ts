import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactNode } from 'react';
export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
}
