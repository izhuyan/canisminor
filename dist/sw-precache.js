/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["common.153b59c084dd4f263187.js","b796cfb0189d6fff1515656e31ed0891"],["common.7c7aa603.css","7c7aa603c6e6bb26059c42b5fab2ca3b"],["font/Futura.ttf","f116d71b7483bdcbfe979e87d9eb389f"],["font/FuturaBold.ttf","f7dd3b26982429ef8b25cbec23a9f7b6"],["img/exp-1.png","7c0ccda004b67706e9f4ebe4b6339045"],["img/exp-2.png","4350cc9f4d771256dac153f449b2388d"],["img/exp-3.png","263bba057cb4188ebca74bf69ce79f87"],["img/loader.gif","7170f0d9bc74b828703a76bac3ef98d0"],["img/logo.gif","fa0ed7847faef1fcec8f1b938bb8bec3"],["img/p_hj/hj_1.png","245602e98f313ba45524cbefab9dffc7"],["img/p_hj/hj_10.png","8c50b8a0f1e39403105af46f16b21a92"],["img/p_hj/hj_2.png","5ab8aa03fad8893e06e2245166cdaa42"],["img/p_hj/hj_3.png","c4f721cd3031e4fef3e906d106fec5b9"],["img/p_hj/hj_4.png","a7baa94b34380f8fa3d347b85e96638e"],["img/p_hj/hj_5.png","55ca96c371d58cd44fbdc50ea6b93114"],["img/p_hj/hj_6.png","ea25ce5ce0aaed1db57e765c92b90464"],["img/p_hj/hj_7.png","056ce8c83413a4551a40638839eb2705"],["img/p_hj/hj_8.png","a662ac00e810fac072d5fb7ca54690ac"],["img/p_hj/hj_9.png","de6640ed320c8fd3e618092f9c0cbc7c"],["img/p_iz/iz_1.png","4937ed4e8b331658cd2e051cd74904ac"],["img/p_iz/iz_10.png","c4e3e1c2345fd41038a899ff60b631b2"],["img/p_iz/iz_11.png","9cb7e4ee587105040f47534a42ed3bf1"],["img/p_iz/iz_12.png","6605838206c637d21c9a19decc2cdfcf"],["img/p_iz/iz_13.png","5e6ce397ec7af2c04722ffd5e946dcbb"],["img/p_iz/iz_14.png","66dd4a19b014e19dab3381cc21526a04"],["img/p_iz/iz_15.png","97a92c11f1edc611fade90f9b753dfc7"],["img/p_iz/iz_16.png","38282cc922dbefe637b1a9ef7c2c12b8"],["img/p_iz/iz_17.png","5dda2aa1fb0aff0d57da35dc6ddbc1e9"],["img/p_iz/iz_18.png","3047cd06277d77b71c531e1fe4fb2435"],["img/p_iz/iz_19.png","adae1876a8f7aedd57a2012e3ef69f02"],["img/p_iz/iz_2.png","2bcc6964162d4db28273bdd00bae438a"],["img/p_iz/iz_20.png","5393e1c785ae22aa47b97872d4228e06"],["img/p_iz/iz_21.png","01c03eb2ba71cb61d364886514fa5abe"],["img/p_iz/iz_22.png","2cc1d2f6fbbe1ad42aed97319430fbbd"],["img/p_iz/iz_23.png","d39f9067b6bb14eea464d5617bfe1a85"],["img/p_iz/iz_24.png","d93d448d118af44f28d8dca1cac7a514"],["img/p_iz/iz_25.png","44e40af0b2437e05254d97182345e594"],["img/p_iz/iz_26.png","347bdbad42e2a3ccebefbd020eb74663"],["img/p_iz/iz_27.png","211400b39cc9b17f77b400048277fa7a"],["img/p_iz/iz_28.png","b7c598f6b33773510cef11dc7ddce927"],["img/p_iz/iz_29.png","d23e28d807f44681c53feca0c82924e3"],["img/p_iz/iz_3.png","4f20cef5c2de3af74b64b88d2b2bda86"],["img/p_iz/iz_30.png","fcbea552b67530e1732cf9c253d6dc5a"],["img/p_iz/iz_31.png","21940d0e1206292c00b24d861ea2e1a4"],["img/p_iz/iz_32.png","bb799b46e5cd86099846674aeb3ce4a6"],["img/p_iz/iz_33.png","7c10c55b6936c9a1b6106bf257fad567"],["img/p_iz/iz_34.png","50cb146e3cd43b4310bdd61a9f9fb872"],["img/p_iz/iz_35.png","17a135fb7ce04de78180f5f4307ef3fa"],["img/p_iz/iz_36.png","40b4ede33d13b18ca0bbe3d6852a13e0"],["img/p_iz/iz_37.png","c2d6177b042a44e886d6b5aed911aa48"],["img/p_iz/iz_38.png","2d7c6ff3755b98ada9430fb222420efd"],["img/p_iz/iz_39.png","6e9995a818452cc36d7e9945c75bdb19"],["img/p_iz/iz_4.png","10d8f899c283972748bd75a5c2c6c553"],["img/p_iz/iz_40.png","c7e4465507468bf3b632492d6cb5b4f9"],["img/p_iz/iz_41.png","7da9a1b3772e2a22620b3fd2c463313c"],["img/p_iz/iz_42.png","89f7a27c23b20ff0a5343821ce63928b"],["img/p_iz/iz_43.png","a501b6ea1e5a4139a67f10ff2a6a32d3"],["img/p_iz/iz_44.png","6218f8907d711cbb1ac82a5e1235b48f"],["img/p_iz/iz_45.png","d1e07ad1d01e8381cf9cc09da56cf938"],["img/p_iz/iz_46.png","1b1e266fda0b894208b9247e52315a06"],["img/p_iz/iz_47.png","b2c2563f4811186abedf781bd42a2eb3"],["img/p_iz/iz_48.png","379dac05bf11c242f25619ee896130c4"],["img/p_iz/iz_49.png","61f1d67e5b6d65b27f6dd2a2e243838f"],["img/p_iz/iz_5.png","80b690ffad3015716ffb65f39e3a11b5"],["img/p_iz/iz_50.png","134b93a6fe847753697914c63b50788a"],["img/p_iz/iz_51.png","cf34ce314487ca778aa47023c1244d8e"],["img/p_iz/iz_52.png","ff020470489e7e52b9c96a948f570681"],["img/p_iz/iz_53.png","ae1e4144fb299512e2214c30c64d2553"],["img/p_iz/iz_6.png","3aa4f80ddc371f1022bd99056952ae9c"],["img/p_iz/iz_7.png","75913670df399422a73cc0fe83689fb8"],["img/p_iz/iz_8.png","6d36835f85e8ae34a4587eaa56cd57dd"],["img/p_iz/iz_9.png","8bd0d1eb6340ac0d5063ffa4246c9702"],["img/p_xm/xm_1.png","3960358e5f27dc4716b74c7f71e3e129"],["img/p_xm/xm_10.png","30b7cac0ff6daffbfc0ddfc2701c0f6b"],["img/p_xm/xm_2.png","b5321b0b02276f0230489c5271c18d2c"],["img/p_xm/xm_3.png","cc9bf063ea84eac0ca1ec7058de63e5c"],["img/p_xm/xm_4.png","fd0b91723dc8168e4504bd74c0631500"],["img/p_xm/xm_5.png","1c6256de5cb54210f8ca6de0b761364b"],["img/p_xm/xm_6.png","79d9765e0c60d5fffbb11aa29ce68558"],["img/p_xm/xm_7.png","033236cdb59f1a03b18811efb0f9273c"],["img/p_xm/xm_8.png","21b8ba4b6c24cd8ef07db07dcf44a899"],["img/p_xm/xm_9.png","0e5b7e16c1f7b119c76f3f5ec6e51bed"],["img/p_zz/zz_1.png","a07ce3752faacfdfe459f19ae3d380fd"],["img/p_zz/zz_10.png","3ae954a3bf1f0c1fe41613f763e87c60"],["img/p_zz/zz_11.png","51f171c9881f80faff91356a159439fe"],["img/p_zz/zz_2.png","17bea0c96ba5fdb702b33d778efc89cb"],["img/p_zz/zz_3.png","fca643b1c509e23d1bbddce8ad19b058"],["img/p_zz/zz_4.png","5d25b688cde1561cffc9a2c1ae746220"],["img/p_zz/zz_5.png","9498dc448e09b943dd4a215ccb5ee032"],["img/p_zz/zz_6.png","78d640760c0fd7fcc7c9686726add91b"],["img/p_zz/zz_7.png","8d671995ba4e7b5fcf86fa44960a65ad"],["img/p_zz/zz_8.png","8f20802ba5f0803e8bc7b575253477ac"],["img/p_zz/zz_9.png","717c82b299103a66f31daf94231e76a9"],["img/por-1.png","6dff3da514c59bf468e50517539f3737"],["img/pro-1.png","917a4ea7807d46e514fef442a14c64ab"],["img/pro-avatar.png","4c76eb689e7437133fd4cd472b95342c"],["img/spec-1.png","d7110d1fa8d0c8bf710bc8a725de5949"],["img/spec-2.png","da14a3389cf7582cef82be36c46acb0f"],["img/spec-3-1.png","af007a6ec9837c54247fcd077c88e730"],["img/spec-3-2.png","abf1120e724730dfa78f026b95b37f6c"],["img/wechat.png","37ac864c9d4c56ca2e863feb46db5248"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







