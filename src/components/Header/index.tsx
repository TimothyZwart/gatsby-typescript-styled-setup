import React, { FC, ReactNode } from "react"
import { Container, TextHolder, TitleContainer, TitleLink } from "./styles"

interface Props {
  // children: ReactNode
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => {
  return (
    <>
      <Container>
        <TitleContainer>
          <TextHolder>
            <TitleLink to="/">{siteTitle}</TitleLink>
          </TextHolder>
        </TitleContainer>
      </Container>
    </>
  )
}

export default Header
