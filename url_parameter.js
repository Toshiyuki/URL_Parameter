// JavaScript Document

function URL_Parameter(url) {
	this.url = url;
	
	var protocol = new Array();
	
	var g = /(https?|ftp):\/\//g;
	
	//protocol
  	if (url.match(g)) {
		protocol = url.match(g);
		this.url = url.replace(g,'');
	}
	
	this.protocol = protocol;
	
	var result = this.url.split("/");
	var result_p = this.url.split("?");
	var result_h = this.url.split("#");
	
	//
	this.showProtocol = function(){
		return protocol;
	}
	
	//
	this.showHost = function(){
		var domain = result[0];
		return domain;
	}
	
	//
	this.showFolder = function(){
		var result_array = new Array();
		
		for (i=1;i<result.length-1;i++){
			result_array.push(result[i]) ;
		}
		return result_array;
	}
	
	//
	this.showFile = function(){
		var file = result[result.length - 1];
		return file;
	}
	
	//
	this.showParameter = function(){
		return result_p[1];
	}
	
	//
	this.showHash = function(){
		return result_h[1];
	}
	
	
}