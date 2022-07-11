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
})({"pricing.js":[function(require,module,exports) {
//Navigation animation and responsive animation
var body = document.body;
var lastScroll = 0;
window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
}); //Navigation animation and responsive animation

var navSlide = function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");
  var navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    console.log("click");
    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 1, "s");
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide(); //Features

var buttonsContainer = document.querySelector(".features__buttons__container");
var featureButton = document.querySelectorAll(".feature__button");
var featureContent = document.querySelectorAll(".feature__content");
buttonsContainer.addEventListener("click", function (e) {
  var clicked = e.target.closest(".feature__button"); // Guard clause

  if (!clicked) return; // Remove active classes

  featureButton.forEach(function (btn) {
    return btn.classList.remove("button__active");
  });
  featureContent.forEach(function (cnt) {
    return cnt.classList.remove("feature__content__active");
  }); // Activate tab

  clicked.classList.add("button__active"); // Activate content area

  document.querySelector(".feature__content--".concat(clicked.dataset.tab)).classList.add("feature__content__active");
}); //Map

var map;

function initMap() {
  var capeT = {
    lat: -33.9249,
    lng: 18.4241
  };
  map = new google.maps.Map(document.getElementById("map"), {
    center: capeT,
    zoom: 8
  });
  var marker = new google.maps.Marker({
    position: capeT,
    map: map,
    title: "1000 smith street, Cape Town"
  });
}

window.initMap = initMap;
gsap.from(".pricing__header", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.5
});
gsap.from(".pricing__paragraph", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.6
});
gsap.from(".pricing__card--1", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.6
});
gsap.from(".pricing__card--2", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.7
});
gsap.from(".pricing__card--3", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.8
}); //Features animation

gsap.from(".features__header", {
  scrollTrigger: ".features__header",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3
});
gsap.from(".features__sub__header", {
  scrollTrigger: ".features__header",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.4
});
gsap.from(".features__container", {
  scrollTrigger: ".features__header",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.5
}); //What makes fibr so special

gsap.from(".special__header", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3
});
gsap.from(".special-1", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.4
});
gsap.from(".special-2", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.5
});
gsap.from(".special-3", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.6
});
gsap.from(".special-4", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.7
});
gsap.from(".special-5", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.8
});
gsap.from(".special-6", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.9
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50152" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","pricing.js"], null)
//# sourceMappingURL=/pricing.f72e9ae5.js.map