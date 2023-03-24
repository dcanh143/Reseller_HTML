/* Aside & Navbar: dropdowns */

Array.from(document.getElementsByClassName("dropdown")).forEach((elA) => {
  elA.addEventListener("mouseenter", (e) => {
    if (e.currentTarget.classList.contains("navbar-item")) {
      e.currentTarget.classList.toggle("active");
    }
  });
  elA.addEventListener("mouseleave", (e) => {
    if (e.currentTarget.classList.contains("navbar-item")) {
      e.currentTarget.classList.remove("active");
    }
  });
  elA.addEventListener("click", (e) => {
    if (!e.currentTarget.classList.contains("navbar-item")) {
      const dropdownIcon = e.currentTarget.getElementsByClassName("mdi")[1];

      e.currentTarget.parentNode.classList.toggle("active");
      dropdownIcon.classList.toggle("mdi-plus");
      dropdownIcon.classList.toggle("mdi-minus");
    }
  });
});

/* Aside Mobile toggle */

Array.from(document.getElementsByClassName("mobile-aside-button")).forEach(
  (el) => {
    el.addEventListener("click", (e) => {
      const dropdownIcon = e.currentTarget
        .getElementsByClassName("icon")[0]
        .getElementsByClassName("mdi")[0];

      document.documentElement.classList.toggle("aside-mobile-expanded");
      dropdownIcon.classList.toggle("mdi-forwardburger");
      dropdownIcon.classList.toggle("mdi-backburger");
    });
  }
);

/* NavBar menu mobile toggle */

Array.from(document.getElementsByClassName("--jb-navbar-menu-toggle")).forEach(
  (el) => {
    el.addEventListener("click", (e) => {
      const dropdownIcon = e.currentTarget
        .getElementsByClassName("icon")[0]
        .getElementsByClassName("mdi")[0];

      document
        .getElementById(e.currentTarget.getAttribute("data-target"))
        .classList.toggle("active");
      dropdownIcon.classList.toggle("mdi-dots-vertical");
      dropdownIcon.classList.toggle("mdi-close");
    });
  }
);

/* Modal: open */

Array.from(document.getElementsByClassName("--jb-modal")).forEach((el) => {
  el.addEventListener("click", (e) => {
    const modalTarget = e.currentTarget.getAttribute("data-target");

    document.getElementById(modalTarget).classList.add("active");
    document.documentElement.classList.add("clipped");
  });
});

/* Modal: close */

Array.from(document.getElementsByClassName("--jb-modal-close")).forEach(
  (el) => {
    el.addEventListener("click", (e) => {
      e.currentTarget.closest(".modal").classList.remove("active");
      document.documentElement.classList.remove("is-clipped");
    });
  }
);

/* Notification dismiss */

Array.from(
  document.getElementsByClassName("--jb-notification-dismiss")
).forEach((el) => {
  el.addEventListener("click", (e) => {
    e.currentTarget.closest(".notification").classList.add("hidden");
  });
});

/* Chọn tạo tiến trình */
Array.from(document.getElementsByClassName("btn-tao-tien-trinh")).forEach(
  (elA) => {
    elA.addEventListener("click", (e) => {
      var s = document.getElementById("tao-tien-trinh");
      var ss = document.getElementById("lich-su-mua-dich-vu");
      var btn = document.getElementById("btn-lich-su-mua-dich-vu");
      var sss = document.getElementById("lich-su-giao-dich");

      if (ss.style.display == "block") {
        ss.style.display = "none";
        btn.classList.add("text-emerald-600");
        btn.classList.remove("bg-emerald-700");
        btn.classList.remove("text-white");
      } else if (sss.style.display == "block") {
        sss.style.display = "none";
        btn = document.getElementById("btn-lich-su-giao-dich");
        btn.classList.add("text-red-600");
        btn.classList.remove("bg-red-700");
        btn.classList.remove("text-white");
      }
      s.style.display = "block";
      e.currentTarget.classList.add("text-white");
      e.currentTarget.classList.add("bg-red-600");
      e.currentTarget.classList.remove("text-red-600");
    });
  }
);

Array.from(document.getElementsByClassName("btn-lich-su-mua-dich-vu")).forEach(
  (elA) => {
    elA.addEventListener("click", (e) => {
      var s = document.getElementById("tao-tien-trinh");
      var ss = document.getElementById("lich-su-mua-dich-vu");
      var btn = document.getElementById("btn-tao-tien-trinh");
      var sss = document.getElementById("lich-su-giao-dich");

      if (s.style.display == "block") {
        s.style.display = "none";
        btn.classList.remove("text-white");
        btn.classList.remove("bg-red-600");
        btn.classList.add("text-red-600");
      } else if (sss.style.display == "block") {
        sss.style.display = "none";
        btn = document.getElementById("btn-lich-su-giao-dich");
        btn.classList.remove("text-white");
        btn.classList.remove("bg-red-600");
        btn.classList.add("text-red-600");
      }
      ss.style.display = "block";
      e.currentTarget.classList.remove("text-emerald-600");
      e.currentTarget.classList.add("bg-emerald-700");
      e.currentTarget.classList.add("text-white");
    });
  }
);

Array.from(document.getElementsByClassName("btn-lich-su-giao-dich")).forEach(
  (elA) => {
    elA.addEventListener("click", (e) => {
      var s = document.getElementById("tao-tien-trinh");
      var ss = document.getElementById("lich-su-mua-dich-vu");
      var btn = document.getElementById("btn-tao-tien-trinh");
      var sss = document.getElementById("lich-su-giao-dich");

      if (s.style.display == "block") {
        s.style.display = "none";
        btn.classList.remove("text-white");
        btn.classList.remove("bg-red-600");
        btn.classList.add("text-red-600");
      } else if (ss.style.display == "block") {
        ss.style.display = "none";
        btn = document.getElementById("btn-lich-su-mua-dich-vu");
        btn.classList.remove("text-white");
        btn.classList.remove("bg-emerald-700");
        btn.classList.add("text-emerald-600");
      }
      sss.style.display = "block";
      e.currentTarget.classList.add("text-white");
      e.currentTarget.classList.add("bg-red-600");
      e.currentTarget.classList.remove("text-red-600");
    });
  }
);
