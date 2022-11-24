const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
/**
@param {Function} onSuccess
@param {Function} onError
 */
const getData = (onSuccess, onError) => fetch(`${BASE_URL}/data`)
  .then((response) => response.json())
  .then((data) => onSuccess(data))
  .catch(() => onError());
/**
@param {Function} onSuccess
@param {Function} onError
@return {Promise}
 */
const sendData = (onSuccess, onError, data) => fetch(BASE_URL, {
  method: 'POST',
  body: data,
})
  .then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  })
  .catch(() => onError());

export {getData, sendData};
