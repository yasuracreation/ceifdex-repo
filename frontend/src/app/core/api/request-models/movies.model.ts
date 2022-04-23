import { OverviewDetails } from "./overview-details.model";
import { Scores } from "./scores.model";
import { UserPayload } from "./user-payload.model";

export interface Movies{
  _id: number;
  scores: Scores;
 "overview-details": OverviewDetails;
  user_payload: UserPayload;
  firebase_url: string;
}
