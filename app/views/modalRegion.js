// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, ModalRegion, boostrap, marionette, _;
    $ = require('jquery');
    _ = require('underscore');
    boostrap = require('bootstrap');
    marionette = require('marionette');
    ModalRegion = (function(_super) {

      __extends(ModalRegion, _super);

      ModalRegion.prototype.el = "#modal";

      function ModalRegion() {
        this.showModal = __bind(this.showModal, this);
        _.bindAll(this);
        this.on("view:show", this.showModal, this);
      }

      ModalRegion.prototype.getEl = function(selector) {
        var $el;
        $el = $(selector);
        $el.on("hidden", this.close);
        return $el;
      };

      ModalRegion.prototype.showModal = function(view) {
        view.on("close", this.hideModal, this);
        return this.$el.modal('show').addClass('modal-big');
      };

      ModalRegion.prototype.hideModal = function() {
        return this.$el.modal('hide');
      };

      return ModalRegion;

    })(Backbone.Marionette.Region);
    return ModalRegion;
  });

}).call(this);
