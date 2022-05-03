import s from './Section.module.css';
import PropTypes from 'prop-types';
export const Section = ({ name, children }) => {
  return (
    <div>
      <p className={s.PSection}>{name}</p>
      {children}
    </div>
  );
};
Section.propType = {
  name: PropTypes.string,
};
