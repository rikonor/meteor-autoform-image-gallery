Package.describe({
  name: 'rikonor:autoform-image-select',
  version: '0.0.1',
  summary: 'Select images in autoform',
  git: 'https://github.com/rikonor/meteor-autoform-image-select.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');

  api.addFiles('autoform-image-select.js');
});
