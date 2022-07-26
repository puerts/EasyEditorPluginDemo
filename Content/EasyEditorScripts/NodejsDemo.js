"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpp_1 = require("cpp");
const puerts_1 = require("puerts");
const fs = require("fs");
const UE = require("ue");
class NodeDemoWindow {
    constructor() {
        this.all_files_in_content_dir = [];
        this.simple_window_titil = puerts_1.toCString("Nodejs Demo"); // faster than passing a string
        this.button_text = puerts_1.toCString("refresh");
        this.content_dir = UE.KismetSystemLibrary.GetProjectContentDirectory();
    }
    Render() {
        let isOpened = puerts_1.$ref(true);
        cpp_1.ImGui.SetNextWindowSize(new cpp_1.ImVec2(200, 100), 1 << 2);
        cpp_1.ImGui.Begin(this.simple_window_titil, isOpened);
        if (cpp_1.ImGui.Button(this.button_text)) {
            this.all_files_in_content_dir = fs.readdirSync(this.content_dir);
        }
        if (cpp_1.ImGui.TreeNode('content_dir', this.content_dir)) {
            this.all_files_in_content_dir.forEach(file => {
                if (cpp_1.ImGui.TreeNode(file, file)) {
                    cpp_1.ImGui.TreePop();
                }
            });
            cpp_1.ImGui.TreePop();
        }
        cpp_1.ImGui.End();
        return puerts_1.$unref(isOpened);
    }
}
exports.NodeDemoWindow = NodeDemoWindow;
//# sourceMappingURL=NodejsDemo.js.map