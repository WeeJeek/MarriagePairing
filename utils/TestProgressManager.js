import { report } from "../src/questionnaires_related/report";
import {questionnaires} from "../src/questionnaires_related/questionnaire"

export class TestProgressManager{
  _report = {};
  _questionnaires = {}
  _has_test_progress = false;

  constructor()
  {
    this.load_report();
    this._questionnaires = questionnaires;
  }

  save_report(){
    wx.setStorage({
      key: "report",
      data: report,
      success: res =>{
        console.log('report is successfully saved');
      },
      fail: res=>{
        console.log('cannot save the report');
      }
    })
  }
  
  load_report(){
    wx.getStorage({
      key: "report",
      success: res => {
        this._report = res.data;
        if(this._report["report_info"]["created_date"] != ""){
          this._has_test_progress = true;
        }
        else{
          this._has_test_progress = false;
        }
        console.log('test progress is successfully logged');
      },
      fail: res => {
        this._has_test_progress = false;
        console.log('there is no test progress yet');
      }
    })
  }

  has_test_progress(){
    return this._has_test_progress;
  }
}