import _ from 'lodash';
import React, { createContext, useState } from 'react';

const commitmentsExample = [
  {
    id: 'dd1e8ce5-ba88-4863-b7a1-de2ccbd1f74f',
    product: '55f53340-ada3-4d45-b44f-4d3316553546',
    createdBy: 'Profile',
    shippingAddress: 'New York',
    paymentMethod: 'Visa',
    status: 'in progress',
    createdAt: 1607272498000,
  },
  {
    id: "7f46d763-80df-4ad3-b44b-3cc86daa892b",
    product: 'dd1e8ce5-ba88-4863-b7a1-de2ccbd1f74f',
    createdBy: 'Profile',
    shippingAddress: 'New York',
    paymentMethod: 'Visa',
    status: 'in progress',
    createdAt: 1607252498000,
  },
  {
    id: "9d514096-b83f-4b31-8196-205c059451cb",
    product: 'a4a074e7-faf7-4a33-9646-c0ddb11caa2a',
    createdBy: 'Profile',
    shippingAddress: 'New York',
    paymentMethod: 'Visa',
    status: 'in progress',
    createdAt: 1607232498000,
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

  const deleteCommitmentsByProductId = (productId) => {
    const deletedCommitment = _.filter(commitments, (o) => o.product === productId);
    const filteredCommitments = _.filter(commitments, (o) => o.product !== productId);
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
    deleteCommitmentsByProductId,
  };
  return (
    <CommitmentsContext.Provider value={ctx}>
      {children}
    </CommitmentsContext.Provider>
  );
};
