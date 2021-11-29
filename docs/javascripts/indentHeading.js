console.log("custom script charge")

var dict = {
  "H1" : "1%",
  "H2" : "5%",
  "H3" : "10%",
  "H4" : "15%",
  "H5" : "20%",
  "H6" : "25%",
  "H7" : "30%"
};

var styles = `
    h2 { 
   	margin-left: 1%;
    }
    h3 { 
   	margin-left: 5%;
    }
    h4 { 
   	margin-left: 10%;
    }
    h5 { 
   	margin-left: 15%;
    }
    h6 { 
   	margin-left: 20%;
    }
    
`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)



$('article').children().each(function () {
//alert($(this).prev().prop('nodeName'));
	if ( ["H2","H3","H4","H5","H4"].includes($(this).prop('nodeName')) ){
      		//if (typeof toggle !== 'undefined'){
      		//	$(this).css("margin-left",dict[toggle]);
      		//}
      		toggle=$(this).prop('nodeName')
    	}
    	else if (typeof toggle !== 'undefined'){
    		$(this).css("margin-left",dict[toggle]);
    	}
});
