var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

console.log("custom script charge")

var dict = {
  "H2" : "5%",
  "H3" : "10%",
  "H4" : "15%",
  "H5" : "20%",
  "H6" : "25%",
  "H7" : "30%"
};


$('article').children().each(function () {
//alert($(this).prev().prop('nodeName'));
	if ( ["H2","H3","H4","H5","H4"].includes($(this).prop('nodeName')) ){
      		if (typeof toggle !== 'undefined'){
      			$(this).css("margin-left",dict[toggle]);
      		}
      		toggle=$(this).prop('nodeName')
    	}
    	else if (typeof toggle !== 'undefined'){
    		$(this).css("margin-left",dict[toggle]);
    	}
});
