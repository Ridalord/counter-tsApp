import { ReactElement } from "react";

type HeadingProps = { title: string };

export default function Heading(props: HeadingProps): ReactElement {
  return (
    <h1>{props.title}</h1>
  )
}