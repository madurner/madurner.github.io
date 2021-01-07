/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Initialize Popover (https://getbootstrap.com/docs/3.4/javascript/)
    //$("[data-toggle=popover]").popover();
    $("[data-toggle=popover]").popover({html:true});
    //$('[data-toggle="popover"]').popover({
    //html : true,
    //content : function() {
    //    return loadContent($(this).data('templatefile'))
    //}

    //$('#citeModal').on('show.bs.modal', function (event) {
    //    var button = $(event.relatedTarget) // Button that triggered the modal
    //    var file_contents = button.data('filecontents') // Extract info from data-* attributes
    //    var modal = $(this)
    //      modal.find('.modal-body').html(file_contents)
    //})

    $('#citeModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('filecontents') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').text(recipient)
    });

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('filename') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        //modal.find('.modal-body').text(recipient)

        var modal = $(this)
          modal.find('.modal-body').html('cite.txt')

        //jQuery.get('{% static 'cite.txt' %}',function readFile(data)
        //{
        //  modal.find('.modal-body').text(data)
        //  //$('#outputText').val(data);
        //  console.log(data);
        //});

    });




})(jQuery); // End of use strict


