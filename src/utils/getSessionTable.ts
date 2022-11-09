export const getSesstionTable = (): number => {
  return Number(window.sessionStorage.getItem("sessionTable")) || 0;
};
