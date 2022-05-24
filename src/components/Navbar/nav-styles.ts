import styled from "styled-components";

export const Container = styled.div<{ justify?: string, basis?: string }>(({ justify, basis }) => ({
  position: "relative",
  display: "flex",
  padding: "8px 16px",
  gap: "12px",
  alignItems: "center",
  ...(basis ? {
    flexBasis: basis
  } : { width: "100%", flexBasis: "auto" }),
  ...(justify ? { justifyContent: justify } : { justifyContent: "space-between" })
}));

export const NavItem = styled.p(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: theme.lineHeights.mid,
  fontSize: theme.fontSizes[5],
  fontWeight: theme.fontWeights.mid,
  cursor: "pointer"
}));

export const ActiveItem = styled.div(({ theme, coord }) => ({
  width: "100px",
  height: "5px",
  background: theme.palette.brand,
  position: "absolute",
  top: coord.x,
  left: coord.y,
  transition: "all ease-in-out 2s"
}));

export const Avatar = styled.img(({ theme }) => ({
  borderRadius: "40px",
  height: "40px",
  width: "40px",
  "&:hover": {
    border: `solid 1px ${theme.palette.brand}`,
  },
}))
