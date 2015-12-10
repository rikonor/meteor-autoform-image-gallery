# autoForm Image Gallery Select
---

#### Motivation
The motivation behind this package is that while plugins such as [autoform-file](https://github.com/yogiben/meteor-autoform-file) allow you to upload files, there are no autoform plugins that provide a convenient user interface for selecting those images later on.

#### Usage
Let's say we want to add an image select field to our Article form.
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
