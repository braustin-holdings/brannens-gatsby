(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=h(n(0)),s=h(n(197)),a=h(n(199)),l=h(n(200)),u=h(n(201)),c=h(n(1));function h(e){return e&&e.__esModule?e:{default:e}}var d=["fullscreenchange","MSFullscreenChange","mozfullscreenchange","webkitfullscreenchange"],p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.slideToIndex=function(e,t){var i=n.state,r=i.currentIndex;if(!i.isTransitioning){t&&n._intervalId&&(n.pause(!1),n.play(!1));var o=n.props.items.length-1,s=e;e<0?s=o:e>o&&(s=0),n.setState({previousIndex:r,currentIndex:s,isTransitioning:s!==r,offsetPercentage:0,style:{transition:"all "+n.props.slideDuration+"ms ease-out"}},n._onSliding)}},n._onSliding=function(){var e=n.state.isTransitioning;n._transitionTimer=window.setTimeout(function(){e&&(n.setState({isTransitioning:!e}),n.props.onSlide&&n.props.onSlide(n.state.currentIndex))},n.props.slideDuration+50)},n._handleScreenChange=function(){var e=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;n.props.onScreenChange&&n.props.onScreenChange(e),n.setState({isFullscreen:!!e})},n._toggleFullScreen=function(){n.state.isFullscreen?n.exitFullScreen():n.fullScreen()},n._togglePlay=function(){n._intervalId?n.pause():n.play()},n._initGalleryResizing=function(e){e&&(n._imageGallerySlideWrapper=e,n.resizeObserver=new u.default(n._createResizeObserver),n.resizeObserver.observe(e))},n._createResizeObserver=(0,l.default)(function(e){e&&e.forEach(function(){n._handleResize()})},300),n._handleResize=function(){var e=n.state.currentIndex;n._imageGallery&&n.setState({galleryWidth:n._imageGallery.offsetWidth}),n._imageGallerySlideWrapper&&n.setState({gallerySlideWrapperHeight:n._imageGallerySlideWrapper.offsetHeight}),n._thumbnailsWrapper&&(n._isThumbnailVertical()?n.setState({thumbnailsWrapperHeight:n._thumbnailsWrapper.offsetHeight}):n.setState({thumbnailsWrapperWidth:n._thumbnailsWrapper.offsetWidth})),n._setThumbsTranslate(-n._getThumbsTranslate(e))},n._handleKeyDown=function(e){if(!n.props.disableArrowKeys){switch(parseInt(e.keyCode||e.which||0)){case 37:n._canSlideLeft()&&!n._intervalId&&n._slideLeft();break;case 39:n._canSlideRight()&&!n._intervalId&&n._slideRight();break;case 27:n.state.isFullscreen&&!n.props.useBrowserFullscreen&&n.exitFullScreen()}}},n._handleImageError=function(e){n.props.defaultImage&&-1===e.target.src.indexOf(n.props.defaultImage)&&(e.target.src=n.props.defaultImage)},n._handleOnSwiped=function(e,t,i,r){var o=n.state,s=o.scrollingUpDown,a=o.scrollingLeftRight,l=n.props.isRTL;if(s&&n.setState({scrollingUpDown:!1}),a&&n.setState({scrollingLeftRight:!1}),!s){var u=(t>0?1:-1)*(l?-1:1);n._handleOnSwipedTo(u,r)}},n._handleSwiping=function(e,t,i,r){var o=n.state,s=o.galleryWidth,a=o.isTransitioning,l=o.scrollingUpDown,u=n.props.swipingTransitionDuration;if(n._setScrollDirection(t,i),a||l)n.setState({offsetPercentage:0});else{var c=t<0?1:-1,h=r/s*100;Math.abs(h)>=100&&(h=100);var d={transition:"transform "+u+"ms ease-out"};n.setState({offsetPercentage:c*h,style:d})}},n._slideLeft=function(){n.props.isRTL?n._slideNext():n._slidePrevious()},n._slideRight=function(){n.props.isRTL?n._slidePrevious():n._slideNext()},n._slidePrevious=function(e){n.slideToIndex(n.state.currentIndex-1,e)},n._slideNext=function(e){n.slideToIndex(n.state.currentIndex+1,e)},n._renderItem=function(e){var t=n.props.onImageError||n._handleImageError;return o.default.createElement("div",{className:"image-gallery-image"},e.imageSet?o.default.createElement("picture",{onLoad:n.props.onImageLoad,onError:t},e.imageSet.map(function(e,t){return o.default.createElement("source",{key:t,media:e.media,srcSet:e.srcSet,type:e.type})}),o.default.createElement("img",{alt:e.originalAlt,src:e.original})):o.default.createElement("img",{src:e.original,alt:e.originalAlt,srcSet:e.srcSet,sizes:e.sizes,title:e.originalTitle,onLoad:n.props.onImageLoad,onError:t}),e.description&&o.default.createElement("span",{className:"image-gallery-description"},e.description))},n._renderThumbInner=function(e){var t=n.props.onThumbnailError||n._handleImageError;return o.default.createElement("div",{className:"image-gallery-thumbnail-inner"},o.default.createElement("img",{src:e.thumbnail,alt:e.thumbnailAlt,title:e.thumbnailTitle,onError:t}),e.thumbnailLabel&&o.default.createElement("div",{className:"image-gallery-thumbnail-label"},e.thumbnailLabel))},n._onThumbnailClick=function(e,t){n.slideToIndex(t,e),n.props.onThumbnailClick&&n.props.onThumbnailClick(e,t)},n._onThumbnailMouseOver=function(e,t){n._thumbnailMouseOverTimer&&(window.clearTimeout(n._thumbnailMouseOverTimer),n._thumbnailMouseOverTimer=null),n._thumbnailMouseOverTimer=window.setTimeout(function(){n.slideToIndex(t),n.pause()},300)},n._onThumbnailMouseLeave=function(){n._thumbnailMouseOverTimer&&(window.clearTimeout(n._thumbnailMouseOverTimer),n._thumbnailMouseOverTimer=null,n.props.autoPlay&&n.play())},n.state={currentIndex:e.startIndex,thumbsTranslate:0,offsetPercentage:0,galleryWidth:0,thumbnailsWrapperWidth:0,thumbnailsWrapperHeight:0,isFullscreen:!1,isPlaying:!1},n._unthrottledSlideToIndex=n.slideToIndex,n.slideToIndex=(0,a.default)(n._unthrottledSlideToIndex,e.slideDuration,{trailing:!1}),e.lazyLoad&&(n._lazyLoaded=[]),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){!e.lazyLoad||this.props.lazyLoad&&this.props.items===e.items||(this._lazyLoaded=[])}},{key:"componentDidUpdate",value:function(e,t){e.items.length!==this.props.items.length&&this._handleResize(),t.currentIndex!==this.state.currentIndex&&this._updateThumbnailTranslate(t.currentIndex),e.slideDuration!==this.props.slideDuration&&(this.slideToIndex=(0,a.default)(this._unthrottledSlideToIndex,this.props.slideDuration,{trailing:!1}))}},{key:"componentDidMount",value:function(){this.props.autoPlay&&this.play(),window.addEventListener("keydown",this._handleKeyDown),this._onScreenChangeEvent()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this._handleKeyDown),this._offScreenChangeEvent(),this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null),this.resizeObserver&&this._imageGallerySlideWrapper&&this.resizeObserver.unobserve(this._imageGallerySlideWrapper),this._transitionTimer&&window.clearTimeout(this._transitionTimer),this._createResizeObserver&&this._createResizeObserver()}},{key:"play",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this._intervalId){var n=this.props,i=n.slideInterval,r=n.slideDuration;this.setState({isPlaying:!0}),this._intervalId=window.setInterval(function(){e.props.infinite||e._canSlideRight()?e.slideToIndex(e.state.currentIndex+1):e.pause()},Math.max(i,r)),this.props.onPlay&&t&&this.props.onPlay(this.state.currentIndex)}}},{key:"pause",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null,this.setState({isPlaying:!1}),this.props.onPause&&e&&this.props.onPause(this.state.currentIndex))}},{key:"setModalFullscreen",value:function(e){this.setState({modalFullscreen:e}),this.props.onScreenChange&&this.props.onScreenChange(e)}},{key:"fullScreen",value:function(){var e=this._imageGallery;this.props.useBrowserFullscreen?e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():this.setModalFullscreen(!0):this.setModalFullscreen(!0),this.setState({isFullscreen:!0})}},{key:"exitFullScreen",value:function(){this.state.isFullscreen&&(this.props.useBrowserFullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this.setModalFullscreen(!1):this.setModalFullscreen(!1),this.setState({isFullscreen:!1}))}},{key:"getCurrentIndex",value:function(){return this.state.currentIndex}},{key:"_onScreenChangeEvent",value:function(){var e=this;d.map(function(t){document.addEventListener(t,e._handleScreenChange)})}},{key:"_offScreenChangeEvent",value:function(){var e=this;d.map(function(t){document.removeEventListener(t,e._handleScreenChange)})}},{key:"_isThumbnailVertical",value:function(){var e=this.props.thumbnailPosition;return"left"===e||"right"===e}},{key:"_setScrollDirection",value:function(e,t){var n=this.state,i=n.scrollingUpDown,r=n.scrollingLeftRight,o=Math.abs(e);Math.abs(t)>o&&!i&&!r?this.setState({scrollingUpDown:!0}):r||i||this.setState({scrollingLeftRight:!0})}},{key:"_handleOnSwipedTo",value:function(e,t){var n=this.state,i=n.currentIndex,r=n.isTransitioning,o=i;!this._sufficientSwipeOffset()&&!t||r||(o+=e),e<0?this._canSlideLeft()||(o=i):this._canSlideRight()||(o=i),this._unthrottledSlideToIndex(o)}},{key:"_sufficientSwipeOffset",value:function(){return Math.abs(this.state.offsetPercentage)>this.props.swipeThreshold}},{key:"_canNavigate",value:function(){return this.props.items.length>=2}},{key:"_canSlideLeft",value:function(){return this.props.infinite||(this.props.isRTL?this._canSlideNext():this._canSlidePrevious())}},{key:"_canSlideRight",value:function(){return this.props.infinite||(this.props.isRTL?this._canSlidePrevious():this._canSlideNext())}},{key:"_canSlidePrevious",value:function(){return this.state.currentIndex>0}},{key:"_canSlideNext",value:function(){return this.state.currentIndex<this.props.items.length-1}},{key:"_updateThumbnailTranslate",value:function(e){var t=this.state,n=t.thumbsTranslate,i=t.currentIndex;if(0===this.state.currentIndex)this._setThumbsTranslate(0);else{var r=Math.abs(e-i),o=this._getThumbsTranslate(r);o>0&&(e<i?this._setThumbsTranslate(n-o):e>i&&this._setThumbsTranslate(n+o))}}},{key:"_setThumbsTranslate",value:function(e){this.setState({thumbsTranslate:e})}},{key:"_getThumbsTranslate",value:function(e){if(this.props.disableThumbnailScroll)return 0;var t=this.state,n=t.thumbnailsWrapperWidth,i=t.thumbnailsWrapperHeight,r=void 0;if(this._thumbnails){if(this._isThumbnailVertical()){if(this._thumbnails.scrollHeight<=i)return 0;r=this._thumbnails.scrollHeight-i}else{if(this._thumbnails.scrollWidth<=n||n<=0)return 0;r=this._thumbnails.scrollWidth-n}return e*(r/(this._thumbnails.children.length-1))}}},{key:"_getAlignmentClassName",value:function(e){var t=this.state.currentIndex,n="";switch(e){case t-1:n=" left";break;case t:n=" center";break;case t+1:n=" right"}return this.props.items.length>=3&&this.props.infinite&&(0===e&&t===this.props.items.length-1?n=" right":e===this.props.items.length-1&&0===t&&(n=" left")),n}},{key:"_isGoingFromFirstToLast",value:function(){var e=this.state,t=e.currentIndex,n=e.previousIndex,i=this.props.items.length-1;return 0===n&&t===i}},{key:"_isGoingFromLastToFirst",value:function(){var e=this.state,t=e.currentIndex;return e.previousIndex===this.props.items.length-1&&0===t}},{key:"_getTranslateXForTwoSlide",value:function(e){var t=this.state,n=t.currentIndex,i=t.offsetPercentage,r=t.previousIndex,o=-100*n+100*e+i;return i>0?this.direction="left":i<0&&(this.direction="right"),0===n&&1===e&&i>0?o=-100+i:1===n&&0===e&&i<0&&(o=100+i),n!==r?0===r&&0===e&&0===i&&"left"===this.direction?o=100:1===r&&1===e&&0===i&&"right"===this.direction&&(o=-100):0===n&&1===e&&0===i&&"left"===this.direction?o=-100:1===n&&0===e&&0===i&&"right"===this.direction&&(o=100),o}},{key:"_getThumbnailBarHeight",value:function(){return this._isThumbnailVertical()?{height:this.state.gallerySlideWrapperHeight}:{}}},{key:"_shouldPushSlideOnInfiniteMode",value:function(e){return!this._slideIsTransitioning(e)||this._ignoreIsTransitioning()&&!this._isFirstOrLastSlide(e)}},{key:"_slideIsTransitioning",value:function(e){var t=this.state,n=t.isTransitioning,i=t.previousIndex,r=t.currentIndex;return n&&!(e===i||e===r)}},{key:"_isFirstOrLastSlide",value:function(e){return e===this.props.items.length-1||0===e}},{key:"_ignoreIsTransitioning",value:function(){var e=this.state,t=e.previousIndex,n=e.currentIndex,i=this.props.items.length-1;return Math.abs(t-n)>1&&!(0===t&&n===i)&&!(t===i&&0===n)}},{key:"_getSlideStyle",value:function(e){var t=this.state,n=t.currentIndex,i=t.offsetPercentage,r=this.props,o=r.infinite,s=r.items,a=r.useTranslate3D,l=r.isRTL,u=-100*n,c=s.length-1,h=(u+100*e)*(l?-1:1)+i;o&&s.length>2&&(0===n&&e===c?h=-100*(l?-1:1)+i:n===c&&0===e&&(h=100*(l?-1:1)+i)),o&&2===s.length&&(h=this._getTranslateXForTwoSlide(e));var d="translate("+h+"%, 0)";return a&&(d="translate3d("+h+"%, 0, 0)"),{WebkitTransform:d,MozTransform:d,msTransform:d,OTransform:d,transform:d}}},{key:"_getThumbnailStyle",value:function(){var e=void 0,t=this.props,n=t.useTranslate3D,i=t.isRTL,r=this.state.thumbsTranslate,o=i?-1*r:r;return this._isThumbnailVertical()?(e="translate(0, "+r+"px)",n&&(e="translate3d(0, "+r+"px, 0)")):(e="translate("+o+"px, 0)",n&&(e="translate3d("+o+"px, 0, 0)")),{WebkitTransform:e,MozTransform:e,msTransform:e,OTransform:e,transform:e}}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentIndex,r=t.isFullscreen,a=t.modalFullscreen,l=t.isPlaying,u=t.scrollingLeftRight,c=this.props,h=c.infinite,d=c.preventDefaultTouchmoveEvent,p=c.slideOnThumbnailOver,f=c.isRTL,v=this._getThumbnailStyle(),m=this.props.thumbnailPosition,b=this._slideLeft,g=this._slideRight,y=[],_=[],w=[];this.props.items.forEach(function(t,r){var s=e._getAlignmentClassName(r),a=t.originalClass?" "+t.originalClass:"",l=t.thumbnailClass?" "+t.thumbnailClass:"",u=t.renderItem||e.props.renderItem||e._renderItem,c=t.renderThumbInner||e.props.renderThumbInner||e._renderThumbInner,d=!e.props.lazyLoad||s||e._lazyLoaded[r];d&&e.props.lazyLoad&&(e._lazyLoaded[r]=!0);var f=e._getSlideStyle(r),v=o.default.createElement("div",{key:r,className:"image-gallery-slide"+s+a,style:i(f,e.state.style),onClick:e.props.onClick,onTouchMove:e.props.onTouchMove,onTouchEnd:e.props.onTouchEnd,onTouchStart:e.props.onTouchStart,onMouseOver:e.props.onMouseOver,onMouseLeave:e.props.onMouseLeave,role:e.props.onClick&&"button"},d?u(t):o.default.createElement("div",{style:{height:"100%"}}));if(h?e._shouldPushSlideOnInfiniteMode(r)&&y.push(v):y.push(v),e.props.showThumbnails&&_.push(o.default.createElement("a",{key:r,role:"button","aria-pressed":n===r?"true":"false","aria-label":"Go to Slide "+(r+1),className:"image-gallery-thumbnail"+(n===r?" active":"")+l,onMouseLeave:p?e._onThumbnailMouseLeave:void 0,onMouseOver:function(t){return p?e._onThumbnailMouseOver(t,r):void 0},onClick:function(t){return e._onThumbnailClick(t,r)}},c(t))),e.props.showBullets){w.push(o.default.createElement("button",{key:r,type:"button",className:["image-gallery-bullet",n===r?"active":"",t.bulletClass||""].join(" "),onClick:function(i){return t.bulletOnClick&&t.bulletOnClick({item:t,itemIndex:r,currentIndex:n}),e.slideToIndex.call(e,r,i)},"aria-pressed":n===r?"true":"false","aria-label":"Go to Slide "+(r+1)}))}});var T=o.default.createElement("div",{ref:this._initGalleryResizing,className:"image-gallery-slide-wrapper "+m+" "+(f?"image-gallery-rtl":"")},this.props.renderCustomControls&&this.props.renderCustomControls(),this.props.showFullscreenButton&&this.props.renderFullscreenButton(this._toggleFullScreen,r),this.props.showPlayButton&&this.props.renderPlayPauseButton(this._togglePlay,l),this._canNavigate()?[this.props.showNav&&o.default.createElement("span",{key:"navigation"},this.props.renderLeftNav(b,!this._canSlideLeft()),this.props.renderRightNav(g,!this._canSlideRight())),o.default.createElement(s.default,{className:"image-gallery-swipe",disabled:this.props.disableSwipe,key:"swipeable",delta:0,flickThreshold:this.props.flickThreshold,onSwiping:this._handleSwiping,onSwiped:this._handleOnSwiped,stopPropagation:this.props.stopPropagation,preventDefaultTouchmoveEvent:d||u},o.default.createElement("div",{className:"image-gallery-slides"},y))]:o.default.createElement("div",{className:"image-gallery-slides"},y),this.props.showBullets&&o.default.createElement("div",{className:"image-gallery-bullets"},o.default.createElement("div",{className:"image-gallery-bullets-container",role:"navigation","aria-label":"Bullet Navigation"},w)),this.props.showIndex&&o.default.createElement("div",{className:"image-gallery-index"},o.default.createElement("span",{className:"image-gallery-index-current"},this.state.currentIndex+1),o.default.createElement("span",{className:"image-gallery-index-separator"},this.props.indexSeparator),o.default.createElement("span",{className:"image-gallery-index-total"},this.props.items.length))),S=["image-gallery",this.props.additionalClass,a?"fullscreen-modal":""].filter(function(e){return"string"==typeof e}).join(" ");return o.default.createElement("div",{ref:function(t){return e._imageGallery=t},className:S,"aria-live":"polite"},o.default.createElement("div",{className:"image-gallery-content"+(r?" fullscreen":"")},("bottom"===m||"right"===m)&&T,this.props.showThumbnails&&o.default.createElement("div",{className:"image-gallery-thumbnails-wrapper "+m+" "+(!this._isThumbnailVertical()&&f?"thumbnails-wrapper-rtl":""),style:this._getThumbnailBarHeight()},o.default.createElement("div",{className:"image-gallery-thumbnails",ref:function(t){return e._thumbnailsWrapper=t}},o.default.createElement("div",{ref:function(t){return e._thumbnails=t},className:"image-gallery-thumbnails-container",style:v,"aria-label":"Thumbnail Navigation"},_))),("top"===m||"left"===m)&&T))}}]),t}();p.propTypes={flickThreshold:c.default.number,items:c.default.array.isRequired,showNav:c.default.bool,autoPlay:c.default.bool,lazyLoad:c.default.bool,infinite:c.default.bool,showIndex:c.default.bool,showBullets:c.default.bool,showThumbnails:c.default.bool,showPlayButton:c.default.bool,showFullscreenButton:c.default.bool,disableThumbnailScroll:c.default.bool,disableArrowKeys:c.default.bool,disableSwipe:c.default.bool,useBrowserFullscreen:c.default.bool,preventDefaultTouchmoveEvent:c.default.bool,defaultImage:c.default.string,indexSeparator:c.default.string,thumbnailPosition:c.default.string,startIndex:c.default.number,slideDuration:c.default.number,slideInterval:c.default.number,slideOnThumbnailOver:c.default.bool,swipeThreshold:c.default.number,swipingTransitionDuration:c.default.number,onSlide:c.default.func,onScreenChange:c.default.func,onPause:c.default.func,onPlay:c.default.func,onClick:c.default.func,onImageLoad:c.default.func,onImageError:c.default.func,onTouchMove:c.default.func,onTouchEnd:c.default.func,onTouchStart:c.default.func,onMouseOver:c.default.func,onMouseLeave:c.default.func,onThumbnailError:c.default.func,onThumbnailClick:c.default.func,renderCustomControls:c.default.func,renderLeftNav:c.default.func,renderRightNav:c.default.func,renderPlayPauseButton:c.default.func,renderFullscreenButton:c.default.func,renderItem:c.default.func,stopPropagation:c.default.bool,additionalClass:c.default.string,useTranslate3D:c.default.bool,isRTL:c.default.bool},p.defaultProps={items:[],showNav:!0,autoPlay:!1,lazyLoad:!1,infinite:!0,showIndex:!1,showBullets:!1,showThumbnails:!0,showPlayButton:!0,showFullscreenButton:!0,disableThumbnailScroll:!1,disableArrowKeys:!1,disableSwipe:!1,useTranslate3D:!0,isRTL:!1,useBrowserFullscreen:!0,preventDefaultTouchmoveEvent:!1,flickThreshold:.4,stopPropagation:!1,indexSeparator:" / ",thumbnailPosition:"bottom",startIndex:0,slideDuration:450,swipingTransitionDuration:0,slideInterval:3e3,swipeThreshold:30,renderLeftNav:function(e,t){return o.default.createElement("button",{type:"button",className:"image-gallery-left-nav",disabled:t,onClick:e,"aria-label":"Previous Slide"})},renderRightNav:function(e,t){return o.default.createElement("button",{type:"button",className:"image-gallery-right-nav",disabled:t,onClick:e,"aria-label":"Next Slide"})},renderPlayPauseButton:function(e,t){return o.default.createElement("button",{type:"button",className:"image-gallery-play-button"+(t?" active":""),onClick:e,"aria-label":"Play or Pause Slideshow"})},renderFullscreenButton:function(e,t){return o.default.createElement("button",{type:"button",className:"image-gallery-fullscreen-button"+(t?" active":""),onClick:e,"aria-label":"Open Fullscreen"})}},t.default=p},197:function(e,t,n){"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};var r=n(0),o=n(1),s=n(198).default;function a(e,t){if(0===t)return e;var n=e.x,i=e.y,r=Math.PI/180*t;return{x:n*Math.cos(r)+i*Math.sin(r),y:i*Math.cos(r)-n*Math.sin(r)}}function l(e,t){var n=a(function(e){return"changedTouches"in e?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:e.clientX,y:e.clientY}}(e),t.rotationAngle),i=n.x,r=n.y,o=t.x-i,s=t.y-r,l=Math.abs(o),u=Math.abs(s),c=Date.now()-t.start;return{deltaX:o,deltaY:s,absX:l,absY:u,velocity:Math.sqrt(l*l+u*u)/c}}var u=function(e){function t(n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,i));return r.swipeable={x:null,y:null,swiping:!1,start:0},r.eventStart=r.eventStart.bind(r),r.eventMove=r.eventMove.bind(r),r.eventEnd=r.eventEnd.bind(r),r.mouseDown=r.mouseDown.bind(r),r.mouseMove=r.mouseMove.bind(r),r.mouseUp=r.mouseUp.bind(r),r.cleanupMouseListeners=r.cleanupMouseListeners.bind(r),r.setupMouseListeners=r.setupMouseListeners.bind(r),r.elementRef=r.elementRef.bind(r),r.setupTouchmoveEvent=r.setupTouchmoveEvent.bind(r),r.cleanupTouchmoveEvent=r.cleanupTouchmoveEvent.bind(r),r.hasPassiveSupport=s.hasSupport,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.preventDefaultTouchmoveEvent&&this.setupTouchmoveEvent()},t.prototype.componentDidUpdate=function(e){e.disabled!==this.props.disabled&&(this.cleanupMouseListeners(),this.swipeable={x:null,y:null,swiping:!1,start:0}),e.preventDefaultTouchmoveEvent&&!this.props.preventDefaultTouchmoveEvent?this.cleanupTouchmoveEvent():!e.preventDefaultTouchmoveEvent&&this.props.preventDefaultTouchmoveEvent&&this.setupTouchmoveEvent()},t.prototype.componentWillUnmount=function(){this.cleanupMouseListeners()},t.prototype.setupTouchmoveEvent=function(){this.element&&this.hasPassiveSupport&&this.element.addEventListener("touchmove",this.eventMove,{passive:!1})},t.prototype.setupMouseListeners=function(){document.addEventListener("mousemove",this.mouseMove),document.addEventListener("mouseup",this.mouseUp)},t.prototype.cleanupTouchmoveEvent=function(){this.element&&this.hasPassiveSupport&&this.element.removeEventListener("touchmove",this.eventMove,{passive:!1})},t.prototype.cleanupMouseListeners=function(){document.removeEventListener("mousemove",this.mouseMove),document.removeEventListener("mouseup",this.mouseUp)},t.prototype.mouseDown=function(e){this.props.trackMouse&&"mousedown"===e.type&&("function"==typeof this.props.onMouseDown&&this.props.onMouseDown(e),this.setupMouseListeners(),this.eventStart(e))},t.prototype.mouseMove=function(e){this.eventMove(e)},t.prototype.mouseUp=function(e){this.cleanupMouseListeners(),this.eventEnd(e)},t.prototype.eventStart=function(e){if(!(e.touches&&e.touches.length>1)){var t=this.props.rotationAngle,n=a(function(e){return"touches"in e?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY}}(e),t),i=n.x,r=n.y;this.props.stopPropagation&&e.stopPropagation(),this.swipeable={start:Date.now(),x:i,y:r,swiping:!1,rotationAngle:t}}},t.prototype.eventMove=function(e){var t=this.props,n=t.stopPropagation,i=t.delta,r=t.onSwiping,o=t.onSwiped,s=t.onSwipingLeft,a=t.onSwipedLeft,u=t.onSwipingRight,c=t.onSwipedRight,h=t.onSwipingUp,d=t.onSwipedUp,p=t.onSwipingDown,f=t.onSwipedDown,v=t.preventDefaultTouchmoveEvent;if(this.swipeable.x&&this.swipeable.y&&!(e.touches&&e.touches.length>1)){var m=l(e,this.swipeable);if(!(m.absX<i&&m.absY<i)||this.swipeable.swiping){n&&e.stopPropagation(),r&&r(e,m.deltaX,m.deltaY,m.absX,m.absY,m.velocity);var b=!1;(r||o)&&(b=!0),m.absX>m.absY?m.deltaX>0?(s||a)&&(s&&s(e,m.absX),b=!0):(u||c)&&(u&&u(e,m.absX),b=!0):m.deltaY>0?(h||d)&&(h&&h(e,m.absY),b=!0):(p||f)&&(p&&p(e,m.absY),b=!0),this.swipeable.swiping=!0,b&&v&&e.preventDefault()}}},t.prototype.eventEnd=function(e){var t=this.props,n=t.stopPropagation,i=t.flickThreshold,r=t.onSwiped,o=t.onSwipedLeft,s=t.onSwipedRight,a=t.onSwipedUp,u=t.onSwipedDown,c=t.onTap;if(this.swipeable.swiping){var h=l(e,this.swipeable);n&&e.stopPropagation();var d=h.velocity>i;r&&r(e,h.deltaX,h.deltaY,d,h.velocity),h.absX>h.absY?h.deltaX>0?o&&o(e,h.deltaX,d):s&&s(e,h.deltaX,d):h.deltaY>0?a&&a(e,h.deltaY,d):u&&u(e,h.deltaY,d)}else c&&c(e);this.swipeable={x:null,y:null,swiping:!1,start:0}},t.prototype.elementRef=function(e){this.element=e,this.props.innerRef&&this.props.innerRef(e)},t.prototype.render=function(){var e=i({},this.props);return this.props.disabled||(e.onTouchStart=this.eventStart,this.props.preventDefaultTouchmoveEvent&&this.hasPassiveSupport||(e.onTouchMove=this.eventMove),e.onTouchEnd=this.eventEnd,e.onMouseDown=this.mouseDown),e.ref=this.elementRef,delete e.onSwiped,delete e.onSwiping,delete e.onSwipingUp,delete e.onSwipingRight,delete e.onSwipingDown,delete e.onSwipingLeft,delete e.onSwipedUp,delete e.onSwipedRight,delete e.onSwipedDown,delete e.onSwipedLeft,delete e.onTap,delete e.flickThreshold,delete e.delta,delete e.preventDefaultTouchmoveEvent,delete e.stopPropagation,delete e.nodeName,delete e.children,delete e.trackMouse,delete e.disabled,delete e.innerRef,delete e.rotationAngle,r.createElement(this.props.nodeName,e,this.props.children)},t}(r.Component);u.propTypes={onSwiped:o.func,onSwiping:o.func,onSwipingUp:o.func,onSwipingRight:o.func,onSwipingDown:o.func,onSwipingLeft:o.func,onSwipedUp:o.func,onSwipedRight:o.func,onSwipedDown:o.func,onSwipedLeft:o.func,onTap:o.func,flickThreshold:o.number,delta:o.number,preventDefaultTouchmoveEvent:o.bool,stopPropagation:o.bool,nodeName:o.string,trackMouse:o.bool,disabled:o.bool,innerRef:o.func,children:o.node,rotationAngle:o.number},u.defaultProps={flickThreshold:.6,delta:10,preventDefaultTouchmoveEvent:!1,stopPropagation:!1,nodeName:"div",disabled:!1,rotationAngle:0},e.exports=u},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={update:function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),i.hasSupport=e}}};i.update(),t.default=i},199:function(e,t,n){(function(t){var n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,d=c||h||Function("return this")(),p=Object.prototype.toString,f=Math.max,v=Math.min,m=function(){return d.Date.now()};function b(e,t,i){var r,o,s,a,l,u,c=0,h=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function _(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=s}function w(){var e=m();if(_(e))return T(e);l=setTimeout(w,function(e){var n=t-(e-u);return d?v(n,s-(e-c)):n}(e))}function T(e){return l=void 0,p&&r?b(e):(r=o=void 0,a)}function S(){var e=m(),n=_(e);if(r=arguments,o=this,u=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(w,t),h?b(e):a}(u);if(d)return l=setTimeout(w,t),b(u)}return void 0===l&&(l=setTimeout(w,t)),a}return t=y(t)||0,g(i)&&(h=!!i.leading,s=(d="maxWait"in i)?f(y(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=u=o=l=void 0},S.flush=function(){return void 0===l?a:T(m())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return i;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(n);return g(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})}}).call(this,n(60))},200:function(e,t,n){(function(t){var n="Expected a function",i=NaN,r="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,d=c||h||Function("return this")(),p=Object.prototype.toString,f=Math.max,v=Math.min,m=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return i;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,i){var r,o,s,a,l,u,c=0,h=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function _(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=s}function w(){var e=m();if(_(e))return T(e);l=setTimeout(w,function(e){var n=t-(e-u);return d?v(n,s-(e-c)):n}(e))}function T(e){return l=void 0,p&&r?y(e):(r=o=void 0,a)}function S(){var e=m(),n=_(e);if(r=arguments,o=this,u=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(w,t),h?y(e):a}(u);if(d)return l=setTimeout(w,t),y(u)}return void 0===l&&(l=setTimeout(w,t)),a}return t=g(t)||0,b(i)&&(h=!!i.leading,s=(d="maxWait"in i)?f(g(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=u=o=l=void 0},S.flush=function(){return void 0===l?a:T(m())},S}}).call(this,n(60))},201:function(e,t,n){"use strict";n.r(t),function(e){var n=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,i){return e[0]===t&&(n=i,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,i=this.__entries__;n<i.length;n++){var r=i[n];e.call(t,r[1],r[0])}},t}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,r=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},s=2;var a=20,l=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,i=!1,r=0;function a(){n&&(n=!1,e()),i&&u()}function l(){o(a)}function u(){var e=Date.now();if(n){if(e-r<s)return;i=!0}else n=!0,i=!1,setTimeout(l,t);r=e}return u}(this.refresh.bind(this),a)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;l.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),h=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var r=i[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||r},p=y(0,0,0,0);function f(e){return parseFloat(e)||0}function v(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+f(e["border-"+n+"-width"])},0)}function m(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var i=d(e).getComputedStyle(e),r=function(e){for(var t={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var r=i[n],o=e["padding-"+r];t[r]=f(o)}return t}(i),o=r.left+r.right,s=r.top+r.bottom,a=f(i.width),l=f(i.height);if("border-box"===i.boxSizing&&(Math.round(a+o)!==t&&(a-=v(i,"left","right")+o),Math.round(l+s)!==n&&(l-=v(i,"top","bottom")+s)),!function(e){return e===d(e).document.documentElement}(e)){var u=Math.round(a+o)-t,c=Math.round(l+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(c)&&(l-=c)}return y(r.left,r.top,a,l)}var b="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"==typeof e.getBBox};function g(e){return i?b(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):m(e):p}function y(e,t,n,i){return{x:e,y:t,width:n,height:i}}var _=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=g(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),w=function(){return function(e,t){var n,i,r,o,s,a,l,u=(i=(n=t).x,r=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),h(l,{x:i,y:r,width:o,height:s,top:r,right:i+o,bottom:s+r,left:i}),l);h(this,{target:e,contentRect:u})}}(),T=function(){function e(e,t,i){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new _(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new w(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),S="undefined"!=typeof WeakMap?new WeakMap:new n,E=function(){return function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),i=new T(t,n,this);S.set(this,i)}}();["observe","unobserve","disconnect"].forEach(function(e){E.prototype[e]=function(){var t;return(t=S.get(this))[e].apply(t,arguments)}});var x=void 0!==r.ResizeObserver?r.ResizeObserver:E;t.default=x}.call(this,n(60))}}]);
//# sourceMappingURL=3-65cde42d18df817f5a12.js.map