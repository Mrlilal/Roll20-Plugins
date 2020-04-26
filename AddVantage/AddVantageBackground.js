// Version 2.0.1 Development

function addVantage(type, roll, option, name) {
    if (type === 'save') {
        const rollType = `roll_${roll}_save`;
        const rollName = `${name} Saving Throw`;
    } else if (type === 'skill') {
        const rollType = `roll_${roll}`;
        const rollName = `${name} Skill Check`;
    }
    const setting = option;

    attemptInjection(rollType, rollName, setting);
}

function Options(name, type, option) {
    this.roll = name.toLowerCase(); // What is used to detect & add icons ("acrobatics").
    this.name = name; // Human readable name ("Acrobatics").
    this.type = type; // Whether it's a save or a skill (because the elements are different on Roll20's side).
    this.option = option; // Options: "advantage", "disadvantage", "none".
}

// Saves
let strength = Options('Strength', 'save');
let dexterity = Options('Dexterity', 'save');
let constitution = Options('Construction', 'save');
let intelligence = Options('Intelligence', 'save');
let wisdom = Options('Wisdom', 'save');
let charisma = Options('Charisma', 'save');

// Skills
let acrobatics = Options('Acrobatics', 'skill');
var animalhandling = Options('Animal Handling', 'skill');
animalhandling.roll = 'roll_animal_handling';
let arcana = Options('Arcana', 'skill');
let athletics = Options('Athletics', 'skill');
let deception = Options('Deception', 'skill');
let history = Options('History', 'skill');
let insight = Options('Insight', 'skill');
let intimidation = Options('Intimidation', 'skill');
let investigation = Options('Investigation', 'skill');
let medicine = Options('Medicine', 'skill');
let nature = Options('Nature', 'skill');
let perception = Options('Perception', 'skill');
let performance = Options('Performance', 'skill');
let persuasion = Options('Persuasion', 'skill');
let religion = Options('Religion', 'skill');
let sleightofhand = Options('Sleight of Hand', 'skill');
sleightofhand.roll = 'roll_sleight_of_hand';
let stealth = Options('Stealth', 'skill');
let survival = Options('Survival', 'skill');

const attemptInjection = (rollType, rollName, setting) => {
    // If the character sheet is not open or found, search again.
    if (!document.getElementById(`AddVantage_${rollType}`)) {
        // If elements are not found, wait and try to find them again.
        if (!document.getElementsByName(rollType)[0]) {
            setTimeout(attemptInjection, injectionInterval, rollType, rollName, setting);

            console.log(`%cAddVantage: Elements not found. Waiting ${injectionInterval / 1000} seconds to attempt injecting again. Please open your character sheet.`, 'color: yellow;');

            return;
        }

        const add_img_tag = document.createElement('IMG'); // Create an image tag.
        const add_img_src = document.createAttribute('SRC'); // Create an attribute for the source of the "advantage" image.
        const add_img_style = document.createAttribute('STYLE'); // Create an attribute for the styling of the image.
        const add_img_id = document.createAttribute('ID'); // Create an attribute for the ID of the image.
        add_img_id.value = `AddVantage_${rollType}`; // Add a value to the now-created ID.

        // Start checking for the settings
        if (setting == 'advantage') {
            add_img_src.value = imageAdvantage; // Add the value of the image source.
            add_img_style.value = imageAdvantageStyling; // Add the value of the styling of the image.
            add_img_tag.setAttributeNode(add_img_src); // Add the image source ('SRC') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_style); // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_id); // Add the image ID ('ID') to the image tag ('IMG').

            document.getElementsByName(rollType)[0].appendChild(add_img_tag); // Create the whole image tag for the button.

            console.log(`%cAddVantage: The advantage icon for the ${rollName} was successfully added.`, 'color: #32CD32;'); // Log that the icon was added.
        } else if (setting == 'disadvantage') {
            add_img_src.value = imageDisadvantage; // The image that is added (to the 'SRC' attribute).
            add_img_style.value = imageDisadvantageStyling; // The styling that is added (to the 'STYLE' attribute).
            add_img_tag.setAttributeNode(add_img_src); // Add the image source ('SRC') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_style); // Add the image styling ('STYLE') to the image tag ('IMG').
            add_img_tag.setAttributeNode(add_img_id); // Add the image ID ('ID') to the image tag ('IMG').

            document.getElementsByName(rollType)[0].appendChild(add_img_tag); // Create the whole image tag for the button.

            console.log(`%cAddVantage: The disadvantage icon for the ${rollName} was successfully added.`, 'color: #32CD32;'); // Log in the console that the disadvantage icon for Intelligence was added.
        } else if (setting == 'none') {
            console.log(`%cAddVantage: Setting for ${rollName} is "none." Continuing to the next setting.`, 'color: #32CD32;'); // Log in the console that the setting is off for adding an image.
        } else {
            console.log('%c---------------------------------------------', 'color: red;');
            console.log(`%cAddVantage: Setting for ${rollName} is not set properly. Please ensure that all settings are configured properly.`, 'color: red;'); // Log that some settings are not set up properly.
            console.log('%c---------------------------------------------', 'color: red;');
        }
    } else {
        console.log(`%cAddVantage: The icons are already injected. Skipping attempted injection.`, 'color: #32CD32;'); // Log that the icons already exist.
    }
};

// Start all functions.
function startAddVantage() {
    console.log('%cAddVantage: Code initialized, attempting injection.', 'color: #32CD32;'); // Log that the code actually loaded.

    let settings = [];
    settings.push(
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        acrobatics,
        animalhandling,
        arcana,
        athletics,
        deception,
        history,
        insight,
        intimidation,
        medicine,
        nature,
        perception,
        performance,
        persuasion,
        religion,
        sleightofhand,
        stealth,
        survival
    );
    settings.forEach((element) => {
        addVantage(element.type, element.roll, element.option, element.name);
    });
}
