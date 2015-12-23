Package.describe({
  name: 'rikonor:autoform-image-gallery',
  version: '0.0.3',
  summary: 'Select images in autoform',
  git: 'https://github.com/rikonor/meteor-autoform-image-gallery.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'aldeed:autoform@5.8.0',
    'templating',
  ]);

  api.addFiles('lib/client/autoform-image-gallery.html', 'client');
  api.addFiles('lib/client/autoform-image-gallery.js', 'client');
  api.addFiles('lib/client/autoform-image-gallery.css', 'client');
});
