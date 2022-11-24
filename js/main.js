import {renderPictures} from './picture.js';
import {initForm} from './form.js';
import {getData} from './network.js';
import {showAlert} from './popup.js';

getData(renderPictures, showAlert).then(() => initForm());
