module.exports = {
  name: 'lowlandtech',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/stepacard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
