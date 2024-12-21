const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
  return tf.loadGraphModel('https://storage.googleapis.com/storage-munarah-ml/model.json');
}
module.exports = loadModel;
