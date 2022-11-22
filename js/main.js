import {getPictures} from './data.js';
import {renderPictures} from './picture.js';
import {initForm} from './form.js';
import {getData} from './network.js';
import {showAlert, successSubmitHandler, errorSubmitHandler} from './utils.js';

getData(renderPictures, getPictures, showAlert).then(() => initForm(successSubmitHandler, errorSubmitHandler));
