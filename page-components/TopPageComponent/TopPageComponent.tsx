import { Card, Htag, Tag } from "../../components"
import { TopPageComponentProps } from "./TopPageComponent.props"

import styles from "./TopPageComponent.module.css"
import { HhData } from "../../components/HhData/HhData"
import { TopLevelCategory } from "../../interfaces/topPage.interface"

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products ? (
          <Tag color="gray" size="m" className={styles.headTag}>
            {products.length}
          </Tag>
        ) : null}
        <span>sorting</span>
      </div>
      <div>
        {products
          ? products.map((item) => (
              <div key={item._id + "_title"}>{item.title}</div>
            ))
          : null}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Vacancies - {page.category}</Htag>
        <Tag color="red" size="m" className={styles.headTag}>
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses ? (
        <HhData {...page.hh} />
      ) : null}
    </div>
  )
}
