const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');


const epicFailGif = "https://media.tenor.com/GVyYZaJuXRMAAAAC/fail-puppy.gif";
const failGif = "https://media.tenor.com/DjFSqT3bOeoAAAAC/epic-fail-jumping-fail.gif";
const epicWinGif = "https://media.tenor.com/UYuhWsPNy84AAAAd/blind-shot-trick-shot.gif";
const winGif = "https://media.tenor.com/X5QM_xv9XW8AAAAC/golden-retriever-dog.gif";


module.exports = {
	data: new SlashCommandBuilder()
		.setName('d20')
		.setDescription('Rolls a d20 dice ')
		.addStringOption(option => 
            option
            .setName('description')
            .setDescription('What do you want to attempt to do?')
            .setRequired(true)),
	async execute(interaction) {        
        const member = interaction.member;
        const roll = getRandomNumber();
        const action = interaction.options.getString('description');        
        try {   
            let response = `${member} attempted to ${action}.\nThey rolled`;
            if (roll === 8 || roll === 11 || roll === 18) 
                response = `${response} an ${roll}.\n`;
            else 
                response = `${response} a ${roll}.\n`; 
            if (roll < 11 && roll > 1) 
                response = `${response}They FAILED. Better luck next time.`
            else if (roll === 1)
                response = `${response}They FAILED EPICALLY! They should just quit now.`
            else if (roll > 10 && roll < 20)
                response = `${response}They SUCCEEDED. Well done.`
            else if (roll === 20) 
                response = `${response}They SMASHED IT! They should be so proud of themselves for achieving something completely randomly with no skill whatsoever.`            

            await postGif(interaction, roll, response);

        } catch (error) {
            console.log(error);
        }
	},
};

const postGif = async (interaction, roll, response) => {
    var embed = new EmbedBuilder()
                    .setColor('#FFDB69');
    if (roll === 1)
        embed.setImage(epicFailGif);
    else if (roll > 1 && roll < 11) 
        embed.setImage(failGif);
    else if (roll === 20)
        embed.setImage(epicWinGif);
    else if (roll > 10 && roll < 20)
        embed.setImage(winGif);
        
    embed.setDescription(response);
    
    interaction.reply({        
        embeds: [embed]
    });
}

function getRandomNumber() {
    const lowestNumber = 1;
    const highestNumber = 20;
    const result = Math.abs(Math.floor(Math.random() * (lowestNumber - highestNumber) + 1));
    if (result === 0) {
        console.log("Result was 0, re-rolling");
        return getRandomNumber();
    }
    return result;
}
