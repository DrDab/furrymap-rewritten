

/*

  OpenLayers.js -- OpenLayers Map Viewer Library

  Copyright 2005-2008 MetaCarta, Inc., released under the Clear BSD license.
  Please see http://svn.openlayers.org/trunk/openlayers/license.txt
  for the full text of the license.

  Includes compressed code under the following licenses:

  (For uncompressed versions of the code used please see the
  OpenLayers SVN repository: <http://openlayers.org/>)

*/

/* Contains portions of Prototype.js:
 *
 * Prototype JavaScript framework, version 1.4.0
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
 *--------------------------------------------------------------------------*/

/**
*
*  Contains portions of Rico <http://openrico.org/>
*
*  Copyright 2005 Sabre Airline Solutions
*
*  Licensed under the Apache License, Version 2.0 (the "License"); you
*  may not use this file except in compliance with the License. You
*  may obtain a copy of the License at
*
*         http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
*  implied. See the License for the specific language governing
*  permissions and limitations under the License.
*
**/

/**
 * Contains XMLHttpRequest.js <http://code.google.com/p/xmlhttprequest/>
 * Copyright 2007 Sergey Ilinsky (http://www.ilinsky.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * Contains portions of Gears <http://code.google.com/apis/gears/>
 *
 * Copyright 2007, Google Inc.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *  3. Neither the name of Google Inc. nor the names of its contributors may be
 *     used to endorse or promote products derived from this software without
 *     specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Sets up google.gears.*, which is *the only* supported way to access Gears.
 *
 * Circumvent this file at your own risk!
 *
 * In the future, Gears may automatically define google.gears.* without this
 * file. Gears may use these objects to transparently fix bugs and compatibility
 * issues. Applications that use the code below will continue to work seamlessly
 * when that happens.
 */
var OpenLayers={singleFile:true};(function(){var singleFile=(typeof OpenLayers=="object"&&OpenLayers.singleFile);window.OpenLayers={_scriptName:(!singleFile)?"lib/OpenLayers.js":"OpenLayers.js",_getScriptLocation:function(){var scriptLocation="";var scriptName=OpenLayers._scriptName;var scripts=document.getElementsByTagName('script');for(var i=0,len=scripts.length;i<len;i++){var src=scripts[i].getAttribute('src');if(src){var index=src.lastIndexOf(scriptName);var pathLength=src.lastIndexOf('?');if(pathLength<0){pathLength=src.length;}
if((index>-1)&&(index+scriptName.length==pathLength)){scriptLocation=src.slice(0,pathLength-scriptName.length);break;}}}
return scriptLocation;}};if(!singleFile){var jsfiles=new Array("OpenLayers/Util.js","OpenLayers/BaseTypes.js","OpenLayers/BaseTypes/Class.js","OpenLayers/BaseTypes/Bounds.js","OpenLayers/BaseTypes/Element.js","OpenLayers/BaseTypes/LonLat.js","OpenLayers/BaseTypes/Pixel.js","OpenLayers/BaseTypes/Size.js","OpenLayers/Console.js","OpenLayers/Tween.js","Rico/Corner.js","Rico/Color.js","Gears/gears_init.js","OpenLayers/Ajax.js","OpenLayers/Request.js","OpenLayers/Request/XMLHttpRequest.js","OpenLayers/Events.js","OpenLayers/Projection.js","OpenLayers/Map.js","OpenLayers/Layer.js","OpenLayers/Icon.js","OpenLayers/Marker.js","OpenLayers/Marker/Box.js","OpenLayers/Popup.js","OpenLayers/Tile.js","OpenLayers/Tile/Image.js","OpenLayers/Tile/WFS.js","OpenLayers/Layer/Image.js","OpenLayers/Layer/SphericalMercator.js","OpenLayers/Layer/EventPane.js","OpenLayers/Layer/FixedZoomLevels.js","OpenLayers/Layer/Google.js","OpenLayers/Layer/VirtualEarth.js","OpenLayers/Layer/Yahoo.js","OpenLayers/Layer/HTTPRequest.js","OpenLayers/Layer/Grid.js","OpenLayers/Layer/MapGuide.js","OpenLayers/Layer/MapServer.js","OpenLayers/Layer/MapServer/Untiled.js","OpenLayers/Layer/KaMap.js","OpenLayers/Layer/KaMapCache.js","OpenLayers/Layer/MultiMap.js","OpenLayers/Layer/Markers.js","OpenLayers/Layer/Text.js","OpenLayers/Layer/WorldWind.js","OpenLayers/Layer/WMS.js","OpenLayers/Layer/WMS/Untiled.js","OpenLayers/Layer/GeoRSS.js","OpenLayers/Layer/Boxes.js","OpenLayers/Layer/TMS.js","OpenLayers/Layer/TileCache.js","OpenLayers/Popup/Anchored.js","OpenLayers/Popup/AnchoredBubble.js","OpenLayers/Popup/Framed.js","OpenLayers/Popup/FramedCloud.js","OpenLayers/Feature.js","OpenLayers/Feature/Vector.js","OpenLayers/Feature/WFS.js","OpenLayers/Handler.js","OpenLayers/Handler/Click.js","OpenLayers/Handler/Hover.js","OpenLayers/Handler/Point.js","OpenLayers/Handler/Path.js","OpenLayers/Handler/Polygon.js","OpenLayers/Handler/Feature.js","OpenLayers/Handler/Drag.js","OpenLayers/Handler/RegularPolygon.js","OpenLayers/Handler/Box.js","OpenLayers/Handler/MouseWheel.js","OpenLayers/Handler/Keyboard.js","OpenLayers/Control.js","OpenLayers/Control/Attribution.js","OpenLayers/Control/Button.js","OpenLayers/Control/ZoomBox.js","OpenLayers/Control/ZoomToMaxExtent.js","OpenLayers/Control/DragPan.js","OpenLayers/Control/Navigation.js","OpenLayers/Control/MouseDefaults.js","OpenLayers/Control/MousePosition.js","OpenLayers/Control/OverviewMap.js","OpenLayers/Control/KeyboardDefaults.js","OpenLayers/Control/PanZoom.js","OpenLayers/Control/PanZoomBar.js","OpenLayers/Control/ArgParser.js","OpenLayers/Control/Permalink.js","OpenLayers/Control/Scale.js","OpenLayers/Control/ScaleLine.js","OpenLayers/Control/LayerSwitcher.js","OpenLayers/Control/DrawFeature.js","OpenLayers/Control/DragFeature.js","OpenLayers/Control/ModifyFeature.js","OpenLayers/Control/Panel.js","OpenLayers/Control/SelectFeature.js","OpenLayers/Control/NavigationHistory.js","OpenLayers/Control/Measure.js","OpenLayers/Geometry.js","OpenLayers/Geometry/Rectangle.js","OpenLayers/Geometry/Collection.js","OpenLayers/Geometry/Point.js","OpenLayers/Geometry/MultiPoint.js","OpenLayers/Geometry/Curve.js","OpenLayers/Geometry/LineString.js","OpenLayers/Geometry/LinearRing.js","OpenLayers/Geometry/Polygon.js","OpenLayers/Geometry/MultiLineString.js","OpenLayers/Geometry/MultiPolygon.js","OpenLayers/Geometry/Surface.js","OpenLayers/Renderer.js","OpenLayers/Renderer/Elements.js","OpenLayers/Renderer/SVG.js","OpenLayers/Renderer/Canvas.js","OpenLayers/Renderer/VML.js","OpenLayers/Layer/Vector.js","OpenLayers/Strategy.js","OpenLayers/Strategy/Fixed.js","OpenLayers/Strategy/Cluster.js","OpenLayers/Strategy/Paging.js","OpenLayers/Strategy/BBOX.js","OpenLayers/Protocol.js","OpenLayers/Protocol/HTTP.js","OpenLayers/Protocol/SQL.js","OpenLayers/Protocol/SQL/Gears.js","OpenLayers/Layer/PointTrack.js","OpenLayers/Layer/GML.js","OpenLayers/Style.js","OpenLayers/StyleMap.js","OpenLayers/Rule.js","OpenLayers/Filter.js","OpenLayers/Filter/FeatureId.js","OpenLayers/Filter/Logical.js","OpenLayers/Filter/Comparison.js","OpenLayers/Filter/Spatial.js","OpenLayers/Format.js","OpenLayers/Format/XML.js","OpenLayers/Format/GML.js","OpenLayers/Format/GML/Base.js","OpenLayers/Format/GML/v2.js","OpenLayers/Format/GML/v3.js","OpenLayers/Format/KML.js","OpenLayers/Format/GeoRSS.js","OpenLayers/Format/WFS.js","OpenLayers/Format/WKT.js","OpenLayers/Format/OSM.js","OpenLayers/Format/GPX.js","OpenLayers/Format/SLD.js","OpenLayers/Format/SLD/v1.js","OpenLayers/Format/SLD/v1_0_0.js","OpenLayers/Format/SLD/v1.js","OpenLayers/Format/Filter.js","OpenLayers/Format/Filter/v1.js","OpenLayers/Format/Filter/v1_0_0.js","OpenLayers/Format/Text.js","OpenLayers/Format/JSON.js","OpenLayers/Format/GeoJSON.js","OpenLayers/Format/WMC.js","OpenLayers/Format/WMC/v1.js","OpenLayers/Format/WMC/v1_0_0.js","OpenLayers/Format/WMC/v1_1_0.js","OpenLayers/Layer/WFS.js","OpenLayers/Control/MouseToolbar.js","OpenLayers/Control/NavToolbar.js","OpenLayers/Control/PanPanel.js","OpenLayers/Control/Pan.js","OpenLayers/Control/ZoomIn.js","OpenLayers/Control/ZoomOut.js","OpenLayers/Control/ZoomPanel.js","OpenLayers/Control/EditingToolbar.js","OpenLayers/Lang.js","OpenLayers/Lang/en.js");var agent=navigator.userAgent;var docWrite=(agent.match("MSIE")||agent.match("Safari"));if(docWrite){var allScriptTags=new Array(jsfiles.length);}
var host=OpenLayers._getScriptLocation()+"lib/";for(var i=0,len=jsfiles.length;i<len;i++){if(docWrite){allScriptTags[i]="<script src='"+host+jsfiles[i]+"'></script>";}else{var s=document.createElement("script");s.src=host+jsfiles[i];var h=document.getElementsByTagName("head").length?document.getElementsByTagName("head")[0]:document.body;h.appendChild(s);}}
if(docWrite){document.write(allScriptTags.join(""));}}})();OpenLayers.VERSION_NUMBER="$Revision: 8012 $";OpenLayers.String={startsWith:function(str,sub){return(str.indexOf(sub)==0);},contains:function(str,sub){return(str.indexOf(sub)!=-1);},trim:function(str){return str.replace(/^\s*(.*?)\s*$/,"$1");},camelize:function(str){var oStringList=str.split('-');var camelizedString=oStringList[0];for(var i=1,len=oStringList.length;i<len;i++){var s=oStringList[i];camelizedString+=s.charAt(0).toUpperCase()+s.substring(1);}
return camelizedString;},format:function(template,context,args){if(!context){context=window;}
var tokens=template.split("${");var item,last,replacement;for(var i=1,len=tokens.length;i<len;i++){item=tokens[i];last=item.indexOf("}");if(last>0){replacement=context[item.substring(0,last)];if(typeof replacement=="function"){replacement=args?replacement.apply(null,args):replacement();}
tokens[i]=replacement+item.substring(++last);}else{tokens[i]="${"+item;}}
return tokens.join("");},numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(value){return OpenLayers.String.numberRegEx.test(value);}};if(!String.prototype.startsWith){String.prototype.startsWith=function(sStart){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.startsWith'}));return OpenLayers.String.startsWith(this,sStart);};}
if(!String.prototype.contains){String.prototype.contains=function(str){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.contains'}));return OpenLayers.String.contains(this,str);};}
if(!String.prototype.trim){String.prototype.trim=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.trim'}));return OpenLayers.String.trim(this);};}
if(!String.prototype.camelize){String.prototype.camelize=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.camelize'}));return OpenLayers.String.camelize(this);};}
OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(num,sig){var fig=0;if(sig>0){fig=parseFloat(num.toPrecision(sig));}
return fig;},format:function(num,dec,tsep,dsep){dec=(typeof dec!="undefined")?dec:0;tsep=(typeof tsep!="undefined")?tsep:OpenLayers.Number.thousandsSeparator;dsep=(typeof dsep!="undefined")?dsep:OpenLayers.Number.decimalSeparator;if(dec!=null){num=parseFloat(num.toFixed(dec));}
var parts=num.toString().split(".");if(parts.length==1&&dec==null){dec=0;}
var integer=parts[0];if(tsep){var thousands=/(-?[0-9]+)([0-9]{3})/;while(thousands.test(integer)){integer=integer.replace(thousands,"$1"+tsep+"$2");}}
var str;if(dec==0){str=integer;}else{var rem=parts.length>1?parts[1]:"0";if(dec!=null){rem=rem+new Array(dec-rem.length+1).join("0");}
str=integer+dsep+rem;}
return str;}};if(!Number.prototype.limitSigDigs){Number.prototype.limitSigDigs=function(sig){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Number.limitSigDigs'}));return OpenLayers.Number.limitSigDigs(this,sig);};}
OpenLayers.Function={bind:function(func,object){var args=Array.prototype.slice.apply(arguments,[2]);return function(){var newArgs=args.concat(Array.prototype.slice.apply(arguments,[0]));return func.apply(object,newArgs);};},bindAsEventListener:function(func,object){return function(event){return func.call(object,event||window.event);};}};if(!Function.prototype.bind){Function.prototype.bind=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Function.bind'}));Array.prototype.unshift.apply(arguments,[this]);return OpenLayers.Function.bind.apply(null,arguments);};}
if(!Function.prototype.bindAsEventListener){Function.prototype.bindAsEventListener=function(object){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Function.bindAsEventListener'}));return OpenLayers.Function.bindAsEventListener(this,object);};}
OpenLayers.Array={filter:function(array,callback,caller){var selected=[];if(Array.prototype.filter){selected=array.filter(callback,caller);}else{var len=array.length;if(typeof callback!="function"){throw new TypeError();}
for(var i=0;i<len;i++){if(i in array){var val=array[i];if(callback.call(caller,val,i,array)){selected.push(val);}}}}
return selected;}};OpenLayers.Class=function(){var Class=function(){if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){this.initialize.apply(this,arguments);}};var extended={};var parent;for(var i=0,len=arguments.length;i<len;++i){if(typeof arguments[i]=="function"){parent=arguments[i].prototype;}else{parent=arguments[i];}
OpenLayers.Util.extend(extended,parent);}
Class.prototype=extended;return Class;};OpenLayers.Class.isPrototype=function(){};OpenLayers.Class.create=function(){return function(){if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){this.initialize.apply(this,arguments);}};};OpenLayers.Class.inherit=function(){var superClass=arguments[0];var proto=new superClass(OpenLayers.Class.isPrototype);for(var i=1,len=arguments.length;i<len;i++){if(typeof arguments[i]=="function"){var mixin=arguments[i];arguments[i]=new mixin(OpenLayers.Class.isPrototype);}
OpenLayers.Util.extend(proto,arguments[i]);}
return proto;};OpenLayers.Util={};OpenLayers.Util.getElement=function(){var elements=[];for(var i=0,len=arguments.length;i<len;i++){var element=arguments[i];if(typeof element=='string'){element=document.getElementById(element);}
if(arguments.length==1){return element;}
elements.push(element);}
return elements;};if($==null){var $=OpenLayers.Util.getElement;}
OpenLayers.Util.extend=function(destination,source){destination=destination||{};if(source){for(var property in source){var value=source[property];if(value!==undefined){destination[property]=value;}}
var sourceIsEvt=typeof window.Event=="function"&&source instanceof window.Event;if(!sourceIsEvt&&source.hasOwnProperty&&source.hasOwnProperty('toString')){destination.toString=source.toString;}}
return destination;};OpenLayers.Util.removeItem=function(array,item){for(var i=array.length-1;i>=0;i--){if(array[i]==item){array.splice(i,1);}}
return array;};OpenLayers.Util.clearArray=function(array){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'array = []'}));array.length=0;};OpenLayers.Util.indexOf=function(array,obj){for(var i=0,len=array.length;i<len;i++){if(array[i]==obj){return i;}}
return-1;};OpenLayers.Util.modifyDOMElement=function(element,id,px,sz,position,border,overflow,opacity){if(id){element.id=id;}
if(px){element.style.left=px.x+"px";element.style.top=px.y+"px";}
if(sz){element.style.width=sz.w+"px";element.style.height=sz.h+"px";}
if(position){element.style.position=position;}
if(border){element.style.border=border;}
if(overflow){element.style.overflow=overflow;}
if(parseFloat(opacity)>=0.0&&parseFloat(opacity)<1.0){element.style.filter='alpha(opacity='+(opacity*100)+')';element.style.opacity=opacity;}else if(parseFloat(opacity)==1.0){element.style.filter='';element.style.opacity='';}};OpenLayers.Util.createDiv=function(id,px,sz,imgURL,position,border,overflow,opacity){var dom=document.createElement('div');if(imgURL){dom.style.backgroundImage='url('+imgURL+')';}
if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="absolute";}
OpenLayers.Util.modifyDOMElement(dom,id,px,sz,position,border,overflow,opacity);return dom;};OpenLayers.Util.createImage=function(id,px,sz,imgURL,position,border,opacity,delayDisplay){var image=document.createElement("img");if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="relative";}
OpenLayers.Util.modifyDOMElement(image,id,px,sz,position,border,null,opacity);if(delayDisplay){image.style.display="none";OpenLayers.Event.observe(image,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,image));OpenLayers.Event.observe(image,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,image));}
image.style.alt=id;image.galleryImg="no";if(imgURL){image.src=imgURL;}
return image;};OpenLayers.Util.setOpacity=function(element,opacity){OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);};OpenLayers.Util.onImageLoad=function(){if(!this.viewRequestID||(this.map&&this.viewRequestID==this.map.viewRequestID)){this.style.backgroundColor=null;this.style.display="";}};OpenLayers.Util.onImageLoadErrorColor="pink";OpenLayers.IMAGE_RELOAD_ATTEMPTS=0;OpenLayers.Util.onImageLoadError=function(){this._attempts=(this._attempts)?(this._attempts+1):1;if(this._attempts<=OpenLayers.IMAGE_RELOAD_ATTEMPTS){var urls=this.urls;if(urls&&urls instanceof Array&&urls.length>1){var src=this.src.toString();var current_url,k;for(k=0;current_url=urls[k];k++){if(src.indexOf(current_url)!=-1){break;}}
var guess=Math.floor(urls.length*Math.random());var new_url=urls[guess];k=0;while(new_url==current_url&&k++<4){guess=Math.floor(urls.length*Math.random());new_url=urls[guess];}
this.src=src.replace(current_url,new_url);}else{this.src=this.src;}}else{this.style.backgroundColor=OpenLayers.Util.onImageLoadErrorColor;}
this.style.display="";};OpenLayers.Util.alphaHack=function(){var arVersion=navigator.appVersion.split("MSIE");var version=parseFloat(arVersion[1]);var filter=false;try{filter=!!(document.body.filters);}catch(e){}
return(filter&&(version>=5.5)&&(version<7));};OpenLayers.Util.modifyAlphaImageDiv=function(div,id,px,sz,imgURL,position,border,sizing,opacity){OpenLayers.Util.modifyDOMElement(div,id,px,sz,position,null,null,opacity);var img=div.childNodes[0];if(imgURL){img.src=imgURL;}
OpenLayers.Util.modifyDOMElement(img,div.id+"_innerImage",null,sz,"relative",border);if(OpenLayers.Util.alphaHack()){if(div.style.display!="none"){div.style.display="inline-block";}
if(sizing==null){sizing="scale";}
div.style.filter="progid:DXImageTransform.Microsoft"+".AlphaImageLoader(src='"+img.src+"', "+"sizingMethod='"+sizing+"')";if(parseFloat(div.style.opacity)>=0.0&&parseFloat(div.style.opacity)<1.0){div.style.filter+=" alpha(opacity="+div.style.opacity*100+")";}
img.style.filter="alpha(opacity=0)";}};OpenLayers.Util.createAlphaImageDiv=function(id,px,sz,imgURL,position,border,sizing,opacity,delayDisplay){var div=OpenLayers.Util.createDiv();var img=OpenLayers.Util.createImage(null,null,null,null,null,null,null,false);div.appendChild(img);if(delayDisplay){img.style.display="none";OpenLayers.Event.observe(img,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,div));OpenLayers.Event.observe(img,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,div));}
OpenLayers.Util.modifyAlphaImageDiv(div,id,px,sz,imgURL,position,border,sizing,opacity);return div;};OpenLayers.Util.upperCaseObject=function(object){var uObject={};for(var key in object){uObject[key.toUpperCase()]=object[key];}
return uObject;};OpenLayers.Util.applyDefaults=function(to,from){to=to||{};var fromIsEvt=typeof window.Event=="function"&&from instanceof window.Event;for(var key in from){if(to[key]===undefined||(!fromIsEvt&&from.hasOwnProperty&&from.hasOwnProperty(key)&&!to.hasOwnProperty(key))){to[key]=from[key];}}
if(!fromIsEvt&&from&&from.hasOwnProperty&&from.hasOwnProperty('toString')&&!to.hasOwnProperty('toString')){to.toString=from.toString;}
return to;};OpenLayers.Util.getParameterString=function(params){var paramsArray=[];for(var key in params){var value=params[key];if((value!=null)&&(typeof value!='function')){var encodedValue;if(typeof value=='object'&&value.constructor==Array){var encodedItemArray=[];for(var itemIndex=0,len=value.length;itemIndex<len;itemIndex++){encodedItemArray.push(encodeURIComponent(value[itemIndex]));}
encodedValue=encodedItemArray.join(",");}
else{encodedValue=encodeURIComponent(value);}
paramsArray.push(encodeURIComponent(key)+"="+encodedValue);}}
return paramsArray.join("&");};OpenLayers.ImgPath='';OpenLayers.Util.getImagesLocation=function(){return OpenLayers.ImgPath||(OpenLayers._getScriptLocation()+"img/");};OpenLayers.Util.Try=function(){var returnValue=null;for(var i=0,len=arguments.length;i<len;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;};OpenLayers.Util.getNodes=function(p,tagName){var nodes=OpenLayers.Util.Try(function(){return OpenLayers.Util._getNodes(p.documentElement.childNodes,tagName);},function(){return OpenLayers.Util._getNodes(p.childNodes,tagName);});return nodes;};OpenLayers.Util._getNodes=function(nodes,tagName){var retArray=[];for(var i=0,len=nodes.length;i<len;i++){if(nodes[i].nodeName==tagName){retArray.push(nodes[i]);}}
return retArray;};OpenLayers.Util.getTagText=function(parent,item,index){var result=OpenLayers.Util.getNodes(parent,item);if(result&&(result.length>0))
{if(!index){index=0;}
if(result[index].childNodes.length>1){return result.childNodes[1].nodeValue;}
else if(result[index].childNodes.length==1){return result[index].firstChild.nodeValue;}}else{return"";}};OpenLayers.Util.getXmlNodeValue=function(node){var val=null;OpenLayers.Util.Try(function(){val=node.text;if(!val){val=node.textContent;}
if(!val){val=node.firstChild.nodeValue;}},function(){val=node.textContent;});return val;};OpenLayers.Util.mouseLeft=function(evt,div){var target=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;while(target!=div&&target!=null){target=target.parentNode;}
return(target!=div);};OpenLayers.Util.rad=function(x){return x*Math.PI/180;};OpenLayers.Util.distVincenty=function(p1,p2){var a=6378137,b=6356752.3142,f=1/298.257223563;var L=OpenLayers.Util.rad(p2.lon-p1.lon);var U1=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p1.lat)));var U2=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p2.lat)));var sinU1=Math.sin(U1),cosU1=Math.cos(U1);var sinU2=Math.sin(U2),cosU2=Math.cos(U2);var lambda=L,lambdaP=2*Math.PI;var iterLimit=20;while(Math.abs(lambda-lambdaP)>1e-12&&--iterLimit>0){var sinLambda=Math.sin(lambda),cosLambda=Math.cos(lambda);var sinSigma=Math.sqrt((cosU2*sinLambda)*(cosU2*sinLambda)+
(cosU1*sinU2-sinU1*cosU2*cosLambda)*(cosU1*sinU2-sinU1*cosU2*cosLambda));if(sinSigma==0){return 0;}
var cosSigma=sinU1*sinU2+cosU1*cosU2*cosLambda;var sigma=Math.atan2(sinSigma,cosSigma);var alpha=Math.asin(cosU1*cosU2*sinLambda/sinSigma);var cosSqAlpha=Math.cos(alpha)*Math.cos(alpha);var cos2SigmaM=cosSigma-2*sinU1*sinU2/cosSqAlpha;var C=f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));lambdaP=lambda;lambda=L+(1-C)*f*Math.sin(alpha)*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));}
if(iterLimit==0){return NaN;}
var uSq=cosSqAlpha*(a*a-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));var s=b*A*(sigma-deltaSigma);var d=s.toFixed(3)/1000;return d;};OpenLayers.Util.getParameters=function(url){url=url||window.location.href;var paramsString="";if(OpenLayers.String.contains(url,'?')){var start=url.indexOf('?')+1;var end=OpenLayers.String.contains(url,"#")?url.indexOf('#'):url.length;paramsString=url.substring(start,end);}
var parameters={};var pairs=paramsString.split(/[&;]/);for(var i=0,len=pairs.length;i<len;++i){var keyValue=pairs[i].split('=');if(keyValue[0]){var key=decodeURIComponent(keyValue[0]);var value=keyValue[1]||'';value=value.split(",");for(var j=0,jlen=value.length;j<jlen;j++){value[j]=decodeURIComponent(value[j]);}
if(value.length==1){value=value[0];}
parameters[key]=value;}}
return parameters;};OpenLayers.Util.getArgs=function(url){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Util.getParameters'}));return OpenLayers.Util.getParameters(url);};OpenLayers.Util.lastSeqID=0;OpenLayers.Util.createUniqueID=function(prefix){if(prefix==null){prefix="id_";}
OpenLayers.Util.lastSeqID+=1;return prefix+OpenLayers.Util.lastSeqID;};OpenLayers.INCHES_PER_UNIT={'inches':1.0,'ft':12.0,'mi':63360.0,'m':39.3701,'km':39370.1,'dd':4374754,'yd':36};OpenLayers.INCHES_PER_UNIT["in"]=OpenLayers.INCHES_PER_UNIT.inches;OpenLayers.INCHES_PER_UNIT["degrees"]=OpenLayers.INCHES_PER_UNIT.dd;OpenLayers.INCHES_PER_UNIT["nmi"]=1852*OpenLayers.INCHES_PER_UNIT.m;OpenLayers.DOTS_PER_INCH=72;OpenLayers.Util.normalizeScale=function(scale){var normScale=(scale>1.0)?(1.0/scale):scale;return normScale;};OpenLayers.Util.getResolutionFromScale=function(scale,units){if(units==null){units="degrees";}
var normScale=OpenLayers.Util.normalizeScale(scale);var resolution=1/(normScale*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH);return resolution;};OpenLayers.Util.getScaleFromResolution=function(resolution,units){if(units==null){units="degrees";}
var scale=resolution*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH;return scale;};OpenLayers.Util.safeStopPropagation=function(evt){OpenLayers.Event.stop(evt,true);};OpenLayers.Util.pagePosition=function(forElement){var valueT=0,valueL=0;var element=forElement;var child=forElement;while(element){if(element==document.body){if(OpenLayers.Element.getStyle(child,'position')=='absolute'){break;}}
valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;child=element;try{element=element.offsetParent;}catch(e){OpenLayers.Console.error(OpenLayers.i18n("pagePositionFailed",{'elemId':element.id}));break;}}
element=forElement;while(element){valueT-=element.scrollTop||0;valueL-=element.scrollLeft||0;element=element.parentNode;}
return[valueL,valueT];};OpenLayers.Util.isEquivalentUrl=function(url1,url2,options){options=options||{};OpenLayers.Util.applyDefaults(options,{ignoreCase:true,ignorePort80:true,ignoreHash:true});var urlObj1=OpenLayers.Util.createUrlObject(url1,options);var urlObj2=OpenLayers.Util.createUrlObject(url2,options);for(var key in urlObj1){if(options.test){OpenLayers.Console.userError(key+"\n1:"+urlObj1[key]+"\n2:"+urlObj2[key]);}
var val1=urlObj1[key];var val2=urlObj2[key];switch(key){case"args":break;case"host":case"port":case"protocol":if((val1=="")||(val2=="")){break;}
default:if((key!="args")&&(urlObj1[key]!=urlObj2[key])){return false;}
break;}}
for(var key in urlObj1.args){if(urlObj1.args[key]!=urlObj2.args[key]){return false;}
delete urlObj2.args[key];}
for(var key in urlObj2.args){return false;}
return true;};OpenLayers.Util.createUrlObject=function(url,options){options=options||{};var urlObject={};if(options.ignoreCase){url=url.toLowerCase();}
var a=document.createElement('a');a.href=url;urlObject.host=a.host;var port=a.port;if(port.length<=0){var newHostLength=urlObject.host.length-(port.length);urlObject.host=urlObject.host.substring(0,newHostLength);}
urlObject.protocol=a.protocol;urlObject.port=((port=="80")&&(options.ignorePort80))?"":port;urlObject.hash=(options.ignoreHash)?"":a.hash;var queryString=a.search;if(!queryString){var qMark=url.indexOf("?");queryString=(qMark!=-1)?url.substr(qMark):"";}
urlObject.args=OpenLayers.Util.getParameters(queryString);if(((urlObject.protocol=="file:")&&(url.indexOf("file:")!=-1))||((urlObject.protocol!="file:")&&(urlObject.host!=""))){urlObject.pathname=a.pathname;var qIndex=urlObject.pathname.indexOf("?");if(qIndex!=-1){urlObject.pathname=urlObject.pathname.substring(0,qIndex);}}else{var relStr=OpenLayers.Util.removeTail(url);var backs=0;do{var index=relStr.indexOf("../");if(index==0){backs++;relStr=relStr.substr(3);}else if(index>=0){var prevChunk=relStr.substr(0,index-1);var slash=prevChunk.indexOf("/");prevChunk=(slash!=-1)?prevChunk.substr(0,slash+1):"";var postChunk=relStr.substr(index+3);relStr=prevChunk+postChunk;}}while(index!=-1)
var windowAnchor=document.createElement("a");var windowUrl=window.location.href;if(options.ignoreCase){windowUrl=windowUrl.toLowerCase();}
windowAnchor.href=windowUrl;urlObject.protocol=windowAnchor.protocol;var splitter=(windowAnchor.pathname.indexOf("/")!=-1)?"/":"\\";var dirs=windowAnchor.pathname.split(splitter);dirs.pop();while((backs>0)&&(dirs.length>0)){dirs.pop();backs--;}
relStr=dirs.join("/")+"/"+relStr;urlObject.pathname=relStr;}
if((urlObject.protocol=="file:")||(urlObject.protocol=="")){urlObject.host="localhost";}
return urlObject;};OpenLayers.Util.removeTail=function(url){var head=null;var qMark=url.indexOf("?");var hashMark=url.indexOf("#");if(qMark==-1){head=(hashMark!=-1)?url.substr(0,hashMark):url;}else{head=(hashMark!=-1)?url.substr(0,Math.min(qMark,hashMark)):url.substr(0,qMark);}
return head;};OpenLayers.Util.getBrowserName=function(){var browserName="";var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("opera")!=-1){browserName="opera";}else if(ua.indexOf("msie")!=-1){browserName="msie";}else if(ua.indexOf("safari")!=-1){browserName="safari";}else if(ua.indexOf("mozilla")!=-1){if(ua.indexOf("firefox")!=-1){browserName="firefox";}else{browserName="mozilla";}}
return browserName;};OpenLayers.Util.getRenderedDimensions=function(contentHTML,size,options){var w,h;var container=document.createElement("div");container.style.overflow="";container.style.position="absolute";container.style.left="-9999px";if(size){if(size.w){w=size.w;container.style.width=w+"px";}else if(size.h){h=size.h;container.style.height=h+"px";}}
if(options&&options.displayClass){container.className=options.displayClass;}
var content=document.createElement("div");content.innerHTML=contentHTML;container.appendChild(content);document.body.appendChild(container);if(!w){w=parseInt(content.scrollWidth);container.style.width=w+"px";}
if(!h){h=parseInt(content.scrollHeight);}
container.removeChild(content);document.body.removeChild(container);return new OpenLayers.Size(w,h);};OpenLayers.Util.getScrollbarWidth=function(){var scrollbarWidth=OpenLayers.Util._scrollbarWidth;if(scrollbarWidth==null){var scr=null;var inn=null;var wNoScroll=0;var wScroll=0;scr=document.createElement('div');scr.style.position='absolute';scr.style.top='-1000px';scr.style.left='-1000px';scr.style.width='100px';scr.style.height='50px';scr.style.overflow='hidden';inn=document.createElement('div');inn.style.width='100%';inn.style.height='200px';scr.appendChild(inn);document.body.appendChild(scr);wNoScroll=inn.offsetWidth;scr.style.overflow='scroll';wScroll=inn.offsetWidth;document.body.removeChild(document.body.lastChild);OpenLayers.Util._scrollbarWidth=(wNoScroll-wScroll);scrollbarWidth=OpenLayers.Util._scrollbarWidth;}
return scrollbarWidth;};OpenLayers.Rico=new Object();OpenLayers.Rico.Corner={round:function(e,options){e=OpenLayers.Util.getElement(e);this._setOptions(options);var color=this.options.color;if(this.options.color=="fromElement"){color=this._background(e);}
var bgColor=this.options.bgColor;if(this.options.bgColor=="fromParent"){bgColor=this._background(e.offsetParent);}
this._roundCornersImpl(e,color,bgColor);},changeColor:function(theDiv,newColor){theDiv.style.backgroundColor=newColor;var spanElements=theDiv.parentNode.getElementsByTagName("span");for(var currIdx=0;currIdx<spanElements.length;currIdx++){spanElements[currIdx].style.backgroundColor=newColor;}},changeOpacity:function(theDiv,newOpacity){var mozillaOpacity=newOpacity;var ieOpacity='alpha(opacity='+newOpacity*100+')';theDiv.style.opacity=mozillaOpacity;theDiv.style.filter=ieOpacity;var spanElements=theDiv.parentNode.getElementsByTagName("span");for(var currIdx=0;currIdx<spanElements.length;currIdx++){spanElements[currIdx].style.opacity=mozillaOpacity;spanElements[currIdx].style.filter=ieOpacity;}},reRound:function(theDiv,options){var topRico=theDiv.parentNode.childNodes[0];var bottomRico=theDiv.parentNode.childNodes[2];theDiv.parentNode.removeChild(topRico);theDiv.parentNode.removeChild(bottomRico);this.round(theDiv.parentNode,options);},_roundCornersImpl:function(e,color,bgColor){if(this.options.border){this._renderBorder(e,bgColor);}
if(this._isTopRounded()){this._roundTopCorners(e,color,bgColor);}
if(this._isBottomRounded()){this._roundBottomCorners(e,color,bgColor);}},_renderBorder:function(el,bgColor){var borderValue="1px solid "+this._borderColor(bgColor);var borderL="border-left: "+borderValue;var borderR="border-right: "+borderValue;var style="style='"+borderL+";"+borderR+"'";el.innerHTML="<div "+style+">"+el.innerHTML+"</div>";},_roundTopCorners:function(el,color,bgColor){var corner=this._createCorner(bgColor);for(var i=0;i<this.options.numSlices;i++){corner.appendChild(this._createCornerSlice(color,bgColor,i,"top"));}
el.style.paddingTop=0;el.insertBefore(corner,el.firstChild);},_roundBottomCorners:function(el,color,bgColor){var corner=this._createCorner(bgColor);for(var i=(this.options.numSlices-1);i>=0;i--){corner.appendChild(this._createCornerSlice(color,bgColor,i,"bottom"));}
el.style.paddingBottom=0;el.appendChild(corner);},_createCorner:function(bgColor){var corner=document.createElement("div");corner.style.backgroundColor=(this._isTransparent()?"transparent":bgColor);return corner;},_createCornerSlice:function(color,bgColor,n,position){var slice=document.createElement("span");var inStyle=slice.style;inStyle.backgroundColor=color;inStyle.display="block";inStyle.height="1px";inStyle.overflow="hidden";inStyle.fontSize="1px";var borderColor=this._borderColor(color,bgColor);if(this.options.border&&n==0){inStyle.borderTopStyle="solid";inStyle.borderTopWidth="1px";inStyle.borderLeftWidth="0px";inStyle.borderRightWidth="0px";inStyle.borderBottomWidth="0px";inStyle.height="0px";inStyle.borderColor=borderColor;}
else if(borderColor){inStyle.borderColor=borderColor;inStyle.borderStyle="solid";inStyle.borderWidth="0px 1px";}
if(!this.options.compact&&(n==(this.options.numSlices-1))){inStyle.height="2px";}
this._setMargin(slice,n,position);this._setBorder(slice,n,position);return slice;},_setOptions:function(options){this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false};OpenLayers.Util.extend(this.options,options||{});this.options.numSlices=this.options.compact?2:4;if(this._isTransparent()){this.options.blend=false;}},_whichSideTop:function(){if(this._hasString(this.options.corners,"all","top")){return"";}
if(this.options.corners.indexOf("tl")>=0&&this.options.corners.indexOf("tr")>=0){return"";}
if(this.options.corners.indexOf("tl")>=0){return"left";}else if(this.options.corners.indexOf("tr")>=0){return"right";}
return"";},_whichSideBottom:function(){if(this._hasString(this.options.corners,"all","bottom")){return"";}
if(this.options.corners.indexOf("bl")>=0&&this.options.corners.indexOf("br")>=0){return"";}
if(this.options.corners.indexOf("bl")>=0){return"left";}else if(this.options.corners.indexOf("br")>=0){return"right";}
return"";},_borderColor:function(color,bgColor){if(color=="transparent"){return bgColor;}else if(this.options.border){return this.options.border;}else if(this.options.blend){return this._blend(bgColor,color);}else{return"";}},_setMargin:function(el,n,corners){var marginSize=this._marginSize(n);var whichSide=corners=="top"?this._whichSideTop():this._whichSideBottom();if(whichSide=="left"){el.style.marginLeft=marginSize+"px";el.style.marginRight="0px";}
else if(whichSide=="right"){el.style.marginRight=marginSize+"px";el.style.marginLeft="0px";}
else{el.style.marginLeft=marginSize+"px";el.style.marginRight=marginSize+"px";}},_setBorder:function(el,n,corners){var borderSize=this._borderSize(n);var whichSide=corners=="top"?this._whichSideTop():this._whichSideBottom();if(whichSide=="left"){el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth="0px";}
else if(whichSide=="right"){el.style.borderRightWidth=borderSize+"px";el.style.borderLeftWidth="0px";}
else{el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth=borderSize+"px";}
if(this.options.border!=false){el.style.borderLeftWidth=borderSize+"px";el.style.borderRightWidth=borderSize+"px";}},_marginSize:function(n){if(this._isTransparent()){return 0;}
var marginSizes=[5,3,2,1];var blendedMarginSizes=[3,2,1,0];var compactMarginSizes=[2,1];var smBlendedMarginSizes=[1,0];if(this.options.compact&&this.options.blend){return smBlendedMarginSizes[n];}else if(this.options.compact){return compactMarginSizes[n];}else if(this.options.blend){return blendedMarginSizes[n];}else{return marginSizes[n];}},_borderSize:function(n){var transparentBorderSizes=[5,3,2,1];var blendedBorderSizes=[2,1,1,1];var compactBorderSizes=[1,0];var actualBorderSizes=[0,2,0,0];if(this.options.compact&&(this.options.blend||this._isTransparent())){return 1;}else if(this.options.compact){return compactBorderSizes[n];}else if(this.options.blend){return blendedBorderSizes[n];}else if(this.options.border){return actualBorderSizes[n];}else if(this._isTransparent()){return transparentBorderSizes[n];}
return 0;},_hasString:function(str){for(var i=1;i<arguments.length;i++)if(str.indexOf(arguments[i])>=0){return true;}return false;},_blend:function(c1,c2){var cc1=OpenLayers.Rico.Color.createFromHex(c1);cc1.blend(OpenLayers.Rico.Color.createFromHex(c2));return cc1;},_background:function(el){try{return OpenLayers.Rico.Color.createColorFromBackground(el).asHex();}catch(err){return"#ffffff";}},_isTransparent:function(){return this.options.color=="transparent";},_isTopRounded:function(){return this._hasString(this.options.corners,"all","top","tl","tr");},_isBottomRounded:function(){return this._hasString(this.options.corners,"all","bottom","bl","br");},_hasSingleTextChild:function(el){return el.childNodes.length==1&&el.childNodes[0].nodeType==3;}};(function(){if(window.google&&google.gears){return;}
var factory=null;if(typeof GearsFactory!='undefined'){factory=new GearsFactory();}else{try{factory=new ActiveXObject('Gears.Factory');if(factory.getBuildInfo().indexOf('ie_mobile')!=-1){factory.privateSetGlobalObject(this);}}catch(e){if((typeof navigator.mimeTypes!='undefined')&&navigator.mimeTypes["application/x-googlegears"]){factory=document.createElement("object");factory.style.display="none";factory.width=0;factory.height=0;factory.type="application/x-googlegears";document.documentElement.appendChild(factory);}}}
if(!factory){return;}
if(!window.google){google={};}
if(!google.gears){google.gears={factory:factory};}})();OpenLayers.Bounds=OpenLayers.Class({left:null,bottom:null,right:null,top:null,initialize:function(left,bottom,right,top){if(left!=null){this.left=parseFloat(left);}
if(bottom!=null){this.bottom=parseFloat(bottom);}
if(right!=null){this.right=parseFloat(right);}
if(top!=null){this.top=parseFloat(top);}},clone:function(){return new OpenLayers.Bounds(this.left,this.bottom,this.right,this.top);},equals:function(bounds){var equals=false;if(bounds!=null){equals=((this.left==bounds.left)&&(this.right==bounds.right)&&(this.top==bounds.top)&&(this.bottom==bounds.bottom));}
return equals;},toString:function(){return("left-bottom=("+this.left+","+this.bottom+")"
+" right-top=("+this.right+","+this.top+")");},toArray:function(){return[this.left,this.bottom,this.right,this.top];},toBBOX:function(decimal){if(decimal==null){decimal=6;}
var mult=Math.pow(10,decimal);var bbox=Math.round(this.left*mult)/mult+","+
Math.round(this.bottom*mult)/mult+","+
Math.round(this.right*mult)/mult+","+
Math.round(this.top*mult)/mult;return bbox;},toGeometry:function(){return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left,this.bottom),new OpenLayers.Geometry.Point(this.right,this.bottom),new OpenLayers.Geometry.Point(this.right,this.top),new OpenLayers.Geometry.Point(this.left,this.top)])]);},getWidth:function(){return(this.right-this.left);},getHeight:function(){return(this.top-this.bottom);},getSize:function(){return new OpenLayers.Size(this.getWidth(),this.getHeight());},getCenterPixel:function(){return new OpenLayers.Pixel((this.left+this.right)/2,(this.bottom+this.top)/2);},getCenterLonLat:function(){return new OpenLayers.LonLat((this.left+this.right)/2,(this.bottom+this.top)/2);},scale:function(ratio,origin){if(origin==null){origin=this.getCenterLonLat();}
var bounds=[];var origx,origy;if(origin.CLASS_NAME=="OpenLayers.LonLat"){origx=origin.lon;origy=origin.lat;}else{origx=origin.x;origy=origin.y;}
var left=(this.left-origx)*ratio+origx;var bottom=(this.bottom-origy)*ratio+origy;var right=(this.right-origx)*ratio+origx;var top=(this.top-origy)*ratio+origy;return new OpenLayers.Bounds(left,bottom,right,top);},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("boundsAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Bounds(this.left+x,this.bottom+y,this.right+x,this.top+y);},extend:function(object){var bounds=null;if(object){switch(object.CLASS_NAME){case"OpenLayers.LonLat":bounds=new OpenLayers.Bounds(object.lon,object.lat,object.lon,object.lat);break;case"OpenLayers.Geometry.Point":bounds=new OpenLayers.Bounds(object.x,object.y,object.x,object.y);break;case"OpenLayers.Bounds":bounds=object;break;}
if(bounds){if((this.left==null)||(bounds.left<this.left)){this.left=bounds.left;}
if((this.bottom==null)||(bounds.bottom<this.bottom)){this.bottom=bounds.bottom;}
if((this.right==null)||(bounds.right>this.right)){this.right=bounds.right;}
if((this.top==null)||(bounds.top>this.top)){this.top=bounds.top;}}}},containsLonLat:function(ll,inclusive){return this.contains(ll.lon,ll.lat,inclusive);},containsPixel:function(px,inclusive){return this.contains(px.x,px.y,inclusive);},contains:function(x,y,inclusive){if(inclusive==null){inclusive=true;}
var contains=false;if(inclusive){contains=((x>=this.left)&&(x<=this.right)&&(y>=this.bottom)&&(y<=this.top));}else{contains=((x>this.left)&&(x<this.right)&&(y>this.bottom)&&(y<this.top));}
return contains;},intersectsBounds:function(bounds,inclusive){if(inclusive==null){inclusive=true;}
var inBottom=(bounds.bottom==this.bottom&&bounds.top==this.top)?true:(((bounds.bottom>this.bottom)&&(bounds.bottom<this.top))||((this.bottom>bounds.bottom)&&(this.bottom<bounds.top)));var inTop=(bounds.bottom==this.bottom&&bounds.top==this.top)?true:(((bounds.top>this.bottom)&&(bounds.top<this.top))||((this.top>bounds.bottom)&&(this.top<bounds.top)));var inRight=(bounds.right==this.right&&bounds.left==this.left)?true:(((bounds.right>this.left)&&(bounds.right<this.right))||((this.right>bounds.left)&&(this.right<bounds.right)));var inLeft=(bounds.right==this.right&&bounds.left==this.left)?true:(((bounds.left>this.left)&&(bounds.left<this.right))||((this.left>bounds.left)&&(this.left<bounds.right)));return(this.containsBounds(bounds,true,inclusive)||bounds.containsBounds(this,true,inclusive)||((inTop||inBottom)&&(inLeft||inRight)));},containsBounds:function(bounds,partial,inclusive){if(partial==null){partial=false;}
if(inclusive==null){inclusive=true;}
var inLeft;var inTop;var inRight;var inBottom;if(inclusive){inLeft=(bounds.left>=this.left)&&(bounds.left<=this.right);inTop=(bounds.top>=this.bottom)&&(bounds.top<=this.top);inRight=(bounds.right>=this.left)&&(bounds.right<=this.right);inBottom=(bounds.bottom>=this.bottom)&&(bounds.bottom<=this.top);}else{inLeft=(bounds.left>this.left)&&(bounds.left<this.right);inTop=(bounds.top>this.bottom)&&(bounds.top<this.top);inRight=(bounds.right>this.left)&&(bounds.right<this.right);inBottom=(bounds.bottom>this.bottom)&&(bounds.bottom<this.top);}
return(partial)?(inTop||inBottom)&&(inLeft||inRight):(inTop&&inLeft&&inBottom&&inRight);},determineQuadrant:function(lonlat){var quadrant="";var center=this.getCenterLonLat();quadrant+=(lonlat.lat<center.lat)?"b":"t";quadrant+=(lonlat.lon<center.lon)?"l":"r";return quadrant;},transform:function(source,dest){var ll=OpenLayers.Projection.transform({'x':this.left,'y':this.bottom},source,dest);var lr=OpenLayers.Projection.transform({'x':this.right,'y':this.bottom},source,dest);var ul=OpenLayers.Projection.transform({'x':this.left,'y':this.top},source,dest);var ur=OpenLayers.Projection.transform({'x':this.right,'y':this.top},source,dest);this.left=Math.min(ll.x,ul.x);this.bottom=Math.min(ll.y,lr.y);this.right=Math.max(lr.x,ur.x);this.top=Math.max(ul.y,ur.y);return this;},wrapDateLine:function(maxExtent,options){options=options||{};var leftTolerance=options.leftTolerance||0;var rightTolerance=options.rightTolerance||0;var newBounds=this.clone();if(maxExtent){while(newBounds.left<maxExtent.left&&(newBounds.right-rightTolerance)<=maxExtent.left){newBounds=newBounds.add(maxExtent.getWidth(),0);}
while((newBounds.left+leftTolerance)>=maxExtent.right&&newBounds.right>maxExtent.right){newBounds=newBounds.add(-maxExtent.getWidth(),0);}}
return newBounds;},CLASS_NAME:"OpenLayers.Bounds"});OpenLayers.Bounds.fromString=function(str){var bounds=str.split(",");return OpenLayers.Bounds.fromArray(bounds);};OpenLayers.Bounds.fromArray=function(bbox){return new OpenLayers.Bounds(parseFloat(bbox[0]),parseFloat(bbox[1]),parseFloat(bbox[2]),parseFloat(bbox[3]));};OpenLayers.Bounds.fromSize=function(size){return new OpenLayers.Bounds(0,size.h,size.w,0);};OpenLayers.Bounds.oppositeQuadrant=function(quadrant){var opp="";opp+=(quadrant.charAt(0)=='t')?'b':'t';opp+=(quadrant.charAt(1)=='l')?'r':'l';return opp;};OpenLayers.Element={visible:function(element){return OpenLayers.Util.getElement(element).style.display!='none';},toggle:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);var display=OpenLayers.Element.visible(element)?'hide':'show';OpenLayers.Element[display](element);}},hide:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);element.style.display='none';}},show:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);element.style.display='';}},remove:function(element){element=OpenLayers.Util.getElement(element);element.parentNode.removeChild(element);},getHeight:function(element){element=OpenLayers.Util.getElement(element);return element.offsetHeight;},getDimensions:function(element){element=OpenLayers.Util.getElement(element);if(OpenLayers.Element.getStyle(element,'display')!='none'){return{width:element.offsetWidth,height:element.offsetHeight};}
var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;els.visibility='hidden';els.position='absolute';els.display='';var originalWidth=element.clientWidth;var originalHeight=element.clientHeight;els.display='none';els.position=originalPosition;els.visibility=originalVisibility;return{width:originalWidth,height:originalHeight};},hasClass:function(element,name){var names=element.className;return(!!names&&new RegExp("(^|\\s)"+name+"(\\s|$)").test(names));},addClass:function(element,name){if(!OpenLayers.Element.hasClass(element,name)){element.className+=(element.className?" ":"")+name;}
return element;},removeClass:function(element,name){var names=element.className;if(names){element.className=OpenLayers.String.trim(names.replace(new RegExp("(^|\\s+)"+name+"(\\s+|$)")," "));}
return element;},toggleClass:function(element,name){if(OpenLayers.Element.hasClass(element,name)){OpenLayers.Element.removeClass(element,name);}else{OpenLayers.Element.addClass(element,name);}
return element;},getStyle:function(element,style){element=OpenLayers.Util.getElement(element);var value=null;if(element&&element.style){value=element.style[OpenLayers.String.camelize(style)];if(!value){if(document.defaultView&&document.defaultView.getComputedStyle){var css=document.defaultView.getComputedStyle(element,null);value=css?css.getPropertyValue(style):null;}else if(element.currentStyle){value=element.currentStyle[OpenLayers.String.camelize(style)];}}
var positions=['left','top','right','bottom'];if(window.opera&&(OpenLayers.Util.indexOf(positions,style)!=-1)&&(OpenLayers.Element.getStyle(element,'position')=='static')){value='auto';}}
return value=='auto'?null:value;}};OpenLayers.LonLat=OpenLayers.Class({lon:0.0,lat:0.0,initialize:function(lon,lat){this.lon=parseFloat(lon);this.lat=parseFloat(lat);},toString:function(){return("lon="+this.lon+",lat="+this.lat);},toShortString:function(){return(this.lon+", "+this.lat);},clone:function(){return new OpenLayers.LonLat(this.lon,this.lat);},add:function(lon,lat){if((lon==null)||(lat==null)){var msg=OpenLayers.i18n("lonlatAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.LonLat(this.lon+lon,this.lat+lat);},equals:function(ll){var equals=false;if(ll!=null){equals=((this.lon==ll.lon&&this.lat==ll.lat)||(isNaN(this.lon)&&isNaN(this.lat)&&isNaN(ll.lon)&&isNaN(ll.lat)));}
return equals;},transform:function(source,dest){var point=OpenLayers.Projection.transform({'x':this.lon,'y':this.lat},source,dest);this.lon=point.x;this.lat=point.y;return this;},wrapDateLine:function(maxExtent){var newLonLat=this.clone();if(maxExtent){while(newLonLat.lon<maxExtent.left){newLonLat.lon+=maxExtent.getWidth();}
while(newLonLat.lon>maxExtent.right){newLonLat.lon-=maxExtent.getWidth();}}
return newLonLat;},CLASS_NAME:"OpenLayers.LonLat"});OpenLayers.LonLat.fromString=function(str){var pair=str.split(",");return new OpenLayers.LonLat(parseFloat(pair[0]),parseFloat(pair[1]));};OpenLayers.Pixel=OpenLayers.Class({x:0.0,y:0.0,initialize:function(x,y){this.x=parseFloat(x);this.y=parseFloat(y);},toString:function(){return("x="+this.x+",y="+this.y);},clone:function(){return new OpenLayers.Pixel(this.x,this.y);},equals:function(px){var equals=false;if(px!=null){equals=((this.x==px.x&&this.y==px.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(px.x)&&isNaN(px.y)));}
return equals;},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("pixelAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Pixel(this.x+x,this.y+y);},offset:function(px){var newPx=this.clone();if(px){newPx=this.add(px.x,px.y);}
return newPx;},CLASS_NAME:"OpenLayers.Pixel"});OpenLayers.Size=OpenLayers.Class({w:0.0,h:0.0,initialize:function(w,h){this.w=parseFloat(w);this.h=parseFloat(h);},toString:function(){return("w="+this.w+",h="+this.h);},clone:function(){return new OpenLayers.Size(this.w,this.h);},equals:function(sz){var equals=false;if(sz!=null){equals=((this.w==sz.w&&this.h==sz.h)||(isNaN(this.w)&&isNaN(this.h)&&isNaN(sz.w)&&isNaN(sz.h)));}
return equals;},CLASS_NAME:"OpenLayers.Size"});OpenLayers.Console={log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},userError:function(error){alert(error);},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){},CLASS_NAME:"OpenLayers.Console"};(function(){var scripts=document.getElementsByTagName("script");for(var i=0,len=scripts.length;i<len;++i){if(scripts[i].src.indexOf("firebug.js")!=-1){if(console){OpenLayers.Util.extend(OpenLayers.Console,console);break;}}}})();OpenLayers.Control=OpenLayers.Class({id:null,map:null,div:null,type:null,allowSelection:false,displayClass:"",title:"",active:null,handler:null,eventListeners:null,events:null,EVENT_TYPES:["activate","deactivate"],initialize:function(options){this.displayClass=this.CLASS_NAME.replace("OpenLayers.","ol").replace(/\./g,"");OpenLayers.Util.extend(this,options);this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}
if(this.id==null){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");}},destroy:function(){if(this.events){if(this.eventListeners){this.events.un(this.eventListeners);}
this.events.destroy();this.events=null;}
this.eventListeners=null;if(this.handler){this.handler.destroy();this.handler=null;}
if(this.handlers){for(var key in this.handlers){if(this.handlers.hasOwnProperty(key)&&typeof this.handlers[key].destroy=="function"){this.handlers[key].destroy();}}
this.handlers=null;}
if(this.map){this.map.removeControl(this);this.map=null;}},setMap:function(map){this.map=map;if(this.handler){this.handler.setMap(map);}},draw:function(px){if(this.div==null){this.div=OpenLayers.Util.createDiv(this.id);this.div.className=this.displayClass;if(!this.allowSelection){this.div.className+=" olControlNoSelect";this.div.setAttribute("unselectable","on",0);this.div.onselectstart=function(){return(false);};}
if(this.title!=""){this.div.title=this.title;}}
if(px!=null){this.position=px.clone();}
this.moveTo(this.position);return this.div;},moveTo:function(px){if((px!=null)&&(this.div!=null)){this.div.style.left=px.x+"px";this.div.style.top=px.y+"px";}},activate:function(){if(this.active){return false;}
if(this.handler){this.handler.activate();}
this.active=true;this.events.triggerEvent("activate");return true;},deactivate:function(){if(this.active){if(this.handler){this.handler.deactivate();}
this.active=false;this.events.triggerEvent("deactivate");return true;}
return false;},CLASS_NAME:"OpenLayers.Control"});OpenLayers.Control.TYPE_BUTTON=1;OpenLayers.Control.TYPE_TOGGLE=2;OpenLayers.Control.TYPE_TOOL=3;OpenLayers.Icon=OpenLayers.Class({url:null,size:null,offset:null,calculateOffset:null,imageDiv:null,px:null,initialize:function(url,size,offset,calculateOffset){this.url=url;this.size=(size)?size:new OpenLayers.Size(20,20);this.offset=offset?offset:new OpenLayers.Pixel(-(this.size.w/2),-(this.size.h/2));this.calculateOffset=calculateOffset;var id=OpenLayers.Util.createUniqueID("OL_Icon_");this.imageDiv=OpenLayers.Util.createAlphaImageDiv(id);},destroy:function(){OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild);this.imageDiv.innerHTML="";this.imageDiv=null;},clone:function(){return new OpenLayers.Icon(this.url,this.size,this.offset,this.calculateOffset);},setSize:function(size){if(size!=null){this.size=size;}
this.draw();},setUrl:function(url){if(url!=null){this.url=url;}
this.draw();},draw:function(px){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,this.size,this.url,"absolute");this.moveTo(px);return this.imageDiv;},setOpacity:function(opacity){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,null,null,null,null,null,opacity);},moveTo:function(px){if(px!=null){this.px=px;}
if(this.imageDiv!=null){if(this.px==null){this.display(false);}else{if(this.calculateOffset){this.offset=this.calculateOffset(this.size);}
var offsetPx=this.px.offset(this.offset);OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,offsetPx);}}},display:function(display){this.imageDiv.style.display=(display)?"":"none";},CLASS_NAME:"OpenLayers.Icon"});OpenLayers.Lang={code:null,defaultCode:"en",getCode:function(){if(!OpenLayers.Lang.code){OpenLayers.Lang.setCode();}
return OpenLayers.Lang.code;},setCode:function(code){var lang;if(!code){code=(OpenLayers.Util.getBrowserName()=="msie")?navigator.userLanguage:navigator.language;}
var parts=code.split('-');parts[0]=parts[0].toLowerCase();if(typeof OpenLayers.Lang[parts[0]]=="object"){lang=parts[0];}
if(parts[1]){var testLang=parts[0]+'-'+parts[1].toUpperCase();if(typeof OpenLayers.Lang[testLang]=="object"){lang=testLang;}}
if(!lang){OpenLayers.Console.warn('Failed to find OpenLayers.Lang.'+parts.join("-")+' dictionary, falling back to default language');lang=OpenLayers.Lang.defaultCode;}
OpenLayers.Lang.code=lang;},translate:function(key,context){var dictionary=OpenLayers.Lang[OpenLayers.Lang.getCode()];var message=dictionary[key];if(!message){message=key;}
if(context){message=OpenLayers.String.format(message,context);}
return message;}};OpenLayers.i18n=OpenLayers.Lang.translate;OpenLayers.Popup=OpenLayers.Class({events:null,id:"",lonlat:null,div:null,contentSize:null,size:null,contentHTML:null,backgroundColor:"",opacity:"",border:"",contentDiv:null,groupDiv:null,closeDiv:null,autoSize:false,minSize:null,maxSize:null,displayClass:"olPopup",contentDisplayClass:"olPopupContent",padding:0,fixPadding:function(){if(typeof this.padding=="number"){this.padding=new OpenLayers.Bounds(this.padding,this.padding,this.padding,this.padding);}},panMapIfOutOfView:false,map:null,initialize:function(id,lonlat,contentSize,contentHTML,closeBox,closeBoxCallback){if(id==null){id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");}
this.id=id;this.lonlat=lonlat;this.contentSize=(contentSize!=null)?contentSize:new OpenLayers.Size(OpenLayers.Popup.WIDTH,OpenLayers.Popup.HEIGHT);if(contentHTML!=null){this.contentHTML=contentHTML;}
this.backgroundColor=OpenLayers.Popup.COLOR;this.opacity=OpenLayers.Popup.OPACITY;this.border=OpenLayers.Popup.BORDER;this.div=OpenLayers.Util.createDiv(this.id,null,null,null,null,null,"hidden");this.div.className=this.displayClass;var groupDivId=this.id+"_GroupDiv";this.groupDiv=OpenLayers.Util.createDiv(groupDivId,null,null,null,"relative",null,"hidden");var id=this.div.id+"_contentDiv";this.contentDiv=OpenLayers.Util.createDiv(id,null,this.contentSize.clone(),null,"relative");this.contentDiv.className=this.contentDisplayClass;this.groupDiv.appendChild(this.contentDiv);this.div.appendChild(this.groupDiv);if(closeBox){this.addCloseBox(closeBoxCallback);}
this.registerEvents();},destroy:function(){this.id=null;this.lonlat=null;this.size=null;this.contentHTML=null;this.backgroundColor=null;this.opacity=null;this.border=null;this.events.destroy();this.events=null;if(this.closeDiv){OpenLayers.Event.stopObservingElement(this.closeDiv);this.groupDiv.removeChild(this.closeDiv);}
this.closeDiv=null;this.div.removeChild(this.groupDiv);this.groupDiv=null;if(this.map!=null){this.map.removePopup(this);}
this.map=null;this.div=null;this.autoSize=null;this.minSize=null;this.maxSize=null;this.padding=null;this.panMapIfOutOfView=null;},draw:function(px){if(px==null){if((this.lonlat!=null)&&(this.map!=null)){px=this.map.getLayerPxFromLonLat(this.lonlat);}}
if(OpenLayers.Util.getBrowserName()=='firefox'){this.map.events.register("movestart",this,function(){var style=document.defaultView.getComputedStyle(this.contentDiv,null);var currentOverflow=style.getPropertyValue("overflow");if(currentOverflow!="hidden"){this.contentDiv._oldOverflow=currentOverflow;this.contentDiv.style.overflow="hidden";}});this.map.events.register("moveend",this,function(){var oldOverflow=this.contentDiv._oldOverflow;if(oldOverflow){this.contentDiv.style.overflow=oldOverflow;this.contentDiv._oldOverflow=null;}});}
this.moveTo(px);if(!this.autoSize&&!this.size){this.setSize(this.contentSize);}
this.setBackgroundColor();this.setOpacity();this.setBorder();this.setContentHTML();if(this.panMapIfOutOfView){this.panIntoView();}
return this.div;},updatePosition:function(){if((this.lonlat)&&(this.map)){var px=this.map.getLayerPxFromLonLat(this.lonlat);if(px){this.moveTo(px);}}},moveTo:function(px){if((px!=null)&&(this.div!=null)){this.div.style.left=px.x+"px";this.div.style.top=px.y+"px";}},visible:function(){return OpenLayers.Element.visible(this.div);},toggle:function(){if(this.visible()){this.hide();}else{this.show();}},show:function(){OpenLayers.Element.show(this.div);if(this.panMapIfOutOfView){this.panIntoView();}},hide:function(){OpenLayers.Element.hide(this.div);},setSize:function(contentSize){this.size=contentSize.clone();var contentDivPadding=this.getContentDivPadding();var wPadding=contentDivPadding.left+contentDivPadding.right;var hPadding=contentDivPadding.top+contentDivPadding.bottom;this.fixPadding();wPadding+=this.padding.left+this.padding.right;hPadding+=this.padding.top+this.padding.bottom;if(this.closeDiv){var closeDivWidth=parseInt(this.closeDiv.style.width);wPadding+=closeDivWidth+contentDivPadding.right;}
this.size.w+=wPadding;this.size.h+=hPadding;if(OpenLayers.Util.getBrowserName()=="msie"){this.contentSize.w+=contentDivPadding.left+contentDivPadding.right;this.contentSize.h+=contentDivPadding.bottom+contentDivPadding.top;}
if(this.div!=null){this.div.style.width=this.size.w+"px";this.div.style.height=this.size.h+"px";}
if(this.contentDiv!=null){this.contentDiv.style.width=contentSize.w+"px";this.contentDiv.style.height=contentSize.h+"px";}},updateSize:function(){var preparedHTML="<div class='"+this.contentDisplayClass+"'>"+
this.contentDiv.innerHTML+"<div>";var realSize=OpenLayers.Util.getRenderedDimensions(preparedHTML,null,{displayClass:this.displayClass});var safeSize=this.getSafeContentSize(realSize);var newSize=null;if(safeSize.equals(realSize)){newSize=realSize;}else{var fixedSize=new OpenLayers.Size();fixedSize.w=(safeSize.w<realSize.w)?safeSize.w:null;fixedSize.h=(safeSize.h<realSize.h)?safeSize.h:null;if(fixedSize.w&&fixedSize.h){newSize=safeSize;}else{var clippedSize=OpenLayers.Util.getRenderedDimensions(preparedHTML,fixedSize,{displayClass:this.contentDisplayClass});var currentOverflow=OpenLayers.Element.getStyle(this.contentDiv,"overflow");if((currentOverflow!="hidden")&&(clippedSize.equals(safeSize))){var scrollBar=OpenLayers.Util.getScrollbarWidth();if(fixedSize.w){clippedSize.h+=scrollBar;}else{clippedSize.w+=scrollBar;}}
newSize=this.getSafeContentSize(clippedSize);}}
this.setSize(newSize);},setBackgroundColor:function(color){if(color!=undefined){this.backgroundColor=color;}
if(this.div!=null){this.div.style.backgroundColor=this.backgroundColor;}},setOpacity:function(opacity){if(opacity!=undefined){this.opacity=opacity;}
if(this.div!=null){this.div.style.opacity=this.opacity;this.div.style.filter='alpha(opacity='+this.opacity*100+')';}},setBorder:function(border){if(border!=undefined){this.border=border;}
if(this.div!=null){this.div.style.border=this.border;}},setContentHTML:function(contentHTML){if(contentHTML!=null){this.contentHTML=contentHTML;}
if((this.contentDiv!=null)&&(this.contentHTML!=null)&&(this.contentHTML!=this.contentDiv.innerHTML)){this.contentDiv.innerHTML=this.contentHTML;if(this.autoSize){this.registerImageListeners();this.updateSize();}}},registerImageListeners:function(){var onImgLoad=function(){this.popup.updateSize();if(this.popup.visible()&&this.popup.panMapIfOutOfView){this.popup.panIntoView();}
OpenLayers.Event.stopObserving(this.img,"load",this.img._onImageLoad);};var images=this.contentDiv.getElementsByTagName("img");for(var i=0,len=images.length;i<len;i++){var img=images[i];if(img.width==0||img.height==0){var context={'popup':this,'img':img};img._onImgLoad=OpenLayers.Function.bind(onImgLoad,context);OpenLayers.Event.observe(img,'load',img._onImgLoad);}}},getSafeContentSize:function(size){var safeContentSize=size.clone();var contentDivPadding=this.getContentDivPadding();var wPadding=contentDivPadding.left+contentDivPadding.right;var hPadding=contentDivPadding.top+contentDivPadding.bottom;this.fixPadding();wPadding+=this.padding.left+this.padding.right;hPadding+=this.padding.top+this.padding.bottom;if(this.closeDiv){var closeDivWidth=parseInt(this.closeDiv.style.width);wPadding+=closeDivWidth+contentDivPadding.right;}
if(this.minSize){safeContentSize.w=Math.max(safeContentSize.w,(this.minSize.w-wPadding));safeContentSize.h=Math.max(safeContentSize.h,(this.minSize.h-hPadding));}
if(this.maxSize){safeContentSize.w=Math.min(safeContentSize.w,(this.maxSize.w-wPadding));safeContentSize.h=Math.min(safeContentSize.h,(this.maxSize.h-hPadding));}
if(this.map&&this.map.size){var maxY=this.map.size.h-
this.map.paddingForPopups.top-
this.map.paddingForPopups.bottom-
hPadding;var maxX=this.map.size.w-
this.map.paddingForPopups.left-
this.map.paddingForPopups.right-
wPadding;safeContentSize.w=Math.min(safeContentSize.w,maxX);safeContentSize.h=Math.min(safeContentSize.h,maxY);}
return safeContentSize;},getContentDivPadding:function(){var contentDivPadding=this._contentDivPadding;if(!contentDivPadding){this.div.style.display="none";document.body.appendChild(this.div);contentDivPadding=new OpenLayers.Bounds(OpenLayers.Element.getStyle(this.contentDiv,"padding-left"),OpenLayers.Element.getStyle(this.contentDiv,"padding-bottom"),OpenLayers.Element.getStyle(this.contentDiv,"padding-right"),OpenLayers.Element.getStyle(this.contentDiv,"padding-top"));this._contentDivPadding=contentDivPadding;document.body.removeChild(this.div);this.div.style.display="";}
return contentDivPadding;},addCloseBox:function(callback){this.closeDiv=OpenLayers.Util.createDiv(this.id+"_close",null,new OpenLayers.Size(17,17));this.closeDiv.className="olPopupCloseBox";var contentDivPadding=this.getContentDivPadding();this.closeDiv.style.right=contentDivPadding.right+"px";this.closeDiv.style.top=contentDivPadding.top+"px";this.groupDiv.appendChild(this.closeDiv);var closePopup=callback||function(e){this.hide();OpenLayers.Event.stop(e);};OpenLayers.Event.observe(this.closeDiv,"click",OpenLayers.Function.bindAsEventListener(closePopup,this));},panIntoView:function(){var mapSize=this.map.getSize();var origTL=this.map.getViewPortPxFromLayerPx(new OpenLayers.Pixel(parseInt(this.div.style.left),parseInt(this.div.style.top)));var newTL=origTL.clone();if(origTL.x<this.map.paddingForPopups.left){newTL.x=this.map.paddingForPopups.left;}else
if((origTL.x+this.size.w)>(mapSize.w-this.map.paddingForPopups.right)){newTL.x=mapSize.w-this.map.paddingForPopups.right-this.size.w;}
if(origTL.y<this.map.paddingForPopups.top){newTL.y=this.map.paddingForPopups.top;}else
if((origTL.y+this.size.h)>(mapSize.h-this.map.paddingForPopups.bottom)){newTL.y=mapSize.h-this.map.paddingForPopups.bottom-this.size.h;}
var dx=origTL.x-newTL.x;var dy=origTL.y-newTL.y;this.map.pan(dx,dy);},registerEvents:function(){this.events=new OpenLayers.Events(this,this.div,null,true);this.events.on({"mousedown":this.onmousedown,"mousemove":this.onmousemove,"mouseup":this.onmouseup,"click":this.onclick,"mouseout":this.onmouseout,"dblclick":this.ondblclick,scope:this});},onmousedown:function(evt){this.mousedown=true;OpenLayers.Event.stop(evt,true);},onmousemove:function(evt){if(this.mousedown){OpenLayers.Event.stop(evt,true);}},onmouseup:function(evt){if(this.mousedown){this.mousedown=false;OpenLayers.Event.stop(evt,true);}},onclick:function(evt){OpenLayers.Event.stop(evt,true);},onmouseout:function(evt){this.mousedown=false;},ondblclick:function(evt){OpenLayers.Event.stop(evt,true);},CLASS_NAME:"OpenLayers.Popup"});OpenLayers.Popup.WIDTH=200;OpenLayers.Popup.HEIGHT=200;OpenLayers.Popup.COLOR="white";OpenLayers.Popup.OPACITY=1;OpenLayers.Popup.BORDER="0px";OpenLayers.Protocol=OpenLayers.Class({format:null,options:null,autoDestroy:true,initialize:function(options){options=options||{};OpenLayers.Util.extend(this,options);this.options=options;},destroy:function(){this.options=null;this.format=null;},read:function(){},create:function(){},update:function(){},"delete":function(){},commit:function(){},CLASS_NAME:"OpenLayers.Protocol"});OpenLayers.Protocol.Response=OpenLayers.Class({code:null,requestType:null,last:true,features:null,reqFeatures:null,priv:null,initialize:function(options){OpenLayers.Util.extend(this,options);},success:function(){return this.code>0;},CLASS_NAME:"OpenLayers.Protocol.Response"});OpenLayers.Protocol.Response.SUCCESS=1;OpenLayers.Protocol.Response.FAILURE=0;OpenLayers.Request={DEFAULT_CONFIG:{method:"GET",url:window.location.href,async:true,user:undefined,password:undefined,params:null,proxy:OpenLayers.ProxyHost,headers:{},data:null,callback:function(){},success:null,failure:null,scope:null},issue:function(config){var defaultConfig=OpenLayers.Util.extend(this.DEFAULT_CONFIG,{proxy:OpenLayers.ProxyHost});config=OpenLayers.Util.applyDefaults(config,defaultConfig);var request=new OpenLayers.Request.XMLHttpRequest();var url=config.url;if(config.params){var paramString=OpenLayers.Util.getParameterString(config.params);if(paramString.length>0){var separator=(url.indexOf('?')>-1)?'&':'?';url+=separator+paramString;}}
if(config.proxy&&(url.indexOf("http")==0)){url=config.proxy+encodeURIComponent(url);}
request.open(config.method,url,config.async,config.user,config.password);for(var header in config.headers){request.setRequestHeader(header,config.headers[header]);}
var complete=(config.scope)?OpenLayers.Function.bind(config.callback,config.scope):config.callback;var success;if(config.success){success=(config.scope)?OpenLayers.Function.bind(config.success,config.scope):config.success;}
var failure;if(config.failure){failure=(config.scope)?OpenLayers.Function.bind(config.failure,config.scope):config.failure;}
request.onreadystatechange=function(){if(request.readyState==OpenLayers.Request.XMLHttpRequest.DONE){complete(request);if(success&&(!request.status||(request.status>=200&&request.status<300))){success(request);}
if(failure&&(request.status&&(request.status<200||request.status>=300))){failure(request);}}};request.send(config.data);return request;},GET:function(config){config=OpenLayers.Util.extend(config,{method:"GET"});return OpenLayers.Request.issue(config);},POST:function(config){config=OpenLayers.Util.extend(config,{method:"POST"});config.headers=config.headers?config.headers:{};if(!("CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(config.headers))){config.headers["Content-Type"]="application/xml";}
return OpenLayers.Request.issue(config);},PUT:function(config){config=OpenLayers.Util.extend(config,{method:"PUT"});config.headers=config.headers?config.headers:{};if(!("CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(config.headers))){config.headers["Content-Type"]="application/xml";}
return OpenLayers.Request.issue(config);},DELETE:function(config){config=OpenLayers.Util.extend(config,{method:"DELETE"});return OpenLayers.Request.issue(config);},HEAD:function(config){config=OpenLayers.Util.extend(config,{method:"HEAD"});return OpenLayers.Request.issue(config);},OPTIONS:function(config){config=OpenLayers.Util.extend(config,{method:"OPTIONS"});return OpenLayers.Request.issue(config);}};OpenLayers.Strategy=OpenLayers.Class({layer:null,options:null,active:null,autoActivate:true,autoDestroy:true,initialize:function(options){OpenLayers.Util.extend(this,options);this.options=options;this.active=false;},destroy:function(){this.deactivate();this.layer=null;this.options=null;},setLayer:function(layer){this.layer=layer;},activate:function(){if(!this.active){this.active=true;return true;}
return false;},deactivate:function(){if(this.active){this.active=false;return true;}
return false;},CLASS_NAME:"OpenLayers.Strategy"});OpenLayers.Tween=OpenLayers.Class({INTERVAL:10,easing:null,begin:null,finish:null,duration:null,callbacks:null,time:null,interval:null,playing:false,initialize:function(easing){this.easing=(easing)?easing:OpenLayers.Easing.Expo.easeOut;},start:function(begin,finish,duration,options){this.playing=true;this.begin=begin;this.finish=finish;this.duration=duration;this.callbacks=options.callbacks;this.time=0;if(this.interval){window.clearInterval(this.interval);this.interval=null;}
if(this.callbacks&&this.callbacks.start){this.callbacks.start.call(this,this.begin);}
this.interval=window.setInterval(OpenLayers.Function.bind(this.play,this),this.INTERVAL);},stop:function(){if(!this.playing){return;}
if(this.callbacks&&this.callbacks.done){this.callbacks.done.call(this,this.finish);}
window.clearInterval(this.interval);this.interval=null;this.playing=false;},play:function(){var value={};for(var i in this.begin){var b=this.begin[i];var f=this.finish[i];if(b==null||f==null||isNaN(b)||isNaN(f)){OpenLayers.Console.error('invalid value for Tween');}
var c=f-b;value[i]=this.easing.apply(this,[this.time,b,c,this.duration]);}
this.time++;if(this.callbacks&&this.callbacks.eachStep){this.callbacks.eachStep.call(this,value);}
if(this.time>this.duration){if(this.callbacks&&this.callbacks.done){this.callbacks.done.call(this,this.finish);this.playing=false;}
window.clearInterval(this.interval);this.interval=null;}},CLASS_NAME:"OpenLayers.Tween"});OpenLayers.Easing={CLASS_NAME:"OpenLayers.Easing"};OpenLayers.Easing.Linear={easeIn:function(t,b,c,d){return c*t/d+b;},easeOut:function(t,b,c,d){return c*t/d+b;},easeInOut:function(t,b,c,d){return c*t/d+b;},CLASS_NAME:"OpenLayers.Easing.Linear"};OpenLayers.Easing.Expo={easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOut:function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},CLASS_NAME:"OpenLayers.Easing.Expo"};OpenLayers.Easing.Quad={easeIn:function(t,b,c,d){return c*(t/=d)*t+b;},easeOut:function(t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOut:function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},CLASS_NAME:"OpenLayers.Easing.Quad"};OpenLayers.Rico.Color=OpenLayers.Class({initialize:function(red,green,blue){this.rgb={r:red,g:green,b:blue};},setRed:function(r){this.rgb.r=r;},setGreen:function(g){this.rgb.g=g;},setBlue:function(b){this.rgb.b=b;},setHue:function(h){var hsb=this.asHSB();hsb.h=h;this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);},setSaturation:function(s){var hsb=this.asHSB();hsb.s=s;this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);},setBrightness:function(b){var hsb=this.asHSB();hsb.b=b;this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,hsb.b);},darken:function(percent){var hsb=this.asHSB();this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,Math.max(hsb.b-percent,0));},brighten:function(percent){var hsb=this.asHSB();this.rgb=OpenLayers.Rico.Color.HSBtoRGB(hsb.h,hsb.s,Math.min(hsb.b+percent,1));},blend:function(other){this.rgb.r=Math.floor((this.rgb.r+other.rgb.r)/2);this.rgb.g=Math.floor((this.rgb.g+other.rgb.g)/2);this.rgb.b=Math.floor((this.rgb.b+other.rgb.b)/2);},isBright:function(){var hsb=this.asHSB();return this.asHSB().b>0.5;},isDark:function(){return!this.isBright();},asRGB:function(){return"rgb("+this.rgb.r+","+this.rgb.g+","+this.rgb.b+")";},asHex:function(){return"#"+this.rgb.r.toColorPart()+this.rgb.g.toColorPart()+this.rgb.b.toColorPart();},asHSB:function(){return OpenLayers.Rico.Color.RGBtoHSB(this.rgb.r,this.rgb.g,this.rgb.b);},toString:function(){return this.asHex();}});OpenLayers.Rico.Color.createFromHex=function(hexCode){if(hexCode.length==4){var shortHexCode=hexCode;var hexCode='#';for(var i=1;i<4;i++){hexCode+=(shortHexCode.charAt(i)+
shortHexCode.charAt(i));}}
if(hexCode.indexOf('#')==0){hexCode=hexCode.substring(1);}
var red=hexCode.substring(0,2);var green=hexCode.substring(2,4);var blue=hexCode.substring(4,6);return new OpenLayers.Rico.Color(parseInt(red,16),parseInt(green,16),parseInt(blue,16));};OpenLayers.Rico.Color.createColorFromBackground=function(elem){var actualColor=RicoUtil.getElementsComputedStyle(OpenLayers.Util.getElement(elem),"backgroundColor","background-color");if(actualColor=="transparent"&&elem.parentNode){return OpenLayers.Rico.Color.createColorFromBackground(elem.parentNode);}
if(actualColor==null){return new OpenLayers.Rico.Color(255,255,255);}
if(actualColor.indexOf("rgb(")==0){var colors=actualColor.substring(4,actualColor.length-1);var colorArray=colors.split(",");return new OpenLayers.Rico.Color(parseInt(colorArray[0]),parseInt(colorArray[1]),parseInt(colorArray[2]));}
else if(actualColor.indexOf("#")==0){return OpenLayers.Rico.Color.createFromHex(actualColor);}
else{return new OpenLayers.Rico.Color(255,255,255);}};OpenLayers.Rico.Color.HSBtoRGB=function(hue,saturation,brightness){var red=0;var green=0;var blue=0;if(saturation==0){red=parseInt(brightness*255.0+0.5);green=red;blue=red;}
else{var h=(hue-Math.floor(hue))*6.0;var f=h-Math.floor(h);var p=brightness*(1.0-saturation);var q=brightness*(1.0-saturation*f);var t=brightness*(1.0-(saturation*(1.0-f)));switch(parseInt(h)){case 0:red=(brightness*255.0+0.5);green=(t*255.0+0.5);blue=(p*255.0+0.5);break;case 1:red=(q*255.0+0.5);green=(brightness*255.0+0.5);blue=(p*255.0+0.5);break;case 2:red=(p*255.0+0.5);green=(brightness*255.0+0.5);blue=(t*255.0+0.5);break;case 3:red=(p*255.0+0.5);green=(q*255.0+0.5);blue=(brightness*255.0+0.5);break;case 4:red=(t*255.0+0.5);green=(p*255.0+0.5);blue=(brightness*255.0+0.5);break;case 5:red=(brightness*255.0+0.5);green=(p*255.0+0.5);blue=(q*255.0+0.5);break;}}
return{r:parseInt(red),g:parseInt(green),b:parseInt(blue)};};OpenLayers.Rico.Color.RGBtoHSB=function(r,g,b){var hue;var saturation;var brightness;var cmax=(r>g)?r:g;if(b>cmax){cmax=b;}
var cmin=(r<g)?r:g;if(b<cmin){cmin=b;}
brightness=cmax/255.0;if(cmax!=0){saturation=(cmax-cmin)/cmax;}else{saturation=0;}
if(saturation==0){hue=0;}else{var redc=(cmax-r)/(cmax-cmin);var greenc=(cmax-g)/(cmax-cmin);var bluec=(cmax-b)/(cmax-cmin);if(r==cmax){hue=bluec-greenc;}else if(g==cmax){hue=2.0+redc-bluec;}else{hue=4.0+greenc-redc;}
hue=hue/6.0;if(hue<0){hue=hue+1.0;}}
return{h:hue,s:saturation,b:brightness};};OpenLayers.Control.ArgParser=OpenLayers.Class(OpenLayers.Control,{center:null,zoom:null,layers:null,displayProjection:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var i=0,len=this.map.controls.length;i<len;i++){var control=this.map.controls[i];if((control!=this)&&(control.CLASS_NAME=="OpenLayers.Control.ArgParser")){if(control.displayProjection!=this.displayProjection){this.displayProjection=control.displayProjection;}
break;}}
if(i==this.map.controls.length){var args=OpenLayers.Util.getParameters();if(args.layers){this.layers=args.layers;this.map.events.register('addlayer',this,this.configureLayers);this.configureLayers();}
if(args.lat&&args.lon){this.center=new OpenLayers.LonLat(parseFloat(args.lon),parseFloat(args.lat));if(args.zoom){this.zoom=parseInt(args.zoom);}
this.map.events.register('changebaselayer',this,this.setCenter);this.setCenter();}}},setCenter:function(){if(this.map.baseLayer){this.map.events.unregister('changebaselayer',this,this.setCenter);if(this.displayProjection){this.center.transform(this.displayProjection,this.map.getProjectionObject());}
this.map.setCenter(this.center,this.zoom);}},configureLayers:function(){if(this.layers.length==this.map.layers.length){this.map.events.unregister('addlayer',this,this.configureLayers);for(var i=0,len=this.layers.length;i<len;i++){var layer=this.map.layers[i];var c=this.layers.charAt(i);if(c=="B"){this.map.setBaseLayer(layer);}else if((c=="T")||(c=="F")){layer.setVisibility(c=="T");}}}},CLASS_NAME:"OpenLayers.Control.ArgParser"});OpenLayers.Control.LayerSwitcher=OpenLayers.Class(OpenLayers.Control,{activeColor:"darkblue",layerStates:null,layersDiv:null,baseLayersDiv:null,baseLayers:null,dataLbl:null,dataLayersDiv:null,dataLayers:null,minimizeDiv:null,maximizeDiv:null,ascending:true,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,arguments);this.layerStates=[];},destroy:function(){OpenLayers.Event.stopObservingElement(this.div);OpenLayers.Event.stopObservingElement(this.minimizeDiv);OpenLayers.Event.stopObservingElement(this.maximizeDiv);this.clearLayersArray("base");this.clearLayersArray("data");this.map.events.un({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);this.map.events.on({"addlayer":this.redraw,"changelayer":this.redraw,"removelayer":this.redraw,"changebaselayer":this.redraw,scope:this});},draw:function(){OpenLayers.Control.prototype.draw.apply(this);this.loadContents();if(!this.outsideViewport){this.minimizeControl();}
this.redraw();return this.div;},clearLayersArray:function(layersType){var layers=this[layersType+"Layers"];if(layers){for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];OpenLayers.Event.stopObservingElement(layer.inputElem);OpenLayers.Event.stopObservingElement(layer.labelSpan);}}
this[layersType+"LayersDiv"].innerHTML="";this[layersType+"Layers"]=[];},checkRedraw:function(){var redraw=false;if(!this.layerStates.length||(this.map.layers.length!=this.layerStates.length)){redraw=true;}else{for(var i=0,len=this.layerStates.length;i<len;i++){var layerState=this.layerStates[i];var layer=this.map.layers[i];if((layerState.name!=layer.name)||(layerState.inRange!=layer.inRange)||(layerState.id!=layer.id)||(layerState.visibility!=layer.visibility)){redraw=true;break;}}}
return redraw;},redraw:function(){if(!this.checkRedraw()){return this.div;}
this.clearLayersArray("base");this.clearLayersArray("data");var containsOverlays=false;var containsBaseLayers=false;var len=this.map.layers.length;this.layerStates=new Array(len);for(var i=0;i<len;i++){var layer=this.map.layers[i];this.layerStates[i]={'name':layer.name,'visibility':layer.visibility,'inRange':layer.inRange,'id':layer.id};}
var layers=this.map.layers.slice();if(!this.ascending){layers.reverse();}
for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];var baseLayer=layer.isBaseLayer;if(layer.displayInLayerSwitcher){if(baseLayer){containsBaseLayers=true;}else{containsOverlays=true;}
var checked=(baseLayer)?(layer==this.map.baseLayer):layer.getVisibility();var inputElem=document.createElement("input");inputElem.id=this.id+"_input_"+layer.name;inputElem.name=(baseLayer)?"baseLayers":layer.name;inputElem.type=(baseLayer)?"radio":"checkbox";inputElem.value=layer.name;inputElem.checked=checked;inputElem.defaultChecked=checked;if(!baseLayer&&!layer.inRange){inputElem.disabled=true;}
var context={'inputElem':inputElem,'layer':layer,'layerSwitcher':this};OpenLayers.Event.observe(inputElem,"mouseup",OpenLayers.Function.bindAsEventListener(this.onInputClick,context));var labelSpan=document.createElement("span");if(!baseLayer&&!layer.inRange){labelSpan.style.color="gray";}
labelSpan.innerHTML=layer.name;labelSpan.style.verticalAlign=(baseLayer)?"bottom":"baseline";OpenLayers.Event.observe(labelSpan,"click",OpenLayers.Function.bindAsEventListener(this.onInputClick,context));var br=document.createElement("br");var groupArray=(baseLayer)?this.baseLayers:this.dataLayers;groupArray.push({'layer':layer,'inputElem':inputElem,'labelSpan':labelSpan});var groupDiv=(baseLayer)?this.baseLayersDiv:this.dataLayersDiv;groupDiv.appendChild(inputElem);groupDiv.appendChild(labelSpan);groupDiv.appendChild(br);}}
this.dataLbl.style.display=(containsOverlays)?"":"none";this.baseLbl.style.display=(containsBaseLayers)?"":"none";return this.div;},onInputClick:function(e){if(!this.inputElem.disabled){if(this.inputElem.type=="radio"){this.inputElem.checked=true;this.layer.map.setBaseLayer(this.layer);}else{this.inputElem.checked=!this.inputElem.checked;this.layerSwitcher.updateMap();}}
OpenLayers.Event.stop(e);},onLayerClick:function(e){this.updateMap();},updateMap:function(){for(var i=0,len=this.baseLayers.length;i<len;i++){var layerEntry=this.baseLayers[i];if(layerEntry.inputElem.checked){this.map.setBaseLayer(layerEntry.layer,false);}}
for(var i=0,len=this.dataLayers.length;i<len;i++){var layerEntry=this.dataLayers[i];layerEntry.layer.setVisibility(layerEntry.inputElem.checked);}},maximizeControl:function(e){this.div.style.width="20em";this.div.style.height="";this.showControls(false);if(e!=null){OpenLayers.Event.stop(e);}},minimizeControl:function(e){this.div.style.width="0px";this.div.style.height="0px";this.showControls(true);if(e!=null){OpenLayers.Event.stop(e);}},showControls:function(minimize){this.maximizeDiv.style.display=minimize?"":"none";this.minimizeDiv.style.display=minimize?"none":"";this.layersDiv.style.display=minimize?"none":"";},loadContents:function(){this.div.style.position="absolute";this.div.style.top="25px";this.div.style.right="0px";this.div.style.left="";this.div.style.fontFamily="sans-serif";this.div.style.fontWeight="bold";this.div.style.marginTop="3px";this.div.style.marginLeft="3px";this.div.style.marginBottom="3px";this.div.style.fontSize="smaller";this.div.style.color="white";this.div.style.backgroundColor="transparent";OpenLayers.Event.observe(this.div,"mouseup",OpenLayers.Function.bindAsEventListener(this.mouseUp,this));OpenLayers.Event.observe(this.div,"click",this.ignoreEvent);OpenLayers.Event.observe(this.div,"mousedown",OpenLayers.Function.bindAsEventListener(this.mouseDown,this));OpenLayers.Event.observe(this.div,"dblclick",this.ignoreEvent);this.layersDiv=document.createElement("div");this.layersDiv.id=this.id+"_layersDiv";this.layersDiv.style.paddingTop="5px";this.layersDiv.style.paddingLeft="10px";this.layersDiv.style.paddingBottom="5px";this.layersDiv.style.paddingRight="75px";this.layersDiv.style.backgroundColor=this.activeColor;this.layersDiv.style.width="100%";this.layersDiv.style.height="100%";this.baseLbl=document.createElement("div");this.baseLbl.innerHTML=OpenLayers.i18n("baseLayer");this.baseLbl.style.marginTop="3px";this.baseLbl.style.marginLeft="3px";this.baseLbl.style.marginBottom="3px";this.baseLayersDiv=document.createElement("div");this.baseLayersDiv.style.paddingLeft="10px";this.dataLbl=document.createElement("div");this.dataLbl.innerHTML=OpenLayers.i18n("overlays");this.dataLbl.style.marginTop="3px";this.dataLbl.style.marginLeft="3px";this.dataLbl.style.marginBottom="3px";this.dataLayersDiv=document.createElement("div");this.dataLayersDiv.style.paddingLeft="10px";if(this.ascending){this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);}else{this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);}
this.div.appendChild(this.layersDiv);OpenLayers.Rico.Corner.round(this.div,{corners:"tl bl",bgColor:"transparent",color:this.activeColor,blend:false});OpenLayers.Rico.Corner.changeOpacity(this.layersDiv,0.75);var imgLocation=OpenLayers.Util.getImagesLocation();var sz=new OpenLayers.Size(18,18);var img=imgLocation+'layer-switcher-maximize.png';this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MaximizeDiv",null,sz,img,"absolute");this.maximizeDiv.style.top="5px";this.maximizeDiv.style.right="0px";this.maximizeDiv.style.left="";this.maximizeDiv.style.display="none";OpenLayers.Event.observe(this.maximizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.maximizeControl,this));this.div.appendChild(this.maximizeDiv);var img=imgLocation+'layer-switcher-minimize.png';var sz=new OpenLayers.Size(18,18);this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MinimizeDiv",null,sz,img,"absolute");this.minimizeDiv.style.top="5px";this.minimizeDiv.style.right="0px";this.minimizeDiv.style.left="";this.minimizeDiv.style.display="none";OpenLayers.Event.observe(this.minimizeDiv,"click",OpenLayers.Function.bindAsEventListener(this.minimizeControl,this));this.div.appendChild(this.minimizeDiv);},ignoreEvent:function(evt){OpenLayers.Event.stop(evt);},mouseDown:function(evt){this.isMouseDown=true;this.ignoreEvent(evt);},mouseUp:function(evt){if(this.isMouseDown){this.isMouseDown=false;this.ignoreEvent(evt);}},CLASS_NAME:"OpenLayers.Control.LayerSwitcher"});OpenLayers.Control.PanZoom=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,buttons:null,position:null,initialize:function(options){this.position=new OpenLayers.Pixel(OpenLayers.Control.PanZoom.X,OpenLayers.Control.PanZoom.Y);OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this,arguments);while(this.buttons.length){var btn=this.buttons.shift();btn.map=null;OpenLayers.Event.stopObservingElement(btn);}
this.buttons=null;this.position=null;},draw:function(px){OpenLayers.Control.prototype.draw.apply(this,arguments);px=this.position;this.buttons=[];var sz=new OpenLayers.Size(18,18);var centered=new OpenLayers.Pixel(px.x+sz.w/2,px.y);this._addButton("panup","north-mini.png",centered,sz);px.y=centered.y+sz.h;this._addButton("panleft","west-mini.png",px,sz);this._addButton("panright","east-mini.png",px.add(sz.w,0),sz);this._addButton("pandown","south-mini.png",centered.add(0,sz.h*2),sz);this._addButton("zoomin","zoom-plus-mini.png",centered.add(0,sz.h*3+5),sz);this._addButton("zoomworld","zoom-world-mini.png",centered.add(0,sz.h*4+5),sz);this._addButton("zoomout","zoom-minus-mini.png",centered.add(0,sz.h*5+5),sz);return this.div;},_addButton:function(id,img,xy,sz){var imgLocation=OpenLayers.Util.getImagesLocation()+img;var btn=OpenLayers.Util.createAlphaImageDiv(this.id+"_"+id,xy,sz,imgLocation,"absolute");this.div.appendChild(btn);OpenLayers.Event.observe(btn,"mousedown",OpenLayers.Function.bindAsEventListener(this.buttonDown,btn));OpenLayers.Event.observe(btn,"dblclick",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));OpenLayers.Event.observe(btn,"click",OpenLayers.Function.bindAsEventListener(this.doubleClick,btn));btn.action=id;btn.map=this.map;btn.slideFactor=this.slideFactor;this.buttons.push(btn);return btn;},doubleClick:function(evt){OpenLayers.Event.stop(evt);return false;},buttonDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
switch(this.action){case"panup":this.map.pan(0,-this.slideFactor);break;case"pandown":this.map.pan(0,this.slideFactor);break;case"panleft":this.map.pan(-this.slideFactor,0);break;case"panright":this.map.pan(this.slideFactor,0);break;case"zoomin":this.map.zoomIn();break;case"zoomout":this.map.zoomOut();break;case"zoomworld":this.map.zoomToMaxExtent();break;}
OpenLayers.Event.stop(evt);},CLASS_NAME:"OpenLayers.Control.PanZoom"});OpenLayers.Control.PanZoom.X=4;OpenLayers.Control.PanZoom.Y=4;OpenLayers.Control.Panel=OpenLayers.Class(OpenLayers.Control,{controls:null,defaultControl:null,initialize:function(options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.controls=[];},destroy:function(){OpenLayers.Control.prototype.destroy.apply(this,arguments);for(var i=this.controls.length-1;i>=0;i--){if(this.controls[i].events){this.controls[i].events.un({"activate":this.redraw,"deactivate":this.redraw,scope:this});}
OpenLayers.Event.stopObservingElement(this.controls[i].panel_div);this.controls[i].panel_div=null;}},activate:function(){if(OpenLayers.Control.prototype.activate.apply(this,arguments)){for(var i=0,len=this.controls.length;i<len;i++){if(this.controls[i]==this.defaultControl){this.controls[i].activate();}}
this.redraw();return true;}else{return false;}},deactivate:function(){if(OpenLayers.Control.prototype.deactivate.apply(this,arguments)){for(var i=0,len=this.controls.length;i<len;i++){this.controls[i].deactivate();}
return true;}else{return false;}},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);for(var i=0,len=this.controls.length;i<len;i++){this.map.addControl(this.controls[i]);this.controls[i].deactivate();this.controls[i].events.on({"activate":this.redraw,"deactivate":this.redraw,scope:this});}
this.activate();return this.div;},redraw:function(){this.div.innerHTML="";if(this.active){for(var i=0,len=this.controls.length;i<len;i++){var element=this.controls[i].panel_div;if(this.controls[i].active){element.className=this.controls[i].displayClass+"ItemActive";}else{element.className=this.controls[i].displayClass+"ItemInactive";}
this.div.appendChild(element);}}},activateControl:function(control){if(!this.active){return false;}
if(control.type==OpenLayers.Control.TYPE_BUTTON){control.trigger();this.redraw();return;}
if(control.type==OpenLayers.Control.TYPE_TOGGLE){if(control.active){control.deactivate();}else{control.activate();}
this.redraw();return;}
for(var i=0,len=this.controls.length;i<len;i++){if(this.controls[i]!=control){if(this.controls[i].type!=OpenLayers.Control.TYPE_TOGGLE){this.controls[i].deactivate();}}}
control.activate();},addControls:function(controls){if(!(controls instanceof Array)){controls=[controls];}
this.controls=this.controls.concat(controls);for(var i=0,len=controls.length;i<len;i++){var element=document.createElement("div");var textNode=document.createTextNode(" ");controls[i].panel_div=element;if(controls[i].title!=""){controls[i].panel_div.title=controls[i].title;}
OpenLayers.Event.observe(controls[i].panel_div,"click",OpenLayers.Function.bind(this.onClick,this,controls[i]));OpenLayers.Event.observe(controls[i].panel_div,"mousedown",OpenLayers.Function.bindAsEventListener(OpenLayers.Event.stop));}
if(this.map){for(var i=0,len=controls.length;i<len;i++){this.map.addControl(controls[i]);controls[i].deactivate();controls[i].events.on({"activate":this.redraw,"deactivate":this.redraw,scope:this});}
this.redraw();}},onClick:function(ctrl,evt){OpenLayers.Event.stop(evt?evt:window.event);this.activateControl(ctrl);},getControlsBy:function(property,match){var test=(typeof match.test=="function");var found=OpenLayers.Array.filter(this.controls,function(item){return item[property]==match||(test&&match.test(item[property]));});return found;},getControlsByName:function(match){return this.getControlsBy("name",match);},getControlsByClass:function(match){return this.getControlsBy("CLASS_NAME",match);},CLASS_NAME:"OpenLayers.Control.Panel"});OpenLayers.Event={observers:false,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(event){return event.target||event.srcElement;},isLeftClick:function(event){return(((event.which)&&(event.which==1))||((event.button)&&(event.button==1)));},isRightClick:function(event){return(((event.which)&&(event.which==3))||((event.button)&&(event.button==2)));},stop:function(event,allowDefault){if(!allowDefault){if(event.preventDefault){event.preventDefault();}else{event.returnValue=false;}}
if(event.stopPropagation){event.stopPropagation();}else{event.cancelBubble=true;}},findElement:function(event,tagName){var element=OpenLayers.Event.element(event);while(element.parentNode&&(!element.tagName||(element.tagName.toUpperCase()!=tagName.toUpperCase()))){element=element.parentNode;}
return element;},observe:function(elementParam,name,observer,useCapture){var element=OpenLayers.Util.getElement(elementParam);useCapture=useCapture||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.attachEvent)){name='keydown';}
if(!this.observers){this.observers={};}
if(!element._eventCacheID){var idPrefix="eventCacheID_";if(element.id){idPrefix=element.id+"_"+idPrefix;}
element._eventCacheID=OpenLayers.Util.createUniqueID(idPrefix);}
var cacheID=element._eventCacheID;if(!this.observers[cacheID]){this.observers[cacheID]=[];}
this.observers[cacheID].push({'element':element,'name':name,'observer':observer,'useCapture':useCapture});if(element.addEventListener){element.addEventListener(name,observer,useCapture);}else if(element.attachEvent){element.attachEvent('on'+name,observer);}},stopObservingElement:function(elementParam){var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;this._removeElementObservers(OpenLayers.Event.observers[cacheID]);},_removeElementObservers:function(elementObservers){if(elementObservers){for(var i=elementObservers.length-1;i>=0;i--){var entry=elementObservers[i];var args=new Array(entry.element,entry.name,entry.observer,entry.useCapture);var removed=OpenLayers.Event.stopObserving.apply(this,args);}}},stopObserving:function(elementParam,name,observer,useCapture){useCapture=useCapture||false;var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;if(name=='keypress'){if(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.detachEvent){name='keydown';}}
var foundEntry=false;var elementObservers=OpenLayers.Event.observers[cacheID];if(elementObservers){var i=0;while(!foundEntry&&i<elementObservers.length){var cacheEntry=elementObservers[i];if((cacheEntry.name==name)&&(cacheEntry.observer==observer)&&(cacheEntry.useCapture==useCapture)){elementObservers.splice(i,1);if(elementObservers.length==0){delete OpenLayers.Event.observers[cacheID];}
foundEntry=true;break;}
i++;}}
if(foundEntry){if(element.removeEventListener){element.removeEventListener(name,observer,useCapture);}else if(element&&element.detachEvent){element.detachEvent('on'+name,observer);}}
return foundEntry;},unloadCache:function(){if(OpenLayers.Event&&OpenLayers.Event.observers){for(var cacheID in OpenLayers.Event.observers){var elementObservers=OpenLayers.Event.observers[cacheID];OpenLayers.Event._removeElementObservers.apply(this,[elementObservers]);}
OpenLayers.Event.observers=false;}},CLASS_NAME:"OpenLayers.Event"};OpenLayers.Event.observe(window,'unload',OpenLayers.Event.unloadCache,false);if(window.Event){OpenLayers.Util.applyDefaults(window.Event,OpenLayers.Event);}else{var Event=OpenLayers.Event;}
OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:["mouseover","mouseout","mousedown","mouseup","mousemove","click","dblclick","rightclick","dblrightclick","resize","focus","blur"],listeners:null,object:null,element:null,eventTypes:null,eventHandler:null,fallThrough:null,includeXY:false,initialize:function(object,element,eventTypes,fallThrough,options){OpenLayers.Util.extend(this,options);this.object=object;this.element=element;this.fallThrough=fallThrough;this.listeners={};this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this);this.eventTypes=[];if(eventTypes!=null){for(var i=0,len=eventTypes.length;i<len;i++){this.addEventType(eventTypes[i]);}}
if(this.element!=null){this.attachToElement(element);}},destroy:function(){if(this.element){OpenLayers.Event.stopObservingElement(this.element);}
this.element=null;this.listeners=null;this.object=null;this.eventTypes=null;this.fallThrough=null;this.eventHandler=null;},addEventType:function(eventName){if(!this.listeners[eventName]){this.eventTypes.push(eventName);this.listeners[eventName]=[];}},attachToElement:function(element){for(var i=0,len=this.BROWSER_EVENTS.length;i<len;i++){var eventType=this.BROWSER_EVENTS[i];this.addEventType(eventType);OpenLayers.Event.observe(element,eventType,this.eventHandler);}
OpenLayers.Event.observe(element,"dragstart",OpenLayers.Event.stop);},on:function(object){for(var type in object){if(type!="scope"){this.register(type,object.scope,object[type]);}}},register:function(type,obj,func){if((func!=null)&&(OpenLayers.Util.indexOf(this.eventTypes,type)!=-1)){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];listeners.push({obj:obj,func:func});}},registerPriority:function(type,obj,func){if(func!=null){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){listeners.unshift({obj:obj,func:func});}}},un:function(object){for(var type in object){if(type!="scope"){this.unregister(type,object.scope,object[type]);}}},unregister:function(type,obj,func){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){for(var i=0,len=listeners.length;i<len;i++){if(listeners[i].obj==obj&&listeners[i].func==func){listeners.splice(i,1);break;}}}},remove:function(type){if(this.listeners[type]!=null){this.listeners[type]=[];}},triggerEvent:function(type,evt){if(evt==null){evt={};}
evt.object=this.object;evt.element=this.element;if(!evt.type){evt.type=type;}
var listeners=(this.listeners[type])?this.listeners[type].slice():null;if((listeners!=null)&&(listeners.length>0)){var continueChain;for(var i=0,len=listeners.length;i<len;i++){var callback=listeners[i];continueChain=callback.func.apply(callback.obj,[evt]);if((continueChain!=undefined)&&(continueChain==false)){break;}}
if(!this.fallThrough){OpenLayers.Event.stop(evt,true);}}
return continueChain;},handleBrowserEvent:function(evt){if(this.includeXY){evt.xy=this.getMousePosition(evt);}
this.triggerEvent(evt.type,evt);},clearMouseCache:function(){this.element.scrolls=null;this.element.lefttop=null;this.element.offsets=null;},getMousePosition:function(evt){if(!this.includeXY){this.clearMouseCache();}else if(!this.element.hasScrollEvent){OpenLayers.Event.observe(window,'scroll',OpenLayers.Function.bind(this.clearMouseCache,this));this.element.hasScrollEvent=true;}
if(!this.element.scrolls){this.element.scrolls=[];this.element.scrolls[0]=(document.documentElement.scrollLeft||document.body.scrollLeft);this.element.scrolls[1]=(document.documentElement.scrollTop||document.body.scrollTop);}
if(!this.element.lefttop){this.element.lefttop=[];this.element.lefttop[0]=(document.documentElement.clientLeft||0);this.element.lefttop[1]=(document.documentElement.clientTop||0);}
if(!this.element.offsets){this.element.offsets=OpenLayers.Util.pagePosition(this.element);this.element.offsets[0]+=this.element.scrolls[0];this.element.offsets[1]+=this.element.scrolls[1];}
return new OpenLayers.Pixel((evt.clientX+this.element.scrolls[0])-this.element.offsets[0]
-this.element.lefttop[0],(evt.clientY+this.element.scrolls[1])-this.element.offsets[1]
-this.element.lefttop[1]);},CLASS_NAME:"OpenLayers.Events"});OpenLayers.Format=OpenLayers.Class({options:null,externalProjection:null,internalProjection:null,initialize:function(options){OpenLayers.Util.extend(this,options);this.options=options;},destroy:function(){},read:function(data){OpenLayers.Console.userError(OpenLayers.i18n("readNotImplemented"));},write:function(object){OpenLayers.Console.userError(OpenLayers.i18n("writeNotImplemented"));},CLASS_NAME:"OpenLayers.Format"});OpenLayers.Lang.en={'unhandledRequest':"Unhandled request return ${statusText}",'permalink':"Permalink",'overlays':"Overlays",'baseLayer':"Base Layer",'sameProjection':"The overview map only works when it is in the same projection as the main map",'readNotImplemented':"Read not implemented.",'writeNotImplemented':"Write not implemented.",'noFID':"Can't update a feature for which there is no FID.",'errorLoadingGML':"Error in loading GML file ${url}",'browserNotSupported':"Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}",'componentShouldBe':"addFeatures : component should be an ${geomType}",'getFeatureError':"getFeatureFromEvent called on layer with no renderer. This usually means you "+"destroyed a layer, but not some handler which is associated with it.",'minZoomLevelError':"The minZoomLevel property is only intended for use "+"with the FixedZoomLevels-descendent layers. That this "+"wfs layer checks for minZoomLevel is a relic of the"+"past. We cannot, however, remove it without possibly "+"breaking OL based applications that may depend on it."+" Therefore we are deprecating it -- the minZoomLevel "+"check below will be removed at 3.0. Please instead "+"use min/max resolution setting as described here: "+"http://trac.openlayers.org/wiki/SettingZoomLevels",'commitSuccess':"WFS Transaction: SUCCESS ${response}",'commitFailed':"WFS Transaction: FAILED ${response}",'googleWarning':"The Google Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the Google Maps library "+"script was either not included, or does not contain the "+"correct API key for your site.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/Google' "+"target='_blank'>click here</a>",'getLayerWarning':"The ${layerType} Layer was unable to load correctly.<br><br>"+"To get rid of this message, select a new BaseLayer "+"in the layer switcher in the upper-right corner.<br><br>"+"Most likely, this is because the ${layerLib} library "+"script was not correctly included.<br><br>"+"Developers: For help getting this working correctly, "+"<a href='http://trac.openlayers.org/wiki/${layerLib}' "+"target='_blank'>click here</a>",'scale':"Scale = 1 : ${scaleDenom}",'layerAlreadyAdded':"You tried to add the layer: ${layerName} to the map, but it has already been added",'reprojectDeprecated':"You are using the 'reproject' option "+"on the ${layerName} layer. This option is deprecated: "+"its use was designed to support displaying data over commercial "+"basemaps, but that functionality should now be achieved by using "+"Spherical Mercator support. More information is available from "+"http://trac.openlayers.org/wiki/SphericalMercator.",'methodDeprecated':"This method has been deprecated and will be removed in 3.0. "+"Please use ${newMethod} instead.",'boundsAddError':"You must pass both x and y values to the add function.",'lonlatAddError':"You must pass both lon and lat values to the add function.",'pixelAddError':"You must pass both x and y values to the add function.",'unsupportedGeometryType':"Unsupported geometry type: ${geomType}",'pagePositionFailed':"OpenLayers.Util.pagePosition failed: element with id ${elemId} may be misplaced.",'end':'','filterEvaluateNotImplemented':"evaluate is not implemented for this filter type."};OpenLayers.Popup.Anchored=OpenLayers.Class(OpenLayers.Popup,{relativePosition:null,anchor:null,initialize:function(id,lonlat,contentSize,contentHTML,anchor,closeBox,closeBoxCallback){var newArguments=[id,lonlat,contentSize,contentHTML,closeBox,closeBoxCallback];OpenLayers.Popup.prototype.initialize.apply(this,newArguments);this.anchor=(anchor!=null)?anchor:{size:new OpenLayers.Size(0,0),offset:new OpenLayers.Pixel(0,0)};},destroy:function(){this.anchor=null;this.relativePosition=null;OpenLayers.Popup.prototype.destroy.apply(this,arguments);},show:function(){this.updatePosition();OpenLayers.Popup.prototype.show.apply(this,arguments);},moveTo:function(px){var oldRelativePosition=this.relativePosition;this.relativePosition=this.calculateRelativePosition(px);var newPx=this.calculateNewPx(px);var newArguments=new Array(newPx);OpenLayers.Popup.prototype.moveTo.apply(this,newArguments);if(this.relativePosition!=oldRelativePosition){this.updateRelativePosition();}},setSize:function(contentSize){OpenLayers.Popup.prototype.setSize.apply(this,arguments);if((this.lonlat)&&(this.map)){var px=this.map.getLayerPxFromLonLat(this.lonlat);this.moveTo(px);}},calculateRelativePosition:function(px){var lonlat=this.map.getLonLatFromLayerPx(px);var extent=this.map.getExtent();var quadrant=extent.determineQuadrant(lonlat);return OpenLayers.Bounds.oppositeQuadrant(quadrant);},updateRelativePosition:function(){},calculateNewPx:function(px){var newPx=px.offset(this.anchor.offset);var size=this.size||this.contentSize;var top=(this.relativePosition.charAt(0)=='t');newPx.y+=(top)?-size.h:this.anchor.size.h;var left=(this.relativePosition.charAt(1)=='l');newPx.x+=(left)?-size.w:this.anchor.size.w;return newPx;},CLASS_NAME:"OpenLayers.Popup.Anchored"});OpenLayers.Projection=OpenLayers.Class({proj:null,projCode:null,initialize:function(projCode,options){OpenLayers.Util.extend(this,options);this.projCode=projCode;if(window.Proj4js){this.proj=new Proj4js.Proj(projCode);}},getCode:function(){return this.proj?this.proj.srsCode:this.projCode;},getUnits:function(){return this.proj?this.proj.units:null;},toString:function(){return this.getCode();},equals:function(projection){if(projection&&projection.getCode){return this.getCode()==projection.getCode();}else{return false;}},destroy:function(){delete this.proj;delete this.projCode;},CLASS_NAME:"OpenLayers.Projection"});OpenLayers.Projection.transforms={};OpenLayers.Projection.addTransform=function(from,to,method){if(!OpenLayers.Projection.transforms[from]){OpenLayers.Projection.transforms[from]={};}
OpenLayers.Projection.transforms[from][to]=method;};OpenLayers.Projection.transform=function(point,source,dest){if(source.proj&&dest.proj){point=Proj4js.transform(source.proj,dest.proj,point);}else if(source&&dest&&OpenLayers.Projection.transforms[source.getCode()]&&OpenLayers.Projection.transforms[source.getCode()][dest.getCode()]){OpenLayers.Projection.transforms[source.getCode()][dest.getCode()](point);}
return point;};OpenLayers.Protocol.SQL=OpenLayers.Class(OpenLayers.Protocol,{databaseName:'ol',tableName:"ol_vector_features",postReadFiltering:true,initialize:function(options){OpenLayers.Protocol.prototype.initialize.apply(this,[options]);},destroy:function(){OpenLayers.Protocol.prototype.destroy.apply(this);},supported:function(){return false;},evaluateFilter:function(feature,filter){return filter&&this.postReadFiltering?filter.evaluate(feature):true;},CLASS_NAME:"OpenLayers.Protocol.SQL"});(function(){var oXMLHttpRequest=window.XMLHttpRequest;var bGecko=!!window.controllers,bIE=window.document.all&&!window.opera;function cXMLHttpRequest(){this._object=oXMLHttpRequest?new oXMLHttpRequest:new window.ActiveXObject('Microsoft.XMLHTTP');};if(bGecko&&oXMLHttpRequest.wrapped)
cXMLHttpRequest.wrapped=oXMLHttpRequest.wrapped;cXMLHttpRequest.UNSENT=0;cXMLHttpRequest.OPENED=1;cXMLHttpRequest.HEADERS_RECEIVED=2;cXMLHttpRequest.LOADING=3;cXMLHttpRequest.DONE=4;cXMLHttpRequest.prototype.readyState=cXMLHttpRequest.UNSENT;cXMLHttpRequest.prototype.responseText="";cXMLHttpRequest.prototype.responseXML=null;cXMLHttpRequest.prototype.status=0;cXMLHttpRequest.prototype.statusText="";cXMLHttpRequest.prototype.onreadystatechange=null;cXMLHttpRequest.onreadystatechange=null;cXMLHttpRequest.onopen=null;cXMLHttpRequest.onsend=null;cXMLHttpRequest.onabort=null;cXMLHttpRequest.prototype.open=function(sMethod,sUrl,bAsync,sUser,sPassword){this._async=bAsync;var oRequest=this,nState=this.readyState;if(bIE){var fOnUnload=function(){if(oRequest._object.readyState!=cXMLHttpRequest.DONE)
fCleanTransport(oRequest);};if(bAsync)
window.attachEvent("onunload",fOnUnload);}
this._object.onreadystatechange=function(){if(bGecko&&!bAsync)
return;oRequest.readyState=oRequest._object.readyState;fSynchronizeValues(oRequest);if(oRequest._aborted){oRequest.readyState=cXMLHttpRequest.UNSENT;return;}
if(oRequest.readyState==cXMLHttpRequest.DONE){fCleanTransport(oRequest);if(bIE&&bAsync)
window.detachEvent("onunload",fOnUnload);}
if(nState!=oRequest.readyState)
fReadyStateChange(oRequest);nState=oRequest.readyState;};if(cXMLHttpRequest.onopen)
cXMLHttpRequest.onopen.apply(this,arguments);this._object.open(sMethod,sUrl,bAsync,sUser,sPassword);if(!bAsync&&bGecko){this.readyState=cXMLHttpRequest.OPENED;fReadyStateChange(this);}};cXMLHttpRequest.prototype.send=function(vData){if(cXMLHttpRequest.onsend)
cXMLHttpRequest.onsend.apply(this,arguments);if(vData&&vData.nodeType){vData=window.XMLSerializer?new window.XMLSerializer().serializeToString(vData):vData.xml;if(!this._headers["Content-Type"])
this._object.setRequestHeader("Content-Type","application/xml");}
this._object.send(vData);if(bGecko&&!this._async){this.readyState=cXMLHttpRequest.OPENED;fSynchronizeValues(this);while(this.readyState<cXMLHttpRequest.DONE){this.readyState++;fReadyStateChange(this);if(this._aborted)
return;}}};cXMLHttpRequest.prototype.abort=function(){if(cXMLHttpRequest.onabort)
cXMLHttpRequest.onabort.apply(this,arguments);if(this.readyState>cXMLHttpRequest.UNSENT)
this._aborted=true;this._object.abort();fCleanTransport(this);};cXMLHttpRequest.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders();};cXMLHttpRequest.prototype.getResponseHeader=function(sName){return this._object.getResponseHeader(sName);};cXMLHttpRequest.prototype.setRequestHeader=function(sName,sValue){if(!this._headers)
this._headers={};this._headers[sName]=sValue;return this._object.setRequestHeader(sName,sValue);};cXMLHttpRequest.prototype.toString=function(){return'['+"object"+' '+"XMLHttpRequest"+']';};cXMLHttpRequest.toString=function(){return'['+"XMLHttpRequest"+']';};function fReadyStateChange(oRequest){if(oRequest.onreadystatechange)
oRequest.onreadystatechange.apply(oRequest);if(cXMLHttpRequest.onreadystatechange)
cXMLHttpRequest.onreadystatechange.apply(oRequest);};function fGetDocument(oRequest){var oDocument=oRequest.responseXML;if(bIE&&oDocument&&!oDocument.documentElement&&oRequest.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)){oDocument=new ActiveXObject('Microsoft.XMLDOM');oDocument.loadXML(oRequest.responseText);}
if(oDocument)
if((bIE&&oDocument.parseError!=0)||(oDocument.documentElement&&oDocument.documentElement.tagName=="parsererror"))
return null;return oDocument;};function fSynchronizeValues(oRequest){try{oRequest.responseText=oRequest._object.responseText;}catch(e){}
try{oRequest.responseXML=fGetDocument(oRequest._object);}catch(e){}
try{oRequest.status=oRequest._object.status;}catch(e){}
try{oRequest.statusText=oRequest._object.statusText;}catch(e){}};function fCleanTransport(oRequest){oRequest._object.onreadystatechange=new window.Function;delete oRequest._headers;};if(!window.Function.prototype.apply){window.Function.prototype.apply=function(oRequest,oArguments){if(!oArguments)
oArguments=[];oRequest.__func=this;oRequest.__func(oArguments[0],oArguments[1],oArguments[2],oArguments[3],oArguments[4]);delete oRequest.__func;};};OpenLayers.Request.XMLHttpRequest=cXMLHttpRequest;})();OpenLayers.Strategy.Cluster=OpenLayers.Class(OpenLayers.Strategy,{layer:null,distance:20,features:null,clusters:null,clustering:false,resolution:null,initialize:function(options){OpenLayers.Strategy.prototype.initialize.apply(this,[options]);},activate:function(){var activated=OpenLayers.Strategy.prototype.activate.call(this);if(activated){this.layer.events.on({"beforefeaturesadded":this.cacheFeatures,scope:this});this.layer.map.events.on({"zoomend":this.cluster,scope:this});}
return activated;},deactivate:function(){var deactivated=OpenLayers.Strategy.prototype.deactivate.call(this);if(deactivated){this.clearCache();this.layer.events.un({"beforefeaturesadded":this.cacheFeatures,scope:this});this.layer.map.events.un({"zoomend":this.cluster,scope:this});}
return deactivated;},cacheFeatures:function(event){var propagate=true;if(!this.clustering){this.clearCache();this.features=event.features;this.cluster();propagate=false;}
return propagate;},clearCache:function(){if(this.features){for(var i=0;i<this.features.length;++i){this.features[i].destroy();}}
this.features=null;},cluster:function(){if(this.features){var resolution=this.layer.getResolution();if(resolution!=this.resolution||!this.clustersExist()){this.resolution=resolution;var clusters=[];var feature,clustered,cluster;for(var i=0;i<this.features.length;++i){feature=this.features[i];clustered=false;for(var j=0;j<clusters.length;++j){cluster=clusters[j];if(this.shouldCluster(cluster,feature)){this.addToCluster(cluster,feature);clustered=true;break;}}
if(!clustered){clusters.push(this.createCluster(this.features[i]));}}
this.layer.destroyFeatures();if(clusters.length>0){this.clustering=true;this.layer.addFeatures(clusters);this.clustering=false;}
this.clusters=clusters;}}},clustersExist:function(){var exist=false;if(this.clusters&&this.clusters.length>0&&this.clusters.length==this.layer.features.length){exist=true;for(var i=0;i<this.clusters.length;++i){if(this.clusters[i]!=this.layer.features[i]){exist=false;break;}}}
return exist;},shouldCluster:function(cluster,feature){var cc=cluster.geometry.getBounds().getCenterLonLat();var fc=feature.geometry.getBounds().getCenterLonLat();var distance=(Math.sqrt(Math.pow((cc.lon-fc.lon),2)+Math.pow((cc.lat-fc.lat),2))/this.resolution);return(distance<=this.distance);},addToCluster:function(cluster,feature){cluster.cluster.push(feature);cluster.attributes.count+=1;},createCluster:function(feature){var center=feature.geometry.getBounds().getCenterLonLat();var cluster=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(center.lon,center.lat),{count:1});cluster.cluster=[feature];return cluster;},CLASS_NAME:"OpenLayers.Strategy.Cluster"});OpenLayers.Strategy.Paging=OpenLayers.Class(OpenLayers.Strategy,{layer:null,features:null,length:10,num:null,paging:false,initialize:function(options){OpenLayers.Strategy.prototype.initialize.apply(this,[options]);},activate:function(){var activated=OpenLayers.Strategy.prototype.activate.call(this);if(activated){this.layer.events.on({"beforefeaturesadded":this.cacheFeatures,scope:this});}
return activated;},deactivate:function(){var deactivated=OpenLayers.Strategy.prototype.deactivate.call(this);if(deactivated){this.clearCache();this.layer.events.un({"beforefeaturesadded":this.cacheFeatures,scope:this});}
return deactivated;},cacheFeatures:function(event){if(!this.paging){this.clearCache();this.features=event.features;this.pageNext(event);}},clearCache:function(){if(this.features){for(var i=0;i<this.features.length;++i){this.features[i].destroy();}}
this.features=null;this.num=null;},pageCount:function(){var numFeatures=this.features?this.features.length:0;return Math.ceil(numFeatures/this.length);},pageNum:function(){return this.num;},pageLength:function(newLength){if(newLength&&newLength>0){this.length=newLength;}
return this.length;},pageNext:function(event){var changed=false;if(this.features){if(this.num===null){this.num=-1;}
var start=(this.num+1)*this.length;changed=this.page(start,event);}
return changed;},pagePrevious:function(){var changed=false;if(this.features){if(this.num===null){this.num=this.pageCount();}
var start=(this.num-1)*this.length;changed=this.page(start);}
return changed;},page:function(start,event){var changed=false;if(this.features){if(start>=0&&start<this.features.length){var num=Math.floor(start/this.length);if(num!=this.num){this.paging=true;var features=this.features.slice(start,start+this.length);this.layer.removeFeatures(this.layer.features);this.num=num;if(event&&event.features){event.features=features;}else{this.layer.addFeatures(features);}
this.paging=false;changed=true;}}}
return changed;},CLASS_NAME:"OpenLayers.Strategy.Paging"});OpenLayers.Tile=OpenLayers.Class({EVENT_TYPES:["loadstart","loadend","reload","unload"],events:null,id:null,layer:null,url:null,bounds:null,size:null,position:null,isLoading:false,initialize:function(layer,position,bounds,url,size){this.layer=layer;this.position=position.clone();this.bounds=bounds.clone();this.url=url;this.size=size.clone();this.id=OpenLayers.Util.createUniqueID("Tile_");this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES);},unload:function(){if(this.isLoading){this.isLoading=false;this.events.triggerEvent("unload");}},destroy:function(){this.layer=null;this.bounds=null;this.size=null;this.position=null;this.events.destroy();this.events=null;},clone:function(obj){if(obj==null){obj=new OpenLayers.Tile(this.layer,this.position,this.bounds,this.url,this.size);}
OpenLayers.Util.applyDefaults(obj,this);return obj;},draw:function(){var maxExtent=this.layer.maxExtent;var withinMaxExtent=(maxExtent&&this.bounds.intersectsBounds(maxExtent,false));this.shouldDraw=(withinMaxExtent||this.layer.displayOutsideMaxExtent);this.clear();return this.shouldDraw;},moveTo:function(bounds,position,redraw){if(redraw==null){redraw=true;}
this.bounds=bounds.clone();this.position=position.clone();if(redraw){this.draw();}},clear:function(){},getBoundsFromBaseLayer:function(position){var msg=OpenLayers.i18n('reprojectDeprecated',{'layerName':this.layer.name});OpenLayers.Console.warn(msg);var topLeft=this.layer.map.getLonLatFromLayerPx(position);var bottomRightPx=position.clone();bottomRightPx.x+=this.size.w;bottomRightPx.y+=this.size.h;var bottomRight=this.layer.map.getLonLatFromLayerPx(bottomRightPx);if(topLeft.lon>bottomRight.lon){if(topLeft.lon<0){topLeft.lon=-180-(topLeft.lon+180);}else{bottomRight.lon=180+bottomRight.lon+180;}}
var bounds=new OpenLayers.Bounds(topLeft.lon,bottomRight.lat,bottomRight.lon,topLeft.lat);return bounds;},showTile:function(){if(this.shouldDraw){this.show();}},show:function(){},hide:function(){},CLASS_NAME:"OpenLayers.Tile"});OpenLayers.ProxyHost="";OpenLayers.nullHandler=function(request){OpenLayers.Console.userError(OpenLayers.i18n("unhandledRequest",{'statusText':request.statusText}));};OpenLayers.loadURL=function(uri,params,caller,onComplete,onFailure){if(typeof params=='string'){params=OpenLayers.Util.getParameters(params);}
var success=(onComplete)?onComplete:OpenLayers.nullHandler;var failure=(onFailure)?onFailure:OpenLayers.nullHandler;return OpenLayers.Request.GET({url:uri,params:params,success:success,failure:failure,scope:caller});};OpenLayers.parseXMLString=function(text){var index=text.indexOf('<');if(index>0){text=text.substring(index);}
var ajaxResponse=OpenLayers.Util.Try(function(){var xmldom=new ActiveXObject('Microsoft.XMLDOM');xmldom.loadXML(text);return xmldom;},function(){return new DOMParser().parseFromString(text,'text/xml');},function(){var req=new XMLHttpRequest();req.open("GET","data:"+"text/xml"+";charset=utf-8,"+encodeURIComponent(text),false);if(req.overrideMimeType){req.overrideMimeType("text/xml");}
req.send(null);return req.responseXML;});return ajaxResponse;};OpenLayers.Ajax={emptyFunction:function(){},getTransport:function(){return OpenLayers.Util.Try(function(){return new XMLHttpRequest();},function(){return new ActiveXObject('Msxml2.XMLHTTP');},function(){return new ActiveXObject('Microsoft.XMLHTTP');})||false;},activeRequestCount:0};OpenLayers.Ajax.Responders={responders:[],register:function(responderToAdd){for(var i=0;i<this.responders.length;i++){if(responderToAdd==this.responders[i]){return;}}
this.responders.push(responderToAdd);},unregister:function(responderToRemove){OpenLayers.Util.removeItem(this.reponders,responderToRemove);},dispatch:function(callback,request,transport){var responder;for(var i=0;i<this.responders.length;i++){responder=this.responders[i];if(responder[callback]&&typeof responder[callback]=='function'){try{responder[callback].apply(responder,[request,transport]);}catch(e){}}}}};OpenLayers.Ajax.Responders.register({onCreate:function(){OpenLayers.Ajax.activeRequestCount++;},onComplete:function(){OpenLayers.Ajax.activeRequestCount--;}});OpenLayers.Ajax.Base=OpenLayers.Class({initialize:function(options){this.options={method:'post',asynchronous:true,contentType:'application/xml',parameters:''};OpenLayers.Util.extend(this.options,options||{});this.options.method=this.options.method.toLowerCase();if(typeof this.options.parameters=='string'){this.options.parameters=OpenLayers.Util.getParameters(this.options.parameters);}}});OpenLayers.Ajax.Request=OpenLayers.Class(OpenLayers.Ajax.Base,{_complete:false,initialize:function(url,options){OpenLayers.Ajax.Base.prototype.initialize.apply(this,[options]);if(OpenLayers.ProxyHost&&OpenLayers.String.startsWith(url,"http")){url=OpenLayers.ProxyHost+encodeURIComponent(url);}
this.transport=OpenLayers.Ajax.getTransport();this.request(url);},request:function(url){this.url=url;this.method=this.options.method;var params=OpenLayers.Util.extend({},this.options.parameters);if(this.method!='get'&&this.method!='post'){params['_method']=this.method;this.method='post';}
this.parameters=params;if(params=OpenLayers.Util.getParameterString(params)){if(this.method=='get'){this.url+=((this.url.indexOf('?')>-1)?'&':'?')+params;}else if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)){params+='&_=';}}
try{var response=new OpenLayers.Ajax.Response(this);if(this.options.onCreate){this.options.onCreate(response);}
OpenLayers.Ajax.Responders.dispatch('onCreate',this,response);this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);if(this.options.asynchronous){window.setTimeout(OpenLayers.Function.bind(this.respondToReadyState,this,1),10);}
this.transport.onreadystatechange=OpenLayers.Function.bind(this.onStateChange,this);this.setRequestHeaders();this.body=this.method=='post'?(this.options.postBody||params):null;this.transport.send(this.body);if(!this.options.asynchronous&&this.transport.overrideMimeType){this.onStateChange();}}catch(e){this.dispatchException(e);}},onStateChange:function(){var readyState=this.transport.readyState;if(readyState>1&&!((readyState==4)&&this._complete)){this.respondToReadyState(this.transport.readyState);}},setRequestHeaders:function(){var headers={'X-Requested-With':'XMLHttpRequest','Accept':'text/javascript, text/html, application/xml, text/xml, */*','OpenLayers':true};if(this.method=='post'){headers['Content-type']=this.options.contentType+
(this.options.encoding?'; charset='+this.options.encoding:'');if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005){headers['Connection']='close';}}
if(typeof this.options.requestHeaders=='object'){var extras=this.options.requestHeaders;if(typeof extras.push=='function'){for(var i=0,length=extras.length;i<length;i+=2){headers[extras[i]]=extras[i+1];}}else{for(var i in extras){headers[i]=extras[i];}}}
for(var name in headers){this.transport.setRequestHeader(name,headers[name]);}},success:function(){var status=this.getStatus();return!status||(status>=200&&status<300);},getStatus:function(){try{return this.transport.status||0;}catch(e){return 0;}},respondToReadyState:function(readyState){var state=OpenLayers.Ajax.Request.Events[readyState];var response=new OpenLayers.Ajax.Response(this);if(state=='Complete'){try{this._complete=true;(this.options['on'+response.status]||this.options['on'+(this.success()?'Success':'Failure')]||OpenLayers.Ajax.emptyFunction)(response);}catch(e){this.dispatchException(e);}
var contentType=response.getHeader('Content-type');}
try{(this.options['on'+state]||OpenLayers.Ajax.emptyFunction)(response);OpenLayers.Ajax.Responders.dispatch('on'+state,this,response);}catch(e){this.dispatchException(e);}
if(state=='Complete'){this.transport.onreadystatechange=OpenLayers.Ajax.emptyFunction;}},getHeader:function(name){try{return this.transport.getResponseHeader(name);}catch(e){return null;}},dispatchException:function(exception){var handler=this.options.onException;if(handler){handler(this,exception);OpenLayers.Ajax.Responders.dispatch('onException',this,exception);}else{var listener=false;var responders=OpenLayers.Ajax.Responders.responders;for(var i=0;i<responders.length;i++){if(responders[i].onException){listener=true;break;}}
if(listener){OpenLayers.Ajax.Responders.dispatch('onException',this,exception);}else{throw exception;}}}});OpenLayers.Ajax.Request.Events=['Uninitialized','Loading','Loaded','Interactive','Complete'];OpenLayers.Ajax.Response=OpenLayers.Class({status:0,statusText:'',initialize:function(request){this.request=request;var transport=this.transport=request.transport,readyState=this.readyState=transport.readyState;if((readyState>2&&!(!!(window.attachEvent&&!window.opera)))||readyState==4){this.status=this.getStatus();this.statusText=this.getStatusText();this.responseText=transport.responseText==null?'':String(transport.responseText);}
if(readyState==4){var xml=transport.responseXML;this.responseXML=xml===undefined?null:xml;}},getStatus:OpenLayers.Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||'';}catch(e){return'';}},getHeader:OpenLayers.Ajax.Request.prototype.getHeader,getResponseHeader:function(name){return this.transport.getResponseHeader(name);}});OpenLayers.Ajax.getElementsByTagNameNS=function(parentnode,nsuri,nsprefix,tagname){var elem=null;if(parentnode.getElementsByTagNameNS){elem=parentnode.getElementsByTagNameNS(nsuri,tagname);}else{elem=parentnode.getElementsByTagName(nsprefix+':'+tagname);}
return elem;};OpenLayers.Ajax.serializeXMLToString=function(xmldom){var serializer=new XMLSerializer();var data=serializer.serializeToString(xmldom);return data;};OpenLayers.Control.PanZoomBar=OpenLayers.Class(OpenLayers.Control.PanZoom,{zoomStopWidth:18,zoomStopHeight:11,slider:null,sliderEvents:null,zoomBarDiv:null,divEvents:null,zoomWorldIcon:false,initialize:function(){OpenLayers.Control.PanZoom.prototype.initialize.apply(this,arguments);},destroy:function(){this.div.removeChild(this.slider);this.slider=null;this.sliderEvents.destroy();this.sliderEvents=null;this.div.removeChild(this.zoombarDiv);this.zoomBarDiv=null;this.divEvents.destroy();this.divEvents=null;this.map.events.un({"zoomend":this.moveZoomBar,"changebaselayer":this.redraw,scope:this});OpenLayers.Control.PanZoom.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.PanZoom.prototype.setMap.apply(this,arguments);this.map.events.register("changebaselayer",this,this.redraw);},redraw:function(){if(this.div!=null){this.div.innerHTML="";}
this.draw();},draw:function(px){OpenLayers.Control.prototype.draw.apply(this,arguments);px=this.position.clone();this.buttons=[];var sz=new OpenLayers.Size(18,18);var centered=new OpenLayers.Pixel(px.x+sz.w/2,px.y);var wposition=sz.w;if(this.zoomWorldIcon){centered=new OpenLayers.Pixel(px.x+sz.w,px.y);}
this._addButton("panup","north-mini.png",centered,sz);px.y=centered.y+sz.h;this._addButton("panleft","west-mini.png",px,sz);if(this.zoomWorldIcon){this._addButton("zoomworld","zoom-world-mini.png",px.add(sz.w,0),sz);wposition*=2;}
this._addButton("panright","east-mini.png",px.add(wposition,0),sz);this._addButton("pandown","south-mini.png",centered.add(0,sz.h*2),sz);this._addButton("zoomin","zoom-plus-mini.png",centered.add(0,sz.h*3+5),sz);centered=this._addZoomBar(centered.add(0,sz.h*4+5));this._addButton("zoomout","zoom-minus-mini.png",centered,sz);return this.div;},_addZoomBar:function(centered){var imgLocation=OpenLayers.Util.getImagesLocation();var id=this.id+"_"+this.map.id;var zoomsToEnd=this.map.getNumZoomLevels()-1-this.map.getZoom();var slider=OpenLayers.Util.createAlphaImageDiv(id,centered.add(-1,zoomsToEnd*this.zoomStopHeight),new OpenLayers.Size(20,9),imgLocation+"slider.png","absolute");this.slider=slider;this.sliderEvents=new OpenLayers.Events(this,slider,null,true,{includeXY:true});this.sliderEvents.on({"mousedown":this.zoomBarDown,"mousemove":this.zoomBarDrag,"mouseup":this.zoomBarUp,"dblclick":this.doubleClick,"click":this.doubleClick});var sz=new OpenLayers.Size();sz.h=this.zoomStopHeight*this.map.getNumZoomLevels();sz.w=this.zoomStopWidth;var div=null;if(OpenLayers.Util.alphaHack()){var id=this.id+"_"+this.map.id;div=OpenLayers.Util.createAlphaImageDiv(id,centered,new OpenLayers.Size(sz.w,this.zoomStopHeight),imgLocation+"zoombar.png","absolute",null,"crop");div.style.height=sz.h+"px";}else{div=OpenLayers.Util.createDiv('OpenLayers_Control_PanZoomBar_Zoombar'+this.map.id,centered,sz,imgLocation+"zoombar.png");}
this.zoombarDiv=div;this.divEvents=new OpenLayers.Events(this,div,null,true,{includeXY:true});this.divEvents.on({"mousedown":this.divClick,"mousemove":this.passEventToSlider,"dblclick":this.doubleClick,"click":this.doubleClick});this.div.appendChild(div);this.startTop=parseInt(div.style.top);this.div.appendChild(slider);this.map.events.register("zoomend",this,this.moveZoomBar);centered=centered.add(0,this.zoomStopHeight*this.map.getNumZoomLevels());return centered;},passEventToSlider:function(evt){this.sliderEvents.handleBrowserEvent(evt);},divClick:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
var y=evt.xy.y;var top=OpenLayers.Util.pagePosition(evt.object)[1];var levels=(y-top)/this.zoomStopHeight;if(!this.map.fractionalZoom){levels=Math.floor(levels);}
var zoom=(this.map.getNumZoomLevels()-1)-levels;zoom=Math.min(Math.max(zoom,0),this.map.getNumZoomLevels()-1);this.map.zoomTo(zoom);OpenLayers.Event.stop(evt);},zoomBarDown:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
this.map.events.on({"mousemove":this.passEventToSlider,"mouseup":this.passEventToSlider,scope:this});this.mouseDragStart=evt.xy.clone();this.zoomStart=evt.xy.clone();this.div.style.cursor="move";this.zoombarDiv.offsets=null;OpenLayers.Event.stop(evt);},zoomBarDrag:function(evt){if(this.mouseDragStart!=null){var deltaY=this.mouseDragStart.y-evt.xy.y;var offsets=OpenLayers.Util.pagePosition(this.zoombarDiv);if((evt.clientY-offsets[1])>0&&(evt.clientY-offsets[1])<parseInt(this.zoombarDiv.style.height)-2){var newTop=parseInt(this.slider.style.top)-deltaY;this.slider.style.top=newTop+"px";}
this.mouseDragStart=evt.xy.clone();OpenLayers.Event.stop(evt);}},zoomBarUp:function(evt){if(!OpenLayers.Event.isLeftClick(evt)){return;}
if(this.zoomStart){this.div.style.cursor="";this.map.events.un({"mouseup":this.passEventToSlider,"mousemove":this.passEventToSlider,scope:this});var deltaY=this.zoomStart.y-evt.xy.y;var zoomLevel=this.map.zoom;if(this.map.fractionalZoom){zoomLevel+=deltaY/this.zoomStopHeight;zoomLevel=Math.min(Math.max(zoomLevel,0),this.map.getNumZoomLevels()-1);}else{zoomLevel+=Math.round(deltaY/this.zoomStopHeight);}
this.map.zoomTo(zoomLevel);this.moveZoomBar();this.mouseDragStart=null;OpenLayers.Event.stop(evt);}},moveZoomBar:function(){var newTop=((this.map.getNumZoomLevels()-1)-this.map.getZoom())*this.zoomStopHeight+this.startTop+1;this.slider.style.top=newTop+"px";},CLASS_NAME:"OpenLayers.Control.PanZoomBar"});OpenLayers.Control.Permalink=OpenLayers.Class(OpenLayers.Control,{argParserClass:OpenLayers.Control.ArgParser,element:null,base:'',displayProjection:null,initialize:function(element,base,options){OpenLayers.Control.prototype.initialize.apply(this,[options]);this.element=OpenLayers.Util.getElement(element);this.base=base||document.location.href;},destroy:function(){if(this.element.parentNode==this.div){this.div.removeChild(this.element);}
this.element=null;this.map.events.unregister('moveend',this,this.updateLink);OpenLayers.Control.prototype.destroy.apply(this,arguments);},setMap:function(map){OpenLayers.Control.prototype.setMap.apply(this,arguments);for(var i=0,len=this.map.controls.length;i<len;i++){var control=this.map.controls[i];if(control.CLASS_NAME==this.argParserClass.CLASS_NAME){if(control.displayProjection!=this.displayProjection){this.displayProjection=control.displayProjection;}
break;}}
if(i==this.map.controls.length){this.map.addControl(new this.argParserClass({'displayProjection':this.displayProjection}));}},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.element){this.div.className=this.displayClass;this.element=document.createElement("a");this.element.innerHTML=OpenLayers.i18n("permalink");this.element.href="";this.div.appendChild(this.element);}
this.map.events.on({'moveend':this.updateLink,'changelayer':this.updateLink,'changebaselayer':this.updateLink,scope:this});this.updateLink();return this.div;},updateLink:function(){var href=this.base;if(href.indexOf('?')!=-1){href=href.substring(0,href.indexOf('?'));}
href+='?'+OpenLayers.Util.getParameterString(this.createParams());this.element.href=href;},createParams:function(center,zoom,layers){center=center||this.map.getCenter();var params=OpenLayers.Util.getParameters(this.base);if(center){params.zoom=zoom||this.map.getZoom();var lat=center.lat;var lon=center.lon;if(this.displayProjection){var mapPosition=OpenLayers.Projection.transform({x:lon,y:lat},this.map.getProjectionObject(),this.displayProjection);lon=mapPosition.x;lat=mapPosition.y;}
params.lat=Math.round(lat*100000)/100000;params.lon=Math.round(lon*100000)/100000;layers=layers||this.map.layers;params.layers='';for(var i=0,len=layers.length;i<len;i++){var layer=layers[i];if(layer.isBaseLayer){params.layers+=(layer==this.map.baseLayer)?"B":"0";}else{params.layers+=(layer.getVisibility())?"T":"F";}}}
return params;},CLASS_NAME:"OpenLayers.Control.Permalink"});OpenLayers.Format.JSON=OpenLayers.Class(OpenLayers.Format,{indent:"    ",space:" ",newline:"\n",level:0,pretty:false,initialize:function(options){OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(json,filter){try{if(/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){var object=eval('('+json+')');if(typeof filter==='function'){function walk(k,v){if(v&&typeof v==='object'){for(var i in v){if(v.hasOwnProperty(i)){v[i]=walk(i,v[i]);}}}
return filter(k,v);}
object=walk('',object);}
return object;}}catch(e){}
return null;},write:function(value,pretty){this.pretty=!!pretty;var json=null;var type=typeof value;if(this.serialize[type]){json=this.serialize[type].apply(this,[value]);}
return json;},writeIndent:function(){var pieces=[];if(this.pretty){for(var i=0;i<this.level;++i){pieces.push(this.indent);}}
return pieces.join('');},writeNewline:function(){return(this.pretty)?this.newline:'';},writeSpace:function(){return(this.pretty)?this.space:'';},serialize:{'object':function(object){if(object==null){return"null";}
if(object.constructor==Date){return this.serialize.date.apply(this,[object]);}
if(object.constructor==Array){return this.serialize.array.apply(this,[object]);}
var pieces=['{'];this.level+=1;var key,keyJSON,valueJSON;var addComma=false;for(key in object){if(object.hasOwnProperty(key)){keyJSON=OpenLayers.Format.JSON.prototype.write.apply(this,[key,this.pretty]);valueJSON=OpenLayers.Format.JSON.prototype.write.apply(this,[object[key],this.pretty]);if(keyJSON!=null&&valueJSON!=null){if(addComma){pieces.push(',');}
pieces.push(this.writeNewline(),this.writeIndent(),keyJSON,':',this.writeSpace(),valueJSON);addComma=true;}}}
this.level-=1;pieces.push(this.writeNewline(),this.writeIndent(),'}');return pieces.join('');},'array':function(array){var json;var pieces=['['];this.level+=1;for(var i=0,len=array.length;i<len;++i){json=OpenLayers.Format.JSON.prototype.write.apply(this,[array[i],this.pretty]);if(json!=null){if(i>0){pieces.push(',');}
pieces.push(this.writeNewline(),this.writeIndent(),json);}}
this.level-=1;pieces.push(this.writeNewline(),this.writeIndent(),']');return pieces.join('');},'string':function(string){var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};if(/["\\\x00-\x1f]/.test(string)){return'"'+string.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c;}
c=b.charCodeAt();return'\\u00'+
Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"';}
return'"'+string+'"';},'number':function(number){return isFinite(number)?String(number):"null";},'boolean':function(bool){return String(bool);},'date':function(date){function format(number){return(number<10)?'0'+number:number;}
return'"'+date.getFullYear()+'-'+
format(date.getMonth()+1)+'-'+
format(date.getDate())+'T'+
format(date.getHours())+':'+
format(date.getMinutes())+':'+
format(date.getSeconds())+'"';}},CLASS_NAME:"OpenLayers.Format.JSON"});OpenLayers.Format.XML=OpenLayers.Class(OpenLayers.Format,{namespaces:null,namespaceAlias:null,defaultPrefix:null,readers:{},writers:{},xmldom:null,initialize:function(options){if(window.ActiveXObject){this.xmldom=new ActiveXObject("Microsoft.XMLDOM");}
OpenLayers.Format.prototype.initialize.apply(this,[options]);this.namespaces=OpenLayers.Util.extend({},this.namespaces);this.namespaceAlias={};for(var alias in this.namespaces){this.namespaceAlias[this.namespaces[alias]]=alias;}},destroy:function(){this.xmldom=null;OpenLayers.Format.prototype.destroy.apply(this,arguments);},setNamespace:function(alias,uri){this.namespaces[alias]=uri;this.namespaceAlias[uri]=alias;},read:function(text){var index=text.indexOf('<');if(index>0){text=text.substring(index);}
var node=OpenLayers.Util.Try(OpenLayers.Function.bind((function(){var xmldom;if(window.ActiveXObject&&!this.xmldom){xmldom=new ActiveXObject("Microsoft.XMLDOM");}else{xmldom=this.xmldom;}
xmldom.loadXML(text);return xmldom;}),this),function(){return new DOMParser().parseFromString(text,'text/xml');},function(){var req=new XMLHttpRequest();req.open("GET","data:"+"text/xml"+";charset=utf-8,"+encodeURIComponent(text),false);if(req.overrideMimeType){req.overrideMimeType("text/xml");}
req.send(null);return req.responseXML;});return node;},write:function(node){var data;if(this.xmldom){data=node.xml;}else{var serializer=new XMLSerializer();if(node.nodeType==1){var doc=document.implementation.createDocument("","",null);if(doc.importNode){node=doc.importNode(node,true);}
doc.appendChild(node);data=serializer.serializeToString(doc);}else{data=serializer.serializeToString(node);}}
return data;},createElementNS:function(uri,name){var element;if(this.xmldom){if(typeof uri=="string"){element=this.xmldom.createNode(1,name,uri);}else{element=this.xmldom.createNode(1,name,"");}}else{element=document.createElementNS(uri,name);}
return element;},createTextNode:function(text){var node;if(this.xmldom){node=this.xmldom.createTextNode(text);}else{node=document.createTextNode(text);}
return node;},getElementsByTagNameNS:function(node,uri,name){var elements=[];if(node.getElementsByTagNameNS){elements=node.getElementsByTagNameNS(uri,name);}else{var allNodes=node.getElementsByTagName("*");var potentialNode,fullName;for(var i=0,len=allNodes.length;i<len;++i){potentialNode=allNodes[i];fullName=(potentialNode.prefix)?(potentialNode.prefix+":"+name):name;if((name=="*")||(fullName==potentialNode.nodeName)){if((uri=="*")||(uri==potentialNode.namespaceURI)){elements.push(potentialNode);}}}}
return elements;},getAttributeNodeNS:function(node,uri,name){var attributeNode=null;if(node.getAttributeNodeNS){attributeNode=node.getAttributeNodeNS(uri,name);}else{var attributes=node.attributes;var potentialNode,fullName;for(var i=0,len=attributes.length;i<len;++i){potentialNode=attributes[i];if(potentialNode.namespaceURI==uri){fullName=(potentialNode.prefix)?(potentialNode.prefix+":"+name):name;if(fullName==potentialNode.nodeName){attributeNode=potentialNode;break;}}}}
return attributeNode;},getAttributeNS:function(node,uri,name){var attributeValue="";if(node.getAttributeNS){attributeValue=node.getAttributeNS(uri,name)||"";}else{var attributeNode=this.getAttributeNodeNS(node,uri,name);if(attributeNode){attributeValue=attributeNode.nodeValue;}}
return attributeValue;},getChildValue:function(node,def){var value=def||"";if(node){var child=node.firstChild;if(child){value=child.nodeValue||value;}}
return value;},concatChildValues:function(node,def){var value="";var child=node.firstChild;var childValue;while(child){childValue=child.nodeValue;if(childValue){value+=childValue;}
child=child.nextSibling;}
if(value==""&&def!=undefined){value=def;}
return value;},hasAttributeNS:function(node,uri,name){var found=false;if(node.hasAttributeNS){found=node.hasAttributeNS(uri,name);}else{found=!!this.getAttributeNodeNS(node,uri,name);}
return found;},setAttributeNS:function(node,uri,name,value){if(node.setAttributeNS){node.setAttributeNS(uri,name,value);}else{if(this.xmldom){if(uri){var attribute=node.ownerDocument.createNode(2,name,uri);attribute.nodeValue=value;node.setAttributeNode(attribute);}else{node.setAttribute(name,value);}}else{throw"setAttributeNS not implemented";}}},createElementNSPlus:function(name,options){options=options||{};var loc=name.indexOf(":");var uri=options.uri||this.namespaces[options.prefix];if(!uri){loc=name.indexOf(":");uri=this.namespaces[name.substring(0,loc)];}
if(!uri){uri=this.namespaces[this.defaultPrefix];}
var node=this.createElementNS(uri,name);if(options.attributes){this.setAttributes(node,options.attributes);}
if(options.value){node.appendChild(this.createTextNode(options.value));}
return node;},setAttributes:function(node,obj){var value,loc,alias,uri;for(var name in obj){if(obj[name]!=null&&obj[name].toString){value=obj[name].toString();uri=this.namespaces[name.substring(0,name.indexOf(":"))]||null;this.setAttributeNS(node,uri,name,value);}}},readNode:function(node,obj){if(!obj){obj={};}
var group=this.readers[this.namespaceAlias[node.namespaceURI]];if(group){var local=node.localName||node.nodeName.split(":").pop();var reader=group[local]||group["*"];if(reader){reader.apply(this,[node,obj]);}}
return obj;},readChildNodes:function(node,obj){if(!obj){obj={};}
var children=node.childNodes;var child;for(var i=0,len=children.length;i<len;++i){child=children[i];if(child.nodeType==1){this.readNode(child,obj);}}
return obj;},writeNode:function(name,obj,parent){var prefix,local;var split=name.indexOf(":");if(split>0){prefix=name.substring(0,split);local=name.substring(split+1);}else{if(parent){prefix=this.namespaceAlias[parent.namespaceURI];}else{prefix=this.defaultPrefix;}
local=name;}
var child=this.writers[prefix][local].apply(this,[obj]);if(parent){parent.appendChild(child);}
return child;},CLASS_NAME:"OpenLayers.Format.XML"});OpenLayers.Handler=OpenLayers.Class({id:null,control:null,map:null,keyMask:null,active:false,evt:null,initialize:function(control,callbacks,options){OpenLayers.Util.extend(this,options);this.control=control;this.callbacks=callbacks;if(control.map){this.setMap(control.map);}
OpenLayers.Util.extend(this,options);this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},setMap:function(map){this.map=map;},checkModifiers:function(evt){if(this.keyMask==null){return true;}
var keyModifiers=(evt.shiftKey?OpenLayers.Handler.MOD_SHIFT:0)|(evt.ctrlKey?OpenLayers.Handler.MOD_CTRL:0)|(evt.altKey?OpenLayers.Handler.MOD_ALT:0);return(keyModifiers==this.keyMask);},activate:function(){if(this.active){return false;}
var events=OpenLayers.Events.prototype.BROWSER_EVENTS;for(var i=0,len=events.length;i<len;i++){if(this[events[i]]){this.register(events[i],this[events[i]]);}}
this.active=true;return true;},deactivate:function(){if(!this.active){return false;}
var events=OpenLayers.Events.prototype.BROWSER_EVENTS;for(var i=0,len=events.length;i<len;i++){if(this[events[i]]){this.unregister(events[i],this[events[i]]);}}
this.active=false;return true;},callback:function(name,args){if(name&&this.callbacks[name]){this.callbacks[name].apply(this.control,args);}},register:function(name,method){this.map.events.registerPriority(name,this,method);this.map.events.registerPriority(name,this,this.setEvent);},unregister:function(name,method){this.map.events.unregister(name,this,method);this.map.events.unregister(name,this,this.setEvent);},setEvent:function(evt){this.evt=evt;return true;},destroy:function(){this.deactivate();this.control=this.map=null;},CLASS_NAME:"OpenLayers.Handler"});OpenLayers.Handler.MOD_NONE=0;OpenLayers.Handler.MOD_SHIFT=1;OpenLayers.Handler.MOD_CTRL=2;OpenLayers.Handler.MOD_ALT=4;OpenLayers.Lang.de=OpenLayers.Util.applyDefaults({'unhandledRequest':"Unbehandelte Anfragerückmeldung ${statusText}",'permalink':"Permalink",'overlays':"Overlays",'baseLayer':"Grundkarte",'sameProjection':"Die Übersichtskarte funktioniert nur, wenn sie dieselbe Projektion wie die Hauptkarte verwendet",'readNotImplemented':"Lesen nicht implementiert.",'writeNotImplemented':"Schreiben nicht implementiert.",'noFID':"Ein Feature, für das keine FID existiert, kann nicht aktualisiert werden.",'errorLoadingGML':"Fehler beim Laden der GML-Datei ${url}",'browserNotSupported':"Ihr Browser unterstützt keine Vektordarstellung. Aktuell unterstützte Renderer:\n${renderers}",'componentShouldBe':"addFeatures : Komponente sollte vom Typ ${geomType} sein",'commitSuccess':"WFS-Transaktion: ERFOLGREICH ${response}",'commitFailed':"WFS-Transaktion: FEHLGESCHLAGEN ${response}",'googleWarning':"Der Google-Layer konnte nicht korrekt geladen werden.<br><br>"+"Um diese Meldung nicht mehr zu erhalten, wählen Sie einen anderen "+"Hintergrundlayer aus dem LayerSwitcher in der rechten oberen Ecke.<br><br>"+"Sehr wahrscheinlich tritt dieser Fehler auf, weil das Skript der "+"Google-Maps-Bibliothek nicht eingebunden wurde oder keinen gültigen "+"API-Schlüssel für Ihre URL enthält.<br><br>"+"Entwickler: Für Hilfe zum korrekten Einbinden des Google-Layers "+"<a href='http://trac.openlayers.org/wiki/Google' "+"target='_blank'>hier klicken</a>",'getLayerWarning':"Der ${layerType}-Layer konnte nicht korrekt geladen werden.<br><br>"+"Um diese Meldung nicht mehr zu erhalten, wählen Sie einen anderen "+"Hintergrundlayer aus dem LayerSwitcher in der rechten oberen Ecke.<br><br>"+"Sehr wahrscheinlich tritt dieser Fehler auf, weil das Skript der "+'"${layerLib}"-Bibliothek nicht eingebunden wurde.<br><br>'+"Entwickler: Für Hilfe zum korrekten Einbinden von Layern "+"<a href='http://trac.openlayers.org/wiki/${layerLib}' "+"target='_blank'>hier klicken</a>",'scale':"Maßstab = 1 : ${scaleDenom}",'end':''},OpenLayers.Lang["en"]);OpenLayers.Map=OpenLayers.Class({Z_INDEX_BASE:{BaseLayer:100,Overlay:325,Feature:725,Popup:750,Control:1000},EVENT_TYPES:["preaddlayer","addlayer","removelayer","changelayer","movestart","move","moveend","zoomend","popupopen","popupclose","addmarker","removemarker","clearmarkers","mouseover","mouseout","mousemove","dragstart","drag","dragend","changebaselayer"],id:null,fractionalZoom:false,events:null,div:null,dragging:false,size:null,viewPortDiv:null,layerContainerOrigin:null,layerContainerDiv:null,layers:null,controls:null,popups:null,baseLayer:null,center:null,resolution:null,zoom:0,panRatio:1.5,viewRequestID:0,tileSize:null,projection:"EPSG:4326",units:'degrees',resolutions:null,maxResolution:1.40625,minResolution:null,maxScale:null,minScale:null,maxExtent:null,minExtent:null,restrictedExtent:null,numZoomLevels:16,theme:null,displayProjection:null,fallThrough:true,panTween:null,eventListeners:null,panMethod:OpenLayers.Easing.Expo.easeOut,paddingForPopups:null,initialize:function(div,options){this.tileSize=new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH,OpenLayers.Map.TILE_HEIGHT);this.maxExtent=new OpenLayers.Bounds(-180,-90,180,90);this.paddingForPopups=new OpenLayers.Bounds(15,15,15,15);this.theme=OpenLayers._getScriptLocation()+'theme/default/style.css';OpenLayers.Util.extend(this,options);this.id=OpenLayers.Util.createUniqueID("OpenLayers.Map_");this.div=OpenLayers.Util.getElement(div);OpenLayers.Element.addClass(this.div,'olMap');var id=this.div.id+"_OpenLayers_ViewPort";this.viewPortDiv=OpenLayers.Util.createDiv(id,null,null,null,"relative",null,"hidden");this.viewPortDiv.style.width="100%";this.viewPortDiv.style.height="100%";this.viewPortDiv.className="olMapViewport";this.div.appendChild(this.viewPortDiv);id=this.div.id+"_OpenLayers_Container";this.layerContainerDiv=OpenLayers.Util.createDiv(id);this.layerContainerDiv.style.zIndex=this.Z_INDEX_BASE['Popup']-1;this.viewPortDiv.appendChild(this.layerContainerDiv);this.events=new OpenLayers.Events(this,this.div,this.EVENT_TYPES,this.fallThrough,{includeXY:true});this.updateSize();if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}
this.events.register("movestart",this,this.updateSize);if(OpenLayers.String.contains(navigator.appName,"Microsoft")){this.events.register("resize",this,this.updateSize);}else{this.updateSizeDestroy=OpenLayers.Function.bind(this.updateSize,this);OpenLayers.Event.observe(window,'resize',this.updateSizeDestroy);}
if(this.theme){var addNode=true;var nodes=document.getElementsByTagName('link');for(var i=0,len=nodes.length;i<len;++i){if(OpenLayers.Util.isEquivalentUrl(nodes.item(i).href,this.theme)){addNode=false;break;}}
if(addNode){var cssNode=document.createElement('link');cssNode.setAttribute('rel','stylesheet');cssNode.setAttribute('type','text/css');cssNode.setAttribute('href',this.theme);document.getElementsByTagName('head')[0].appendChild(cssNode);}}
this.layers=[];if(this.controls==null){if(OpenLayers.Control!=null){this.controls=[new OpenLayers.Control.Navigation(),new OpenLayers.Control.PanZoom(),new OpenLayers.Control.ArgParser(),new OpenLayers.Control.Attribution()];}else{this.controls=[];}}
for(var i=0,len=this.controls.length;i<len;i++){this.addControlToMap(this.controls[i]);}
this.popups=[];this.unloadDestroy=OpenLayers.Function.bind(this.destroy,this);OpenLayers.Event.observe(window,'unload',this.unloadDestroy);},unloadDestroy:null,updateSizeDestroy:null,destroy:function(){if(!this.unloadDestroy){return false;}
OpenLayers.Event.stopObserving(window,'unload',this.unloadDestroy);this.unloadDestroy=null;if(this.updateSizeDestroy){OpenLayers.Event.stopObserving(window,'resize',this.updateSizeDestroy);}else{this.events.unregister("resize",this,this.updateSize);}
this.paddingForPopups=null;if(this.controls!=null){for(var i=this.controls.length-1;i>=0;--i){this.controls[i].destroy();}
this.controls=null;}
if(this.layers!=null){for(var i=this.layers.length-1;i>=0;--i){this.layers[i].destroy(false);}
this.layers=null;}
if(this.viewPortDiv){this.div.removeChild(this.viewPortDiv);}
this.viewPortDiv=null;if(this.eventListeners){this.events.un(this.eventListeners);this.eventListeners=null;}
this.events.destroy();this.events=null;},setOptions:function(options){OpenLayers.Util.extend(this,options);},getTileSize:function(){return this.tileSize;},getBy:function(array,property,match){var test=(typeof match.test=="function");var found=OpenLayers.Array.filter(this[array],function(item){return item[property]==match||(test&&match.test(item[property]));});return found;},getLayersBy:function(property,match){return this.getBy("layers",property,match);},getLayersByName:function(match){return this.getLayersBy("name",match);},getLayersByClass:function(match){return this.getLayersBy("CLASS_NAME",match);},getControlsBy:function(property,match){return this.getBy("controls",property,match);},getControlsByClass:function(match){return this.getControlsBy("CLASS_NAME",match);},getLayer:function(id){var foundLayer=null;for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];if(layer.id==id){foundLayer=layer;break;}}
return foundLayer;},setLayerZIndex:function(layer,zIdx){layer.setZIndex(this.Z_INDEX_BASE[layer.isBaseLayer?'BaseLayer':'Overlay']
+zIdx*5);},resetLayersZIndex:function(){for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];this.setLayerZIndex(layer,i);}},addLayer:function(layer){for(var i=0,len=this.layers.length;i<len;i++){if(this.layers[i]==layer){var msg=OpenLayers.i18n('layerAlreadyAdded',{'layerName':layer.name});OpenLayers.Console.warn(msg);return false;}}
this.events.triggerEvent("preaddlayer",{layer:layer});layer.div.className="olLayerDiv";layer.div.style.overflow="";this.setLayerZIndex(layer,this.layers.length);if(layer.isFixed){this.viewPortDiv.appendChild(layer.div);}else{this.layerContainerDiv.appendChild(layer.div);}
this.layers.push(layer);layer.setMap(this);if(layer.isBaseLayer){if(this.baseLayer==null){this.setBaseLayer(layer);}else{layer.setVisibility(false);}}else{layer.redraw();}
this.events.triggerEvent("addlayer",{layer:layer});},addLayers:function(layers){for(var i=0,len=layers.length;i<len;i++){this.addLayer(layers[i]);}},removeLayer:function(layer,setNewBaseLayer){if(setNewBaseLayer==null){setNewBaseLayer=true;}
if(layer.isFixed){this.viewPortDiv.removeChild(layer.div);}else{this.layerContainerDiv.removeChild(layer.div);}
OpenLayers.Util.removeItem(this.layers,layer);layer.removeMap(this);layer.map=null;if(this.baseLayer==layer){this.baseLayer=null;if(setNewBaseLayer){for(var i=0,len=this.layers.length;i<len;i++){var iLayer=this.layers[i];if(iLayer.isBaseLayer){this.setBaseLayer(iLayer);break;}}}}
this.resetLayersZIndex();this.events.triggerEvent("removelayer",{layer:layer});},getNumLayers:function(){return this.layers.length;},getLayerIndex:function(layer){return OpenLayers.Util.indexOf(this.layers,layer);},setLayerIndex:function(layer,idx){var base=this.getLayerIndex(layer);if(idx<0){idx=0;}else if(idx>this.layers.length){idx=this.layers.length;}
if(base!=idx){this.layers.splice(base,1);this.layers.splice(idx,0,layer);for(var i=0,len=this.layers.length;i<len;i++){this.setLayerZIndex(this.layers[i],i);}
this.events.triggerEvent("changelayer",{layer:layer,property:"order"});}},raiseLayer:function(layer,delta){var idx=this.getLayerIndex(layer)+delta;this.setLayerIndex(layer,idx);},setBaseLayer:function(newBaseLayer){var oldExtent=null;if(this.baseLayer){oldExtent=this.baseLayer.getExtent();}
if(newBaseLayer!=this.baseLayer){if(OpenLayers.Util.indexOf(this.layers,newBaseLayer)!=-1){if(this.baseLayer!=null){this.baseLayer.setVisibility(false);}
this.baseLayer=newBaseLayer;this.viewRequestID++;this.baseLayer.visibility=true;var center=this.getCenter();if(center!=null){var newCenter=(oldExtent)?oldExtent.getCenterLonLat():center;var newZoom=(oldExtent)?this.getZoomForExtent(oldExtent,true):this.getZoomForResolution(this.resolution,true);this.setCenter(newCenter,newZoom,false,true);}
this.events.triggerEvent("changebaselayer",{layer:this.baseLayer});}}},addControl:function(control,px){this.controls.push(control);this.addControlToMap(control,px);},addControlToMap:function(control,px){control.outsideViewport=(control.div!=null);if(this.displayProjection&&!control.displayProjection){control.displayProjection=this.displayProjection;}
control.setMap(this);var div=control.draw(px);if(div){if(!control.outsideViewport){div.style.zIndex=this.Z_INDEX_BASE['Control']+
this.controls.length;this.viewPortDiv.appendChild(div);}}},getControl:function(id){var returnControl=null;for(var i=0,len=this.controls.length;i<len;i++){var control=this.controls[i];if(control.id==id){returnControl=control;break;}}
return returnControl;},removeControl:function(control){if((control)&&(control==this.getControl(control.id))){if(control.div&&(control.div.parentNode==this.viewPortDiv)){this.viewPortDiv.removeChild(control.div);}
OpenLayers.Util.removeItem(this.controls,control);}},addPopup:function(popup,exclusive){if(exclusive){for(var i=this.popups.length-1;i>=0;--i){this.removePopup(this.popups[i]);}}
popup.map=this;this.popups.push(popup);var popupDiv=popup.draw();if(popupDiv){popupDiv.style.zIndex=this.Z_INDEX_BASE['Popup']+
this.popups.length;this.layerContainerDiv.appendChild(popupDiv);}},removePopup:function(popup){OpenLayers.Util.removeItem(this.popups,popup);if(popup.div){try{this.layerContainerDiv.removeChild(popup.div);}
catch(e){}}
popup.map=null;},getSize:function(){var size=null;if(this.size!=null){size=this.size.clone();}
return size;},updateSize:function(){this.events.clearMouseCache();var newSize=this.getCurrentSize();var oldSize=this.getSize();if(oldSize==null){this.size=oldSize=newSize;}
if(!newSize.equals(oldSize)){this.size=newSize;for(var i=0,len=this.layers.length;i<len;i++){this.layers[i].onMapResize();}
if(this.baseLayer!=null){var center=new OpenLayers.Pixel(newSize.w/2,newSize.h/2);var centerLL=this.getLonLatFromViewPortPx(center);var zoom=this.getZoom();this.zoom=null;this.setCenter(this.getCenter(),zoom);}}},getCurrentSize:function(){var size=new OpenLayers.Size(this.div.clientWidth,this.div.clientHeight);if(size.w==0&&size.h==0||isNaN(size.w)&&isNaN(size.h)){var dim=OpenLayers.Element.getDimensions(this.div);size.w=dim.width;size.h=dim.height;}
if(size.w==0&&size.h==0||isNaN(size.w)&&isNaN(size.h)){size.w=parseInt(this.div.style.width);size.h=parseInt(this.div.style.height);}
return size;},calculateBounds:function(center,resolution){var extent=null;if(center==null){center=this.getCenter();}
if(resolution==null){resolution=this.getResolution();}
if((center!=null)&&(resolution!=null)){var size=this.getSize();var w_deg=size.w*resolution;var h_deg=size.h*resolution;extent=new OpenLayers.Bounds(center.lon-w_deg/2,center.lat-h_deg/2,center.lon+w_deg/2,center.lat+h_deg/2);}
return extent;},getCenter:function(){return this.center;},getZoom:function(){return this.zoom;},pan:function(dx,dy,options){options=OpenLayers.Util.applyDefaults(options,{animate:true,dragging:false});var centerPx=this.getViewPortPxFromLonLat(this.getCenter());var newCenterPx=centerPx.add(dx,dy);if(!options.dragging||!newCenterPx.equals(centerPx)){var newCenterLonLat=this.getLonLatFromViewPortPx(newCenterPx);if(options.animate){this.panTo(newCenterLonLat);}else{this.setCenter(newCenterLonLat,null,options.dragging);}}},panTo:function(lonlat){if(this.panMethod&&this.getExtent().scale(this.panRatio).containsLonLat(lonlat)){if(!this.panTween){this.panTween=new OpenLayers.Tween(this.panMethod);}
var center=this.getCenter();if(lonlat.lon==center.lon&&lonlat.lat==center.lat){return;}
var from={lon:center.lon,lat:center.lat};var to={lon:lonlat.lon,lat:lonlat.lat};this.panTween.start(from,to,50,{callbacks:{start:OpenLayers.Function.bind(function(lonlat){this.events.triggerEvent("movestart");},this),eachStep:OpenLayers.Function.bind(function(lonlat){lonlat=new OpenLayers.LonLat(lonlat.lon,lonlat.lat);this.moveTo(lonlat,this.zoom,{'dragging':true,'noEvent':true});},this),done:OpenLayers.Function.bind(function(lonlat){lonlat=new OpenLayers.LonLat(lonlat.lon,lonlat.lat);this.moveTo(lonlat,this.zoom,{'noEvent':true});this.events.triggerEvent("moveend");},this)}});}else{this.setCenter(lonlat);}},setCenter:function(lonlat,zoom,dragging,forceZoomChange){this.moveTo(lonlat,zoom,{'dragging':dragging,'forceZoomChange':forceZoomChange,'caller':'setCenter'});},moveTo:function(lonlat,zoom,options){if(!options){options={};}
var dragging=options.dragging;var forceZoomChange=options.forceZoomChange;var noEvent=options.noEvent;if(this.panTween&&options.caller=="setCenter"){this.panTween.stop();}
if(!this.center&&!this.isValidLonLat(lonlat)){lonlat=this.maxExtent.getCenterLonLat();}
if(this.restrictedExtent!=null){if(lonlat==null){lonlat=this.getCenter();}
if(zoom==null){zoom=this.getZoom();}
var resolution=this.getResolutionForZoom(zoom);var extent=this.calculateBounds(lonlat,resolution);if(!this.restrictedExtent.containsBounds(extent)){var maxCenter=this.restrictedExtent.getCenterLonLat();if(extent.getWidth()>this.restrictedExtent.getWidth()){lonlat=new OpenLayers.LonLat(maxCenter.lon,lonlat.lat);}else if(extent.left<this.restrictedExtent.left){lonlat=lonlat.add(this.restrictedExtent.left-
extent.left,0);}else if(extent.right>this.restrictedExtent.right){lonlat=lonlat.add(this.restrictedExtent.right-
extent.right,0);}
if(extent.getHeight()>this.restrictedExtent.getHeight()){lonlat=new OpenLayers.LonLat(lonlat.lon,maxCenter.lat);}else if(extent.bottom<this.restrictedExtent.bottom){lonlat=lonlat.add(0,this.restrictedExtent.bottom-
extent.bottom);}
else if(extent.top>this.restrictedExtent.top){lonlat=lonlat.add(0,this.restrictedExtent.top-
extent.top);}}}
var zoomChanged=forceZoomChange||((this.isValidZoomLevel(zoom))&&(zoom!=this.getZoom()));var centerChanged=(this.isValidLonLat(lonlat))&&(!lonlat.equals(this.center));if(zoomChanged||centerChanged||!dragging){if(!this.dragging&&!noEvent){this.events.triggerEvent("movestart");}
if(centerChanged){if((!zoomChanged)&&(this.center)){this.centerLayerContainer(lonlat);}
this.center=lonlat.clone();}
if((zoomChanged)||(this.layerContainerOrigin==null)){this.layerContainerOrigin=this.center.clone();this.layerContainerDiv.style.left="0px";this.layerContainerDiv.style.top="0px";}
if(zoomChanged){this.zoom=zoom;this.resolution=this.getResolutionForZoom(zoom);this.viewRequestID++;}
var bounds=this.getExtent();this.baseLayer.moveTo(bounds,zoomChanged,dragging);bounds=this.baseLayer.getExtent();for(var i=0,len=this.layers.length;i<len;i++){var layer=this.layers[i];if(!layer.isBaseLayer){var inRange=layer.calculateInRange();if(layer.inRange!=inRange){layer.inRange=inRange;if(!inRange){layer.display(false);}
this.events.triggerEvent("changelayer",{layer:layer,property:"visibility"});}
if(inRange&&layer.visibility){layer.moveTo(bounds,zoomChanged,dragging);layer.events.triggerEvent("moveend",{"zoomChanged":zoomChanged});}}}
if(zoomChanged){for(var i=0,len=this.popups.length;i<len;i++){this.popups[i].updatePosition();}}
this.events.triggerEvent("move");if(zoomChanged){this.events.triggerEvent("zoomend");}}
if(!dragging&&!noEvent){this.events.triggerEvent("moveend");}
this.dragging=!!dragging;},centerLayerContainer:function(lonlat){var originPx=this.getViewPortPxFromLonLat(this.layerContainerOrigin);var newPx=this.getViewPortPxFromLonLat(lonlat);if((originPx!=null)&&(newPx!=null)){this.layerContainerDiv.style.left=Math.round(originPx.x-newPx.x)+"px";this.layerContainerDiv.style.top=Math.round(originPx.y-newPx.y)+"px";}},isValidZoomLevel:function(zoomLevel){return((zoomLevel!=null)&&(zoomLevel>=0)&&(zoomLevel<this.getNumZoomLevels()));},isValidLonLat:function(lonlat){var valid=false;if(lonlat!=null){var maxExtent=this.getMaxExtent();valid=maxExtent.containsLonLat(lonlat);}
return valid;},getProjection:function(){var projection=this.getProjectionObject();return projection?projection.getCode():null;},getProjectionObject:function(){var projection=null;if(this.baseLayer!=null){projection=this.baseLayer.projection;}
return projection;},getMaxResolution:function(){var maxResolution=null;if(this.baseLayer!=null){maxResolution=this.baseLayer.maxResolution;}
return maxResolution;},getMaxExtent:function(options){var maxExtent=null;if(options&&options.restricted&&this.restrictedExtent){maxExtent=this.restrictedExtent;}else if(this.baseLayer!=null){maxExtent=this.baseLayer.maxExtent;}
return maxExtent;},getNumZoomLevels:function(){var numZoomLevels=null;if(this.baseLayer!=null){numZoomLevels=this.baseLayer.numZoomLevels;}
return numZoomLevels;},getExtent:function(){var extent=null;if(this.baseLayer!=null){extent=this.baseLayer.getExtent();}
return extent;},getResolution:function(){var resolution=null;if(this.baseLayer!=null){resolution=this.baseLayer.getResolution();}
return resolution;},getUnits:function(){var units=null;if(this.baseLayer!=null){units=this.baseLayer.units;}
return units;},getScale:function(){var scale=null;if(this.baseLayer!=null){var res=this.getResolution();var units=this.baseLayer.units;scale=OpenLayers.Util.getScaleFromResolution(res,units);}
return scale;},getZoomForExtent:function(bounds,closest){var zoom=null;if(this.baseLayer!=null){zoom=this.baseLayer.getZoomForExtent(bounds,closest);}
return zoom;},getResolutionForZoom:function(zoom){var resolution=null;if(this.baseLayer){resolution=this.baseLayer.getResolutionForZoom(zoom);}
return resolution;},getZoomForResolution:function(resolution,closest){var zoom=null;if(this.baseLayer!=null){zoom=this.baseLayer.getZoomForResolution(resolution,closest);}
return zoom;},zoomTo:function(zoom){if(this.isValidZoomLevel(zoom)){this.setCenter(null,zoom);}},zoomIn:function(){this.zoomTo(this.getZoom()+1);},zoomOut:function(){this.zoomTo(this.getZoom()-1);},zoomToExtent:function(bounds,closest){var center=bounds.getCenterLonLat();if(this.baseLayer.wrapDateLine){var maxExtent=this.getMaxExtent();bounds=bounds.clone();while(bounds.right<bounds.left){bounds.right+=maxExtent.getWidth();}
center=bounds.getCenterLonLat().wrapDateLine(maxExtent);}
this.setCenter(center,this.getZoomForExtent(bounds,closest));},zoomToMaxExtent:function(options){var restricted=(options)?options.restricted:true;var maxExtent=this.getMaxExtent({'restricted':restricted});this.zoomToExtent(maxExtent);},zoomToScale:function(scale,closest){var res=OpenLayers.Util.getResolutionFromScale(scale,this.baseLayer.units);var size=this.getSize();var w_deg=size.w*res;var h_deg=size.h*res;var center=this.getCenter();var extent=new OpenLayers.Bounds(center.lon-w_deg/2,center.lat-h_deg/2,center.lon+w_deg/2,center.lat+h_deg/2);this.zoomToExtent(extent,closest);},getLonLatFromViewPortPx:function(viewPortPx){var lonlat=null;if(this.baseLayer!=null){lonlat=this.baseLayer.getLonLatFromViewPortPx(viewPortPx);}
return lonlat;},getViewPortPxFromLonLat:function(lonlat){var px=null;if(this.baseLayer!=null){px=this.baseLayer.getViewPortPxFromLonLat(lonlat);}
return px;},getLonLatFromPixel:function(px){return this.getLonLatFromViewPortPx(px);},getPixelFromLonLat:function(lonlat){var px=this.getViewPortPxFromLonLat(lonlat);px.x=Math.round(px.x);px.y=Math.round(px.y);return px;},getViewPortPxFromLayerPx:function(layerPx){var viewPortPx=null;if(layerPx!=null){var dX=parseInt(this.layerContainerDiv.style.left);var dY=parseInt(this.layerContainerDiv.style.top);viewPortPx=layerPx.add(dX,dY);}
return viewPortPx;},getLayerPxFromViewPortPx:function(viewPortPx){var layerPx=null;if(viewPortPx!=null){var dX=-parseInt(this.layerContainerDiv.style.left);var dY=-parseInt(this.layerContainerDiv.style.top);layerPx=viewPortPx.add(dX,dY);if(isNaN(layerPx.x)||isNaN(layerPx.y)){layerPx=null;}}
return layerPx;},getLonLatFromLayerPx:function(px){px=this.getViewPortPxFromLayerPx(px);return this.getLonLatFromViewPortPx(px);},getLayerPxFromLonLat:function(lonlat){var px=this.getPixelFromLonLat(lonlat);return this.getLayerPxFromViewPortPx(px);},CLASS_NAME:"OpenLayers.Map"});OpenLayers.Map.TILE_WIDTH=256;OpenLayers.Map.TILE_HEIGHT=256;OpenLayers.Marker=OpenLayers.Class({icon:null,lonlat:null,events:null,map:null,initialize:function(lonlat,icon){this.lonlat=lonlat;var newIcon=(icon)?icon:OpenLayers.Marker.defaultIcon();if(this.icon==null){this.icon=newIcon;}else{this.icon.url=newIcon.url;this.icon.size=newIcon.size;this.icon.offset=newIcon.offset;this.icon.calculateOffset=newIcon.calculateOffset;}
this.events=new OpenLayers.Events(this,this.icon.imageDiv,null);},destroy:function(){this.map=null;this.events.destroy();this.events=null;if(this.icon!=null){this.icon.destroy();this.icon=null;}},draw:function(px){return this.icon.draw(px);},moveTo:function(px){if((px!=null)&&(this.icon!=null)){this.icon.moveTo(px);}
this.lonlat=this.map.getLonLatFromLayerPx(px);},onScreen:function(){var onScreen=false;if(this.map){var screenBounds=this.map.getExtent();onScreen=screenBounds.containsLonLat(this.lonlat);}
return onScreen;},inflate:function(inflate){if(this.icon){var newSize=new OpenLayers.Size(this.icon.size.w*inflate,this.icon.size.h*inflate);this.icon.setSize(newSize);}},setOpacity:function(opacity){this.icon.setOpacity(opacity);},setUrl:function(url){this.icon.setUrl(url);},display:function(display){this.icon.display(display);},CLASS_NAME:"OpenLayers.Marker"});OpenLayers.Marker.defaultIcon=function(){var url=OpenLayers.Util.getImagesLocation()+"marker.png";var size=new OpenLayers.Size(21,25);var calculateOffset=function(size){return new OpenLayers.Pixel(-(size.w/2),-size.h);};return new OpenLayers.Icon(url,size,null,calculateOffset);};OpenLayers.Popup.AnchoredBubble=OpenLayers.Class(OpenLayers.Popup.Anchored,{rounded:false,initialize:function(id,lonlat,contentSize,contentHTML,anchor,closeBox,closeBoxCallback){this.padding=new OpenLayers.Bounds(0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE,0,OpenLayers.Popup.AnchoredBubble.CORNER_SIZE);OpenLayers.Popup.Anchored.prototype.initialize.apply(this,arguments);},draw:function(px){OpenLayers.Popup.Anchored.prototype.draw.apply(this,arguments);this.setContentHTML();this.setBackgroundColor();this.setOpacity();return this.div;},updateRelativePosition:function(){this.setRicoCorners();},setSize:function(contentSize){OpenLayers.Popup.Anchored.prototype.setSize.apply(this,arguments);this.setRicoCorners();},setBackgroundColor:function(color){if(color!=undefined){this.backgroundColor=color;}
if(this.div!=null){if(this.contentDiv!=null){this.div.style.background="transparent";OpenLayers.Rico.Corner.changeColor(this.groupDiv,this.backgroundColor);}}},setOpacity:function(opacity){OpenLayers.Popup.Anchored.prototype.setOpacity.call(this,opacity);if(this.div!=null){if(this.groupDiv!=null){OpenLayers.Rico.Corner.changeOpacity(this.groupDiv,this.opacity);}}},setBorder:function(border){this.border=0;},setRicoCorners:function(){var corners=this.getCornersToRound(this.relativePosition);var options={corners:corners,color:this.backgroundColor,bgColor:"transparent",blend:false};if(!this.rounded){OpenLayers.Rico.Corner.round(this.div,options);this.rounded=true;}else{OpenLayers.Rico.Corner.reRound(this.groupDiv,options);this.setBackgroundColor();this.setOpacity();}},getCornersToRound:function(){var corners=['tl','tr','bl','br'];var corner=OpenLayers.Bounds.oppositeQuadrant(this.relativePosition);OpenLayers.Util.removeItem(corners,corner);return corners.join(" ");},CLASS_NAME:"OpenLayers.Popup.AnchoredBubble"});OpenLayers.Popup.AnchoredBubble.CORNER_SIZE=5;OpenLayers.Tile.Image=OpenLayers.Class(OpenLayers.Tile,{url:null,imgDiv:null,frame:null,layerAlphaHack:null,isBackBuffer:false,lastRatio:1,isFirstDraw:true,backBufferTile:null,initialize:function(layer,position,bounds,url,size){OpenLayers.Tile.prototype.initialize.apply(this,arguments);this.url=url;this.frame=document.createElement('div');this.frame.style.overflow='hidden';this.frame.style.position='absolute';this.layerAlphaHack=this.layer.alpha&&OpenLayers.Util.alphaHack();},destroy:function(){if(this.imgDiv!=null){if(this.layerAlphaHack){OpenLayers.Event.stopObservingElement(this.imgDiv.childNodes[0].id);}else{OpenLayers.Event.stopObservingElement(this.imgDiv.id);}
if(this.imgDiv.parentNode==this.frame){this.frame.removeChild(this.imgDiv);this.imgDiv.map=null;}
this.imgDiv.urls=null;}
this.imgDiv=null;if((this.frame!=null)&&(this.frame.parentNode==this.layer.div)){this.layer.div.removeChild(this.frame);}
this.frame=null;if(this.backBufferTile){this.backBufferTile.destroy();this.backBufferTile=null;}
this.layer.events.unregister("loadend",this,this.resetBackBuffer);OpenLayers.Tile.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Tile.Image(this.layer,this.position,this.bounds,this.url,this.size);}
obj=OpenLayers.Tile.prototype.clone.apply(this,[obj]);obj.imgDiv=null;return obj;},draw:function(){if(this.layer!=this.layer.map.baseLayer&&this.layer.reproject){this.bounds=this.getBoundsFromBaseLayer(this.position);}
var drawTile=OpenLayers.Tile.prototype.draw.apply(this,arguments);if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){if(drawTile){if(!this.backBufferTile){this.backBufferTile=this.clone();this.backBufferTile.hide();this.backBufferTile.isBackBuffer=true;this.events.register('loadend',this,this.resetBackBuffer);this.layer.events.register("loadend",this,this.resetBackBuffer);}
this.startTransition();}else{if(this.backBufferTile){this.backBufferTile.clear();}}}else{if(drawTile&&this.isFirstDraw){this.events.register('loadend',this,this.showTile);this.isFirstDraw=false;}}
if(!drawTile){return false;}
if(this.isLoading){this.events.triggerEvent("reload");}else{this.isLoading=true;this.events.triggerEvent("loadstart");}
return this.renderTile();},resetBackBuffer:function(){this.showTile();if(this.backBufferTile&&(this.isFirstDraw||!this.layer.numLoadingTiles)){this.isFirstDraw=false;var maxExtent=this.layer.maxExtent;var withinMaxExtent=(maxExtent&&this.bounds.intersectsBounds(maxExtent,false));if(withinMaxExtent){this.backBufferTile.position=this.position;this.backBufferTile.bounds=this.bounds;this.backBufferTile.size=this.size;this.backBufferTile.imageSize=this.layer.imageSize||this.size;this.backBufferTile.imageOffset=this.layer.imageOffset;this.backBufferTile.resolution=this.layer.getResolution();this.backBufferTile.renderTile();}}},renderTile:function(){if(this.imgDiv==null){this.initImgDiv();}
this.imgDiv.viewRequestID=this.layer.map.viewRequestID;if(this.layer.url instanceof Array){this.imgDiv.urls=this.layer.url.slice();}
this.url=this.layer.getURL(this.bounds);OpenLayers.Util.modifyDOMElement(this.frame,null,this.position,this.size);var imageSize=this.layer.getImageSize();if(this.layerAlphaHack){OpenLayers.Util.modifyAlphaImageDiv(this.imgDiv,null,null,imageSize,this.url);}else{OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,imageSize);this.imgDiv.src=this.url;}
return true;},clear:function(){if(this.imgDiv){this.hide();if(OpenLayers.Tile.Image.useBlankTile){this.imgDiv.src=OpenLayers.Util.getImagesLocation()+"blank.gif";}}},initImgDiv:function(){var offset=this.layer.imageOffset;var size=this.layer.getImageSize();if(this.layerAlphaHack){this.imgDiv=OpenLayers.Util.createAlphaImageDiv(null,offset,size,null,"relative",null,null,null,true);}else{this.imgDiv=OpenLayers.Util.createImage(null,offset,size,null,"relative",null,null,true);}
this.imgDiv.className='olTileImage';this.frame.style.zIndex=this.isBackBuffer?0:1;this.frame.appendChild(this.imgDiv);this.layer.div.appendChild(this.frame);if(this.layer.opacity!=null){OpenLayers.Util.modifyDOMElement(this.imgDiv,null,null,null,null,null,null,this.layer.opacity);}
this.imgDiv.map=this.layer.map;var onload=function(){if(this.isLoading){this.isLoading=false;this.events.triggerEvent("loadend");}};if(this.layerAlphaHack){OpenLayers.Event.observe(this.imgDiv.childNodes[0],'load',OpenLayers.Function.bind(onload,this));}else{OpenLayers.Event.observe(this.imgDiv,'load',OpenLayers.Function.bind(onload,this));}
var onerror=function(){if(this.imgDiv._attempts>OpenLayers.IMAGE_RELOAD_ATTEMPTS){onload.call(this);}};OpenLayers.Event.observe(this.imgDiv,"error",OpenLayers.Function.bind(onerror,this));},checkImgURL:function(){if(this.layer){var loaded=this.layerAlphaHack?this.imgDiv.firstChild.src:this.imgDiv.src;if(!OpenLayers.Util.isEquivalentUrl(loaded,this.url)){this.hide();}}},startTransition:function(){if(!this.backBufferTile||!this.backBufferTile.imgDiv){return;}
var ratio=1;if(this.backBufferTile.resolution){ratio=this.backBufferTile.resolution/this.layer.getResolution();}
if(ratio!=this.lastRatio){if(this.layer.transitionEffect=='resize'){var upperLeft=new OpenLayers.LonLat(this.backBufferTile.bounds.left,this.backBufferTile.bounds.top);var size=new OpenLayers.Size(this.backBufferTile.size.w*ratio,this.backBufferTile.size.h*ratio);var px=this.layer.map.getLayerPxFromLonLat(upperLeft);OpenLayers.Util.modifyDOMElement(this.backBufferTile.frame,null,px,size);var imageSize=this.backBufferTile.imageSize;imageSize=new OpenLayers.Size(imageSize.w*ratio,imageSize.h*ratio);var imageOffset=this.backBufferTile.imageOffset;if(imageOffset){imageOffset=new OpenLayers.Pixel(imageOffset.x*ratio,imageOffset.y*ratio);}
OpenLayers.Util.modifyDOMElement(this.backBufferTile.imgDiv,null,imageOffset,imageSize);this.backBufferTile.show();}}else{if(this.layer.singleTile){this.backBufferTile.show();}else{this.backBufferTile.hide();}}
this.lastRatio=ratio;},show:function(){this.frame.style.display='';if(OpenLayers.Util.indexOf(this.layer.SUPPORTED_TRANSITIONS,this.layer.transitionEffect)!=-1){if(navigator.userAgent.toLowerCase().indexOf("gecko")!=-1){this.frame.scrollLeft=this.frame.scrollLeft;}}},hide:function(){this.frame.style.display='none';},CLASS_NAME:"OpenLayers.Tile.Image"});OpenLayers.Tile.Image.useBlankTile=(OpenLayers.Util.getBrowserName()=="safari"||OpenLayers.Util.getBrowserName()=="opera");OpenLayers.Control.OverviewMap=OpenLayers.Class(OpenLayers.Control,{element:null,ovmap:null,size:new OpenLayers.Size(180,90),layers:null,minRectSize:15,minRectDisplayClass:"RectReplacement",minRatio:8,maxRatio:32,mapOptions:null,handlers:null,resolutionFactor:1,initialize:function(options){this.layers=[];this.handlers={};OpenLayers.Control.prototype.initialize.apply(this,[options]);},destroy:function(){if(!this.mapDiv){return;}
this.handlers.click.destroy();this.mapDiv.removeChild(this.extentRectangle);this.extentRectangle=null;this.rectEvents.destroy();this.rectEvents=null;this.ovmap.destroy();this.ovmap=null;this.element.removeChild(this.mapDiv);this.mapDiv=null;this.div.removeChild(this.element);this.element=null;if(this.maximizeDiv){OpenLayers.Event.stopObservingElement(this.maximizeDiv);this.div.removeChild(this.maximizeDiv);this.maximizeDiv=null;}
if(this.minimizeDiv){OpenLayers.Event.stopObservingElement(this.minimizeDiv);this.div.removeChild(this.minimizeDiv);this.minimizeDiv=null;}
this.map.events.un({"moveend":this.update,"changebaselayer":this.baseLayerDraw,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments);},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!(this.layers.length>0)){if(this.map.baseLayer){var layer=this.map.baseLayer.clone();this.layers=[layer];}else{this.map.events.register("changebaselayer",this,this.baseLayerDraw);return this.div;}}
this.element=document.createElement('div');this.element.className=this.displayClass+'Element';this.element.style.display='none';this.mapDiv=document.createElement('div');this.mapDiv.style.width=this.size.w+'px';this.mapDiv.style.height=this.size.h+'px';this.mapDiv.style.position='relative';this.mapDiv.style.overflow='hidden';this.mapDiv.id=OpenLayers.Util.createUniqueID('overviewMap');this.extentRectangle=document.createElement('div');this.extentRectangle.style.position='absolute';this.extentRectangle.style.zIndex=1000;this.extentRectangle.className=this.displayClass+'ExtentRectangle';this.mapDiv.appendChild(this.extentRectangle);this.element.appendChild(this.mapDiv);this.div.appendChild(this.element);if(!this.outsideViewport){this.div.className+=" "+this.displayClass+'Container';var imgLocation=OpenLayers.Util.getImagesLocation();var img=imgLocation+'layer-switcher-maximize.png';this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv(this.displayClass+'MaximizeButton',null,new OpenLayers.Size(18,18),img,'absolute');this.maximizeDiv.style.display='none';this.maximizeDiv.className=this.displayClass+'MaximizeButton';OpenLayers.Event.observe(this.maximizeDiv,'click',OpenLayers.Function.bindAsEventListener(this.maximizeControl,this));this.div.appendChild(this.maximizeDiv);var img=imgLocation+'layer-switcher-minimize.png';this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv('OpenLayers_Control_minimizeDiv',null,new OpenLayers.Size(18,18),img,'absolute');this.minimizeDiv.style.display='none';this.minimizeDiv.className=this.displayClass+'MinimizeButton';OpenLayers.Event.observe(this.minimizeDiv,'click',OpenLayers.Function.bindAsEventListener(this.minimizeControl,this));this.div.appendChild(this.minimizeDiv);var eventsToStop=['dblclick','mousedown'];for(var i=0,len=eventsToStop.length;i<len;i++){OpenLayers.Event.observe(this.maximizeDiv,eventsToStop[i],OpenLayers.Event.stop);OpenLayers.Event.observe(this.minimizeDiv,eventsToStop[i],OpenLayers.Event.stop);}
this.minimizeControl();}else{this.element.style.display='';}
if(this.map.getExtent()){this.update();}
this.map.events.register('moveend',this,this.update);return this.div;},baseLayerDraw:function(){this.draw();this.map.events.unregister("changebaselayer",this,this.baseLayerDraw);},rectDrag:function(px){var deltaX=this.handlers.drag.last.x-px.x;var deltaY=this.handlers.drag.last.y-px.y;if(deltaX!=0||deltaY!=0){var rectTop=this.rectPxBounds.top;var rectLeft=this.rectPxBounds.left;var rectHeight=Math.abs(this.rectPxBounds.getHeight());var rectWidth=this.rectPxBounds.getWidth();var newTop=Math.max(0,(rectTop-deltaY));newTop=Math.min(newTop,this.ovmap.size.h-this.hComp-rectHeight);var newLeft=Math.max(0,(rectLeft-deltaX));newLeft=Math.min(newLeft,this.ovmap.size.w-this.wComp-rectWidth);this.setRectPxBounds(new OpenLayers.Bounds(newLeft,newTop+rectHeight,newLeft+rectWidth,newTop));}},mapDivClick:function(evt){var pxCenter=this.rectPxBounds.getCenterPixel();var deltaX=evt.xy.x-pxCenter.x;var deltaY=evt.xy.y-pxCenter.y;var top=this.rectPxBounds.top;var left=this.rectPxBounds.left;var height=Math.abs(this.rectPxBounds.getHeight());var width=this.rectPxBounds.getWidth();var newTop=Math.max(0,(top+deltaY));newTop=Math.min(newTop,this.ovmap.size.h-height);var newLeft=Math.max(0,(left+deltaX));newLeft=Math.min(newLeft,this.ovmap.size.w-width);this.setRectPxBounds(new OpenLayers.Bounds(newLeft,newTop+height,newLeft+width,newTop));this.updateMapToRect();},maximizeControl:function(e){this.element.style.display='';this.showToggle(false);if(e!=null){OpenLayers.Event.stop(e);}},minimizeControl:function(e){this.element.style.display='none';this.showToggle(true);if(e!=null){OpenLayers.Event.stop(e);}},showToggle:function(minimize){this.maximizeDiv.style.display=minimize?'':'none';this.minimizeDiv.style.display=minimize?'none':'';},update:function(){if(this.ovmap==null){this.createMap();}
if(!this.isSuitableOverview()){this.updateOverview();}
this.updateRectToMap();},isSuitableOverview:function(){var mapExtent=this.map.getExtent();var maxExtent=this.map.maxExtent;var testExtent=new OpenLayers.Bounds(Math.max(mapExtent.left,maxExtent.left),Math.max(mapExtent.bottom,maxExtent.bottom),Math.min(mapExtent.right,maxExtent.right),Math.min(mapExtent.top,maxExtent.top));if(this.ovmap.getProjection()!=this.map.getProjection()){testExtent=testExtent.transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject());}
var resRatio=this.ovmap.getResolution()/this.map.getResolution();return((resRatio>this.minRatio)&&(resRatio<=this.maxRatio)&&(this.ovmap.getExtent().containsBounds(testExtent)));},updateOverview:function(){var mapRes=this.map.getResolution();var targetRes=this.ovmap.getResolution();var resRatio=targetRes/mapRes;if(resRatio>this.maxRatio){targetRes=this.minRatio*mapRes;}else if(resRatio<=this.minRatio){targetRes=this.maxRatio*mapRes;}
var center;if(this.ovmap.getProjection()!=this.map.getProjection()){center=this.map.center.clone();center.transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject());}else{center=this.map.center;}
this.ovmap.setCenter(center,this.ovmap.getZoomForResolution(targetRes*this.resolutionFactor));this.updateRectToMap();},createMap:function(){var options=OpenLayers.Util.extend({controls:[],maxResolution:'auto',fallThrough:false},this.mapOptions);this.ovmap=new OpenLayers.Map(this.mapDiv,options);OpenLayers.Event.stopObserving(window,'unload',this.ovmap.unloadDestroy);this.ovmap.addLayers(this.layers);this.ovmap.zoomToMaxExtent();this.wComp=parseInt(OpenLayers.Element.getStyle(this.extentRectangle,'border-left-width'))+
parseInt(OpenLayers.Element.getStyle(this.extentRectangle,'border-right-width'));this.wComp=(this.wComp)?this.wComp:2;this.hComp=parseInt(OpenLayers.Element.getStyle(this.extentRectangle,'border-top-width'))+
parseInt(OpenLayers.Element.getStyle(this.extentRectangle,'border-bottom-width'));this.hComp=(this.hComp)?this.hComp:2;this.handlers.drag=new OpenLayers.Handler.Drag(this,{move:this.rectDrag,done:this.updateMapToRect},{map:this.ovmap});this.handlers.click=new OpenLayers.Handler.Click(this,{"click":this.mapDivClick},{"single":true,"double":false,"stopSingle":true,"stopDouble":true,"pixelTolerance":1,map:this.ovmap});this.handlers.click.activate();this.rectEvents=new OpenLayers.Events(this,this.extentRectangle,null,true);this.rectEvents.register("mouseover",this,function(e){if(!this.handlers.drag.active&&!this.map.dragging){this.handlers.drag.activate();}});this.rectEvents.register("mouseout",this,function(e){if(!this.handlers.drag.dragging){this.handlers.drag.deactivate();}});if(this.ovmap.getProjection()!=this.map.getProjection()){var sourceUnits=this.map.getProjectionObject().getUnits()||this.map.units||this.map.baseLayer.units;var targetUnits=this.ovmap.getProjectionObject().getUnits()||this.ovmap.units||this.ovmap.baseLayer.units;this.resolutionFactor=sourceUnits&&targetUnits?OpenLayers.INCHES_PER_UNIT[sourceUnits]/OpenLayers.INCHES_PER_UNIT[targetUnits]:1;}},updateRectToMap:function(){var bounds;if(this.ovmap.getProjection()!=this.map.getProjection()){bounds=this.map.getExtent().transform(this.map.getProjectionObject(),this.ovmap.getProjectionObject());}else{bounds=this.map.getExtent();}
var pxBounds=this.getRectBoundsFromMapBounds(bounds);if(pxBounds){this.setRectPxBounds(pxBounds);}},updateMapToRect:function(){var lonLatBounds=this.getMapBoundsFromRectBounds(this.rectPxBounds);if(this.ovmap.getProjection()!=this.map.getProjection()){lonLatBounds=lonLatBounds.transform(this.ovmap.getProjectionObject(),this.map.getProjectionObject());}
this.map.panTo(lonLatBounds.getCenterLonLat());},setRectPxBounds:function(pxBounds){var top=Math.max(pxBounds.top,0);var left=Math.max(pxBounds.left,0);var bottom=Math.min(pxBounds.top+Math.abs(pxBounds.getHeight()),this.ovmap.size.h-this.hComp);var right=Math.min(pxBounds.left+pxBounds.getWidth(),this.ovmap.size.w-this.wComp);var width=Math.max(right-left,0);var height=Math.max(bottom-top,0);if(width<this.minRectSize||height<this.minRectSize){this.extentRectangle.className=this.displayClass+
this.minRectDisplayClass;var rLeft=left+(width/2)-(this.minRectSize/2);var rTop=top+(height/2)-(this.minRectSize/2);this.extentRectangle.style.top=Math.round(rTop)+'px';this.extentRectangle.style.left=Math.round(rLeft)+'px';this.extentRectangle.style.height=this.minRectSize+'px';this.extentRectangle.style.width=this.minRectSize+'px';}else{this.extentRectangle.className=this.displayClass+'ExtentRectangle';this.extentRectangle.style.top=Math.round(top)+'px';this.extentRectangle.style.left=Math.round(left)+'px';this.extentRectangle.style.height=Math.round(height)+'px';this.extentRectangle.style.width=Math.round(width)+'px';}
this.rectPxBounds=new OpenLayers.Bounds(Math.round(left),Math.round(bottom),Math.round(right),Math.round(top));},getRectBoundsFromMapBounds:function(lonLatBounds){var leftBottomLonLat=new OpenLayers.LonLat(lonLatBounds.left,lonLatBounds.bottom);var rightTopLonLat=new OpenLayers.LonLat(lonLatBounds.right,lonLatBounds.top);var leftBottomPx=this.getOverviewPxFromLonLat(leftBottomLonLat);var rightTopPx=this.getOverviewPxFromLonLat(rightTopLonLat);var bounds=null;if(leftBottomPx&&rightTopPx){bounds=new OpenLayers.Bounds(leftBottomPx.x,leftBottomPx.y,rightTopPx.x,rightTopPx.y);}
return bounds;},getMapBoundsFromRectBounds:function(pxBounds){var leftBottomPx=new OpenLayers.Pixel(pxBounds.left,pxBounds.bottom);var rightTopPx=new OpenLayers.Pixel(pxBounds.right,pxBounds.top);var leftBottomLonLat=this.getLonLatFromOverviewPx(leftBottomPx);var rightTopLonLat=this.getLonLatFromOverviewPx(rightTopPx);return new OpenLayers.Bounds(leftBottomLonLat.lon,leftBottomLonLat.lat,rightTopLonLat.lon,rightTopLonLat.lat);},getLonLatFromOverviewPx:function(overviewMapPx){var size=this.ovmap.size;var res=this.ovmap.getResolution();var center=this.ovmap.getExtent().getCenterLonLat();var delta_x=overviewMapPx.x-(size.w/2);var delta_y=overviewMapPx.y-(size.h/2);return new OpenLayers.LonLat(center.lon+delta_x*res,center.lat-delta_y*res);},getOverviewPxFromLonLat:function(lonlat){var res=this.ovmap.getResolution();var extent=this.ovmap.getExtent();var px=null;if(extent){px=new OpenLayers.Pixel(Math.round(1/res*(lonlat.lon-extent.left)),Math.round(1/res*(extent.top-lonlat.lat)));}
return px;},CLASS_NAME:'OpenLayers.Control.OverviewMap'});OpenLayers.Feature=OpenLayers.Class({layer:null,id:null,lonlat:null,data:null,marker:null,popupClass:OpenLayers.Popup.AnchoredBubble,popup:null,initialize:function(layer,lonlat,data){this.layer=layer;this.lonlat=lonlat;this.data=(data!=null)?data:{};this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){if((this.layer!=null)&&(this.layer.map!=null)){if(this.popup!=null){this.layer.map.removePopup(this.popup);}}
this.layer=null;this.id=null;this.lonlat=null;this.data=null;if(this.marker!=null){this.destroyMarker(this.marker);this.marker=null;}
if(this.popup!=null){this.destroyPopup(this.popup);this.popup=null;}},onScreen:function(){var onScreen=false;if((this.layer!=null)&&(this.layer.map!=null)){var screenBounds=this.layer.map.getExtent();onScreen=screenBounds.containsLonLat(this.lonlat);}
return onScreen;},createMarker:function(){if(this.lonlat!=null){this.marker=new OpenLayers.Marker(this.lonlat,this.data.icon);}
return this.marker;},destroyMarker:function(){this.marker.destroy();},createPopup:function(closeBox){if(this.lonlat!=null){var id=this.id+"_popup";var anchor=(this.marker)?this.marker.icon:null;if(!this.popup){this.popup=new this.popupClass(id,this.lonlat,this.data.popupSize,this.data.popupContentHTML,anchor,closeBox);}
if(this.data.overflow!=null){this.popup.contentDiv.style.overflow=this.data.overflow;}
this.popup.feature=this;}
return this.popup;},destroyPopup:function(){if(this.popup){this.popup.feature=null;this.popup.destroy();this.popup=null;}},CLASS_NAME:"OpenLayers.Feature"});OpenLayers.Handler.Click=OpenLayers.Class(OpenLayers.Handler,{delay:300,single:true,'double':false,pixelTolerance:0,stopSingle:false,stopDouble:false,timerId:null,down:null,rightclickTimerId:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);if(this.pixelTolerance!=null){this.mousedown=function(evt){this.down=evt.xy;return true;};}},mousedown:null,mouseup:function(evt){var propagate=true;if(this.checkModifiers(evt)&&this.control.handleRightClicks&&OpenLayers.Event.isRightClick(evt)){propogate=this.rightclick(evt);}
return propagate;},rightclick:function(evt){if(this.passesTolerance(evt)){if(this.rightclickTimerId!=null){this.clearTimer();this.callback('dblrightclick',[evt]);return!this.stopDouble;}else{var clickEvent=this['double']?OpenLayers.Util.extend({},evt):this.callback('rightclick',[evt]);var delayedRightCall=OpenLayers.Function.bind(this.delayedRightCall,this,clickEvent);this.rightclickTimerId=window.setTimeout(delayedRightCall,this.delay);}}
return!this.stopSingle;},delayedRightCall:function(evt){this.rightclickTimerId=null;if(evt){this.callback('rightclick',[evt]);}
return!this.stopSingle;},dblclick:function(evt){if(this.passesTolerance(evt)){if(this["double"]){this.callback('dblclick',[evt]);}
this.clearTimer();}
return!this.stopDouble;},click:function(evt){if(this.passesTolerance(evt)){if(this.timerId!=null){this.clearTimer();}else{var clickEvent=this.single?OpenLayers.Util.extend({},evt):null;this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,clickEvent),this.delay);}}
return!this.stopSingle;},passesTolerance:function(evt){var passes=true;if(this.pixelTolerance!=null&&this.down){var dpx=Math.sqrt(Math.pow(this.down.x-evt.xy.x,2)+
Math.pow(this.down.y-evt.xy.y,2));if(dpx>this.pixelTolerance){passes=false;}}
return passes;},clearTimer:function(){if(this.timerId!=null){window.clearTimeout(this.timerId);this.timerId=null;}},delayedCall:function(evt){this.timerId=null;if(evt){this.callback('click',[evt]);}},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.clearTimer();this.down=null;deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Click"});OpenLayers.Handler.Drag=OpenLayers.Class(OpenLayers.Handler,{started:false,stopDown:true,dragging:false,last:null,start:null,oldOnselectstart:null,interval:0,timeoutId:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);},down:function(evt){},move:function(evt){},up:function(evt){},out:function(evt){},mousedown:function(evt){var propagate=true;this.dragging=false;if(this.checkModifiers(evt)&&OpenLayers.Event.isLeftClick(evt)){this.started=true;this.start=evt.xy;this.last=evt.xy;this.map.div.style.cursor="move";this.down(evt);this.callback("down",[evt.xy]);OpenLayers.Event.stop(evt);if(!this.oldOnselectstart){this.oldOnselectstart=(document.onselectstart)?document.onselectstart:function(){return true;};document.onselectstart=function(){return false;};}
propagate=!this.stopDown;}else{this.started=false;this.start=null;this.last=null;}
return propagate;},mousemove:function(evt){if(this.started&&!this.timeoutId&&(evt.xy.x!=this.last.x||evt.xy.y!=this.last.y)){if(this.interval>0){this.timeoutId=setTimeout(OpenLayers.Function.bind(this.removeTimeout,this),this.interval);}
this.dragging=true;this.move(evt);this.callback("move",[evt.xy]);if(!this.oldOnselectstart){this.oldOnselectstart=document.onselectstart;document.onselectstart=function(){return false;};}
this.last=this.evt.xy;}
return true;},removeTimeout:function(){this.timeoutId=null;},mouseup:function(evt){if(this.started){var dragged=(this.start!=this.last);this.started=false;this.dragging=false;this.map.div.style.cursor="";this.up(evt);this.callback("up",[evt.xy]);if(dragged){this.callback("done",[evt.xy]);}
document.onselectstart=this.oldOnselectstart;}
return true;},mouseout:function(evt){if(this.started&&OpenLayers.Util.mouseLeft(evt,this.map.div)){var dragged=(this.start!=this.last);this.started=false;this.dragging=false;this.map.div.style.cursor="";this.out(evt);this.callback("out",[]);if(dragged){this.callback("done",[evt.xy]);}
if(document.onselectstart){document.onselectstart=this.oldOnselectstart;}}
return true;},click:function(evt){return(this.start==this.last);},activate:function(){var activated=false;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.dragging=false;activated=true;}
return activated;},deactivate:function(){var deactivated=false;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.started=false;this.dragging=false;this.start=null;this.last=null;deactivated=true;}
return deactivated;},CLASS_NAME:"OpenLayers.Handler.Drag"});OpenLayers.Handler.MouseWheel=OpenLayers.Class(OpenLayers.Handler,{wheelListener:null,mousePosition:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.wheelListener=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this);},destroy:function(){OpenLayers.Handler.prototype.destroy.apply(this,arguments);this.wheelListener=null;},onWheelEvent:function(e){if(!this.map||!this.checkModifiers(e)){return;}
var overScrollableDiv=false;var overLayerDiv=false;var overMapDiv=false;var elem=OpenLayers.Event.element(e);while((elem!=null)&&!overMapDiv&&!overScrollableDiv){if(!overScrollableDiv){try{if(elem.currentStyle){overflow=elem.currentStyle["overflow"];}else{var style=document.defaultView.getComputedStyle(elem,null);var overflow=style.getPropertyValue("overflow");}
overScrollableDiv=(overflow&&(overflow=="auto")||(overflow=="scroll"));}catch(err){}}
if(!overLayerDiv){for(var i=0,len=this.map.layers.length;i<len;i++){if(elem==this.map.layers[i].div||elem==this.map.layers[i].pane){overLayerDiv=true;break;}}}
overMapDiv=(elem==this.map.div);elem=elem.parentNode;}
if(!overScrollableDiv&&overMapDiv){if(overLayerDiv){this.wheelZoom(e);}
OpenLayers.Event.stop(e);}},wheelZoom:function(e){var delta=0;if(!e){e=window.event;}
if(e.wheelDelta){delta=e.wheelDelta/120;if(window.opera&&window.opera.version()<9.2){delta=-delta;}}else if(e.detail){delta=-e.detail/3;}
if(delta){if(this.mousePosition){e.xy=this.mousePosition;}
if(!e.xy){e.xy=this.map.getPixelFromLonLat(this.map.getCenter());}
if(delta<0){this.callback("down",[e,delta]);}else{this.callback("up",[e,delta]);}}},mousemove:function(evt){this.mousePosition=evt.xy;},activate:function(evt){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var wheelListener=this.wheelListener;OpenLayers.Event.observe(window,"DOMMouseScroll",wheelListener);OpenLayers.Event.observe(window,"mousewheel",wheelListener);OpenLayers.Event.observe(document,"mousewheel",wheelListener);return true;}else{return false;}},deactivate:function(evt){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){var wheelListener=this.wheelListener;OpenLayers.Event.stopObserving(window,"DOMMouseScroll",wheelListener);OpenLayers.Event.stopObserving(window,"mousewheel",wheelListener);OpenLayers.Event.stopObserving(document,"mousewheel",wheelListener);return true;}else{return false;}},CLASS_NAME:"OpenLayers.Handler.MouseWheel"});OpenLayers.Layer=OpenLayers.Class({id:null,name:null,div:null,opacity:null,alwaysInRange:null,EVENT_TYPES:["loadstart","loadend","loadcancel","visibilitychanged","moveend"],events:null,map:null,isBaseLayer:false,alpha:false,displayInLayerSwitcher:true,visibility:true,attribution:null,inRange:false,imageSize:null,imageOffset:null,options:null,eventListeners:null,gutter:0,projection:null,units:null,scales:null,resolutions:null,maxExtent:null,minExtent:null,maxResolution:null,minResolution:null,numZoomLevels:null,minScale:null,maxScale:null,displayOutsideMaxExtent:false,wrapDateLine:false,transitionEffect:null,SUPPORTED_TRANSITIONS:['resize'],initialize:function(name,options){this.addOptions(options);this.name=name;if(this.id==null){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");this.div=OpenLayers.Util.createDiv(this.id);this.div.style.width="100%";this.div.style.height="100%";this.events=new OpenLayers.Events(this,this.div,this.EVENT_TYPES);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners);}}
if(this.wrapDateLine){this.displayOutsideMaxExtent=true;}},destroy:function(setNewBaseLayer){if(setNewBaseLayer==null){setNewBaseLayer=true;}
if(this.map!=null){this.map.removeLayer(this,setNewBaseLayer);}
this.projection=null;this.map=null;this.name=null;this.div=null;this.options=null;if(this.events){if(this.eventListeners){this.events.un(this.eventListeners);}
this.events.destroy();}
this.eventListeners=null;this.events=null;},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer(this.name,this.options);}
OpenLayers.Util.applyDefaults(obj,this);obj.map=null;return obj;},setName:function(newName){if(newName!=this.name){this.name=newName;if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"name"});}}},addOptions:function(newOptions){if(this.options==null){this.options={};}
OpenLayers.Util.extend(this.options,newOptions);OpenLayers.Util.extend(this,newOptions);},onMapResize:function(){},redraw:function(){var redrawn=false;if(this.map){this.inRange=this.calculateInRange();var extent=this.getExtent();if(extent&&this.inRange&&this.visibility){this.moveTo(extent,true,false);redrawn=true;}}
return redrawn;},moveTo:function(bounds,zoomChanged,dragging){var display=this.visibility;if(!this.isBaseLayer){display=display&&this.inRange;}
this.display(display);},setMap:function(map){if(this.map==null){this.map=map;this.maxExtent=this.maxExtent||this.map.maxExtent;this.projection=this.projection||this.map.projection;if(this.projection&&typeof this.projection=="string"){this.projection=new OpenLayers.Projection(this.projection);}
this.units=this.projection.getUnits()||this.units||this.map.units;this.initResolutions();if(!this.isBaseLayer){this.inRange=this.calculateInRange();var show=((this.visibility)&&(this.inRange));this.div.style.display=show?"":"none";}
this.setTileSize();}},removeMap:function(map){},getImageSize:function(){return(this.imageSize||this.tileSize);},setTileSize:function(size){var tileSize=(size)?size:((this.tileSize)?this.tileSize:this.map.getTileSize());this.tileSize=tileSize;if(this.gutter){this.imageOffset=new OpenLayers.Pixel(-this.gutter,-this.gutter);this.imageSize=new OpenLayers.Size(tileSize.w+(2*this.gutter),tileSize.h+(2*this.gutter));}},getVisibility:function(){return this.visibility;},setVisibility:function(visibility){if(visibility!=this.visibility){this.visibility=visibility;this.display(visibility);this.redraw();if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"visibility"});}
this.events.triggerEvent("visibilitychanged");}},display:function(display){var inRange=this.calculateInRange();if(display!=(this.div.style.display!="none")){this.div.style.display=(display&&inRange)?"block":"none";}},calculateInRange:function(){var inRange=false;if(this.alwaysInRange){inRange=true;}else{if(this.map){var resolution=this.map.getResolution();inRange=((resolution>=this.minResolution)&&(resolution<=this.maxResolution));}}
return inRange;},setIsBaseLayer:function(isBaseLayer){if(isBaseLayer!=this.isBaseLayer){this.isBaseLayer=isBaseLayer;if(this.map!=null){this.map.events.triggerEvent("changebaselayer",{layer:this});}}},initResolutions:function(){var props=new Array('projection','units','scales','resolutions','maxScale','minScale','maxResolution','minResolution','minExtent','maxExtent','numZoomLevels','maxZoomLevel');var notScaleProps=['projection','units'];var useInRange=false;var confProps={};for(var i=0,len=props.length;i<len;i++){var property=props[i];if(this.options[property]&&OpenLayers.Util.indexOf(notScaleProps,property)==-1){useInRange=true;}
confProps[property]=this.options[property]||this.map[property];}
if(this.alwaysInRange==null){this.alwaysInRange=!useInRange;}
if((this.options.minScale!=null||this.options.maxScale!=null)&&this.options.scales==null){confProps.scales=null;}
if((this.options.minResolution!=null||this.options.maxResolution!=null)&&this.options.resolutions==null){confProps.resolutions=null;}
if((!confProps.numZoomLevels)&&(confProps.maxZoomLevel)){confProps.numZoomLevels=confProps.maxZoomLevel+1;}
if((confProps.scales!=null)||(confProps.resolutions!=null)){if(confProps.scales!=null){confProps.resolutions=[];for(var i=0,len=confProps.scales.length;i<len;i++){var scale=confProps.scales[i];confProps.resolutions[i]=OpenLayers.Util.getResolutionFromScale(scale,confProps.units);}}
confProps.numZoomLevels=confProps.resolutions.length;}else{if(confProps.minScale){confProps.maxResolution=OpenLayers.Util.getResolutionFromScale(confProps.minScale,confProps.units);}else if(confProps.maxResolution=="auto"){var viewSize=this.map.getSize();var wRes=confProps.maxExtent.getWidth()/viewSize.w;var hRes=confProps.maxExtent.getHeight()/viewSize.h;confProps.maxResolution=Math.max(wRes,hRes);}
if(confProps.maxScale!=null){confProps.minResolution=OpenLayers.Util.getResolutionFromScale(confProps.maxScale,confProps.units);}else if((confProps.minResolution=="auto")&&(confProps.minExtent!=null)){var viewSize=this.map.getSize();var wRes=confProps.minExtent.getWidth()/viewSize.w;var hRes=confProps.minExtent.getHeight()/viewSize.h;confProps.minResolution=Math.max(wRes,hRes);}
if(confProps.minResolution!=null&&this.options.numZoomLevels==undefined){var ratio=confProps.maxResolution/confProps.minResolution;confProps.numZoomLevels=Math.floor(Math.log(ratio)/Math.log(2))+1;}
confProps.resolutions=new Array(confProps.numZoomLevels);var base=2;if(typeof confProps.minResolution=="number"&&confProps.numZoomLevels>1){base=Math.pow((confProps.maxResolution/confProps.minResolution),(1/(confProps.numZoomLevels-1)));}
for(var i=0;i<confProps.numZoomLevels;i++){var res=confProps.maxResolution/Math.pow(base,i);confProps.resolutions[i]=res;}}
confProps.resolutions.sort(function(a,b){return(b-a);});this.resolutions=confProps.resolutions;this.maxResolution=confProps.resolutions[0];var lastIndex=confProps.resolutions.length-1;this.minResolution=confProps.resolutions[lastIndex];this.scales=[];for(var i=0,len=confProps.resolutions.length;i<len;i++){this.scales[i]=OpenLayers.Util.getScaleFromResolution(confProps.resolutions[i],confProps.units);}
this.minScale=this.scales[0];this.maxScale=this.scales[this.scales.length-1];this.numZoomLevels=confProps.numZoomLevels;},getResolution:function(){var zoom=this.map.getZoom();return this.getResolutionForZoom(zoom);},getExtent:function(){return this.map.calculateBounds();},getZoomForExtent:function(extent,closest){var viewSize=this.map.getSize();var idealResolution=Math.max(extent.getWidth()/viewSize.w,extent.getHeight()/viewSize.h);return this.getZoomForResolution(idealResolution,closest);},getDataExtent:function(){},getResolutionForZoom:function(zoom){zoom=Math.max(0,Math.min(zoom,this.resolutions.length-1));var resolution;if(this.map.fractionalZoom){var low=Math.floor(zoom);var high=Math.ceil(zoom);resolution=this.resolutions[high]+
((zoom-low)*(this.resolutions[low]-this.resolutions[high]));}else{resolution=this.resolutions[Math.round(zoom)];}
return resolution;},getZoomForResolution:function(resolution,closest){var zoom;if(this.map.fractionalZoom){var lowZoom=0;var highZoom=this.resolutions.length-1;var highRes=this.resolutions[lowZoom];var lowRes=this.resolutions[highZoom];var res;for(var i=0,len=this.resolutions.length;i<len;++i){res=this.resolutions[i];if(res>=resolution){highRes=res;lowZoom=i;}
if(res<=resolution){lowRes=res;highZoom=i;break;}}
var dRes=highRes-lowRes;if(dRes>0){zoom=lowZoom+((resolution-lowRes)/dRes);}else{zoom=lowZoom;}}else{var diff;var minDiff=Number.POSITIVE_INFINITY;for(var i=0,len=this.resolutions.length;i<len;i++){if(closest){diff=Math.abs(this.resolutions[i]-resolution);if(diff>minDiff){break;}
minDiff=diff;}else{if(this.resolutions[i]<resolution){break;}}}
zoom=Math.max(0,i-1);}
return zoom;},getLonLatFromViewPortPx:function(viewPortPx){var lonlat=null;if(viewPortPx!=null){var size=this.map.getSize();var center=this.map.getCenter();if(center){var res=this.map.getResolution();var delta_x=viewPortPx.x-(size.w/2);var delta_y=viewPortPx.y-(size.h/2);lonlat=new OpenLayers.LonLat(center.lon+delta_x*res,center.lat-delta_y*res);if(this.wrapDateLine){lonlat=lonlat.wrapDateLine(this.maxExtent);}}}
return lonlat;},getViewPortPxFromLonLat:function(lonlat){var px=null;if(lonlat!=null){var resolution=this.map.getResolution();var extent=this.map.getExtent();px=new OpenLayers.Pixel((1/resolution*(lonlat.lon-extent.left)),(1/resolution*(extent.top-lonlat.lat)));}
return px;},setOpacity:function(opacity){if(opacity!=this.opacity){this.opacity=opacity;for(var i=0,len=this.div.childNodes.length;i<len;++i){var element=this.div.childNodes[i].firstChild;OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);}}},getZIndex:function(){return this.div.style.zIndex;},setZIndex:function(zIndex){this.div.style.zIndex=zIndex;},adjustBounds:function(bounds){if(this.gutter){var mapGutter=this.gutter*this.map.getResolution();bounds=new OpenLayers.Bounds(bounds.left-mapGutter,bounds.bottom-mapGutter,bounds.right+mapGutter,bounds.top+mapGutter);}
if(this.wrapDateLine){var wrappingOptions={'rightTolerance':this.getResolution()};bounds=bounds.wrapDateLine(this.maxExtent,wrappingOptions);}
return bounds;},CLASS_NAME:"OpenLayers.Layer"});OpenLayers.Control.DragPan=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,panned:false,interval:25,draw:function(){this.handler=new OpenLayers.Handler.Drag(this,{"move":this.panMap,"done":this.panMapDone},{interval:this.interval});},panMap:function(xy){this.panned=true;this.map.pan(this.handler.last.x-xy.x,this.handler.last.y-xy.y,{dragging:this.handler.dragging,animate:false});},panMapDone:function(xy){if(this.panned){this.panMap(xy);this.panned=false;}},CLASS_NAME:"OpenLayers.Control.DragPan"});OpenLayers.State={UNKNOWN:'Unknown',INSERT:'Insert',UPDATE:'Update',DELETE:'Delete'};OpenLayers.Feature.Vector=OpenLayers.Class(OpenLayers.Feature,{fid:null,geometry:null,attributes:null,state:null,style:null,renderIntent:"default",initialize:function(geometry,attributes,style){OpenLayers.Feature.prototype.initialize.apply(this,[null,null,attributes]);this.lonlat=null;this.geometry=geometry?geometry:null;this.state=null;this.attributes={};if(attributes){this.attributes=OpenLayers.Util.extend(this.attributes,attributes);}
this.style=style?style:null;},destroy:function(){if(this.layer){this.layer.removeFeatures(this);this.layer=null;}
this.geometry=null;OpenLayers.Feature.prototype.destroy.apply(this,arguments);},clone:function(){return new OpenLayers.Feature.Vector(this.geometry?this.geometry.clone():null,this.attributes,this.style);},onScreen:function(boundsOnly){var onScreen=false;if(this.layer&&this.layer.map){var screenBounds=this.layer.map.getExtent();if(boundsOnly){var featureBounds=this.geometry.getBounds();onScreen=screenBounds.intersectsBounds(featureBounds);}else{var screenPoly=screenBounds.toGeometry();onScreen=screenPoly.intersects(this.geometry);}}
return onScreen;},createMarker:function(){return null;},destroyMarker:function(){},createPopup:function(){return null;},atPoint:function(lonlat,toleranceLon,toleranceLat){var atPoint=false;if(this.geometry){atPoint=this.geometry.atPoint(lonlat,toleranceLon,toleranceLat);}
return atPoint;},destroyPopup:function(){},move:function(location){if(!this.layer||!this.geometry.move){return;}
var pixel;if(location.CLASS_NAME=="OpenLayers.LonLat"){pixel=this.layer.getViewPortPxFromLonLat(location);}else{pixel=location;}
var lastPixel=this.layer.getViewPortPxFromLonLat(this.geometry.getBounds().getCenterLonLat());var res=this.layer.map.getResolution();this.geometry.move(res*(pixel.x-lastPixel.x),res*(lastPixel.y-pixel.y));this.layer.drawFeature(this);return lastPixel;},toState:function(state){if(state==OpenLayers.State.UPDATE){switch(this.state){case OpenLayers.State.UNKNOWN:case OpenLayers.State.DELETE:this.state=state;break;case OpenLayers.State.UPDATE:case OpenLayers.State.INSERT:break;}}else if(state==OpenLayers.State.INSERT){switch(this.state){case OpenLayers.State.UNKNOWN:break;default:this.state=state;break;}}else if(state==OpenLayers.State.DELETE){switch(this.state){case OpenLayers.State.INSERT:break;case OpenLayers.State.DELETE:break;case OpenLayers.State.UNKNOWN:case OpenLayers.State.UPDATE:this.state=state;break;}}else if(state==OpenLayers.State.UNKNOWN){this.state=state;}},CLASS_NAME:"OpenLayers.Feature.Vector"});OpenLayers.Feature.Vector.style={'default':{fillColor:"#ee9900",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"#ee9900",strokeOpacity:1,strokeWidth:1,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit"},'select':{fillColor:"blue",fillOpacity:0.4,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"blue",strokeOpacity:1,strokeWidth:2,strokeLinecap:"round",strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"pointer"},'temporary':{fillColor:"yellow",fillOpacity:0.2,hoverFillColor:"white",hoverFillOpacity:0.8,strokeColor:"yellow",strokeOpacity:1,strokeLinecap:"round",strokeWidth:4,strokeDashstyle:"solid",hoverStrokeColor:"red",hoverStrokeOpacity:1,hoverStrokeWidth:0.2,pointRadius:6,hoverPointRadius:1,hoverPointUnit:"%",pointerEvents:"visiblePainted",cursor:"inherit"}};OpenLayers.Handler.Box=OpenLayers.Class(OpenLayers.Handler,{dragHandler:null,boxDivClassName:'olHandlerBoxZoomBox',boxCharacteristics:null,initialize:function(control,callbacks,options){OpenLayers.Handler.prototype.initialize.apply(this,arguments);var callbacks={"down":this.startBox,"move":this.moveBox,"out":this.removeBox,"up":this.endBox};this.dragHandler=new OpenLayers.Handler.Drag(this,callbacks,{keyMask:this.keyMask});},setMap:function(map){OpenLayers.Handler.prototype.setMap.apply(this,arguments);if(this.dragHandler){this.dragHandler.setMap(map);}},startBox:function(xy){this.zoomBox=OpenLayers.Util.createDiv('zoomBox',this.dragHandler.start);this.zoomBox.className=this.boxDivClassName;this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE["Popup"]-1;this.map.viewPortDiv.appendChild(this.zoomBox);this.map.div.style.cursor="crosshair";},moveBox:function(xy){var startX=this.dragHandler.start.x;var startY=this.dragHandler.start.y;var deltaX=Math.abs(startX-xy.x);var deltaY=Math.abs(startY-xy.y);this.zoomBox.style.width=Math.max(1,deltaX)+"px";this.zoomBox.style.height=Math.max(1,deltaY)+"px";this.zoomBox.style.left=xy.x<startX?xy.x+"px":startX+"px";this.zoomBox.style.top=xy.y<startY?xy.y+"px":startY+"px";var box=this.getBoxCharacteristics(deltaX,deltaY);if(box.newBoxModel){if(xy.x>startX){this.zoomBox.style.width=Math.max(1,deltaX-box.xOffset)+"px";}
if(xy.y>startY){this.zoomBox.style.height=Math.max(1,deltaY-box.yOffset)+"px";}}},endBox:function(end){var result;if(Math.abs(this.dragHandler.start.x-end.x)>5||Math.abs(this.dragHandler.start.y-end.y)>5){var start=this.dragHandler.start;var top=Math.min(start.y,end.y);var bottom=Math.max(start.y,end.y);var left=Math.min(start.x,end.x);var right=Math.max(start.x,end.x);result=new OpenLayers.Bounds(left,bottom,right,top);}else{result=this.dragHandler.start.clone();}
this.removeBox();this.map.div.style.cursor="";this.callback("done",[result]);},removeBox:function(){this.map.viewPortDiv.removeChild(this.zoomBox);this.zoomBox=null;this.boxCharacteristics=null;},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){this.dragHandler.activate();return true;}else{return false;}},deactivate:function(){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){this.dragHandler.deactivate();return true;}else{return false;}},getBoxCharacteristics:function(dx,dy){if(!this.boxCharacteristics){var xOffset=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-left-width"))+parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-right-width"))+1;var yOffset=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-top-width"))+parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-bottom-width"))+1;var newBoxModel=OpenLayers.Util.getBrowserName()=="msie"?document.compatMode!="BackCompat":true;this.boxCharacteristics={xOffset:xOffset,yOffset:yOffset,newBoxModel:newBoxModel};}
return this.boxCharacteristics;},CLASS_NAME:"OpenLayers.Handler.Box"});OpenLayers.Layer.HTTPRequest=OpenLayers.Class(OpenLayers.Layer,{URL_HASH_FACTOR:(Math.sqrt(5)-1)/2,url:null,params:null,reproject:false,initialize:function(name,url,params,options){var newArguments=arguments;newArguments=[name,options];OpenLayers.Layer.prototype.initialize.apply(this,newArguments);this.url=url;this.params=OpenLayers.Util.extend({},params);},destroy:function(){this.url=null;this.params=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.HTTPRequest(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.prototype.clone.apply(this,[obj]);return obj;},setUrl:function(newUrl){this.url=newUrl;},mergeNewParams:function(newParams){this.params=OpenLayers.Util.extend(this.params,newParams);return this.redraw();},redraw:function(force){if(force){return this.mergeNewParams({"_olSalt":Math.random()});}else{return OpenLayers.Layer.prototype.redraw.apply(this,[]);}},selectUrl:function(paramString,urls){var product=1;for(var i=0,len=paramString.length;i<len;i++){product*=paramString.charCodeAt(i)*this.URL_HASH_FACTOR;product-=Math.floor(product);}
return urls[Math.floor(product*urls.length)];},getFullRequestString:function(newParams,altUrl){var url=altUrl||this.url;var allParams=OpenLayers.Util.extend({},this.params);allParams=OpenLayers.Util.extend(allParams,newParams);var paramsString=OpenLayers.Util.getParameterString(allParams);if(url instanceof Array){url=this.selectUrl(paramsString,url);}
var urlParams=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(url));for(var key in allParams){if(key.toUpperCase()in urlParams){delete allParams[key];}}
paramsString=OpenLayers.Util.getParameterString(allParams);var requestString=url;if(paramsString!=""){var lastServerChar=url.charAt(url.length-1);if((lastServerChar=="&")||(lastServerChar=="?")){requestString+=paramsString;}else{if(url.indexOf('?')==-1){requestString+='?'+paramsString;}else{requestString+='&'+paramsString;}}}
return requestString;},CLASS_NAME:"OpenLayers.Layer.HTTPRequest"});OpenLayers.Layer.Markers=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:false,markers:null,drawn:false,initialize:function(name,options){OpenLayers.Layer.prototype.initialize.apply(this,arguments);this.markers=[];},destroy:function(){this.clearMarkers();this.markers=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments);},setOpacity:function(opacity){if(opacity!=this.opacity){this.opacity=opacity;for(var i=0,len=this.markers.length;i<len;i++){this.markers[i].setOpacity(this.opacity);}}},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);if(zoomChanged||!this.drawn){for(var i=0,len=this.markers.length;i<len;i++){this.drawMarker(this.markers[i]);}
this.drawn=true;}},addMarker:function(marker){this.markers.push(marker);if(this.opacity!=null){marker.setOpacity(this.opacity);}
if(this.map&&this.map.getExtent()){marker.map=this.map;this.drawMarker(marker);}},removeMarker:function(marker){if(this.markers&&this.markers.length){OpenLayers.Util.removeItem(this.markers,marker);if((marker.icon!=null)&&(marker.icon.imageDiv!=null)&&(marker.icon.imageDiv.parentNode==this.div)){this.div.removeChild(marker.icon.imageDiv);marker.drawn=false;}}},clearMarkers:function(){if(this.markers!=null){while(this.markers.length>0){this.removeMarker(this.markers[0]);}}},drawMarker:function(marker){var px=this.map.getLayerPxFromLonLat(marker.lonlat);if(px==null){marker.display(false);}else{var markerImg=marker.draw(px);if(!marker.drawn){this.div.appendChild(markerImg);marker.drawn=true;}}},getDataExtent:function(){var maxExtent=null;if(this.markers&&(this.markers.length>0)){var maxExtent=new OpenLayers.Bounds();for(var i=0,len=this.markers.length;i<len;i++){var marker=this.markers[i];maxExtent.extend(marker.lonlat);}}
return maxExtent;},CLASS_NAME:"OpenLayers.Layer.Markers"});OpenLayers.Layer.SphericalMercator={getExtent:function(){var extent=null;if(this.sphericalMercator){extent=this.map.calculateBounds();}else{extent=OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this);}
return extent;},initMercatorParameters:function(){this.RESOLUTIONS=[];var maxResolution=156543.0339;for(var zoom=0;zoom<=this.MAX_ZOOM_LEVEL;++zoom){this.RESOLUTIONS[zoom]=maxResolution/Math.pow(2,zoom);}
this.units="m";this.projection="EPSG:900913";},forwardMercator:function(lon,lat){var x=lon*20037508.34/180;var y=Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);y=y*20037508.34/180;return new OpenLayers.LonLat(x,y);},inverseMercator:function(x,y){var lon=(x/20037508.34)*180;var lat=(y/20037508.34)*180;lat=180/Math.PI*(2*Math.atan(Math.exp(lat*Math.PI/180))-Math.PI/2);return new OpenLayers.LonLat(lon,lat);},projectForward:function(point){var lonlat=OpenLayers.Layer.SphericalMercator.forwardMercator(point.x,point.y);point.x=lonlat.lon;point.y=lonlat.lat;return point;},projectInverse:function(point){var lonlat=OpenLayers.Layer.SphericalMercator.inverseMercator(point.x,point.y);point.x=lonlat.lon;point.y=lonlat.lat;return point;}};OpenLayers.Projection.addTransform("EPSG:4326","EPSG:900913",OpenLayers.Layer.SphericalMercator.projectForward);OpenLayers.Projection.addTransform("EPSG:900913","EPSG:4326",OpenLayers.Layer.SphericalMercator.projectInverse);OpenLayers.Control.ZoomBox=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,out:false,draw:function(){this.handler=new OpenLayers.Handler.Box(this,{done:this.zoomBox},{keyMask:this.keyMask});},zoomBox:function(position){if(position instanceof OpenLayers.Bounds){if(!this.out){var minXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.left,position.bottom));var maxXY=this.map.getLonLatFromPixel(new OpenLayers.Pixel(position.right,position.top));var bounds=new OpenLayers.Bounds(minXY.lon,minXY.lat,maxXY.lon,maxXY.lat);}else{var pixWidth=Math.abs(position.right-position.left);var pixHeight=Math.abs(position.top-position.bottom);var zoomFactor=Math.min((this.map.size.h/pixHeight),(this.map.size.w/pixWidth));var extent=this.map.getExtent();var center=this.map.getLonLatFromPixel(position.getCenterPixel());var xmin=center.lon-(extent.getWidth()/2)*zoomFactor;var xmax=center.lon+(extent.getWidth()/2)*zoomFactor;var ymin=center.lat-(extent.getHeight()/2)*zoomFactor;var ymax=center.lat+(extent.getHeight()/2)*zoomFactor;var bounds=new OpenLayers.Bounds(xmin,ymin,xmax,ymax);}
this.map.zoomToExtent(bounds);}else{if(!this.out){this.map.setCenter(this.map.getLonLatFromPixel(position),this.map.getZoom()+1);}else{this.map.setCenter(this.map.getLonLatFromPixel(position),this.map.getZoom()-1);}}},CLASS_NAME:"OpenLayers.Control.ZoomBox"});OpenLayers.Format.WKT=OpenLayers.Class(OpenLayers.Format,{initialize:function(options){this.regExes={'typeStr':/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,'spaces':/\s+/,'parenComma':/\)\s*,\s*\(/,'doubleParenComma':/\)\s*\)\s*,\s*\(\s*\(/,'trimParens':/^\s*\(?(.*?)\)?\s*$/};OpenLayers.Format.prototype.initialize.apply(this,[options]);},read:function(wkt){var features,type,str;var matches=this.regExes.typeStr.exec(wkt);if(matches){type=matches[1].toLowerCase();str=matches[2];if(this.parse[type]){features=this.parse[type].apply(this,[str]);}
if(this.internalProjection&&this.externalProjection){if(features&&features.CLASS_NAME=="OpenLayers.Feature.Vector"){features.geometry.transform(this.externalProjection,this.internalProjection);}else if(features&&type!="geometrycollection"&&typeof features=="object"){for(var i=0,len=features.length;i<len;i++){var component=features[i];component.geometry.transform(this.externalProjection,this.internalProjection);}}}}
return features;},write:function(features){var collection,geometry,type,data,isCollection;if(features.constructor==Array){collection=features;isCollection=true;}else{collection=[features];isCollection=false;}
var pieces=[];if(isCollection){pieces.push('GEOMETRYCOLLECTION(');}
for(var i=0,len=collection.length;i<len;++i){if(isCollection&&i>0){pieces.push(',');}
geometry=collection[i].geometry;type=geometry.CLASS_NAME.split('.')[2].toLowerCase();if(!this.extract[type]){return null;}
if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
data=this.extract[type].apply(this,[geometry]);pieces.push(type.toUpperCase()+'('+data+')');}
if(isCollection){pieces.push(')');}
return pieces.join('');},extract:{'point':function(point){return point.x+' '+point.y;},'multipoint':function(multipoint){var array=[];for(var i=0,len=multipoint.components.length;i<len;++i){array.push(this.extract.point.apply(this,[multipoint.components[i]]));}
return array.join(',');},'linestring':function(linestring){var array=[];for(var i=0,len=linestring.components.length;i<len;++i){array.push(this.extract.point.apply(this,[linestring.components[i]]));}
return array.join(',');},'multilinestring':function(multilinestring){var array=[];for(var i=0,len=multilinestring.components.length;i<len;++i){array.push('('+
this.extract.linestring.apply(this,[multilinestring.components[i]])+')');}
return array.join(',');},'polygon':function(polygon){var array=[];for(var i=0,len=polygon.components.length;i<len;++i){array.push('('+
this.extract.linestring.apply(this,[polygon.components[i]])+')');}
return array.join(',');},'multipolygon':function(multipolygon){var array=[];for(var i=0,len=multipolygon.components.length;i<len;++i){array.push('('+
this.extract.polygon.apply(this,[multipolygon.components[i]])+')');}
return array.join(',');}},parse:{'point':function(str){var coords=OpenLayers.String.trim(str).split(this.regExes.spaces);return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[0],coords[1]));},'multipoint':function(str){var points=OpenLayers.String.trim(str).split(',');var components=[];for(var i=0,len=points.length;i<len;++i){components.push(this.parse.point.apply(this,[points[i]]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPoint(components));},'linestring':function(str){var points=OpenLayers.String.trim(str).split(',');var components=[];for(var i=0,len=points.length;i<len;++i){components.push(this.parse.point.apply(this,[points[i]]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(components));},'multilinestring':function(str){var line;var lines=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0,len=lines.length;i<len;++i){line=lines[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.linestring.apply(this,[line]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiLineString(components));},'polygon':function(str){var ring,linestring,linearring;var rings=OpenLayers.String.trim(str).split(this.regExes.parenComma);var components=[];for(var i=0,len=rings.length;i<len;++i){ring=rings[i].replace(this.regExes.trimParens,'$1');linestring=this.parse.linestring.apply(this,[ring]).geometry;linearring=new OpenLayers.Geometry.LinearRing(linestring.components);components.push(linearring);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(components));},'multipolygon':function(str){var polygon;var polygons=OpenLayers.String.trim(str).split(this.regExes.doubleParenComma);var components=[];for(var i=0,len=polygons.length;i<len;++i){polygon=polygons[i].replace(this.regExes.trimParens,'$1');components.push(this.parse.polygon.apply(this,[polygon]).geometry);}
return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.MultiPolygon(components));},'geometrycollection':function(str){str=str.replace(/,\s*([A-Za-z])/g,'|$1');var wktArray=OpenLayers.String.trim(str).split('|');var components=[];for(var i=0,len=wktArray.length;i<len;++i){components.push(OpenLayers.Format.WKT.prototype.read.apply(this,[wktArray[i]]));}
return components;}},CLASS_NAME:"OpenLayers.Format.WKT"});OpenLayers.Layer.Grid=OpenLayers.Class(OpenLayers.Layer.HTTPRequest,{tileSize:null,grid:null,singleTile:false,ratio:1.5,buffer:2,numLoadingTiles:0,initialize:function(name,url,params,options){OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this,arguments);this.events.addEventType("tileloaded");this.grid=[];},destroy:function(){this.clearGrid();this.grid=null;this.tileSize=null;OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this,arguments);},clearGrid:function(){if(this.grid){for(var iRow=0,len=this.grid.length;iRow<len;iRow++){var row=this.grid[iRow];for(var iCol=0,clen=row.length;iCol<clen;iCol++){var tile=row[iCol];this.removeTileMonitoringHooks(tile);tile.destroy();}}
this.grid=[];}},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.Grid(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[obj]);if(this.tileSize!=null){obj.tileSize=this.tileSize.clone();}
obj.grid=[];return obj;},moveTo:function(bounds,zoomChanged,dragging){OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this,arguments);bounds=bounds||this.map.getExtent();if(bounds!=null){var forceReTile=!this.grid.length||zoomChanged;var tilesBounds=this.getTilesBounds();if(this.singleTile){if(forceReTile||(!dragging&&!tilesBounds.containsBounds(bounds))){this.initSingleTile(bounds);}}else{if(forceReTile||!tilesBounds.containsBounds(bounds,true)){this.initGriddedTiles(bounds);}else{this.moveGriddedTiles(bounds);}}}},setTileSize:function(size){if(this.singleTile){size=this.map.getSize().clone();size.h=parseInt(size.h*this.ratio);size.w=parseInt(size.w*this.ratio);}
OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this,[size]);},getGridBounds:function(){var msg="The getGridBounds() function is deprecated. It will be "+"removed in 3.0. Please use getTilesBounds() instead.";OpenLayers.Console.warn(msg);return this.getTilesBounds();},getTilesBounds:function(){var bounds=null;if(this.grid.length){var bottom=this.grid.length-1;var bottomLeftTile=this.grid[bottom][0];var right=this.grid[0].length-1;var topRightTile=this.grid[0][right];bounds=new OpenLayers.Bounds(bottomLeftTile.bounds.left,bottomLeftTile.bounds.bottom,topRightTile.bounds.right,topRightTile.bounds.top);}
return bounds;},initSingleTile:function(bounds){var center=bounds.getCenterLonLat();var tileWidth=bounds.getWidth()*this.ratio;var tileHeight=bounds.getHeight()*this.ratio;var tileBounds=new OpenLayers.Bounds(center.lon-(tileWidth/2),center.lat-(tileHeight/2),center.lon+(tileWidth/2),center.lat+(tileHeight/2));var ul=new OpenLayers.LonLat(tileBounds.left,tileBounds.top);var px=this.map.getLayerPxFromLonLat(ul);if(!this.grid.length){this.grid[0]=[];}
var tile=this.grid[0][0];if(!tile){tile=this.addTile(tileBounds,px);this.addTileMonitoringHooks(tile);tile.draw();this.grid[0][0]=tile;}else{tile.moveTo(tileBounds,px);}
this.removeExcessTiles(1,1);},calculateGridLayout:function(bounds,extent,resolution){var tilelon=resolution*this.tileSize.w;var tilelat=resolution*this.tileSize.h;var offsetlon=bounds.left-extent.left;var tilecol=Math.floor(offsetlon/tilelon)-this.buffer;var tilecolremain=offsetlon/tilelon-tilecol;var tileoffsetx=-tilecolremain*this.tileSize.w;var tileoffsetlon=extent.left+tilecol*tilelon;var offsetlat=bounds.top-(extent.bottom+tilelat);var tilerow=Math.ceil(offsetlat/tilelat)+this.buffer;var tilerowremain=tilerow-offsetlat/tilelat;var tileoffsety=-tilerowremain*this.tileSize.h;var tileoffsetlat=extent.bottom+tilerow*tilelat;return{tilelon:tilelon,tilelat:tilelat,tileoffsetlon:tileoffsetlon,tileoffsetlat:tileoffsetlat,tileoffsetx:tileoffsetx,tileoffsety:tileoffsety};},initGriddedTiles:function(bounds){var viewSize=this.map.getSize();var minRows=Math.ceil(viewSize.h/this.tileSize.h)+
Math.max(1,2*this.buffer);var minCols=Math.ceil(viewSize.w/this.tileSize.w)+
Math.max(1,2*this.buffer);var extent=this.maxExtent;var resolution=this.map.getResolution();var tileLayout=this.calculateGridLayout(bounds,extent,resolution);var tileoffsetx=Math.round(tileLayout.tileoffsetx);var tileoffsety=Math.round(tileLayout.tileoffsety);var tileoffsetlon=tileLayout.tileoffsetlon;var tileoffsetlat=tileLayout.tileoffsetlat;var tilelon=tileLayout.tilelon;var tilelat=tileLayout.tilelat;this.origin=new OpenLayers.Pixel(tileoffsetx,tileoffsety);var startX=tileoffsetx;var startLon=tileoffsetlon;var rowidx=0;var layerContainerDivLeft=parseInt(this.map.layerContainerDiv.style.left);var layerContainerDivTop=parseInt(this.map.layerContainerDiv.style.top);do{var row=this.grid[rowidx++];if(!row){row=[];this.grid.push(row);}
tileoffsetlon=startLon;tileoffsetx=startX;var colidx=0;do{var tileBounds=new OpenLayers.Bounds(tileoffsetlon,tileoffsetlat,tileoffsetlon+tilelon,tileoffsetlat+tilelat);var x=tileoffsetx;x-=layerContainerDivLeft;var y=tileoffsety;y-=layerContainerDivTop;var px=new OpenLayers.Pixel(x,y);var tile=row[colidx++];if(!tile){tile=this.addTile(tileBounds,px);this.addTileMonitoringHooks(tile);row.push(tile);}else{tile.moveTo(tileBounds,px,false);}
tileoffsetlon+=tilelon;tileoffsetx+=this.tileSize.w;}while((tileoffsetlon<=bounds.right+tilelon*this.buffer)||colidx<minCols)
tileoffsetlat-=tilelat;tileoffsety+=this.tileSize.h;}while((tileoffsetlat>=bounds.bottom-tilelat*this.buffer)||rowidx<minRows)
this.removeExcessTiles(rowidx,colidx);this.spiralTileLoad();},spiralTileLoad:function(){var tileQueue=[];var directions=["right","down","left","up"];var iRow=0;var iCell=-1;var direction=OpenLayers.Util.indexOf(directions,"right");var directionsTried=0;while(directionsTried<directions.length){var testRow=iRow;var testCell=iCell;switch(directions[direction]){case"right":testCell++;break;case"down":testRow++;break;case"left":testCell--;break;case"up":testRow--;break;}
var tile=null;if((testRow<this.grid.length)&&(testRow>=0)&&(testCell<this.grid[0].length)&&(testCell>=0)){tile=this.grid[testRow][testCell];}
if((tile!=null)&&(!tile.queued)){tileQueue.unshift(tile);tile.queued=true;directionsTried=0;iRow=testRow;iCell=testCell;}else{direction=(direction+1)%4;directionsTried++;}}
for(var i=0,len=tileQueue.length;i<len;i++){var tile=tileQueue[i];tile.draw();tile.queued=false;}},addTile:function(bounds,position){},addTileMonitoringHooks:function(tile){tile.onLoadStart=function(){if(this.numLoadingTiles==0){this.events.triggerEvent("loadstart");}
this.numLoadingTiles++;};tile.events.register("loadstart",this,tile.onLoadStart);tile.onLoadEnd=function(){this.numLoadingTiles--;this.events.triggerEvent("tileloaded");if(this.numLoadingTiles==0){this.events.triggerEvent("loadend");}};tile.events.register("loadend",this,tile.onLoadEnd);tile.events.register("unload",this,tile.onLoadEnd);},removeTileMonitoringHooks:function(tile){tile.unload();tile.events.un({"loadstart":tile.onLoadStart,"loadend":tile.onLoadEnd,"unload":tile.onLoadEnd,scope:this});},moveGriddedTiles:function(bounds){var buffer=this.buffer||1;while(true){var tlLayer=this.grid[0][0].position;var tlViewPort=this.map.getViewPortPxFromLayerPx(tlLayer);if(tlViewPort.x>-this.tileSize.w*(buffer-1)){this.shiftColumn(true);}else if(tlViewPort.x<-this.tileSize.w*buffer){this.shiftColumn(false);}else if(tlViewPort.y>-this.tileSize.h*(buffer-1)){this.shiftRow(true);}else if(tlViewPort.y<-this.tileSize.h*buffer){this.shiftRow(false);}else{break;}};},shiftRow:function(prepend){var modelRowIndex=(prepend)?0:(this.grid.length-1);var grid=this.grid;var modelRow=grid[modelRowIndex];var resolution=this.map.getResolution();var deltaY=(prepend)?-this.tileSize.h:this.tileSize.h;var deltaLat=resolution*-deltaY;var row=(prepend)?grid.pop():grid.shift();for(var i=0,len=modelRow.length;i<len;i++){var modelTile=modelRow[i];var bounds=modelTile.bounds.clone();var position=modelTile.position.clone();bounds.bottom=bounds.bottom+deltaLat;bounds.top=bounds.top+deltaLat;position.y=position.y+deltaY;row[i].moveTo(bounds,position);}
if(prepend){grid.unshift(row);}else{grid.push(row);}},shiftColumn:function(prepend){var deltaX=(prepend)?-this.tileSize.w:this.tileSize.w;var resolution=this.map.getResolution();var deltaLon=resolution*deltaX;for(var i=0,len=this.grid.length;i<len;i++){var row=this.grid[i];var modelTileIndex=(prepend)?0:(row.length-1);var modelTile=row[modelTileIndex];var bounds=modelTile.bounds.clone();var position=modelTile.position.clone();bounds.left=bounds.left+deltaLon;bounds.right=bounds.right+deltaLon;position.x=position.x+deltaX;var tile=prepend?this.grid[i].pop():this.grid[i].shift();tile.moveTo(bounds,position);if(prepend){row.unshift(tile);}else{row.push(tile);}}},removeExcessTiles:function(rows,columns){while(this.grid.length>rows){var row=this.grid.pop();for(var i=0,l=row.length;i<l;i++){var tile=row[i];this.removeTileMonitoringHooks(tile);tile.destroy();}}
while(this.grid[0].length>columns){for(var i=0,l=this.grid.length;i<l;i++){var row=this.grid[i];var tile=row.pop();this.removeTileMonitoringHooks(tile);tile.destroy();}}},onMapResize:function(){if(this.singleTile){this.clearGrid();this.setTileSize();}},getTileBounds:function(viewPortPx){var maxExtent=this.maxExtent;var resolution=this.getResolution();var tileMapWidth=resolution*this.tileSize.w;var tileMapHeight=resolution*this.tileSize.h;var mapPoint=this.getLonLatFromViewPortPx(viewPortPx);var tileLeft=maxExtent.left+(tileMapWidth*Math.floor((mapPoint.lon-
maxExtent.left)/tileMapWidth));var tileBottom=maxExtent.bottom+(tileMapHeight*Math.floor((mapPoint.lat-
maxExtent.bottom)/tileMapHeight));return new OpenLayers.Bounds(tileLeft,tileBottom,tileLeft+tileMapWidth,tileBottom+tileMapHeight);},CLASS_NAME:"OpenLayers.Layer.Grid"});OpenLayers.Layer.Text=OpenLayers.Class(OpenLayers.Layer.Markers,{location:null,features:null,formatOptions:null,selectedFeature:null,initialize:function(name,options){OpenLayers.Layer.Markers.prototype.initialize.apply(this,arguments);this.features=new Array();},destroy:function(){OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments);this.clearFeatures();this.features=null;},loadText:function(){if(!this.loaded){if(this.location!=null){var onFail=function(e){this.events.triggerEvent("loadend");};this.events.triggerEvent("loadstart");OpenLayers.Request.GET({url:this.location,success:this.parseData,failure:onFail,scope:this});this.loaded=true;}}},moveTo:function(bounds,zoomChanged,minor){OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments);if(this.visibility&&!this.loaded){this.loadText();}},parseData:function(ajaxRequest){var text=ajaxRequest.responseText;var options={};OpenLayers.Util.extend(options,this.formatOptions);if(this.map&&!this.projection.equals(this.map.getProjectionObject())){options.externalProjection=this.projection;options.internalProjection=this.map.getProjectionObject();}
var parser=new OpenLayers.Format.Text(options);features=parser.read(text);for(var i=0,len=features.length;i<len;i++){var data={};var feature=features[i];var location;var iconSize,iconOffset;location=new OpenLayers.LonLat(feature.geometry.x,feature.geometry.y);if(feature.style.graphicWidth&&feature.style.graphicHeight){iconSize=new OpenLayers.Size(feature.style.graphicWidth,feature.style.graphicHeight);}
if(feature.style.graphicXOffset!==undefined&&feature.style.graphicYOffset!==undefined){iconOffset=new OpenLayers.Pixel(feature.style.graphicXOffset,feature.style.graphicYOffset);}
if(feature.style.externalGraphic!=null){data.icon=new OpenLayers.Icon(feature.style.externalGraphic,iconSize,iconOffset);}else{data.icon=OpenLayers.Marker.defaultIcon();if(iconSize!=null){data.icon.setSize(iconSize);}}
if((feature.attributes.title!=null)&&(feature.attributes.description!=null)){data['popupContentHTML']='<h2>'+feature.attributes.title+'</h2>'+'<p>'+feature.attributes.description+'</p>';}
data['overflow']=feature.attributes.overflow||"auto";var markerFeature=new OpenLayers.Feature(this,location,data);this.features.push(markerFeature);var marker=markerFeature.createMarker();if((feature.attributes.title!=null)&&(feature.attributes.description!=null)){marker.events.register('click',markerFeature,this.markerClick);}
this.addMarker(marker);}
this.events.triggerEvent("loadend");},markerClick:function(evt){var sameMarkerClicked=(this==this.layer.selectedFeature);this.layer.selectedFeature=(!sameMarkerClicked)?this:null;for(var i=0,len=this.layer.map.popups.length;i<len;i++){this.layer.map.removePopup(this.layer.map.popups[i]);}
if(!sameMarkerClicked){this.layer.map.addPopup(this.createPopup());}
OpenLayers.Event.stop(evt);},clearFeatures:function(){if(this.features!=null){while(this.features.length>0){var feature=this.features[0];OpenLayers.Util.removeItem(this.features,feature);feature.destroy();}}},CLASS_NAME:"OpenLayers.Layer.Text"});OpenLayers.Style=OpenLayers.Class({name:null,title:null,description:null,layerName:null,isDefault:false,rules:null,context:null,defaultStyle:null,propertyStyles:null,initialize:function(style,options){this.rules=[];this.setDefaultStyle(style||OpenLayers.Feature.Vector.style["default"]);OpenLayers.Util.extend(this,options);},destroy:function(){for(var i=0,len=this.rules.length;i<len;i++){this.rules[i].destroy();this.rules[i]=null;}
this.rules=null;this.defaultStyle=null;},createSymbolizer:function(feature){var style=this.createLiterals(OpenLayers.Util.extend({},this.defaultStyle),feature);var rules=this.rules;var rule,context;var elseRules=[];var appliedRules=false;for(var i=0,len=rules.length;i<len;i++){rule=rules[i];var applies=rule.evaluate(feature);if(applies){if(rule instanceof OpenLayers.Rule&&rule.elseFilter){elseRules.push(rule);}else{appliedRules=true;this.applySymbolizer(rule,style,feature);}}}
if(appliedRules==false&&elseRules.length>0){appliedRules=true;for(var i=0,len=elseRules.length;i<len;i++){this.applySymbolizer(elseRules[i],style,feature);}}
if(rules.length>0&&appliedRules==false){style.display="none";}else{style.display="";}
return style;},applySymbolizer:function(rule,style,feature){var symbolizerPrefix=feature.geometry?this.getSymbolizerPrefix(feature.geometry):OpenLayers.Style.SYMBOLIZER_PREFIXES[0];var symbolizer=rule.symbolizer[symbolizerPrefix]||rule.symbolizer;return this.createLiterals(OpenLayers.Util.extend(style,symbolizer),feature);},createLiterals:function(style,feature){var context=this.context||feature.attributes||feature.data;for(var i in this.propertyStyles){style[i]=OpenLayers.Style.createLiteral(style[i],context,feature);}
return style;},findPropertyStyles:function(){var propertyStyles={};var style=this.defaultStyle;this.addPropertyStyles(propertyStyles,style);var rules=this.rules;var symbolizer,value;for(var i=0,len=rules.length;i<len;i++){var symbolizer=rules[i].symbolizer;for(var key in symbolizer){value=symbolizer[key];if(typeof value=="object"){this.addPropertyStyles(propertyStyles,value);}else{this.addPropertyStyles(propertyStyles,symbolizer);break;}}}
return propertyStyles;},addPropertyStyles:function(propertyStyles,symbolizer){var property;for(var key in symbolizer){property=symbolizer[key];if(typeof property=="string"&&property.match(/\$\{\w+\}/)){propertyStyles[key]=true;}}
return propertyStyles;},addRules:function(rules){this.rules=this.rules.concat(rules);this.propertyStyles=this.findPropertyStyles();},setDefaultStyle:function(style){this.defaultStyle=style;this.propertyStyles=this.findPropertyStyles();},getSymbolizerPrefix:function(geometry){var prefixes=OpenLayers.Style.SYMBOLIZER_PREFIXES;for(var i=0,len=prefixes.length;i<len;i++){if(geometry.CLASS_NAME.indexOf(prefixes[i])!=-1){return prefixes[i];}}},CLASS_NAME:"OpenLayers.Style"});OpenLayers.Style.createLiteral=function(value,context,feature){if(typeof value=="string"&&value.indexOf("${")!=-1){value=OpenLayers.String.format(value,context,[feature]);value=(isNaN(value)||!value)?value:parseFloat(value);}
return value;};OpenLayers.Style.SYMBOLIZER_PREFIXES=['Point','Line','Polygon','Text'];OpenLayers.Control.Navigation=OpenLayers.Class(OpenLayers.Control,{dragPan:null,dragPanOptions:null,zoomBox:null,zoomWheelEnabled:true,handleRightClicks:false,initialize:function(options){this.handlers={};OpenLayers.Control.prototype.initialize.apply(this,arguments);},destroy:function(){this.deactivate();if(this.dragPan){this.dragPan.destroy();}
this.dragPan=null;if(this.zoomBox){this.zoomBox.destroy();}
this.zoomBox=null;OpenLayers.Control.prototype.destroy.apply(this,arguments);},activate:function(){this.dragPan.activate();if(this.zoomWheelEnabled){this.handlers.wheel.activate();}
this.handlers.click.activate();this.zoomBox.activate();return OpenLayers.Control.prototype.activate.apply(this,arguments);},deactivate:function(){this.zoomBox.deactivate();this.dragPan.deactivate();this.handlers.click.deactivate();this.handlers.wheel.deactivate();return OpenLayers.Control.prototype.deactivate.apply(this,arguments);},draw:function(){if(this.handleRightClicks){this.map.div.oncontextmenu=function(){return false;};}
var clickCallbacks={'dblclick':this.defaultDblClick,'dblrightclick':this.defaultDblRightClick};var clickOptions={'double':true,'stopDouble':true};this.handlers.click=new OpenLayers.Handler.Click(this,clickCallbacks,clickOptions);this.dragPan=new OpenLayers.Control.DragPan(OpenLayers.Util.extend({map:this.map},this.dragPanOptions));this.zoomBox=new OpenLayers.Control.ZoomBox({map:this.map,keyMask:OpenLayers.Handler.MOD_SHIFT});this.dragPan.draw();this.zoomBox.draw();this.handlers.wheel=new OpenLayers.Handler.MouseWheel(this,{"up":this.wheelUp,"down":this.wheelDown});this.activate();},defaultDblClick:function(evt){var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom+1);},defaultDblRightClick:function(evt){var newCenter=this.map.getLonLatFromViewPortPx(evt.xy);this.map.setCenter(newCenter,this.map.zoom-1);},wheelChange:function(evt,deltaZ){var newZoom=this.map.getZoom()+deltaZ;if(!this.map.isValidZoomLevel(newZoom)){return;}
var size=this.map.getSize();var deltaX=size.w/2-evt.xy.x;var deltaY=evt.xy.y-size.h/2;var newRes=this.map.baseLayer.getResolutionForZoom(newZoom);var zoomPoint=this.map.getLonLatFromPixel(evt.xy);var newCenter=new OpenLayers.LonLat(zoomPoint.lon+deltaX*newRes,zoomPoint.lat+deltaY*newRes);this.map.setCenter(newCenter,newZoom);},wheelUp:function(evt){this.wheelChange(evt,1);},wheelDown:function(evt){this.wheelChange(evt,-1);},disableZoomWheel:function(){this.zoomWheelEnabled=false;this.handlers.wheel.deactivate();},enableZoomWheel:function(){this.zoomWheelEnabled=true;if(this.active){this.handlers.wheel.activate();}},CLASS_NAME:"OpenLayers.Control.Navigation"});OpenLayers.Filter=OpenLayers.Class({initialize:function(options){OpenLayers.Util.extend(this,options);},destroy:function(){},evaluate:function(context){return true;},CLASS_NAME:"OpenLayers.Filter"});OpenLayers.Geometry=OpenLayers.Class({id:null,parent:null,bounds:null,initialize:function(){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");},destroy:function(){this.id=null;this.bounds=null;},clone:function(){return new OpenLayers.Geometry();},setBounds:function(bounds){if(bounds){this.bounds=bounds.clone();}},clearBounds:function(){this.bounds=null;if(this.parent){this.parent.clearBounds();}},extendBounds:function(newBounds){var bounds=this.getBounds();if(!bounds){this.setBounds(newBounds);}else{this.bounds.extend(newBounds);}},getBounds:function(){if(this.bounds==null){this.calculateBounds();}
return this.bounds;},calculateBounds:function(){},atPoint:function(lonlat,toleranceLon,toleranceLat){var atPoint=false;var bounds=this.getBounds();if((bounds!=null)&&(lonlat!=null)){var dX=(toleranceLon!=null)?toleranceLon:0;var dY=(toleranceLat!=null)?toleranceLat:0;var toleranceBounds=new OpenLayers.Bounds(this.bounds.left-dX,this.bounds.bottom-dY,this.bounds.right+dX,this.bounds.top+dY);atPoint=toleranceBounds.containsLonLat(lonlat);}
return atPoint;},getLength:function(){return 0.0;},getArea:function(){return 0.0;},toString:function(){return OpenLayers.Format.WKT.prototype.write(new OpenLayers.Feature.Vector(this));},CLASS_NAME:"OpenLayers.Geometry"});OpenLayers.Geometry.segmentsIntersect=function(seg1,seg2,point){var intersection=false;var x11_21=seg1.x1-seg2.x1;var y11_21=seg1.y1-seg2.y1;var x12_11=seg1.x2-seg1.x1;var y12_11=seg1.y2-seg1.y1;var y22_21=seg2.y2-seg2.y1;var x22_21=seg2.x2-seg2.x1;var d=(y22_21*x12_11)-(x22_21*y12_11);var n1=(x22_21*y11_21)-(y22_21*x11_21);var n2=(x12_11*y11_21)-(y12_11*x11_21);if(d==0){if(n1==0&&n2==0){intersection=true;}}else{var along1=n1/d;var along2=n2/d;if(along1>=0&&along1<=1&&along2>=0&&along2<=1){if(!point){intersection=true;}else{var x=seg1.x1+(along1*x12_11);var y=seg1.y1+(along1*y12_11);intersection=new OpenLayers.Geometry.Point(x,y);}}}
return intersection;};OpenLayers.Layer.TMS=OpenLayers.Class(OpenLayers.Layer.Grid,{serviceVersion:"1.0.0",isBaseLayer:true,tileOrigin:null,initialize:function(name,url,options){var newArguments=[];newArguments.push(name,url,{},options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);},destroy:function(){OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.TMS(this.name,this.url,this.options);}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){bounds=this.adjustBounds(bounds);var res=this.map.getResolution();var x=Math.round((bounds.left-this.tileOrigin.lon)/(res*this.tileSize.w));var y=Math.round((bounds.bottom-this.tileOrigin.lat)/(res*this.tileSize.h));var z=this.map.getZoom();var path=this.serviceVersion+"/"+this.layername+"/"+z+"/"+x+"/"+y+"."+this.type;var url=this.url;if(url instanceof Array){url=this.selectUrl(path,url);}
return url+path;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},setMap:function(map){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);if(!this.tileOrigin){this.tileOrigin=new OpenLayers.LonLat(this.map.maxExtent.left,this.map.maxExtent.bottom);}},CLASS_NAME:"OpenLayers.Layer.TMS"});OpenLayers.Layer.WMS=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{service:"WMS",version:"1.1.1",request:"GetMap",styles:"",exceptions:"application/vnd.ogc.se_inimage",format:"image/jpeg"},reproject:false,isBaseLayer:true,encodeBBOX:false,initialize:function(name,url,params,options){var newArguments=[];params=OpenLayers.Util.upperCaseObject(params);newArguments.push(name,url,params,options);OpenLayers.Layer.Grid.prototype.initialize.apply(this,newArguments);OpenLayers.Util.applyDefaults(this.params,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));if(this.params.TRANSPARENT&&this.params.TRANSPARENT.toString().toLowerCase()=="true"){if((options==null)||(!options.isBaseLayer)){this.isBaseLayer=false;}
if(this.params.FORMAT=="image/jpeg"){this.params.FORMAT=OpenLayers.Util.alphaHack()?"image/gif":"image/png";}}},destroy:function(){OpenLayers.Layer.Grid.prototype.destroy.apply(this,arguments);},clone:function(obj){if(obj==null){obj=new OpenLayers.Layer.WMS(this.name,this.url,this.params,this.options);}
obj=OpenLayers.Layer.Grid.prototype.clone.apply(this,[obj]);return obj;},getURL:function(bounds){bounds=this.adjustBounds(bounds);var imageSize=this.getImageSize();var newParams={'BBOX':this.encodeBBOX?bounds.toBBOX():bounds.toArray(),'WIDTH':imageSize.w,'HEIGHT':imageSize.h};var requestString=this.getFullRequestString(newParams);return requestString;},addTile:function(bounds,position){return new OpenLayers.Tile.Image(this,position,bounds,null,this.tileSize);},mergeNewParams:function(newParams){var upperParams=OpenLayers.Util.upperCaseObject(newParams);var newArguments=[upperParams];return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,newArguments);},getFullRequestString:function(newParams,altUrl){var projectionCode=this.map.getProjection();this.params.SRS=(projectionCode=="none")?null:projectionCode;return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this,arguments);},CLASS_NAME:"OpenLayers.Layer.WMS"});OpenLayers.Protocol.SQL.Gears=OpenLayers.Class(OpenLayers.Protocol.SQL,{FID_PREFIX:'__gears_fid__',NULL_GEOMETRY:'__gears_null_geometry__',NULL_FEATURE_STATE:'__gears_null_feature_state__',jsonParser:null,wktParser:null,fidRegExp:null,saveFeatureState:true,typeOfFid:"string",db:null,initialize:function(options){if(!this.supported()){return;}
OpenLayers.Protocol.SQL.prototype.initialize.apply(this,[options]);this.jsonParser=new OpenLayers.Format.JSON();this.wktParser=new OpenLayers.Format.WKT();this.fidRegExp=new RegExp('^'+this.FID_PREFIX);this.initializeDatabase();},initializeDatabase:function(){this.db=google.gears.factory.create('beta.database');this.db.open(this.databaseName);this.db.execute("CREATE TABLE IF NOT EXISTS "+this.tableName+" (fid TEXT UNIQUE, geometry TEXT, properties TEXT,"+"  state TEXT)");},destroy:function(){this.db.close();this.db=null;this.jsonParser=null;this.wktParser=null;OpenLayers.Protocol.SQL.prototype.destroy.apply(this);},supported:function(){return!!(window.google&&google.gears);},read:function(options){options=OpenLayers.Util.applyDefaults(options,this.options);var feature,features=[];var rs=this.db.execute("SELECT * FROM "+this.tableName);while(rs.isValidRow()){feature=this.unfreezeFeature(rs);if(this.evaluateFilter(feature,options.filter)){if(!options.noFeatureStateReset){feature.state=null;}
features.push(feature);}
rs.next();}
rs.close();var resp=new OpenLayers.Protocol.Response({code:OpenLayers.Protocol.Response.SUCCESS,requestType:"read",features:features});if(options&&options.callback){options.callback.call(options.scope,resp);}
return resp;},unfreezeFeature:function(row){var feature;var wkt=row.fieldByName('geometry');if(wkt==this.NULL_GEOMETRY){feature=new OpenLayers.Feature.Vector();}else{feature=this.wktParser.read(wkt);}
feature.attributes=this.jsonParser.read(row.fieldByName('properties'));feature.fid=this.extractFidFromField(row.fieldByName('fid'));var state=row.fieldByName('state');if(state==this.NULL_FEATURE_STATE){state=null;}
feature.state=state;return feature;},extractFidFromField:function(field){if(!field.match(this.fidRegExp)&&this.typeOfFid=="number"){field=parseFloat(field);}
return field;},create:function(features,options){options=OpenLayers.Util.applyDefaults(options,this.options);var resp=this.createOrUpdate(features);resp.requestType="create";if(options&&options.callback){options.callback.call(options.scope,resp);}
return resp;},update:function(features,options){options=OpenLayers.Util.applyDefaults(options,this.options);var resp=this.createOrUpdate(features);resp.requestType="update";if(options&&options.callback){options.callback.call(options.scope,resp);}
return resp;},createOrUpdate:function(features){if(!(features instanceof Array)){features=[features];}
var i,len=features.length,feature;var insertedFeatures=new Array(len);for(i=0;i<len;i++){feature=features[i];var params=this.freezeFeature(feature);this.db.execute("REPLACE INTO "+this.tableName+" (fid, geometry, properties, state)"+" VALUES (?, ?, ?, ?)",params);var clone=feature.clone();clone.fid=this.extractFidFromField(params[0]);insertedFeatures[i]=clone;}
return new OpenLayers.Protocol.Response({code:OpenLayers.Protocol.Response.SUCCESS,features:insertedFeatures,reqFeatures:features});},freezeFeature:function(feature){feature.fid=feature.fid!=null?""+feature.fid:OpenLayers.Util.createUniqueID(this.FID_PREFIX);var geometry=feature.geometry!=null?feature.geometry.toString():this.NULL_GEOMETRY;var properties=this.jsonParser.write(feature.attributes);var state=this.getFeatureStateForFreeze(feature);return[feature.fid,geometry,properties,state];},getFeatureStateForFreeze:function(feature){var state;if(!this.saveFeatureState){state=this.NULL_FEATURE_STATE;}else if(this.createdOffline(feature)){state=OpenLayers.State.INSERT;}else{state=feature.state;}
return state;},"delete":function(features,options){if(!(features instanceof Array)){features=[features];}
options=OpenLayers.Util.applyDefaults(options,this.options);var i,len,feature;for(i=0,len=features.length;i<len;i++){feature=features[i];if(this.saveFeatureState&&!this.createdOffline(feature)){var toDelete=feature.clone();toDelete.fid=feature.fid;if(toDelete.geometry){toDelete.geometry.destroy();toDelete.geometry=null;}
toDelete.state=feature.state;this.createOrUpdate(toDelete);}else{this.db.execute("DELETE FROM "+this.tableName+" WHERE fid = ?",[feature.fid]);}}
var resp=new OpenLayers.Protocol.Response({code:OpenLayers.Protocol.Response.SUCCESS,requestType:"delete",reqFeatures:features});if(options&&options.callback){options.callback.call(options.scope,resp);}
return resp;},createdOffline:function(feature){return(typeof feature.fid=="string"&&!!(feature.fid.match(this.fidRegExp)));},commit:function(features,options){var opt,resp=[],nRequests=0,nResponses=0;function callback(resp){if(++nResponses<nRequests){resp.last=false;}
this.callUserCallback(options,resp);}
var feature,toCreate=[],toUpdate=[],toDelete=[];for(var i=features.length-1;i>=0;i--){feature=features[i];switch(feature.state){case OpenLayers.State.INSERT:toCreate.push(feature);break;case OpenLayers.State.UPDATE:toUpdate.push(feature);break;case OpenLayers.State.DELETE:toDelete.push(feature);break;}}
if(toCreate.length>0){nRequests++;opt=OpenLayers.Util.applyDefaults({"callback":callback,"scope":this},options.create);resp.push(this.create(toCreate,opt));}
if(toUpdate.length>0){nRequests++;opt=OpenLayers.Util.applyDefaults({"callback":callback,"scope":this},options.update);resp.push(this.update(toUpdate,opt));}
if(toDelete.length>0){nRequests++;opt=OpenLayers.Util.applyDefaults({"callback":callback,"scope":this},options["delete"]);resp.push(this["delete"](toDelete,opt));}
return resp;},clear:function(){this.db.execute("DELETE FROM "+this.tableName);},callUserCallback:function(options,resp){var opt=options[resp.requestType];if(opt&&opt.callback){opt.callback.call(opt.scope,resp);}
if(resp.last&&options.callback){options.callback.call(options.scope);}},CLASS_NAME:"OpenLayers.Protocol.SQL.Gears"});OpenLayers.Control.NavToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(options){OpenLayers.Control.Panel.prototype.initialize.apply(this,[options]);this.addControls([new OpenLayers.Control.Navigation(),new OpenLayers.Control.ZoomBox()]);},draw:function(){var div=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);this.activateControl(this.controls[0]);return div;},CLASS_NAME:"OpenLayers.Control.NavToolbar"});OpenLayers.Filter.Spatial=OpenLayers.Class(OpenLayers.Filter,{type:null,property:null,value:null,distance:null,distanceUnits:null,initialize:function(options){OpenLayers.Filter.prototype.initialize.apply(this,[options]);},evaluate:function(feature){var intersect=false;switch(this.type){case OpenLayers.Filter.Spatial.BBOX:case OpenLayers.Filter.Spatial.INTERSECTS:if(feature.geometry){var geom=this.value;if(this.value.CLASS_NAME=="OpenLayers.Bounds"){geom=this.value.toGeometry();}
if(feature.geometry.intersects(geom)){intersect=true;}}
break;default:OpenLayers.Console.error(OpenLayers.i18n("filterEvaluateNotImplemented"));break;}
return intersect;},CLASS_NAME:"OpenLayers.Filter.Spatial"});OpenLayers.Filter.Spatial.BBOX="BBOX";OpenLayers.Filter.Spatial.INTERSECTS="INTERSECTS";OpenLayers.Filter.Spatial.DWITHIN="DWITHIN";OpenLayers.Geometry.Collection=OpenLayers.Class(OpenLayers.Geometry,{components:null,componentTypes:null,initialize:function(components){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.components=[];if(components!=null){this.addComponents(components);}},destroy:function(){this.components.length=0;this.components=null;},clone:function(){var geometry=eval("new "+this.CLASS_NAME+"()");for(var i=0,len=this.components.length;i<len;i++){geometry.addComponent(this.components[i].clone());}
OpenLayers.Util.applyDefaults(geometry,this);return geometry;},getComponentsString:function(){var strings=[];for(var i=0,len=this.components.length;i<len;i++){strings.push(this.components[i].toShortString());}
return strings.join(",");},calculateBounds:function(){this.bounds=null;if(this.components&&this.components.length>0){this.setBounds(this.components[0].getBounds());for(var i=1,len=this.components.length;i<len;i++){this.extendBounds(this.components[i].getBounds());}}},addComponents:function(components){if(!(components instanceof Array)){components=[components];}
for(var i=0,len=components.length;i<len;i++){this.addComponent(components[i]);}},addComponent:function(component,index){var added=false;if(component){if(this.componentTypes==null||(OpenLayers.Util.indexOf(this.componentTypes,component.CLASS_NAME)>-1)){if(index!=null&&(index<this.components.length)){var components1=this.components.slice(0,index);var components2=this.components.slice(index,this.components.length);components1.push(component);this.components=components1.concat(components2);}else{this.components.push(component);}
component.parent=this;this.clearBounds();added=true;}}
return added;},removeComponents:function(components){if(!(components instanceof Array)){components=[components];}
for(var i=components.length-1;i>=0;--i){this.removeComponent(components[i]);}},removeComponent:function(component){OpenLayers.Util.removeItem(this.components,component);this.clearBounds();},getLength:function(){var length=0.0;for(var i=0,len=this.components.length;i<len;i++){length+=this.components[i].getLength();}
return length;},getArea:function(){var area=0.0;for(var i=0,len=this.components.length;i<len;i++){area+=this.components[i].getArea();}
return area;},move:function(x,y){for(var i=0,len=this.components.length;i<len;i++){this.components[i].move(x,y);}},rotate:function(angle,origin){for(var i=0,len=this.components.length;i<len;++i){this.components[i].rotate(angle,origin);}},resize:function(scale,origin,ratio){for(var i=0;i<this.components.length;++i){this.components[i].resize(scale,origin,ratio);}},equals:function(geometry){var equivalent=true;if(!geometry||!geometry.CLASS_NAME||(this.CLASS_NAME!=geometry.CLASS_NAME)){equivalent=false;}else if(!(geometry.components instanceof Array)||(geometry.components.length!=this.components.length)){equivalent=false;}else{for(var i=0,len=this.components.length;i<len;++i){if(!this.components[i].equals(geometry.components[i])){equivalent=false;break;}}}
return equivalent;},transform:function(source,dest){if(source&&dest){for(var i=0,len=this.components.length;i<len;i++){var component=this.components[i];component.transform(source,dest);}
this.bounds=null;}
return this;},intersects:function(geometry){var intersect=false;for(var i=0,len=this.components.length;i<len;++i){intersect=geometry.intersects(this.components[i]);if(intersect){break;}}
return intersect;},CLASS_NAME:"OpenLayers.Geometry.Collection"});OpenLayers.Geometry.Point=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,initialize:function(x,y){OpenLayers.Geometry.prototype.initialize.apply(this,arguments);this.x=parseFloat(x);this.y=parseFloat(y);},clone:function(obj){if(obj==null){obj=new OpenLayers.Geometry.Point(this.x,this.y);}
OpenLayers.Util.applyDefaults(obj,this);return obj;},calculateBounds:function(){this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x,this.y);},distanceTo:function(point){var distance=0.0;if((this.x!=null)&&(this.y!=null)&&(point!=null)&&(point.x!=null)&&(point.y!=null)){var dx2=Math.pow(this.x-point.x,2);var dy2=Math.pow(this.y-point.y,2);distance=Math.sqrt(dx2+dy2);}
return distance;},equals:function(geom){var equals=false;if(geom!=null){equals=((this.x==geom.x&&this.y==geom.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(geom.x)&&isNaN(geom.y)));}
return equals;},toShortString:function(){return(this.x+", "+this.y);},move:function(x,y){this.x=this.x+x;this.y=this.y+y;this.clearBounds();},rotate:function(angle,origin){angle*=Math.PI/180;var radius=this.distanceTo(origin);var theta=angle+Math.atan2(this.y-origin.y,this.x-origin.x);this.x=origin.x+(radius*Math.cos(theta));this.y=origin.y+(radius*Math.sin(theta));this.clearBounds();},resize:function(scale,origin,ratio){ratio=(ratio==undefined)?1:ratio;this.x=origin.x+(scale*ratio*(this.x-origin.x));this.y=origin.y+(scale*(this.y-origin.y));this.clearBounds();},intersects:function(geometry){var intersect=false;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.equals(geometry);}else{intersect=geometry.intersects(this);}
return intersect;},transform:function(source,dest){if((source&&dest)){OpenLayers.Projection.transform(this,source,dest);this.bounds=null;}
return this;},CLASS_NAME:"OpenLayers.Geometry.Point"});OpenLayers.Geometry.MultiLineString=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LineString"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Geometry.MultiLineString"});OpenLayers.Geometry.MultiPoint=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},addPoint:function(point,index){this.addComponent(point,index);},removePoint:function(point){this.removeComponent(point);},CLASS_NAME:"OpenLayers.Geometry.MultiPoint"});OpenLayers.Geometry.MultiPolygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.Polygon"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},CLASS_NAME:"OpenLayers.Geometry.MultiPolygon"});OpenLayers.Geometry.Polygon=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LinearRing"],initialize:function(components){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments);},getArea:function(){var area=0.0;if(this.components&&(this.components.length>0)){area+=Math.abs(this.components[0].getArea());for(var i=1,len=this.components.length;i<len;i++){area-=Math.abs(this.components[i].getArea());}}
return area;},containsPoint:function(point){var numRings=this.components.length;var contained=false;if(numRings>0){contained=this.components[0].containsPoint(point);if(contained!==1){if(contained&&numRings>1){var hole;for(var i=1;i<numRings;++i){hole=this.components[i].containsPoint(point);if(hole){if(hole===1){contained=1;}else{contained=false;}
break;}}}}}
return contained;},intersects:function(geometry){var intersect=false;var i,len;if(geometry.CLASS_NAME=="OpenLayers.Geometry.Point"){intersect=this.containsPoint(geometry);}else if(geometry.CLASS_NAME=="OpenLayers.Geometry.LineString"||geometry.CLASS_NAME=="OpenLayers.Geometry.LinearRing"){for(i=0,len=this.components.length;i<len;++i){intersect=geometry.intersects(this.components[i]);if(intersect){break;}}
if(!intersect){for(i=0,len=geometry.components.length;i<len;++i){intersect=this.containsPoint(geometry.components[i]);if(intersect){break;}}}}else{for(i=0,len=geometry.components.length;i<len;++i){intersect=this.intersects(geometry.components[i]);if(intersect){break;}}}
if(!intersect&&geometry.CLASS_NAME=="OpenLayers.Geometry.Polygon"){var ring=this.components[0];for(i=0,len=ring.components.length;i<len;++i){intersect=geometry.containsPoint(ring.components[i]);if(intersect){break;}}}
return intersect;},CLASS_NAME:"OpenLayers.Geometry.Polygon"});OpenLayers.Geometry.Polygon.createRegularPolygon=function(origin,radius,sides,rotation){var angle=Math.PI*((1/sides)-(1/2));if(rotation){angle+=(rotation/180)*Math.PI;}
var rotatedAngle,x,y;var points=[];for(var i=0;i<sides;++i){rotatedAngle=angle+(i*2*Math.PI/sides);x=origin.x+(radius*Math.cos(rotatedAngle));y=origin.y+(radius*Math.sin(rotatedAngle));points.push(new OpenLayers.Geometry.Point(x,y));}
var ring=new OpenLayers.Geometry.LinearRing(points);return new OpenLayers.Geometry.Polygon([ring]);};OpenLayers.Strategy.BBOX=OpenLayers.Class(OpenLayers.Strategy,{bounds:null,ratio:2,response:null,initialize:function(options){OpenLayers.Strategy.prototype.initialize.apply(this,[options]);},activate:function(){var activated=OpenLayers.Strategy.prototype.activate.call(this);if(activated){this.layer.events.on({"moveend":this.update,scope:this});this.layer.events.on({"refresh":this.update,scope:this});}
return activated;},deactivate:function(){var deactivated=OpenLayers.Strategy.prototype.deactivate.call(this);if(deactivated){this.layer.events.un({"moveend":this.update,scope:this});this.layer.events.un({"refresh":this.update,scope:this});}
return deactivated;},update:function(options){var mapBounds=this.layer.map.getExtent();if((options&&options.force)||this.invalidBounds(mapBounds)){this.calculateBounds(mapBounds);this.triggerRead();}},invalidBounds:function(mapBounds){if(!mapBounds){mapBounds=this.layer.map.getExtent();}
return!this.bounds||!this.bounds.containsBounds(mapBounds);},calculateBounds:function(mapBounds){if(!mapBounds){mapBounds=this.layer.map.getExtent();}
var center=mapBounds.getCenterLonLat();var dataWidth=mapBounds.getWidth()*this.ratio;var dataHeight=mapBounds.getHeight()*this.ratio;this.bounds=new OpenLayers.Bounds(center.lon-(dataWidth/2),center.lat-(dataHeight/2),center.lon+(dataWidth/2),center.lat+(dataHeight/2));},triggerRead:function(){var filter=this.createFilter();if(this.response&&this.response.priv&&typeof this.response.priv.abort=="function"){this.response.priv.abort();}
this.response=this.layer.protocol.read({filter:filter,callback:this.merge,scope:this});},createFilter:function(){var filter=new OpenLayers.Filter.Spatial({type:OpenLayers.Filter.Spatial.BBOX,value:this.bounds,projection:this.layer.projection});if(this.layer.filter){filter=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.AND,filters:[this.layer.filter,filter]});}
return filter;},merge:function(resp){this.layer.destroyFeatures();var features=resp.features;if(features&&features.length>0){this.layer.addFeatures(features);}},CLASS_NAME:"OpenLayers.Strategy.BBOX"});OpenLayers.Geometry.Curve=OpenLayers.Class(OpenLayers.Geometry.MultiPoint,{componentTypes:["OpenLayers.Geometry.Point"],initialize:function(points){OpenLayers.Geometry.MultiPoint.prototype.initialize.apply(this,arguments);},getLength:function(){var length=0.0;if(this.components&&(this.components.length>1)){for(var i=1,len=this.components.length;i<len;i++){length+=this.components[i-1].distanceTo(this.components[i]);}}
return length;},CLASS_NAME:"OpenLayers.Geometry.Curve"});OpenLayers.Geometry.LineString=OpenLayers.Class(OpenLayers.Geometry.Curve,{initialize:function(points){OpenLayers.Geometry.Curve.prototype.initialize.apply(this,arguments);},removeComponent:function(point){if(this.components&&(this.components.length>2)){OpenLayers.Geometry.Collection.prototype.removeComponent.apply(this,arguments);}},intersects:function(geometry){var intersect=false;var type=geometry.CLASS_NAME;if(type=="OpenLayers.Geometry.LineString"||type=="OpenLayers.Geometry.LinearRing"||type=="OpenLayers.Geometry.Point"){var segs1=this.getSortedSegments();var segs2;if(type=="OpenLayers.Geometry.Point"){segs2=[{x1:geometry.x,y1:geometry.y,x2:geometry.x,y2:geometry.y}];}else{segs2=geometry.getSortedSegments();}
var seg1,seg1x1,seg1x2,seg1y1,seg1y2,seg2,seg2y1,seg2y2;outer:for(var i=0,len=segs1.length;i<len;++i){seg1=segs1[i];seg1x1=seg1.x1;seg1x2=seg1.x2;seg1y1=seg1.y1;seg1y2=seg1.y2;inner:for(var j=0,jlen=segs2.length;j<jlen;++j){seg2=segs2[j];if(seg2.x1>seg1x2){break;}
if(seg2.x2<seg1x1){continue;}
seg2y1=seg2.y1;seg2y2=seg2.y2;if(Math.min(seg2y1,seg2y2)>Math.max(seg1y1,seg1y2)){continue;}
if(Math.max(seg2y1,seg2y2)<Math.min(seg1y1,seg1y2)){continue;}
if(OpenLayers.Geometry.segmentsIntersect(seg1,seg2)){intersect=true;break outer;}}}}else{intersect=geometry.intersects(this);}
return intersect;},getSortedSegments:function(){var numSeg=this.components.length-1;var segments=new Array(numSeg);for(var i=0;i<numSeg;++i){point1=this.components[i];point2=this.components[i+1];if(point1.x<point2.x){segments[i]={x1:point1.x,y1:point1.y,x2:point2.x,y2:point2.y};}else{segments[i]={x1:point2.x,y1:point2.y,x2:point1.x,y2:point1.y};}}
function byX1(seg1,seg2){return seg1.x1-seg2.x1;}
return segments.sort(byX1);},CLASS_NAME:"OpenLayers.Geometry.LineString"});OpenLayers.Format.GML=OpenLayers.Class(OpenLayers.Format.XML,{featureNS:"http://mapserver.gis.umn.edu/mapserver",featurePrefix:"feature",featureName:"featureMember",layerName:"features",geometryName:"geometry",collectionName:"FeatureCollection",gmlns:"http://www.opengis.net/gml",extractAttributes:true,xy:true,initialize:function(options){this.regExes={trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)};OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);},read:function(data){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
var featureNodes=this.getElementsByTagNameNS(data.documentElement,this.gmlns,this.featureName);var features=[];for(var i=0;i<featureNodes.length;i++){var feature=this.parseFeature(featureNodes[i]);if(feature){features.push(feature);}}
return features;},parseFeature:function(node){var order=["MultiPolygon","Polygon","MultiLineString","LineString","MultiPoint","Point","Envelope","Box"];var type,nodeList,geometry,parser;for(var i=0;i<order.length;++i){type=order[i];nodeList=this.getElementsByTagNameNS(node,this.gmlns,type);if(nodeList.length>0){var parser=this.parseGeometry[type.toLowerCase()];if(parser){geometry=parser.apply(this,[nodeList[0]]);if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}}else{OpenLayers.Console.error(OpenLayers.i18n("unsupportedGeometryType",{'geomType':type}));}
break;}}
var attributes;if(this.extractAttributes){attributes=this.parseAttributes(node);}
var feature=new OpenLayers.Feature.Vector(geometry,attributes);feature.gml={featureType:node.firstChild.nodeName.split(":")[1],featureNS:node.firstChild.namespaceURI,featureNSPrefix:node.firstChild.prefix};var childNode=node.firstChild;var fid;while(childNode){if(childNode.nodeType==1){fid=childNode.getAttribute("fid")||childNode.getAttribute("id");if(fid){break;}}
childNode=childNode.nextSibling;}
feature.fid=fid;return feature;},parseGeometry:{point:function(node){var nodeList,coordString;var coords=[];var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"pos");if(nodeList.length>0){coordString=nodeList[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.trimSpace,"");coords=coordString.split(this.regExes.splitSpace);}
if(coords.length==0){nodeList=this.getElementsByTagNameNS(node,this.gmlns,"coordinates");if(nodeList.length>0){coordString=nodeList[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.removeSpace,"");coords=coordString.split(",");}}
if(coords.length==0){nodeList=this.getElementsByTagNameNS(node,this.gmlns,"coord");if(nodeList.length>0){var xList=this.getElementsByTagNameNS(nodeList[0],this.gmlns,"X");var yList=this.getElementsByTagNameNS(nodeList[0],this.gmlns,"Y");if(xList.length>0&&yList.length>0){coords=[xList[0].firstChild.nodeValue,yList[0].firstChild.nodeValue];}}}
if(coords.length==2){coords[2]=null;}
if(this.xy){return new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}
else{return new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]);}},multipoint:function(node){var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"Point");var components=[];if(nodeList.length>0){var point;for(var i=0;i<nodeList.length;++i){point=this.parseGeometry.point.apply(this,[nodeList[i]]);if(point){components.push(point);}}}
return new OpenLayers.Geometry.MultiPoint(components);},linestring:function(node,ring){var nodeList,coordString;var coords=[];var points=[];nodeList=this.getElementsByTagNameNS(node,this.gmlns,"posList");if(nodeList.length>0){coordString=this.concatChildValues(nodeList[0]);coordString=coordString.replace(this.regExes.trimSpace,"");coords=coordString.split(this.regExes.splitSpace);var dim=parseInt(nodeList[0].getAttribute("dimension"));var j,x,y,z;for(var i=0;i<coords.length/dim;++i){j=i*dim;x=coords[j];y=coords[j+1];z=(dim==2)?null:coords[j+2];if(this.xy){points.push(new OpenLayers.Geometry.Point(x,y,z));}else{points.push(new OpenLayers.Geometry.Point(y,x,z));}}}
if(coords.length==0){nodeList=this.getElementsByTagNameNS(node,this.gmlns,"coordinates");if(nodeList.length>0){coordString=this.concatChildValues(nodeList[0]);coordString=coordString.replace(this.regExes.trimSpace,"");coordString=coordString.replace(this.regExes.trimComma,",");var pointList=coordString.split(this.regExes.splitSpace);for(var i=0;i<pointList.length;++i){coords=pointList[i].split(",");if(coords.length==2){coords[2]=null;}
if(this.xy){points.push(new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]));}else{points.push(new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]));}}}}
var line=null;if(points.length!=0){if(ring){line=new OpenLayers.Geometry.LinearRing(points);}else{line=new OpenLayers.Geometry.LineString(points);}}
return line;},multilinestring:function(node){var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"LineString");var components=[];if(nodeList.length>0){var line;for(var i=0;i<nodeList.length;++i){line=this.parseGeometry.linestring.apply(this,[nodeList[i]]);if(line){components.push(line);}}}
return new OpenLayers.Geometry.MultiLineString(components);},polygon:function(node){var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"LinearRing");var components=[];if(nodeList.length>0){var ring;for(var i=0;i<nodeList.length;++i){ring=this.parseGeometry.linestring.apply(this,[nodeList[i],true]);if(ring){components.push(ring);}}}
return new OpenLayers.Geometry.Polygon(components);},multipolygon:function(node){var nodeList=this.getElementsByTagNameNS(node,this.gmlns,"Polygon");var components=[];if(nodeList.length>0){var polygon;for(var i=0;i<nodeList.length;++i){polygon=this.parseGeometry.polygon.apply(this,[nodeList[i]]);if(polygon){components.push(polygon);}}}
return new OpenLayers.Geometry.MultiPolygon(components);},envelope:function(node){var components=[];var coordString;var envelope;var lpoint=this.getElementsByTagNameNS(node,this.gmlns,"lowerCorner");if(lpoint.length>0){var coords=[];if(lpoint.length>0){coordString=lpoint[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.trimSpace,"");coords=coordString.split(this.regExes.splitSpace);}
if(coords.length==2){coords[2]=null;}
if(this.xy){var lowerPoint=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{var lowerPoint=new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]);}}
var upoint=this.getElementsByTagNameNS(node,this.gmlns,"upperCorner");if(upoint.length>0){var coords=[];if(upoint.length>0){coordString=upoint[0].firstChild.nodeValue;coordString=coordString.replace(this.regExes.trimSpace,"");coords=coordString.split(this.regExes.splitSpace);}
if(coords.length==2){coords[2]=null;}
if(this.xy){var upperPoint=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{var upperPoint=new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]);}}
if(lowerPoint&&upperPoint){components.push(new OpenLayers.Geometry.Point(lowerPoint.x,lowerPoint.y));components.push(new OpenLayers.Geometry.Point(upperPoint.x,lowerPoint.y));components.push(new OpenLayers.Geometry.Point(upperPoint.x,upperPoint.y));components.push(new OpenLayers.Geometry.Point(lowerPoint.x,upperPoint.y));components.push(new OpenLayers.Geometry.Point(lowerPoint.x,lowerPoint.y));var ring=new OpenLayers.Geometry.LinearRing(components);envelope=new OpenLayers.Geometry.Polygon([ring]);}
return envelope;}},parseAttributes:function(node){var attributes={};var childNode=node.firstChild;var children,i,child,grandchildren,grandchild,name,value;while(childNode){if(childNode.nodeType==1){children=childNode.childNodes;for(i=0;i<children.length;++i){child=children[i];if(child.nodeType==1){grandchildren=child.childNodes;if(grandchildren.length==1){grandchild=grandchildren[0];if(grandchild.nodeType==3||grandchild.nodeType==4){name=(child.prefix)?child.nodeName.split(":")[1]:child.nodeName;value=grandchild.nodeValue.replace(this.regExes.trimSpace,"");attributes[name]=value;}}}}
break;}
childNode=childNode.nextSibling;}
return attributes;},write:function(features){if(!(features instanceof Array)){features=[features];}
var gml=this.createElementNS("http://www.opengis.net/wfs","wfs:"+this.collectionName);for(var i=0;i<features.length;i++){gml.appendChild(this.createFeatureXML(features[i]));}
return OpenLayers.Format.XML.prototype.write.apply(this,[gml]);},createFeatureXML:function(feature){var geometry=feature.geometry;var geometryNode=this.buildGeometryNode(geometry);var geomContainer=this.createElementNS(this.featureNS,this.featurePrefix+":"+
this.geometryName);geomContainer.appendChild(geometryNode);var featureNode=this.createElementNS(this.gmlns,"gml:"+this.featureName);var featureContainer=this.createElementNS(this.featureNS,this.featurePrefix+":"+
this.layerName);var fid=feature.fid||feature.id;featureContainer.setAttribute("fid",fid);featureContainer.appendChild(geomContainer);for(var attr in feature.attributes){var attrText=this.createTextNode(feature.attributes[attr]);var nodename=attr.substring(attr.lastIndexOf(":")+1);var attrContainer=this.createElementNS(this.featureNS,this.featurePrefix+":"+
nodename);attrContainer.appendChild(attrText);featureContainer.appendChild(attrContainer);}
featureNode.appendChild(featureContainer);return featureNode;},buildGeometryNode:function(geometry){if(this.externalProjection&&this.internalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var className=geometry.CLASS_NAME;var type=className.substring(className.lastIndexOf(".")+1);var builder=this.buildGeometry[type.toLowerCase()];return builder.apply(this,[geometry]);},buildGeometry:{point:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:Point");gml.appendChild(this.buildCoordinatesNode(geometry));return gml;},multipoint:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:MultiPoint");var points=geometry.components;var pointMember,pointGeom;for(var i=0;i<points.length;i++){pointMember=this.createElementNS(this.gmlns,"gml:pointMember");pointGeom=this.buildGeometry.point.apply(this,[points[i]]);pointMember.appendChild(pointGeom);gml.appendChild(pointMember);}
return gml;},linestring:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:LineString");gml.appendChild(this.buildCoordinatesNode(geometry));return gml;},multilinestring:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:MultiLineString");var lines=geometry.components;var lineMember,lineGeom;for(var i=0;i<lines.length;++i){lineMember=this.createElementNS(this.gmlns,"gml:lineStringMember");lineGeom=this.buildGeometry.linestring.apply(this,[lines[i]]);lineMember.appendChild(lineGeom);gml.appendChild(lineMember);}
return gml;},linearring:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:LinearRing");gml.appendChild(this.buildCoordinatesNode(geometry));return gml;},polygon:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:Polygon");var rings=geometry.components;var ringMember,ringGeom,type;for(var i=0;i<rings.length;++i){type=(i==0)?"outerBoundaryIs":"innerBoundaryIs";ringMember=this.createElementNS(this.gmlns,"gml:"+type);ringGeom=this.buildGeometry.linearring.apply(this,[rings[i]]);ringMember.appendChild(ringGeom);gml.appendChild(ringMember);}
return gml;},multipolygon:function(geometry){var gml=this.createElementNS(this.gmlns,"gml:MultiPolygon");var polys=geometry.components;var polyMember,polyGeom;for(var i=0;i<polys.length;++i){polyMember=this.createElementNS(this.gmlns,"gml:polygonMember");polyGeom=this.buildGeometry.polygon.apply(this,[polys[i]]);polyMember.appendChild(polyGeom);gml.appendChild(polyMember);}
return gml;},bounds:function(bounds){var gml=this.createElementNS(this.gmlns,"gml:Box");gml.appendChild(this.buildCoordinatesNode(bounds));return gml;}},buildCoordinatesNode:function(geometry){var coordinatesNode=this.createElementNS(this.gmlns,"gml:coordinates");coordinatesNode.setAttribute("decimal",".");coordinatesNode.setAttribute("cs",",");coordinatesNode.setAttribute("ts"," ");var parts=[];if(geometry instanceof OpenLayers.Bounds){parts.push(geometry.left+","+geometry.bottom);parts.push(geometry.right+","+geometry.top);}else{var points=(geometry.components)?geometry.components:[geometry];for(var i=0;i<points.length;i++){parts.push(points[i].x+","+points[i].y);}}
var txtNode=this.createTextNode(parts.join(" "));coordinatesNode.appendChild(txtNode);return coordinatesNode;},CLASS_NAME:"OpenLayers.Format.GML"});OpenLayers.Format.GeoJSON=OpenLayers.Class(OpenLayers.Format.JSON,{initialize:function(options){OpenLayers.Format.JSON.prototype.initialize.apply(this,[options]);},read:function(json,type,filter){type=(type)?type:"FeatureCollection";var results=null;var obj=null;if(typeof json=="string"){obj=OpenLayers.Format.JSON.prototype.read.apply(this,[json,filter]);}else{obj=json;}
if(!obj){OpenLayers.Console.error("Bad JSON: "+json);}else if(typeof(obj.type)!="string"){OpenLayers.Console.error("Bad GeoJSON - no type: "+json);}else if(this.isValidType(obj,type)){switch(type){case"Geometry":try{results=this.parseGeometry(obj);}catch(err){OpenLayers.Console.error(err);}
break;case"Feature":try{results=this.parseFeature(obj);results.type="Feature";}catch(err){OpenLayers.Console.error(err);}
break;case"FeatureCollection":results=[];switch(obj.type){case"Feature":try{results.push(this.parseFeature(obj));}catch(err){results=null;OpenLayers.Console.error(err);}
break;case"FeatureCollection":for(var i=0,len=obj.features.length;i<len;++i){try{results.push(this.parseFeature(obj.features[i]));}catch(err){results=null;OpenLayers.Console.error(err);}}
break;default:try{var geom=this.parseGeometry(obj);results.push(new OpenLayers.Feature.Vector(geom));}catch(err){results=null;OpenLayers.Console.error(err);}}
break;}}
return results;},isValidType:function(obj,type){var valid=false;switch(type){case"Geometry":if(OpenLayers.Util.indexOf(["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","Box","GeometryCollection"],obj.type)==-1){OpenLayers.Console.error("Unsupported geometry type: "+
obj.type);}else{valid=true;}
break;case"FeatureCollection":valid=true;break;default:if(obj.type==type){valid=true;}else{OpenLayers.Console.error("Cannot convert types from "+
obj.type+" to "+type);}}
return valid;},parseFeature:function(obj){var feature,geometry,attributes;attributes=(obj.properties)?obj.properties:{};try{geometry=this.parseGeometry(obj.geometry);}catch(err){throw err;}
feature=new OpenLayers.Feature.Vector(geometry,attributes);if(obj.id){feature.fid=obj.id;}
return feature;},parseGeometry:function(obj){if(obj==null){return null;}
var geometry;if(obj.type=="GeometryCollection"){if(!(obj.geometries instanceof Array)){throw"GeometryCollection must have geometries array: "+obj;}
var numGeom=obj.geometries.length;var components=new Array(numGeom);for(var i=0;i<numGeom;++i){components[i]=this.parseGeometry.apply(this,[obj.geometries[i]]);}
geometry=new OpenLayers.Geometry.Collection(components);}else{if(!(obj.coordinates instanceof Array)){throw"Geometry must have coordinates array: "+obj;}
if(!this.parseCoords[obj.type.toLowerCase()]){throw"Unsupported geometry type: "+obj.type;}
try{geometry=this.parseCoords[obj.type.toLowerCase()].apply(this,[obj.coordinates]);}catch(err){throw err;}}
if(this.internalProjection&&this.externalProjection){geometry.transform(this.externalProjection,this.internalProjection);}
return geometry;},parseCoords:{"point":function(array){if(array.length!=2){throw"Only 2D points are supported: "+array;}
return new OpenLayers.Geometry.Point(array[0],array[1]);},"multipoint":function(array){var points=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["point"].apply(this,[array[i]]);}catch(err){throw err;}
points.push(p);}
return new OpenLayers.Geometry.MultiPoint(points);},"linestring":function(array){var points=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["point"].apply(this,[array[i]]);}catch(err){throw err;}
points.push(p);}
return new OpenLayers.Geometry.LineString(points);},"multilinestring":function(array){var lines=[];var l=null;for(var i=0,len=array.length;i<len;++i){try{l=this.parseCoords["linestring"].apply(this,[array[i]]);}catch(err){throw err;}
lines.push(l);}
return new OpenLayers.Geometry.MultiLineString(lines);},"polygon":function(array){var rings=[];var r,l;for(var i=0,len=array.length;i<len;++i){try{l=this.parseCoords["linestring"].apply(this,[array[i]]);}catch(err){throw err;}
r=new OpenLayers.Geometry.LinearRing(l.components);rings.push(r);}
return new OpenLayers.Geometry.Polygon(rings);},"multipolygon":function(array){var polys=[];var p=null;for(var i=0,len=array.length;i<len;++i){try{p=this.parseCoords["polygon"].apply(this,[array[i]]);}catch(err){throw err;}
polys.push(p);}
return new OpenLayers.Geometry.MultiPolygon(polys);},"box":function(array){if(array.length!=2){throw"GeoJSON box coordinates must have 2 elements";}
return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(array[0][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[0][1]),new OpenLayers.Geometry.Point(array[1][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[1][1]),new OpenLayers.Geometry.Point(array[0][0],array[0][1])])]);}},write:function(obj,pretty){var geojson={"type":null};if(obj instanceof Array){geojson.type="FeatureCollection";var numFeatures=obj.length;geojson.features=new Array(numFeatures);for(var i=0;i<numFeatures;++i){var element=obj[i];if(!element instanceof OpenLayers.Feature.Vector){var msg="FeatureCollection only supports collections "+"of features: "+element;throw msg;}
geojson.features[i]=this.extract.feature.apply(this,[element]);}}else if(obj.CLASS_NAME.indexOf("OpenLayers.Geometry")==0){geojson=this.extract.geometry.apply(this,[obj]);}else if(obj instanceof OpenLayers.Feature.Vector){geojson=this.extract.feature.apply(this,[obj]);if(obj.layer&&obj.layer.projection){geojson.crs=this.createCRSObject(obj);}}
return OpenLayers.Format.JSON.prototype.write.apply(this,[geojson,pretty]);},createCRSObject:function(object){var proj=object.layer.projection.toString();var crs={};if(proj.match(/epsg:/i)){var code=parseInt(proj.substring(proj.indexOf(":")+1));if(code==4326){crs={"type":"OGC","properties":{"urn":"urn:ogc:def:crs:OGC:1.3:CRS84"}};}else{crs={"type":"EPSG","properties":{"code":code}};}}
return crs;},extract:{'feature':function(feature){var geom=this.extract.geometry.apply(this,[feature.geometry]);return{"type":"Feature","id":feature.fid==null?feature.id:feature.fid,"properties":feature.attributes,"geometry":geom};},'geometry':function(geometry){if(geometry==null){return null;}
if(this.internalProjection&&this.externalProjection){geometry=geometry.clone();geometry.transform(this.internalProjection,this.externalProjection);}
var geometryType=geometry.CLASS_NAME.split('.')[2];var data=this.extract[geometryType.toLowerCase()].apply(this,[geometry]);var json;if(geometryType=="Collection"){json={"type":"GeometryCollection","geometries":data};}else{json={"type":geometryType,"coordinates":data};}
return json;},'point':function(point){return[point.x,point.y];},'multipoint':function(multipoint){var array=[];for(var i=0,len=multipoint.components.length;i<len;++i){array.push(this.extract.point.apply(this,[multipoint.components[i]]));}
return array;},'linestring':function(linestring){var array=[];for(var i=0,len=linestring.components.length;i<len;++i){array.push(this.extract.point.apply(this,[linestring.components[i]]));}
return array;},'multilinestring':function(multilinestring){var array=[];for(var i=0,len=multilinestring.components.length;i<len;++i){array.push(this.extract.linestring.apply(this,[multilinestring.components[i]]));}
return array;},'polygon':function(polygon){var array=[];for(var i=0,len=polygon.components.length;i<len;++i){array.push(this.extract.linestring.apply(this,[polygon.components[i]]));}
return array;},'multipolygon':function(multipolygon){var array=[];for(var i=0,len=multipolygon.components.length;i<len;++i){array.push(this.extract.polygon.apply(this,[multipolygon.components[i]]));}
return array;},'collection':function(collection){var len=collection.components.length;var array=new Array(len);for(var i=0;i<len;++i){array[i]=this.extract.geometry.apply(this,[collection.components[i]]);}
return array;}},CLASS_NAME:"OpenLayers.Format.GeoJSON"});OpenLayers.Format.GML.Base=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",wfs:"http://www.opengis.net/wfs"},defaultPrefix:"gml",schemaLocation:null,featureType:null,featureNS:null,geometryName:"geometry",extractAttributes:true,srsName:null,xy:true,regExes:{trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)},initialize:function(options){OpenLayers.Format.XML.prototype.initialize.apply(this,[options]);this.setNamespace("feature",options.featureNS);},read:function(data){if(typeof data=="string"){data=OpenLayers.Format.XML.prototype.read.apply(this,[data]);}
if(data&&data.nodeType==9){data=data.documentElement;}
var features=[];this.readNode(data,{features:features});if(features.length==0){var elements=this.getElementsByTagNameNS(data,this.namespaces.gml,"featureMember");if(elements.length){for(var i=0,len=elements.length;i<len;++i){this.readNode(elements[i],{features:features});}}else{var elements=this.getElementsByTagNameNS(data,this.namespaces.gml,"featureMembers");if(elements.length){this.readNode(elements[0],{features:features});}}}
return features;},readers:{"gml":{"featureMember":function(node,obj){this.readChildNodes(node,obj);},"featureMembers":function(node,obj){this.readChildNodes(node,obj);},"Point":function(node,container){var obj={points:[]};this.readChildNodes(node,obj);if(!container.components){container.components=[];}
container.components.push(obj.points[0]);},"coordinates":function(node,obj){var str=this.concatChildValues(node).replace(this.regExes.trimSpace,"");str=str.replace(this.regExes.trimComma,",");var pointList=str.split(this.regExes.splitSpace);var coords;var numPoints=pointList.length;var points=new Array(numPoints);for(var i=0;i<numPoints;++i){coords=pointList[i].split(",");if(this.xy){points[i]=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{points[i]=new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]);}}
obj.points=points;},"coord":function(node,obj){var coord={};this.readChildNodes(node,coord);if(!obj.points){obj.points=[];}
obj.points.push(new OpenLayers.Geometry.Point(coord.x,coord.y,coord.z));},"X":function(node,coord){coord.x=this.getChildValue(node);},"Y":function(node,coord){coord.y=this.getChildValue(node);},"Z":function(node,coord){coord.z=this.getChildValue(node);},"MultiPoint":function(node,container){var obj={components:[]};this.readChildNodes(node,obj);container.components=[new OpenLayers.Geometry.MultiPoint(obj.components)];},"pointMember":function(node,obj){this.readChildNodes(node,obj);},"LineString":function(node,container){var obj={};this.readChildNodes(node,obj);if(!container.components){container.components=[];}
container.components.push(new OpenLayers.Geometry.LineString(obj.points));},"MultiLineString":function(node,container){var obj={components:[]};this.readChildNodes(node,obj);container.components=[new OpenLayers.Geometry.MultiLineString(obj.components)];},"lineStringMember":function(node,obj){this.readChildNodes(node,obj);},"Polygon":function(node,container){var obj={outer:null,inner:[]};this.readChildNodes(node,obj);obj.inner.unshift(obj.outer);if(!container.components){container.components=[];}
container.components.push(new OpenLayers.Geometry.Polygon(obj.inner));},"LinearRing":function(node,obj){var container={};this.readChildNodes(node,container);obj.components=[new OpenLayers.Geometry.LinearRing(container.points)];},"MultiPolygon":function(node,container){var obj={components:[]};this.readChildNodes(node,obj);container.components=[new OpenLayers.Geometry.MultiPolygon(obj.components)];},"polygonMember":function(node,obj){this.readChildNodes(node,obj);},"GeometryCollection":function(node,container){var obj={components:[]};this.readChildNodes(node,obj);container.components=[new OpenLayers.Geometry.Collection(obj.components)];},"geometryMember":function(node,obj){this.readChildNodes(node,obj);}},"feature":{"*":function(node,obj){var name;var local=node.localName||node.nodeName.split(":").pop();if(local==this.featureType){name="_typeName";}else{if(node.childNodes.length==1&&node.firstChild.nodeType==3){if(this.extractAttributes){name="_attribute";}}else{name="_geometry";}}
if(name){this.readers.feature[name].apply(this,[node,obj]);}},"_typeName":function(node,obj){var container={components:[],attributes:{}};this.readChildNodes(node,container);var feature=new OpenLayers.Feature.Vector(container.components[0],container.attributes);var fid=node.getAttribute("fid")||this.getAttributeNS(node,this.namespaces["gml"],"id");if(fid){feature.fid=fid;}
if(this.internalProjection&&this.externalProjection&&feature.geometry){feature.geometry.transform(this.externalProjection,this.internalProjection);}
obj.features.push(feature);},"_geometry":function(node,obj){this.readChildNodes(node,obj);},"_attribute":function(node,obj){var local=node.localName||node.nodeName.split(":").pop();var value=this.getChildValue(node);obj.attributes[local]=value;}},"wfs":{"FeatureCollection":function(node,obj){this.readChildNodes(node,obj);}}},write:function(features){var name;if(features instanceof Array){name="featureMembers";}else{name="featureMember";}
var root=this.writeNode("gml:"+name,features);this.setAttributeNS(root,this.namespaces["xsi"],"xsi:schemaLocation",this.schemaLocation);return OpenLayers.Format.XML.prototype.write.apply(this,[root]);},writers:{"gml":{"featureMember":function(feature){var node=this.createElementNSPlus("gml:featureMember");this.writeNode("feature:_typeName",feature,node);return node;},"MultiPoint":function(geometry){var node=this.createElementNSPlus("gml:MultiPoint");for(var i=0;i<geometry.components.length;++i){this.writeNode("pointMember",geometry.components[i],node);}
return node;},"pointMember":function(geometry){var node=this.createElementNSPlus("gml:pointMember");this.writeNode("Point",geometry,node);return node;},"MultiLineString":function(geometry){var node=this.createElementNSPlus("gml:MultiLineString");for(var i=0;i<geometry.components.length;++i){this.writeNode("lineStringMember",geometry.components[i],node);}
return node;},"lineStringMember":function(geometry){var node=this.createElementNSPlus("gml:lineStringMember");this.writeNode("LineString",geometry,node);return node;},"MultiPolygon":function(geometry){var node=this.createElementNSPlus("gml:MultiPolygon");for(var i=0;i<geometry.components.length;++i){this.writeNode("polygonMember",geometry.components[i],node);}
return node;},"polygonMember":function(geometry){var node=this.createElementNSPlus("gml:polygonMember");this.writeNode("Polygon",geometry,node);return node;},"GeometryCollection":function(geometry){var node=this.createElementNSPlus("gml:GeometryCollection");for(var i=0,len=geometry.components.length;i<len;++i){this.writeNode("geometryMember",geometry.components[i],node);}
return node;},"geometryMember":function(geometry){var node=this.createElementNSPlus("gml:geometryMember");var child=this.writeNode("feature:_geometry",geometry);node.appendChild(child.firstChild);return node;}},"feature":{"_typeName":function(feature){var node=this.createElementNSPlus("feature:"+this.featureType,{attributes:{fid:feature.fid}});if(feature.geometry){this.writeNode("feature:_geometry",feature.geometry,node);}
for(var name in feature.attributes){var value=feature.attributes[name];if(value!=null){this.writeNode("feature:_attribute",{name:name,value:value},node)}}
return node;},"_geometry":function(geometry){if(this.externalProjection&&this.internalProjection){geometry=geometry.clone().transform(this.internalProjection,this.externalProjection);}
var node=this.createElementNSPlus("feature:"+this.geometryName);var type=this.geometryTypes[geometry.CLASS_NAME];var child=this.writeNode("gml:"+type,geometry,node);if(this.srsName){child.setAttribute("srsName",this.srsName);}
return node;},"_attribute":function(obj){return this.createElementNSPlus("feature:"+obj.name,{value:obj.value});}},"wfs":{"FeatureCollection":function(features){var node=this.createElementNSPlus("wfs:FeatureCollection");for(var i=0,len=features.length;i<len;++i){this.writeNode("gml:featureMember",features[i],node);}
return node;}}},geometryTypes:{"OpenLayers.Geometry.Point":"Point","OpenLayers.Geometry.MultiPoint":"MultiPoint","OpenLayers.Geometry.LineString":"LineString","OpenLayers.Geometry.MultiLineString":"MultiLineString","OpenLayers.Geometry.Polygon":"Polygon","OpenLayers.Geometry.MultiPolygon":"MultiPolygon","OpenLayers.Geometry.Collection":"GeometryCollection"},CLASS_NAME:"OpenLayers.Format.GML.Base"});OpenLayers.Format.GML.v2=OpenLayers.Class(OpenLayers.Format.GML.Base,{schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd",initialize:function(options){OpenLayers.Format.GML.Base.prototype.initialize.apply(this,[options]);},readers:{"gml":OpenLayers.Util.applyDefaults({"outerBoundaryIs":function(node,container){var obj={};this.readChildNodes(node,obj);container.outer=obj.components[0];},"innerBoundaryIs":function(node,container){var obj={};this.readChildNodes(node,obj);container.inner.push(obj.components[0]);},"Box":function(node,container){var obj={};this.readChildNodes(node,obj);if(!container.components){container.components=[];}
var min=obj.points[0];var max=obj.points[1];container.components.push(new OpenLayers.Bounds(min.x,min.y,max.x,max.y));}},OpenLayers.Format.GML.Base.prototype.readers["gml"]),"feature":OpenLayers.Format.GML.Base.prototype.readers["feature"],"wfs":OpenLayers.Format.GML.Base.prototype.readers["wfs"]},write:function(features){var name;if(features instanceof Array){name="wfs:FeatureCollection";}else{name="gml:featureMember";}
var root=this.writeNode(name,features);this.setAttributeNS(root,this.namespaces["xsi"],"xsi:schemaLocation",this.schemaLocation);return OpenLayers.Format.XML.prototype.write.apply(this,[root]);},writers:{"gml":OpenLayers.Util.applyDefaults({"Point":function(geometry){var node=this.createElementNSPlus("gml:Point");this.writeNode("coordinates",[geometry],node);return node;},"coordinates":function(points){var numPoints=points.length;var parts=new Array(numPoints);var point;for(var i=0;i<numPoints;++i){point=points[i];if(this.xy){parts[i]=point.x+","+point.y;}else{parts[i]=point.y+","+point.x;}
if(point.z!=undefined){parts[i]+=","+point.z;}}
return this.createElementNSPlus("gml:coordinates",{attributes:{decimal:".",cs:",",ts:" "},value:(numPoints==1)?parts[0]:parts.join(" ")});},"LineString":function(geometry){var node=this.createElementNSPlus("gml:LineString");this.writeNode("coordinates",geometry.components,node);return node;},"Polygon":function(geometry){var node=this.createElementNSPlus("gml:Polygon");this.writeNode("outerBoundaryIs",geometry.components[0],node);for(var i=1;i<geometry.components.length;++i){this.writeNode("innerBoundaryIs",geometry.components[i],node);}
return node;},"outerBoundaryIs":function(ring){var node=this.createElementNSPlus("gml:outerBoundaryIs");this.writeNode("LinearRing",ring,node);return node;},"innerBoundaryIs":function(ring){var node=this.createElementNSPlus("gml:innerBoundaryIs");this.writeNode("LinearRing",ring,node);return node;},"LinearRing":function(ring){var node=this.createElementNSPlus("gml:LinearRing");this.writeNode("coordinates",ring.components,node);return node;},"Box":function(bounds){var node=this.createElementNSPlus("gml:Box");this.writeNode("coordinates",[{x:bounds.left,y:bounds.bottom},{x:bounds.right,y:bounds.top}],node);if(this.srsName){node.setAttribute("srsName",this.srsName);}
return node;}},OpenLayers.Format.GML.Base.prototype.writers["gml"]),"feature":OpenLayers.Format.GML.Base.prototype.writers["feature"],"wfs":OpenLayers.Format.GML.Base.prototype.writers["wfs"]},CLASS_NAME:"OpenLayers.Format.GML.v2"});OpenLayers.Format.GML.v3=OpenLayers.Class(OpenLayers.Format.GML.Base,{schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",initialize:function(options){OpenLayers.Format.GML.Base.prototype.initialize.apply(this,[options]);},readers:{"gml":OpenLayers.Util.applyDefaults({"featureMembers":function(node,obj){this.readChildNodes(node,obj);},"pos":function(node,obj){var str=this.getChildValue(node).replace(this.regExes.trimSpace,"");var coords=str.split(this.regExes.splitSpace);var point;if(this.xy){point=new OpenLayers.Geometry.Point(coords[0],coords[1],coords[2]);}else{point=new OpenLayers.Geometry.Point(coords[1],coords[0],coords[2]);}
obj.points=[point];},"posList":function(node,obj){var str=this.concatChildValues(node).replace(this.regExes.trimSpace,"");var coords=str.split(this.regExes.splitSpace);var dim=parseInt(node.getAttribute("dimension"))||2;var j,x,y,z;var numPoints=coords.length/dim;var points=new Array(numPoints);for(var i=0,len=coords.length;i<len;i+=dim){x=coords[i];y=coords[i+1];z=(dim==2)?undefined:coords[i+2];if(this.xy){points[i/dim]=new OpenLayers.Geometry.Point(x,y,z);}else{points[i/dim]=new OpenLayers.Geometry.Point(y,x,z);}}
obj.points=points;},"exterior":function(node,container){var obj={};this.readChildNodes(node,obj);container.outer=obj.components[0];},"interior":function(node,container){var obj={};this.readChildNodes(node,obj);container.inner.push(obj.components[0]);},"MultiSurface":function(node,container){var obj={components:[]};this.readChildNodes(node,obj);if(obj.components.length>0){container.components=[new OpenLayers.Geometry.MultiPolygon(obj.components)];}},"surfaceMember":function(node,obj){this.readChildNodes(node,obj);},"surfaceMembers":function(node,obj){this.readChildNodes(node,obj);},"pointMembers":function(node,obj){this.readChildNodes(node,obj);},"lineStringMembers":function(node,obj){this.readChildNodes(node,obj);},"polygonMembers":function(node,obj){this.readChildNodes(node,obj);},"geometryMembers":function(node,obj){this.readChildNodes(node,obj);},"Envelope":function(node,container){var obj={points:new Array(2)};this.readChildNodes(node,obj);if(!container.components){container.components=[];}
var min=obj.points[0];var max=obj.points[1];container.components.push(new OpenLayers.Bounds(min.x,min.y,max.x,max.y));},"lowerCorner":function(node,container){var obj={};this.readChildNodes(node,obj)
container.points[0]=obj.points[0];},"upperCorner":function(node,container){var obj={};this.readChildNodes(node,obj)
container.points[1]=obj.points[0];}},OpenLayers.Format.GML.Base.prototype.readers["gml"]),"feature":OpenLayers.Format.GML.Base.prototype.readers["feature"],"wfs":OpenLayers.Format.GML.Base.prototype.readers["wfs"]},write:function(features){var name;if(features instanceof Array){name="featureMembers";}else{name="featureMember";}
var root=this.writeNode("gml:"+name,features);this.setAttributeNS(root,this.namespaces["xsi"],"xsi:schemaLocation",this.schemaLocation);return OpenLayers.Format.XML.prototype.write.apply(this,[root]);},writers:{"gml":OpenLayers.Util.applyDefaults({"featureMembers":function(features){var node=this.createElementNSPlus("gml:featureMembers");for(var i=0,len=features.length;i<len;++i){this.writeNode("feature:_typeName",features[i],node);}
return node;},"Point":function(geometry){var node=this.createElementNSPlus("gml:Point");this.writeNode("pos",geometry,node);return node;},"pos":function(point){var pos=(this.xy)?(point.x+" "+point.y):(point.y+" "+point.x);return this.createElementNSPlus("gml:pos",{value:pos});},"LineString":function(geometry){var node=this.createElementNSPlus("gml:LineString");this.writeNode("posList",geometry.components,node);return node;},"posList":function(points){var len=points.length;var parts=new Array(len);var point;for(var i=0;i<len;++i){point=points[i];if(this.xy){parts[i]=point.x+" "+point.y;}else{parts[i]=point.y+" "+point.x;}}
return this.createElementNSPlus("gml:posList",{value:parts.join(" ")});},"Polygon":function(geometry){var node=this.createElementNSPlus("gml:Polygon");this.writeNode("exterior",geometry.components[0],node);for(var i=1,len=geometry.components.length;i<len;++i){this.writeNode("interior",geometry.components[i],node);}
return node;},"exterior":function(ring){var node=this.createElementNSPlus("gml:exterior");this.writeNode("LinearRing",ring,node);return node;},"interior":function(ring){var node=this.createElementNSPlus("gml:interior");this.writeNode("LinearRing",ring,node);return node;},"LinearRing":function(ring){var node=this.createElementNSPlus("gml:LinearRing");this.writeNode("posList",ring.components,node);return node;},"Envelope":function(bounds){var node=this.createElementNSPlus("gml:Envelope");this.writeNode("lowerCorner",bounds,node);this.writeNode("upperCorner",bounds,node);if(this.srsName){node.setAttribute("srsName",this.srsName);}
return node;},"lowerCorner":function(bounds){var node=this.createElementNSPlus("gml:lowerCorner");this.writeNode("pos",{x:bounds.left,y:bounds.bottom},node);return node;},"upperCorner":function(bounds){var node=this.createElementNSPlus("gml:upperCorner");this.writeNode("pos",{x:bounds.right,y:bounds.top},node);return node;}},OpenLayers.Format.GML.Base.prototype.writers["gml"]),"feature":OpenLayers.Format.GML.Base.prototype.writers["feature"],"wfs":OpenLayers.Format.GML.Base.prototype.writers["wfs"]},CLASS_NAME:"OpenLayers.Format.GML.v3"});

OpenLayers.Util.OSM={};OpenLayers.Util.OSM.MISSING_TILE_URL="http://openstreetmap.org/openlayers/img/404.png";OpenLayers.Util.OSM.originalOnImageLoadError=OpenLayers.Util.onImageLoadError;OpenLayers.Util.onImageLoadError=function(){if(this.src.match(/^http:\/\/[abc]\.[a-z]+\.openstreetmap\.org\//)){this.src=OpenLayers.Util.OSM.MISSING_TILE_URL}else if(this.src.match(/^http:\/\/[def]\.tah\.openstreetmap\.org\//)){}else{OpenLayers.Util.OSM.originalOnImageLoadError}};OpenLayers.Layer.OSM=OpenLayers.Class(OpenLayers.Layer.TMS,{initialize:function(a,b,c){c=OpenLayers.Util.extend({attribution:"Data by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",maxExtent:new OpenLayers.Bounds(-20037508,-20037508,20037508,20037508),maxResolution:156543,units:"m",projection:"EPSG:900913",transitionEffect:"resize"},c);var d=[a,b,c];OpenLayers.Layer.TMS.prototype.initialize.apply(this,d)},getURL:function(a){var b=this.map.getResolution();var x=Math.round((a.left-this.maxExtent.left)/(b*this.tileSize.w));var y=Math.round((this.maxExtent.top-a.top)/(b*this.tileSize.h));var z=this.map.getZoom();var c=Math.pow(2,z);if(y<0||y>=c){return OpenLayers.Util.OSM.MISSING_TILE_URL}else{x=((x%c)+c)%c;var d=this.url;var e=z+"/"+x+"/"+y+".png";if(d instanceof Array){d=this.selectUrl(e,d)}return d+e}},CLASS_NAME:"OpenLayers.Layer.OSM"});OpenLayers.Layer.OSM.Mapnik=OpenLayers.Class(OpenLayers.Layer.OSM,{initialize:function(a,b){var c=["http://a.tile.openstreetmap.org/","http://b.tile.openstreetmap.org/","http://c.tile.openstreetmap.org/"];b=OpenLayers.Util.extend({numZoomLevels:19},b);var d=[a,c,b];OpenLayers.Layer.OSM.prototype.initialize.apply(this,d)},CLASS_NAME:"OpenLayers.Layer.OSM.Mapnik"});OpenLayers.Layer.OSM.MapnikReload=OpenLayers.Class(OpenLayers.Layer.OSM,{initialize:function(a,b){var c=["http://a.tile.openstreetmap.org/","http://b.tile.openstreetmap.org/","http://c.tile.openstreetmap.org/"];b=OpenLayers.Util.extend({numZoomLevels:19},b);var d=[a,c,b];OpenLayers.Layer.OSM.prototype.initialize.apply(this,d)},CLASS_NAME:"OpenLayers.Layer.OSM.MapnikReload"});OpenLayers.Layer.OSM.Osmarender=OpenLayers.Class(OpenLayers.Layer.OSM,{initialize:function(a,b){var c=["http://a.tah.openstreetmap.org/Tiles/tile.php/","http://b.tah.openstreetmap.org/Tiles/tile.php/","http://c.tah.openstreetmap.org/Tiles/tile.php/"];b=OpenLayers.Util.extend({numZoomLevels:18},b);var d=[a,c,b];OpenLayers.Layer.OSM.prototype.initialize.apply(this,d)},CLASS_NAME:"OpenLayers.Layer.OSM.Osmarender"});OpenLayers.Layer.OSM.Maplint=OpenLayers.Class(OpenLayers.Layer.OSM,{initialize:function(a,b){var c=["http://d.tah.openstreetmap.org/Tiles/maplint.php/","http://e.tah.openstreetmap.org/Tiles/maplint.php/","http://f.tah.openstreetmap.org/Tiles/maplint.php/"];b=OpenLayers.Util.extend({numZoomLevels:18,isBaseLayer:false,visibility:false},b);var d=[a,c,b];OpenLayers.Layer.OSM.prototype.initialize.apply(this,d)},CLASS_NAME:"OpenLayers.Layer.OSM.Maplint"});

/*

	Furrymap Code by Kimura

*/

/**
 *
 * @requires OpenLayers/Marker.js
 * @requires OpenLayers/Feature.js
 * @requires OpenLayers/Layer/Text.js
 * @requires OpenLayers/BaseTypes/Size.js
 * @requires OpenLayers/BaseTypes/Pixel.js
 * @requires OpenLayers/Icon.js
 * @requires OpenLayers/Util.js
 * @requires OpenLayers/BaseTypes/LonLat.js
 * @requires OpenLayers/Projection.js
 * @requires OpenLayers/Events.js
 * @requires OpenLayers/Lang.js
 * @requires OpenLayers/Lang/en.js
 * @requires OpenLayers/Lang/de.js
 * @requires OpenLayers/Map.js

 * @requires OpenLayers/Control.js
 * @requires OpenLayers/Control/NavToolbar.js
 * @requires OpenLayers/Control/PanZoom.js
 * @requires OpenLayers/Control/LayerSwitcher.js
 * @requires OpenLayers/Control/PanZoomBar.js
 * @requires OpenLayers/Control/PermaLink.js
 * @requires OpenLayers/Control/OverviewMap.js
 * @requires OpenLayers/BaseTypes/Bounds.js
 * @requires OpenLayers/Layer/WMS.js
 * @requires OpenLayers/Layer/TMS.js
 * @requires OpenLayers/Layer/Markers.js
 * @requires OpenLayers/Format/GeoJSON.js
 * @requires OpenLayers/Format/JSON.js

 * @requires OpenLayers/Ajax.js
 * @requires OpenLayers/Console.js
 * @requires OpenLayers/Layer/SphericalMercator.js
 */

var FurryMap = OpenLayers.Class();

FurryMap.LightIcon = OpenLayers.Class(OpenLayers.Icon, {
    initialize: function(url, size, offset, calculateOffset) {
        this.url = url;
        this.size = (size) ? size : new OpenLayers.Size(20,20);
        this.offset = offset ? offset : new OpenLayers.Pixel(-(this.size.w/2), -(this.size.h/2));
        this.calculateOffset = calculateOffset;

        var id = OpenLayers.Util.createUniqueID("FM_LightIcon_");
        this.imageDiv = OpenLayers.Util.createImage(id, null, size, url, "absolute", null,
	                                          null, false);
    },

	clone: function() {
        return new FurryMap.LightIcon(this.url,
                                   this.size,
                                   this.offset,
                                   this.calculateOffset);
    },

    destroy: function() {
        this.imageDiv = null;
    },

    draw: function(px) {
        this.moveTo(px);
        return this.imageDiv;
    },

    setOpacity: function(opacity) {
		if (parseFloat(opacity) <= 0.0) {
			this.display(false);
		} else 	if (parseFloat(opacity) >= 0.0 && parseFloat(opacity) < 1.0) {
			this.display(true);
	        //this.imageDiv.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
	        this.imageDiv.style.opacity = opacity;
	    } else if (parseFloat(opacity) == 1.0) {
			this.display(true);
	        //this.imageDiv.style.filter = '';
	        this.imageDiv.style.opacity = '';
	    }
    },

    moveTo: function (px) {
        //if no px passed in, use stored location
        if (px != null) {
            this.px = px;
        }

        if (this.imageDiv != null) {
            if (this.px == null) {
                this.display(false);
            } else {
                if (this.calculateOffset) {
                    this.offset = this.calculateOffset(this.size);
                }
                var offsetPx = this.px.offset(this.offset);
			 	if (offsetPx) {
			        this.imageDiv.style.left = offsetPx.x + "px";
			        this.imageDiv.style.top = offsetPx.y + "px";
			    }
            }
        }
    },

    CLASS_NAME: "FurryMap.LightIcon"
});

FurryMap.ZoomMarker = OpenLayers.Class(OpenLayers.Marker, {
	zoom: 0,

	initialize: function (lonlat, icon, zoom) {
		this.zoom = zoom;
		OpenLayers.Marker.prototype.initialize.apply(this, arguments);
	},

	draw: function (px) {
		var mapzoom = this.map.getZoom();
		if (mapzoom > this.zoom) {
			var o = 1.0 - (mapzoom - this.zoom) * 0.25;
			if (o < 0) {
				o = 0;
			}
			this.setOpacity(o);
		} else {
			this.setOpacity(1.0);
		}
		return this.icon.draw(px);
	},

	CLASS_NAME: "FurryMap.ZoomMarker"
});


FurryMap.ZoomFeature = OpenLayers.Class(OpenLayers.Feature, {
	createMarker: function (zoom) {
		if (this.lonlat !== null) {
			this.marker = new FurryMap.ZoomMarker(this.lonlat, this.data.icon, zoom);
		}
		return this.marker;
	},

	createPopup: function (closeBox) {
		if (this.lonlat !== null) {
			var id = this.id + "_popup";
			var anchor = this.marker ? this.marker.icon : null;
			if (!this.popup) {
				this.popup = new this.popupClass(id,
					this.lonlat,
					this.data.popupSize.clone(),
					this.data.popupContentHTML,
					anchor,
					closeBox,
					this.destroyPopup.bind(this));
			}
			if (this.data.overflow !== null) {
				this.popup.contentDiv.style.overflow = this.data.overflow;
			}
			this.popup.feature = this;
		}
		return this.popup;
	},

	destroyPopup: function () {
		if (this.popup) {
			this.popup.feature = null;
			this.popup.destroy();
			this.popup = null;
			if (this.layer) this.layer.selectedFeature = null;
		}
	},

	CLASS_NAME: "FurryMap.ZoomFeature"
});

FurryMap.Layer = OpenLayers.Class();

FurryMap.Layer.GeoJSON = OpenLayers.Class(OpenLayers.Layer.Text, {
	icon: null,

	moveTo: function (bounds, zoomChanged, minor) {
		OpenLayers.Layer.Markers.prototype.moveTo.apply(this, arguments);
		if (this.visibility && !this.loaded) {
			this.loadText();
		}
	},

	markerClick: function (evt) {
		var sameMarkerClicked = (this == this.layer.selectedFeature);
		this.layer.selectedFeature = (!sameMarkerClicked) ? this : null;

		for (var i = 0; i < this.layer.map.popups.length; i++) {
			this.layer.map.removePopup(this.layer.map.popups[i]);
		}
		if (!sameMarkerClicked) {
			this.layer.map.addPopup(this.createPopup(true));
		}
		OpenLayers.Event.stop(evt);
	},

	parseData: function (ajaxRequest) {
		var text = ajaxRequest.responseText;

		var options = {};

		OpenLayers.Util.extend(options, this.formatOptions);

		if (this.map && !this.projection.equals(this.map.getProjectionObject())) {
			options.externalProjection = this.projection;
			options.internalProjection = this.map.getProjectionObject();
		}

		var parser = new OpenLayers.Format.GeoJSON(options);
		var features = parser.read(text);
		if (features) {
			this.clearMarkers();
			for (var i = 0; i < features.length; i++) {
				var data = {};
				var feature = features[i];
				var location;

				if (!this.icon) {
					var iconSize = new OpenLayers.Size(24, 24);
					var iconOffset = new OpenLayers.Pixel(-(iconSize.w / 2), -iconSize.h);
					this.icon = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_2.png", iconSize, iconOffset);
				}
				data.icon = this.icon.clone();

				location = new OpenLayers.LonLat(feature[0], feature[1]); //.geometry.x, feature.geometry.y);
				location = location.transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));

				if (feature.length == 8 /*(feature.attributes.v !== null) && (feature.attributes.m !== null)*/) {
					data.popupContentHTML = '<div style="padding: 4px 9px; line-height:14px; font-size:12px">';
					if (feature[7] != 0 /*feature.attributes.h*/) {
						data.popupContentHTML += '<a href="' + feature[6] + '"'+(feature[6].charAt(0)!='/'?' target="_blank"':' target="subwindow"')+'><img src="' + OpenLayers.Util.getImagesLocation() + '../avatar/' + feature[7] + '.png" width="40" height="40" style="float: left; margin-right: 9px; border: 1px solid #ffffff"/></a>';
					} else {
						data.popupContentHTML += '<a href="' + feature[6] + '"'+(feature[6].charAt(0)!='/'?' target="_blank"':' target="subwindow"')+'><img src="' + OpenLayers.Util.getImagesLocation() + '../avatar/default.png" width="40" height="40" style="float: left; margin-right: 9px; border: 1px solid #ffffff"/></a>';
					}
					/*if (feature.attributes.Gender !== null && feature.attributes.Gender.toLowerCase() === "f") {
						data.popupContentHTML += '<img src="' + OpenLayers.Util.getImagesLocation() + '../female.png"  style="vertical-align:middle; float: right"/>';
					}
					if (feature.attributes.Gender !== null && feature.attributes.Gender.toLowerCase() === "m") {
						data.popupContentHTML += '<img src="' + OpenLayers.Util.getImagesLocation() + '../male.png"  style="vertical-align:middle; float: right"/>';
					}
					if (feature.attributes.Gender !== null && feature.attributes.Gender.toLowerCase() === "h") {
						data.popupContentHTML += '<img src="' + OpenLayers.Util.getImagesLocation() + '../herm.png"  style="vertical-align:middle; float: right"/>';
					}*/
					data.popupContentHTML += '<b><a href="' + feature[6] + '"'+(feature[6].charAt(0)!='/'?' target="_blank"':' target="subwindow"')+'>' + feature[5] + '</a>: <br/>' + feature[3] + '</b><br/>';
					//data.popupContentHTML += '<small><span style="float: right">&nbsp;';

					/*if (feature.attributes.Country !== null && feature.attributes.Country !== "") {
						data.popupContentHTML += '<img src="' + OpenLayers.Util.getImagesLocation() + '../flags/' + feature.attributes.Country + '.png"/>';
					}*/
					//data.popupContentHTML += '</span>';
					/*if (feature.attributes.Fullname !== null && feature.attributes.Fullname !== "") {
						data.popupContentHTML += feature.attributes.Fullname + ', ';
					}
					if (feature.attributes.Furryspecies !== null && feature.attributes.Furryspecies !== "") {
						data.popupContentHTML += feature.attributes.Furryspecies + ', ';
					}*/

					//data.popupContentHTML += /*feature.attributes.NumberofMarkers +*/ '</small>';

					/*var lonlat = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
					lonlat = lonlat.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
					data.popupContentHTML += '<br/> <a href="' + feature.attributes.MarkerUrl + '" style="float: right"><img src="' + OpenLayers.Util.getImagesLocation() + '../link.png" alt="Link" title="Link"/></a><small>' + FurryMap.LatPrinter(lonlat.lat) + " " + FurryMap.LonPrinter(lonlat.lon) + '</small><br/>';*/
					data.popupContentHTML += '</div>';
				}

				data.popupSize = new OpenLayers.Size(200, 52);
				//data.overflow = feature.attributes.overflow || "auto";

				var markerFeature = new FurryMap.ZoomFeature(this, location, data);
				this.features.push(markerFeature);
				var marker = markerFeature.createMarker(feature[4]/*.attributes.z*/);
				//if ((feature.attributes.v !== null) && (feature.attributes.m !== null)) {
					marker.events.register('click', markerFeature, this.markerClick);
				//}
				this.addMarker(marker);
			}
		}
		this.events.triggerEvent("loadend");
	},

	CLASS_NAME: "FurryMap.Layer.GeoJSON"
});


FurryMap.Layer.DataPool = OpenLayers.Class(OpenLayers.Layer.Markers, {

	datakey: null,
	prefeatures: null,
	position: 0,
	features: null,

	selectedFeature: null,

	/**
	 * Constructor: OpenLayers.Layer.Text
	 * Create a text layer.
	 *
	 * Parameters:
	 * name - {String}
	 * options - {Object} Object with properties to be set on the layer.
	 *     Must include <location> property.
	 */
	initialize: function (name, options) {
		OpenLayers.Layer.Markers.prototype.initialize.apply(this, arguments);
		this.features = [];
	},

	destroy: function () {
		// Warning: Layer.Markers.destroy() must be called prior to calling
		// clearFeatures() here, otherwise we leak memory. Indeed, if
		// Layer.Markers.destroy() is called after clearFeatures(), it won't be
		// able to remove the marker image elements from the layer's div since
		// the markers will have been destroyed by clearFeatures().
		OpenLayers.Layer.Markers.prototype.destroy.apply(this, arguments);
		this.clearFeatures();
		this.features = null;
	},

	update: function () {
		if (!this.datapool) {
			return;
		}

		if (!this.datapool.data[this.datakey]) {
			return;
		}

		this.prefeatures = this.datapool.data[this.datakey].features;

		if (this.prefeatures) {
			this.clearMarkers();
			this.clearFeatures();
			this.position = 0;
			window.setTimeout(this.createMarkers.bind(this), 10);
		}
	},

	createMarkers: function () {
		var features = this.prefeatures;
			for (var i = this.position; i < Math.min(this.position+100,features.length); i++) {
				var data = {};
				var feature = features[i];
				var location;

				if (!this.icon) {
					var iconSize = new OpenLayers.Size(24, 24);
					var iconOffset = new OpenLayers.Pixel(-(iconSize.w / 2), -iconSize.h);
					this.icon = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_2.png", iconSize, iconOffset);
				}
				data.icon = this.icon.clone();

				location = new OpenLayers.LonLat(feature[0], feature[1]); //.geometry.x, feature.geometry.y);
				location = location.transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));

				if (feature.length == 8 /*(feature.attributes.v !== null) && (feature.attributes.m !== null)*/) {
					data.popupContentHTML = '<div style="padding: 4px 9px; line-height:14px; font-size:12px">';
					if (feature[7] != 0 /*feature.attributes.h*/) {
						data.popupContentHTML += '<a href="' + feature[6] + '"'+(feature[6].charAt(0)!='/'?' target="_blank"':' target="subwindow"')+'><img src="' + OpenLayers.Util.getImagesLocation() + '../avatar/' + feature[7] + '.png" width="40" height="40" style="float: left; margin-right: 9px; border: 1px solid #ffffff"/></a>';
					} else {
						data.popupContentHTML += '<a href="' + feature[6] + '"'+(feature[6].charAt(0)!='/'?' target="_blank"':' target="subwindow"')+'><img src="' + OpenLayers.Util.getImagesLocation() + '../avatar/default.png" width="40" height="40" style="float: left; margin-right: 9px; border: 1px solid #ffffff"/></a>';
					}
					/*if (feature.attributes.Gender !== null && feature.attributes.Gender.toLowerCase() === "f") {
						data.popupContentHTML += '<img src="' + OpenLayers.Util.getImagesLocation() + '../female.png"  style="vertical-align:middle; float: right"/>';
					}
					if (feature.attributes.Gender !== null && feature.attributes.Gender.toLowerCase() === "m") {
						data.popupContentHTML += '<img src="' + OpenLayers.Util.getImagesLocation() + '../male.png"  style="vertical-align:middle; float: right"/>';
					}
					if (feature.attributes.Gender !== null && feature.attributes.Gender.toLowerCase() === "h") {
						data.popupContentHTML += '<img src="' + OpenLayers.Util.getImagesLocation() + '../herm.png"  style="vertical-align:middle; float: right"/>';
					}*/
					data.popupContentHTML += '<b><a href="' + feature[6] + '"'+(feature[6].charAt(0)!='/'?' target="_blank"':' target="subwindow"')+'>' + feature[5] + '</a>: <br/>' + feature[3] + '</b><br/>';
					//data.popupContentHTML += '<small><span style="float: right">&nbsp;';

					/*if (feature.attributes.Country !== null && feature.attributes.Country !== "") {
						data.popupContentHTML += '<img src="' + OpenLayers.Util.getImagesLocation() + '../flags/' + feature.attributes.Country + '.png"/>';
					}*/
					//data.popupContentHTML += '</span>';
					/*if (feature.attributes.Fullname !== null && feature.attributes.Fullname !== "") {
						data.popupContentHTML += feature.attributes.Fullname + ', ';
					}
					if (feature.attributes.Furryspecies !== null && feature.attributes.Furryspecies !== "") {
						data.popupContentHTML += feature.attributes.Furryspecies + ', ';
					}*/

					//data.popupContentHTML += /*feature.attributes.NumberofMarkers + */'</small>';

					/*var lonlat = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
					lonlat = lonlat.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
					data.popupContentHTML += '<br/><a href="' + feature.attributes.MarkerUrl + '" style="float: right"'+(feature.attributes.MarkerUrl.charAt(0)!='/'?' target="_blank"':'')+'><img src="' + OpenLayers.Util.getImagesLocation() + '../link.png" alt="Link" title="Link"/></a><a href="http://maps.google.de/maps?f=d&hl=de&mra=ls&daddr=' + lonlat.lat + ',' + lonlat.lon + '&z=' + feature.attributes.Zoom + '" target="_blank" style="float: right"><img src="' + OpenLayers.Util.getImagesLocation() + '../car.png" alt="Get route with Google Maps" title="Get route with Google Maps"></a><small>' + FurryMap.LatPrinter(lonlat.lat) + " " + FurryMap.LonPrinter(lonlat.lon) + '</small><br/>';*/
					data.popupContentHTML += '</div>';
				}

				data.popupSize = new OpenLayers.Size(200, 52);
				//data.overflow = feature.attributes.overflow || "auto";

				var markerFeature = new FurryMap.ZoomFeature(this, location, data);
				this.features.push(markerFeature);
				var marker = markerFeature.createMarker(feature[4]);
				//if ((feature.attributes.v !== null) && (feature.attributes.m !== null)) {
					marker.events.register('click', markerFeature, this.markerClick);
				//}
				this.addMarker(marker);
			}
		this.position += 100;
		if (this.position < features.length) {
			window.setTimeout(this.createMarkers.bind(this), 0);
		} else {
			if (this.datakey == "user") {
				if (this.markers === null || this.markers.length === 0) {
					$('error').innerHTML = "No markers found.";
					$('error').style.display = "block";
				} else {
					var bounds = this.getDataExtent();
					var center = bounds.getCenterLonLat();
					if (this.map.baseLayer.wrapDateLine) {
						var maxExtent = this.map.getMaxExtent();

						bounds = bounds.clone();
						while (bounds.right < bounds.left) {
							bounds.right += maxExtent.getWidth();
						}
						center = bounds.getCenterLonLat().wrapDateLine(maxExtent);
					}
					var zoom = this.map.getZoomForExtent(bounds, true);
					if (zoom > 6) {
						zoom = 6;
					}
					this.map.setCenter(center, zoom);
				}
			}
		}
	},

	/**
	 * Property: markerClick
	 *
	 * Parameters:
	 * evt - {Event}
	 */
	markerClick: function (evt) {
		var sameMarkerClicked = (this == this.layer.selectedFeature);
		this.layer.selectedFeature = (!sameMarkerClicked) ? this : null;

		for (var i = 0; i < this.layer.map.popups.length; i++) {
			this.layer.map.removePopup(this.layer.map.popups[i]);
		}
		if (!sameMarkerClicked) {
			this.layer.map.addPopup(this.createPopup(true));
		}
		OpenLayers.Event.stop(evt);
	},

	addMarker: function(marker) {
        this.markers.push(marker);

        //if (this.opacity != null) {
        //    marker.setOpacity(this.opacity);
        //}

        if (this.map && this.map.getExtent()) {
            marker.map = this.map;
            this.drawMarker(marker);
        }
    },


	clearFeatures: function () {
		if (this.features !== null) {
			while (this.features.length > 0) {
				var feature = this.features[0];
				OpenLayers.Util.removeItem(this.features, feature);
				feature.destroy();
			}
		}
	},

	CLASS_NAME: "FurryMap.Layer.DataPool"
});



FurryMap.Layer.OpenAerialMap = OpenLayers.Class(OpenLayers.Layer.TMS, {
	getURL: function (bounds) {
		var res = this.map.getResolution();
		var x = Math.round((bounds.left - this.maxExtent.left) / (res * this.tileSize.w));
		var y = Math.round((this.maxExtent.top - bounds.top) / (res * this.tileSize.h));
		var z = this.map.getZoom();
		var limit = Math.pow(2, z);

		if (y < 0 || y >= limit)
		{
			return OpenLayers.Util.OSM.MISSING_TILE_URL;
		}
		else
		{
			x = ((x % limit) + limit) % limit;
			var path = this.serviceVersion + "/" + this.layername + "/" + z + "/" + x + "/" + y + "." + this.type;
			var url = this.url;
			if (url instanceof Array) {
				url = this.selectUrl(path, url);
			}

			return url + path;
		}
	}
});

FurryMap.Permalink = OpenLayers.Class(OpenLayers.Control.Permalink, {
	createParams: function(center, zoom, layers) {
		center = center || this.map.getCenter();
		zoom = zoom || this.map.getZoom();
		layers = layers || this.map.layers;

		var params = OpenLayers.Util.getParameters(this.base);

		// If there's still no center, map is not initialized yet.
		// Break out of this function, and simply return the params from the
		// base link.
		if (center && this.map.getProjectionObject()) {
			params.zoom = this.map.getZoom();
			var lat = center.lat;
			var lon = center.lon;

			if (this.displayProjection) {
				var mapPosition = OpenLayers.Projection.transform(
					{ x: lon, y: lat },
					this.map.getProjectionObject(),
					this.displayProjection);
				lon = mapPosition.x;
				lat = mapPosition.y;
			}
			params.lat = Math.round(lat * 100000) / 100000;
			params.lon = Math.round(lon * 100000) / 100000;
		}

		return params;
	}
});

OpenLayers.Control.JumpBox = OpenLayers.Class(OpenLayers.Control, {

	element: null,

	datapool: null,
	addlink: "",

	initialize: function (element, datapool, addlink, options) {
		OpenLayers.Control.prototype.initialize.apply(this, [options]);
		this.element = OpenLayers.Util.getElement(element);
		this.datapool = datapool;
		this.addlink = addlink || "";
	},

	destroy: function ()  {
		if (this.element.parentNode == this.div) {
			this.div.removeChild(this.element);
		}
		this.element = null;

		OpenLayers.Control.prototype.destroy.apply(this, arguments);
	},

	initvalue: "Jump to...",

	draw: function () {
		OpenLayers.Control.prototype.draw.apply(this, arguments);

		if (!this.element) {
			this.div.style.color = "white";
			this.div.style.backgroundColor = "transparent";
			this.div.style.width = "370px";
			this.element = document.createElement("div");
			this.element.style.backgroundColor = "darkgreen";
			this.element.style.padding = '3px';
			this.list = document.createElement("div");
			this.list.style.height = "100px";
			this.list.style.width = "363px";
			this.list.style.overflow = "auto";
			this.list.style.display = "none";
			this.closebutton = document.createElement("img");
			this.closebutton.src = OpenLayers.Util.getImagesLocation() + "layer-switcher-minimize.png";
			this.closebutton.style.position = "absolute";
			this.closebutton.style.right = "4px";
			this.closebutton.style.top = "4px";
			this.closebutton.style.display = "none";
			this.closebutton.style.cursor = "pointer";
			this.element.appendChild(this.closebutton);
			OpenLayers.Event.observe(this.closebutton, "mousedown", OpenLayers.Function.bindAsEventListener(function (e) {
				OpenLayers.Event.stop(e);
			}, this));
			OpenLayers.Event.observe(this.closebutton, "mouseup", OpenLayers.Function.bindAsEventListener(function (e) {
				this.inputbox.blur();
				this.inputbox.value = this.initvalue;
				this.lastvalue = this.initvalue;
				this.list.style.display = "none";
				this.closebutton.style.display = "none";
				/*this.addbutton.style.display = "none";*/
				OpenLayers.Event.stop(e);
			}, this));
			this.addbutton = document.createElement('div');
			this.addbutton.href = this.addlink;
			//this.addbutton.style.position = "absolute";
			//this.addbutton.style.left = "3px";
			//this.addbutton.style.top = "3px";
			//this.addbutton.style.display = "none";
			/*OpenLayers.Event.observe(this.addbutton, "click", OpenLayers.Function.bindAsEventListener(function (e) {
				var center = this.map.getCenter();
				if (!center) {
					return;
				}

				var zoom = this.map.getZoom();
				var lat = center.lat;
				var lon = center.lon;

				var mapPosition = OpenLayers.Projection.transform(
					{ x: lon, y: lat },
					this.map.getProjectionObject(),
					new OpenLayers.Projection("EPSG:4326"));
				lon = Math.round(mapPosition.x * 100000) / 100000;
				lat = Math.round(mapPosition.y * 100000) / 100000;
				top.location.href = this.addlink + "?lon=" + lon + "&lat=" + lat + "&zoom=" + zoom;
				OpenLayers.Event.stop(e);
			}, this));*/
			this.addbutton.innerHTML = '<img src="' + OpenLayers.Util.getImagesLocation() + '../add.png" style="vertical-align: middle; padding-right: 5px; padding-bottom: 5px"/>' + this.addlink;
			this.element.appendChild(this.addbutton);
			this.element.appendChild(this.list);
			this.inputbox = document.createElement("input");
			this.inputbox.type = "text";
			this.inputbox.value = this.initvalue;
			this.inputbox.style.width = "360px";
			this.element.appendChild(this.inputbox);
			this.div.appendChild(this.element);
			OpenLayers.Event.observe(this.inputbox, "mousedown", OpenLayers.Function.bindAsEventListener(function (e) {
				OpenLayers.Event.stop(e);
			}, this));
			OpenLayers.Event.observe(this.inputbox, "mouseup", OpenLayers.Function.bindAsEventListener(function (e) {
				if (this.inputbox.value == this.initvalue) {
					this.inputbox.value = "";
				}
				this.inputbox.focus();
				this.onInputboxKeyup(e);
				OpenLayers.Event.stop(e);
			}, this));
			OpenLayers.Event.observe(this.inputbox, "keyup",
				OpenLayers.Function.bindAsEventListener(this.onInputboxKeyup, this));
			OpenLayers.Rico.Corner.round(this.div, {
				corners: "tr",
				bgColor: "transparent",
				color: 'darkgreen',
				blend: false
			});
			OpenLayers.Rico.Corner.changeOpacity(this.element, 0.75);

			this.lastvalue = this.initvalue;
		}

		return this.div;
	},

	currentitem: 0,
	onInputboxKeyup: function (e) {
		var lis;
		if (e.which == 38 || e.keyCode == 38) {
			lis = this.list.getElementsByTagName('li');
			if (lis[this.currentitem]) {
				lis[this.currentitem].style.backgroundColor = "transparent";
			}
			if (this.currentitem > 0) {
				this.currentitem--;
			} else {
				this.currentitem = 0;
			}
			if (lis[this.currentitem]) {
				lis[this.currentitem].style.backgroundColor = "green";
				this.list.scrollTop = lis[this.currentitem].offsetTop-29;
			}
		}
		if (e.which == 40 || e.keyCode == 40) {
			lis = this.list.getElementsByTagName('li');
			if (lis[this.currentitem]) {
				lis[this.currentitem].style.backgroundColor = "transparent";
			}
			if (this.currentitem < lis.length - 1) {
				this.currentitem++;
			} else {
				this.currentitem = lis.length - 1;
			}
			if (lis[this.currentitem]) {
				lis[this.currentitem].style.backgroundColor = "green";
				this.list.scrollTop = lis[this.currentitem].offsetTop-29;
			}
		}
		if (e.which == 13 || e.keyCode == 13) {
			var as = this.list.getElementsByTagName('a');
			if (as[this.currentitem]) {
				eval(as[this.currentitem].href);
			}
		}
		if (e.which == 27 || e.keyCode == 27) {
			this.inputbox.blur();
			this.inputbox.value = this.initvalue;
			this.lastvalue = this.initvalue;
			this.list.style.display = "none";
			this.closebutton.style.display = "none";
			this.addbutton.style.display = "none";
			OpenLayers.Event.stop(e);
			return;
		}
		if (!this.datapool || !this.datapool.data.search) {
			return;
		}
		var search = this.inputbox.value;
		if (search != this.lastvalue && search != this.initvalue) {
			this.currentitem = 0;
			var ul = document.createElement('ul');
			var newhtml = '<ul><a href=""><img src=""></a>';
			/*var re = ".*";
			var save = /[a-zA-Z0-9_\-]/;
			for (var i = 0; i < search.length; i++) {
				var char = search.charAt(i);
				if (save.test(char)) {
					re += '[' + char.toLowerCase() + char.toUpperCase() + '].*';
				}
			}*/
			var searchre = new RegExp(search.toLowerCase());
			for (var key in this.datapool.data.search.features) {
				var value = (this.datapool.data.search.features[key].length>5?this.datapool.data.search.features[key][5]+': ':'')+this.datapool.data.search.features[key][3];//.attributes.m;
				if (searchre.test(value.toLowerCase())) {
					var li = document.createElement('li');
					var lonlat = new OpenLayers.LonLat(this.datapool.data.search.features[key][0]/*.geometry.x*/, this.datapool.data.search.features[key][1]/*.geometry.y*/);
					//lonlat = lonlat.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
					li.innerHTML = '<a href="javascript:FurryMap.center(' + lonlat.lon + ',' + lonlat.lat + ',' + this.datapool.data.search.features[key][4]/*.attributes.z*/ + ');">' + value + '</a>';
					ul.appendChild(li);
				}
			}

			this.list.innerHTML = "";
			this.list.appendChild(ul);
			lis = this.list.getElementsByTagName('li');
			if (lis[this.currentitem]) {
				lis[this.currentitem].style.backgroundColor = "green";
			}
			this.list.style.display = "block";
			this.closebutton.style.display = "block";
			this.addbutton.style.display = "block";
			this.lastvalue = search;
		}
		OpenLayers.Event.stop(e);
	},

	CLASS_NAME: "OpenLayers.Control.JumpBox"
});

FurryMap.DataPool = OpenLayers.Class();

OpenLayers.Util.extend(FurryMap.DataPool.prototype, {
	data: null,
	dataUrl: null,
	hasData: false,
	parent: null,

	externalProjection: "EPSG:4326",
	internalProjection: "EPSG:4326",

	initialize: function (dataUrl, internalProjection, externalProjection) {
		this.internalProjection = new OpenLayers.Projection(internalProjection);
		this.externalProjection = new OpenLayers.Projection(externalProjection);
		this.hasData = false;
		this.data = {};
		this.dataUrl = dataUrl;
		this.forceUpdate();
		if (!FurryMap.SmallVersion) {
			var pe = new PeriodicalExecuter(this.forceUpdate.bind(this), 5 * 60);
		}
	},

	loadData: function (url) {
		if (typeof url != "string") {
			return;
		}
		OpenLayers.loadURL(
			url, null, this,
			function (ajaxRequest) {
				var json = ajaxRequest.responseText;

				var options = {};

				var parser = new OpenLayers.Format.JSON(options);
				var predata = parser.read(json);
				this.parseData(predata);
				this.hasData = true;
			}, function () {}
		);
	},

	parseData: function (predata) {
		var layers = [];
		if (predata) {
			for (var key in predata) {
				if (typeof predata[key].id == "string") {
					this.addDataTo(predata[key].id, predata[key]);
					layers.push(key);
				}
			}
		}
		return layers;
	},

	addDataTo: function (key, predata) {
		if (!this.data[key]) {
			this.data[key] = {id: predata.id, features: {}, info: {}};
		}

		if (predata.geojson) {
			var options = {};
			if (!this.externalProjection.equals(this.internalProjection)) {
				options.externalProjection = this.externalProjection;
				options.internalProjection = this.internalProjection;
			}

			//var geoparser = new OpenLayers.Format.GeoJSON(options);
			var features = predata.geojson.features; //geoparser.read(predata.geojson);
			if (features) {
				this.data[key].features = features;
			}
		}

		if (predata.info) {
			this.data[key].info = predata.info;
		}
		if (this.data[key].info.isLayer) {
			FurryMap.updateLayer(key);
		}
		if (this.data[key].info.addToSearch) {
			this.syncFeaturesWith("search", key);
		}
		if (this.data[key].info.addToDistance) {
			this.syncFeaturesWith("distance", key);
		}

	},

	syncFeaturesWith: function (key, datakey) {
		if (!this.data[datakey].features) {
			return;
		}
		if (!this.data[key]) {
			this.data[key] = {id: key};
			this.data[key].features = {};
		}
		for (var i = 0; i < this.data[datakey].features.length; i++) {
			var data = {};
			var feature = this.data[datakey].features[i];
			this.data[key].features[feature[2]] = feature;
		}
	},

	forceUpdate: function (category) {
		if (typeof category == "string" && this.data[category] && this.data[category].info.updateUrl) {
			this.loadData(this.data[category].info.updateUrl);
			return;
		}
		if (typeof this.dataUrl == "string") {
			this.loadData(this.dataUrl);
		}
	}
});

FurryMap.Events = new OpenLayers.Events(window, null, ['loadStart', 'loadEnd']);
FurryMap.loaded = false;
OpenLayers.Util.extend(FurryMap, {
	delayCall: function (cf, arg) {
		if (FurryMap.loaded) {
			window.fm[cf].apply(window.fm, arg);
		} else {
			var object = {'cf': cf, 'arg': arg};
			FurryMap.Events.on({
				'loadEnd': function () {
					var test = window.fm;
					if (window.fm) {
						window.fm[this.cf].apply(window.fm, this.arg);
					}
				},
				scope: object
			});
		}
	},

	clearLayer: function () {
		FurryMap.delayCall('clearLayer', arguments);
	},

	addMarkers: function () {
		FurryMap.delayCall('addMarkers', arguments);
	},

	reloadMarkers: function () {
		FurryMap.delayCall('reloadMarkers', arguments);
	},

	updateLayer: function () {
		FurryMap.delayCall('updateLayer', arguments);
	},

	addToDataPool: function () {
		FurryMap.delayCall('addToDataPool', arguments);
	},

	addMarkerTo: function () {
		FurryMap.delayCall('addMarkerTo', arguments);
	},

	center: function () {
		FurryMap.delayCall('center', arguments);
	},

	setMarker: function () {
		FurryMap.delayCall('setMarker', arguments);
	},

	setDistanceUrl: function () {
		FurryMap.delayCall('setDistanceUrl', arguments);
	},

	setClickHandler: function () {
		FurryMap.delayCall('setClickHandler', arguments);
	},

	clearTempLayers: function () {
		FurryMap.delayCall('clearTempLayers', arguments);
	}
});

FurryMap.SmallVersion = false;

FurryMap.load = function (div, lang, pos, dataurl, addregionurl) {
	FurryMap.loaded = false;
	FurryMap.Events.triggerEvent('loadStart', {});
	window.fm = new FurryMap(div, lang, pos, dataurl, addregionurl);
	if (window.fm) {
		FurryMap.Events.triggerEvent('loadEnd', {});
		FurryMap.loaded = true;
	}
};

OpenLayers.Util.extend(FurryMap.prototype, {
	lon: 10.45,
	lat: 51.1666667,
	zoom: 6,
	map: null,
	cmarker: null,
	icons: {},
	layers: {},
	lang: {},
	clickHandlerActivated: false,

	initialize: function (div, lang, pos, dataurl, addregionurl) {
		this.lon = pos[0];
		this.lat = pos[1];
		this.zoom = pos[2];
		this.datapool = new FurryMap.DataPool(dataurl, "EPSG:900913", "EPSG:4326");
		this.addRegionUrl = addregionurl;
		this.lang = lang;
		this.initMap(div);
	},

	initMap: function (div) {
		OpenLayers.Lang.setCode('en');

		var lonLat = new OpenLayers.LonLat(this.lon, this.lat).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
		var zoom = this.zoom;

		this.map = new OpenLayers.Map(div, {
			controls: FurryMap.SmallVersion?
			[
				new OpenLayers.Control.NavToolbar(),
				new OpenLayers.Control.PanZoom()
			]:[
				//new OpenLayers.Control.KeyboardDefaults(),
				new OpenLayers.Control.NavToolbar(),
				new OpenLayers.Control.LayerSwitcher({activeColor: 'darkgreen'}),
				new OpenLayers.Control.PanZoomBar(),
				new FurryMap.Permalink(null, false, {displayProjection: new OpenLayers.Projection("EPSG:4326")}),
				new OpenLayers.Control.JumpBox(null, this.datapool, this.addRegionUrl)
			],
			maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
			numZoomLevels: 18,
			maxResolution: 156543,
			units: 'meters',
			projection: "EPSG:900913",
			center: lonLat,
			resolution: 156543 / Math.pow(2, zoom),
			theme: false
		});
		/* Loading Mapnik Layer from OpenStreetMaps */
		if (location.search.search(/reloadmap/) != -1) {
			var mapnik_layer = new OpenLayers.Layer.OSM.MapnikReload(this.lang.Streets, {buffer: 0});
		} else {
			var mapnik_layer = new OpenLayers.Layer.OSM.Mapnik(this.lang.Streets, {buffer: 0});
		}
		/* Loading Satelite Images from OpenAerialMap */
		/*var jpl_wms = new OpenLayers.Layer.WMS(this.lang.Satelite,
			"http://openaerialmap.org/wms/",
		  {layers: "world", projection: new OpenLayers.Projection("EPSG:4326")});*/
		/*var jpl_wms = new FurryMap.Layer.OpenAerialMap(this.lang.Satellite,
				"http://tile.openaerialmap.org/tiles/",
			  {layername: "openaerialmap-900913", type: "jpg", buffer: 0});
		jpl_wms.setVisibility(false);*/

		//var mymarker = this.lang["My Marker"];
		//this.layers[mymarker] = new OpenLayers.Layer.Markers(mymarker + '<img src="'+ OpenLayers.Util.getImagesLocation() + "marker_red.png" + '"/>');
		var size = new OpenLayers.Size(24, 24);
		var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
		var size16 = new OpenLayers.Size(16, 16);
		var offset16 = new OpenLayers.Pixel(-(size16.w / 2), -size16.h);
		this.icons.red = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_red.png", size, offset);
		this.icons.green = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_green.png", size, offset);
		this.icons.blue = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_blue.png", size, offset);
		this.icons.cyan = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_cyan.png", size, offset);
		this.icons.white = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_2.png", size, offset);
		this.icons.yellow = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_yellow.png", size, offset);
		this.icons.magenta = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "marker_magenta.png", size, offset);
		this.icons.con = new FurryMap.LightIcon(OpenLayers.Util.getImagesLocation() + "building.png", size16, offset16);

		this.clickControl = new FurryMap.Control.Click();
		this.clickControl.fmap = this;
		this.map.addControl(this.clickControl);
		this.clickControl.activate();

		this.map.addLayers([mapnik_layer/*, jpl_wms*/]);
		if (!FurryMap.SmallVersion) {
			var overview1 = new OpenLayers.Control.OverviewMap({
				layers: [
					new OpenLayers.Layer.OSM.Mapnik(this.lang.Streets, {buffer: 0})
				],
				size: new OpenLayers.Size(220, 110),
				mapOptions: {
					maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
					numZoomLevels: 18,
					maxResolution: 156543,
					units: 'meters',
					projection: "EPSG:900913",
					theme: false
				}
			});
			this.map.addControl(overview1);
			overview1.maximizeControl();
		}

		//var lonLat = new OpenLayers.LonLat(this.lon, this.lat).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
		//this.map.setCenter(lonLat, this.zoom);
		//this.map.addLayer(this.layers[mymarker]);
		//this.setLayerIndex(mymarker, 50);
	},

	clearLayer: function (layername) {
		if (this.layers[layername]) {
			this.map.removeLayer(this.layers[layername]);
			this.layers[layername] = false;
		}
	},

	setLayerIndex: function (layer, index) {
		if (this.layers[layer]) {
			this.layers[layer].realIndex = index;
			var layers = [];
			for (var l in this.layers) {
				if (this.layers[l].realIndex) {
					layers.push(this.layers[l]);
				}
			}
			layers.sort(function (a, b) {
				return a.realIndex - b.realIndex;
			});
			for (var i = 0; i < layers.length; i++) {
				this.map.setLayerIndex(layers[i], i);
			}
		}
	},


	/*addMarkers: function () {
		this.addMarkers2.apply(this, arguments);

		var object = {'scope': this, 'arg': arguments};
		var pe = new PeriodicalExecuter(function () {
			this.scope.addMarkers2.apply(this.scope, this.arg);
		}.bind(object), 5 * 60);
	},

	addMarkers2: function (layername, url, iconcolor, idx) {
		if (this.layers[layername] && this.layers[layername].location == url) {
			this.layers[layername].loaded = false;
			this.layers[layername].loadText();
		} else {
			this.clearLayer(layername);
			this.layers[layername] = new FurryMap.Layer.GeoJSON(layername, {
				location: url,
				projection: "EPSG:4326",
				eventListeners: {
					loadend: function () {
					},
					loadstart: function () {
					},
					loadcancel: function () {
					},
					scope: this
				}
			});
			this.layers[layername].icon = this.icons[iconcolor].clone();
			this.map.addLayer(this.layers[layername]);
			this.setLayerIndex(layername, idx);
		}
	},*/

	reloadMarkers: function (layername) {
		this.datapool.forceUpdate(null);
		/*if (this.layers[layername]) {
			this.layers[layername].loaded = false;
			this.layers[layername].loadText();
		}*/
	},

	templayers: [],

	updateLayer: function (layername) {
		if (!this.datapool.data[layername]) {
			return;
		}
		var tr_layername = this.datapool.data[layername].info.layername?this.datapool.data[layername].info.layername:layername;
		var layer_idx = this.datapool.data[layername].info.layerindex?this.datapool.data[layername].info.layerindex:0;
		var iconcolor = this.datapool.data[layername].info.iconcolor?this.datapool.data[layername].info.iconcolor:"white";
		if (!this.layers[layername]) {
			this.layers[layername] = new FurryMap.Layer.DataPool(tr_layername + '<img src="'+this.icons[iconcolor].url+'"/>', {
				datapool: this.datapool,
				datakey: layername,
				icon: this.icons[iconcolor].clone()
			});
			this.map.addLayer(this.layers[layername]);
			this.setLayerIndex(layername, layer_idx);
		}
		this.layers[layername].update();
	},

	addToDataPool: function (json) {
		var options = {};

		var parser = new OpenLayers.Format.JSON(options);
		var predata = parser.read(json);
		var layers = this.datapool.parseData(predata);
		for (var i = 0; i < layers.length; i++) {
			this.templayers.push(layers[i]);
		}
	},

	addMarkerTo: function (layername, lon, lat, zoom, iconcolor, idx, translation) {
		if (!this.layers[layername]) {
			this.layers[layername] = new OpenLayers.Layer.Markers(translation?translation:layername);
			this.map.addLayer(this.layers[layername]);
			this.setLayerIndex(layername, idx);
			this.templayers.push(layername);
		}
		var lonlat = new OpenLayers.LonLat(lon, lat).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));

		var marker = new FurryMap.ZoomMarker(lonlat, this.icons[iconcolor].clone(), zoom);
		this.layers[layername].addMarker(marker);
	},

	/*createPoolLayer: function(predata) {
		this.datapool.parseData(predata);
	},*/

	/*addMarkerFromPool: function (layername, id) {
		if (!this.datapool.data[layername]) {alert('no pool');
			return;
		}
		var tr_layername = this.datapool.data[layername].info.layername?this.datapool.data[layername].info.layername:layername;
		var layer_idx = this.datapool.data[layername].info.layerindex?this.datapool.data[layername].info.layerindex:0;
		var iconcolor = this.datapool.data[layername].info.iconcolor?this.datapool.data[layername].info.iconcolor:"white";
		if (!this.layers[layername]) {
			this.layers[layername] = new FurryMap.Layer.DataPool(tr_layername, {
				datapool: this.datapool,
				datakey: layername,
				icon: this.icons[iconcolor].clone()
			});
			this.map.addLayer(this.layers[layername]);
			this.setLayerIndex(layername, layer_idx);
			this.templayers.push(layername);
		}
		if (this.datapool.data['search'] && this.datapool.data['search'].features[id]) {

			this.datapool.data[layername].features[id] = this.datapool.data['search'].features[id];
		}
		this.layers[layername].update();
	},*/

	center: function (lon, lat, zoom) {
		if (zoom > 15) zoom = 15;
		var lonlat = new OpenLayers.LonLat(lon, lat).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
		this.map.zoomTo(zoom);
		var oldCHA = this.clickHandlerActivated;
		this.clickHandlerActivated = true;
		this.setMarker(lonlat, true);
		this.clickHandlerActivated = oldCHA;
		this.map.panTo(lonlat);
		//this.setMarker(lonlat);
	},

	setMarker: function (lonlat, vanish) {
		//var mymarker = this.lang["My Marker"];
		//if (this.cmarker) {
		//	this.layers[mymarker].removeMarker(this.cmarker);
		//}
		if (this.clickHandlerActivated) {
			this.cmarker = new OpenLayers.Marker(lonlat, this.icons.red.clone());
			//this.layers[mymarker].addMarker(this.cmarker);
			var lonlat2 = lonlat.clone().transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
			if (window.subwindow) {
				with (window.subwindow) {
					if ($('marker_longitude')) {
						$('marker_longitude').value = lonlat2.lon * 100000;
						$('marker_longitude_span').innerHTML = FurryMap.LonPrinter(lonlat2.lon);
						$('marker_latitude').value = lonlat2.lat * 100000;
						$('marker_latitude_span').innerHTML = FurryMap.LatPrinter(lonlat2.lat);
						$('marker_zoom').value = this.map.getZoom();
						if ($('marker_zoom_span')) {
							$('marker_zoom_span').innerHTML = this.map.getZoom();
						}
					}
					if ($('markers_by_distance')) {
						this.loadDistances();
					}
				}
			}
			if (vanish) {
				if (!this.vanishTween) {
					this.vanishTween = new OpenLayers.Tween(OpenLayers.Easing.Expo.easeInOut);
				}
				this.vanishTween.start({a: 1}, {a: 0}, 100, {
					callbacks: {
						start: OpenLayers.Function.bind(function(op) {
							this.cmarker.setOpacity(op.a);
						}, this),
						eachStep: OpenLayers.Function.bind(function(op) {
							this.cmarker.setOpacity(op.a);
						}, this),
						done: OpenLayers.Function.bind(function(op) {
							//if (this.cmarker) {
							//	this.layers[mymarker].removeMarker(this.cmarker);
							//}
						}, this)
					}
				});
			}
		}
	},

	distanceUrl: null,
	distanceOrder: 'asc',
	distanceLayout: 'marker',

	setDistanceUrl: function (url, order, layout) {
		this.distanceUrl = url;
		this.distanceOrder = order;
		this.distanceLayout = layout;
		this.dataage = 0;
	},

	data: null,
	dataage: 0,

	loadDistances: function () {
		if (this.datapool.data.distance) {
			this.data = [];
			for (var key in this.datapool.data.distance.features) {
				this.data.push(this.datapool.data.distance.features[key]);
			}
			this.calculateDistances();
		}
	},

	calculateDistances: function () {
		var pi180 = Math.PI / 180;
		if (window.subwindow) {
			with(window.subwindow) {
				var b1 = parseFloat($('marker_latitude').value) * pi180 / 100000;
				var l1 = parseFloat($('marker_longitude').value) * pi180 / 100000;
			}
		}
		var cb1 = Math.cos(b1);
		var sb1 = Math.sin(b1);

		for (var i = 0; i < this.data.length; i++) {
			var feature = this.data[i];
			var lonlat = new OpenLayers.LonLat(feature[0], feature[1]);
			/*var lonlat = OpenLayers.Projection.transform(
				{ x: feature.geometry.x, y: feature.geometry.y },
				this.map.getProjectionObject(),
				new OpenLayers.Projection("EPSG:4326"));*/
			var b2 = lonlat.lat * pi180;
			var l2 = lonlat.lon * pi180;
			var distance = Math.floor(Math.acos(cb1 * Math.cos(b2) * Math.cos(l1 - l2) + sb1 * Math.sin(b2)) * 6378300);
			this.data[i][8] = distance;
		}
		this.data.sort(function (a, b) {
			return a[8] - b[8];
		});
		if (this.distanceOrder === 'desc') {
			this.data.reverse();
		}
		this.redrawList();
	},

	redrawList: function () {
		if (window.subwindow) {
			with(window.subwindow) {
				var list = $('markers_by_distance');
			}
		}
		if (!list) {
			return;
		}
		list.innerHTML = "";
		for (var i = 0; i < Math.min(50,this.data.length); i++) {
			var feature = this.data[i];
			if (/*this.distanceLayout == 'marker' || feature.attributes.Home == '1'*/ true) {
				var lonlat = new OpenLayers.LonLat(feature[0], feature[1]);
				//lonlat.transform(this.map.getProjectionObject(), new OpenLayers.Projection("EPSG:4326"));
				var html = '<div style="line-height: 19px; cursor:pointer" id="distance_' + feature[2] + '" onclick="FurryMap.center(' + lonlat.lon + ', ' + lonlat.lat + ', ' + feature[4] /*.attributes.Zoom*/ + ')">';
				html +=	'<div style="padding:9px;"><a href="' + feature[6] /*.attributes.UserUrl*/ + '" id="useravatar_of_' + feature[2] + '"'+(feature[6].charAt(0)!='/'?' target="_blank"':'')+'>';
				if (feature[7] && feature[7] != 0 /*feature.attributes.HasAvatar*/) {
					html += '<img src="' + OpenLayers.Util.getImagesLocation() + '../avatar/' + feature[7] /*feature.attributes.UserId*/ + '.png" style="border: 1px solid #ffffff; float: left; margin-right:9px;" width="40" height="40"/>';
				} else {
					html += '<img src="' + OpenLayers.Util.getImagesLocation() + '../avatar/default.png" style="border: 1px solid #ffffff; float: left; margin-right:9px;" width="40" height="40"/>';
				}
				html += '</a>'+'<b style="float: right">' + Math.floor(feature[8] / 100) / 10 + ' km</b>' +  '<b><a href="' + feature[6] + '" id="user_of_' + feature[2] + '"'+(feature[6].charAt(0)!='/'?' target="_blank"':'')+'>' + feature[5] + '</a>' + (this.distanceLayout == 'marker' ? ': ' + feature[3] : '') + '</b><br />';
				html += '<small style="float: right">' + '<a href="http://maps.google.com/maps?f=d&mra=ls&daddr=' + lonlat.lat + ',' + lonlat.lon + '&z=' + feature[4] + '" target="_blank"><img src="' + OpenLayers.Util.getImagesLocation() + '../car.png" alt="Get route with Google Maps" title="Get route with Google Maps"></a>' + /*'<a href="' + feature.attributes.MarkerUrl + '" id="markerlink_' + feature.fid + '"'+(feature.attributes.MarkerUrl.charAt(0)!='/'?' target="_blank"':'')+'><img src="' + OpenLayers.Util.getImagesLocation() + '../link.png" alt="Link" title="Link"/></a>'*/ '</small><small>' + /*(this.distanceLayout == 'marker' ? */ FurryMap.LatPrinter(lonlat.lat) + ' ' + FurryMap.LonPrinter(lonlat.lon)/* :''/* feature.attributes.Furryspecies ? feature.attributes.Furryspecies + ', ' + feature.attributes.NumberofMarkers : feature.attributes.NumberofMarkers)*/ + '</small>';
				html += '</div><hr style="clear: both"/></div>';
				if (window.subwindow) {
					with (window.subwindow) {
						var div = document.createElement('div');
						div.innerHTML = html;
						list.appendChild(div);
					}
				}
			}
		}
	},

	setClickHandler: function (bool) {
		this.clickHandlerActivated = bool;
		//if (!bool) {
			//var mymarker = this.lang["My Marker"];
			//if (this.cmarker) {
			//	this.layers[mymarker].removeMarker(this.cmarker);
			//}
		//}
	},

	clearTempLayers: function () {
		for (var tl in this.templayers) {
			this.clearLayer(this.templayers[tl]);
		}
	}
});

FurryMap.Control = OpenLayers.Class();

FurryMap.Control.Click = OpenLayers.Class(OpenLayers.Control, {
	defaultHandlerOptions: {
		'single': true,
		'double': false,
		'pixelTolerance': 0,
		'stopSingle': false,
		'stopDouble': false
	},

	fmap: {},


	initialize: function (options) {
		this.handlerOptions = OpenLayers.Util.extend({}, this.defaultHandlerOptions);
		OpenLayers.Control.prototype.initialize.apply(
			this, arguments
		);
		this.handler = new OpenLayers.Handler.Click(this, {'click': this.trigger}, this.handlerOptions);

	},

	trigger: function (e) {

		var lonlat = this.fmap.map.getLonLatFromViewPortPx(e.xy);
		this.fmap.setMarker(lonlat);
		//alert("You clicked near " + lonlat.lat + " N, " + lonlat.lon + " E");
	}
});

OpenLayers.Util.extend(FurryMap, {
	DegPrinter: function (deg) {
		var x = deg < 0? "-": "";
		deg = Math.abs(deg);
		var a = Math.floor(deg);
		var b = Math.floor((deg - a) * 60);
		var c = Math.floor((deg - a - b / 60) * 36000) / 10;
		return x + a + "° " + b + "′ " + c + "″";
	},
	LonPrinter: function (lon) {
		return FurryMap.DegPrinter(lon) + " E";
	},
	LatPrinter: function (lat) {
		return FurryMap.DegPrinter(lat) + " N";
	},

	Minimizer: function () {
		var minimizer = $('bottom_minimizer');
		if (minimizer) {
			minimizer.onclick = function () {
				OpenLayers.Element.toggle('bottom_innercontent');
				if ($('bottom_minimizer').className == 'minimizer_button') {
					$('bottom_minimizer').className = 'maximizer_button';
				} else {
					$('bottom_minimizer').className = 'minimizer_button';
				}
				if ($('middle_scroller') && $('bottom_content')) {
					$('middle_scroller').style.bottom = ($('bottom_content').offsetHeight + 25) + "px";
				}
			};
		}
	}
});

/*
	prototype.js
*/
var PeriodicalExecuter = OpenLayers.Class({
	initialize: function (callback, frequency) {
		this.callback = callback;
		this.frequency = frequency;
		this.currentlyExecuting = false;

		this.registerCallback();
	},

	registerCallback: function () {
		this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
	},

	execute: function () {
		this.callback(this);
	},

	stop: function () {
		if (!this.timer) {
			return;
		}
		clearInterval(this.timer);
		this.timer = null;
	},

	onTimerEvent: function () {
		if (!this.currentlyExecuting) {
			try {
				this.currentlyExecuting = true;
				this.execute();
			} finally {
				this.currentlyExecuting = false;
			}
		}
	}
});

OpenLayers.Util.extend(Object, {
	clone: function (object) {
		return OpenLayers.Util.extend({}, object);
	}
});
