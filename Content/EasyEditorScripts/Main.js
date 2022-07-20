"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const cpp = require("cpp");
const DemoWindow_1 = require("./DemoWindow");
const puerts_1 = require("puerts");
//EasyEditorPlugin.SetEval(eval); //全局执行一次即可，让c++有执行一段js代码文本的能力
const menus = UE.ToolMenus.Get();
const main_menu = menus.FindMenu("LevelEditor.MainMenu");
if (!main_menu) {
    throw new Error("Failed to find the 'Main' menu. Something is wrong in the force!");
}
//主菜单
{
    const script_menu = main_menu.AddSubMenuScript(main_menu.GetName(), "Puerts", "Puerts", "Puerts", "Puerts Demo...");
    //添加菜单
    {
        const entry = UE.ToolMenuEntry.InitMenuEntry("ShowDemoWindow", "ShowDemoWindow", "just a test...", () => {
            let demo = new DemoWindow_1.DemoWindow();
            cpp.UEImGui.AddGlobalWindow(demo.Render.bind(demo));
        });
        script_menu.AddMenuEntry("Scripts", entry);
    }
    //类似python执行一个脚本的能力
    //{
    //依赖于EasyEditorPlugin.SetEval
    //    const entry = UE.ToolMenuEntryExtensions.InitMenuEntry(script_menu.GetName(), "ExecuteScript", "ExecuteScript", "hello...", UE.EToolMenuStringCommandType.Custom, "TypeScript", "console.log('hello world')");
    //    script_menu.AddMenuEntry("Scripts", entry);
    //}
}
const toolbar = menus.FindMenu('LevelEditor.LevelEditorToolBar');
//toolbar button
{
    const entry = UE.ToolMenuEntry.InitToolBarButton("Widget", "ImGUIWidget", () => {
        cpp.UEImGui.AddGlobalWindow(() => {
            let isOpened = puerts_1.$ref(true);
            cpp.ImGui.SetNextWindowSize(new cpp.ImVec2(500, 800), 1 << 3);
            cpp.ImGui.Begin("Imgui Small Widget Demo", isOpened);
            cpp.UEImGui.DrawSmallWidgetDemo();
            cpp.ImGui.End();
            return puerts_1.$unref(isOpened);
        });
    });
    toolbar.AddMenuEntry("ImGUIWidget", entry);
}
//toolbar ComboButton
{
    // 系统的icon可以在SlateEditorStyle.cpp里找
    const icon = new cpp.FSlateIcon("EditorStyle", "LevelEditor.WorldProperties", "LevelEditor.WorldProperties.Small");
    const entry = UE.ToolMenuEntry.InitComboButton("Puerts", undefined, (tool_menu) => {
        const sub_entry = UE.ToolMenuEntry.InitMenuEntry("ShowDemoWindow", "ShowDemoWindow", "just a test...", () => {
            let demo = new DemoWindow_1.DemoWindow();
            cpp.UEImGui.AddGlobalWindow(demo.Render.bind(demo));
        });
        tool_menu.AddMenuEntry("ShowDemo", sub_entry);
    }, "Puerts", "Puerts", icon);
    toolbar.AddMenuEntry("ComboButton", entry);
}
const folder_context_menu = menus.FindMenu('ContentBrowser.FolderContextMenu');
{
    const entry = UE.ToolMenuEntry.InitMenuEntry("PuertsOpen", "PuertsOpen", "just a test...", (context) => {
        if (context) {
            const context_menu_context = UE.ToolMenus.FindContext(context, UE.ContentBrowserDataMenuContext_FolderMenu.StaticClass());
            if (context_menu_context) {
                const selected_items = context_menu_context.SelectedItems;
                console.log(`selected_items num:${selected_items.Num()}`);
                for (var i = 0; i < selected_items.Num(); i++) {
                    const selecte_item = selected_items.Get(i);
                    let path = puerts_1.$ref();
                    selecte_item.GetItemPhysicalPath(path);
                    console.log(`name:${selecte_item.GetItemName()}, path:${path}, isfolder:${selecte_item.IsFolder()}`);
                }
            }
        }
    });
    folder_context_menu.AddMenuEntry("TS", entry);
}
const asset_context_menu = menus.FindMenu('ContentBrowser.AssetContextMenu');
{
    const entry = UE.ToolMenuEntry.InitMenuEntry("PuertsAssetOpen", "PuertsAssetOpen", "just a test...", (context) => {
        if (context) {
            const context_menu_context = UE.ToolMenus.FindContext(context, UE.ContentBrowserAssetContextMenuContext.StaticClass());
            console.log(typeof context_menu_context);
            if (context_menu_context) {
                const selected_objects = context_menu_context.SelectedObjects;
                console.log(`selected_objects num:${selected_objects.Num()}`);
                for (var i = 0; i < selected_objects.Num(); i++) {
                    const selecte_objects = selected_objects.Get(i);
                    console.log(typeof (selecte_objects), selecte_objects.GetClass().GetName());
                }
            }
        }
    });
    asset_context_menu.AddMenuEntry("TS", entry);
}
cpp.EasyEditorPlugin.AddConsoleCommand("Puerts.TestCmd", "just a test...", (...args) => {
    for (var i = 0; i < args.length; i++) {
        console.log(`arg${i}: ${args[i]}`);
    }
});
menus.RefreshAllWidgets();
//EasyEditorPlugin.SetOnJsEnvPreReload(() => {
//    menus.RemoveMenu("LevelEditor.MainMenu.Puerts");
//    menus.RefreshAllWidgets();
//});
//# sourceMappingURL=Main.js.map