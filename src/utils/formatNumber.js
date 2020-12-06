import _ from "lodash";


export const formatNumber = (num) => {
  const strNum = `${num}`;

  return _.reverse(_.map(_.reverse(strNum.split('')), (s, i) => `${s}${i%3 === 0 ? ' ' : ''}`)).join('');
}