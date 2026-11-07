//A1
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
  return show?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]?.title;
};
//A2
export const getLastSeasonNumber = show => {
  const lastSeason = show?.seasons?.[show.seasons.length - 1];
  return lastSeason ? lastSeason.number : 0;
}
//A3
export const getNextSeasonYear = show => {
  return show?.nextSeason?.year ?? "No announcement";
}

