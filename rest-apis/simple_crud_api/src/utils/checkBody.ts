const checkBody = (obj) => {
  for (const key in obj) {
    if (!obj[key]) return false;
  }
  return true;
};

export default checkBody;
