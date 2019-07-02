const removeEmpty = (obj) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
    else if (obj[key] == null || obj[key] == '' ) delete obj[key];
  });
  return obj;
};

