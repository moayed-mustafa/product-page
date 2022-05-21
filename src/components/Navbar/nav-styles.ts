import styled from "@emotion/styled"

export const Container = styled.div<{ justify?: string, basis?: string }>(({ justify, basis }) => ({
  display: "flex",
  padding: "8px 16px",
  gap: "12px",
  alignItems: "center",
  ...(basis ? {
    flexBasis: basis
  } : { width: "100%", flexBasis: "auto" }),
  ...(justify ? { justifyContent: justify } : { justifyContent: "space-between" })
}))
