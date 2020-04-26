// Version 1.2.2
// Start of the injenction function
var attemptInjection = (rollType, rollName, setting) => {
    // Check if there are already been icons injected
    if (!document.getElementById(`AddVantage_${rollType}`)) {
        // If the character sheet is not open or found, search again
        if (!document.getElementsByName(rollType)[0]) {
            setTimeout(attemptInjection, injectionInterval, rollType, rollName, setting);

            console.log(
                `%cAddVantage: Elements not found. Waiting ${
                    injectionInterval / 1000
                } seconds to attempt injecting again. Please open your character sheet.`,
                "color: yellow;"
            );

            return;
        }

        // Create an image tag.
        var add_img_tag = document.createElement("IMG");
        // Create an attribute for the source of the "advantage" image.
        var add_img_src = document.createAttribute("SRC");
        // Create an attribute for the styling of the image.
        var add_img_style = document.createAttribute("STYLE");
        // Create an attribute for the ID of the image.
        var add_img_id = document.createAttribute("ID");
        // Add a value to the now-created ID.
        add_img_id.value = `AddVantage_${rollType}`;

        // Start checking for the settings
        if (setting == "advantage") {
            // Add the value of the image source.
            add_img_src.value = imageAdvantage;
            // Add the value of the styling of the image.
            add_img_style.value = imageAdvantageStyling;
            // Add the image source ('SRC') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_src);
            // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_style);
            // Add the image ID ('ID') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_id);

            // Create the whole image tag for the button.
            document.getElementsByName(rollType)[0].appendChild(add_img_tag);

            // Log that the icon was added.
            console.log(
                `%cAddVantage: The advantage icon for the ${rollName} was successfully added.`,
                "color: #32CD32;"
            );
        } else if (setting == "disadvantage") {
            // The image that is added (to the 'SRC' attribute).
            add_img_src.value = imageDisadvantage;
            // The styling that is added (to the 'STYLE' attribute).
            add_img_style.value = imageDisadvantageStyling;
            // Add the image source ('SRC') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_src);
            // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_style);
            // Add the image ID ('ID') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_id);

            // Create the whole image tag for the button.
            document.getElementsByName(rollType)[0].appendChild(add_img_tag);

            // Log in the console that the disadvantage icon for Intelligence was added.
            console.log(
                `%cAddVantage: The disadvantage icon for the ${rollName} was successfully added.`,
                "color: #32CD32;"
            );
        } else if (setting == "none") {
            // Log in the console that the setting is off for adding an image.
            console.log(
                `%cAddVantage: Setting for ${rollName} is "none." Continuing to the next setting.`,
                "color: #32CD32;"
            );
        } else {
            // Log that some settings are not set up properly.
            console.log("%c---------------------------------------------", "color: red;");
            console.log(
                `%cAddVantage: Setting for ${rollName} is not set properly. Please ensure that all settings are configured properly.`,
                "color: red;"
            );
            console.log("%c---------------------------------------------", "color: red;");
        }
    } else {
        // Log that the icons already exist.
        console.log(
            `%cAddVantage: The icons are already injected. Skipping attempted injection.`,
            "color: #32CD32;"
        );
    }
};

// Function for adding the image to the save/skill that you want.
function addVantageSaveStrength() {
    let rollType = "roll_strength_save";
    let rollName = "Strength Saving Throw";
    let setting = savingThrowStrength;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSaveDexterity() {
    let rollType = "roll_dexterity_save";
    let rollName = "Dexterity Saving Throw";
    let setting = savingThrowDexterity;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSaveConstitution() {
    let rollType = "roll_constitution_save";
    let rollName = "Constitution Saving Throw";
    let setting = savingThrowConstitution;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSaveIntelligence() {
    let rollType = "roll_intelligence_save";
    let rollName = "Intelligence Saving Throw";
    let setting = savingThrowIntelligence;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSaveWisdom() {
    let rollType = "roll_wisdom_save";
    let rollName = "Wisdom Saving Throw";
    let setting = savingThrowWisdom;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSaveCharisma() {
    let rollType = "roll_charisma_save";
    let rollName = "Charisma Saving Throw";
    let setting = savingThrowCharisma;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillAcrobatics() {
    let rollType = "roll_acrobatics";
    let rollName = "Acrobatics Skill Check";
    let setting = skillCheckAcrobatics;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillAnimalHandling() {
    let rollType = "roll_animal_handling";
    let rollName = "Animal Handling Skill Check";
    let setting = skillCheckAnimalHandling;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillArcana() {
    let rollType = "roll_arcana";
    let rollName = "Arcana Skill Check";
    let setting = skillCheckArcana;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillAthletics() {
    let rollType = "roll_athletics";
    let rollName = "Athletics Skill Check";
    let setting = skillCheckAthletics;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillDeception() {
    let rollType = "roll_deception";
    let rollName = "Deception Skill Check";
    let setting = skillCheckDeception;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillHistory() {
    let rollType = "roll_history";
    let rollName = "History Skill Check";
    let setting = skillCheckHistory;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillInsight() {
    let rollType = "roll_insight";
    let rollName = "Insight Skill Check";
    let setting = skillCheckInsight;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillIntimidation() {
    let rollType = "roll_intimidation";
    let rollName = "Intimidation Skill Check";
    let setting = skillCheckIntimidation;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillInvestigation() {
    let rollType = "roll_investigation";
    let rollName = "Investigation Skill Check";
    let setting = skillCheckInvestigation;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillMedicine() {
    let rollType = "roll_medicine";
    let rollName = "Medicine Skill Check";
    let setting = skillCheckMedicine;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillNature() {
    let rollType = "roll_nature";
    let rollName = "Nature Skill Check";
    let setting = skillCheckNature;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillPerception() {
    let rollType = "roll_perception";
    let rollName = "Perception Skill Check";
    let setting = skillCheckPerception;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillPerformance() {
    let rollType = "roll_performance";
    let rollName = "Performance Skill Check";
    let setting = skillCheckPerformance;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillPersuasion() {
    let rollType = "roll_persuasion";
    let rollName = "Persuasion Skill Check";
    let setting = skillCheckPersuasion;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillReligion() {
    let rollType = "roll_religion";
    let rollName = "Religion Skill Check";
    let setting = skillCheckReligion;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillSleightOfHand() {
    let rollType = "roll_sleight_of_hand";
    let rollName = "Sleight of Hand Skill Check";
    let setting = skillCheckSleightOfHand;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillStealth() {
    let rollType = "roll_stealth";
    let rollName = "Stealth Skill Check";
    let setting = skillCheckStealth;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Function for adding the image to the save/skill that you want.
function addVantageSkillSurvival() {
    let rollType = "roll_survival";
    let rollName = "Survival Skill Check";
    let setting = skillCheckSurvival;

    // Start the injection while passing the variables.
    attemptInjection(rollType, rollName, setting);
}

// Start all functions.
function startLoading() {
    // Log that the code actually loaded.
    console.log("%cAddVantage: Code initialized, attempting injection.", "color: #32CD32;");

    addVantageSaveStrength();
    addVantageSaveDexterity();
    addVantageSaveConstitution();
    addVantageSaveIntelligence();
    addVantageSaveWisdom();
    addVantageSaveCharisma();

    addVantageSkillAcrobatics();
    addVantageSkillAnimalHandling();
    addVantageSkillArcana();
    addVantageSkillAthletics();
    addVantageSkillDeception();
    addVantageSkillHistory();
    addVantageSkillInsight();
    addVantageSkillIntimidation();
    addVantageSkillInvestigation();
    addVantageSkillMedicine();
    addVantageSkillNature();
    addVantageSkillPerception();
    addVantageSkillPerformance();
    addVantageSkillPersuasion();
    addVantageSkillReligion();
    addVantageSkillSleightOfHand();
    addVantageSkillStealth();
    addVantageSkillSurvival();
}
