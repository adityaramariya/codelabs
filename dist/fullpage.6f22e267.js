// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/fullpage/build/fullpage.js":[function(require,module,exports) {
/*!
 * 
 * fullpage 1.5.0
 * Author: 抹桥 <yq12315@gmail.com>(http://www.kisnows.com)
 * Homepage: https://github.com/kisnows/fullpage#readme
 * Release under MIT.
 * update 2016-04-29
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "D:\\Github\\fullpage-light.js\\static";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _init = __webpack_require__(1);\n\nvar _page = __webpack_require__(4);\n\nvar _page2 = _interopRequireDefault(_page);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fullpage = {\n  init: _init.init,\n  scrollPage: _page2.default.scrollPage,\n  scrollSlide: _page2.default.scrollSlide,\n  moveTo: _page2.default.moveTo,\n  moveToNext: _page2.default.move.next,\n  moveToPre: _page2.default.move.pre,\n  slideToNext: _page2.default.slide.next,\n  slideToPre: _page2.default.slide.pre\n};\n\n(function (global) {\n  global.fullpage = fullpage;\n})(window);\n\nexports.default = fullpage;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.options = exports.sections = exports.sectionContent = exports.stepWidth = exports.stepHeight = exports.init = undefined;\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _events = __webpack_require__(3);\n\nvar _events2 = _interopRequireDefault(_events);\n\nvar _page = __webpack_require__(4);\n\nvar _page2 = _interopRequireDefault(_page);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sectionContent = undefined;\nvar sections = undefined;\nvar options = undefined;\nvar stepHeight = undefined;\nvar stepWidth = undefined;\nvar defaults = {\n  threshold: 50, // 触发滚动事件的阈值，越小越灵敏\n  pageSpeed: 500, // 滚屏速度，单位为毫秒 ms\n  autoScroll: 0, // 自动播放事件间隔，如果为 0 则不自动播放\n  loopSection: true, // Section 循环滚动\n  hasSectionPagination: true, // Section 编码页\n  loopSlide: true, // Slide 循环滑动\n  hasSlidePagination: true, // Slide 编码页\n  afterLoad: null, // 页面载入事件\n  beforeLeave: null, // 页面离开事件\n  afterSlideLoad: null, // slide 载入事件\n  beforeSlideLeave: null // slide 离开事件\n};\n\nfunction init(ele, Customize) {\n  exports.sectionContent = sectionContent = _utils2.default.$$(ele)[0];\n  exports.sections = sections = _utils2.default.$$('.fp-section');\n  exports.options = options = Object.assign({}, defaults, Customize);\n  exports.stepHeight = stepHeight = _utils2.default.$$(ele)[0].offsetHeight;\n  exports.stepWidth = stepWidth = _utils2.default.$$(ele)[0].offsetWidth;\n  initEle();\n  (0, _events2.default)(options, _page2.default, sectionContent);\n}\n\nfunction initEle() {\n  function init() {\n    initSection();\n    initSlide();\n    pageController();\n    customize();\n  }\n\n  init();\n  /**\n   * 初始化 Section\n   */\n  function initSection() {\n    _utils2.default.setCss(sectionContent, {\n      'transform': 'translate3d(0,0,0)',\n      '-webkit-transform': 'translate3d(0,0,0)',\n      'transitionDuration': options.pageSpeed + 'ms',\n      '-webkit-transitionDuration': options.pageSpeed + 'ms',\n      'display': 'block'\n    });\n\n    sectionContent.addEventListener(_utils2.default.transitionEvent, function () {\n      _page2.default.isScrolling = false;\n    }, false);\n\n    for (var i = sections.length - 1; i >= 0; i--) {\n      sections[i].style.height = stepHeight + 'px';\n    }\n\n    sections[_page2.default.nowPage].classList.add('active');\n  }\n\n  /**\n   * 初始化 Slide\n   */\n  function initSlide() {\n    var slideWrap = _utils2.default.$$('.fp-slide-wrap');\n    var slides = undefined;\n\n    function slideWrapInitHandle() {\n      _page2.default.isScrolling = false;\n    }\n\n    for (var i = slideWrap.length - 1; i >= 0; i--) {\n      slides = _utils2.default.$$('.fp-slide', slideWrap[i]);\n      for (var j = slides.length - 1; j >= 0; j--) {\n        slides[j].style.width = stepWidth + 'px';\n      }\n      slideWrap[i].style.width = slides.length * stepWidth + 'px';\n      slideWrap[i].dataset.x = '0';\n      slideWrap[i].dataset.index = '0';\n      slideWrap[i].addEventListener(_utils2.default.transitionEvent, slideWrapInitHandle, false);\n    }\n  }\n\n  /**\n   * 初始化翻页控制点\n   */\n  function pageController() {\n    function init() {\n      createControllerNode();\n      bindEvent();\n      initController();\n    }\n\n    init();\n    // 插入控制点\n    function createControllerNode() {\n      var controllerWrap = document.createElement('div');\n      var controllerText = '';\n      controllerWrap.className = 'fp-controller';\n      for (var i = sections.length; i--; i > 0) {\n        controllerText += \"<div class='fp-controller-dotted'></div>\";\n      }\n      controllerWrap.innerHTML = controllerText;\n      document.body.appendChild(controllerWrap);\n    }\n\n    // 给控制点绑定切换事件\n    function bindEvent() {\n      var controllers = _utils2.default.$$('.fp-controller-dotted');\n      for (var i = controllers.length - 1; i >= 0; i--) {\n        controllers[i].addEventListener('click', helper(i + 1), false);\n      }\n      function helper(i) {\n        return function () {\n          _utils2.default.addClassToOneEle(controllers, i - 1);\n          _page2.default.moveTo(i);\n        };\n      }\n    }\n\n    // 获取控制点初试状态\n    function initController() {\n      var controllers = _utils2.default.$$('.fp-controller-dotted');\n      controllers[_page2.default.nowPage].classList.add('active');\n    }\n  }\n\n  /**\n   * 初始化定制内容\n   */\n  function customize() {\n    var prop = {\n      autoScroll: function autoScroll() {\n        /* eslint-disable */\n        var timer = null;\n        /* eslint-enable */\n        if (options.autoScroll) {\n          timer = setInterval(function () {\n            _page2.default.move.next();\n          }, options.autoScroll);\n        }\n      }\n    };\n\n    for (var key in prop) {\n      if (prop.hasOwnProperty(key)) {\n        prop[key]();\n      }\n    }\n  }\n}\n\nexports.init = init;\nexports.stepHeight = stepHeight;\nexports.stepWidth = stepWidth;\nexports.sectionContent = sectionContent;\nexports.sections = sections;\nexports.options = options;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/init.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/init.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar utils = {\n  $$: function $$(el, parent) {\n    if (!parent) {\n      return document.querySelectorAll(el);\n    } else {\n      return parent.querySelectorAll(el);\n    }\n  },\n  setCss: function setCss(el, props) {\n    var prop = undefined;\n    for (prop in props) {\n      if (props.hasOwnProperty(prop)) {\n        el.style[prop] = props[prop];\n      }\n    }\n    return el;\n  },\n  translate: function translate(el, value, direction) {\n    if (direction === 'y') {\n      this.setCss(el, {\n        'transform': 'translate3d(0,' + value + 'px,0)',\n        '-webkit-transform': 'translate3d(0,' + value + 'px,0)'\n      });\n      // console.log('setAttr Done')\n    } else if (direction === 'x') {\n        this.setCss(el, {\n          'transform': 'translate3d(' + value + 'px,0,0)',\n          '-webkit-transform': 'translate3d(' + value + 'px,0,0)'\n        });\n      }\n  },\n\n  /**\n   * 只给一组元素中的某一个元素添加class\n   * @param els 一组元素\n   * @param theOne 要添加元素的index值\n   */\n  addClassToOneEle: function addClassToOneEle(els, theOne) {\n    for (var j = els.length - 1; j >= 0; j--) {\n      els[j].classList.remove('active');\n    }\n    els[theOne].classList.add('active');\n  },\n\n  transitionEvent: whichTransitionEvent()\n\n};\n\nfunction whichTransitionEvent() {\n  var t = undefined;\n  var el = document.createElement('fakeelement');\n  var transitions = {\n    'transition': 'transitionend',\n    'OTransition': 'oTransitionEnd',\n    'MozTransition': 'transitionend',\n    'WebkitTransition': 'webkitTransitionEnd',\n    'MsTransition': 'msTransitionEnd'\n  };\n\n  for (t in transitions) {\n    if (el.style[t] !== undefined) {\n      return transitions[t];\n    }\n  }\n}\n\nexports.default = Object.create(utils);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/utils.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/utils.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction bindEvent(options, page, el) {\n  var Events = [];\n\n  /**\n   * 绑定触摸事件\n   */\n  function bindTouchMove() {\n    var startPos = {};\n    var movePos = {};\n    var diffX = undefined;\n    var diffY = undefined;\n    var touch = undefined;\n    var onceTouch = false; //  判断是否为一次触摸，保证一次触摸只触发一次事件\n\n    var threshold = options.threshold; //  阈值,灵敏度，越小越灵敏\n    var isVertical = undefined; //  是否为垂直滚动事件\n\n    function touchstartHandle(event) {\n      //  onceTouch首先置为true，表明开始了一次触摸\n      onceTouch = true;\n      //  初始化 x,y 值，防止点击一次后出现假 move 事件\n      startPos = {};\n      if (event.target.tagName.toLowerCase() !== 'a') {\n        event.preventDefault();\n      }\n      touch = event.touches[0];\n      startPos.x = touch.pageX;\n      startPos.y = touch.pageY;\n    }\n\n    function touchmoveHandle(event) {\n      event.preventDefault();\n      touch = event.touches[0];\n      movePos.x = touch.pageX;\n      movePos.y = touch.pageY;\n      diffX = startPos.x - movePos.x;\n      diffY = startPos.y - movePos.y;\n\n      // 如果页面正在滚动或者不是一次滚动事件，则直接return掉\n      if (page.isScrolling || !onceTouch) {\n        return false;\n      }\n\n      isVertical = Math.abs(diffX) - Math.abs(diffY) <= 0;\n      // 如果diff大于阈值，则事件触发，将onceTouch置为false\n      onceTouch = Math.max(diffX, diffY) <= threshold;\n      if (!isVertical) {\n        if (diffX > threshold) {\n          // Move to left\n          page.slide.next();\n        } else if (diffX < -threshold) {\n          // Move to right\n          page.slide.pre();\n        }\n      } else {\n        // isVertical = true\n        if (diffY > threshold) {\n          // Move to top\n          page.move.next();\n        } else if (diffY < -threshold) {\n          // Move to bottom\n          page.move.pre();\n        }\n      }\n    }\n\n    function touchendHandle(event) {\n      if (event.target.tagName.toLowerCase() !== 'a') {\n        event.preventDefault();\n      }\n      // 重置onceTouch为true\n      onceTouch = true;\n    }\n\n    el.addEventListener('touchstart', touchstartHandle, false);\n\n    el.addEventListener('touchmove', touchmoveHandle, false);\n\n    el.addEventListener('touchend', touchendHandle, false);\n  }\n\n  /**\n   * 绑定鼠标滚动事件\n   */\n  function bindMouseWheel() {\n    // FIXME change the way binding event.\n    var type = undefined;\n    var deltaY = undefined;\n\n    if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {\n      type = 'DOMMouseScroll';\n    } else {\n      type = 'mousewheel';\n    }\n\n    function mouseWheelHandle(event) {\n      if (page.isScrolling) {\n        return false;\n      }\n      deltaY = event.detail || -event.wheelDelta || event.deltaY;\n      if (deltaY > 0) {\n        page.move.next();\n        // console.log('next')\n      } else if (deltaY < 0) {\n          page.move.pre();\n          // console.log('pre')\n        }\n    }\n\n    el.addEventListener(type, mouseWheelHandle, false);\n  }\n\n  /**\n   * 绑定键盘事件\n   */\n  function bindKeyboard() {\n    function keyboardHandle(event) {\n      var key = event.keyCode || event.which;\n      switch (key) {\n        case 37:\n          page.slide.pre();\n          break;\n        case 38:\n          page.move.pre();\n          break;\n        case 39:\n          page.slide.next();\n          break;\n        case 40:\n          page.move.next();\n          break;\n      }\n    }\n    // in order to bind key event to a normal element,we should add a tabindex attribute on it.\n    el.setAttribute('tabindex', '1');\n    el.focus();\n    el.addEventListener('keydown', keyboardHandle, false);\n  }\n\n  Events.push(bindTouchMove, bindKeyboard, bindMouseWheel);\n\n  Events.forEach(function (now) {\n    now();\n  });\n}\n\nexports.default = bindEvent;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/events.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/events.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _init = __webpack_require__(1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar page = {\n  nowPage: 0,\n  isScrolling: false,\n  translate3dY: 0,\n  /**\n   * Scroll to a specified page.\n   * @param pageIndex {number} The page index you want scroll to.\n   * @returns {boolean}\n   */\n  scrollPage: function scrollPage(pageIndex) {\n    var pageDiff = pageIndex - page.nowPage;\n    var leaveSection = _init.sections[page.nowPage];\n    var nowSection = _init.sections[pageIndex];\n    var controllers = _utils2.default.$$('.fp-controller-dotted');\n    if (pageIndex >= 0 && pageIndex <= _init.sections.length - 1 && !page.isScrolling && pageDiff) {\n      if (typeof _init.options.beforeLeave === 'function') {\n        /**\n         * leaveSection 函数内部 this 指向，为将要离开的 section\n         * page.nowPage 将要离开页面的 index\n         * pageIndex    将要载入页面的 index\n         */\n        _init.options.beforeLeave.call(leaveSection, page.nowPage, pageIndex);\n      }\n\n      leaveSection.classList.remove('active');\n      _utils2.default.addClassToOneEle(controllers, pageIndex);\n      page.translate3dY -= pageDiff * _init.stepHeight;\n      _utils2.default.translate(_init.sectionContent, page.translate3dY, 'y');\n      page.isScrolling = true;\n      page.nowPage = pageIndex;\n      nowSection.classList.add('active');\n\n      if (typeof _init.options.afterLoad === 'function') {\n        _init.options.pageSpeed = _init.options.pageSpeed ? 500 : _init.options.pageSpeed;\n        setTimeout(function () {\n          /**\n           * nowSection 函数内部 this 指向,为载入后的 section\n           * pageIndex 载入后的 index\n           */\n          _init.options.afterLoad.call(nowSection, pageIndex);\n        }, _init.options.pageSpeed);\n      }\n      return true;\n    } else {\n      return false;\n    }\n  },\n  /**\n   * Scroll to a specified slide.\n   * @param slideIndex {number} The slide index you want scroll to.\n   * @returns {boolean}\n   */\n  scrollSlide: function scrollSlide(slideIndex) {\n    // 获取slide包裹层\n    var slideWrap = _utils2.default.$$('.fp-slide-wrap', _init.sections[page.nowPage])[0];\n\n    if (!slideWrap) {\n      console.log('This page has no slide');\n      return false;\n    }\n\n    // 当前页面下所有的slide\n    var slide = _init.sections[page.nowPage].querySelectorAll('.fp-slide');\n\n    // 当前页面上存储的数据\n    var slideData = slideWrap.dataset;\n\n    // 当前页面上slide的index\n    var slideNowIndex = parseInt(slideData.index, 10);\n\n    // 当前页面上slide的x轴偏移值\n    var slideX = slideData.x;\n\n    var slideDiff = slideIndex - slideNowIndex;\n\n    if (slideIndex >= 0 && slideIndex <= slide.length - 1 && !page.isScrolling) {\n      if (typeof _init.options.beforeSlideLeave === 'function') {\n        /**\n         * leaveSlide           函数内部 this 指向，将要离开的 slide\n         * page.nowPage         将要离开 section 的 index\n         * slideNowIndex        将要离开 slide 的 index\n         * slideIndex           将要载入 slide 的 index\n         */\n        _init.options.beforeSlideLeave.call(slide[slideNowIndex], page.nowPage, slideNowIndex, slideIndex);\n      }\n\n      slide[slideNowIndex].classList.remove('active');\n      slideX -= slideDiff * _init.stepWidth;\n      _utils2.default.translate(slideWrap, slideX, 'x');\n      page.isScrolling = true;\n      slideData.x = slideX;\n      slideData.index = slideIndex;\n      slide[slideIndex].classList.add('active');\n\n      if (typeof _init.options.afterSlideLoad === 'function') {\n        _init.options.pageSpeed = _init.options.pageSpeed ? 500 : _init.options.pageSpeed;\n        setTimeout(function () {\n          /**\n           * nowSection           函数内部 this 指向，载入后的 section\n           * page.nowPage         将要载入 section 的 index\n           * pageIndex            载入后的 Slide 的 index\n           */\n          _init.options.afterSlideLoad.call(slide[slideIndex], page.nowPage, slideIndex);\n        }, _init.options.pageSpeed);\n      }\n      return true;\n    }\n    return false;\n  },\n  /**\n   * Scroll to a specified section and slide.\n   * @param pageIndex {number}\n   * @param slideIndex {number}\n   * @returns {boolean}\n   */\n  moveTo: function moveTo(pageIndex, slideIndex) {\n    // DONE move to a specify section or slide\n    if (page.nowPage === pageIndex || page.scrollPage(pageIndex)) {\n      if (typeof slideIndex !== 'undefined') {\n        // DONE move to a specify slide\n        return !!page.scrollSlide(slideIndex);\n      }\n      return true;\n    } else {\n      return false;\n    }\n  },\n  move: {\n    next: function next(callback) {\n      if (page.scrollPage(page.nowPage + 1)) {\n        var arg = Array.prototype.slice.call(arguments, 1);\n\n        if (typeof callback === 'function') {\n          callback(arg);\n        }\n        return true;\n      } else if (_init.options.loopSection) {\n        page.moveTo(0);\n\n        return true;\n      } else {\n        return false;\n      }\n    },\n    pre: function pre(callback) {\n      if (page.scrollPage(page.nowPage - 1)) {\n        var arg = Array.prototype.slice.call(arguments, 1);\n\n        if (typeof callback === 'function') {\n          callback(arg);\n        }\n        return true;\n      } else {\n        return false;\n      }\n    }\n  },\n  slide: {\n    /**\n     * slide move 方法，移动到上一个或下一个 slide\n     * @param {string} direction 要移动的方向，next 为下一个， pre 为上一个\n     * @returns {boolean}\n     */\n    move: function move(direction) {\n      var slideWrap = _utils2.default.$$('.fp-slide-wrap', _init.sections[page.nowPage])[0];\n      var slide = _init.sections[page.nowPage].querySelectorAll('.fp-slide');\n      // slideNowIndexChange slideNowIndex 将要的变化\n      var slideNowIndexChange = undefined;\n      // slideWillBe 将要滚到slide的index\n      var slideWillBe = undefined;\n      if (direction === 'next') {\n        slideNowIndexChange = 1;\n        slideWillBe = 0;\n      } else if (direction === 'pre') {\n        slideNowIndexChange = -1;\n        slideWillBe = slide.length - 1;\n      }\n      if (!slideWrap) {\n        return false;\n      } else {\n        var slideData = slideWrap.dataset;\n        var slideNowIndex = parseInt(slideData.index, 10);\n\n        if (page.scrollSlide(slideNowIndex + slideNowIndexChange)) {\n          slideData.index = slideNowIndex + slideNowIndexChange;\n          return true;\n        } else if (_init.options.loopSlide && page.scrollSlide(slideWillBe)) {\n          slideData.index = slideWillBe;\n          return true;\n        }\n        return false;\n      }\n    },\n    next: function next() {\n      page.slide.move('next');\n    },\n    pre: function pre() {\n      page.slide.move('pre');\n    }\n  }\n};\n\nexports.default = page;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/page.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/page.js?");

/***/ }
/******/ ]);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57971" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../node_modules/fullpage/build/fullpage.js"], null)
//# sourceMappingURL=/fullpage.6f22e267.js.map