README
Voice Over Nexus Fandub
v0.3.5
as implemented by zenny

Adds Voice Over Nexus' Homestuck fan-dub to the Collection. By default, clips are set to autoplay and are at 70% volume (or they should be, at least), both of which can be changed in the settings of the mod in UHC. There is also an option to toggle the censoring of slurs.

===Notes=======================================
- **THIS DUB IS NOT COMPLETE**. As many reading this can attest, Homestuck is very big, and a project such as a fandub that is done out of love and force of will takes a lot of time. As of version 0.3.5, this mod implements the fandub up to page 1357 (meaning Acts 1, 2, 3, and the Intermission are all fully implemented).

-**THIS DUB IS NOT MINE**, and neither is the Unofficial Homestuck Collection or Homestuck itself. I take no credit for the creation of the dub, I just made a simple mod to give the UHC the assets and pointers to do this.

-As with any decade-long project, the VOnexus fandub has it's ups and downs, though I find it a pleasurable way to experience Homestuck regardless. I did minimal edits to the audio (mostly cutting it into the pages and removing some conjunctions to make it flow better). Audio volume, quality, and experience will vary over the course of the fandub.

-Most pages have background music in the clips, because the corresponding video has background music. I have no means of fixing this that I am comfortable with.

-Pages where the fandub only adds sound effects, and pages that are [S] pages where the dub wouldn't sound good when played along with the [S] page do not have their fandub audio implemented. If there is enough desire for this to be changed, I may add an option to turn these on.

-I recommend turning on "Automatically open logs" in UHC's settings, it makes it easier to follow along.

===Installation==================================
-**TLDR**: In the folder contained in the zip file there should be a folder named "vonexus-fandub". Dragging that folder into your mod directory should cause the mod to show up in your Inactive Mods. This mod shouldn't conflict with most existing mods, though it's possible other mods that renumber pages may break it, or that this mod may break mods that change the layout.

-This mod has two 'parts' (much like the UHC itself): the audio assets and three other files that make up the brain of the mod. The audio files are sorted into folders based on act, and named after the MSPA page number of their respective pages.
	-mod.js does most things. It grabs the correct audio for the page, defines and stores settings, actually puts the audio on to the page, etc.
	-mapping.json tells the mod what mp3 cooresponds to what page. Because of this, changing the file names or altering the page numbering system will probably break the affected pages' audio, though my assumption is most of the mod would keep working. Worst case scenario, all of the audio gets offset because of an inserted page.
	-style.css tells the mod what the audio player should look like.

===Credits======================================
-Andrew Hussie, creator of Homestuck

-Bambosh and Giovan_h, creators of the Unofficial Homestuck Collection
https://homestuck.github.io

-Voice Over Nexus
https://www.youtube.com/@Voxus
https://bsky.app/profile/voxus.bsky.social

-And finally, the wonderful cast of the dub. Thank you for your hard work and dedication over the years. You've made this community better for every person you've touched.
https://voiceovernexus.tumblr.com/post/22411586910/cast-list

Started - 5/21/26
Released - [TBD]