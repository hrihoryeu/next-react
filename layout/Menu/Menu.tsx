import styles from "./Menu.module.css"
import cn from "classnames"
import { useContext } from "react"
import { AppContext } from "../../context/app.context"
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface"
import Link from "next/link"
import { useRouter } from "next/router"
import { firstLevelMenu } from "../../helpers/helpers"

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)
  const router = useRouter()

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((item) => {
          if (item._id.secondCategory == secondCategory) {
            item.isOpened = !item.isOpened
          }
          return item
        })
      )
  }

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((item) => {
          if (
            item.pages
              .map((page) => page.alias)
              .includes(router.asPath.split("/")[2])
          ) {
            item.isOpened = true
          }
          return (
            <div key={item._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(item._id.secondCategory)}
              >
                {item._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: item.isOpened,
                })}
              >
                {buildThirdLevel(item.pages, menuItem.route)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <Link href={`/${route}/${page.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]:
              `/${route}/${page.alias}` == router.asPath,
          })}
        >
          {page.category}
        </a>
      </Link>
    ))
  }

  return <div className={styles.menu}>{buildFirstLevel()}</div>
}
