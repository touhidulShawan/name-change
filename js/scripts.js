$(".toggle_icon").click(function() {
  $(this).toggleClass("fas fa-eye-slash");
});

$("#testimonial").fadeIn("slow", function() {
  $("#testimonial")
    .delay(5000)
    .fadeOut();
});
