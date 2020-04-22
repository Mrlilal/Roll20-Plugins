// ==UserScript==
// @name         Roll20 Dark Fixes
// @namespace    http://github.com/Mrlilal
// @description  This fixes some of the bugs with "Roll20 Dark" by RedReign.
// @author       Mrlilal & Colenk
// @version      1.1.0
// @license      GPL-3.0-or-later
// @updateURL    https://github.com/Mrlilal/Roll20-Plugins/raw/master/Roll20%20Dark%20Fixes/Roll20DarkFixes.user.js
// @downloadURL  https://github.com/Mrlilal/Roll20-Plugins/raw/master/Roll20%20Dark%20Fixes/Roll20DarkFixes.user.js
// @supportURL   https://github.com/Mrlilal/Roll20-Plugins/AddVantage/
// @require      https://raw.githubusercontent.com/Mrlilal/Roll20-Plugins/master/Roll20%20Dark%20Fixes/Roll20DarkFixesBackground.js

// @match        https://app.roll20.net/editor*

// @run-at       document-idle
// ==/UserScript==

// NOTE: If you're using this on Tampermonkey, the required background javascript may not update properly. Please check if there are any updates manually.
// NOTE: If you find that Tampermonkey is not properly updating the required background javascript, you may have to manipulate the "@require" tag above, then change it back.
// NOTE: Is something not working properly or do you need help with something related to this script? Feel free to message me or create a ticket/request.
// NOTE: Github: Mrlilal || Discord: Mrlilal#3758 || Twitter: @Mrlilal

// === Settings ===
var applicationInterval = 10; // The amount of time you wait inbetween each attempt of adding the CSS. Recommended to be 10 milliseconds.

// Which fixes do you want to be enabled?
// Examples:
// var fixChatSmallScrollbar = 'enabled'; // Enables the fix for the small scrollbar in chat.
// var fixChatSkillBackground = 'disabled'; // Enables the fix for the background to the skill check in chat.
var fixChatSmallScrollbar = 'enabled'; // Fixes the small scrollbar that appears when there isn't enough text to make the chat box bigger.
var fixChatSkillBackground = 'enabled'; // Fixes the white background to the skill checks and made them match the saving throw background.
var fixChatSheetDamage = 'enabled'; // Makes the sheet damage (for things like temp HP) match the rest of the numbers instead of black.
// === /Settings ===

startFixes();
