// ==UserScript==
// @name         AddVantage
// @namespace    http://github.com/Mrlilal
// @description  This adds advantage and disadvantage icons next to your saves and skills.
// @author       Mrlilal & Colenk
// @version      1.2.1
// @license      GPL-3.0-or-later
// @supportURL   https://github.com/Mrlilal/Roll20-Plugins/AddVantage/
// @require      https://raw.githubusercontent.com/Mrlilal/Roll20-Plugins/dev/AddVantage/AddVantageBackground.js

// @match        https://app.roll20.net/editor*

// @run-at       document-idle
// ==/UserScript==

// === Settings ===
var injectionInterval = 10000; // The amount of time you wait between each injection attempt. Recommended to be at least 5000 milliseconds.

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
// var skillCheckAcrobatics = 'none';
// var skillCheckAnimalHandling = 'none'; // This may not look right if you have to add an icon.. Be wary.
// var skillCheckArcana = 'none';
// var skillCheckAthletics = 'none';
// var skillCheckDeception = 'none';
// var skillCheckHistory = 'none';
// var skillCheckInsight = 'none';
// var skillCheckIntimidation = 'none';
// var skillCheckInvestigation = 'none';
// var skillCheckMedicine = 'none';
// var skillCheckNature = 'none';
// var skillCheckPerception = 'none';
// var skillCheckPerformance = 'none';
// var skillCheckPersuasion = 'none';
// var skillCheckReligion = 'none';
// var skillCheckSleightOfHand = 'none'; // This may not look right if you have to add an icon.. Be wary.
// var skillCheckStealth = 'none';
// var skillCheckSurvival = 'none';

// Images/icons
var imageAdvantage = 'https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/advantage-icon.svg'
var imageDisadvantage = 'https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/disadvantage-icon.svg'
var imageAdvantageStyling = 'height: 12px; width: 12px; padding-left: 5px;' // Recommended as a 12x12px image with 5 pixels of padding on the left
var imageDisadvantageStyling = 'height: 12px; width: 12px; padding-left: 5px;' // Recommended as a 12x12px image with 5 pixels of padding on the left
// === /Settings ===

window.onload = startLoading();
