// 所谓content-scripts，其实就是Chrome插件中向页面注入脚本的一种形式（虽然名为script，其实还可以包括css），
// 借助content-scripts我们可以实现通过配置的方式轻松向指定页面注入JS和CSS（如果需要动态注入，可以参考下文），
// 最常见的比如：广告屏蔽、页面CSS定制，等等。

// 接收消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // 数据处理和返回。是不是有点类似redux中reducer数据处理的感觉
    switch (request.type) {
      case 'get_editable':
        // 将当前文档是否可编辑的信息返回给popup，控制开关的形态
        sendResponse(document.body.contentEditable);
        break;
      case 'toggle':
        // 切换可编辑状态
        document.body.contentEditable = ![true, 'true'].includes(
          document.body.contentEditable
        );
      default:
        break;
    }
  });