
import { Certificates } from "./cetificates.model";
import { PlotOutline } from "./plot-outline.model";
import { PlotSummary } from "./plot-summery.model";
import { Ratings } from "./rating.model";
import { Title } from "./title.model";

export interface OverviewDetails {
  id: string;
  title: Title;
  certificates: Certificates;
  ratings: Ratings;
  genres: string[];
  releaseDate: string;
  plotOutline: PlotOutline;
  plotSummary: PlotSummary;
}
