import PropTypes from 'prop-types';
// добавить выполнение условия для title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </section>
  );
}

// Statistics.propTypes = {
//   stats: PropTypes.objectOf(
//     PropTypes.shape({
//       label: PropTypes.string,
//       percentage: PropTypes.number,
//     }),
//   ),
// };
