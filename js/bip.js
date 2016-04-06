// buttons
$(function(){
  $(".uibutton").click(function(e){
    e.preventDefault();
             $(".uibutton").addClass("active").not(this).removeClass("active"); 
  });
});


// external js: isotope.pkgd.js
$( document ).ready( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});

var viz, workbook;

window.onload=function() {
    var vizDiv = document.getElementById('viz');
    var vizURL = 'https://dataviz.usfca.edu/#/views/FacultyUnitAnalysis/CollegeComparisonOverall/';
    var options = {
        width: '90%',
        height: 'auto',
        hideToolbar: false,
        hideTabs: false
    }
viz = new tableauSoftware.Viz(vizDiv,vizURL, options);
}


        function initViz() {
            var containerDiv = document.getElementById("vizContainer"),
                url = "https://dataviz.usfca.edu/#/views/FacultyUnitAnalysis/CollegeComparisonOverall",
                options = {
                    hideTabs: true,
                    onFirstInteractive: function () {
                        console.log("Run this code when the viz has finished loading.");
                    }
                };
            
            var viz = new tableau.Viz(containerDiv, url, options); 
            // Create a viz object and embed it in the container div.
        }


//search 

    $(function () {
    function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
        $form.find('input').val('');
      $form.removeClass('active');
    }

    // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
    $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
      event.preventDefault();
      var $form = $(this).closest('form'),
        $input = $form.find('input');
      $form.addClass('active');
      $input.focus();
    });
    // ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
    // if your form is ajax remember to call `closeSearch()` to close the search container
    $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
      event.preventDefault();
      var $form = $(this).closest('form'),
        $input = $form.find('input');
      $('#showSearchTerm').text($input.val());
            closeSearch()
    });
    });
