import { FooterProps } from "./Footer.props"
import styles from "./Footer.module.css"
import cn from "classnames"
import { P } from "../../components"
import { format } from "date-fns"

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <P size="m">
        OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
      </P>
      <a href="#">
        <P size="m">Пользовательское соглашение</P>
      </a>
      <a href="#">
        <P size="m">Политика конфиденциальности</P>
      </a>
    </footer>
  )
}
