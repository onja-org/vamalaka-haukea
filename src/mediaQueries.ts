export const breakpointsEm = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60
};

export const breakpointsPx = {
  sm: 240,
  md: 360,
  lg: 900,
  xl: 1200
};

export const mediaQueriesPx = (
  min: keyof typeof breakpointsPx | null,
  max: keyof typeof breakpointsPx | null
) => {
  return (style: TemplateStringsArray | String) => {
    const minWidth = min ? `(min-width: ${breakpointsPx[min]}px)` : "";
    const maxWidth = max ? `(max-width: ${breakpointsPx[max]}px)` : "";

    const combiner = min && max ? " and " : "";
    return `@media ${minWidth}${combiner}${maxWidth}  { ${style} }`;
  };
};

export const mediaQueriesEm = (
  min: keyof typeof breakpointsEm,
  max: keyof typeof breakpointsEm
) => {
  return (style: TemplateStringsArray | String) => {
    const minWidth = min ? `(min-width: ${breakpointsPx[min]}em)` : "";
    const maxWidth = max ? `(max-width: ${breakpointsPx[min]}em)` : "";

    const combiner = min && max ? " and " : "";
    return `@media ${minWidth}${combiner}${maxWidth}  { ${style} }`;
  };
};
