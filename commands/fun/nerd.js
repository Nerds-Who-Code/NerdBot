// the SlashCommandBuilder class constructs the command definitions

// the simplest way to acknowledge and respond to an interaction is the interaction.reply method
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nerd')
		.setDescription('Replies with Ya nerd!'),
	async execute(interaction) {
		return interaction.reply('Ya nerd!');
	},
};