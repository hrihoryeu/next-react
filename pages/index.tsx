import { useEffect, useLayoutEffect, useState } from "react"
import { Button, Htag, P, Rating, Tag } from "../components"

export default function Home(): JSX.Element {
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
