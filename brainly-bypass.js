// Disable telemetry that show paywall
localStorage.removeItem("social-qa/telemetry");

// Disable register & offer modal
localStorage.setItem('offer-modal/timestamp', 2147483647000);
localStorage.setItem('registration-toplayer/expires', 2147483647000);

// List of selectors for ads (featured & brainly)
const adSelector = [
	"[class^=AsideFixedAd]",
	"[data-testid^=ad_]",
  "[data-testid=brainly_ads_placeholder]",
	"[data-testid=brainly_plus_box_search_unlogged]"
];

function removeAdElements() {
	// Remove all featured ads
	for(let ad of adSelector) {
		document.querySelectorAll(ad).forEach(v => v.remove());
	}
}

setInterval(() => { removeAdElements(); }, 2000);
