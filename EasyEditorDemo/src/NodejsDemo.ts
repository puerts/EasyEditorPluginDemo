import {ImGui, ImVec2, ImGuiInputTextCallbackData} from 'cpp'
import {$ref, $unref, $set, toCString, toCPtrArray, $Ref} from 'puerts';
import * as fs from 'fs'
import * as UE from 'ue'


class NodeDemoWindow {
    simple_window_titil : ArrayBuffer
    button_text: ArrayBuffer
    content_dir:string;
    all_files_in_content_dir:string[] = [];

    isOpened = $ref(true);

    constructor() {
        this.simple_window_titil = toCString("Nodejs Demo"); // faster than passing a string
        this.button_text = toCString("refresh");
        this.content_dir = UE.KismetSystemLibrary.GetProjectContentDirectory();
    }

    Render() : boolean {
        ImGui.SetNextWindowSize(new ImVec2(200, 100), 1 << 2)
        ImGui.Begin(this.simple_window_titil, this.isOpened);
    
        if(ImGui.Button(this.button_text))
        {
            this.all_files_in_content_dir = fs.readdirSync(this.content_dir);
        }

        if (ImGui.TreeNode('content_dir', this.content_dir)) {
            this.all_files_in_content_dir.forEach(file => {
                if (ImGui.TreeNode(file, file)) {
                    ImGui.TreePop();
                }
            });
            ImGui.TreePop();
        }

        ImGui.End();
    
        return $unref(this.isOpened);
    }
}

export {NodeDemoWindow};

