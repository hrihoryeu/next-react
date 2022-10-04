import { Button, Htag, P } from "../components"

export default function Home(): JSX.Element {
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
    </>
  )
}
