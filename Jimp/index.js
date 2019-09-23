/*
 * Made by Jacxk
 * Video Tutorial: https://youtu.be/ciS5EPjKIXg
 */

const Jimp = require('jimp');
const discord = require("discord.js");

async function createImage() {
    // Create blank image
    const background = new Jimp(1280, 720);
    // Get image from url
    const avatar = await Jimp.read("https://sourcebot.net/images/sourcebot/purple.png?v1");
    // Load the font to use
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);

    // Write text to the image
    await background.print(font, 0, 0, {
        text: "Hello World!",
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, // Middle alignment from left to right
        alignmentY: 0 // Middle alignment from top to bottom (use Jimp.VERTICAL_ALIGN_MIDDLE)
    }, background.bitmap.width, background.bitmap.height); // max height and width of the text

    // Resize image duh
    await avatar.resize(50, 50);

    // Middle alignment from left to right
    const horizontal = Math.floor((background.bitmap.width / 2) - (avatar.bitmap.width / 2));
    // Middle alignment from top to bottom
    const vertical = Math.floor((background.bitmap.height / 2) - (avatar.bitmap.height / 2));

    // Merge the avatar with the background
    await background.composite(avatar, horizontal, vertical);

    // Save the image locally.
    await background.writeAsync("./thumbnail.png");

    // Get image's buffer and send it to discord.
    avatar.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        // Always check for errors.
        if (err) return console.log(err);
        // Channel to send the image to (don't forget to define channel)
        channel.send({file: buffer});
    })
}

// Discord stuff
const client = new discord.Client();
client.on("ready", () => createImage().catch(console.error));
client.login("TOKEN").catch(console.error);