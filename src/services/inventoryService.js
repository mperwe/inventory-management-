import { get } from './apiService';

export const getInventory = async () => {
  return await get('inventory');
};
