import css from "./TransactionHistory.module.css"
import clsx from "clsx";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function TransactionHistory({items}) {
return <table className={css.table}>
<thead className={css.thead}>
  <tr>
    <th className={css[`head-item`]}>Type</th>
    <th className={css[`head-item`]}>Amount</th>
    <th className={css[`head-item`]}>Currency</th>
  </tr>
</thead>
 
<tbody>
{items.map((item, index) => {
 return<tr className={clsx({[css.oddRow]: index % 2 !==0, [css.evenRow]: index % 2 === 0})} key={item.id}>
    <td className={css[`table-item`]}>{capitalize(item.type)}</td>
    <td className={css[`table-item`]}>{item.amount}</td>
    <td className={css[`table-item`]}>{item.currency}</td>
  </tr>
  })}
</tbody>
</table>
}
