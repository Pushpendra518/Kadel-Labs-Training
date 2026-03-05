(function () {
  'use strict';

  // ----- Hamburger menu -----
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');

  function toggleMenu() {
    hamburger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
  }

  if (hamburger && nav) {
    hamburger.addEventListener('click', toggleMenu);
    // Close when clicking a nav link (for single-page feel)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // ----- Pricing calculator -----
  var usersInput = document.getElementById('users');
  var storageInput = document.getElementById('storage');
  var apiInput = document.getElementById('api');
  var usersValue = document.getElementById('users-value');
  var storageValue = document.getElementById('storage-value');
  var apiValue = document.getElementById('api-value');
  var totalPriceEl = document.getElementById('total-price');
  var resultPriceEl = totalPriceEl && totalPriceEl.parentElement;
  var annualPriceEl = document.getElementById('annual-price');

  // Base price + per user + per GB + per 1K API calls (example formula)
  var BASE = 19;
  var PER_USER = 2;
  var PER_GB = 0.2;
  var PER_API_K = 0.05;

  // Annual billing: 2 months free (pay for 10, get 12)
  var ANNUAL_MONTHS_PAID = 10;
  var ANNUAL_MONTHS_TOTAL = 12;

  function getNumber(input) {
    return input ? parseInt(input.value, 10) : 0;
  }

  function computeTotal() {
    var users = getNumber(usersInput);
    var storage = getNumber(storageInput);
    var api = getNumber(apiInput);
    var total = BASE + (users * PER_USER) + (storage * PER_GB) + (api * PER_API_K);
    return Math.round(total);
  }

  function updateDisplay() {
    if (!usersInput || !storageInput || !apiInput) return;

    if (usersValue) usersValue.textContent = usersInput.value;
    if (storageValue) storageValue.textContent = storageInput.value;
    if (apiValue) apiValue.textContent = apiInput.value;

    var total = computeTotal();
    if (totalPriceEl) totalPriceEl.textContent = total;

    // Annual: same monthly rate but billed as 10 months for 12 (2 months free)
    var annualMonthly = Math.round((total * ANNUAL_MONTHS_PAID) / ANNUAL_MONTHS_TOTAL);
    if (annualPriceEl) annualPriceEl.textContent = annualMonthly;

    // Small bump animation when price changes
    if (resultPriceEl) {
      resultPriceEl.classList.remove('bump');
      void resultPriceEl.offsetWidth;
      resultPriceEl.classList.add('bump');
    }
  }

  function initCalculator() {
    if (!usersInput || !storageInput || !apiInput) return;
    [usersInput, storageInput, apiInput].forEach(function (input) {
      input.addEventListener('input', updateDisplay);
    });
    updateDisplay();
  }

  initCalculator();
})();


