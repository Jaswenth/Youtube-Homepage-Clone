export const numberWithCommas = (num) => {
  if (num != undefined) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const key = "AIzaSyCxtE8S80AZnWKy4UMjNc7CpsAPwJs1goE";
