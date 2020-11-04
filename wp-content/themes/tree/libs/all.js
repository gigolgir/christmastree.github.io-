//document.getElementsByTagName("body")[0].oncontextmenu = function(e){ e.preventDefault();}




     $(document).ready(function() {
        
        $('html').addClass('no-overflow-y');
        setHeightRadioHandlrs();

        if (document.documentElement.clientWidth > 1200) {
            //$('audio').html('<source src="/wp-content/themes/tree/fonts/JingleBell.mp3" type="audio/mpeg">');
        };

        jQuery('.make-order-button').on('click', function(){
            var title = jQuery(this).attr('data-title');

            var size = jQuery(this).attr('data-size');
            if ( size ) title += ' - ' + size;

            jQuery('#modal-window input[name=_whatform]').val( title );
        });
    });


  
    
     
    if (document.documentElement.clientWidth > 1200) {
         new WOW().init();
    
    };  

    $( ".play" ).click(function() {
        $( ".play" ).css( "display", "none");
        $( ".pause" ).css("display", "block");
    });
    $( ".pause" ).click(function() {
        
        $( ".pause" ).css("display", "none");
        $( ".play" ).css("display", "block");
    });






    var position = $("#better").offset();
    $(document).scroll(function () {
        if ( position ){
            var y = $(this).scrollTop();
            if (y >= position.top) {
                $(".up").fadeIn(300);
            } else {
                $(".up").fadeOut(300);
            }
        }
    });

    var position = $("#better").offset();
    $(document).scroll(function () {
        if ( position ){
            var y = $(this).scrollTop();
            if (y >= position.top) {
                $("#scroll-block").fadeIn(300);
            } else {
                $("#scroll-block").fadeOut(300);
            }
        }
    });



// Елки  Елки Елки Елки Елки Елки Елки
 function setHeightRadioHandlrs(){
    $('.swiper-slide .radio').click(function(){
        var formClass = $(this).parents('.swiper-slide').data('form');
        $('.' + formClass + ' input[name="_whatform"]').val($(this).val());

        var parent = $(this).parents('.swiper-slide');
        var price = $(this).data('price');
        var size = $(this).parent().find('label').html();
        var size_slug = $(this).data('size_slug');

        parent.find('h4').html( price );
        parent.find('.add-to-cart-button').attr( 'data-price', price );
        parent.find('.add-to-cart-button').attr( 'data-size', size );
        parent.find('.make-order-button').attr( 'data-size', size );
        parent.find('.add-to-cart-button').attr( 'data-size_slug', size_slug );
    })
 }
// Елки  Елки Елки Елки Елки Елки Елки












        // product product      product product      product product      product product      product product      product product      product product
    var swiper = new Swiper('.swiper-product_', {
        // pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        simulateTouch: false,
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 600,
        loop: false,
        // centeredSlides: true,

        breakpoints: {

                767: {
                  slidesPerView: 1, 
                  simulateTouch: true,
                  spaceBetween: 30,
                                  
                },
                // when window width is <= 480px
                991: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                  centeredSlides: false,
                },
                1199: {
                  slidesPerView: 2,
                  spaceBetween: -20,
                },
                
                
                
            }
    });

// -------------------------------------------------------
    $( ".product-1-next" ).click(function() {
      $( ".product-1 .swiper-button-next" ).click();

    });
    $( ".product-1-prev" ).click(function() {
      $( ".product-1 .swiper-button-prev" ).click();
    });
// -------------------------------------------------------
     $( ".product-2-next" ).click(function() {
      $( ".product-2 .swiper-button-next" ).click();

    });
    $( ".product-2-prev" ).click(function() {
      $( ".product-2 .swiper-button-prev" ).click();
    });
// -------------------------------------------------------

    $( ".product-3-next" ).click(function() {
      $( ".product-3 .swiper-button-next" ).click();

    });
    $( ".product-3-prev" ).click(function() {
      $( ".product-3 .swiper-button-prev" ).click();
    });
// -------------------------------------------------------
 $( ".product-4-next" ).click(function() {
      $( ".product-4 .swiper-button-next" ).click();

    });
    $( ".product-4-prev" ).click(function() {
      $( ".product-4 .swiper-button-prev" ).click();
    });



// product product      product product      product product      product product      product product      product product      product product

  
    $(".fancy-gallery").fancybox({
        // hideOnOverlayClick : true,
        speedOut : 300,
        speedIn : 300,
        changeSpeed : 100,
        effect:'fade',
        prevEffect : 'fade',
        nextEffect : 'fade',
        'scrolling' : 'yes',
        'titlePosition' : 'over',
        'showNavArrows' :  true,
        arrows : true
    });



   // product product      product product      product product      product product      product product      product product      product product
    
   














    var swiper = new Swiper('.swiper-reviews', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        speed: 600,
        loop: true,
        // effect: 'fade'
        // autoplay: 6000
        breakpoints: {

                767: {
                  spaceBetween: 30,
                                  
                },
                // when window width is <= 991px
                991: {
                  spaceBetween: 0,
                },
                
                
                
            }
        
    });


    // $(function() {
    //     $( "#accordion" ).accordion();
    //   });

    
// jQuery('.btn-product').click();
    
//     $( "#modal-recieve-form" ).validate({
            
//         submitHandler: function() {
//             var th = $(".main-form");
//             $.ajax({
//                 type: "POST",
//                 url: "/wp-admin/admin-ajax.php", //Change
//                 data: th.serialize()
//             }).done(function(data){
//                 var inst = $('[data-remodal-id=modal-thanks]').remodal();
//                 inst.open();

//                 if ( data == 'cart' ){
//                     itemsInCart = {};
//                     refreshCart();

//                     jQuery('.order-items-list').html('');

//                     setTimeout(function(){
//                         location.replace('/');
//                     }, 4000);
//                 }

//                 setTimeout(function() {
//                     // Done Functions
//                     th.trigger("reset");
//                 }, 1000);
//             });
//             return false;       
//         }
//     });
//     $( ".main-form-quick" ).validate({
//         submitHandler: function( form ) {
//             var th = $(form);
//             $.ajax({
//                 type: "POST",
//                 url: "/wp-admin/admin-ajax.php", //Change
//                 data: th.serialize()
//             }).done(function(data) {
//                 var inst = $('[data-remodal-id=modal-thanks]').remodal();
//                 inst.open();

//                 setTimeout(function() {
//                     // Done Functions
//                     th.trigger("reset");
//                 }, 1000);
//             });
//             return false;       
//         }
//     });

    jQuery(function($){
        $("input[type=tel]").mask("+7 999 999-99-99"); 
    }); 




function initMap() {
if ( document.getElementById("google-map") ){
  var latlng = new google.maps.LatLng(49.9997976,36.2983513);
        var settings = {
          zoom: 17,
          center: latlng,
          mapTypeControl: true,
          mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
          scrollwheel: false,
          disableDoubleClickZoom: true,
          navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
          mapTypeId: google.maps.MapTypeId.ROADMAP,
   
              
      };
    var map = new google.maps.Map(document.getElementById("google-map"), settings);
    var myLatlng = new google.maps.LatLng(49.9997976,36.2983513);
    
    var myOptions = {
      zoom: 17,
      center: myLatlng,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
        var image = '/wp-content/themes/tree/images/pointer.png';
      var beachMarker = new google.maps.Marker({
        position: {lat: 49.9997976, lng: 36.2983513},
        map: map,
        icon: image
        // title: 'Push-k Solutions'
      });
    }
}


    
    $(function(){
       $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
            return false; 
       });

       loadCart();

        jQuery('.add-to-cart-button').on('click', function(event){
            event.preventDefault();

            var size = jQuery(this).attr('data-size');
            var sizeSlug = jQuery(this).attr('data-size_slug');

            var slug = jQuery(this).attr('data-slug') + ( sizeSlug ? '____' + sizeSlug : '' );
            var title = jQuery(this).attr('data-title') + ( size ? ' (' + size + ')' : '' );
            var price = jQuery(this).attr('data-price');

            var count = 1;
            var orderItemCount = jQuery('#order-item-count');
            if ( orderItemCount.length ) count = Number( orderItemCount.val() );

            addItemToCart( slug, title, price, count );

            var inst = $('[data-remodal-id=modal-to-order]').remodal();
            inst.open();
        });

        jQuery('#payment-method button').on('click', function(){
            jQuery('#payment-method button').removeClass('active');
            jQuery(this).addClass('active');

            jQuery('#payment-input').val( jQuery(this).find('p').html() );
        });
    });



    function getCookie(name){
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        value = encodeURIComponent(value);
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    
    var itemsInCart = [];
    function addItemToCart( slug, title, price, count ){
        if (
            itemsInCart[ slug ]
            && itemsInCart[ slug ].count
        ) itemsInCart[ slug ].count = Number( itemsInCart[ slug ].count ) + Number( count );
        else itemsInCart[ slug ] = { title: title, price: price, count: count };

        refreshCart();
    }
    function removeItemFromCart( slug, _button ){
        delete itemsInCart[ slug ];
        refreshCart();

        if ( _button ) jQuery(_button).parents('.swiper-slide').first().remove();
    }
    function loadCart(){
        var cart = getCookie('cart');
        if (
            !cart
            || cart[0] != '{'
            || cart.slice(-1) != '}'
        ) cart = '{}';
        
        itemsInCart = JSON.parse( cart );
        refreshCart();
    }
    function refreshCart(){
        var items = [];
        var allItems = {};
        var count = 0;
        var itemsCount = 0;
    
        jQuery('.add-to-cart').removeClass('V_K');
        for (var i in itemsInCart){
            if ( itemsInCart[i] ){
                var itemCount = Number( itemsInCart[i].count );
                itemsCount += itemCount;

                count += parseFloat( itemsInCart[i].price.replace(/\s/, '') ) * itemCount;
                items.push(
                    '<p class="title__p">' 
                        + itemsInCart[i].title + ' <span>' + itemsInCart[i].price + ' x ' + itemCount + '</span>'
                        + '<img src="https://kamin.push-k.ooo/wp-content/themes/kamin/images/delet.png" alt="delet" class="delet" onclick="removeItemFromCart(\'' + i + '\', this)">'
                    + '</p>'
                );
                allItems[ i ] = {
                    title: itemsInCart[i].title,
                    price: itemsInCart[i].price,
                    count: itemCount
                };
                
                jQuery('.add-to-cart[data-slug=' + i + ']').addClass('V_K');
            }
        }
        jQuery('#cart-items-list').html( items.join('') );
    
        var _count = count.toString();
        var amount = '';
        while ( _count ){
            amount = _count.slice(-3) + ' ' + amount;
            _count = _count.slice(0, -3);
        }
        jQuery('#cart-ammount').html(amount);
    
        var cartText = !count ? "корзина пустая" : amount + " грн.";
        jQuery('.all_price').html( cartText );
        

        var jsonCart = JSON.stringify( allItems );
    
        jQuery('#all-items').val( jsonCart );
        
        setCookie( 'cart', jsonCart, 32 );
        jQuery('#cart-input').val( jsonCart );
    }


/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

   
   