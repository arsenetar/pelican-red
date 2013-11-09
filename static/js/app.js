// Javascript loaded via modernizr.load (aka yepnopejs )

// Find the baseURL
var baseURL = '';
var scripts = document.getElementsByTagName('script');
for( var i = 0, l = scripts.length; i < l; i++ ){
  if(scripts[i].src.indexOf('modernizr') >= 0)
    baseURL = scripts[i].getAttribute('data');
}

yepnope.errorTimeout = 3000; // set 3 second error timeout instead of 10

function ready(){
    // Hack to fix .codehilitetable overflow
    $('.codehilitetable').wrap('<div class="codehilitewrapper">');
    // Hack to make images more responsive and wrap with .th class
    $('#main article img').each( function() {
      $(this).css({'height': '', 'width': ''});
      $(this).wrap('<a class="th" href="'+$(this).attr('src')+'" style="max-width:'+Math.min(this.naturalWidth, 770)+'px">');
    });
};

// zeptojs or jquery
Modernizr.load([{
  test: '__proto__' in {},
  yep: 'http://cdn.jsdelivr.net/foundation/4.3.2/js/vendor/zepto.js',
  nope: 'http://cdn.jsdelivr.net/jquery/1.10.2/jquery-1.10.2.min.js',
  complete: function() {
    if( !window.jQuery && !window.Zepto )
        Modernizr.load([{
            test: '__proto__' in {},
            yep: baseURL+'zepto.min.js',
            nope: baseURL+'jquery.min.js',
        }])
  }
},

// Foundation
{ 
  load: 'http://cdn.jsdelivr.net/foundation/4.3.2/js/foundation.min.js',
  complete: function(){
    if(!window.Foundation)
      Modernizr.load([{
        load: baseURL+'foundation.min.js',
        complete: function() { 
          $(document).foundation()
          ready()
        },
      }]);
    else {
      $(document).foundation()
      ready()
    }
  }
},
]);

