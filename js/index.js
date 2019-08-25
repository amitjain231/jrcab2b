$.mobile.defaultPageTransition  = "slide";		// default is fade , pop
var globalPhotoViewerObject = {};
var globalhiddenpricecount = 0;

$(document).on('vclick', 'img', function(e) {
	e.preventDefault();

	let jsLaunch 			= $(this).data("launch");
	let jsNavToPage , jsKey;
	let jsTitle , jsSrc , jsWeight , jsPrice;
	let items =[];
	let options ={};

	switch(jsLaunch) {
		case "PAGENAVIGATION":			
			jsNavToPage 		= $(this).data("navtopage");
			jsKey 					= $(this).data("key");
			if( jsNavToPage != "" && jsKey != "") {
				$.mobile.navigate( jsNavToPage );
			}
		break;

		case "MENUNAVIGATION":			
			jsNavToPage 		= $(this).data("navtopage");
			if( jsNavToPage != ""  ) {
				$.mobile.navigate( jsNavToPage );
			}

		case "PRODUCTDETAIL":
			jsNavToPage 		= $(this).data("navtopage");
			jsKey 					= $(this).data("key");
			jsSrc						= $(this).data("src");
			jsWeight				= $(this).data("wt");
			jsPrice					= $(this).data("price");
			// Initializa count
			globalhiddenpricecount = 0;
			$(".cl_tr_proddetail_bhav").css({"display":"none"});

			if( jsNavToPage != "" && jsKey != "") {				
				$.mobile.navigate( jsNavToPage );
			}
		break;

		case "SHOWBHAV":			
			globalhiddenpricecount++;
			if( globalhiddenpricecount == 3 ) {
				$(".cl_tr_proddetail_bhav").css({"display":"table-row"});				
			}
			if( globalhiddenpricecount == 4 ){
				$(".cl_tr_proddetail_bhav").css({"display":"none"});
				globalhiddenpricecount = 0;
			}
		break;
			
		case "SHOWIMAGE":
			jsTitle	= $(this).data("title");
			jsSrc 	= $(this).data("src");
			jsWeight 	= $(this).data("wt");

			// Close if any
			if(typeof globalPhotoViewerObject === "object" && globalPhotoViewerObject.isOpened) {
				globalPhotoViewerObject.close();
			}

			if( jsTitle.substring(0,2) == "NK" ) {
				items = [
				    {
				        title: "NK101 (26.255 gms)",
				        src: "http://localhost:9010/public/jrca/images/productcatalog/cat_neck/NK101.jpg"
				    }

				];	
			
				// Define options (if needed)
				options = {
				    index: 0 			// this option means you will start at first image
				};

				// Initialize the plugin and assign it to global object
				globalPhotoViewerObject = new PhotoViewer( items, options);	
			}
			else if( jsTitle.substring(0,2) == "CH" ) {

			}
		break;

		case "GALLERY":
			jsTitle	= $(this).data("title");
			jsSrc 	= $(this).data("src");
			jsWeight 	= $(this).data("wt");

			// Close if any
			if(typeof globalPhotoViewerObject === "object" && globalPhotoViewerObject.isOpened) {
				globalPhotoViewerObject.close();
			}

			if( jsTitle.substring(0,2) == "NK" ) {
				items = [
				    {
				        title: "NK101 (26.255 gms)",
				        src: "http://localhost:9010/public/jrca/images/productcatalog/cat_neck/NK101.jpg"
				    },
				    {
				        title: "NK102 (24.100 gms)",
				        src: "http://localhost:9010/public/jrca/images/productcatalog/cat_neck/NK102.jpg"
				    },
				    {
				        title: "NK103 (22.652 gms)",
				        src: "http://localhost:9010/public/jrca/images/productcatalog/cat_neck/NK103.jpg"
				    },
				    {
				        title: "NK104 (28.245 gms)",
				        src: "http://localhost:9010/public/jrca/images/productcatalog/cat_neck/NK104.jpg"
				    },
				    {
				        title: "NK105 (25.250 gms)",
				        src: "http://localhost:9010/public/jrca/images/productcatalog/cat_neck/NK105.jpg"
				    },
				    {
				        title: "NK106 (32.211 gms)",
				        src: "http://localhost:9010/public/jrca/images/productcatalog/cat_neck/NK106.jpg"
				    }

				];	

				let jsIndex =0;
				if( jsTitle === "NK01"){
					jsIndex = 0;
				}
				else if ( jsTitle === "NK02" ){
					jsIndex = 1;
				}
				else if ( jsTitle === "NK03" ){
					jsIndex = 2;
				}
				else if ( jsTitle === "NK04" ){
					jsIndex = 3;
				}
				else if ( jsTitle === "NK05" ){
					jsIndex = 4;
				}
				else if ( jsTitle === "NK06" ){
					jsIndex = 5;
				}

				else {
					// Fallback
					jsIndex = 0;	
				}				
				// Define options (if needed)
				options = {
				    index: jsIndex 			// this option means you will start at first image
				};

				// Initialize the plugin and assign it to global object
				globalPhotoViewerObject = new PhotoViewer( items, options);	
			}
			else if( jsTitle.substring(0,2) == "CH" ) {

			}

		break;

		default:

		break;
	}

	

	/*
	var jsVarPrevDefault;
	var jsPopId;
	
	jsPopId = "";
	jsVarPrevDefault = false;
	switch(this.id)
	{
		
		case "id_a_vb_booking":
			jsPopId = "myPopupBooking";	
			jsVarPrevDefault = true;
		break;
		case "id_a_vb_contact":
			jsPopId = "myPopupContact";	
			jsVarPrevDefault = true;
		break;
		case "id_a_vb_rtgs":
			jsPopId = "myPopupRTGS";
			jsVarPrevDefault = true;
		break;
		case "id_div_updateapp":
			jsPopId = "UpdateApppopup";
			jsVarPrevDefault = true;
		break;
		
	}
	
	
	
	// Launch PopUP
	if( jsPopId != "" )
	{
		// Prevent Default behavior
		if(jsVarPrevDefault == true)
		{
			
		}
		
		// Launch animated popup
		$( "#" + jsPopId ).addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function(){
			$(this).removeClass("animated zoomIn");
		});
		
		$( "#" + jsPopId  ).popup( "open" );
		
		
	}	

	*/	
			
});