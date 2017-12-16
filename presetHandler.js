// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray) => {
  let responseArray = [];
  if (requestType !== 'GET' && requestType !== 'PUT') {
    responseArray[0] = 400;
  } else if (!presets[presetsIndex]) {
    responseArray[0] = 404;
  } else if (presets[presetsIndex]) {
    responseArray[0] = 200;
    if (requestType === 'GET') {
      responseArray[1] = presets[presetsIndex];
    } else if (requestType === 'PUT') {
      presets[presetsIndex] = newPresetArray;
      responseArray[1] = newPresetArray;
    }
  }

  return responseArray;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
