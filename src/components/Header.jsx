import PropTypes from 'prop-types';

const Header = ({ text = 'Feedback UI' }) => {
  return (
    <header style={{ backgroundColor: 'black', color: '#ff6a95' }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
