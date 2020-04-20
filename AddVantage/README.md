# AddVantage

Add advantage and disadvantage icons next to any saving throw or skill check of your choosing.  

![](side-by-side-small.png)

## Setting Up AddVantage

For each saving throw and skill check, there is a variable. You can choose which icon you'd like by changing the string of that variable.  

### Default Settings for Saves and Skills

By default, all variables have the string of 'none'. This means that there will not be an image showing next to that roll.   
If you'd like to show an advantage icon next to a save or skill, change 'none' to 'advantage'.  
If you'd like to show a disadvantage icon next to a save or skill, change 'none' to 'disadvantage'.  

### Changing the Default Settings for Saves and Skills

In order for an advantage icon to show next to your intelligence saving throw, it must look like this:  
savingThrowIntelligence = 'advantage';  
To show a disadvantage icon next to your stealth check, it must look like this:  
skillCheckStealth = 'disadvantage';  

There is an automatic system that checks to see if all the settings are input correctly. If you mistype one of the key words, it will automatically skip that save/skill and say in the console that there was an error for that specific save/skill.  

The only three settings that you are able to use are as following:  
'none';  
'advantage';  
'disadvantage';  

### Default Settings for the Images

If you so wish, you can also change the images that show next to the saves/skills. By default, these are the settings for the images:  
imageAdvantage = 'https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/advantage-icon.svg';  
imageDisadvantage = 'https://www.dndbeyond.com/Content/Skins/Waterdeep/images/character-sheet/disadvantage-icon.svg';  

### Changing the Default Settings for the Images

You can change the link for the image, just make sure that the link is wrapped in quotes like default. It is recommended that the background of the images are transparent. They should look similar to this:  
imageAdvantage = 'https://YourDomain.com/images/YourAdvantageImage.png';  
imageDisadvantage = 'https://YourDomain.com/images/YourDisadvantageImage.png';  


### Default Settings for the Styling of the Images

You can also change the styling of the image. Here are the default settings:  
imageAdvantageStyling = 'height: 12px; width: 12px; padding-left: 5px;';  
imageDisadvantageStyling = 'height: 12px; width: 12px; padding-left: 5px;';  

### Changing the Default Settings for the Styling of the Images

You can change the styling, just make sure that it is wrapped in quotes like default. It is recommended that the icons remain in their original aspect ratio. In this case, we are keeping them square.  
The padding is how much space is added to the left of the image. This is how far away from the name of the save/skill you want the icon to be.  
This is the code that is injected into the "style" tag of the image. Code it as you would a normal image.  
imageAdvantageStyling = 'height: 10px; width: 10px; padding-left: 5px;';  
imageDisadvantageStyling = 'height: 10px; width: 10px; padding-left: 5px;';  

## Using AddVantage

In order for the icons to inject into your character sheet, you must first open the character sheet. This script attempts to inject the icons every ten seconds until it detects that your character sheet is open.  

### For Embed Character Sheets:

By "embed character sheet", I mean the character sheet that is open inside the app of Roll20.  

Once the icons are injected into your character sheet, they will stay in place until you close out of your character sheet. The icons will stay in place as long as you keep your character sheet open or minimized. Once you close out of the embed character sheet, the icons will disappear and the only way to add them again would be to reload Roll20.  

### For Pop-Out Character Sheets:

By "pop-out character sheet", I mean the character sheet that is popped-out of the embed character sheet (by clicking the button at the top-left of the character sheet).  

If the icons were already injected into your embed character sheet, the icons will stay in place. Because the script runs when the Roll20 editor app on any window, the script will run again. However, there is a system put in place where if there are icons that were previously injected, it will not inject them again.  

If you close out of the pop-out character sheet, the icons will disappear. However, if you do open another pop-out character sheet, the icons will inject again since the script runs as soon as the window loads.  

## Updating AddVantage

### Updating the Main Script

The main script (the one that you use in Tampermonkey, Greasemonkey, or an equivalent program - AddVantage.user.js) should automatically update over time, if there are updates. If you'd like, you may check the support URL in the script (which directs to this page) and check manually if there was an update.  

If there was an update, please keep in mind which settings you had changed previously. Updating the script will overwrite any changes you have made.  

### Updating the Background Script

The background script (in the "@require" tag in the top of the userscript - AddVantageBackground.js) should update automatically, meaning you shouldn't have to do anything. If you do find that the background script isn't updating as it should be, change the "@require" tag's link, save the script, then change it back and save it again. That should then load the latest version of the background script.  

## Support

If you notice any bugs or would like a certain feature to be implemented to this script, feel free to either message me or submit a ticket (under the "Issue" tab on GitHub).

If you do not want to create a ticket or have any questions reguarding this script, feel free to message me.

[GitHub: Mrlilal](https://github.com/Mrlilal) || Discord: Mrliall#3758 || [Twitter: @Mrlilal](https://twitter.com/mrlilal)

## Discalaimers

### Roll20

This plugin was built for the D&D 5th Edition character sheet version 4.21 on Roll20. This script is untested on any other version of character sheet.

We do not own any character sheets. We just like to create things to fix or add features that we believe can be used and enjoyed by many.  

### Images

We do not own the rights to any images used in this script. We do not assume responsibility for any copyrighted imaging used in this script.