      jQuery(function($)
      {
        //zresetuj scrolla
        $.scrollTo(0);
        
        $('#link1').click(function() { $.scrollTo($('#uslugi'), 500); });
        $('#link2').click(function() { $.scrollTo($('#galeria'), 500); });
        $('#link3').click(function() { $.scrollTo($('#contact'), 500); });

        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });

      }
      );

      //pokaż podczas przewijania
		  $(window).scroll(function()
	  	{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn();
			else $('.scrollup').fadeOut();		
	  	}
	  	);