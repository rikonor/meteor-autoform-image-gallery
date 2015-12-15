Package.describe({
  name: 'rikonor:autoform-image-gallery',
  version: '0.0.2',
  summary: 'Select images in autoform',
  git: 'https://github.com/rikonor/meteor-autoform-image-gallery.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'templating',
    'aldeed:autoform@5.8.0',
    'fourseven:scss@3.2.0'
  ]);

  api.addFiles('lib/client/autoform-image-gallery.html', 'client');
  api.addFiles('lib/client/autoform-image-gallery.js', 'client');
  api.addFiles('lib/client/autoform-image-gallery.scss', 'client');
});
