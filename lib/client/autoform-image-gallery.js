/*
  AutoForm - Image Gallery Input Type
*/

AutoForm.addInputType('imageGallery', {
  template: 'afImageGallery',
  valueOut: function() {
    return this.val();
  }
});

/*
  Template - Image Gallery
*/

// onCreated
Template.afImageGallery.onCreated(function() {
  this.selectedImage = new ReactiveVar(null);

  this.childImages = [];

  this.addImage = function(imageTemplate) {
    this.childImages.push(imageTemplate);
  };

  this.getAllImages = function() {
    return this.childImages;
  };

  this.setSelectedImage = function(imageId) {
    this.selectedImage.set(imageId);
  };

  this.setCurrentQuery = function(query) {
    this.currentQuery.set(query);
  };
});

Template.afImageGallery.onRendered(function() {
  // Init with preSelectedImage if it exists
  this.autorun(function() {
    var preSelectedImageId = Template.currentData().value;
    if (preSelectedImageId) {
      Template.instance().setSelectedImage(preSelectedImageId);
    }
  });
});

// helpers
Template.afImageGallery.helpers({
  selectedValue: function() {
    var selectedValue = Template.instance().selectedImage.get();
    if (selectedValue) {
      return selectedValue;
    }
  },

  schemaKey: function() {
    return this.atts['data-schema-key'];
  },

  images: function(query) {
    var gallery = Template.instance();

    return gallery.data.selectOptions;
  }
});

/*
  Template - Image Gallery Image
*/

// onCreated
Template.afImageGalleryImage.onCreated(function(a) {
  // Get a reference to the parent gallery
  this.gallery = this.view.parentView.parentView.parentView.templateInstance();
  this.gallery.addImage(this);

  this.isSelected = new ReactiveVar(false);

  this.setSelected = function() {
    // Call setSelectedImage on parent
    this.gallery.setSelectedImage(this.data._id);

    // deselect all other images
    var allImages = this.gallery.getAllImages();
    _.each(allImages, function(image) {
      image.setUnselected();
    });

    this.isSelected.set(true);
  };

  this.setUnselected = function() {
    this.isSelected.set(false);
  };
});

Template.afImageGalleryImage.onRendered(function() {
  // Check if this image is already selected
  var t = this;
  this.autorun(function() {
    if (Template.parentData().value === t.data._id) {
      t.setSelected();
    }
  });
});

// helpers
Template.afImageGalleryImage.helpers({
  isSelected: function() {
    return Template.instance().isSelected.get() ? "selected" : "";
  }
});

// events
Template.afImageGalleryImage.events({
  'click .image': function(e, t) {
    t.setSelected();
  }
});
