;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tubiao4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.344 919.68c-44.992 0-81.6-36.48-81.6-81.664 0-44.928 36.608-81.472 81.6-81.472s81.536 36.544 81.536 81.472C898.944 883.2 862.4 919.68 817.344 919.68zM817.344 794.112c-24.192 0-43.968 19.584-43.968 43.904 0 24.384 19.776 44.032 43.968 44.032 24.256 0 43.904-19.712 43.904-44.032C861.248 813.696 841.6 794.112 817.344 794.112z"  ></path>' +
    '' +
    '<path d="M449.28 919.68c-44.992 0-81.664-36.48-81.664-81.664 0-44.928 36.672-81.472 81.664-81.472 44.928 0 81.536 36.544 81.536 81.472C530.816 883.2 494.208 919.68 449.28 919.68zM449.28 794.112c-24.32 0-43.968 19.584-43.968 43.904 0 24.384 19.648 44.032 43.968 44.032 24.256 0 43.968-19.712 43.968-44.032C493.184 813.696 473.472 794.112 449.28 794.112z"  ></path>' +
    '' +
    '<path d="M892.992 732.544 310.784 732.544c-6.336 0-11.968-3.136-15.552-8.128-3.584-5.12-4.288-11.648-2.048-17.408l54.08-143.36L204.032 141.952 82.88 141.952C72.384 141.952 64 133.504 64 123.136S72.384 104.32 82.88 104.32l134.656 0c8.064 0 15.232 5.12 17.792 12.8l149.696 440.832c1.408 4.096 1.408 8.576-0.192 12.672l-46.976 124.352 555.136 0c10.304 0 18.752 8.32 18.752 18.752C911.744 724.032 903.296 732.544 892.992 732.544z"  ></path>' +
    '' +
    '<path d="M836.352 582.656l-469.12 0c-10.368 0-18.752-8.32-18.752-18.688 0-10.496 8.384-18.944 18.752-18.944l455.296 0 92.864-290.048L260.096 254.976c-10.56 0-18.88-8.384-18.88-18.816 0-10.368 8.32-18.816 18.88-18.816l681.024 0c6.08 0 11.776 2.816 15.168 7.68 3.648 4.928 4.544 11.136 2.88 16.896L854.4 569.6C851.84 577.536 844.544 582.656 836.352 582.656z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998977 959.752744c0 0-335.814302-374.240473-335.814302-559.692209 0-185.447642 150.362566-335.814302 335.814302-335.814302 185.455829 0 335.816349 150.367683 335.816349 335.814302C847.815325 585.512271 511.998977 959.752744 511.998977 959.752744zM511.998977 273.257547c-70.02689 0-126.805034 56.779168-126.805034 126.805034 0 70.02996 56.778144 126.807081 126.805034 126.807081 70.028936 0 126.806057-56.777121 126.806057-126.807081C638.805034 330.036715 582.027913 273.257547 511.998977 273.257547z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M874.496 363.52l-330.752 339.456c-12.288 12.288-29.184 10.24-41.472-2.56-12.288-12.288-13.824-31.232-1.536-43.52l329.728-338.432c12.288-12.288 31.744-12.288 43.52 0C886.784 330.752 886.784 351.232 874.496 363.52zM503.296 702.976 152.064 360.448c-12.288-12.288-10.24-29.184 2.56-41.472 12.288-12.288 31.232-13.824 43.52-1.536l338.432 329.728c12.288 12.288 22.016 41.472 9.728 53.248C534.016 712.704 516.096 715.264 503.296 702.976z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)