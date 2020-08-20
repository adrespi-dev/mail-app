import { connect } from 'react-redux';
import LanguageDropdown from '../components/LanguageDropdown';
import { setLanguage } from '../actionCreators';

const mapStateToProps = (state: any) => {
  const { currentLanguage } = state;
  return {
    language: currentLanguage,
  };
};

const LanguageDropdownContainer = connect(mapStateToProps, {
  setLanguage,
})(LanguageDropdown);

export default LanguageDropdownContainer;
