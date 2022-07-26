# EasyEditorPluginDemo

## 怎么跑？

* git clone --recurse-submodules https://github.com/puerts/EasyEditorPluginDemo.git

* nodejs下载：[libnode](https://github.com/puerts/backend-nodejs/releases/tag/NodeJS_220726_2)，解压到[Plugins/Puerts/ThirdParty](Plugins/Puerts/ThirdParty)

* 右键选择EasyEditorPluginDemo.uproject，生成vs工程（window）或者xcode工程（mac）

* 打开vs工程（window）或者xcode工程（mac），运行


## demo说明

* 纯TS代码工程，工程位于[EasyEditorDemo](EasyEditorDemo)，用vscode打开该目录即可。

* [Main.ts](EasyEditorDemo/src/Main.ts)：入口，该代码添加了写菜单，工具栏等

* [DemoWindow.ts](EasyEditorDemo/src/DemoWindow.ts)：ImGUI窗口延时

* [NodejsDemo](EasyEditorDemo/src/NodejsDemo)：UE API调用，nodejs（fs），ImGUI的综合例子

