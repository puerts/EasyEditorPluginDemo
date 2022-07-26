"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpp_1 = require("cpp");
const puerts_1 = require("puerts");
class DemoWindow {
    constructor() {
        this.isOpened = puerts_1.$ref(true);
        this.simple_window_titil = puerts_1.toCString("Simple Window"); // faster than passing a string
        this.fruits = ["Apple", "Banana", "Cherry", "Kiwi", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon"];
        this.listbox_items = this.fruits.map(puerts_1.toCString);
        this.listbox_items_cptr_array = puerts_1.toCPtrArray.apply(null, this.listbox_items);
        this.f = puerts_1.$ref(0);
        this.showDemoWindow = puerts_1.$ref(false);
        this.rgb = new Float32Array([114 / 255, 144 / 255, 154 / 255, 255]);
        this.listbox_item_current = puerts_1.$ref(1);
        this.input_text = puerts_1.$ref("press tab please...");
        this.multi_line_text = puerts_1.$ref("/*\n" +
            " The Pentium F00F bug, shorthand for F0 0F C7 C8,\n" +
            " the hexadecimal encoding of one offending instruction,\n" +
            " more formally, the invalid operand with locked CMPXCHG8B\n" +
            " instruction bug, is a design flaw in the majority of\n" +
            " Intel Pentium, Pentium MMX, and Pentium OverDrive\n" +
            " processors (all in the P5 microarchitecture).\n" +
            "*/\n\n" +
            "label:\n" +
            "\tlock cmpxchg8b eax\n");
        this.multi_line_text_input_size = new cpp_1.ImVec2(-Number.MIN_VALUE, cpp_1.ImGui.GetTextLineHeight() * 16);
    }
    Render() {
        cpp_1.ImGui.SetNextWindowSize(new cpp_1.ImVec2(200, 100), 1 << 2);
        cpp_1.ImGui.Begin(this.simple_window_titil, this.isOpened);
        cpp_1.ImGui.Text("Hello, world!");
        cpp_1.ImGui.SliderFloat("float", this.f, 0.0, 1.0);
        cpp_1.ImGui.ColorEdit3("clear color", this.rgb);
        if (cpp_1.ImGui.Button("Demo Window")) {
            puerts_1.$set(this.showDemoWindow, !puerts_1.$unref(this.showDemoWindow));
        }
        cpp_1.ImGui.ListBox("listbox\n(single select)", this.listbox_item_current, this.listbox_items_cptr_array, 9, 4);
        cpp_1.ImGui.Text(`${this.fruits[puerts_1.$unref(this.listbox_item_current)]} selected`);
        cpp_1.ImGui.InputText("input with callback", this.input_text, 1 << 6, (data) => {
            console.log(`onComplete ${data.BufSize} ${data.SelectionStart} ${data.SelectionEnd}`);
            return 0;
        });
        //ImGuiInputTextFlags_AllowTabInput       = 1 << 10
        cpp_1.ImGui.InputTextMultiline("##source", this.multi_line_text, this.multi_line_text_input_size, 1 << 10);
        cpp_1.ImGui.Text(`Application average ${(1000 / cpp_1.ImGui.GetIO().Framerate).toFixed(3)} ms/frame (${cpp_1.ImGui.GetIO().Framerate.toFixed(1)} FPS)`);
        cpp_1.ImGui.End();
        if (puerts_1.$unref(this.showDemoWindow)) {
            cpp_1.ImGui.ShowDemoWindow(this.showDemoWindow);
        }
        if (this.counter++ % 100 == 0) {
            console.log(`counter:${this.counter}!`);
        }
        return puerts_1.$unref(this.isOpened);
    }
}
exports.DemoWindow = DemoWindow;
//# sourceMappingURL=DemoWindow.js.map