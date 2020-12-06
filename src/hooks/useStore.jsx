import { useContext } from "react";

import { ProductContext } from '../contexts/ProductsProvider.jsx'
import { UserContext } from '../contexts/UserProvider.jsx'
import { CommitmentsContext } from '../contexts/CommitmentsProvider.jsx'

export const useStore = () => {
  const { getAllProducts, getProduct } = useContext(ProductContext)
  const { getUserInfo } = useContext(UserContext)
  const { getAllCommitments } = useContext(CommitmentsContext)

  return {
    getAllProducts,
    getAllProducts,
    getAllCommitments,
    getUserInfo,
    getProduct
  };
};
