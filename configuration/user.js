/* user.js
 * https://github.com/rafaelmardojai/firefox-gnome-theme/
 */

// Enable customChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Set UI density to normal
user_pref("browser.uidensity", 0);

// Enable SVG context-propertes
user_pref("svg.context-properties.content.enabled", true);

// Disable private window dark theme
user_pref("browser.theme.dark-private-windows", false);

// Enable rounded bottom window corners
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// Revert ro old backspace to back
user_pref("browser.backspace_action", 0);

// Disable siteicons
user_pref("browser.chrome.favicons", false);
user_pref("browser.chrome.site_icons", false);

// Disable Pocket
user_pref("browser.pocket.enabled", false);
user_pref("media.navigator.enabled", false);

// Disable reader
user_pref("reader.parse-on-load.enabled", false);
user_pref("reader.parse-on-load.force-enabled", false);

// Disable picture-in-picture
user_pref("media.videocontrols.picture-in-picture.enabled", false);

// Changens to firefox-gnome-theme default values
user_pref("gnomeTheme.hideSingleTab", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("gnomeTheme.systemIcons", true);

// Disable website translation popups
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.enable", false);
user_pref("browser.translations.panelShown", false);

// Increased buffer size against Youtube stuttering
user_pref("network.http.http3.recvBufferSize", 157286400);