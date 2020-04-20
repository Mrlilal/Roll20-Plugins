// ==UserScript==
// @name         AddVantage
// @namespace    http://github.com/Mrlilal
// @description  This adds advantage and disadvantage icons next to your saves and skills.
// @author       Mrlilal & Colenk
// @version      1.2.2
// @license      GPL-3.0-or-later
// @updateURL    https://github.com/Mrlilal/Roll20-Plugins/raw/dev/AddVantage/AddVantage.user.js
// @downloadURL  https://github.com/Mrlilal/Roll20-Plugins/raw/dev/AddVantage/AddVantage.user.js
// @supportURL   https://github.com/Mrlilal/Roll20-Plugins/AddVantage/
// @require      https://raw.githubusercontent.com/Mrlilal/Roll20-Plugins/dev/AddVantage/AddVantageBackground.js

// @match        https://app.roll20.net/editor*

// @run-at       document-idle
// ==/UserScript==

// NOTE: In order for the icons/images to inject, the character sheet must be open.
// NOTE: If you close out of the embed character sheet, you must refresh the page to inject them again.
// NOTE: If you close out of the pop-out character sheet, you can re-open it again and it will auto inject.
// NOTE: Before updating this script, please keep in mind which settings you have changed.

// NOTE: This was built for the D&D 5th Edition character sheet version 4.21 on Roll20. It is untested on any other sheet.
// NOTE: This should work on both embed and pop-out character sheets.
// NOTE: If you're using this on Tampermonkey, the required background javascript may not update properly. Please check if there are any updates manually.
// NOTE: If you find that Tampermonkey is not properly updating the required background javascript, you may have to manipulate the "@require" tag above, then change it back.
// NOTE: Is something not working properly or do you need help with something related to this script? Feel free to message me or create a ticket/request.
// NOTE: Github: Mrlilal || Discord: Mrlilal#3758 || Twitter: @Mrlilal

// === Settings ===
var injectionInterval = 10000; // The amount of time you wait inbetween each injection attempt. Recommended to be at least 5000 milliseconds.

// Which icon do you want to show?
// Examples:
// var savingThrowIntelligence = 'enabled'; // Enables the fix for 
// var skillCheckStealth = 'disabled'; // Enables the fix for
var savingThrowStrength = 'enabled';
var savingThrowDexterity = 'disabled';
// === /Settings ===

startLoading();
