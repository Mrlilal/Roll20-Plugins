// Version 1.0.0
// Start of the injenction function
var attemptApplication = (setting, settingName, settingType, fixCSS) => {
    // Check if there are already been icons injected
    if (!document.getElementById(`Roll20DarkFix_${settingType}`)) {
        // If the character sheet is not open or found, search again
        if (!document.head) {
            setTimeout(attemptApplication, applicationInterval, setting, settingName, settingType, fixCSS);

            console.log(`%cRoll20DarkFix: Elements not found. Waiting ${applicationInterval} milliseconds to attempt injecting again. Please open your character sheet.`, 'color: yellow;');

            return;
        };

        // Start checking for the settings
        if (setting == 'enabled') {

            // Create the "style" tag
            const add_styles = document.createElement('STYLE');
            // Create the "id" attribute for the "style" tag
            const add_id = document.createAttribute('ID');

            // Add a value to that "id" attribute
            add_id.value = `Roll20DarkFix_${settingType}`;
            // Add the "id" attribute to the "style" tag
            add_styles.setAttributeNode(add_id);
            // Add the type to the "style" tag
            add_styles.type = "text/css";
            // Add the CSS to the "style" tag
            add_styles.innerHTML = fixCSS;

            // Create the whole style tag for the head.
            document.head.appendChild(add_styles);

            // Log that the styling was added.
            console.log(`%cRoll20DarkFix: The styling for ${settingName} was successfully added.`, 'color: #32CD32;');
        } else if (setting == 'disabled') {
            // Log in the console that the setting is disabled.
            console.log(`%cRoll20DarkFix: Setting for ${settingName} is "disabled." Continuing to the next setting.`, 'color: #32CD32;');
        } else {
            // Log that some settings are not set up properly.
            console.log('%c---------------------------------------------', 'color: red;');
            console.log(`%cRoll20DarkFix: Setting for ${settingName} is not set properly. Please ensure that all settings are configured properly.`, 'color: red;');
            console.log('%c---------------------------------------------', 'color: red;');
        };
    } else {
        // Log that the icons already exist.
        console.log(`%cRoll20DarkFix: The style fixes are already applied. Skipping attempted application.`, 'color: #32CD32;');
    };
}

// Function for fixes the bug from Roll20 Dark.
function roll20DarkFixChatSmallScrollbar() {
    let setting = fixChatSmallScrollbar;
    let settingType = 'fix-chat-small-scrollbar';
    let settingName = 'Fix Chat: Small Scrollbar';
    let fixCSS = '#textchat .message {min-height: 28px !important;}';

    // Start the injection while passing the variables.
    attemptApplication(setting, settingName, settingType, fixCSS);
};

// Function for fixes the bug from Roll20 Dark.
function roll20DarkFixChatSkillBackground() {
    let setting = fixChatSkillBackground;
    let settingType = 'fix-chat-skill-background';
    let settingName = 'Fix Chat: Skill Background';
    let fixCSS = 'div.sheet-rolltemplate-skill div.sheet-container {background-image: url("https://i.imgur.com/FjwWl2K.png") !important;background-color: transparent !important;}';

    // Start the injection while passing the variables.
    attemptApplication(setting, settingName, settingType, fixCSS);
};

// Start all functions.
function startFixes() {
    // Log that the code actually loaded.
    console.log('%cRoll20DarkFix: Code initialized, attempting injection.', 'color: #32CD32;');

    roll20DarkFixChatSmallScrollbar();
    roll20DarkFixChatSkillBackground();
};