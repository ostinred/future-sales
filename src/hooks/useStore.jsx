import { useContext } from "react";

import { ProductContext } from '../contexts/ProductsProvider.jsx'
import { UserContext } from '../contexts/UserProvider.jsx'
import { CommitmentsContext } from '../contexts/CommitmentsProvider.jsx'

export const useAuth = () => {
  const { getAllProducts } = useContext(ProductContext)
  const { getUserInfo } = useContext(UserContext)
  const { getAllCommitments } = useContext(CommitmentsContext)

  return {
    getAllProducts,
    getAllCommitments,
    getUserInfo,
  };
};
