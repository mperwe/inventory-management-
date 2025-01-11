export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  