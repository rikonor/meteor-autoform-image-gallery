# autoForm Image Gallery
---

![Autoform Gallery Image][GalleryImage]

#### Motivation
The motivation behind this package is that while plugins such as [autoform-file][autoform-file] allow you to upload files, there are no [autoform][autoform] plugins that provide a convenient user interface for selecting those images later on.

#### Usage
Let's say we want to add an image select field to our Article form.
Note: `imageFiles` should be a list of objects containing an `_id` and `url`.
```
Schemas.Articles = new SimpleSchema({
...
image: {
    type: String,
    autoform: {
      type: 'imageGallery',
      options: function() {
        return imageFiles;
      }
    }
  },
...
}
```

[GalleryImage]: docs/gallery.png "AutoForm Gallery Image"
[autoform]: https://github.com/aldeed/meteor-autoform
[autoform-file]: https://github.com/yogiben/meteor-autoform-file
