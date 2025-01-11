const inventory = [];

export const addProduct = (product) => {
  inventory.push(product);
};

export const getInventory = () => inventory;
