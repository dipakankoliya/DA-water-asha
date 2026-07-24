/* DA Water Treatment Expert — Bootstrap 5 + jQuery */

(function ($) {
  "use strict";

  var SITE = {
    name: "DA Water Treatment Expert",
    phone: "+91 9913654239",
    phoneHref: "tel:+919913654239",
    whatsapp: "https://wa.me/919913654239",
    email: "info@dawater.in",
    address: "SHELADIYA ERIS, C-1403, Club O7 Road, Shela, Ahmedabad, Gujarat 380058",
    hours: "Mon–Sat: 9:00 AM – 7:00 PM",
  };

  function basePath() {
    var p = window.location.pathname.replace(/\\/g, "/");
    if (
      p.indexOf("/services/") !== -1 ||
      p.indexOf("/locations/") !== -1 ||
      p.indexOf("/industries/") !== -1 ||
      p.indexOf("/blog/") !== -1 ||
      p.indexOf("/legal/") !== -1
    ) {
      return "../";
    }
    return "";
  }

  var bp = basePath();

  function renderHeader() {
    var $el = $("#site-header");
    if (!$el.length) return;

    $el.html(
      '<div class="da-topbar">' +
        '<div class="container d-flex justify-content-between align-items-center flex-wrap gap-2">' +
          '<div class="d-flex flex-wrap gap-3 align-items-center">' +
            '<a href="' + SITE.phoneHref + '">' + SITE.phone + "</a>" +
            "<span>" + SITE.hours + "</span>" +
          "</div>" +
          '<div class="topbar-extra d-flex gap-3">' +
            '<a href="' + bp + 'enquiry.html">Request a Water Audit</a>' +
            '<a href="' + SITE.whatsapp + '" target="_blank" rel="noopener">WhatsApp Us</a>' +
          "</div>" +
        "</div>" +
      "</div>" +
      '<nav class="navbar navbar-expand-lg da-navbar sticky-top" id="main-header">' +
        '<div class="container">' +
          '<a class="navbar-brand da-logo" href="' + bp + 'index.html">' +
            '<img src="' + bp + 'images/da-logo.png" alt="DA Water Treatment Expert — By Dr. Dipak Ankoliya" class="da-logo-img" width="220" height="220">' +
          "</a>" +
          '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#daNav" aria-controls="daNav" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
          "</button>" +
          '<div class="collapse navbar-collapse" id="daNav">' +
            '<ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">' +
              '<li class="nav-item"><a class="nav-link" href="' + bp + 'index.html">Home</a></li>' +
              '<li class="nav-item"><a class="nav-link" href="' + bp + 'about.html">About</a></li>' +
              '<li class="nav-item dropdown">' +
                '<a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>' +
                '<ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="servicesDropdown">' +
                  '<li><a class="dropdown-item" href="' + bp + 'services/index.html"><strong>All Services</strong><small>Complete water treatment solutions</small></a></li>' +
                  '<li><a class="dropdown-item" href="' + bp + 'services/water-purification.html"><strong>Water Purification</strong><small>RO, UF & drinking systems</small></a></li>' +
                  '<li><a class="dropdown-item" href="' + bp + 'services/ro-plants.html"><strong>RO Plants</strong><small>Commercial & industrial</small></a></li>' +
                  '<li><a class="dropdown-item" href="' + bp + 'services/wastewater-treatment.html"><strong>Wastewater Treatment</strong><small>ETP, STP & recycling</small></a></li>' +
                  '<li><a class="dropdown-item" href="' + bp + 'services/water-quality-testing.html"><strong>Water Quality Testing</strong><small>Lab-backed analysis</small></a></li>' +
                  '<li><a class="dropdown-item" href="' + bp + 'services/filtration-design.html"><strong>Filtration Design</strong><small>Custom engineered systems</small></a></li>' +
                  '<li><a class="dropdown-item" href="' + bp + 'services/installation-maintenance.html"><strong>AMC & Maintenance</strong><small>Install to upkeep</small></a></li>' +
                  '<li><a class="dropdown-item" href="' + bp + 'services/consulting.html"><strong>Consulting</strong><small>Audits & planning</small></a></li>' +
                "</ul>" +
              "</li>" +
              '<li class="nav-item"><a class="nav-link" href="' + bp + 'industries/index.html">Industries</a></li>' +
              '<li class="nav-item"><a class="nav-link" href="' + bp + 'case-studies.html">Projects</a></li>' +
              '<li class="nav-item"><a class="nav-link" href="' + bp + 'blog/index.html">Insights</a></li>' +
              '<li class="nav-item"><a class="nav-link" href="' + bp + 'contact.html">Contact</a></li>' +
              '<li class="nav-item ms-lg-2 mt-2 mt-lg-0"><a class="btn btn-da-teal btn-sm" href="' + bp + 'enquiry.html">Get Free Quote</a></li>' +
            "</ul>" +
          "</div>" +
        "</div>" +
      "</nav>"
    );
  }

  function renderFooter() {
    var $el = $("#site-footer");
    if (!$el.length) return;
    var year = new Date().getFullYear();

    $el.html(
      '<footer class="da-footer">' +
        '<div class="container">' +
          '<div class="row g-4 g-lg-5">' +
            '<div class="col-lg-4">' +
              '<a class="da-logo mb-3 d-inline-flex" href="' + bp + 'index.html">' +
                '<img src="' + bp + 'images/da-logo.png" alt="DA Water Treatment Expert" class="da-logo-img da-logo-img-footer" width="200" height="200">' +
              "</a>" +
              "<p class=\"mt-3 mb-3\">Ahmedabad’s trusted partner for water purification, wastewater treatment, testing, and turnkey filtration systems. Consulting, design, optimization &amp; sustainability by Dr. Dipak Ankoliya.</p>" +
              '<form class="row g-2" id="newsletter-form">' +
                '<div class="col">' +
                  '<label class="visually-hidden" for="nl-email">Email</label>' +
                  '<input id="nl-email" type="email" class="form-control newsletter-input" placeholder="Get water quality tips" required>' +
                "</div>" +
                '<div class="col-auto"><button class="btn btn-primary btn-sm" type="submit">Join</button></div>' +
              "</form>" +
            "</div>" +
            '<div class="col-6 col-md-4 col-lg-2">' +
              "<h5>Services</h5>" +
              '<ul class="list-unstyled">' +
                '<li><a href="' + bp + 'services/water-purification.html">Purification</a></li>' +
                '<li><a href="' + bp + 'services/ro-plants.html">RO Plants</a></li>' +
                '<li><a href="' + bp + 'services/wastewater-treatment.html">Wastewater</a></li>' +
                '<li><a href="' + bp + 'services/water-quality-testing.html">Testing</a></li>' +
                '<li><a href="' + bp + 'services/installation-maintenance.html">AMC</a></li>' +
              "</ul>" +
            "</div>" +
            '<div class="col-6 col-md-4 col-lg-2">' +
              "<h5>Company</h5>" +
              '<ul class="list-unstyled">' +
                '<li><a href="' + bp + 'about.html">About</a></li>' +
                '<li><a href="' + bp + 'case-studies.html">Case Studies</a></li>' +
                '<li><a href="' + bp + 'testimonials.html">Testimonials</a></li>' +
                '<li><a href="' + bp + 'pricing.html">Packages</a></li>' +
                '<li><a href="' + bp + 'faq.html">FAQs</a></li>' +
                '<li><a href="' + bp + 'careers.html">Careers</a></li>' +
              "</ul>" +
            "</div>" +
            '<div class="col-md-4 col-lg-4">' +
              "<h5>Visit & Call</h5>" +
              '<ul class="list-unstyled">' +
                '<li><a href="' + SITE.phoneHref + '">' + SITE.phone + "</a></li>" +
                '<li><a href="mailto:' + SITE.email + '">' + SITE.email + "</a></li>" +
                "<li>" + SITE.address + "</li>" +
                '<li><a href="' + bp + 'locations/ahmedabad.html">Serving Ahmedabad & Gujarat</a></li>' +
                '<li><a href="' + bp + 'legal/privacy-policy.html">Privacy Policy</a></li>' +
                '<li><a href="' + bp + 'legal/terms.html">Terms of Service</a></li>' +
              "</ul>" +
            "</div>" +
          "</div>" +
          '<div class="footer-bottom d-flex flex-wrap justify-content-between gap-2">' +
            "<p class=\"mb-0\">© " + year + " DA Water Treatment Expert. All rights reserved.</p>" +
            '<p class="mb-0">Engineered for cleaner water across Ahmedabad.</p>' +
          "</div>" +
        "</div>" +
      "</footer>" +
      '<div class="float-actions" aria-label="Quick contact">' +
        '<a class="float-btn float-whatsapp" href="' + SITE.whatsapp + '" target="_blank" rel="noopener" aria-label="WhatsApp">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
        "</a>" +
        '<a class="float-btn float-call" href="' + SITE.phoneHref + '" aria-label="Call now">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>' +
        "</a>" +
      "</div>" +
      '<div class="mobile-cta-bar">' +
        '<a class="btn btn-da-teal" href="' + SITE.phoneHref + '">Call Now</a>' +
        '<a class="btn btn-primary" href="' + bp + 'enquiry.html">Free Quote</a>' +
      "</div>"
    );
  }

  function initStickyHeader() {
    var $nav = $("#main-header");
    $(window).on("scroll", function () {
      $nav.toggleClass("scrolled", $(window).scrollTop() > 12);
    });
  }

  function initReveal() {
    var $items = $(".reveal");
    if (!$items.length || !("IntersectionObserver" in window)) {
      $items.addClass("visible");
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            $(e.target).addClass("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    $items.each(function () {
      io.observe(this);
    });
  }

  function initCounters() {
    $("[data-count]").each(function () {
      var $el = $(this);
      var target = parseInt($el.attr("data-count"), 10);
      var suffix = $el.attr("data-suffix") || "";
      var started = false;

      function animate() {
        if (started) return;
        started = true;
        $({ n: 0 }).animate(
          { n: target },
          {
            duration: 1400,
            easing: "swing",
            step: function (now) {
              $el.text(Math.floor(now) + suffix);
            },
            complete: function () {
              $el.text(target + suffix);
            },
          }
        );
      }

      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(
          function (entries) {
            if (entries[0].isIntersecting) {
              animate();
              io.disconnect();
            }
          },
          { threshold: 0.4 }
        );
        io.observe(this);
      } else {
        animate();
      }
    });
  }

  function initForms() {
    $("form[data-redirect]").on("submit", function (e) {
      e.preventDefault();
      var $form = $(this);
      var redirect = $form.attr("data-redirect") || bp + "thank-you.html";
      try {
        var data = {};
        $form.serializeArray().forEach(function (f) {
          data[f.name] = f.value;
        });
        sessionStorage.setItem("da_enquiry", JSON.stringify(data));
      } catch (err) {}
      window.location.href = redirect;
    });

    $("#newsletter-form").on("submit", function (e) {
      e.preventDefault();
      window.location.href = bp + "thank-you.html";
    });
  }

  function initSmoothScroll() {
    $('a[href^="#"]').on("click", function (e) {
      var id = $(this).attr("href");
      if (id.length > 1 && $(id).length) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $(id).offset().top - 80 }, 500);
      }
    });
  }

  function convertLegacyFaq() {
    /* Optional: enhance details/summary already on pages — no-op if Bootstrap accordion present */
    $(".faq-item summary").css("cursor", "pointer");
  }

  $(function () {
    renderHeader();
    renderFooter();
    initStickyHeader();
    initReveal();
    initCounters();
    initForms();
    initSmoothScroll();
    convertLegacyFaq();
  });

  window.DA_SITE = SITE;
})(jQuery);
