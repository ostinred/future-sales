import _ from 'lodash';
import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';
import _ from 'lodash';

const commitmentsExample = [
  {
    id: v4(),
    product: 'Product',
    createdBy: 'Profile',
    shippingAddress: 'New York',
    paymentMethod: 'Visa',
    status: 'in progress',
  },
  {
    id: v4(),
    product: 'Product',
    createdBy: 'Profile',
    shippingAddress: 'New York',
    paymentMethod: 'Visa',
    status: 'in progress',
  },
  {
    id: v4(),
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
    return [...commitments]
  }

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
