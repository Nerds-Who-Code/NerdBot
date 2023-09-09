// the SlashCommandBuilder class constructs the command definitions

// the simplest way to acknowledge and respond to an interaction is the interaction.reply method
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with a greeting!'),
	async execute(interaction) {
		return interaction.reply("Hello! I'm NerdBot, the new bot for Nerds Who Code. I'm still new here so I can't do much yet, but eventually I'll be able to do some pretty cool things!");
	},
};