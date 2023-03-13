import {report} from "../src/tests_related/test_records";
import {MBTI} from "../src/tests_related/mbti"

export class TestProgressManager{
  _report = {};
  _tests = {};
  _has_test_progress = false;
  _cur_test_index = 0;
  _test_category_index = 0;

  constructor()
  {
    this.load_report();
    this._tests = MBTI;
  }

  save_report(){
    wx.setStorage({
      key: "test_records",
      data: test_records,
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
      key: "test_records",
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

  get_current_test()
  {
    return this._tests['MBTI']['questions'][this._cur_test_index]
    //TODO make an enum for test category
  }

  get_current_test_set()
  {

  }
}