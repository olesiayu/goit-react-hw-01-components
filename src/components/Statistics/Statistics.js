import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.list}>
          {stats.map(stat => (<li
            style={{backgroundColor: getRandomHexColor()}}
            className={s.item} key={stat.id} >
      <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
    </li>))}
    
  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export default Statistics;