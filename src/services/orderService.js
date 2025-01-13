import { get } from './apiService';

export const getOrders = async () => {
  return await get('orders');
};
