export const generateHrefFromHeadline = (headline) => {
  const newHeadline = headline.replace(/\s+/g, "-").toLowerCase();
  return `/${newHeadline}`;
};
