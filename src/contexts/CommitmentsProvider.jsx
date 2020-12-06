import _ from 'lodash';
import { v4 } from 'uuid';
import React, { createContext, useState } from 'react';

const commitmentsExample = [
  {
    id: 'dd1e8ce5-ba88-4863-b7a1-de2ccbd1f74f',
    product: 'Product',
    createdBy: 'Profile',
    shippingAddress: 'New York',
    paymentMethod: 'Visa',
    status: 'in progress',
  },
  {
    id: "7f46d763-80df-4ad3-b44b-3cc86daa892b",
    product: 'Product',
    createdBy: 'Profile',
    shippingAddress: 'New York',
    paymentMethod: 'Visa',
    status: 'in progress',
  },
  {
    id: "9d514096-b83f-4b31-8196-205c059451cb",
    product: 'Product',
    createdBy: 'Profile',
    shippingAddress: 'New York',
    paymentMethod: 'Visa',
    status: 'in progress',
  },
];

export const CommitmentsContext = createContext(commitmentsExample);

export const CommitmentsProvider = ({ children }) => {
  const [commitments, setCommitments] = useState(commitmentsExample);

  const getAllCommitments = () => {
    return [...commitments];
  };

  const getCommitmentById = (id) => {
    const foundCommitment = _.find(commitments, (o) => o.id === id);

    return { ...foundCommitment };
  };

  const removeCommitmentById = (id) => {
    const deletedCommitment = _.filter(commitments, (o) => o.id === id);
    const filteredCommitments = _.filter(commitments, (o) => o.id !== id);
    setCommitments(filteredCommitments);
    return deletedCommitment;
  };

  const setCommitment = (commitment) => {
    setCommitments((prev) => {
      return [...prev, commitment];
    });
  };

  const ctx = {
    getAllCommitments,
    getCommitmentById,
    removeCommitmentById,
    setCommitment,
  };
  return (
    <CommitmentsContext.Provider value={ctx}>
      {children}
    </CommitmentsContext.Provider>
  );
};
