import { ReactNode } from "react";

type SectionProp = {
  title?: string,
  children: ReactNode
}

export const Section = ({ children, title="My Subheading" }: SectionProp) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}