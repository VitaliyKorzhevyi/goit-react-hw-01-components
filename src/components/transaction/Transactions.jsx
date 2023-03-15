import PropTypes from "prop-types";
import css from './Transactions.module.css';

export const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionTable}>
  <thead className={css.head}>
    <tr>
      <th className={css.th}>TYPE</th>
      <th className={css.th}>AMOUNT</th>
      <th className={css.th}>CURRENCY</th>
    </tr>
  </thead>

  <tbody>
  {items.map(item=>(
    <tr key={item.id} className={css.tr}>
      <td className={css.td}>{item.type}</td>
      <td className={css.td}>{item.amount}</td>
      <td className={css.td}>{item.currency}</td>
    </tr>))}
  </tbody>
</table>)
};

TransactionHistory.propTypes={
    data:PropTypes.array,
};
