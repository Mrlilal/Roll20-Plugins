// ==UserScript==
// @name         AddVantage
// @namespace    http://github.com/Mrlilal
// @description  This adds advantage and disadvantage icons next to your saves and skills.
// @author       Mrlilal & Colenk
// @version      1.2.2
// @license      GPL-3.0-or-later
// @supportURL   https://github.com/Mrlilal/Roll20-Plugins/AddVantage/
// @require      https://raw.githubusercontent.com/Mrlilal/Roll20-Plugins/dev/AddVantage/AddVantageBackground.js

// @match        https://app.roll20.net/editor*

// @run-at       document-idle
// ==/UserScript==

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
// var savingThrowIntelligence = 'advantage'; // Shows the "advantage" icon next to the "Intelligence" saving thow
// var skillCheckStealth = 'disadvantage'; // Shows the "disadvantage" icon next to "Stealth" check
// var skillCheckReligion = 'none'; // Doesn't show any image next to "Religion" check
// Saving Throws
var savingThrowStrength = 'none';
var savingThrowDexterity = 'none';
var savingThrowConstitution = 'none';
var savingThrowIntelligence = 'none';
var savingThrowWisdom = 'none';
var savingThrowCharisma = 'none';

// Skill Checks
var skillCheckAcrobatics = 'none';
var skillCheckAnimalHandling = 'none'; // Because of how long the name is, any added icons may not look as intended.
var skillCheckArcana = 'none';
var skillCheckAthletics = 'none';
var skillCheckDeception = 'none';
var skillCheckHistory = 'none';
var skillCheckInsight = 'none';
var skillCheckIntimidation = 'none';
var skillCheckInvestigation = 'none';
var skillCheckMedicine = 'none';
var skillCheckNature = 'none';
var skillCheckPerception = 'none';
var skillCheckPerformance = 'none';
var skillCheckPersuasion = 'none';
var skillCheckReligion = 'none';
var skillCheckSleightOfHand = 'none'; // Because of how long the name is, any added icons may not look as intended.
var skillCheckStealth = 'none';
var skillCheckSurvival = 'none';

// Images/icons
var imageAdvantage = 'https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/advantage-icon.svg' // It is recommended to use a transparent image.
var imageDisadvantage = 'https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/disadvantage-icon.svg' // It is recommended to use a transparent image.
var imageAdvantageStyling = 'height: 12px; width: 12px; padding-left: 5px;' // It is recommended as a 12x12px image with 5 pixels of padding on the left of the image.
var imageDisadvantageStyling = 'height: 12px; width: 12px; padding-left: 5px;' // It is recommended as a 12x12px image with 5 pixels of padding on the left of the image.
// === /Settings ===

startLoading();
