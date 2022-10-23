import { FirstLevelMenuItem } from "../interfaces/menu.interface"
import { TopLevelCategory } from "../interfaces/topPage.interface"
import {
  BooksIcon,
  CoursesIcon,
  ProductsIcon,
  ServicesIcon,
} from "../assets/images"

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Courses",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Services",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Books",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Products",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
]
