import { Link } from "gatsby"
import React from "react"
import ComponentHeader from "./Header/index"
interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <ComponentHeader siteTitle={siteTitle} />
)

export default Header
