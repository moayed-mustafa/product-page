import styled from "styled-components";
import React from "react"

const ProductContainer = () => {
  return (
    <Container >
      <h1>Carousel Component</h1>
      <h1>Product Info Component</h1>
    </Container>
  )
}

const Container = styled.div({
  width: "100%", padding: "32px 64px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr"
});

export default ProductContainer;
