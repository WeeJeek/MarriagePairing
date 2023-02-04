export class TestManager{
  constructor()
  {
    //this.load_tests();
  }

  _test_paths = {
    'mbti': 'src/questionnaires/MBTI.json'
  }

  has_test_progress(){
    console.log('no progress');
    return false;
  }

  load_tests(){
    this.load_mbti();
  }

  load_mbti()
  {
    const fs = wx.getFileSystemManager();
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