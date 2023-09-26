const { SlashCommandBuilder } = require('discord.js');

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
            if (roll < 10 && roll > 1) 
                response = `${response}They FAILED. Better luck next time.`
            else if (roll === 1)
                response = `${response}They FAILED SPECTACULARLY! They should just quit now.`
            else if (roll > 10 && roll < 20)
                response = `${response}They SUCCEEDED. Well done.`
            else if (roll === 20) 
                response = `${response}They SMASHED IT! They should be so proud of themselves for achieving something completely randomly with no skill whatsoever.`
            return interaction.reply(response);
        } catch (error) {
            console.log(error);
			return interaction.reply("An error occurred");
        }
	},
};

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
