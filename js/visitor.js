"use strict";!function(){function t(t){this.init(t)}t.prototype={init:function(t){this.user="99297735@N08",this.album=t,window.getPhotos=this.getPhotos,this.getJSON()},getJSON:function(){var t="http://api.flickr.com/services/feeds/photoset.gne?nsid="+this.user+"&set="+this.album+"&format=json&jsoncallback=getPhotos",e=document.createElement("script");e.src=t,document.body.appendChild(e)},getPhotos:function(t){if(t&&t.items){var e=t.title,i=t.items,n=e.replace("Content from ",""),o="<h3>"+n+"</h3>";o+='<div class="images">';for(var s=0;s<i.length;++s){var a=i[s];s+1<=20&&(o+="<a href='"+a.link+"'><img src='"+a.media.m+"' alt='' /></a>")}o+="</div>",$("#flickr").append(o)}}},document.addEventListener("DOMContentLoaded",function(){for(var e=["72157685589705403","72157687913102776","72157685500115704","72157687912925586","72157687912856006","72157687912777906","72157685589198003","72157685589105953","72157685589034673","72157684442594632","72157685200126141","72157685448752440","72157681597863776","72157679740848361","72157679984374820","72157678267625034","72157681597520836","72157681696017195","72157679747210280","72157677975151564","72157681341413016","72157634761192594","72157634761074590","72157634754446793","72157634754429565","72157634754395253","72157634754362753","72157634754323859","72157634760822780","72157634760758816"],i=0;i<e.length;i++){new t(e[i])}})}();