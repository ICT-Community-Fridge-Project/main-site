(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),l=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,i=p(t||a||[]);return i&&i.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function C(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},q=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+d+o+s+a+i+t+n+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(_,(0,l.default)({ref:t,src:a},n,{ariaHidden:o}));return i.length>1?d.default.createElement("picture",null,r(i),s):s})),_=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:i,src:r},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));_.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,x=e.draggable,L=g||h;if(!L)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:O?1:0,transition:z?"opacity "+y+"ms":"none"},s),j="boolean"==typeof b?"lightgray":b,H={transitionDelay:y+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&H,s,f),T={title:t,alt:this.state.isVisible?"":a,style:N,className:m,itemProp:w},k=this.state.isHydrated?p(L):L[0];if(g)return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:k.maxWidth?k.maxWidth+"px":null,maxHeight:k.maxHeight?k.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),j&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&H)}),k.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:T,imageVariants:L,generateSources:C}),k.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:T,imageVariants:L,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,E(L),d.default.createElement(_,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:q((0,l.default)({alt:a,title:t,loading:S},k,{imageVariants:L}))}}));if(h){var W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},j&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},z&&H)}),k.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:T,imageVariants:L,generateSources:C}),k.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:T,imageVariants:L,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,E(L),d.default.createElement(_,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:q((0,l.default)({alt:a,title:t,loading:S},k,{imageVariants:L}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}O.propTypes={resolutions:z,sizes:V,fixed:j(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:j(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=O;t.default=H},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("gRST"),o=a("ElpU"),s=a("Wbzz"),l=a("9eSz"),d=a.n(l),c=a("vOnD"),u=a("bBeV"),f=a("VBu3"),m=function(){var e=Object(s.useStaticQuery)("2362084337");return r.a.createElement(p,{grid:!0},r.a.createElement(g,null,r.a.createElement(d.a,{fluid:e.file.childImageSharp.fluid})),r.a.createElement(h,null,r.a.createElement("h2",null,"Everybody eats, period."),r.a.createElement("p",null,"ICT community fridge project is rooted in mutual aid & justice. The goal is to provide free food to every member of the Wichita community, period.")))},p=Object(c.c)(u.a).withConfig({displayName:"sectionHeader__Header",componentId:"d99y2g-0"})(["align-items:center;grid-template-columns:1fr;grid-gap:0;@media ","{grid-template-columns:40fr 60fr;}"],f.a.lg),g=c.c.div.withConfig({displayName:"sectionHeader__Image",componentId:"d99y2g-1"})(["width:100%;height:100%;.gatsby-image-wrapper{height:100%;max-height:60vh;width:100%;@media ","{max-height:none;}img{object-position:top center !important;}}"],f.a.lg),h=c.c.div.withConfig({displayName:"sectionHeader__Content",componentId:"d99y2g-2"})(["margin:0 auto;max-width:900px;padding:4rem 2rem;p{margin-bottom:2rem;}@media ","{padding:1.5rem 2rem;}"],f.a.xs),b=function(e){var t=e.question,a=e.answer;e.index;return r.a.createElement(y,null,r.a.createElement(v,null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},y=c.c.div.withConfig({displayName:"faqQuestion__FAQ",componentId:"sc-1f4r6o3-0"})(["align-items:flex-start;display:flex;justify-content:flex-start;padding:1rem;&:last-of-type{padding-bottom:0;}"]),v=c.c.div.withConfig({displayName:"faqQuestion__Content",componentId:"sc-1f4r6o3-1"})(["flex-basis:auto;margin-right:1.5rem;h2{margin-bottom:0.5rem;}"]),w=function(){return r.a.createElement(E,{content:"true",contentTop:!0,grid:!0,id:"about-us"},r.a.createElement(S,null,r.a.createElement(b,{question:"What is the ICT Community Fridge Project?",answer:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "}),r.a.createElement(b,{question:"Who can take advantage of the program?",answer:" Vivamus ut fringilla enim. Quisque vel justo ut augue volutpat ultricies non ut nulla. Maecenas sagittis ipsum non rhoncus pulvinar. Phasellus tristique pharetra nisi sollicitudin cursus."}),r.a.createElement(b,{question:"How can I help?",answer:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pellentesque orci odio, et tristique mauris bibendum et. Aliquam tempor diam eros, at tincidunt mi vulputate ac."})))},E=Object(c.c)(u.a).withConfig({displayName:"sectionFaq__FaqContainer",componentId:"sc-2iy37i-0"})(["align-items:start;background-color:",";grid-template-columns:1fr;@media ","{}"],(function(e){return e.theme.colors.background}),f.a.lg),S=c.c.div.withConfig({displayName:"sectionFaq__Questions",componentId:"sc-2iy37i-1"})(["grid-row:2;h1{margin-bottom:2.5rem;}@media ","{grid-row:1;}"],f.a.lg),I=a("iGL9"),C=function(){return r.a.createElement(x,{content:"true",contentTop:!0},r.a.createElement("h1",null,"We need your support to help those in need."),r.a.createElement(L,null,r.a.createElement(I.a,{href:"https://cash.app/$ictfreefood"},"Donate")))},x=Object(c.c)(u.a).withConfig({displayName:"sectionCta__CTAContainer",componentId:"v9dc3m-0"})(["align-items:center;display:flex;background-color:",";flex-direction:column;justify-content:center;position:relative;text-align:center;h1{margin-bottom:2rem;}"],(function(e){return e.theme.colors.background})),L=c.c.div.withConfig({displayName:"sectionCta__Buttons",componentId:"v9dc3m-1"})(["align-items:center;display:flex;a{margin:1rem 1rem;}"]),q=[{name:"Dead Center Vintage",mapUrl:"https://www.google.com/maps/embed/v1/search?q=Dead%20Center%20Vintage%2C%20East%20Douglas%20Avenue%2C%20Wichita%2C%20KS%2C%20USA&key=AIzaSyBrAHX3xbf9wx_C4dVqbZ4YQZIaZ-HUMF4",websiteUrl:"https://www.deadcentervintage.com/"}],R=function(){return r.a.createElement(r.a.Fragment,null,q.map((function(e){var t=e.name,a=e.mapUrl,i=e.websiteUrl;return r.a.createElement(j,{key:a},r.a.createElement(z,{style:{border:0},src:a}),r.a.createElement(V,null,r.a.createElement("a",{href:i},t)))})))},_=function(){return r.a.createElement(O,{content:"true",contentTop:!0},r.a.createElement("section",{id:"locations"},r.a.createElement("h1",null,"Locations"),r.a.createElement(R,null)))},O=Object(c.c)(u.a).withConfig({displayName:"sectionLocations__LocationsContainer",componentId:"r0jzu1-0"})(["align-items:center;display:flex;flex-direction:column;justify-content:center;position:relative;text-align:center;h1{margin-bottom:2rem;}"]),z=c.c.iframe.withConfig({displayName:"sectionLocations__LocationMap",componentId:"r0jzu1-1"})(["width:'100%"]),V=c.c.figcaption.withConfig({displayName:"sectionLocations__FigureCaption",componentId:"r0jzu1-2"})([""]),j=Object(c.c)(u.a).withConfig({displayName:"sectionLocations__Figure",componentId:"r0jzu1-3"})([""]);t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(m,null),r.a.createElement(w,null),r.a.createElement(_,{id:"locations"}),r.a.createElement(C,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9aaedce7d2260220edbb.js.map