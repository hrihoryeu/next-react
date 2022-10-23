import { useState } from "react"
import { GetStaticProps } from "next"
import axios from "axios"

import { Button, Htag, P, Rating, Tag } from "../components"
import { withLayout } from "../layout/Layout"
import { MenuItem } from "../interfaces/menu.interface"

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(0)
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Btn primary
      </Button>
      <Button appearance="ghost" arrow="down">
        Btn ghost
      </Button>
      <P size="s">hello my name is S</P>
      <P size="m">hello my name is M</P>
      <P size="l">hello my name is L</P>
      <Tag size="m" color="ghost">
        Medium
      </Tag>
      <Tag size="s" color="red">
        Small
      </Tag>
      <Tag size="s" color="green">
        Small
      </Tag>
      <Tag size="s" color="gray">
        Small
      </Tag>
      <Tag size="m" color="primary">
        Medium
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
