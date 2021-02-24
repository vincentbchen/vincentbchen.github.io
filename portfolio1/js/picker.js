$(".picker .thumbstrip img").on("click",function(){
		var oldsrc = $(this).attr("src");
	  
		$(this).closest(".picker")
	  	.find(".main-image img").attr({src:oldsrc});
	})

	// $(".simple .thumbstrip img").on("click",function(){
	// 	var title = $(this).attr("alt");
	  
	// 	$(this).closest(".picker")
	//   	.find("h2").html(title)
	//     .next(".main-image").children("img").attr({alt:title});
	// })



	$(".picker1 .thumbstrip1 img").on("click",function(){
		var oldsrc = $(this).attr("src");
	  
		$(this).closest(".picker1")
	  	.find(".main-image1 img").attr({src:oldsrc});
	})

	// $(".simple .thumbstrip1 img").on("click",function(){
	// 	var title = $(this).attr("alt");
	  
	// 	$(this).closest(".picker1")
	//   	.find("h2").html(title)
	//     .next(".main-image1").children("img").attr({alt:title});
	// })



	$(".picker .thumbstrip2 img").on("click",function(){
		var oldsrc = $(this).attr("src");
	  
		$(this).closest(".picker")
	  	.find(".main-image2 img").attr({src:oldsrc});
	})


	$(".picker .thumbstrip3 img").on("click",function(){
		var oldsrc = $(this).attr("src");
	  
		$(this).closest(".picker")
	  	.find(".main-image3 img").attr({src:oldsrc});
	})


