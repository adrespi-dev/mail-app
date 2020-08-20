import Language from '../models/Language';
import English from '../../assets/img/English.svg';
import Espaniol from '../../assets/img/Espaniol.svg';

const LANGUAJES: Language[] = [
  { name: 'Español', shortName: 'ES', flagUrl: Espaniol },
  {
    name: 'English',
    shortName: 'EN',
    flagUrl: English,
  },
];

export default LANGUAJES;
