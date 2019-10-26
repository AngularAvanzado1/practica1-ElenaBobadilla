module.exports = {
  name: 'practica1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/practica1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
