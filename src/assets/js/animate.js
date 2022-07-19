$(document).mousemove(function (e) {
  $("#cursor").css({
    transition: "0.08s",
    display: "block",
    left: e.clientX + "px",
    top: e.clientY + "px",
  });
  $("#dot").css({
    transition: "0.03s",
    display: "block",
    left: e.clientX + "px",
    top: e.clientY + "px",
  });
});

$(document).mouseenter(function () {
  $("#cursor").css("display", "block");
  $("#dot").css("display", "block");
});

$(document).mouseleave(function () {
  $("#cursor").css("display", "none");
  $("#dot").css("display", "none");
});

$(document).mousedown(function () {
  $("#cursor").css({
    transition: "0.1s",
    transform: "translateX(-50%) translateY(-50%) scale(2)",
    borderWidth: "1.5px",
  });
});

$(document).mouseup(function () {
  $("#cursor").css({
    transition: "0.1s",
    transform: "translateX(-50%) translateY(-50%) scale(1)",
    borderWidth: "2px",
  });
});

$(".name,.link,.logo, .menu-icon, li, .next-project").hover(
  function () {
    // over
    $("#cursor").css({
      backgroundColor: "rgb(243, 242, 249)",
      opacity: "1",
      transform: "translateX(-50%) translateY(-50%) scale(2)",
    });
    $("#dot").css({
      opacity: "0",
    });
  },
  function () {
    // out
    $("#cursor").css({
      backgroundColor: "rgba(0, 0, 0, 0)",
      opacity: "1",
      transform: "translateX(-50%) translateY(-50%) scale(1)",
    });
    $("#dot").css({
      opacity: "1",
    });
  }
);

$(".next-project")
  .mouseenter(function () {
    $(".next-project-selected").css({
      transform: "none",
    });

    $(".next-project-title").css({
      transform: "translateX(24px) translateZ(0)",
    });
  })
  .mouseleave(function () {
    $(".next-project-selected").css({
      transform: "translateX(-101%) translateZ(0)",
    });

    $(".next-project-title").css({
      transform: "none",
    });
  });

$(".link-wrapper").hover(
  function () {
    $(".link-underline", this).css({
      transform: "none",
    });
  },
  function () {
    $(".link-underline", this).css({
      transform: "translateX(-101%) translateZ(0)",
    });
  }
);
