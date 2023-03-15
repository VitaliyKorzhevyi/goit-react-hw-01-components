import css from "./Statistics.module.css";
import PropTypes from "prop-types";


export const Statistics = ({array ,title}) => {
    return (
<section className={css.statistics}>
{title && (<h2 className={css.title}>{title}</h2>)}

  <ul className={css.titleList}>
  {array.map(item => (
    <li key={item.id} className={css.item}>
    <span className={css.label}>{item.label}</span>
    <span className={css.percentage}>{item.percentage}</span>
  </li>
  ))}
  </ul>
</section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  };