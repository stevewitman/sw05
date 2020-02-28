module.exports = {
  name: 'sw05',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw05',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
