const ALERT_SHOW_TIME = 5000;
const URL_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';
const URL_PHOTO = `${URL_SERVER}/data`;

//Функция необходимых стилей при получении сообщения об ошибке
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

//получаем данные с сервера методом GET
const getData = (onSuccess) => {
  fetch(
    URL_PHOTO,
  )
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showAlert('Ошибка загрузки');
    });
};

//отправляем данные с сервера методом POST
const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      URL_SERVER,
      {
        method: 'POST',
        body,
      },
    );
    if(!response.ok) {
      throw new Error('Форма не отправлена. Попробуйте ещё раз');
    }
    onSuccess();
  }
  catch(error) {
    onFail(error.message);
  }
};

export {getData, sendData};
