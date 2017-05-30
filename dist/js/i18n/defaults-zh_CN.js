/*!
 * Bootstrap-select v1.7.10 (https://github.com/paladinsoftware/paladin-bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/paldinsoftware/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function () {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '没有选中任何项',
    noneResultsText: '没有找到匹配项',
    countSelectedText: '选中{1}中的{0}项',
    maxOptionsText: ['超出限制 (最多选择{n}项)', '组选择超出限制(最多选择{n}组)'],
    multipleSeparator: ', '
  };
})(jQuery);


}));
