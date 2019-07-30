const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/aj/Desktop/MK_Decision/DonationRepo/Donation/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/aj/Desktop/MK_Decision/DonationRepo/Donation/src/pages/404.js"))),
  "component---src-pages-donate-form-js": hot(preferDefault(require("/Users/aj/Desktop/MK_Decision/DonationRepo/Donation/src/pages/donateForm.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/aj/Desktop/MK_Decision/DonationRepo/Donation/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/aj/Desktop/MK_Decision/DonationRepo/Donation/src/pages/page-2.js"))),
  "component---src-pages-thank-you-js": hot(preferDefault(require("/Users/aj/Desktop/MK_Decision/DonationRepo/Donation/src/pages/ThankYou.js"))),
  "component---src-pages-welcome-js": hot(preferDefault(require("/Users/aj/Desktop/MK_Decision/DonationRepo/Donation/src/pages/Welcome.js")))
}

