import { Movies } from "../api/request-models/movies.model";
import { OverviewDetails } from "../api/request-models/overview-details.model";
import { Scores } from "../api/request-models/scores.model";
import { MovieVM } from "../vm/movies/movie-vm.model";
import { OverviewDetailVM } from "../vm/movies/overview-detail-vm.model";
import { ScoreVm } from "../vm/movies/score-vm.model";
export function mapScore(param:Scores):ScoreVm{
 const score = {} as ScoreVm;
 if(param.overall){
  score.overall = Number(param.overall).toFixed(1);
 }

 return score;
}
export function mapOverview(param:OverviewDetails): OverviewDetailVM{
  const overviewDetails = {} as OverviewDetailVM;
  overviewDetails.title = param.title.title;
  if(param.plotSummary){
    overviewDetails.plotSummery = param.plotSummary.text;
    overviewDetails.genres = param.genres
  }

  overviewDetails.genres = param.genres;
  return overviewDetails
}
export function mapPendingMovies(param:Movies[]):MovieVM[]{
  const movies:MovieVM[] = []
  param.forEach(para=>{
    const movie  = {} as MovieVM;
    movie.imageUrl = para["overview-details"].title.image.url
    movie.overview = mapOverview(para["overview-details"]);
    movie.score = mapScore(para.scores)
    movies.push(movie)
  })
  return movies;
}
