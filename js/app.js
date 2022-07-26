$(document).ready(function(){
    // console.log("hiii");


    // Start Back to top

        $(".btn-backtotops").hide();
        $(window).scroll(function(){
            let getscrolltop = $(this).scrollTop();
            // console.log(getscrolltop);

            if(getscrolltop >= 370){
                $(".btn-backtotops").fadeIn(1000);
            }else{
                $(".btn-backtotops").fadeOut(1000);
            }
        });

    // End back to top




    // Start Header

        $('.navbuttons').click(function(){
            $(".navbuttons").toggleClass("crossxs");
        });

        // for nav
        $(window).scroll(function(){
            let getscrolltop = $(this).scrollTop();
            console.log(getscrolltop);

            if(getscrolltop >= 200){
                $(".navbar").addClass("navmenus");
            }else{
                $(".navbar").removeClass("navmenus");
            }
        });

    // End Header

    /*Start Properties*/

        // for active item
        $(".propertylists").click(function(){
            // $(this).addClass("activeitems").siblings().removeClass("activeitems");
            $(this).addClass("activeitems");
            $(this).siblings().removeClass("activeitems");


            // for filter

            let getattvalue = $(this).attr("data-filter");
            console.log(getattvalue);

            if(getattvalue === "all"){
                $(".filters").show("slide",1000);
            }else{
                $('.filters').hide();
                $('.filters').not("."+getattvalue).hide("slide",1000);
                $(".filters").filter("."+getattvalue).show("slide",1000);
            }

        });

        // for image overlay or lightbox2
        // lightbox.option({
        //     showImageNumberLabel:false
            
        // });

    /*End Properties*/


    // Start Adv Section

    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 900){
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else{
             $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");
        }


    })

    // End Adv Section

    // Start Footer Section

    const getyear = $("#getyear");
    const getfullyear = new Date().getUTCFullYear();
    getyear.text(getfullyear);

    // End Footer Section




});