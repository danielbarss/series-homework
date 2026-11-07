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

//B1   
export const getById = (series, id) =>{
    return series.find(show => show.id === id ?? "undefined");
}

//B2
export const getSeasonsCount = (series) =>{
    return series.map(show => ({ title: show.title, seasons: show.seasons.length }));
}

//B3
export const hasTopEpisode = (show, rating) => {
    return show?.seasons?.some(season => season.episodes.some(episode => episode.rating >= rating));
}

//B4
export const getCreatorsFrom = (series, country) => {
    return series.map(show => show.creators.filter(creator => creator.country === country));
}

//B5
export const sortByStartYear = (series) => {
    return [...series].sort((a, b) => a.startYear - b.startYear);
}

//C1
export const renameSeries = (series, id, newTitle) => {
    return series.map(show => show.id === id ? { ...show, title: newTitle } : show);
}

//C2
export const addSeason = (series, id, season) => {
    return series.map(show => show.id === id ? { ...show, seasons: [...show.seasons, season] } : show);
}
