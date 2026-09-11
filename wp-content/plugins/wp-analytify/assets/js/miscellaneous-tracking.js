var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
jQuery(document).ready(function ($) {
  // Track 404 page errors.
  if (
    "on" === miscellaneous_tracking_options.track_404_page.should_track &&
    miscellaneous_tracking_options.track_404_page.is_404
  ) {
    if ("gtag" === miscellaneous_tracking_options.tracking_mode) {
      if ("ga4" === miscellaneous_tracking_options.ga_mode) {
        if (typeof gtag !== "undefined") {
          gtag("event", "404_error", {
            wpa_category: "404 Error",
            wpa_label:
              miscellaneous_tracking_options.track_404_page.current_url,
          });
        }
      } else {
        if (typeof gtag !== "undefined") {
          gtag("event", "Page Not Found", {
            event_category: "404 Error",
            event_label:
              miscellaneous_tracking_options.track_404_page.current_url,
          });
        }
      }
    } else {
      if (typeof ga !== "undefined") {
        ga(
          "send",
          "event",
          "404 Error",
          "Page Not Found",
          miscellaneous_tracking_options.track_404_page.current_url
        );
      }
    }
  }

  // track javascript errors.
  if ("on" === miscellaneous_tracking_options.track_js_error) {
        function trackJavaScriptError(e) {
          const errMsg = e.message;
          const errSrc = e.filename + ": " + e.lineno;
          gtag("event", "js_error", {
            wpa_category: "JavaScript Error",
            wpa_action: errMsg,
            wpa_label: errSrc,
            non_interaction: true,
          });
        }
        if (typeof gtag !== "undefined") {
          window.addEventListener("error", trackJavaScriptError, false);
        }
  }

  // Track ajax errors.
  if ("on" === miscellaneous_tracking_options.track_ajax_error) {
        if (typeof gtag !== "undefined") {
          jQuery(document).ajaxError(function (e, request, settings) {
            gtag("event", "ajax_error", {
              wpa_category: "Ajax Error",
              wpa_action: request.statusText,
              wpa_label: settings.url,
              non_interaction: true,
            });
          });
        }
  }
});

}

/*
     FILE ARCHIVED ON 05:28:06 Mar 04, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:14:51 Sep 11, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.495
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.066
  esindex: 0.006
  cdx.remote: 12.155
  LoadShardBlock: 200.314 (3)
  PetaboxLoader3.datanode: 205.158 (4)
  load_resource: 7.712
*/