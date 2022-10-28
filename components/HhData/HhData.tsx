import { HhDataProps } from "./HhData.props"
import styles from "./HhData.module.css"
import cn from "classnames"
import { Card } from "../Card/Card"
import { RateStarIcon } from "../../assets/images"
import { priceRu } from "../../helpers/helpers"

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.amount}>
        <div className={styles.title}>Amount of vacancies</div>
        <div className={styles.amountValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Junior</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateStarIcon className={cn(styles.filled, styles.rateStar)} />
            <RateStarIcon className={styles.rateStar} />
            <RateStarIcon className={styles.rateStar} />
          </div>
        </div>
        <div>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <RateStarIcon className={cn(styles.filled, styles.rateStar)} />
            <RateStarIcon className={cn(styles.filled, styles.rateStar)} />
            <RateStarIcon className={styles.rateStar} />
          </div>
        </div>
        <div>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateStarIcon className={cn(styles.filled, styles.rateStar)} />
            <RateStarIcon className={cn(styles.filled, styles.rateStar)} />
            <RateStarIcon className={cn(styles.filled, styles.rateStar)} />
          </div>
        </div>
      </Card>
    </div>
  )
}
