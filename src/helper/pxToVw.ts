const pxToVw = (px: number, isMobileBreakPoint = false) => {
  const currentBreakPoint = isMobileBreakPoint ? 375 : 1440;
  return `${(px / currentBreakPoint) * 100}vw`;
};

export default pxToVw;
