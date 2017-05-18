;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M525.346816 748.234752 997.122048 276.458496 27.528192 276.458496Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quanzi_huanyihuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M296.671797 404.181804c-11.714272-11.714272-30.707345-11.714272-42.421617 0l-51.68266 51.682659c27.031596-142.80743 155.286544-251.163166 309.700738-251.163166 99.569776 0 191.327307 45.337642 250.558049 121.068297 10.206089 13.049418 29.058889 15.354184 42.108308 5.148095 13.049418-10.206089 15.354184-29.058889 5.148096-42.108308-70.528293-90.176652-179.667301-144.102645-297.814453-144.102644-191.066217 0-348.955477 140.060345-372.048187 321.332075l-52.669685-52.669685c-11.714272-11.714272-30.707345-11.714272-42.421616 0-11.714272 11.714272-11.714272 30.707345 0 42.421616l99.966019 99.96602c11.714272 11.714272 30.707345 11.714272 42.421617 0l109.154367-109.154366c11.715296-11.713248 11.715296-30.706321 0.001024-42.420593zM974.905723 572.506503l-99.96602-99.96602c-11.714272-11.714272-30.707345-11.714272-42.421617 0L723.363719 581.695874c-11.714272 11.714272-11.714272 30.707345 0 42.421617 11.714272 11.714272 30.707345 11.714272 42.421617 0l56.232806-56.232806c-26.929208 142.93132-155.244565 251.414018-309.749884 251.414018-89.526485 0-172.919897-36.592638-232.21412-99.688547-11.344649-12.072632-30.328507-12.66239-42.401139-1.316717-12.072632 11.344649-12.66239 30.328507-1.316717 42.401139 70.555938 75.079463 169.732542 118.597661 275.931976 118.597661 188.341658 0 344.443214-136.095861 370.975155-313.604812l49.240693 49.241717c11.714272 11.714272 30.707345 11.714272 42.421617 0 11.715296-11.715296 11.715296-30.707345 0-42.422641z"  ></path>' +
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