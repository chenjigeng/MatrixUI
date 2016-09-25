/**
 *
 * @description 测试MatrixUI和提供文档的模块
 * @author 吴家荣 <jiarongwu.se@foxmail.com>
 *
 */

angular
  .module('testMatrixUIApp', ['matrixui'])
  .controller('testCtrl', testCtrl);

/**
 *
 * @description testCtrl控制器
 * @author 吴家荣 <jiarongwu.se@foxmail.com>
 *
 */

function testCtrl($scope, $http) {

  function getDocsFilenames() {
    let docs = [
      'button',
      'card',
      'checkbox',
      'codeeditor',
      'datatable',
      'dialog',
      'markdown',
      'mdeditor',
      'panel',
      'radio',
      'select',
      'spinner',
      'tab'
    ];

    return docs;
  }

  function getDocs() {
    let docs = getDocsFilenames();
    docs.forEach((item)=> {
      $http({
        method: 'GET',
        url: `/docs/${item}.md`
      }).then(function(res) {
        let { data } = res;
        $scope[`${item}Docs`] = data;
      }, function(res) {
        alert('数据访问错误');
      });
    });
  }

  function getMarkdownData() {
    $http({
      method: 'GET',
      url: `/data/markdown.md`
    }).then(function(res) {
      let { data } = res;
      $scope['markdown'] = data;
    }, function(res) {
      alert('数据访问错误');
    });
  }

  /* 按照顺序执行定义的函数 */

  function initTestCtrl() {
    getDocs();
    getMarkdownData();
  }

  /* Controller入口函数 */

  initTestCtrl();
};