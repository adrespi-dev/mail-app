import { connect } from 'react-redux';
import ThemeApp from './ThemeApp';

const mapStateToProps = (state: any) => {
  const { currentTheme } = state;
  return {
    theme: currentTheme,
  };
};

const ThemeAppContainer = connect(mapStateToProps)(ThemeApp);

export default ThemeAppContainer;
