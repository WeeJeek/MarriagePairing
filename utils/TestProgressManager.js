export class TestProgressManager{
  constructor()
  {
    //this.load_tests();
    this.load_report()
  }

  fs = wx.getFileSystemManager();
  _report_path = "../report/report.json"
  _test_paths = {
    'mbti': 'src/questionnaires/MBTI.json'
  }
  _report = ""



  has_test_progress(){
    console.log('no progress');
    return false;
  }

  load_report(){
    fetch(this._report_path)
      .then((res)=>{
        return res.json();
      })
      .then((data) => {
        this._report = data
        console.log("data logged")
      })
    /*this.fs.readFile({
      filePath: this._report_path,
      encoding:'utf8',
      position:0,
      success: res=>{
        console.log("report is logged")
      },
      fail:res=>{
        console.log("cannot log the report")
      }
    })*/
  }

  load_questionnaires(){
    this.load_mbti();
  }

  load_mbti()
  {
      fs.readFile({
        filePath: this._test_paths['mbti'],
        encoding: 'utf8',
        position: 0,
        success(res){
          console.log(res.data)
        },
        fail(res){
          console.error(res)
        }
      });
  }
}