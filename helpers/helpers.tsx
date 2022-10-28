import { FirstLevelMenuItem } from "../interfaces/menu.interface"
import { TopLevelCategory } from "../interfaces/topPage.interface"
import {
  BooksIcon,
  CoursesIcon,
  ProductsIcon,
  ServicesIcon,
} from "../assets/images"

import styles from "./helpers.module.css"

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Courses",
    icon: <CoursesIcon className={styles.icon} />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Services",
    icon: <ServicesIcon className={styles.icon} />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Books",
    icon: <BooksIcon className={styles.icon} />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Products",
    icon: <ProductsIcon className={styles.icon} />,
    id: TopLevelCategory.Products,
  },
]

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽")
