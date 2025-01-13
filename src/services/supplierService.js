import { get } from './apiService';

export const getSuppliers = async () => {
  return await get('suppliers');
};
