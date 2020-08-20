import { SET_LANGUAGE } from '../actionCreators';
import LANGUAJES from '../data/languages';

export const languageReducer = (state: any = LANGUAJES[0], action: any) => {
  const { type, languageShortName } = action;
  if (type === SET_LANGUAGE) {
    state = { ...LANGUAJES.find((l) => l.shortName === languageShortName) };
    return state;
  }
  return state;
};
