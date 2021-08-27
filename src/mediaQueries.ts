const breakpointsPx = {
  sm: 568,
  md: 896,
  lg: 1112,
}

export const mediaQueriesPx = (
  min: keyof typeof breakpointsPx | null,
  max: keyof typeof breakpointsPx | null
) => {
  return (style: TemplateStringsArray | String) => {
    const minWidth = min ? `(min-width: ${breakpointsPx[min]}px)` : ''
    const maxWidth = max ? `(max-width: ${breakpointsPx[max]}px)` : ''

    const combiner = min && max ? ' and ' : ''
    return `@media ${minWidth}${combiner}${maxWidth}  { ${style} }`
  }
}
