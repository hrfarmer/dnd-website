"use server";

export async function checkIfInDiscord(username: string) {
  const guildId = process.env.DISCORD_GUILD_ID ?? "";
  const botToken = process.env.DISCORD_BOT_SECRET ?? "";

  const params = new URLSearchParams();
  params.append("limit", "1000");

  const headers = new Headers();
  headers.append("Authorization", botToken);

  const response = await fetch(
    `https://discord.com/api/guilds/${guildId}/members?${params.toString()}`,
    {
      method: "GET",
      headers: headers,
    }
  );

  const users = await response.json();

  for (const user of users) {
    if (user.user.username === username) {
      return true;
    }
  }

  return false;
}
