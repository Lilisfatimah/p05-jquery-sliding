$(document).ready(function () {
    $("#tombol").click(function () {
      $("#tombol").toggleClass("belum-terbuka")
      $("#tombol").toggleClass("terbuka")
      $(".sliding").slideToggle("slow");
    });
  });