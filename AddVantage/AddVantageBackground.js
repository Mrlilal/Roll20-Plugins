// Start of the injenction function
var attemptInjection = (rollType, rollName, setting) => {
    // Check if there are already been icons injected
    if (!document.getElementById(`AddVantage_${rollType}`)) {
        // If the character sheet is not open or found, search again
        if (!document.getElementsByName(rollType)[0]) {
            setTimeout(attemptInjection, injectionInterval, rollType, rollName, setting);

            console.log(`%cAddVantage: Elements not found. Waiting ${injectionInterval / 1000} seconds to attempt injecting again. Please open your character sheet.`, 'color: yellow;');

            return;
        };

        // Create an image tag.
        var add_img_tag = document.createElement('IMG');
        // Create an attribute for the source of the "advantage" image.
        var add_img_src = document.createAttribute('SRC');
        // Create an attribute for the styling of the image.
        var add_img_style = document.createAttribute('STYLE');
        // Create an attribute for the ID of the image.
        var add_img_id = document.createAttribute('ID');
        // The ID that is added (to the 'ID' attribute).
        add_img_id.value = `AddVantage_${rollType}`;

        // Start checking for the settings
        if (setting == 'advantage') {
            // The image that is added (to the 'SRC' attribute).
            add_img_src.value = imageAdvantage;
            // The styling that is added (to the 'STYLE' attribute).
            add_img_style.value = imageAdvantageStyling;
            // Add the image source ('SRC') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_src);
            // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_style);
            // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_id);

            document.getElementsByName(rollType)[0].appendChild(add_img_tag);

            console.log(`%cAddVantage: The advantage icon for the ${rollName} was successfully added.`, 'color: #32CD32;');
        } else if (setting == 'disadvantage') {
            // The image that is added (to the 'SRC' attribute).
            add_img_src.value = imageDisadvantage;
            // The styling that is added (to the 'STYLE' attribute).
            add_img_style.value = imageDisadvantageStyling;
            // Add the image source ('SRC') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_src);
            // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_style);
            // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_id);

            document.getElementsByName(rollType)[0].appendChild(add_img_tag);

            // Log in the console that the advantage icon for Intelligence was added.
            console.log(`%cAddVantage: The disadvantage icon for the ${rollName} was successfully added.`, 'color: #32CD32;');
        } else if (setting == 'none') {
            console.log(`%cAddVantage: Setting for ${rollName} is "none." Continuing to the next setting.`, 'color: #32CD32;');
        } else {
            console.log('%c---------------------------------------------', 'color: red;');
            console.log(`%cAddVantage: Setting for ${rollName} is not set properly. Please ensure that all settings are configured properly.`, 'color: red;');
            console.log('%c---------------------------------------------', 'color: red;');
        };
    } else {
        console.log(`%cAddVantage: The icons are already injected. Skipping attempted injection.`, 'color: yellow;');
    };
}

// Function for adding the image to the save/skill that you want.
function addVantageSaveStrength() {
    let rollType = 'roll_strength_save';
    let rollName = 'Strength Saving Throw';
    let setting = savingThrowStrength;

    attemptInjection(rollType, rollName, setting);
};

// Function for adding the image to the save/skill that you want.
function addVantageSaveDexterity() {
    let rollType = 'roll_dexterity_save';
    let rollName = 'Dexterity Saving Throw';
    let setting = savingThrowDexterity;

    attemptInjection(rollType, rollName, setting);
};

// Function for adding the image to the save/skill that you want.
function addVantageSaveConstitution() {
    let rollType = 'roll_constitution_save';
    let rollName = 'Constitution Saving Throw';
    let setting = savingThrowConstitution;

    attemptInjection(rollType, rollName, setting);
};


// Function for adding the image to the save/skill that you want.
function addVantageSaveIntelligence() {
    let rollType = 'roll_intelligence_save';
    let rollName = 'Intelligence Saving Throw';
    let setting = savingThrowIntelligence;

    attemptInjection(rollType, rollName, setting);
};

// Function for adding the image to the save/skill that you want.
function addVantageSaveWisdom() {
    let rollType = 'roll_wisdom_save';
    let rollName = 'Wisdom Saving Throw';
    let setting = savingThrowWisdom;

    attemptInjection(rollType, rollName, setting);
};

// Function for adding the image to the save/skill that you want.
function addVantageSaveCharisma() {
    let rollType = 'roll_charisma_save';
    let rollName = 'Charisma Saving Throw';
    let setting = savingThrowCharisma;

    attemptInjection(rollType, rollName, setting);
};


// Start all functions.
export function startLoading() {
    console.log('%cAddVantage: Code initialized, attempting injection.', 'color: #32CD32;');

    addVantageSaveStrength();
    addVantageSaveDexterity();
    addVantageSaveConstitution();
    addVantageSaveIntelligence();
    addVantageSaveWisdom();
    addVantageSaveCharisma();
};
