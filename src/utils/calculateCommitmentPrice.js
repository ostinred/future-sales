import {COMMITMENT_PERCENTS} from "../settings";

export const calculateCommitmentPrice = (sellingPrice) => {
  return (sellingPrice * (COMMITMENT_PERCENTS / 100)).toFixed(2);
}