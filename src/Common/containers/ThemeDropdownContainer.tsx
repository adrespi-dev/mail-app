import { connect } from 'react-redux';
import { setTheme } from '../actionCreators';
import ThemeDropdown from '../components/ThemeDropdown';

const mapStateToProps = (state: any) => {
  const { currentTheme } = state;
  return {
    themeName: currentTheme.name,
  };
};

const ThemeDropdownContainer = connect(mapStateToProps, {
  setTheme,
})(ThemeDropdown);

export default ThemeDropdownContainer;
