import { OverviewDetailVM } from "./overview-detail-vm.model"
import { ScoreVm } from "./score-vm.model"

export interface MovieVM{
  id:string,
  score:ScoreVm,
  overview:OverviewDetailVM
  userPayload:any,
  firebaseUrl:string
  imageUrl:string
}
