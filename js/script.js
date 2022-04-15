
$(document).ready(function(){

  $( "#h1_drag" ).draggable();

  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });

  $( "#resizable" ).resizable();

  $( "#selectable" ).selectable({
    stop: function() {
      var result = $( "#select-result" ).empty();
      $( ".ui-selected", this ).each(function() {
        var index = $( "#selectable li" ).index( this );
        result.append( " #" + ( index + 1 ) );
      });
    }
  });

  $( "#sortable" ).sortable();

  $( "#accordion" ).accordion({
    collapsible: true
  });





  var availableTags = [
    "Shikhbe Sobai",
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });


  $( "#datepicker" ).datepicker();

  $( "#menu" ).menu();


  $( "#slider" ).slider();

  $( "#tabs" ).tabs();


  var tooltips = $( "[title]" ).tooltip({
    position: {
      my: "left top",
      at: "right+5 top-5",
      collision: "none"
    }
  });
  $( "<button>" )
    .text( "Show help" )
    .button()
    .on( "click", function() {
      tooltips.tooltip( "open" );
    })
    .insertAfter( "form" );



    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#00aa0d",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 300
        }, 1000 );
      }
      state = !state;
    });





    function position() {
      $( ".positionable" ).position({
        of: $( "#parent" ),
        my: $( "#my_horizontal" ).val() + " " + $( "#my_vertical" ).val(),
        at: $( "#at_horizontal" ).val() + " " + $( "#at_vertical" ).val(),
        collision: $( "#collision_horizontal" ).val() + " " + $( "#collision_vertical" ).val()
      });
    }

    $( ".positionable" ).css( "opacity", 0.5 );

    $( "select, input" ).on( "click keyup change", position );

    $( "#parent" ).draggable({
      drag: position
    });

    position();

});
