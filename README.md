# EasyEditorPluginDemo

## 怎么跑？

* git clone --recurse-submodules https://github.com/puerts/EasyEditorPluginDemo.git

* 下载脚本引擎后端，目前默认的热刷新机制还不支持nodejs后端，而v8后端没有nodejs功能丰富

  - nodejs下载：[libnode](https://github.com/puerts/backend-nodejs/releases/tag/NodeJS_0425)，解压到[Plugins/Puerts/ThirdParty](Plugins/Puerts/ThirdParty)
  
  - v8下载：[V8_8.4.371.19_0323](https://github.com/puerts/backend-v8/releases/tag/V8_8.4.371.19_0323)，解压到[Plugins/Puerts/ThirdParty](Plugins/Puerts/ThirdParty)

* 右键选择EasyEditorPluginDemo.uproject，生成vs工程（window）或者xcode工程（mac）

* 打开vs工程（window）或者xcode工程（mac），运行


## 怎么看

代码在[EasyEditorDemo](EasyEditorDemo)，纯ts工程，用vscode打开改目录即可。

