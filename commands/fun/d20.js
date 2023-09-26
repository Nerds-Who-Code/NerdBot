const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('d20')
		.setDescription('Rolls a d20 dice '),
	async execute(interaction) {        
        	const roll = getRandomNumber();
		return interaction.reply(roll);
	},
};

function getRandomNumber() {
    const lowestNumber = 1;
    const highestNumber = 20;
    const result = Math.abs(Math.floor(Math.random() * (lowestNumber - highestNumber) + 1));
    return result;
}
