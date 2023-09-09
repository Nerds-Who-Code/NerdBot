// the SlashCommandBuilder class constructs the command definitions

// the simplest way to acknowledge and respond to an interaction is the interaction.reply method
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('Replies with a welcoming message for new members!'),
	async execute(interaction) {
		return interaction.reply("Hello and welcome to Nerds Who Code! To get started in our community, please read our <#973721301493641236> and follow the instructions within to fully unlock our Discord server. You're welcome to introduce yourself in our <#973726555069091930> channel and see if you fancy any of these <#986040362390941776>! Let us know if you have any questions or need help navigating the server.");
	},
};