/*!
 * Bootstrap-select v1.7.9 (https://github.com/paladinsoftware/paladin-bootstrap-select)
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
    noneSelectedText: '沒有選取任何項目',
    noneResultsText: '沒有找到符合的結果',
    countSelectedText: '已經選取{0}個項目',
    maxOptionsText: ['超過限制 (最多選擇{n}項)', '超過限制(最多選擇{n}組)'],
    selectAllText: '選取全部',
    deselectAllText: '全部取消',
    multipleSeparator: ', '
  };
})(jQuery);


}));
