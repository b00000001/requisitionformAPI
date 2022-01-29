import APIFunctions from './APIFunctions/index';
(async () => {
  try {
    const APIController = new APIFunctions();
    const { data } = await APIController.getApp();
    console.log(data);
  } catch (e) {
    console.log('error');
  }
})();
