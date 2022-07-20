import {ImGui, ImVec2, ImGuiInputTextCallbackData} from 'cpp'
import {$ref, $unref, $set, toCString, toCPtrArray, $Ref} from 'puerts';


class DemoWindow {
    simple_window_titil : ArrayBuffer
    fruits: string[];
    listbox_items: ArrayBuffer[];
    listbox_items_cptr_array:ArrayBuffer;

    f: $Ref<number>;
    showDemoWindow: $Ref<boolean>;
    rgb: Float32Array;
    listbox_item_current: $Ref<number>;
    input_text: $Ref<string>;

    multi_line_text: $Ref<string>;
    multi_line_text_input_size:ImVec2;

    counter:number;

    constructor() {
        this.simple_window_titil = toCString("Simple Window"); // faster than passing a string
        this.fruits = [ "Apple", "Banana", "Cherry", "Kiwi", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon"];
        this.listbox_items = this.fruits.map(toCString);
        this.listbox_items_cptr_array = toCPtrArray.apply(null, this.listbox_items);

        this.f = $ref(0);
        this.showDemoWindow = $ref(false);
        this.rgb = new Float32Array([114/255, 144/255, 154/255, 255]);
        this.listbox_item_current = $ref(1);
        this.input_text = $ref("press tab please...");

        this.multi_line_text = $ref("/*\n" +
        " The Pentium F00F bug, shorthand for F0 0F C7 C8,\n" +
        " the hexadecimal encoding of one offending instruction,\n" +
        " more formally, the invalid operand with locked CMPXCHG8B\n" +
        " instruction bug, is a design flaw in the majority of\n" +
        " Intel Pentium, Pentium MMX, and Pentium OverDrive\n" +
        " processors (all in the P5 microarchitecture).\n" +
        "*/\n\n" +
        "label:\n" +
        "\tlock cmpxchg8b eax\n");
        this.multi_line_text_input_size = new ImVec2(-Number.MIN_VALUE, ImGui.GetTextLineHeight() * 16)
    }

    Render() : boolean {
        let isOpened = $ref(true);
        ImGui.SetNextWindowSize(new ImVec2(200, 100), 1 << 2)
        ImGui.Begin(this.simple_window_titil, isOpened);
    
        ImGui.Text("Hello, world!");
        ImGui.SliderFloat("float", this.f, 0.0, 1.0);
        ImGui.ColorEdit3("clear color", this.rgb);
    
        if(ImGui.Button("Demo Window"))
        {
            $set(this.showDemoWindow, !$unref(this.showDemoWindow));
        }
    
        ImGui.ListBox("listbox\n(single select)", this.listbox_item_current, this.listbox_items_cptr_array, 9, 4);
    
        ImGui.Text(`${this.fruits[$unref(this.listbox_item_current)]} selected`);
    
        ImGui.InputText("input with callback", this.input_text, 1 << 6, (data:ImGuiInputTextCallbackData) => {
            console.log(`onComplete ${data.BufSize} ${data.SelectionStart} ${data.SelectionEnd}`);
            return 0;
        });

        //ImGuiInputTextFlags_AllowTabInput       = 1 << 10
        ImGui.InputTextMultiline("##source", this.multi_line_text , this.multi_line_text_input_size, 1 << 10);
    
        ImGui.Text(`Application average ${(1000 / ImGui.GetIO().Framerate).toFixed(3)} ms/frame (${ImGui.GetIO().Framerate.toFixed(1)} FPS)`);
        ImGui.End();
    
        if ($unref(this.showDemoWindow)) {
            ImGui.ShowDemoWindow(this.showDemoWindow);
        }
    
        if (this.counter++ % 100 == 0) {
            console.log(`counter:${this.counter}!`);
        }
    
        return $unref(isOpened);
    }
}

export {DemoWindow};

