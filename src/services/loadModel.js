const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
  return tf.loadGraphModel('https://storage.googleapis.com/fatimah-nur-storage/model.json');
}
module.exports = loadModel;
