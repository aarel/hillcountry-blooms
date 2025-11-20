(function () {
  const ALLOWED_ZIPS = ["76550", "76522", "76544", "76513", "78611", "78608"];
  const WARNING_ID = "hill-country-zip-warning";

  function upsertWarning(target, message) {
    if (!target) return;
    let warning = document.getElementById(WARNING_ID);
    if (!warning) {
      warning = document.createElement("p");
      warning.id = WARNING_ID;
      warning.className = "field__message field__message--error";
      target.insertAdjacentElement("afterend", warning);
    }
    warning.textContent = message;
  }

  function removeWarning() {
    const warning = document.getElementById(WARNING_ID);
    if (warning) warning.remove();
  }

  function validateZip(input) {
    if (!input) return;
    const value = (input.value || "").trim();
    if (value === "") {
      removeWarning();
      return;
    }
    if (ALLOWED_ZIPS.includes(value)) {
      removeWarning();
    } else {
      upsertWarning(input, `We currently deliver to ${ALLOWED_ZIPS.join(", ")}.`);
    }
  }

  function init() {
    const input = document.querySelector('input[name="checkout[shipping_address][zip]"]') ||
      document.querySelector('input[name="checkout[attributes][delivery_zip]"]');

    if (!input) return;

    validateZip(input);
    input.addEventListener("change", () => validateZip(input));
    input.addEventListener("blur", () => validateZip(input));
    input.addEventListener("keyup", () => validateZip(input));
  }

  document.addEventListener("page:load", init);
  document.addEventListener("page:change", init);
  window.addEventListener("load", init);
})();
