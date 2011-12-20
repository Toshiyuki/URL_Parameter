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
	
	//
	this.showProtocol = function(){
		return protocol;
	}
	
	//
	this.showDomain = function(){
		var domain = result[0];
		return domain;
	}
	
	//
	this.showFolder = function(){
		;
	}
	
	//
	this.showFile = function(){
		var file = result[result.length - 1];
		return file;
	}
	
	//
	this.showParameter = function(){
		;
	}
	
	
}