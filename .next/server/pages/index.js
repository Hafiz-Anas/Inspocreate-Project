module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies */ "cookies");
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_navbarBeforeLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/navbarBeforeLogin */ "./src/components/navbarBeforeLogin/index.js");
/* harmony import */ var _src_components_navbarAfterLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/navbarAfterLogin */ "./src/components/navbarAfterLogin/index.js");
/* harmony import */ var _src_components_mainContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/mainContent */ "./src/components/mainContent/index.js");
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/footer */ "./src/components/footer/index.js");
/* harmony import */ var _src_context_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/context/auth */ "./src/context/auth.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\pages\\index.js";








function Home(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    console.log('Home => ', props);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Inspocreate"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "keywords",
        content: "Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_navbarBeforeLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_mainContent__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}
const getServerSideProps = async ({
  req,
  res
}) => {
  const cookies = new cookies__WEBPACK_IMPORTED_MODULE_2___default.a(req, res);
  console.log('Index => getServerSideProps => cookies => ', cookies.get('name'));
  return {
    props: {
      name: cookies.get('name') || null
    }
  };
};

/***/ }),

/***/ "./src/axios/axios.js":
/*!****************************!*\
  !*** ./src/axios/axios.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://api-dev.inspocreate.com/'
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./src/axios/axios.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _axios__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\footer\\footer.js";


const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "footer-section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrapper row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-3 footer-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "navbar-logo",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            src: "/images/Group Copy.svg",
            width: 100,
            height: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Inspocreate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-3 footer-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: "Useful Links"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "About Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "How its work"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-3 footer-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "Terms of Sevices"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "Privacy Policy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-3 footer-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "Contact us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Copyright 2020 all rights are reserved"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/footer/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/mainContent/components/company.js":
/*!**********************************************************!*\
  !*** ./src/components/mainContent/components/company.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post */ "./src/components/mainContent/components/post/post.js");

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\mainContent\\components\\company.js";



const Company = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    classNam: "company-posts",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "all-posts",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "more",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Load Mode..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Company);

/***/ }),

/***/ "./src/components/mainContent/components/latest.js":
/*!*********************************************************!*\
  !*** ./src/components/mainContent/components/latest.js ***!
  \*********************************************************/
/*! exports provided: Latest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Latest", function() { return Latest; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post */ "./src/components/mainContent/components/post/post.js");

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\mainContent\\components\\latest.js";


const Latest = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    classNam: "latest-posts",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "all-posts",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "more",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Load Mode..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Latest);

/***/ }),

/***/ "./src/components/mainContent/components/post/post.js":
/*!************************************************************!*\
  !*** ./src/components/mainContent/components/post/post.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\mainContent\\components\\post\\post.js";



const Post = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "post",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "overlay",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "gap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "desc",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex user",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
                src: "/public/Images/userIcon2.svg",
                width: 20,
                height: 20
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "UserName"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex add",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
                src: "/public/Images/plusIcon.svg",
                width: 20,
                height: 20
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Add to Collection"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex like",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
                src: "/public/Images/likeIcon.svg",
                width: 20,
                height: 20
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Like"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/components/mainContent/components/trending.js":
/*!***********************************************************!*\
  !*** ./src/components/mainContent/components/trending.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post */ "./src/components/mainContent/components/post/post.js");

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\mainContent\\components\\trending.js";



const Trending = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    classNam: "trending-posts",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "all-posts",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single-post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_post_post__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "more",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Load Mode..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Trending);

/***/ }),

/***/ "./src/components/mainContent/index.js":
/*!*********************************************!*\
  !*** ./src/components/mainContent/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ "./src/components/mainContent/mainContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _mainContent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/mainContent/mainContent.js":
/*!***************************************************!*\
  !*** ./src/components/mainContent/mainContent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_trending__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/trending */ "./src/components/mainContent/components/trending.js");
/* harmony import */ var _components_latest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/latest */ "./src/components/mainContent/components/latest.js");
/* harmony import */ var _components_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/company */ "./src/components/mainContent/components/company.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\mainContent\\mainContent.js";






const Navbar = () => {
  const {
    0: contentType,
    1: setContentType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('trendings', 'latest', 'company');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "main-content-Navbar",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
              active: contentType === 'trendings'
            }),
            onClick: () => setContentType('trendings'),
            children: "Trendings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
              active: contentType === 'latest'
            }),
            onClick: () => setContentType('latest'),
            children: "Latest"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
              active: contentType === 'trendcompanyings'
            }),
            onClick: () => setContentType('company'),
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined), contentType === 'trendings' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_trending__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }, undefined)
      }, void 0, false), contentType === 'latest' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_latest__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 7
        }, undefined)
      }, void 0, false), contentType === 'company' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_company__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }, undefined)
      }, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/navbarAfterLogin/components/addPostModal/addPostModal.js":
/*!*********************************************************************************!*\
  !*** ./src/components/navbarAfterLogin/components/addPostModal/addPostModal.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_localPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/localPost */ "./src/components/navbarAfterLogin/components/addPostModal/components/localPost.js");
/* harmony import */ var _components_urlPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/urlPost */ "./src/components/navbarAfterLogin/components/addPostModal/components/urlPost.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\navbarAfterLogin\\components\\addPostModal\\addPostModal.js";






const AddPostModal = props => {
  const handleClose = () => props.setShow(false); // STATES FOR POSTTYPE


  const {
    0: postType,
    1: setPostType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Image');
  const {
    0: imageType,
    1: setimageType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('localImage');
  const {
    0: blogType,
    1: setblogType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('localBlog');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
      size: "lg",
      show: props.show,
      className: "add-post-modal",
      onHide: handleClose,
      centered: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "add-post-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("buttton", {
          onClick: handleClose,
          class: "remvoe-post-modal",
          children: "\xD7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-center pt-0",
          children: "Add New Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "post-types",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
              active: postType === 'Image'
            }),
            onClick: () => setPostType('Image'),
            children: "Image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
              active: postType === 'Blog'
            }),
            onClick: () => setPostType('Blog'),
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [postType === 'Image' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "file-type",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
                  active: imageType === 'localImage'
                }),
                onClick: () => setimageType('localImage'),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: "insert_photo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 11
                }, undefined), "Add Image"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
                  active: imageType === 'urlImage'
                }),
                onClick: () => setimageType('urlImage'),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: "language"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 11
                }, undefined), "Add Image from URL"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 9
            }, undefined), imageType === 'localImage' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_localPost__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 11
              }, undefined)
            }, void 0, false), imageType === 'urlImage' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_urlPost__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 11
              }, undefined)
            }, void 0, false)]
          }, void 0, true), postType === 'Blog' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "file-type",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
                  active: blogType === 'localBlog'
                }),
                onClick: () => setblogType('localBlog'),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: "description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 11
                }, undefined), "Add Blog"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: clsx__WEBPACK_IMPORTED_MODULE_5___default()({
                  active: blogType === 'urlBlog'
                }),
                onClick: () => setblogType('urlBlog'),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: "language"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 11
                }, undefined), "Add Blog from URL"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 9
            }, undefined), blogType === 'localBlog' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_localPost__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 11
              }, undefined)
            }, void 0, false), blogType === 'urlBlog' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_urlPost__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 11
              }, undefined)
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AddPostModal);

/***/ }),

/***/ "./src/components/navbarAfterLogin/components/addPostModal/components/localPost.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/navbarAfterLogin/components/addPostModal/components/localPost.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../context/auth */ "./src/context/auth.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../axios */ "./src/axios/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../reducers */ "./src/reducers/index.js");

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\navbarAfterLogin\\components\\addPostModal\\components\\localPost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const TagComponent = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "tagComponent",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tagComponent__text",
      children: props.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tagComponent__close",
      onClick: () => {
        props.cullTagFromTags(props.text);
      },
      children: "X"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

const LocalPost = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_auth__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]); // API FOR FORM DATA FOR CREATE POST

  const {
    0: postState,
    1: setPostState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: '',
    description: '',
    categories: ['anas'],
    url: undefined,
    image: null,
    tags: [],
    public: true,
    collection: true,
    postType: 'Image'
  });
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  const onChangeFile = event => {
    // console.log(event);
    // console.log(context)
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    _axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/media', formData, {
      headers: {
        Authorization: 'Bearer ' + context.state.token
      }
    }).then(response => {
      setPostState(_objectSpread(_objectSpread({}, postState), {}, {
        image: response.data.path
      }));
      console.log(response);
    }).catch(error => {
      console.error(error.response);
    });
  }; // API FOR SELECT CATEGORIES FROM REDUCER


  const categoriesState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.categories);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_7__["getCategories"])());
  }, []); // API FOR CREATE POST

  const pushPost = e => {
    e.preventDefault();
    _axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/posts/create', _objectSpread({}, postState), {
      headers: {
        Authorization: 'Bearer ' + context.state.token
      }
    }).then(response => {
      history.push('/uploadedPost');
      console.log(response);
    }).catch(error => {
      console.error(error.response);
    });
  }; // TAGS IN INPUT


  const [tags, setTags] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(['JavaScript', 'TypeScript']);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');

  const inputValueChangeHandler = inputChange => {
    setInputValue(inputChange);

    if (inputChange[inputChange.length - 1] === ',') {
      setTags([...tags, inputChange.slice(0, inputChange.length - 1)]);
      setInputValue('');
    }
  };

  const cullTagFromTags = tag => {
    setTags([...tags.filter(element => element !== tag)]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "add-post-form",
      onSubmit: pushPost,
      children: [!postState.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "add-img",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
          src: "/public/images/Shape Copy 212.svg",
          alt: "plusicon",
          width: 100,
          height: 100
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Add New"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 7
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          hidden: true,
          onChange: onChangeFile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 6
      }, undefined), !!postState.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: postState.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 27
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "title",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Some Text Here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "category",
          children: "Categories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          name: "category",
          className: "select-type",
          children: categoriesState.data.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: item.id,
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 8
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "massage",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          ytype: "text",
          rows: "6",
          placeholder: "Some Text Here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "tags",
          children: "Add Tags"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tagArea",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tagArea__displayArea",
            children: tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TagComponent, {
              text: tag,
              cullTagFromTags: cullTagFromTags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 9
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            ref: inputRef,
            value: inputValue,
            onChange: event => inputValueChangeHandler(event.target.value),
            placeholder: "separated by commas",
            className: "tagArea__input"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "public",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "toggle",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "switch",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                checked: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "slider round"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Public"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit-btn",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "I Would Like to Post Now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LocalPost); // postType: postType
// useEffect(() => {
//     if(context.state){
//       setShow(false)
//     }
//   }, [context])

/***/ }),

/***/ "./src/components/navbarAfterLogin/components/addPostModal/components/urlPost.js":
/*!***************************************************************************************!*\
  !*** ./src/components/navbarAfterLogin/components/addPostModal/components/urlPost.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../context/auth */ "./src/context/auth.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../axios */ "./src/axios/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../reducers */ "./src/reducers/index.js");

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\navbarAfterLogin\\components\\addPostModal\\components\\urlPost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const TagComponent = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "tagComponent",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tagComponent__text",
      children: props.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tagComponent__close",
      onClick: () => {
        props.cullTagFromTags(props.text);
      },
      children: "X"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

const UrlPost = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_auth__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]); // API FOR FORM DATA FOR CREATE POST

  const {
    0: postState,
    1: setPostState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: '',
    description: '',
    categories: ['anas'],
    url: undefined,
    image: null,
    tags: [],
    public: true,
    collection: true,
    postType: 'Image'
  });
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  const onChangeFile = event => {
    // console.log(event);
    // console.log(context)
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    _axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/media', formData, {
      headers: {
        Authorization: 'Bearer ' + context.state.token
      }
    }).then(response => {
      setPostState(_objectSpread(_objectSpread({}, postState), {}, {
        image: response.data.path
      }));
      console.log(response);
    }).catch(error => {
      console.error(error.response);
    });
  }; // API FOR SELECT CATEGORIES


  const categoriesState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.categories);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_7__["getCategories"])());
  }, []); // API FOR CREATE POST

  const pushPost = e => {
    e.preventDefault();
    _axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/create', _objectSpread({}, postState), {
      headers: {
        Authorization: 'Bearer ' + context.state.token
      }
    }).then(response => {
      history.push('/uploadedPost');
      console.log(response);
    }).catch(error => {
      console.error(error.response);
    });
  }; // TAGS IN INPUT


  const [tags, setTags] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(['JavaScript', 'TypeScript']);
  const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');

  const inputValueChangeHandler = inputChange => {
    setInputValue(inputChange);

    if (inputChange[inputChange.length - 1] === ',') {
      setTags([...tags, inputChange.slice(0, inputChange.length - 1)]);
      setInputValue('');
    }
  };

  const cullTagFromTags = tag => {
    setTags([...tags.filter(element => element !== tag)]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "add-post-form",
      onSubmit: pushPost,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post pb-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "url",
          placeholder: "https://"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "add-img",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
          src: "/public/images/Shape Copy 212.svg",
          alt: "plusicon",
          height: 100,
          width: 100
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Add New"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "title",
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Some Text Here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "category",
          children: "Categories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          name: "category",
          className: "select-type",
          children: categoriesState.data.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: item.id,
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 8
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "massage",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          type: "text",
          rows: "6",
          placeholder: "Some Text Here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input-post",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "tags",
          children: "Add Tags"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tagArea",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tagArea__displayArea",
            children: tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TagComponent, {
              text: tag,
              cullTagFromTags: cullTagFromTags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 9
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            ref: inputRef,
            value: inputValue,
            onChange: event => inputValueChangeHandler(event.target.value),
            placeholder: "separated by commas",
            className: "tagArea__input"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "public",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "toggle",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "switch",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "checkbox",
              checked: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "slider round"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Public"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "submit-btn",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "I Would Like to Post Now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UrlPost);

/***/ }),

/***/ "./src/components/navbarAfterLogin/components/addPostModal/index.js":
/*!**************************************************************************!*\
  !*** ./src/components/navbarAfterLogin/components/addPostModal/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPostModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPostModal */ "./src/components/navbarAfterLogin/components/addPostModal/addPostModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _addPostModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/navbarAfterLogin/index.js":
/*!**************************************************!*\
  !*** ./src/components/navbarAfterLogin/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loginNavbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginNavbar */ "./src/components/navbarAfterLogin/loginNavbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _loginNavbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/navbarAfterLogin/loginNavbar.js":
/*!********************************************************!*\
  !*** ./src/components/navbarAfterLogin/loginNavbar.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/auth */ "./src/context/auth.js");
/* harmony import */ var _components_addPostModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/addPostModal */ "./src/components/navbarAfterLogin/components/addPostModal/index.js");

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\navbarAfterLogin\\loginNavbar.js";





 // SUB COMPONENTS



const MainNavbar = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_auth__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); // MODAL FOR CREATE POST

  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // FUNCTION FOR USER LOGOUT

  const logoutUser = () => {
    context.actions.updateState(null);
    history.push('./home');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main-navbar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "login-navbar-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "navbar-logo",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              src: "/public/images/Group.svg",
              alt: "logo",
              width: 100,
              height: 100
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Inspocreate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "main-links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/activity",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: "home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 10
                }, undefined), "Activity"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/images",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: "collections"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 10
                }, undefined), "Images"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/blog",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "material-icons",
                  children: "rss_feed"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 10
                }, undefined), "Blog"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "search",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              placeholder: "Try Women Empowerment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/public/images/Shape.svg",
                alt: "searchIcon",
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "user-seciton",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/public/images/gan.svg",
                alt: "notification",
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: setShow,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/public/images/icon-5.svg",
                  alt: "user",
                  width: 100,
                  height: 100
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 10
                }, undefined), "Add Post"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Toggle, {
                className: "user-select",
                id: "dropdown-basic",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    className: "userIcon",
                    src: "/public/images/Oval Copy.svg",
                    alt: "More",
                    width: 100,
                    height: 100
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Menu, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
                  className: "dropdown-item" // href={`/userProfile/${context.state.username}`}
                  ,
                  children: "Profile"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
                  className: "dropdown-item",
                  href: "/userSettings",
                  children: "Setting"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
                  className: "dropdown-item",
                  onClick: logoutUser,
                  children: "Logout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 10
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_addPostModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      show: show,
      setShow: setShow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainNavbar);

/***/ }),

/***/ "./src/components/navbarBeforeLogin/components/loginModal/index.js":
/*!*************************************************************************!*\
  !*** ./src/components/navbarBeforeLogin/components/loginModal/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loginModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginModal */ "./src/components/navbarBeforeLogin/components/loginModal/loginModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _loginModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/navbarBeforeLogin/components/loginModal/loginModal.js":
/*!******************************************************************************!*\
  !*** ./src/components/navbarBeforeLogin/components/loginModal/loginModal.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../axios */ "./src/axios/index.js");
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../context/auth */ "./src/context/auth.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\navbarBeforeLogin\\components\\loginModal\\loginModal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const LoginModal = props => {
  const handleCloseLogin = () => props.setShowLogin(false);

  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); //  FORM VALIDATION

  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: ''
  });
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: ''
  });
  const {
    0: loginState,
    1: setLoginState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: ''
  });

  const handleChange = event => {
    const newState = _objectSpread({}, loginState);

    newState[event.target.name] = event.target.value;
    setLoginState(_objectSpread({}, newState));
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.name === 'email') {
      if (event.target.value.indexOf('@') === -1) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          email: 'Invalid Email Address'
        }));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          email: ''
        }));
      }
    }

    if (event.target.name === 'password') {
      if (event.target.value.length < 8) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          password: 'Please Enter Correct Password'
        }));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          password: ''
        }));
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/auth/login', _objectSpread({}, loginState)).then(response => {
      authContext.actions.updateState(response.data);

      if (response.data.pendingOperations.includes('createProfile')) {
        history.push('/create-profile');
      }

      console.log(response);
    }).catch(error => {
      console.error(error.response);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      size: "md",
      className: "login-modal",
      centered: true,
      show: props.showLogin,
      onHide: handleCloseLogin,
      animation: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "remove-modal",
          onClick: handleCloseLogin,
          children: "\xD7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-heading",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "login-btns",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "fb-login",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
                src: "/public/Images/Fill 1.svg",
                width: 30,
                height: 30
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 9
              }, undefined), "Sign Up With Facebook"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "g-login",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
                src: "/public/Images/Grou.svg",
                width: 30,
                height: 30
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 9
              }, undefined), "Sign Up With Google"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Login With Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-field",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "email",
                name: "email",
                onChange: handleChange,
                placeholder: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 9
              }, undefined), !!errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-danger",
                children: errors.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-field",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "password",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "password",
                name: "password",
                onChange: handleChange,
                placeholder: "******"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 9
              }, undefined), !!errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-danger",
                children: errors.password
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "login-btns",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
                src: "/public/Images/Bitmap.svg",
                width: 30,
                height: 30
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                onClick: () => {
                  // cookie.set("token", "ABCD", { expires: 1 / 24 });
                  fetch('/api/login', {
                    method: 'post',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      token: 'token'
                    })
                  });
                },
                children: "Continue"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-footer m-footer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Forget Password? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Reset"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 25
            }, undefined), ' ']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal); // useEffect(() => {
//     if (authContext.state) {
//         props.setShowLogin(false)
//     }
// }, [authContext])

/***/ }),

/***/ "./src/components/navbarBeforeLogin/components/registrationModal/index.js":
/*!********************************************************************************!*\
  !*** ./src/components/navbarBeforeLogin/components/registrationModal/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration */ "./src/components/navbarBeforeLogin/components/registrationModal/registration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _registration__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/navbarBeforeLogin/components/registrationModal/registration.js":
/*!***************************************************************************************!*\
  !*** ./src/components/navbarBeforeLogin/components/registrationModal/registration.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../axios */ "./src/axios/index.js");
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../context/auth */ "./src/context/auth.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\navbarBeforeLogin\\components\\registrationModal\\registration.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const RegistrationModal = props => {
  const handleCloseJoin = () => props.setShowJoin(false);

  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const {
    0: userType,
    1: setUserType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('User'); //  FORM VALIDATION

  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    cname: '',
    bType: '',
    rType: ''
  });
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    cname: '',
    bType: '',
    rType: ''
  });
  const {
    0: signupState,
    1: setSignupState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    cname: '',
    bType: '',
    rType: ''
  });

  const handleChangej = event => {
    const newState = _objectSpread({}, signupState);

    newState[event.target.name] = event.target.value;
    setSignupState(_objectSpread({}, newState));
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.name === 'firstName') {
      if (event.target.value.length < 1) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          firstName: 'Invalid First Name'
        }));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          firstName: ''
        }));
      }
    }

    if (event.target.name === 'lastName') {
      if (event.target.value.length < 1) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          lastName: 'Invalid Last Name'
        }));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          lastName: ''
        }));
      }
    }

    if (event.target.name === 'cname') {
      if (event.target.value.length < 1) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          cname: 'Invalid Company Name'
        }));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          cname: ''
        }));
      }
    }

    if (event.target.name === 'email') {
      if (event.target.value.indexOf('@') === -1) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          email: 'Invalid Email Address'
        }));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          email: ''
        }));
      }
    }

    if (event.target.name === 'password') {
      if (event.target.value.length < 8) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          password: 'Please Enter Correct Password'
        }));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, {
          password: ''
        }));
      }
    }
  };

  const handleSubmitj = e => {
    e.preventDefault();
    _axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/auth/register', _objectSpread(_objectSpread({}, signupState), {}, {
      username: signupState.email,
      rType: userType
    })).then(response => {
      authContext.actions.updateState(response.data);

      if (response.data.pendingOperations.includes('createProfile')) {
        history.push('/create-profile');
      }

      console.log(response);
    }).catch(error => {
      console.error(error.response);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      size: "lg",
      className: "modal join-modal",
      centered: true,
      show: props.showJoin,
      onHide: handleCloseJoin,
      animation: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "remove-modal",
          onClick: handleCloseJoin,
          children: "\xD7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-heading",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Join Our Community"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "user-type",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: () => setUserType('User'),
              className: clsx__WEBPACK_IMPORTED_MODULE_6___default()({
                selected: userType === 'User'
              }),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "material-icons",
                children: "person_pin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 9
              }, undefined), "Individual"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "company",
              onClick: () => setUserType('Mentor'),
              className: clsx__WEBPACK_IMPORTED_MODULE_6___default()({
                selected: userType === 'Mentor'
              }),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "material-icons",
                children: "file_copy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 9
              }, undefined), "Company"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 7
          }, undefined), userType === 'User' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "social-login-btns",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "fb-login",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
                  src: "/public/Images/Fill 1.svg",
                  width: 30,
                  height: 30
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 11
                }, undefined), "Sign Up With Facebook"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "g-login",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
                  src: "/public/Images/Grou.svg",
                  width: 30,
                  height: 30
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 11
                }, undefined), "Sign Up With Google"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "modal-body",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                onSubmit: handleSubmitj,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: "Sign Up with Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "name-inputs",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-field",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "name",
                      children: "First Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 13
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "name",
                      className: "mr",
                      name: "firstName",
                      placeholder: "First Name",
                      onChange: handleChangej
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 13
                    }, undefined), !!errors.firstName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                      className: "text-danger",
                      children: errors.firstName
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 14
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-field",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "name",
                      children: "Last Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 13
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "name",
                      name: "lastName",
                      placeholder: "Last Name",
                      onChange: handleChangej
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 13
                    }, undefined), !!errors.lastName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                      className: "text-danger",
                      children: errors.lastName
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 14
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-field",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "email",
                    children: "Email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "email",
                    name: "email",
                    placeholder: "Email",
                    onChange: handleChangej
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 12
                  }, undefined), !!errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    className: "text-danger",
                    children: errors.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 13
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-field",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "password",
                    children: "password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "password",
                    name: "password",
                    placeholder: "******",
                    onChange: handleChangej
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 12
                  }, undefined), !!errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    className: "text-danger",
                    children: errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 13
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "login-btns",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    src: "/public/Images/Bitmap.svg",
                    width: 30,
                    height: 30
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "submit",
                    children: "Continue"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "modal-footer m-footer",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 11
                }, undefined), " I agree to", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Terms and Conditions"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 11
                }, undefined), ' ']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 9
            }, undefined)]
          }, void 0, true), userType === 'Mentor' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "social-login-btns",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "fb-login",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
                  src: "/public/Images/Fill 1.svg",
                  width: 30,
                  height: 30
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 11
                }, undefined), "Sign Up With Facebook"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "g-login",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
                  src: "/public/Images/Grou.svg",
                  width: 30,
                  height: 30
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 11
                }, undefined), "Sign Up With Google"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "modal-body",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                onSubmit: handleSubmitj,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: "Sign Up with Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mentor-inputs",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-field",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "company",
                      children: "Company Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 13
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "name",
                      name: "cname",
                      placeholder: "Enter Your Company Name",
                      onChange: handleChangej
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 304,
                      columnNumber: 13
                    }, undefined), !!errors.cname && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                      className: "text-danger",
                      children: errors.cname
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 311,
                      columnNumber: 14
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 302,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-field",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "Business Type"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 315,
                      columnNumber: 13
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      name: "Bussiness-Type",
                      className: "select-type",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "",
                        children: "Business Coach/Consultant"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 317,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "",
                        children: "Personal Development Coach/ Consultant"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 318,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "",
                        children: "Empowerment/Motivational Business"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 321,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "",
                        children: "Marketing Business"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 324,
                        columnNumber: 14
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "",
                        children: "Other (Please specify)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 325,
                        columnNumber: 14
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 316,
                      columnNumber: 13
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-field",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "email",
                    children: "Email"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "email",
                    name: "email",
                    placeholder: "Email",
                    onChange: handleChangej
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 12
                  }, undefined), !!errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    className: "text-danger",
                    children: errors.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 13
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-field",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "password",
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "password",
                    name: "password",
                    placeholder: "******",
                    onChange: handleChangej
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 12
                  }, undefined), !!errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    className: "text-danger",
                    children: errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 13
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "login-btns",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    src: "/public/Images/Bitmap.svg",
                    width: 30,
                    height: 30
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "submit",
                    children: "Continue"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "modal-footer m-footer",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 365,
                  columnNumber: 11
                }, undefined), " I agree to", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Terms and Conditions"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 11
                }, undefined), ' ']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 9
            }, undefined)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RegistrationModal);

/***/ }),

/***/ "./src/components/navbarBeforeLogin/index.js":
/*!***************************************************!*\
  !*** ./src/components/navbarBeforeLogin/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logoutNavbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logoutNavbar */ "./src/components/navbarBeforeLogin/logoutNavbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _logoutNavbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/navbarBeforeLogin/logoutNavbar.js":
/*!**********************************************************!*\
  !*** ./src/components/navbarBeforeLogin/logoutNavbar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_loginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loginModal */ "./src/components/navbarBeforeLogin/components/loginModal/index.js");
/* harmony import */ var _components_registrationModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registrationModal */ "./src/components/navbarBeforeLogin/components/registrationModal/index.js");

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\components\\navbarBeforeLogin\\logoutNavbar.js";

 // SUB COMPONENTS




const MainNavbar = () => {
  const {
    0: showLogin,
    1: setShowLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showJoin,
    1: setShowJoin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main-navbar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "main-navbar-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "navbar-logo",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
            src: "/public/images/Group.svg",
            width: 20,
            height: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Inspocreate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "search",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Try Women Empowerment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
              src: "/public/images/Shape.svg",
              width: 20,
              height: 20
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "navbar-btns",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: setShowLogin,
            className: "navbar-btn-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
              src: "/public/images/Shape-2.svg",
              width: 20,
              height: 20
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 8
            }, undefined), "Login"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: setShowJoin,
            className: "navbar-btn-2",
            children: "Join Community"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      showLogin: showLogin,
      setShowLogin: setShowLogin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_registrationModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      showJoin: showJoin,
      setShowJoin: setShowJoin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainNavbar);

/***/ }),

/***/ "./src/context/auth.js":
/*!*****************************!*\
  !*** ./src/context/auth.js ***!
  \*****************************/
/*! exports provided: AuthContext, AuthContextProvider, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Digicrym\\Documents\\inspocreate\\src\\context\\auth.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  state: null,
  actions: {
    updateState: () => {}
  }
});
class AuthContextProvider extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateState", state => {
      if (state) {
        const user = JSON.stringify(state);
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('user', user, {
          expires: 7
        });

        if (state.token) {
          js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('user', state.token);
        }
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('user');
      }

      this.setState(state);
    });

    const _user = props.user;

    if (_user) {
      try {
        const userObject = JSON.parse(_user);
        this.state = userObject;
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    const context = {
      state: this.state,
      actions: {
        updateState: this.updateState
      }
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
      value: context,
      children: this.props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this);
  }

}
function getServerSideProps({
  req,
  res
}) {
  console.log('AuthContextProvider => getServerSideProps => ', req.cookies);
  return {
    props: {
      user: req.cookies.user || ''
    }
  };
}

/***/ }),

/***/ "./src/reducers/categories/index.js":
/*!******************************************!*\
  !*** ./src/reducers/categories/index.js ***!
  \******************************************/
/*! exports provided: categoriesSlice, selectCategories, getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slice */ "./src/reducers/categories/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoriesSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_0__["categoriesSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCategories", function() { return _slice__WEBPACK_IMPORTED_MODULE_0__["selectCategories"]; });

/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/categories/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _thunk__WEBPACK_IMPORTED_MODULE_1__["getCategories"]; });




/***/ }),

/***/ "./src/reducers/categories/slice.js":
/*!******************************************!*\
  !*** ./src/reducers/categories/slice.js ***!
  \******************************************/
/*! exports provided: categoriesSlice, selectCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesSlice", function() { return categoriesSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategories", function() { return selectCategories; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/categories/thunk.js");


const initialState = {
  data: [],
  selected: [],
  loading: false,
  error: null
};
const categoriesSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'categories',
  initialState,
  reducers: {
    selectCategories: (state, action) => {
      if (state.selected.includes(action.payload)) {
        state.selected = state.selected.filter(id => id !== action.payload);
      } else {
        state.selected.push(action.payload);
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getCategories"].pending, (state, {
      payload
    }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getCategories"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getCategories"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
  }
});
const {
  selectCategories
} = categoriesSlice.actions;

/***/ }),

/***/ "./src/reducers/categories/thunk.js":
/*!******************************************!*\
  !*** ./src/reducers/categories/thunk.js ***!
  \******************************************/
/*! exports provided: getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios */ "./src/axios/index.js");


const getCategories = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`categories/getCategories/`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/categories', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "./src/reducers/comments/index.js":
/*!****************************************!*\
  !*** ./src/reducers/comments/index.js ***!
  \****************************************/
/*! exports provided: createCommentThunk, getCommentThunk, replyCommentAction, likeCommentAction, dislikeCommentAction, deleteCommentAction, createCommentSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thunk */ "./src/reducers/comments/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCommentThunk", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["createCommentThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCommentThunk", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["getCommentThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replyCommentAction", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["replyCommentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likeCommentAction", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["likeCommentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dislikeCommentAction", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["dislikeCommentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCommentAction", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["deleteCommentAction"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./src/reducers/comments/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCommentSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["createCommentSlice"]; });




/***/ }),

/***/ "./src/reducers/comments/slice.js":
/*!****************************************!*\
  !*** ./src/reducers/comments/slice.js ***!
  \****************************************/
/*! exports provided: createCommentSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentSlice", function() { return createCommentSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/comments/thunk.js");


const initialState = {
  data: [],
  loading: false,
  error: null
};
const createCommentSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["createCommentThunk"].pending, (state, {
      payload
    }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["createCommentThunk"].fulfilled, (state, {
      payload
    }) => {
      // state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["createCommentThunk"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getCommentThunk"].pending, (state, {
      payload
    }) => {
      state.data = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getCommentThunk"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getCommentThunk"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["replyCommentAction"].fulfilled, (state, {
      payload
    }) => {
      state.data = state.data.map(post => {
        if (post.id === payload.id) {
          return payload;
        } else {
          return post;
        }
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["likeCommentAction"].fulfilled, (state, {
      payload
    }) => {
      state.data = state.data.map(comment => {
        if (comment.id === payload.id) {
          return payload;
        } else {
          return comment;
        }
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["dislikeCommentAction"].fulfilled, (state, {
      payload
    }) => {
      state.data = state.data.map(post => {
        if (post.id === payload.id) {
          return payload;
        } else {
          return post;
        }
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["deleteCommentAction"].fulfilled, (state, {
      payload
    }) => {
      state.data = state.data.map(post => {
        if (post.id === payload.id) {
          return payload;
        } else {
          return post;
        }
      });
      state.loading = false;
      state.error = null;
    });
  }
});

/***/ }),

/***/ "./src/reducers/comments/thunk.js":
/*!****************************************!*\
  !*** ./src/reducers/comments/thunk.js ***!
  \****************************************/
/*! exports provided: createCommentThunk, getCommentThunk, replyCommentAction, likeCommentAction, dislikeCommentAction, deleteCommentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentThunk", function() { return createCommentThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentThunk", function() { return getCommentThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replyCommentAction", function() { return replyCommentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeCommentAction", function() { return likeCommentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dislikeCommentAction", function() { return dislikeCommentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentAction", function() { return deleteCommentAction; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios/axios */ "./src/axios/axios.js");


const createCommentThunk = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`comments/createComment`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/comments/create', data, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const getCommentThunk = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`comments/postId/`, // Declare the type your function argument here:
async (postId, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'post',
      url: '/comments/byPostId',
      data: {
        postId: postId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const replyCommentAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`comments/replyComment`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/comments/reply', data, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const likeCommentAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`comments/likeComment/`, // Declare the type your function argument here:
async (postId, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/comments/like', {
      commentId: postId
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const dislikeCommentAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`comments/dislikeComment/`, // Declare the type your function argument here:
async (postId, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'delete',
      url: '/comments/dislike',
      data: {
        commentId: postId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const deleteCommentAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`comments/deleteComment/`, // Declare the type your function argument here:
async (postId, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'delete',
      url: '/comments',
      data: {
        postId: postId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "./src/reducers/convertAccount/index.js":
/*!**********************************************!*\
  !*** ./src/reducers/convertAccount/index.js ***!
  \**********************************************/
/*! exports provided: userToCampanyThunk, convertAccountSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thunk */ "./src/reducers/convertAccount/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToCampanyThunk", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["userToCampanyThunk"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./src/reducers/convertAccount/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertAccountSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["convertAccountSlice"]; });




/***/ }),

/***/ "./src/reducers/convertAccount/slice.js":
/*!**********************************************!*\
  !*** ./src/reducers/convertAccount/slice.js ***!
  \**********************************************/
/*! exports provided: convertAccountSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertAccountSlice", function() { return convertAccountSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/convertAccount/thunk.js");


const initialState = {
  data: null,
  loading: false,
  error: null
};
const convertAccountSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'convertAccount',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["userToCampanyThunk"].pending, (state, {
      payload
    }) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["userToCampanyThunk"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["userToCampanyThunk"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
  }
});

/***/ }),

/***/ "./src/reducers/convertAccount/thunk.js":
/*!**********************************************!*\
  !*** ./src/reducers/convertAccount/thunk.js ***!
  \**********************************************/
/*! exports provided: userToCampanyThunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userToCampanyThunk", function() { return userToCampanyThunk; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios/axios */ "./src/axios/axios.js");


const userToCampanyThunk = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`convertAccount/userToCampany`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/users/toCompany', data, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "./src/reducers/followUnFollow/index.js":
/*!**********************************************!*\
  !*** ./src/reducers/followUnFollow/index.js ***!
  \**********************************************/
/*! exports provided: followThunk, unFollowThunk, followUnFollowSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thunk */ "./src/reducers/followUnFollow/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followThunk", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["followThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unFollowThunk", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["unFollowThunk"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./src/reducers/followUnFollow/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followUnFollowSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["followUnFollowSlice"]; });




/***/ }),

/***/ "./src/reducers/followUnFollow/slice.js":
/*!**********************************************!*\
  !*** ./src/reducers/followUnFollow/slice.js ***!
  \**********************************************/
/*! exports provided: followUnFollowSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUnFollowSlice", function() { return followUnFollowSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/followUnFollow/thunk.js");


const initialState = {
  data: null,
  loading: false,
  error: null
};
const followUnFollowSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["followThunk"].pending, (state, {
      payload
    }) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["followThunk"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["followThunk"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["unFollowThunk"].pending, (state, {
      payload
    }) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["unFollowThunk"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["unFollowThunk"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
  }
});

/***/ }),

/***/ "./src/reducers/followUnFollow/thunk.js":
/*!**********************************************!*\
  !*** ./src/reducers/followUnFollow/thunk.js ***!
  \**********************************************/
/*! exports provided: followThunk, unFollowThunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followThunk", function() { return followThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFollowThunk", function() { return unFollowThunk; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios/axios */ "./src/axios/axios.js");


const followThunk = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`follow`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/users/follow', {
      userId: data
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const unFollowThunk = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`unfollow`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"].delete('/users/unfollow', {
      userId: data
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "./src/reducers/getSinglePost/index.js":
/*!*********************************************!*\
  !*** ./src/reducers/getSinglePost/index.js ***!
  \*********************************************/
/*! exports provided: getSinglePost, getSinglePostSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thunk */ "./src/reducers/getSinglePost/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSinglePost", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["getSinglePost"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./src/reducers/getSinglePost/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSinglePostSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["getSinglePostSlice"]; });




/***/ }),

/***/ "./src/reducers/getSinglePost/slice.js":
/*!*********************************************!*\
  !*** ./src/reducers/getSinglePost/slice.js ***!
  \*********************************************/
/*! exports provided: getSinglePostSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSinglePostSlice", function() { return getSinglePostSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/getSinglePost/thunk.js");


const initialState = {
  data: null,
  loading: false,
  error: null
};
const getSinglePostSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getSinglePost"].pending, (state, {
      payload
    }) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getSinglePost"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getSinglePost"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
  }
});

/***/ }),

/***/ "./src/reducers/getSinglePost/thunk.js":
/*!*********************************************!*\
  !*** ./src/reducers/getSinglePost/thunk.js ***!
  \*********************************************/
/*! exports provided: getSinglePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSinglePost", function() { return getSinglePost; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios/axios */ "./src/axios/axios.js");


const getSinglePost = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`post/getSinglePost/`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/posts/getPost', {
      postId: data
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: getPostList, likePostAction, dislikePostAction, addToCollectionAction, postSlice, userSuggestionsSlice, getUserSuggestions, categoriesSlice, selectCategories, getCategories, getSinglePost, getSinglePostSlice, createCommentThunk, getCommentThunk, replyCommentAction, likeCommentAction, dislikeCommentAction, deleteCommentAction, createCommentSlice, userDataSlice, getUserData, userSettingsSlice, userSettingsThunk, changeSettingsThunk, delAccountThunk, userToCampanyThunk, convertAccountSlice, followThunk, unFollowThunk, followUnFollowSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts */ "./src/reducers/posts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostList", function() { return _posts__WEBPACK_IMPORTED_MODULE_0__["getPostList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likePostAction", function() { return _posts__WEBPACK_IMPORTED_MODULE_0__["likePostAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dislikePostAction", function() { return _posts__WEBPACK_IMPORTED_MODULE_0__["dislikePostAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToCollectionAction", function() { return _posts__WEBPACK_IMPORTED_MODULE_0__["addToCollectionAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postSlice", function() { return _posts__WEBPACK_IMPORTED_MODULE_0__["postSlice"]; });

/* harmony import */ var _userSuggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userSuggestions */ "./src/reducers/userSuggestions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSuggestionsSlice", function() { return _userSuggestions__WEBPACK_IMPORTED_MODULE_1__["userSuggestionsSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserSuggestions", function() { return _userSuggestions__WEBPACK_IMPORTED_MODULE_1__["getUserSuggestions"]; });

/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./src/reducers/categories/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoriesSlice", function() { return _categories__WEBPACK_IMPORTED_MODULE_2__["categoriesSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCategories", function() { return _categories__WEBPACK_IMPORTED_MODULE_2__["selectCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _categories__WEBPACK_IMPORTED_MODULE_2__["getCategories"]; });

/* harmony import */ var _getSinglePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getSinglePost */ "./src/reducers/getSinglePost/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSinglePost", function() { return _getSinglePost__WEBPACK_IMPORTED_MODULE_3__["getSinglePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSinglePostSlice", function() { return _getSinglePost__WEBPACK_IMPORTED_MODULE_3__["getSinglePostSlice"]; });

/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments */ "./src/reducers/comments/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCommentThunk", function() { return _comments__WEBPACK_IMPORTED_MODULE_4__["createCommentThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCommentThunk", function() { return _comments__WEBPACK_IMPORTED_MODULE_4__["getCommentThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replyCommentAction", function() { return _comments__WEBPACK_IMPORTED_MODULE_4__["replyCommentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likeCommentAction", function() { return _comments__WEBPACK_IMPORTED_MODULE_4__["likeCommentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dislikeCommentAction", function() { return _comments__WEBPACK_IMPORTED_MODULE_4__["dislikeCommentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCommentAction", function() { return _comments__WEBPACK_IMPORTED_MODULE_4__["deleteCommentAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCommentSlice", function() { return _comments__WEBPACK_IMPORTED_MODULE_4__["createCommentSlice"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./src/reducers/user/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDataSlice", function() { return _user__WEBPACK_IMPORTED_MODULE_5__["userDataSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return _user__WEBPACK_IMPORTED_MODULE_5__["getUserData"]; });

/* harmony import */ var _userSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userSettings */ "./src/reducers/userSettings/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSettingsSlice", function() { return _userSettings__WEBPACK_IMPORTED_MODULE_6__["userSettingsSlice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSettingsThunk", function() { return _userSettings__WEBPACK_IMPORTED_MODULE_6__["userSettingsThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeSettingsThunk", function() { return _userSettings__WEBPACK_IMPORTED_MODULE_6__["changeSettingsThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delAccountThunk", function() { return _userSettings__WEBPACK_IMPORTED_MODULE_6__["delAccountThunk"]; });

/* harmony import */ var _convertAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./convertAccount */ "./src/reducers/convertAccount/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userToCampanyThunk", function() { return _convertAccount__WEBPACK_IMPORTED_MODULE_7__["userToCampanyThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertAccountSlice", function() { return _convertAccount__WEBPACK_IMPORTED_MODULE_7__["convertAccountSlice"]; });

/* harmony import */ var _followUnFollow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./followUnFollow */ "./src/reducers/followUnFollow/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followThunk", function() { return _followUnFollow__WEBPACK_IMPORTED_MODULE_8__["followThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unFollowThunk", function() { return _followUnFollow__WEBPACK_IMPORTED_MODULE_8__["unFollowThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followUnFollowSlice", function() { return _followUnFollow__WEBPACK_IMPORTED_MODULE_8__["followUnFollowSlice"]; });











/***/ }),

/***/ "./src/reducers/posts/index.js":
/*!*************************************!*\
  !*** ./src/reducers/posts/index.js ***!
  \*************************************/
/*! exports provided: getPostList, likePostAction, dislikePostAction, addToCollectionAction, postSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thunk */ "./src/reducers/posts/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostList", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["getPostList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likePostAction", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["likePostAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dislikePostAction", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["dislikePostAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToCollectionAction", function() { return _thunk__WEBPACK_IMPORTED_MODULE_0__["addToCollectionAction"]; });

/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./src/reducers/posts/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_1__["postSlice"]; });




/***/ }),

/***/ "./src/reducers/posts/slice.js":
/*!*************************************!*\
  !*** ./src/reducers/posts/slice.js ***!
  \*************************************/
/*! exports provided: postSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postSlice", function() { return postSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/posts/thunk.js");


const initialState = {
  data: [],
  selected: [],
  loading: false,
  error: null
};
const postSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getPostList"].pending, (state, {
      payload
    }) => {
      state.data = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getPostList"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload.posts;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getPostList"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["likePostAction"].fulfilled, (state, {
      payload
    }) => {
      state.data = state.data.map(post => {
        if (post.id === payload.id) {
          return payload;
        } else {
          return post;
        }
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["dislikePostAction"].fulfilled, (state, {
      payload
    }) => {
      state.data = state.data.map(post => {
        if (post.id === payload.id) {
          return payload;
        } else {
          return post;
        }
      });
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["addToCollectionAction"].fulfilled, (state, {
      payload
    }) => {
      state.data = state.data.map(post => {
        if (post.id === payload.id) {
          return payload;
        } else {
          return post;
        }
      });
      state.loading = false;
      state.error = null;
    });
  }
});

/***/ }),

/***/ "./src/reducers/posts/thunk.js":
/*!*************************************!*\
  !*** ./src/reducers/posts/thunk.js ***!
  \*************************************/
/*! exports provided: getPostList, likePostAction, dislikePostAction, addToCollectionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostList", function() { return getPostList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePostAction", function() { return likePostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dislikePostAction", function() { return dislikePostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCollectionAction", function() { return addToCollectionAction; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios */ "./src/axios/index.js");


const getPostList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`posts/getPostList/`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/posts/activities', '', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const likePostAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`posts/likePost/`, // Declare the type your function argument here:
async (postId, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/posts/like', {
      postId: postId
    }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const dislikePostAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`posts/dislikePost/`, // Declare the type your function argument here:
async (postId, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'delete',
      url: '/posts/dislike',
      data: {
        postId: postId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const addToCollectionAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`posts/addtocollection/`, // Declare the type your function argument here:
async (postId, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'post',
      url: '/posts/addToCollection',
      data: {
        postId: postId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "./src/reducers/user/index.js":
/*!************************************!*\
  !*** ./src/reducers/user/index.js ***!
  \************************************/
/*! exports provided: userDataSlice, getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slice */ "./src/reducers/user/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDataSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_0__["userDataSlice"]; });

/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/user/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return _thunk__WEBPACK_IMPORTED_MODULE_1__["getUserData"]; });




/***/ }),

/***/ "./src/reducers/user/slice.js":
/*!************************************!*\
  !*** ./src/reducers/user/slice.js ***!
  \************************************/
/*! exports provided: userDataSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDataSlice", function() { return userDataSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/user/thunk.js");


const initialState = {
  data: null,
  loading: false,
  error: null
};
const userDataSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getUserData"].pending, (state, {
      payload
    }) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getUserData"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getUserData"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
  }
});

/***/ }),

/***/ "./src/reducers/user/thunk.js":
/*!************************************!*\
  !*** ./src/reducers/user/thunk.js ***!
  \************************************/
/*! exports provided: getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios/axios */ "./src/axios/axios.js");


const getUserData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`userData`, // Declare the type your function argument here:
async (username, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: `/users/${username}`,
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "./src/reducers/userSettings/index.js":
/*!********************************************!*\
  !*** ./src/reducers/userSettings/index.js ***!
  \********************************************/
/*! exports provided: userSettingsSlice, userSettingsThunk, changeSettingsThunk, delAccountThunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slice */ "./src/reducers/userSettings/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSettingsSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_0__["userSettingsSlice"]; });

/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/userSettings/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSettingsThunk", function() { return _thunk__WEBPACK_IMPORTED_MODULE_1__["userSettingsThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeSettingsThunk", function() { return _thunk__WEBPACK_IMPORTED_MODULE_1__["changeSettingsThunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delAccountThunk", function() { return _thunk__WEBPACK_IMPORTED_MODULE_1__["delAccountThunk"]; });




/***/ }),

/***/ "./src/reducers/userSettings/slice.js":
/*!********************************************!*\
  !*** ./src/reducers/userSettings/slice.js ***!
  \********************************************/
/*! exports provided: userSettingsSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSettingsSlice", function() { return userSettingsSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/userSettings/thunk.js");


const initialState = {
  data: null,
  loading: false,
  error: null
};
const userSettingsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'userSettings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["userSettingsThunk"].pending, (state, {
      payload
    }) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["userSettingsThunk"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["userSettingsThunk"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["changeSettingsThunk"].pending, (state, {
      payload
    }) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["changeSettingsThunk"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["changeSettingsThunk"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["delAccountThunk"].pending, (state, {
      payload
    }) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["delAccountThunk"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["delAccountThunk"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
  }
});

/***/ }),

/***/ "./src/reducers/userSettings/thunk.js":
/*!********************************************!*\
  !*** ./src/reducers/userSettings/thunk.js ***!
  \********************************************/
/*! exports provided: userSettingsThunk, changeSettingsThunk, delAccountThunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSettingsThunk", function() { return userSettingsThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSettingsThunk", function() { return changeSettingsThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delAccountThunk", function() { return delAccountThunk; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios/axios */ "./src/axios/axios.js");


const userSettingsThunk = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`userSettings`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: '/users/validateUsername',
      method: 'post',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const changeSettingsThunk = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`userSettings/changeSettings`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: '/users/profile',
      method: 'patch',
      data: data,
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});
const delAccountThunk = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`userSettings/delAccount`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await Object(_axios_axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: '/users/profile',
      method: 'delete',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e.response);
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "./src/reducers/userSuggestions/index.js":
/*!***********************************************!*\
  !*** ./src/reducers/userSuggestions/index.js ***!
  \***********************************************/
/*! exports provided: userSuggestionsSlice, getUserSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slice */ "./src/reducers/userSuggestions/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSuggestionsSlice", function() { return _slice__WEBPACK_IMPORTED_MODULE_0__["userSuggestionsSlice"]; });

/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/userSuggestions/thunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserSuggestions", function() { return _thunk__WEBPACK_IMPORTED_MODULE_1__["getUserSuggestions"]; });




/***/ }),

/***/ "./src/reducers/userSuggestions/slice.js":
/*!***********************************************!*\
  !*** ./src/reducers/userSuggestions/slice.js ***!
  \***********************************************/
/*! exports provided: userSuggestionsSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSuggestionsSlice", function() { return userSuggestionsSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thunk */ "./src/reducers/userSuggestions/thunk.js");


const initialState = {
  data: [],
  loading: false,
  error: null
};
const userSuggestionsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'userSuggestions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getUserSuggestions"].pending, (state, {
      payload
    }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getUserSuggestions"].fulfilled, (state, {
      payload
    }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(_thunk__WEBPACK_IMPORTED_MODULE_1__["getUserSuggestions"].rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }

      state.loading = false;
    });
  }
});

/***/ }),

/***/ "./src/reducers/userSuggestions/thunk.js":
/*!***********************************************!*\
  !*** ./src/reducers/userSuggestions/thunk.js ***!
  \***********************************************/
/*! exports provided: getUserSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSuggestions", function() { return getUserSuggestions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axios */ "./src/axios/index.js");


const getUserSuggestions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`userSuggestions/getUserSuggestions/`, // Declare the type your function argument here:
async (data, thunkApi) => {
  try {
    const token = localStorage.getItem('token');
    const response = await _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/users/suggestions', '', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.response);
  }
});

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookies");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F4aW9zL2F4aW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluQ29udGVudC9jb21wb25lbnRzL2NvbXBhbnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbkNvbnRlbnQvY29tcG9uZW50cy9sYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbkNvbnRlbnQvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbkNvbnRlbnQvY29tcG9uZW50cy90cmVuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluQ29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluQ29udGVudC9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXJBZnRlckxvZ2luL2NvbXBvbmVudHMvYWRkUG9zdE1vZGFsL2FkZFBvc3RNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXJBZnRlckxvZ2luL2NvbXBvbmVudHMvYWRkUG9zdE1vZGFsL2NvbXBvbmVudHMvbG9jYWxQb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhckFmdGVyTG9naW4vY29tcG9uZW50cy9hZGRQb3N0TW9kYWwvY29tcG9uZW50cy91cmxQb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhckFmdGVyTG9naW4vY29tcG9uZW50cy9hZGRQb3N0TW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyQWZ0ZXJMb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXJBZnRlckxvZ2luL2xvZ2luTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhckJlZm9yZUxvZ2luL2NvbXBvbmVudHMvbG9naW5Nb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXJCZWZvcmVMb2dpbi9jb21wb25lbnRzL2xvZ2luTW9kYWwvbG9naW5Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXJCZWZvcmVMb2dpbi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbk1vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhckJlZm9yZUxvZ2luL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uTW9kYWwvcmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhckJlZm9yZUxvZ2luL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmJhckJlZm9yZUxvZ2luL2xvZ291dE5hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy91c2VyU2V0dGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NhdGVnb3JpZXMvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NhdGVnb3JpZXMvdGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NvbnZlcnRBY2NvdW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb21tZW50cy9zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvY29tbWVudHMvdGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NvbnZlcnRBY2NvdW50L3NsaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb252ZXJ0QWNjb3VudC90aHVuay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZm9sbG93VW5Gb2xsb3cvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2ZvbGxvd1VuRm9sbG93L3RodW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9nZXRTaW5nbGVQb3N0L3NsaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9nZXRTaW5nbGVQb3N0L3RodW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcG9zdHMvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Bvc3RzL3RodW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy91c2VyL3NsaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy91c2VyL3RodW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy91c2VyU2V0dGluZ3Mvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3VzZXJTZXR0aW5ncy90aHVuay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdXNlclN1Z2dlc3Rpb25zL3NsaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy91c2VyU3VnZ2VzdGlvbnMvdGh1bmsuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwiaSIsInNyYyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbnNvbGUiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkhvbWUiLCJ1c2VFZmZlY3QiLCJsb2ciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJjb29raWVzIiwiQ29va2llcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkZvb3RlciIsIkNvbXBhbnkiLCJMYXRlc3QiLCJQb3N0IiwiVHJlbmRpbmciLCJOYXZiYXIiLCJjb250ZW50VHlwZSIsInNldENvbnRlbnRUeXBlIiwidXNlU3RhdGUiLCJjbHN4IiwiYWN0aXZlIiwiQWRkUG9zdE1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJzZXRTaG93IiwicG9zdFR5cGUiLCJzZXRQb3N0VHlwZSIsImltYWdlVHlwZSIsInNldGltYWdlVHlwZSIsImJsb2dUeXBlIiwic2V0YmxvZ1R5cGUiLCJzaG93IiwiVGFnQ29tcG9uZW50IiwiY3VsbFRhZ0Zyb21UYWdzIiwiTG9jYWxQb3N0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInBvc3RTdGF0ZSIsInNldFBvc3RTdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yaWVzIiwidW5kZWZpbmVkIiwiaW1hZ2UiLCJ0YWdzIiwicHVibGljIiwiY29sbGVjdGlvbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwib25DaGFuZ2VGaWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGVzIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImNhdGVnb3JpZXNTdGF0ZSIsInVzZVNlbGVjdG9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImdldENhdGVnb3JpZXMiLCJwdXNoUG9zdCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGFncyIsImlucHV0UmVmIiwidXNlUmVmIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpbnB1dFZhbHVlQ2hhbmdlSGFuZGxlciIsImlucHV0Q2hhbmdlIiwibGVuZ3RoIiwic2xpY2UiLCJ0YWciLCJmaWx0ZXIiLCJlbGVtZW50IiwiVXJsUG9zdCIsIk1haW5OYXZiYXIiLCJsb2dvdXRVc2VyIiwiYWN0aW9ucyIsInVwZGF0ZVN0YXRlIiwiTG9naW5Nb2RhbCIsImhhbmRsZUNsb3NlTG9naW4iLCJzZXRTaG93TG9naW4iLCJhdXRoQ29udGV4dCIsInNldFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsInNldEVycm9ycyIsImxvZ2luU3RhdGUiLCJzZXRMb2dpblN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwibmV3U3RhdGUiLCJpbmRleE9mIiwiaGFuZGxlU3VibWl0IiwicGVuZGluZ09wZXJhdGlvbnMiLCJpbmNsdWRlcyIsInNob3dMb2dpbiIsImJvZHkiLCJzdHJpbmdpZnkiLCJSZWdpc3RyYXRpb25Nb2RhbCIsImhhbmRsZUNsb3NlSm9pbiIsInNldFNob3dKb2luIiwidXNlclR5cGUiLCJzZXRVc2VyVHlwZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidXNlcm5hbWUiLCJjbmFtZSIsImJUeXBlIiwiclR5cGUiLCJzaWdudXBTdGF0ZSIsInNldFNpZ251cFN0YXRlIiwiaGFuZGxlQ2hhbmdlaiIsImhhbmRsZVN1Ym1pdGoiLCJzaG93Sm9pbiIsInNlbGVjdGVkIiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJ1c2VyIiwiY29va2llIiwiZXhwaXJlcyIsInJlbW92ZSIsInVzZXJPYmplY3QiLCJwYXJzZSIsInJlbmRlciIsImluaXRpYWxTdGF0ZSIsImNhdGVnb3JpZXNTbGljZSIsImNyZWF0ZVNsaWNlIiwicmVkdWNlcnMiLCJzZWxlY3RDYXRlZ29yaWVzIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsImNyZWF0ZUFzeW5jVGh1bmsiLCJ0aHVua0FwaSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZWplY3RXaXRoVmFsdWUiLCJjcmVhdGVDb21tZW50U2xpY2UiLCJjcmVhdGVDb21tZW50VGh1bmsiLCJnZXRDb21tZW50VGh1bmsiLCJyZXBseUNvbW1lbnRBY3Rpb24iLCJsaWtlQ29tbWVudEFjdGlvbiIsImNvbW1lbnQiLCJkaXNsaWtlQ29tbWVudEFjdGlvbiIsImRlbGV0ZUNvbW1lbnRBY3Rpb24iLCJwb3N0SWQiLCJjb21tZW50SWQiLCJjb252ZXJ0QWNjb3VudFNsaWNlIiwidXNlclRvQ2FtcGFueVRodW5rIiwiZm9sbG93VW5Gb2xsb3dTbGljZSIsImZvbGxvd1RodW5rIiwidW5Gb2xsb3dUaHVuayIsInVzZXJJZCIsImRlbGV0ZSIsImdldFNpbmdsZVBvc3RTbGljZSIsImdldFNpbmdsZVBvc3QiLCJwb3N0U2xpY2UiLCJnZXRQb3N0TGlzdCIsInBvc3RzIiwibGlrZVBvc3RBY3Rpb24iLCJkaXNsaWtlUG9zdEFjdGlvbiIsImFkZFRvQ29sbGVjdGlvbkFjdGlvbiIsInVzZXJEYXRhU2xpY2UiLCJnZXRVc2VyRGF0YSIsInVzZXJTZXR0aW5nc1NsaWNlIiwidXNlclNldHRpbmdzVGh1bmsiLCJjaGFuZ2VTZXR0aW5nc1RodW5rIiwiZGVsQWNjb3VudFRodW5rIiwidXNlclN1Z2dlc3Rpb25zU2xpY2UiLCJnZXRVc2VyU3VnZ2VzdGlvbnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFD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dUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LE1BRU87QUFDTjVQLGFBQUssQ0FBQy9ILEtBQU4sR0FBYzBYLE1BQU0sQ0FBQzFYLEtBQXJCO0FBQ0E7O0FBQ0QrSCxXQUFLLENBQUN4UixPQUFOLEdBQWdCLEtBQWhCO0FBQ0EsS0FQRDtBQVFBO0FBdEI4QyxDQUFELENBQXhDLEM7Ozs7Ozs7Ozs7OztBQ1RQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTWdrQixrQkFBa0IsR0FBR3JDLHlFQUFnQixDQUNoRCxxQ0FEZ0QsRUFFakQ7QUFDQSxPQUFPM1IsSUFBUCxFQUFhNFIsUUFBYixLQUEwQjtBQUN6QixNQUFJO0FBQ0gsVUFBTXhGLEtBQUssR0FBR3lGLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0EsVUFBTXhGLFFBQVEsR0FBRyxNQUFNcEQsOENBQUssQ0FBQytDLElBQU4sQ0FBVyxvQkFBWCxFQUFpQyxFQUFqQyxFQUFxQztBQUMzREMsYUFBTyxFQUFFO0FBQ1JDLHFCQUFhLEVBQUUsWUFBWUM7QUFEbkI7QUFEa0QsS0FBckMsQ0FBdkI7QUFLQSxXQUFPRSxRQUFRLENBQUN0TSxJQUFoQjtBQUNBLEdBUkQsQ0FRRSxPQUFPNU0sQ0FBUCxFQUFVO0FBQ1gsV0FBT3dlLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QjNlLENBQUMsQ0FBQ2taLFFBQTNCLENBQVA7QUFDQTtBQUNELENBZmdELENBQTNDLEM7Ozs7Ozs7Ozs7O0FDSFAsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdjb29raWVzJztcblxuaW1wb3J0IE5hdmJhckJlZm9yZUxvZ2luIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL25hdmJhckJlZm9yZUxvZ2luJztcbmltcG9ydCBOYXZiYXJBZnRlckxvZ2luIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL25hdmJhckFmdGVyTG9naW4nO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL21haW5Db250ZW50JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCB7IEF1dGhDb250ZXh0UHJvdmlkZXIsIEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vc3JjL2NvbnRleHQvYXV0aCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ0hvbWUgPT4gJywgcHJvcHMpO1xuXHR9LCBbXSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+SW5zcG9jcmVhdGU8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nVXNlcnMnIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8TmF2YmFyQmVmb3JlTG9naW4gLz5cblx0XHRcdDxNYWluQ29udGVudCAvPlxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpO1xufVxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcblx0Y29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHJlcSwgcmVzKTtcblx0Y29uc29sZS5sb2coXG5cdFx0J0luZGV4ID0+IGdldFNlcnZlclNpZGVQcm9wcyA9PiBjb29raWVzID0+ICcsXG5cdFx0Y29va2llcy5nZXQoJ25hbWUnKVxuXHQpO1xuXHRyZXR1cm4geyBwcm9wczogeyBuYW1lOiBjb29raWVzLmdldCgnbmFtZScpIHx8IG51bGwgfSB9O1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcblx0YmFzZVVSTDogJ2h0dHBzOi8vYXBpLWRldi5pbnNwb2NyZWF0ZS5jb20vJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2F4aW9zJztcbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmb290ZXItc2VjdGlvbic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlciByb3cnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTMgZm9vdGVyLWNvbCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25hdmJhci1sb2dvJz5cblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9Jy9pbWFnZXMvR3JvdXAgQ29weS5zdmcnIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSAvPlxuXHRcdFx0XHRcdFx0PGgxPkluc3BvY3JlYXRlPC9oMT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtMyBmb290ZXItY29sJz5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8aDU+VXNlZnVsIExpbmtzPC9oNT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIyc+QWJvdXQgVXM8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJz5Ib3cgaXRzIHdvcms8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTMgZm9vdGVyLWNvbCc+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJz5UZXJtcyBvZiBTZXZpY2VzPC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIyc+UHJpdmFjeSBQb2xpY3k8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTMgZm9vdGVyLWNvbCc+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJz5Db250YWN0IHVzPC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHA+Q29weXJpZ2h0IDIwMjAgYWxsIHJpZ2h0cyBhcmUgcmVzZXJ2ZWQ8L3A+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vZm9vdGVyJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL3Bvc3QvcG9zdCc7XG5cbmNvbnN0IENvbXBhbnkgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbT0nY29tcGFueS1wb3N0cyc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxsLXBvc3RzJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21vcmUnPlxuXHRcdFx0XHQ8YnV0dG9uPkxvYWQgTW9kZS4uLjwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQb3N0IGZyb20gJy4vcG9zdC9wb3N0JztcblxuZXhwb3J0IGNvbnN0IExhdGVzdCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtPSdsYXRlc3QtcG9zdHMnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsbC1wb3N0cyc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaW5nbGUtcG9zdCc+XG5cdFx0XHRcdFx0PFBvc3QgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaW5nbGUtcG9zdCc+XG5cdFx0XHRcdFx0PFBvc3QgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaW5nbGUtcG9zdCc+XG5cdFx0XHRcdFx0PFBvc3QgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaW5nbGUtcG9zdCc+XG5cdFx0XHRcdFx0PFBvc3QgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaW5nbGUtcG9zdCc+XG5cdFx0XHRcdFx0PFBvc3QgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb3JlJz5cblx0XHRcdFx0PGJ1dHRvbj5Mb2FkIE1vZGUuLi48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncG9zdCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVybGF5Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ2FwJz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGVzYyc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCB1c2VyJz5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz0nL3B1YmxpYy9JbWFnZXMvdXNlckljb24yLnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsyMH1cblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MjB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHA+VXNlck5hbWU8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBhZGQnPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPScvcHVibGljL0ltYWdlcy9wbHVzSWNvbi5zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MjB9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezIwfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwPkFkZCB0byBDb2xsZWN0aW9uPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggbGlrZSc+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9wdWJsaWMvSW1hZ2VzL2xpa2VJY29uLnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsyMH1cblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MjB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHA+TGlrZTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9wb3N0L3Bvc3QnO1xuXG5jb25zdCBUcmVuZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtPSd0cmVuZGluZy1wb3N0cyc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxsLXBvc3RzJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpbmdsZS1wb3N0Jz5cblx0XHRcdFx0XHQ8UG9zdCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21vcmUnPlxuXHRcdFx0XHQ8YnV0dG9uPkxvYWQgTW9kZS4uLjwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmVuZGluZztcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL21haW5Db250ZW50JztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmVuZGluZyBmcm9tICcuL2NvbXBvbmVudHMvdHJlbmRpbmcnO1xuaW1wb3J0IExhdGVzdCBmcm9tICcuL2NvbXBvbmVudHMvbGF0ZXN0JztcbmltcG9ydCBDb21wYW55IGZyb20gJy4vY29tcG9uZW50cy9jb21wYW55JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtjb250ZW50VHlwZSwgc2V0Q29udGVudFR5cGVdID0gdXNlU3RhdGUoXG5cdFx0J3RyZW5kaW5ncycsXG5cdFx0J2xhdGVzdCcsXG5cdFx0J2NvbXBhbnknXG5cdCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21haW4tY29udGVudC1OYXZiYXInPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goeyBhY3RpdmU6IGNvbnRlbnRUeXBlID09PSAndHJlbmRpbmdzJyB9KX1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0Q29udGVudFR5cGUoJ3RyZW5kaW5ncycpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRUcmVuZGluZ3Ncblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goeyBhY3RpdmU6IGNvbnRlbnRUeXBlID09PSAnbGF0ZXN0JyB9KX1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0Q29udGVudFR5cGUoJ2xhdGVzdCcpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRMYXRlc3Rcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goeyBhY3RpdmU6IGNvbnRlbnRUeXBlID09PSAndHJlbmRjb21wYW55aW5ncycgfSl9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldENvbnRlbnRUeXBlKCdjb21wYW55Jyl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdENvbXBhbnlcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdHtjb250ZW50VHlwZSA9PT0gJ3RyZW5kaW5ncycgJiYgKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8VHJlbmRpbmcgLz5cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2NvbnRlbnRUeXBlID09PSAnbGF0ZXN0JyAmJiAoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxMYXRlc3QgLz5cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2NvbnRlbnRUeXBlID09PSAnY29tcGFueScgJiYgKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8Q29tcGFueSAvPlxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvY2FsUG9zdCBmcm9tICcuL2NvbXBvbmVudHMvbG9jYWxQb3N0JztcbmltcG9ydCBVcmxQb3N0IGZyb20gJy4vY29tcG9uZW50cy91cmxQb3N0JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG5jb25zdCBBZGRQb3N0TW9kYWwgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBwcm9wcy5zZXRTaG93KGZhbHNlKTtcblxuXHQvLyBTVEFURVMgRk9SIFBPU1RUWVBFXG5cdGNvbnN0IFtwb3N0VHlwZSwgc2V0UG9zdFR5cGVdID0gdXNlU3RhdGUoJ0ltYWdlJyk7XG5cdGNvbnN0IFtpbWFnZVR5cGUsIHNldGltYWdlVHlwZV0gPSB1c2VTdGF0ZSgnbG9jYWxJbWFnZScpO1xuXHRjb25zdCBbYmxvZ1R5cGUsIHNldGJsb2dUeXBlXSA9IHVzZVN0YXRlKCdsb2NhbEJsb2cnKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2l6ZT0nbGcnXG5cdFx0XHRcdHNob3c9e3Byb3BzLnNob3d9XG5cdFx0XHRcdGNsYXNzTmFtZT0nYWRkLXBvc3QtbW9kYWwnXG5cdFx0XHRcdG9uSGlkZT17aGFuZGxlQ2xvc2V9XG5cdFx0XHRcdGNlbnRlcmVkXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9J2FkZC1wb3N0LWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0PGJ1dHR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzPSdyZW12b2UtcG9zdC1tb2RhbCc+XG5cdFx0XHRcdFx0XHQmdGltZXM7XG5cdFx0XHRcdFx0PC9idXR0dG9uPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB0LTAnPkFkZCBOZXcgUG9zdDwvaDE+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Bvc3QtdHlwZXMnPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xzeCh7IGFjdGl2ZTogcG9zdFR5cGUgPT09ICdJbWFnZScgfSl9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFBvc3RUeXBlKCdJbWFnZScpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRJbWFnZVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KHsgYWN0aXZlOiBwb3N0VHlwZSA9PT0gJ0Jsb2cnIH0pfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRQb3N0VHlwZSgnQmxvZycpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRCbG9nXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3Bvc3RUeXBlID09PSAnSW1hZ2UnICYmIChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmlsZS10eXBlJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goeyBhY3RpdmU6IGltYWdlVHlwZSA9PT0gJ2xvY2FsSW1hZ2UnIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRpbWFnZVR5cGUoJ2xvY2FsSW1hZ2UnKX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+aW5zZXJ0X3Bob3RvPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBZGQgSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xzeCh7IGFjdGl2ZTogaW1hZ2VUeXBlID09PSAndXJsSW1hZ2UnIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRpbWFnZVR5cGUoJ3VybEltYWdlJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPmxhbmd1YWdlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBZGQgSW1hZ2UgZnJvbSBVUkxcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHtpbWFnZVR5cGUgPT09ICdsb2NhbEltYWdlJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TG9jYWxQb3N0IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdHtpbWFnZVR5cGUgPT09ICd1cmxJbWFnZScgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFVybFBvc3QgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdHtwb3N0VHlwZSA9PT0gJ0Jsb2cnICYmIChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmlsZS10eXBlJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goeyBhY3RpdmU6IGJsb2dUeXBlID09PSAnbG9jYWxCbG9nJyB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0YmxvZ1R5cGUoJ2xvY2FsQmxvZycpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5kZXNjcmlwdGlvbjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkIEJsb2dcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xzeCh7IGFjdGl2ZTogYmxvZ1R5cGUgPT09ICd1cmxCbG9nJyB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0YmxvZ1R5cGUoJ3VybEJsb2cnKX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+bGFuZ3VhZ2U8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFkZCBCbG9nIGZyb20gVVJMXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7YmxvZ1R5cGUgPT09ICdsb2NhbEJsb2cnICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMb2NhbFBvc3QgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0e2Jsb2dUeXBlID09PSAndXJsQmxvZycgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFVybFBvc3QgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkUG9zdE1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbnRleHQvYXV0aCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXhpb3MnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHVjZXJzJztcblxuY29uc3QgVGFnQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J3RhZ0NvbXBvbmVudCc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFnQ29tcG9uZW50X190ZXh0Jz57cHJvcHMudGV4dH08L2Rpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPSd0YWdDb21wb25lbnRfX2Nsb3NlJ1xuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0cHJvcHMuY3VsbFRhZ0Zyb21UYWdzKHByb3BzLnRleHQpO1xuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHRYXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IExvY2FsUG9zdCA9ICgpID0+IHtcblx0Y29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG5cdC8vIEFQSSBGT1IgRk9STSBEQVRBIEZPUiBDUkVBVEUgUE9TVFxuXHRjb25zdCBbcG9zdFN0YXRlLCBzZXRQb3N0U3RhdGVdID0gdXNlU3RhdGUoe1xuXHRcdHRpdGxlOiAnJyxcblx0XHRkZXNjcmlwdGlvbjogJycsXG5cdFx0Y2F0ZWdvcmllczogWydhbmFzJ10sXG5cdFx0dXJsOiB1bmRlZmluZWQsXG5cdFx0aW1hZ2U6IG51bGwsXG5cdFx0dGFnczogW10sXG5cdFx0cHVibGljOiB0cnVlLFxuXHRcdGNvbGxlY3Rpb246IHRydWUsXG5cdFx0cG9zdFR5cGU6ICdJbWFnZScsXG5cdH0pO1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXHRjb25zdCBvbkNoYW5nZUZpbGUgPSAoZXZlbnQpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhldmVudCk7XG5cdFx0Ly8gY29uc29sZS5sb2coY29udGV4dClcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG5cdFx0YXhpb3Ncblx0XHRcdC5wb3N0KCcvbWVkaWEnLCBmb3JtRGF0YSwge1xuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgY29udGV4dC5zdGF0ZS50b2tlbixcblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0c2V0UG9zdFN0YXRlKHtcblx0XHRcdFx0XHQuLi5wb3N0U3RhdGUsXG5cdFx0XHRcdFx0aW1hZ2U6IHJlc3BvbnNlLmRhdGEucGF0aCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0Ly8gQVBJIEZPUiBTRUxFQ1QgQ0FURUdPUklFUyBGUk9NIFJFRFVDRVJcblx0Y29uc3QgY2F0ZWdvcmllc1N0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXRlZ29yaWVzKTtcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGRpc3BhdGNoKGdldENhdGVnb3JpZXMoKSk7XG5cdH0sIFtdKTtcblxuXHQvLyBBUEkgRk9SIENSRUFURSBQT1NUXG5cdGNvbnN0IHB1c2hQb3N0ID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YXhpb3Ncblx0XHRcdC5wb3N0KFxuXHRcdFx0XHQnL3Bvc3RzL2NyZWF0ZScsXG5cdFx0XHRcdHsgLi4ucG9zdFN0YXRlIH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBjb250ZXh0LnN0YXRlLnRva2VuLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRoaXN0b3J5LnB1c2goJy91cGxvYWRlZFBvc3QnKTtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHQvLyBUQUdTIElOIElOUFVUXG5cdGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IFJlYWN0LnVzZVN0YXRlKFsnSmF2YVNjcmlwdCcsICdUeXBlU2NyaXB0J10pO1xuXHRjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXHRjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3QgaW5wdXRWYWx1ZUNoYW5nZUhhbmRsZXIgPSAoaW5wdXRDaGFuZ2UpID0+IHtcblx0XHRzZXRJbnB1dFZhbHVlKGlucHV0Q2hhbmdlKTtcblx0XHRpZiAoaW5wdXRDaGFuZ2VbaW5wdXRDaGFuZ2UubGVuZ3RoIC0gMV0gPT09ICcsJykge1xuXHRcdFx0c2V0VGFncyhbLi4udGFncywgaW5wdXRDaGFuZ2Uuc2xpY2UoMCwgaW5wdXRDaGFuZ2UubGVuZ3RoIC0gMSldKTtcblx0XHRcdHNldElucHV0VmFsdWUoJycpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY3VsbFRhZ0Zyb21UYWdzID0gKHRhZykgPT4ge1xuXHRcdHNldFRhZ3MoWy4uLnRhZ3MuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50ICE9PSB0YWcpXSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nYWRkLXBvc3QtZm9ybScgb25TdWJtaXQ9e3B1c2hQb3N0fT5cblx0XHRcdFx0eyFwb3N0U3RhdGUuaW1hZ2UgJiYgKFxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2FkZC1pbWcnPlxuXHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdHNyYz0nL3B1YmxpYy9pbWFnZXMvU2hhcGUgQ29weSAyMTIuc3ZnJ1xuXHRcdFx0XHRcdFx0XHRhbHQ9J3BsdXNpY29uJ1xuXHRcdFx0XHRcdFx0XHR3aWR0aD17MTAwfVxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezEwMH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8cD5BZGQgTmV3PC9wPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9J2ZpbGUnIGhpZGRlbiBvbkNoYW5nZT17b25DaGFuZ2VGaWxlfSAvPlxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshIXBvc3RTdGF0ZS5pbWFnZSAmJiA8aW1nIHNyYz17cG9zdFN0YXRlLmltYWdlfSAvPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2lucHV0LXBvc3QnPlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSd0aXRsZSc+VGl0bGU8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU29tZSBUZXh0IEhlcmUnIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5wdXQtcG9zdCc+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2NhdGVnb3J5Jz5DYXRlZ29yaWVzPC9sYWJlbD5cblx0XHRcdFx0XHQ8c2VsZWN0IG5hbWU9J2NhdGVnb3J5JyBjbGFzc05hbWU9J3NlbGVjdC10eXBlJz5cblx0XHRcdFx0XHRcdHtjYXRlZ29yaWVzU3RhdGUuZGF0YS5tYXAoKGl0ZW0pID0+IChcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0udGl0bGV9PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1wb3N0Jz5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nbWFzc2FnZSc+RGVzY3JpcHRpb248L2xhYmVsPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYSB5dHlwZT0ndGV4dCcgcm93cz0nNicgcGxhY2Vob2xkZXI9J1NvbWUgVGV4dCBIZXJlJyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2lucHV0LXBvc3QnPlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSd0YWdzJz5BZGQgVGFnczwvbGFiZWw+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhZ0FyZWEnPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhZ0FyZWFfX2Rpc3BsYXlBcmVhJz5cblx0XHRcdFx0XHRcdFx0e3RhZ3MubWFwKCh0YWcpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGFnQ29tcG9uZW50IHRleHQ9e3RhZ30gY3VsbFRhZ0Zyb21UYWdzPXtjdWxsVGFnRnJvbVRhZ3N9IC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0cmVmPXtpbnB1dFJlZn1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IGlucHV0VmFsdWVDaGFuZ2VIYW5kbGVyKGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdzZXBhcmF0ZWQgYnkgY29tbWFzJ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RhZ0FyZWFfX2lucHV0J1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHVibGljJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0b2dnbGUnPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdzd2l0Y2gnPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nc2xpZGVyIHJvdW5kJz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwPlB1YmxpYzwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJtaXQtYnRuJz5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+SSBXb3VsZCBMaWtlIHRvIFBvc3QgTm93PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxQb3N0O1xuXG4vLyBwb3N0VHlwZTogcG9zdFR5cGVcblxuLy8gdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBpZihjb250ZXh0LnN0YXRlKXtcbi8vICAgICAgIHNldFNob3coZmFsc2UpXG4vLyAgICAgfVxuLy8gICB9LCBbY29udGV4dF0pXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29udGV4dC9hdXRoJztcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi8uLi8uLi8uLi9heGlvcyc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdWNlcnMnO1xuXG5jb25zdCBUYWdDb21wb25lbnQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFnQ29tcG9uZW50Jz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWdDb21wb25lbnRfX3RleHQnPntwcm9wcy50ZXh0fTwvZGl2PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9J3RhZ0NvbXBvbmVudF9fY2xvc2UnXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRwcm9wcy5jdWxsVGFnRnJvbVRhZ3MocHJvcHMudGV4dCk7XG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdFhcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgVXJsUG9zdCA9ICgpID0+IHtcblx0Y29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG5cdC8vIEFQSSBGT1IgRk9STSBEQVRBIEZPUiBDUkVBVEUgUE9TVFxuXHRjb25zdCBbcG9zdFN0YXRlLCBzZXRQb3N0U3RhdGVdID0gdXNlU3RhdGUoe1xuXHRcdHRpdGxlOiAnJyxcblx0XHRkZXNjcmlwdGlvbjogJycsXG5cdFx0Y2F0ZWdvcmllczogWydhbmFzJ10sXG5cdFx0dXJsOiB1bmRlZmluZWQsXG5cdFx0aW1hZ2U6IG51bGwsXG5cdFx0dGFnczogW10sXG5cdFx0cHVibGljOiB0cnVlLFxuXHRcdGNvbGxlY3Rpb246IHRydWUsXG5cdFx0cG9zdFR5cGU6ICdJbWFnZScsXG5cdH0pO1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG5cdGNvbnN0IG9uQ2hhbmdlRmlsZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcblx0XHQvLyBjb25zb2xlLmxvZyhjb250ZXh0KVxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcblx0XHRheGlvc1xuXHRcdFx0LnBvc3QoJy9tZWRpYScsIGZvcm1EYXRhLCB7XG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBjb250ZXh0LnN0YXRlLnRva2VuLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRzZXRQb3N0U3RhdGUoe1xuXHRcdFx0XHRcdC4uLnBvc3RTdGF0ZSxcblx0XHRcdFx0XHRpbWFnZTogcmVzcG9uc2UuZGF0YS5wYXRoLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHQvLyBBUEkgRk9SIFNFTEVDVCBDQVRFR09SSUVTXG5cdGNvbnN0IGNhdGVnb3JpZXNTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2F0ZWdvcmllcyk7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRkaXNwYXRjaChnZXRDYXRlZ29yaWVzKCkpO1xuXHR9LCBbXSk7XG5cblx0Ly8gQVBJIEZPUiBDUkVBVEUgUE9TVFxuXHRjb25zdCBwdXNoUG9zdCA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGF4aW9zXG5cdFx0XHQucG9zdChcblx0XHRcdFx0Jy9jcmVhdGUnLFxuXHRcdFx0XHR7IC4uLnBvc3RTdGF0ZSB9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgY29udGV4dC5zdGF0ZS50b2tlbixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aGlzdG9yeS5wdXNoKCcvdXBsb2FkZWRQb3N0Jyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0Ly8gVEFHUyBJTiBJTlBVVFxuXHRjb25zdCBbdGFncywgc2V0VGFnc10gPSBSZWFjdC51c2VTdGF0ZShbJ0phdmFTY3JpcHQnLCAnVHlwZVNjcmlwdCddKTtcblx0Y29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcblx0Y29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG5cdGNvbnN0IGlucHV0VmFsdWVDaGFuZ2VIYW5kbGVyID0gKGlucHV0Q2hhbmdlKSA9PiB7XG5cdFx0c2V0SW5wdXRWYWx1ZShpbnB1dENoYW5nZSk7XG5cdFx0aWYgKGlucHV0Q2hhbmdlW2lucHV0Q2hhbmdlLmxlbmd0aCAtIDFdID09PSAnLCcpIHtcblx0XHRcdHNldFRhZ3MoWy4uLnRhZ3MsIGlucHV0Q2hhbmdlLnNsaWNlKDAsIGlucHV0Q2hhbmdlLmxlbmd0aCAtIDEpXSk7XG5cdFx0XHRzZXRJbnB1dFZhbHVlKCcnKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGN1bGxUYWdGcm9tVGFncyA9ICh0YWcpID0+IHtcblx0XHRzZXRUYWdzKFsuLi50YWdzLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudCAhPT0gdGFnKV0pO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J2FkZC1wb3N0LWZvcm0nIG9uU3VibWl0PXtwdXNoUG9zdH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1wb3N0IHBiLTMnPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPSd1cmwnIHBsYWNlaG9sZGVyPSdodHRwczovLycgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhZGQtaW1nJz5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz0nL3B1YmxpYy9pbWFnZXMvU2hhcGUgQ29weSAyMTIuc3ZnJ1xuXHRcdFx0XHRcdFx0YWx0PSdwbHVzaWNvbidcblx0XHRcdFx0XHRcdGhlaWdodD17MTAwfVxuXHRcdFx0XHRcdFx0d2lkdGg9ezEwMH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxwPkFkZCBOZXc8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5wdXQtcG9zdCc+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J3RpdGxlJz5UaXRsZTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTb21lIFRleHQgSGVyZScgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1wb3N0Jz5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nY2F0ZWdvcnknPkNhdGVnb3JpZXM8L2xhYmVsPlxuXHRcdFx0XHRcdDxzZWxlY3QgbmFtZT0nY2F0ZWdvcnknIGNsYXNzTmFtZT0nc2VsZWN0LXR5cGUnPlxuXHRcdFx0XHRcdFx0e2NhdGVnb3JpZXNTdGF0ZS5kYXRhLm1hcCgoaXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPXtpdGVtLmlkfT57aXRlbS50aXRsZX08L29wdGlvbj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2lucHV0LXBvc3QnPlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdtYXNzYWdlJz5EZXNjcmlwdGlvbjwvbGFiZWw+XG5cdFx0XHRcdFx0PHRleHRhcmVhIHR5cGU9J3RleHQnIHJvd3M9JzYnIHBsYWNlaG9sZGVyPSdTb21lIFRleHQgSGVyZScgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1wb3N0Jz5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0ndGFncyc+QWRkIFRhZ3M8L2xhYmVsPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWdBcmVhJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWdBcmVhX19kaXNwbGF5QXJlYSc+XG5cdFx0XHRcdFx0XHRcdHt0YWdzLm1hcCgodGFnKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRhZ0NvbXBvbmVudCB0ZXh0PXt0YWd9IGN1bGxUYWdGcm9tVGFncz17Y3VsbFRhZ0Zyb21UYWdzfSAvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdHJlZj17aW5wdXRSZWZ9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dFZhbHVlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBpbnB1dFZhbHVlQ2hhbmdlSGFuZGxlcihldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nc2VwYXJhdGVkIGJ5IGNvbW1hcydcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0YWdBcmVhX19pbnB1dCdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHVibGljJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndG9nZ2xlJz5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3N3aXRjaCc+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZCAvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3NsaWRlciByb3VuZCc+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8cD5QdWJsaWM8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3VibWl0LWJ0bic+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkkgV291bGQgTGlrZSB0byBQb3N0IE5vdzwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVybFBvc3Q7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9hZGRQb3N0TW9kYWwnO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vbG9naW5OYXZiYXInO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9hdXRoJztcbi8vIFNVQiBDT01QT05FTlRTXG5pbXBvcnQgQWRkUG9zdE1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9hZGRQb3N0TW9kYWwnO1xuXG5jb25zdCBNYWluTmF2YmFyID0gKCkgPT4ge1xuXHRjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cblx0Ly8gTU9EQUwgRk9SIENSRUFURSBQT1NUXG5cdGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvLyBGVU5DVElPTiBGT1IgVVNFUiBMT0dPVVRcblx0Y29uc3QgbG9nb3V0VXNlciA9ICgpID0+IHtcblx0XHRjb250ZXh0LmFjdGlvbnMudXBkYXRlU3RhdGUobnVsbCk7XG5cdFx0aGlzdG9yeS5wdXNoKCcuL2hvbWUnKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXZiYXInPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbG9naW4tbmF2YmFyLXdyYXBwZXInPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsZWZ0Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduYXZiYXItbG9nbyc+XG5cdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdHNyYz0nL3B1YmxpYy9pbWFnZXMvR3JvdXAuc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdGFsdD0nbG9nbydcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MTAwfVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MTAwfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8aDE+SW5zcG9jcmVhdGU8L2gxPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdtYWluLWxpbmtzJz5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hY3Rpdml0eSc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5ob21lPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0QWN0aXZpdHlcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvaW1hZ2VzJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPmNvbGxlY3Rpb25zPC9zcGFuPkltYWdlc1xuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9ibG9nJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnJzc19mZWVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0QmxvZ1xuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JpZ2h0Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1RyeSBXb21lbiBFbXBvd2VybWVudCcgLz5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz0nL3B1YmxpYy9pbWFnZXMvU2hhcGUuc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PSdzZWFyY2hJY29uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezEwMH1cblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MTAwfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSd1c2VyLXNlY2l0b24nPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9wdWJsaWMvaW1hZ2VzL2dhbi5zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J25vdGlmaWNhdGlvbidcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxMDB9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezEwMH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzZXRTaG93fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9wdWJsaWMvaW1hZ2VzL2ljb24tNS5zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0ndXNlcidcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezEwMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxMDB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0QWRkIFBvc3Rcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PERyb3Bkb3duPlxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bi5Ub2dnbGUgY2xhc3NOYW1lPSd1c2VyLXNlbGVjdCcgaWQ9J2Ryb3Bkb3duLWJhc2ljJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd1c2VySWNvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9wdWJsaWMvaW1hZ2VzL092YWwgQ29weS5zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PSdNb3JlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxMDB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxMDB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvRHJvcGRvd24uVG9nZ2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bi5NZW51PlxuXHRcdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duLkl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBocmVmPXtgL3VzZXJQcm9maWxlLyR7Y29udGV4dC5zdGF0ZS51c2VybmFtZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQcm9maWxlXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duLkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGhyZWY9Jy91c2VyU2V0dGluZ3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTZXR0aW5nXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duLkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd24uSXRlbSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIG9uQ2xpY2s9e2xvZ291dFVzZXJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb2dvdXRcblx0XHRcdFx0XHRcdFx0XHRcdDwvRHJvcGRvd24uSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duLk1lbnU+XG5cdFx0XHRcdFx0XHRcdDwvRHJvcGRvd24+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7LyoqKioqKioqKioqIEFERCBQT1NUIE1PREFMICoqKioqKioqKiovfVxuXHRcdFx0PEFkZFBvc3RNb2RhbCBzaG93PXtzaG93fSBzZXRTaG93PXtzZXRTaG93fSAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmJhcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2xvZ2luTW9kYWwnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vLi4vLi4vYXhpb3MnO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250ZXh0L2F1dGgnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBMb2dpbk1vZGFsID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IGhhbmRsZUNsb3NlTG9naW4gPSAoKSA9PiBwcm9wcy5zZXRTaG93TG9naW4oZmFsc2UpO1xuXG5cdGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cblx0Ly8gIEZPUk0gVkFMSURBVElPTlxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcblx0XHRlbWFpbDogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHR9KTtcblx0Y29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcblx0XHRlbWFpbDogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHR9KTtcblx0Y29uc3QgW2xvZ2luU3RhdGUsIHNldExvZ2luU3RhdGVdID0gdXNlU3RhdGUoe1xuXHRcdGVtYWlsOiAnJyxcblx0XHRwYXNzd29yZDogJycsXG5cdH0pO1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcblx0XHRjb25zdCBuZXdTdGF0ZSA9IHsgLi4ubG9naW5TdGF0ZSB9O1xuXHRcdG5ld1N0YXRlW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHRzZXRMb2dpblN0YXRlKHtcblx0XHRcdC4uLm5ld1N0YXRlLFxuXHRcdH0pO1xuXG5cdFx0c2V0U3RhdGUoe1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG5cdFx0fSk7XG5cblx0XHRpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09ICdlbWFpbCcpIHtcblx0XHRcdGlmIChldmVudC50YXJnZXQudmFsdWUuaW5kZXhPZignQCcpID09PSAtMSkge1xuXHRcdFx0XHRzZXRFcnJvcnMoe1xuXHRcdFx0XHRcdC4uLmVycm9ycyxcblx0XHRcdFx0XHRlbWFpbDogJ0ludmFsaWQgRW1haWwgQWRkcmVzcycsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0RXJyb3JzKHtcblx0XHRcdFx0XHQuLi5lcnJvcnMsXG5cdFx0XHRcdFx0ZW1haWw6ICcnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSAncGFzc3dvcmQnKSB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDgpIHtcblx0XHRcdFx0c2V0RXJyb3JzKHtcblx0XHRcdFx0XHQuLi5lcnJvcnMsXG5cdFx0XHRcdFx0cGFzc3dvcmQ6ICdQbGVhc2UgRW50ZXIgQ29ycmVjdCBQYXNzd29yZCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0RXJyb3JzKHtcblx0XHRcdFx0XHQuLi5lcnJvcnMsXG5cdFx0XHRcdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGF4aW9zXG5cdFx0XHQucG9zdCgnL2F1dGgvbG9naW4nLCB7IC4uLmxvZ2luU3RhdGUgfSlcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRhdXRoQ29udGV4dC5hY3Rpb25zLnVwZGF0ZVN0YXRlKHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YS5wZW5kaW5nT3BlcmF0aW9ucy5pbmNsdWRlcygnY3JlYXRlUHJvZmlsZScpKSB7XG5cdFx0XHRcdFx0aGlzdG9yeS5wdXNoKCcvY3JlYXRlLXByb2ZpbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaXplPSdtZCdcblx0XHRcdFx0Y2xhc3NOYW1lPSdsb2dpbi1tb2RhbCdcblx0XHRcdFx0Y2VudGVyZWRcblx0XHRcdFx0c2hvdz17cHJvcHMuc2hvd0xvZ2lufVxuXHRcdFx0XHRvbkhpZGU9e2hhbmRsZUNsb3NlTG9naW59XG5cdFx0XHRcdGFuaW1hdGlvbj17dHJ1ZX1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdyZW1vdmUtbW9kYWwnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTG9naW59PlxuXHRcdFx0XHRcdFx0JnRpbWVzO1xuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1oZWFkaW5nJz5cblx0XHRcdFx0XHRcdFx0PGgxPkxvZ2luPC9oMT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xvZ2luLWJ0bnMnPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nZmItbG9naW4nPlxuXHRcdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9Jy9wdWJsaWMvSW1hZ2VzL0ZpbGwgMS5zdmcnIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRTaWduIFVwIFdpdGggRmFjZWJvb2tcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdnLWxvZ2luJz5cblx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPScvcHVibGljL0ltYWdlcy9Hcm91LnN2Zycgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFNpZ24gVXAgV2l0aCBHb29nbGVcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keSc+XG5cdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHRcdFx0PGgxPkxvZ2luIFdpdGggRW1haWw8L2gxPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1maWVsZCc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdlbWFpbCdcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbWFpbCdcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdHshIWVycm9ycy5lbWFpbCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5lbWFpbH08L3NtYWxsPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1maWVsZCc+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3Bhc3N3b3JkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPScqKioqKionXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHR7ISFlcnJvcnMucGFzc3dvcmQgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9zbWFsbD5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xvZ2luLWJ0bnMnPlxuXHRcdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9Jy9wdWJsaWMvSW1hZ2VzL0JpdG1hcC5zdmcnIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvb2tpZS5zZXQoXCJ0b2tlblwiLCBcIkFCQ0RcIiwgeyBleHBpcmVzOiAxIC8gMjQgfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZldGNoKCcvYXBpL2xvZ2luJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRva2VuOiAndG9rZW4nIH0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0Q29udGludWVcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsLWZvb3RlciBtLWZvb3Rlcic+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0Rm9yZ2V0IFBhc3N3b3JkPyA8c3Bhbj5SZXNldDwvc3Bhbj57JyAnfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsO1xuXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGlmIChhdXRoQ29udGV4dC5zdGF0ZSkge1xuLy8gICAgICAgICBwcm9wcy5zZXRTaG93TG9naW4oZmFsc2UpXG4vLyAgICAgfVxuLy8gfSwgW2F1dGhDb250ZXh0XSlcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3JlZ2lzdHJhdGlvbic7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi8uLi8uLi9heGlvcyc7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRleHQvYXV0aCc7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBSZWdpc3RyYXRpb25Nb2RhbCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCBoYW5kbGVDbG9zZUpvaW4gPSAoKSA9PiBwcm9wcy5zZXRTaG93Sm9pbihmYWxzZSk7XG5cdGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cdGNvbnN0IFt1c2VyVHlwZSwgc2V0VXNlclR5cGVdID0gdXNlU3RhdGUoJ1VzZXInKTtcblxuXHQvLyAgRk9STSBWQUxJREFUSU9OXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuXHRcdGZpcnN0TmFtZTogJycsXG5cdFx0bGFzdE5hbWU6ICcnLFxuXHRcdGVtYWlsOiAnJyxcblx0XHR1c2VybmFtZTogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdGNuYW1lOiAnJyxcblx0XHRiVHlwZTogJycsXG5cdFx0clR5cGU6ICcnLFxuXHR9KTtcblx0Y29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcblx0XHRmaXJzdE5hbWU6ICcnLFxuXHRcdGxhc3ROYW1lOiAnJyxcblx0XHRlbWFpbDogJycsXG5cdFx0dXNlcm5hbWU6ICcnLFxuXHRcdHBhc3N3b3JkOiAnJyxcblx0XHRjbmFtZTogJycsXG5cdFx0YlR5cGU6ICcnLFxuXHRcdHJUeXBlOiAnJyxcblx0fSk7XG5cblx0Y29uc3QgW3NpZ251cFN0YXRlLCBzZXRTaWdudXBTdGF0ZV0gPSB1c2VTdGF0ZSh7XG5cdFx0Zmlyc3ROYW1lOiAnJyxcblx0XHRsYXN0TmFtZTogJycsXG5cdFx0ZW1haWw6ICcnLFxuXHRcdHVzZXJuYW1lOiAnJyxcblx0XHRwYXNzd29yZDogJycsXG5cdFx0Y25hbWU6ICcnLFxuXHRcdGJUeXBlOiAnJyxcblx0XHRyVHlwZTogJycsXG5cdH0pO1xuXHRjb25zdCBoYW5kbGVDaGFuZ2VqID0gKGV2ZW50KSA9PiB7XG5cdFx0Y29uc3QgbmV3U3RhdGUgPSB7IC4uLnNpZ251cFN0YXRlIH07XG5cdFx0bmV3U3RhdGVbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHNldFNpZ251cFN0YXRlKHtcblx0XHRcdC4uLm5ld1N0YXRlLFxuXHRcdH0pO1xuXG5cdFx0c2V0U3RhdGUoe1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG5cdFx0fSk7XG5cblx0XHRpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09ICdmaXJzdE5hbWUnKSB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDEpIHtcblx0XHRcdFx0c2V0RXJyb3JzKHtcblx0XHRcdFx0XHQuLi5lcnJvcnMsXG5cdFx0XHRcdFx0Zmlyc3ROYW1lOiAnSW52YWxpZCBGaXJzdCBOYW1lJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRFcnJvcnMoe1xuXHRcdFx0XHRcdC4uLmVycm9ycyxcblx0XHRcdFx0XHRmaXJzdE5hbWU6ICcnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09ICdsYXN0TmFtZScpIHtcblx0XHRcdGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoIDwgMSkge1xuXHRcdFx0XHRzZXRFcnJvcnMoe1xuXHRcdFx0XHRcdC4uLmVycm9ycyxcblx0XHRcdFx0XHRsYXN0TmFtZTogJ0ludmFsaWQgTGFzdCBOYW1lJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRFcnJvcnMoe1xuXHRcdFx0XHRcdC4uLmVycm9ycyxcblx0XHRcdFx0XHRsYXN0TmFtZTogJycsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gJ2NuYW1lJykge1xuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPCAxKSB7XG5cdFx0XHRcdHNldEVycm9ycyh7XG5cdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdGNuYW1lOiAnSW52YWxpZCBDb21wYW55IE5hbWUnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldEVycm9ycyh7XG5cdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdGNuYW1lOiAnJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSAnZW1haWwnKSB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmluZGV4T2YoJ0AnKSA9PT0gLTEpIHtcblx0XHRcdFx0c2V0RXJyb3JzKHtcblx0XHRcdFx0XHQuLi5lcnJvcnMsXG5cdFx0XHRcdFx0ZW1haWw6ICdJbnZhbGlkIEVtYWlsIEFkZHJlc3MnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldEVycm9ycyh7XG5cdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gJ3Bhc3N3b3JkJykge1xuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPCA4KSB7XG5cdFx0XHRcdHNldEVycm9ycyh7XG5cdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdHBhc3N3b3JkOiAnUGxlYXNlIEVudGVyIENvcnJlY3QgUGFzc3dvcmQnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldEVycm9ycyh7XG5cdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdHBhc3N3b3JkOiAnJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBoYW5kbGVTdWJtaXRqID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YXhpb3Ncblx0XHRcdC5wb3N0KCcvYXV0aC9yZWdpc3RlcicsIHtcblx0XHRcdFx0Li4uc2lnbnVwU3RhdGUsXG5cdFx0XHRcdHVzZXJuYW1lOiBzaWdudXBTdGF0ZS5lbWFpbCxcblx0XHRcdFx0clR5cGU6IHVzZXJUeXBlLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRhdXRoQ29udGV4dC5hY3Rpb25zLnVwZGF0ZVN0YXRlKHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YS5wZW5kaW5nT3BlcmF0aW9ucy5pbmNsdWRlcygnY3JlYXRlUHJvZmlsZScpKSB7XG5cdFx0XHRcdFx0aGlzdG9yeS5wdXNoKCcvY3JlYXRlLXByb2ZpbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2l6ZT0nbGcnXG5cdFx0XHRcdGNsYXNzTmFtZT0nbW9kYWwgam9pbi1tb2RhbCdcblx0XHRcdFx0Y2VudGVyZWRcblx0XHRcdFx0c2hvdz17cHJvcHMuc2hvd0pvaW59XG5cdFx0XHRcdG9uSGlkZT17aGFuZGxlQ2xvc2VKb2lufVxuXHRcdFx0XHRhbmltYXRpb249e3RydWV9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250YWluZXInPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncmVtb3ZlLW1vZGFsJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUpvaW59PlxuXHRcdFx0XHRcdFx0JnRpbWVzO1xuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1oZWFkaW5nJz5cblx0XHRcdFx0XHRcdFx0PGgxPkpvaW4gT3VyIENvbW11bml0eTwvaDE+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1c2VyLXR5cGUnPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VXNlclR5cGUoJ1VzZXInKX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goeyBzZWxlY3RlZDogdXNlclR5cGUgPT09ICdVc2VyJyB9KX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnBlcnNvbl9waW48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0SW5kaXZpZHVhbFxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29tcGFueSdcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRVc2VyVHlwZSgnTWVudG9yJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KHsgc2VsZWN0ZWQ6IHVzZXJUeXBlID09PSAnTWVudG9yJyB9KX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPmZpbGVfY29weTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRDb21wYW55XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7dXNlclR5cGUgPT09ICdVc2VyJyAmJiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NvY2lhbC1sb2dpbi1idG5zJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdmYi1sb2dpbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz0nL3B1YmxpYy9JbWFnZXMvRmlsbCAxLnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBVcCBXaXRoIEZhY2Vib29rXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdnLWxvZ2luJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPScvcHVibGljL0ltYWdlcy9Hcm91LnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBVcCBXaXRoIEdvb2dsZVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdGp9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDE+U2lnbiBVcCB3aXRoIEVtYWlsPC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25hbWUtaW5wdXRzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1maWVsZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nbmFtZSc+Rmlyc3QgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nbmFtZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtcidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nZmlyc3ROYW1lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRmlyc3QgTmFtZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZWp9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyEhZXJyb3JzLmZpcnN0TmFtZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmZpcnN0TmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zbWFsbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZmllbGQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J25hbWUnPkxhc3QgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nbmFtZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nbGFzdE5hbWUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdMYXN0IE5hbWUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VqfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshIWVycm9ycy5sYXN0TmFtZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmxhc3ROYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NtYWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWZpZWxkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nZW1haWwnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW1haWwnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlan1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshIWVycm9ycy5lbWFpbCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5lbWFpbH08L3NtYWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1maWVsZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5wYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3Bhc3N3b3JkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9JyoqKioqKidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VqfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyEhZXJyb3JzLnBhc3N3b3JkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvc21hbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsb2dpbi1idG5zJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz0nL3B1YmxpYy9JbWFnZXMvQml0bWFwLnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXszMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MzB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+Q29udGludWU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsLWZvb3RlciBtLWZvb3Rlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9J2NoZWNrYm94JyAvPiBJIGFncmVlIHRveycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+VGVybXMgYW5kIENvbmRpdGlvbnM8L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0e3VzZXJUeXBlID09PSAnTWVudG9yJyAmJiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NvY2lhbC1sb2dpbi1idG5zJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdmYi1sb2dpbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz0nL3B1YmxpYy9JbWFnZXMvRmlsbCAxLnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBVcCBXaXRoIEZhY2Vib29rXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdnLWxvZ2luJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPScvcHVibGljL0ltYWdlcy9Hcm91LnN2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBVcCBXaXRoIEdvb2dsZVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHknPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdGp9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDE+U2lnbiBVcCB3aXRoIEVtYWlsPC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21lbnRvci1pbnB1dHMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWZpZWxkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdjb21wYW55Jz5Db21wYW55IE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J25hbWUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NuYW1lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50ZXIgWW91ciBDb21wYW55IE5hbWUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VqfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshIWVycm9ycy5jbmFtZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmNuYW1lfTwvc21hbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWZpZWxkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5CdXNpbmVzcyBUeXBlPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgbmFtZT0nQnVzc2luZXNzLVR5cGUnIGNsYXNzTmFtZT0nc2VsZWN0LXR5cGUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScnPkJ1c2luZXNzIENvYWNoL0NvbnN1bHRhbnQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQZXJzb25hbCBEZXZlbG9wbWVudCBDb2FjaC8gQ29uc3VsdGFudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRFbXBvd2VybWVudC9Nb3RpdmF0aW9uYWwgQnVzaW5lc3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9Jyc+TWFya2V0aW5nIEJ1c2luZXNzPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9Jyc+T3RoZXIgKFBsZWFzZSBzcGVjaWZ5KTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1maWVsZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdlbWFpbCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZWp9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ISFlcnJvcnMuZW1haWwgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZW1haWx9PC9zbWFsbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZmllbGQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ncGFzc3dvcmQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPScqKioqKionXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlan1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshIWVycm9ycy5wYXNzd29yZCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wYXNzd29yZH08L3NtYWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbG9naW4tYnRucyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9wdWJsaWMvSW1hZ2VzL0JpdG1hcC5zdmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MzB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezMwfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkNvbnRpbnVlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1mb290ZXIgbS1mb290ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPSdjaGVja2JveCcgLz4gSSBhZ3JlZSB0b3snICd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlRlcm1zIGFuZCBDb25kaXRpb25zPC9zcGFuPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uTW9kYWw7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9sb2dvdXROYXZiYXInO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG4vLyBTVUIgQ09NUE9ORU5UU1xuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luTW9kYWwnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbk1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb25Nb2RhbCc7XG5cbmNvbnN0IE1haW5OYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzaG93Sm9pbiwgc2V0U2hvd0pvaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLW5hdmJhcic+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLW5hdmJhci13cmFwcGVyJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWxvZ28nPlxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz0nL3B1YmxpYy9pbWFnZXMvR3JvdXAuc3ZnJyB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHQ8aDE+SW5zcG9jcmVhdGU8L2gxPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdUcnkgV29tZW4gRW1wb3dlcm1lbnQnIC8+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPScvcHVibGljL2ltYWdlcy9TaGFwZS5zdmcnIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduYXZiYXItYnRucyc+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3NldFNob3dMb2dpbn0gY2xhc3NOYW1lPSduYXZiYXItYnRuLTEnPlxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPScvcHVibGljL2ltYWdlcy9TaGFwZS0yLnN2Zycgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRMb2dpblxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3NldFNob3dKb2lufSBjbGFzc05hbWU9J25hdmJhci1idG4tMic+XG5cdFx0XHRcdFx0XHRcdEpvaW4gQ29tbXVuaXR5XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0ey8qIExPR0lOIE1PREFMICovfVxuXHRcdFx0PExvZ2luTW9kYWwgc2hvd0xvZ2luPXtzaG93TG9naW59IHNldFNob3dMb2dpbj17c2V0U2hvd0xvZ2lufSAvPlxuXG5cdFx0XHR7LyogSk9JTiBDT01NVU5JVFkgTU9EQUwgKi99XG5cdFx0XHQ8UmVnaXN0cmF0aW9uTW9kYWwgc2hvd0pvaW49e3Nob3dKb2lufSBzZXRTaG93Sm9pbj17c2V0U2hvd0pvaW59IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG5cdHN0YXRlOiBudWxsLFxuXHRhY3Rpb25zOiB7XG5cdFx0dXBkYXRlU3RhdGU6ICgpID0+IHt9LFxuXHR9LFxufSk7XG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29udGV4dFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0Y29uc3QgdXNlciA9IHByb3BzLnVzZXI7XG5cdFx0aWYgKHVzZXIpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHVzZXJPYmplY3QgPSBKU09OLnBhcnNlKHVzZXIpO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gdXNlck9iamVjdDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlU3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRpZiAoc3RhdGUpIHtcblx0XHRcdGNvbnN0IHVzZXIgPSBKU09OLnN0cmluZ2lmeShzdGF0ZSk7XG5cdFx0XHRjb29raWUuc2V0KCd1c2VyJywgdXNlciwgeyBleHBpcmVzOiA3IH0pO1xuXHRcdFx0aWYgKHN0YXRlLnRva2VuKSB7XG5cdFx0XHRcdGNvb2tpZS5zZXQoJ3VzZXInLCBzdGF0ZS50b2tlbik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvb2tpZS5yZW1vdmUoJ3VzZXInKTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH07XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBjb250ZXh0ID0ge1xuXHRcdFx0c3RhdGU6IHRoaXMuc3RhdGUsXG5cdFx0XHRhY3Rpb25zOiB7XG5cdFx0XHRcdHVwZGF0ZVN0YXRlOiB0aGlzLnVwZGF0ZVN0YXRlLFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcblx0Y29uc29sZS5sb2coJ0F1dGhDb250ZXh0UHJvdmlkZXIgPT4gZ2V0U2VydmVyU2lkZVByb3BzID0+ICcsIHJlcS5jb29raWVzKTtcblx0cmV0dXJuIHsgcHJvcHM6IHsgdXNlcjogcmVxLmNvb2tpZXMudXNlciB8fCAnJyB9IH07XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3NsaWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdGh1bmsnO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tICcuL3RodW5rJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRkYXRhOiBbXSxcblx0c2VsZWN0ZWQ6IFtdLFxuXHRsb2FkaW5nOiBmYWxzZSxcblx0ZXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgY2F0ZWdvcmllc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAnY2F0ZWdvcmllcycsXG5cdGluaXRpYWxTdGF0ZSxcblx0cmVkdWNlcnM6IHtcblx0XHRzZWxlY3RDYXRlZ29yaWVzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLnNlbGVjdGVkLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkKSkge1xuXHRcdFx0XHRzdGF0ZS5zZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkLmZpbHRlcigoaWQpID0+IGlkICE9PSBhY3Rpb24ucGF5bG9hZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdGF0ZS5zZWxlY3RlZC5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9LFxuXHRleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShnZXRDYXRlZ29yaWVzLnBlbmRpbmcsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShnZXRDYXRlZ29yaWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHBheWxvYWQ7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGdldENhdGVnb3JpZXMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQpIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuXHRcdFx0fVxuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdENhdGVnb3JpZXMgfSA9IGNhdGVnb3JpZXNTbGljZS5hY3Rpb25zO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3JpZXMgPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgY2F0ZWdvcmllcy9nZXRDYXRlZ29yaWVzL2AsXG5cdC8vIERlY2xhcmUgdGhlIHR5cGUgeW91ciBmdW5jdGlvbiBhcmd1bWVudCBoZXJlOlxuXHRhc3luYyAoZGF0YSwgdGh1bmtBcGkpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvY2F0ZWdvcmllcycsIHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlKGUucmVzcG9uc2UpO1xuXHRcdH1cblx0fVxuKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdGh1bmsnO1xuZXhwb3J0ICogZnJvbSAnLi9zbGljZSc7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHtcblx0Y3JlYXRlQ29tbWVudFRodW5rLFxuXHRnZXRDb21tZW50VGh1bmssXG5cdHJlcGx5Q29tbWVudEFjdGlvbixcblx0bGlrZUNvbW1lbnRBY3Rpb24sXG5cdGRpc2xpa2VDb21tZW50QWN0aW9uLFxuXHRkZWxldGVDb21tZW50QWN0aW9uLFxufSBmcm9tICcuL3RodW5rJztcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0ZGF0YTogW10sXG5cdGxvYWRpbmc6IGZhbHNlLFxuXHRlcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb21tZW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdjb21tZW50cycsXG5cdGluaXRpYWxTdGF0ZSxcblx0cmVkdWNlcnM6IHt9LFxuXHRleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVDb21tZW50VGh1bmsucGVuZGluZywgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IHRydWU7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGNyZWF0ZUNvbW1lbnRUaHVuay5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdC8vIHN0YXRlLmRhdGEgPSBwYXlsb2FkO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShjcmVhdGVDb21tZW50VGh1bmsucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQpIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuXHRcdFx0fVxuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXG5cdFx0YnVpbGRlci5hZGRDYXNlKGdldENvbW1lbnRUaHVuay5wZW5kaW5nLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gW107XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXRlLmVycm9yID0gbnVsbDtcblx0XHR9KTtcblx0XHRidWlsZGVyLmFkZENhc2UoZ2V0Q29tbWVudFRodW5rLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHBheWxvYWQ7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGdldENvbW1lbnRUaHVuay5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdGlmIChhY3Rpb24ucGF5bG9hZCkge1xuXHRcdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG5cdFx0XHR9XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0fSk7XG5cblx0XHRidWlsZGVyLmFkZENhc2UocmVwbHlDb21tZW50QWN0aW9uLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHN0YXRlLmRhdGEubWFwKChwb3N0KSA9PiB7XG5cdFx0XHRcdGlmIChwb3N0LmlkID09PSBwYXlsb2FkLmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBheWxvYWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBvc3Q7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXG5cdFx0YnVpbGRlci5hZGRDYXNlKGxpa2VDb21tZW50QWN0aW9uLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHN0YXRlLmRhdGEubWFwKChjb21tZW50KSA9PiB7XG5cdFx0XHRcdGlmIChjb21tZW50LmlkID09PSBwYXlsb2FkLmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBheWxvYWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXG5cdFx0YnVpbGRlci5hZGRDYXNlKGRpc2xpa2VDb21tZW50QWN0aW9uLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHN0YXRlLmRhdGEubWFwKChwb3N0KSA9PiB7XG5cdFx0XHRcdGlmIChwb3N0LmlkID09PSBwYXlsb2FkLmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBheWxvYWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBvc3Q7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXG5cdFx0YnVpbGRlci5hZGRDYXNlKGRlbGV0ZUNvbW1lbnRBY3Rpb24uZnVsZmlsbGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gc3RhdGUuZGF0YS5tYXAoKHBvc3QpID0+IHtcblx0XHRcdFx0aWYgKHBvc3QuaWQgPT09IHBheWxvYWQuaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcGF5bG9hZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcG9zdDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdH0sXG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9heGlvcy9heGlvcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb21tZW50VGh1bmsgPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgY29tbWVudHMvY3JlYXRlQ29tbWVudGAsXG5cdC8vIERlY2xhcmUgdGhlIHR5cGUgeW91ciBmdW5jdGlvbiBhcmd1bWVudCBoZXJlOlxuXHRhc3luYyAoZGF0YSwgdGh1bmtBcGkpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2NvbW1lbnRzL2NyZWF0ZScsIGRhdGEsIHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnJlc3BvbnNlKTtcblx0XHRcdHJldHVybiB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWUoZS5yZXNwb25zZSk7XG5cdFx0fVxuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudFRodW5rID0gY3JlYXRlQXN5bmNUaHVuayhcblx0YGNvbW1lbnRzL3Bvc3RJZC9gLFxuXHQvLyBEZWNsYXJlIHRoZSB0eXBlIHlvdXIgZnVuY3Rpb24gYXJndW1lbnQgaGVyZTpcblx0YXN5bmMgKHBvc3RJZCwgdGh1bmtBcGkpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHR1cmw6ICcvY29tbWVudHMvYnlQb3N0SWQnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0cG9zdElkOiBwb3N0SWQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbixcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coZS5yZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlKGUucmVzcG9uc2UpO1xuXHRcdH1cblx0fVxuKTtcblxuZXhwb3J0IGNvbnN0IHJlcGx5Q29tbWVudEFjdGlvbiA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdGBjb21tZW50cy9yZXBseUNvbW1lbnRgLFxuXHQvLyBEZWNsYXJlIHRoZSB0eXBlIHlvdXIgZnVuY3Rpb24gYXJndW1lbnQgaGVyZTpcblx0YXN5bmMgKGRhdGEsIHRodW5rQXBpKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jb21tZW50cy9yZXBseScsIGRhdGEsIHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnJlc3BvbnNlKTtcblx0XHRcdHJldHVybiB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWUoZS5yZXNwb25zZSk7XG5cdFx0fVxuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgbGlrZUNvbW1lbnRBY3Rpb24gPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgY29tbWVudHMvbGlrZUNvbW1lbnQvYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChwb3N0SWQsIHRodW5rQXBpKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG5cdFx0XHRcdCcvY29tbWVudHMvbGlrZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb21tZW50SWQ6IHBvc3RJZCxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnJlc3BvbnNlKTtcblx0XHRcdHJldHVybiB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWUoZS5yZXNwb25zZSk7XG5cdFx0fVxuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZGlzbGlrZUNvbW1lbnRBY3Rpb24gPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgY29tbWVudHMvZGlzbGlrZUNvbW1lbnQvYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChwb3N0SWQsIHRodW5rQXBpKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuXHRcdFx0XHRtZXRob2Q6ICdkZWxldGUnLFxuXHRcdFx0XHR1cmw6ICcvY29tbWVudHMvZGlzbGlrZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRjb21tZW50SWQ6IHBvc3RJZCxcblx0XHRcdFx0fSxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnJlc3BvbnNlKTtcblx0XHRcdHJldHVybiB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWUoZS5yZXNwb25zZSk7XG5cdFx0fVxuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29tbWVudEFjdGlvbiA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdGBjb21tZW50cy9kZWxldGVDb21tZW50L2AsXG5cdC8vIERlY2xhcmUgdGhlIHR5cGUgeW91ciBmdW5jdGlvbiBhcmd1bWVudCBoZXJlOlxuXHRhc3luYyAocG9zdElkLCB0aHVua0FwaSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcblx0XHRcdFx0bWV0aG9kOiAnZGVsZXRlJyxcblx0XHRcdFx0dXJsOiAnL2NvbW1lbnRzJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHBvc3RJZDogcG9zdElkLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUucmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZShlLnJlc3BvbnNlKTtcblx0XHR9XG5cdH1cbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgdXNlclRvQ2FtcGFueVRodW5rIH0gZnJvbSAnLi90aHVuayc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0ZGF0YTogbnVsbCxcblx0bG9hZGluZzogZmFsc2UsXG5cdGVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRBY2NvdW50U2xpY2UgPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdjb252ZXJ0QWNjb3VudCcsXG5cdGluaXRpYWxTdGF0ZSxcblx0cmVkdWNlcnM6IHt9LFxuXHRleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZSh1c2VyVG9DYW1wYW55VGh1bmsucGVuZGluZywgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IG51bGw7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXRlLmVycm9yID0gbnVsbDtcblx0XHR9KTtcblx0XHRidWlsZGVyLmFkZENhc2UodXNlclRvQ2FtcGFueVRodW5rLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHBheWxvYWQ7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKHVzZXJUb0NhbXBhbnlUaHVuay5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdGlmIChhY3Rpb24ucGF5bG9hZCkge1xuXHRcdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG5cdFx0XHR9XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0fSk7XG5cdH0sXG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9heGlvcy9heGlvcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VyVG9DYW1wYW55VGh1bmsgPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgY29udmVydEFjY291bnQvdXNlclRvQ2FtcGFueWAsXG5cdC8vIERlY2xhcmUgdGhlIHR5cGUgeW91ciBmdW5jdGlvbiBhcmd1bWVudCBoZXJlOlxuXHRhc3luYyAoZGF0YSwgdGh1bmtBcGkpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL3VzZXJzL3RvQ29tcGFueScsIGRhdGEsIHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlKGUucmVzcG9uc2UpO1xuXHRcdH1cblx0fVxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBmb2xsb3dUaHVuaywgdW5Gb2xsb3dUaHVuayB9IGZyb20gJy4vdGh1bmsnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdGRhdGE6IG51bGwsXG5cdGxvYWRpbmc6IGZhbHNlLFxuXHRlcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBmb2xsb3dVbkZvbGxvd1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAncG9zdCcsXG5cdGluaXRpYWxTdGF0ZSxcblx0cmVkdWNlcnM6IHt9LFxuXHRleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShmb2xsb3dUaHVuay5wZW5kaW5nLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gbnVsbDtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShmb2xsb3dUaHVuay5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLmRhdGEgPSBwYXlsb2FkO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShmb2xsb3dUaHVuay5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdGlmIChhY3Rpb24ucGF5bG9hZCkge1xuXHRcdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG5cdFx0XHR9XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0fSk7XG5cblx0XHRidWlsZGVyLmFkZENhc2UodW5Gb2xsb3dUaHVuay5wZW5kaW5nLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gbnVsbDtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZSh1bkZvbGxvd1RodW5rLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHBheWxvYWQ7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKHVuRm9sbG93VGh1bmsucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQpIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuXHRcdFx0fVxuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9LFxufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vYXhpb3MvYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgZm9sbG93VGh1bmsgPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgZm9sbG93YCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChkYXRhLCB0aHVua0FwaSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuXHRcdFx0XHQnL3VzZXJzL2ZvbGxvdycsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VySWQ6IGRhdGEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coZS5yZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlKGUucmVzcG9uc2UpO1xuXHRcdH1cblx0fVxuKTtcblxuZXhwb3J0IGNvbnN0IHVuRm9sbG93VGh1bmsgPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgdW5mb2xsb3dgLFxuXHQvLyBEZWNsYXJlIHRoZSB0eXBlIHlvdXIgZnVuY3Rpb24gYXJndW1lbnQgaGVyZTpcblx0YXN5bmMgKGRhdGEsIHRodW5rQXBpKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcblx0XHRcdFx0Jy91c2Vycy91bmZvbGxvdycsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VySWQ6IGRhdGEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coZS5yZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlKGUucmVzcG9uc2UpO1xuXHRcdH1cblx0fVxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBnZXRTaW5nbGVQb3N0IH0gZnJvbSAnLi90aHVuayc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0ZGF0YTogbnVsbCxcblx0bG9hZGluZzogZmFsc2UsXG5cdGVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZVBvc3RTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ3Bvc3QnLFxuXHRpbml0aWFsU3RhdGUsXG5cdHJlZHVjZXJzOiB7fSxcblx0ZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcblx0XHRidWlsZGVyLmFkZENhc2UoZ2V0U2luZ2xlUG9zdC5wZW5kaW5nLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gbnVsbDtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShnZXRTaW5nbGVQb3N0LmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHBheWxvYWQ7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGdldFNpbmdsZVBvc3QucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQpIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuXHRcdFx0fVxuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9LFxufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vYXhpb3MvYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUG9zdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdGBwb3N0L2dldFNpbmdsZVBvc3QvYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChkYXRhLCB0aHVua0FwaSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuXHRcdFx0XHQnL3Bvc3RzL2dldFBvc3QnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9zdElkOiBkYXRhLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUucmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZShlLnJlc3BvbnNlKTtcblx0XHR9XG5cdH1cbik7XG4iLCJleHBvcnQgKiBmcm9tICcuL3Bvc3RzJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlclN1Z2dlc3Rpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vY2F0ZWdvcmllcyc7XG5leHBvcnQgKiBmcm9tICcuL2dldFNpbmdsZVBvc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyU2V0dGluZ3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jb252ZXJ0QWNjb3VudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvbGxvd1VuRm9sbG93JztcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge1xuXHRnZXRQb3N0TGlzdCxcblx0ZGlzbGlrZVBvc3RBY3Rpb24sXG5cdGxpa2VQb3N0QWN0aW9uLFxuXHRhZGRUb0NvbGxlY3Rpb25BY3Rpb24sXG59IGZyb20gJy4vdGh1bmsnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdGRhdGE6IFtdLFxuXHRzZWxlY3RlZDogW10sXG5cdGxvYWRpbmc6IGZhbHNlLFxuXHRlcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdwb3N0cycsXG5cdGluaXRpYWxTdGF0ZSxcblx0cmVkdWNlcnM6IHt9LFxuXHRleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShnZXRQb3N0TGlzdC5wZW5kaW5nLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gW107XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXRlLmVycm9yID0gbnVsbDtcblx0XHR9KTtcblx0XHRidWlsZGVyLmFkZENhc2UoZ2V0UG9zdExpc3QuZnVsZmlsbGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gcGF5bG9hZC5wb3N0cztcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdHN0YXRlLmVycm9yID0gbnVsbDtcblx0XHR9KTtcblx0XHRidWlsZGVyLmFkZENhc2UoZ2V0UG9zdExpc3QucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQpIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuXHRcdFx0fVxuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXG5cdFx0YnVpbGRlci5hZGRDYXNlKGxpa2VQb3N0QWN0aW9uLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHN0YXRlLmRhdGEubWFwKChwb3N0KSA9PiB7XG5cdFx0XHRcdGlmIChwb3N0LmlkID09PSBwYXlsb2FkLmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBheWxvYWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBvc3Q7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXG5cdFx0YnVpbGRlci5hZGRDYXNlKGRpc2xpa2VQb3N0QWN0aW9uLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHN0YXRlLmRhdGEubWFwKChwb3N0KSA9PiB7XG5cdFx0XHRcdGlmIChwb3N0LmlkID09PSBwYXlsb2FkLmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBheWxvYWQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBvc3Q7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShhZGRUb0NvbGxlY3Rpb25BY3Rpb24uZnVsZmlsbGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gc3RhdGUuZGF0YS5tYXAoKHBvc3QpID0+IHtcblx0XHRcdFx0aWYgKHBvc3QuaWQgPT09IHBheWxvYWQuaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcGF5bG9hZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gcG9zdDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdH0sXG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9heGlvcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0TGlzdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdGBwb3N0cy9nZXRQb3N0TGlzdC9gLFxuXHQvLyBEZWNsYXJlIHRoZSB0eXBlIHlvdXIgZnVuY3Rpb24gYXJndW1lbnQgaGVyZTpcblx0YXN5bmMgKGRhdGEsIHRodW5rQXBpKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wb3N0cy9hY3Rpdml0aWVzJywgJycsIHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnJlc3BvbnNlKTtcblx0XHRcdHJldHVybiB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWUoZS5yZXNwb25zZSk7XG5cdFx0fVxuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgbGlrZVBvc3RBY3Rpb24gPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgcG9zdHMvbGlrZVBvc3QvYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChwb3N0SWQsIHRodW5rQXBpKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG5cdFx0XHRcdCcvcG9zdHMvbGlrZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwb3N0SWQ6IHBvc3RJZCxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnJlc3BvbnNlKTtcblx0XHRcdHJldHVybiB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWUoZS5yZXNwb25zZSk7XG5cdFx0fVxuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgZGlzbGlrZVBvc3RBY3Rpb24gPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgcG9zdHMvZGlzbGlrZVBvc3QvYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChwb3N0SWQsIHRodW5rQXBpKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuXHRcdFx0XHRtZXRob2Q6ICdkZWxldGUnLFxuXHRcdFx0XHR1cmw6ICcvcG9zdHMvZGlzbGlrZScsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRwb3N0SWQ6IHBvc3RJZCxcblx0XHRcdFx0fSxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlLnJlc3BvbnNlKTtcblx0XHRcdHJldHVybiB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWUoZS5yZXNwb25zZSk7XG5cdFx0fVxuXHR9XG4pO1xuXG5leHBvcnQgY29uc3QgYWRkVG9Db2xsZWN0aW9uQWN0aW9uID0gY3JlYXRlQXN5bmNUaHVuayhcblx0YHBvc3RzL2FkZHRvY29sbGVjdGlvbi9gLFxuXHQvLyBEZWNsYXJlIHRoZSB0eXBlIHlvdXIgZnVuY3Rpb24gYXJndW1lbnQgaGVyZTpcblx0YXN5bmMgKHBvc3RJZCwgdGh1bmtBcGkpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG5cdFx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0XHR1cmw6ICcvcG9zdHMvYWRkVG9Db2xsZWN0aW9uJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHBvc3RJZDogcG9zdElkLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUucmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZShlLnJlc3BvbnNlKTtcblx0XHR9XG5cdH1cbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgZ2V0VXNlckRhdGEgfSBmcm9tICcuL3RodW5rJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRkYXRhOiBudWxsLFxuXHRsb2FkaW5nOiBmYWxzZSxcblx0ZXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgdXNlckRhdGFTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ3VzZXJEYXRhJyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge30sXG5cdGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGdldFVzZXJEYXRhLnBlbmRpbmcsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLmRhdGEgPSBudWxsO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IHRydWU7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGdldFVzZXJEYXRhLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHBheWxvYWQ7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGdldFVzZXJEYXRhLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbi5wYXlsb2FkKSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcblx0XHRcdH1cblx0XHRcdHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcblx0XHR9KTtcblx0fSxcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2F4aW9zL2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJEYXRhID0gY3JlYXRlQXN5bmNUaHVuayhcblx0YHVzZXJEYXRhYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jICh1c2VybmFtZSwgdGh1bmtBcGkpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuXHRcdFx0XHR1cmw6IGAvdXNlcnMvJHt1c2VybmFtZX1gLFxuXHRcdFx0XHRtZXRob2Q6ICdnZXQnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUucmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZShlLnJlc3BvbnNlKTtcblx0XHR9XG5cdH1cbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHtcblx0dXNlclNldHRpbmdzVGh1bmssXG5cdGNoYW5nZVNldHRpbmdzVGh1bmssXG5cdGRlbEFjY291bnRUaHVuayxcbn0gZnJvbSAnLi90aHVuayc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0ZGF0YTogbnVsbCxcblx0bG9hZGluZzogZmFsc2UsXG5cdGVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTZXR0aW5nc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAndXNlclNldHRpbmdzJyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge30sXG5cdGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG5cdFx0YnVpbGRlci5hZGRDYXNlKHVzZXJTZXR0aW5nc1RodW5rLnBlbmRpbmcsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLmRhdGEgPSBudWxsO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IHRydWU7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKHVzZXJTZXR0aW5nc1RodW5rLmZ1bGZpbGxlZCwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUuZGF0YSA9IHBheWxvYWQ7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKHVzZXJTZXR0aW5nc1RodW5rLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbi5wYXlsb2FkKSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcblx0XHRcdH1cblx0XHRcdHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcblx0XHR9KTtcblxuXHRcdGJ1aWxkZXIuYWRkQ2FzZShjaGFuZ2VTZXR0aW5nc1RodW5rLnBlbmRpbmcsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLmRhdGEgPSBudWxsO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IHRydWU7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGNoYW5nZVNldHRpbmdzVGh1bmsuZnVsZmlsbGVkLCAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG5cdFx0XHRzdGF0ZS5kYXRhID0gcGF5bG9hZDtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdHN0YXRlLmVycm9yID0gbnVsbDtcblx0XHR9KTtcblx0XHRidWlsZGVyLmFkZENhc2UoY2hhbmdlU2V0dGluZ3NUaHVuay5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdGlmIChhY3Rpb24ucGF5bG9hZCkge1xuXHRcdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG5cdFx0XHR9XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG5cdFx0fSk7XG5cblx0XHRidWlsZGVyLmFkZENhc2UoZGVsQWNjb3VudFRodW5rLnBlbmRpbmcsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLmRhdGEgPSBudWxsO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IHRydWU7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGRlbEFjY291bnRUaHVuay5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLmRhdGEgPSBwYXlsb2FkO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShkZWxBY2NvdW50VGh1bmsucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQpIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuXHRcdFx0fVxuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9LFxufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vYXhpb3MvYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgdXNlclNldHRpbmdzVGh1bmsgPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgdXNlclNldHRpbmdzYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChkYXRhLCB0aHVua0FwaSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG5cdFx0XHRcdHVybDogJy91c2Vycy92YWxpZGF0ZVVzZXJuYW1lJyxcblx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbixcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coZS5yZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gdGh1bmtBcGkucmVqZWN0V2l0aFZhbHVlKGUucmVzcG9uc2UpO1xuXHRcdH1cblx0fVxuKTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVNldHRpbmdzVGh1bmsgPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgdXNlclNldHRpbmdzL2NoYW5nZVNldHRpbmdzYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChkYXRhLCB0aHVua0FwaSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG5cdFx0XHRcdHVybDogJy91c2Vycy9wcm9maWxlJyxcblx0XHRcdFx0bWV0aG9kOiAncGF0Y2gnLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUucmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZShlLnJlc3BvbnNlKTtcblx0XHR9XG5cdH1cbik7XG5cbmV4cG9ydCBjb25zdCBkZWxBY2NvdW50VGh1bmsgPSBjcmVhdGVBc3luY1RodW5rKFxuXHRgdXNlclNldHRpbmdzL2RlbEFjY291bnRgLFxuXHQvLyBEZWNsYXJlIHRoZSB0eXBlIHlvdXIgZnVuY3Rpb24gYXJndW1lbnQgaGVyZTpcblx0YXN5bmMgKGRhdGEsIHRodW5rQXBpKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcblx0XHRcdFx0dXJsOiAnL3VzZXJzL3Byb2ZpbGUnLFxuXHRcdFx0XHRtZXRob2Q6ICdkZWxldGUnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUucmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHRodW5rQXBpLnJlamVjdFdpdGhWYWx1ZShlLnJlc3BvbnNlKTtcblx0XHR9XG5cdH1cbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgZ2V0VXNlclN1Z2dlc3Rpb25zIH0gZnJvbSAnLi90aHVuayc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0ZGF0YTogW10sXG5cdGxvYWRpbmc6IGZhbHNlLFxuXHRlcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyU3VnZ2VzdGlvbnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ3VzZXJTdWdnZXN0aW9ucycsXG5cdGluaXRpYWxTdGF0ZSxcblx0cmVkdWNlcnM6IHt9LFxuXHRleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShnZXRVc2VyU3VnZ2VzdGlvbnMucGVuZGluZywgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IHRydWU7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IG51bGw7XG5cdFx0fSk7XG5cdFx0YnVpbGRlci5hZGRDYXNlKGdldFVzZXJTdWdnZXN0aW9ucy5mdWxmaWxsZWQsIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHN0YXRlLmRhdGEgPSBwYXlsb2FkO1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0c3RhdGUuZXJyb3IgPSBudWxsO1xuXHRcdH0pO1xuXHRcdGJ1aWxkZXIuYWRkQ2FzZShnZXRVc2VyU3VnZ2VzdGlvbnMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uLnBheWxvYWQpIHtcblx0XHRcdFx0c3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yO1xuXHRcdFx0fVxuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9LFxufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlclN1Z2dlc3Rpb25zID0gY3JlYXRlQXN5bmNUaHVuayhcblx0YHVzZXJTdWdnZXN0aW9ucy9nZXRVc2VyU3VnZ2VzdGlvbnMvYCxcblx0Ly8gRGVjbGFyZSB0aGUgdHlwZSB5b3VyIGZ1bmN0aW9uIGFyZ3VtZW50IGhlcmU6XG5cdGFzeW5jIChkYXRhLCB0aHVua0FwaSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvdXNlcnMvc3VnZ2VzdGlvbnMnLCAnJywge1xuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiB0aHVua0FwaS5yZWplY3RXaXRoVmFsdWUoZS5yZXNwb25zZSk7XG5cdFx0fVxuXHR9XG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==