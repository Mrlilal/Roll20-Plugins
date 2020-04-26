// ==UserScript==
// @name         AddVantage Development
// @namespace    http://github.com/Mrlilal
// @description  This adds advantage and disadvantage icons next to your saves and skills.
// @author       Mrlilal & Colenk
// @version      2.0.1
// @license      GPL-3.0-or-later
// @updateURL    https://github.com/Mrlilal/Roll20-Plugins/raw/addvantage-dev/AddVantage/AddVantage.user.js
// @downloadURL  https://github.com/Mrlilal/Roll20-Plugins/raw/addvantage-dev/AddVantage/AddVantage.user.js
// @supportURL   https://github.com/Mrlilal/Roll20-Plugins/AddVantage/
// @require      https://raw.githubusercontent.com/Mrlilal/Roll20-Plugins/addvantage-dev/AddVantage/AddVantageBackground.js

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
const injectionInterval = 10000; // The amount of time you wait inbetween each injection attempt. Recommended to be at least 5000 milliseconds.

// Which icon do you want to show?
// Examples:
// intelligence.option = 'advantage'; // Shows the "advantage" icon next to the "Intelligence" saving thow
// stealth.option = 'disadvantage'; // Shows the "disadvantage" icon next to "Stealth" check
// religion.option = 'none'; // Doesn't show any image next to "Religion" check
// Saving Throws
strength.option = 'none';
dexterity.option = 'none';
constitution.option = 'none';
intelligence.option = 'none';
wisdom.option = 'none';
charisma.option = 'none';

// Skill checks
acrobatics.option = 'none';
animalhandling.option = 'none'; // Because of how long the name is, any added icons may not look as intended.
arcana.option = 'none';
athletics.option = 'none';
deception.option = 'none';
history.option = 'none';
insight.option = 'none';
intimidation.option = 'none';
investigation.option = 'none';
medicine.option = 'none';
nature.option = 'none';
perception.option = 'none';
performance.option = 'none';
persuasion.option = 'none';
religion.option = 'none';
sleightofhand.option = 'none'; // Because of how long the name is, any added icons may not look as intended.
stealth.option = 'none';
survival.option = 'none';

// Images/icons
const imageAdvantage = 'https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/advantage-icon.svg'; // It is recommended to use a transparent image.
const imageDisadvantage = 'https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/disadvantage-icon.svg'; // It is recommended to use a transparent image.
const imageAdvantageStyling = 'height: 12px; width: 12px; padding-left: 5px;'; // It is recommended as a 12x12px image with 5 pixels of padding on the left of the image.
const imageDisadvantageStyling = 'height: 12px; width: 12px; padding-left: 5px;'; // It is recommended as a 12x12px image with 5 pixels of padding on the left of the image.
// === /Settings ===

startAddVantage();
