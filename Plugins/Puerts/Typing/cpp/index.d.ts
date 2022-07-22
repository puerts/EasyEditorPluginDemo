declare module "cpp" {
    import * as UE from "ue"
    import * as cpp from "cpp"
    import {$Ref, $Nullable, cstring} from "puerts"

    class EasyEditorPlugin {
        static SetOnJsEnvPreReload(p0: () => void) :void;
        static SetEval(p0: (p0:string) => void) :void;
        static AddConsoleCommand(p0: string, p1: string, p2: ()=>void) :number;
        static RemoveConsoleCommand(p0: number) :void;
    }

    class FSlateIcon {
        constructor();
        constructor(p0: string, p1: string);
        constructor(p0: string, p1: string, p2: string);
    }

    class ImDrawData {
        constructor();
        Valid: boolean;
        CmdListsCount: number;
        TotalIdxCount: number;
        TotalVtxCount: number;
        DisplayPos: ImVec2;
        DisplaySize: ImVec2;
        FramebufferScale: ImVec2;
    }

    class ImDrawList {
        Flags: number;
        _OwnerName: cstring;
        _VtxCurrentIdx: number;
        _VtxWritePtr: ImDrawVert;
        _IdxWritePtr: number;
        _Splitter: ImDrawListSplitter;
        AddText(p0: ImVec2, p1: number, p2: cstring, p3?: cstring) :void;
        AddText(p0: ImFont, p1: number, p2: ImVec2, p3: number, p4: cstring, p5?: cstring, p6?: number, p7?: ImVec4) :void;
    }

    class ImDrawListSharedData {
    }

    class ImDrawListSplitter {
    }

    class ImDrawVert {
    }

    class ImFont {
        FallbackAdvanceX: number;
        FontSize: number;
        FallbackGlyph: ImFontGlyph;
        ContainerAtlas: ImFontAtlas;
        ConfigData: ImFontConfig;
        ConfigDataCount: number;
        FallbackChar: number;
        EllipsisChar: number;
        Scale: number;
        Ascent: number;
        Descent: number;
        MetricsTotalSurface: number;
        DirtyLookupTables: boolean;
    }

    class ImFontAtlas {
        Locked: boolean;
        Flags: number;
        TexID: ArrayBuffer;
        TexDesiredWidth: number;
        TexGlyphPadding: number;
        TexPixelsAlpha8: number;
        TexPixelsRGBA32: number;
        TexWidth: number;
        TexHeight: number;
        TexUvScale: ImVec2;
        TexUvWhitePixel: ImVec2;
    }

    class ImFontConfig {
    }

    class ImFontGlyph {
    }

    class ImGui {
        static Text(p0: string) :void;
        static TextColored(p0: ImVec4, p1: string) :void;
        static TextDisabled(p0: string) :void;
        static TextWrapped(p0: string) :void;
        static LabelText(p0: cstring, p1: string) :void;
        static BulletText(p0: string) :void;
        static TreeNode(p0: cstring, p1: string) :boolean;
        static TreeNode(p0: ArrayBuffer, p1: string) :boolean;
        static TreeNodeEx(p0: cstring, p1: number, p2: string) :boolean;
        static TreeNodeEx(p0: ArrayBuffer, p1: number, p2: string) :boolean;
        static SetTooltip(p0: string) :void;
        static LogText(p0: string) :void;
        static CreateContext(p0?: ImFontAtlas) :ImGuiContext;
        static DestroyContext(p0?: ImGuiContext) :void;
        static GetCurrentContext() :ImGuiContext;
        static SetCurrentContext(p0: ImGuiContext) :void;
        static DebugCheckVersionAndDataLayout(p0: cstring, p1: bigint, p2: bigint, p3: bigint, p4: bigint, p5: bigint, p6: bigint) :boolean;
        static GetIO() :ImGuiIO;
        static GetStyle() :ImGuiStyle;
        static NewFrame() :void;
        static EndFrame() :void;
        static Render() :void;
        static GetDrawData() :ImDrawData;
        static ShowDemoWindow(p0?: $Ref<boolean>) :void;
        static ShowAboutWindow(p0?: $Ref<boolean>) :void;
        static ShowMetricsWindow(p0?: $Ref<boolean>) :void;
        static ShowStyleEditor(p0?: ImGuiStyle) :void;
        static ShowStyleSelector(p0: cstring) :boolean;
        static ShowFontSelector(p0: cstring) :void;
        static ShowUserGuide() :void;
        static GetVersion() :cstring;
        static StyleColorsDark(p0?: ImGuiStyle) :void;
        static StyleColorsClassic(p0?: ImGuiStyle) :void;
        static StyleColorsLight(p0?: ImGuiStyle) :void;
        static Begin(p0: cstring, p1?: $Ref<boolean>, p2?: number) :boolean;
        static End() :void;
        static BeginChild(p0: cstring, p1: ImVec2, p2: boolean, p3: number) :boolean;
        static BeginChild(p0: number, p1: ImVec2, p2: boolean, p3: number) :boolean;
        static EndChild() :void;
        static IsWindowAppearing() :boolean;
        static IsWindowCollapsed() :boolean;
        static IsWindowFocused(p0?: number) :boolean;
        static IsWindowHovered(p0?: number) :boolean;
        static GetWindowDrawList() :ImDrawList;
        static GetWindowPos() :ImVec2;
        static GetWindowSize() :ImVec2;
        static GetWindowWidth() :number;
        static GetWindowHeight() :number;
        static SetNextWindowPos(p0: ImVec2, p1?: number, p2?: ImVec2) :void;
        static SetNextWindowSize(p0: ImVec2, p1?: number) :void;
        static SetNextWindowContentSize(p0: ImVec2) :void;
        static SetNextWindowCollapsed(p0: boolean, p1?: number) :void;
        static SetNextWindowFocus() :void;
        static SetNextWindowBgAlpha(p0: number) :void;
        static SetWindowPos(p0: ImVec2, p1: number) :void;
        static SetWindowPos(p0: cstring, p1: ImVec2, p2: number) :void;
        static SetWindowSize(p0: ImVec2, p1: number) :void;
        static SetWindowSize(p0: cstring, p1: ImVec2, p2: number) :void;
        static SetWindowCollapsed(p0: boolean, p1: number) :void;
        static SetWindowCollapsed(p0: cstring, p1: boolean, p2: number) :void;
        static SetWindowFocus() :void;
        static SetWindowFocus(p0: cstring) :void;
        static SetWindowFontScale(p0: number) :void;
        static GetContentRegionMax() :ImVec2;
        static GetContentRegionAvail() :ImVec2;
        static GetWindowContentRegionMin() :ImVec2;
        static GetWindowContentRegionMax() :ImVec2;
        static GetWindowContentRegionWidth() :number;
        static GetScrollX() :number;
        static GetScrollY() :number;
        static GetScrollMaxX() :number;
        static GetScrollMaxY() :number;
        static SetScrollX(p0: number) :void;
        static SetScrollY(p0: number) :void;
        static SetScrollHereX(p0?: number) :void;
        static SetScrollHereY(p0?: number) :void;
        static SetScrollFromPosX(p0: number, p1?: number) :void;
        static SetScrollFromPosY(p0: number, p1?: number) :void;
        static PushFont(p0: ImFont) :void;
        static PopFont() :void;
        static PushStyleColor(p0: number, p1: number) :void;
        static PushStyleColor(p0: number, p1: ImVec4) :void;
        static PopStyleColor(p0?: number) :void;
        static PushStyleVar(p0: number, p1: number) :void;
        static PushStyleVar(p0: number, p1: ImVec2) :void;
        static PopStyleVar(p0?: number) :void;
        static GetStyleColorVec4(p0: number) :ImVec4;
        static GetFont() :ImFont;
        static GetFontSize() :number;
        static GetFontTexUvWhitePixel() :ImVec2;
        static GetColorU32(p0: number, p1: number) :number;
        static GetColorU32(p0: ImVec4) :number;
        static GetColorU32(p0: number) :number;
        static PushItemWidth(p0: number) :void;
        static PopItemWidth() :void;
        static SetNextItemWidth(p0: number) :void;
        static CalcItemWidth() :number;
        static PushTextWrapPos(p0?: number) :void;
        static PopTextWrapPos() :void;
        static PushAllowKeyboardFocus(p0: boolean) :void;
        static PopAllowKeyboardFocus() :void;
        static PushButtonRepeat(p0: boolean) :void;
        static PopButtonRepeat() :void;
        static Separator() :void;
        static SameLine(p0?: number, p1?: number) :void;
        static NewLine() :void;
        static Spacing() :void;
        static Dummy(p0: ImVec2) :void;
        static Indent(p0?: number) :void;
        static Unindent(p0?: number) :void;
        static BeginGroup() :void;
        static EndGroup() :void;
        static GetCursorPos() :ImVec2;
        static GetCursorPosX() :number;
        static GetCursorPosY() :number;
        static SetCursorPos(p0: ImVec2) :void;
        static SetCursorPosX(p0: number) :void;
        static SetCursorPosY(p0: number) :void;
        static GetCursorStartPos() :ImVec2;
        static GetCursorScreenPos() :ImVec2;
        static SetCursorScreenPos(p0: ImVec2) :void;
        static AlignTextToFramePadding() :void;
        static GetTextLineHeight() :number;
        static GetTextLineHeightWithSpacing() :number;
        static GetFrameHeight() :number;
        static GetFrameHeightWithSpacing() :number;
        static PushID(p0: cstring) :void;
        static PushID(p0: cstring, p1: cstring) :void;
        static PushID(p0: ArrayBuffer) :void;
        static PushID(p0: number) :void;
        static PopID() :void;
        static GetID(p0: cstring) :number;
        static GetID(p0: cstring, p1: cstring) :number;
        static GetID(p0: ArrayBuffer) :number;
        static TextUnformatted(p0: cstring, p1?: cstring) :void;
        static Button(p0: cstring, p1?: ImVec2) :boolean;
        static SmallButton(p0: cstring) :boolean;
        static InvisibleButton(p0: cstring, p1: ImVec2, p2: number) :boolean;
        static ArrowButton(p0: cstring, p1: number) :boolean;
        static Image(p0: ArrayBuffer, p1: ImVec2, p2?: ImVec2, p3?: ImVec2, p4?: ImVec4, p5?: ImVec4) :void;
        static ImageButton(p0: ArrayBuffer, p1: ImVec2, p2?: ImVec2, p3?: ImVec2, p4?: number, p5?: ImVec4, p6?: ImVec4) :boolean;
        static Checkbox(p0: cstring, p1: $Ref<boolean>) :boolean;
        static RadioButton(p0: cstring, p1: boolean) :boolean;
        static RadioButton(p0: cstring, p1: $Ref<number>, p2: number) :boolean;
        static ProgressBar(p0: number, p1?: ImVec2, p2?: cstring) :void;
        static Bullet() :void;
        static BeginCombo(p0: cstring, p1: cstring, p2?: number) :boolean;
        static EndCombo() :void;
        static Combo(p0: cstring, p1: $Ref<number>, p2: cstring, p3: number) :boolean;
        static DragFloat(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number, p5?: cstring, p6?: number) :boolean;
        static DragFloat2(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number, p5?: cstring, p6?: number) :boolean;
        static DragFloat3(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number, p5?: cstring, p6?: number) :boolean;
        static DragFloat4(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number, p5?: cstring, p6?: number) :boolean;
        static DragFloatRange2(p0: cstring, p1: $Ref<number>, p2: $Ref<number>, p3?: number, p4?: number, p5?: number, p6?: cstring, p7?: cstring, p8?: number) :boolean;
        static DragInt(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number, p5?: cstring, p6?: number) :boolean;
        static DragInt2(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number, p5?: cstring, p6?: number) :boolean;
        static DragInt3(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number, p5?: cstring, p6?: number) :boolean;
        static DragInt4(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number, p5?: cstring, p6?: number) :boolean;
        static DragIntRange2(p0: cstring, p1: $Ref<number>, p2: $Ref<number>, p3?: number, p4?: number, p5?: number, p6?: cstring, p7?: cstring, p8?: number) :boolean;
        static DragScalar(p0: cstring, p1: number, p2: ArrayBuffer, p3?: number, p4?: ArrayBuffer, p5?: ArrayBuffer, p6?: cstring, p7?: number) :boolean;
        static DragScalarN(p0: cstring, p1: number, p2: ArrayBuffer, p3: number, p4?: number, p5?: ArrayBuffer, p6?: ArrayBuffer, p7?: cstring, p8?: number) :boolean;
        static SliderFloat(p0: cstring, p1: $Ref<number>, p2: number, p3: number, p4?: cstring, p5?: number) :boolean;
        static SliderFloat2(p0: cstring, p1: $Ref<number>, p2: number, p3: number, p4?: cstring, p5?: number) :boolean;
        static SliderFloat3(p0: cstring, p1: $Ref<number>, p2: number, p3: number, p4?: cstring, p5?: number) :boolean;
        static SliderFloat4(p0: cstring, p1: $Ref<number>, p2: number, p3: number, p4?: cstring, p5?: number) :boolean;
        static SliderAngle(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: cstring, p5?: number) :boolean;
        static SliderInt(p0: cstring, p1: $Ref<number>, p2: number, p3: number, p4?: cstring, p5?: number) :boolean;
        static SliderInt2(p0: cstring, p1: $Ref<number>, p2: number, p3: number, p4?: cstring, p5?: number) :boolean;
        static SliderInt3(p0: cstring, p1: $Ref<number>, p2: number, p3: number, p4?: cstring, p5?: number) :boolean;
        static SliderInt4(p0: cstring, p1: $Ref<number>, p2: number, p3: number, p4?: cstring, p5?: number) :boolean;
        static SliderScalar(p0: cstring, p1: number, p2: ArrayBuffer, p3: ArrayBuffer, p4: ArrayBuffer, p5?: cstring, p6?: number) :boolean;
        static SliderScalarN(p0: cstring, p1: number, p2: ArrayBuffer, p3: number, p4: ArrayBuffer, p5: ArrayBuffer, p6?: cstring, p7?: number) :boolean;
        static VSliderFloat(p0: cstring, p1: ImVec2, p2: $Ref<number>, p3: number, p4: number, p5?: cstring, p6?: number) :boolean;
        static VSliderInt(p0: cstring, p1: ImVec2, p2: $Ref<number>, p3: number, p4: number, p5?: cstring, p6?: number) :boolean;
        static VSliderScalar(p0: cstring, p1: ImVec2, p2: number, p3: ArrayBuffer, p4: ArrayBuffer, p5: ArrayBuffer, p6?: cstring, p7?: number) :boolean;
        static InputText(p0: cstring, p1: $Ref<string>, p2?: number, p3?: (p0:cpp.ImGuiInputTextCallbackData) => number) :boolean;
        static InputTextMultiline(p0: cstring, p1: $Ref<string>, p2?: ImVec2, p3?: number, p4?: (p0:cpp.ImGuiInputTextCallbackData) => number) :boolean;
        static InputTextWithHint(p0: cstring, p1: cstring, p2: $Ref<string>, p3?: number, p4?: (p0:cpp.ImGuiInputTextCallbackData) => number) :boolean;
        static InputFloat(p0: $Nullable<cstring>, p1: ArrayBuffer, p2?: number, p3?: number, p4?: $Nullable<cstring>, p5?: number) :boolean;
        static InputFloat2(p0: $Nullable<cstring>, p1: ArrayBuffer, p2?: $Nullable<cstring>, p3?: number) :boolean;
        static InputFloat3(p0: $Nullable<cstring>, p1: ArrayBuffer, p2?: $Nullable<cstring>, p3?: number) :boolean;
        static InputFloat4(p0: $Nullable<cstring>, p1: ArrayBuffer, p2?: $Nullable<cstring>, p3?: number) :boolean;
        static InputInt(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: number) :boolean;
        static InputInt2(p0: cstring, p1: $Ref<number>, p2?: number) :boolean;
        static InputInt3(p0: cstring, p1: $Ref<number>, p2?: number) :boolean;
        static InputInt4(p0: cstring, p1: $Ref<number>, p2?: number) :boolean;
        static InputDouble(p0: cstring, p1: $Ref<number>, p2?: number, p3?: number, p4?: cstring, p5?: number) :boolean;
        static InputScalar(p0: cstring, p1: number, p2: ArrayBuffer, p3?: ArrayBuffer, p4?: ArrayBuffer, p5?: cstring, p6?: number) :boolean;
        static InputScalarN(p0: cstring, p1: number, p2: ArrayBuffer, p3: number, p4?: ArrayBuffer, p5?: ArrayBuffer, p6?: cstring, p7?: number) :boolean;
        static ColorEdit3(p0: $Nullable<cstring>, p1: ArrayBuffer, p2?: number) :boolean;
        static ColorEdit4(p0: $Nullable<cstring>, p1: ArrayBuffer, p2?: number) :boolean;
        static ColorPicker3(p0: $Nullable<cstring>, p1: ArrayBuffer, p2?: number) :boolean;
        static ColorPicker4(p0: $Nullable<cstring>, p1: ArrayBuffer, p2?: number, p3?: ArrayBuffer) :boolean;
        static ColorButton(p0: cstring, p1: ImVec4, p2?: number, p3?: ImVec2) :boolean;
        static SetColorEditOptions(p0: number) :void;
        static TreePush(p0: cstring) :void;
        static TreePush(p0: ArrayBuffer) :void;
        static TreePop() :void;
        static GetTreeNodeToLabelSpacing() :number;
        static CollapsingHeader(p0: cstring, p1: number) :boolean;
        static CollapsingHeader(p0: cstring, p1: $Ref<boolean>, p2: number) :boolean;
        static SetNextItemOpen(p0: boolean, p1?: number) :void;
        static Selectable(p0: cstring, p1?: boolean, p2?: number, p3?: ImVec2) :boolean;
        static Selectable(p0: cstring, p1: $Ref<boolean>, p2?: number, p3?: ImVec2) :boolean;
        static ListBox(p0: cstring, p1: $Ref<number>, p2: ArrayBuffer, p3: number, p4?: number) :boolean;
        static PlotLines(p0: cstring, p1: number, p2: number, p3: number, p4: cstring, p5: number, p6: number, p7: ImVec2, p8: number) :void;
        static PlotHistogram(p0: cstring, p1: number, p2: number, p3: number, p4: cstring, p5: number, p6: number, p7: ImVec2, p8: number) :void;
        static Value(p0: cstring, p1: boolean) :void;
        static Value(p0: cstring, p1: number) :void;
        static Value(p0: cstring, p1: number, p2: cstring) :void;
        static BeginMenuBar() :boolean;
        static EndMenuBar() :void;
        static BeginMainMenuBar() :boolean;
        static EndMainMenuBar() :void;
        static BeginMenu(p0: cstring, p1?: boolean) :boolean;
        static EndMenu() :void;
        static MenuItem(p0: cstring, p1: cstring, p2: boolean, p3: boolean) :boolean;
        static MenuItem(p0: cstring, p1: cstring, p2: $Ref<boolean>, p3: boolean) :boolean;
        static BeginTooltip() :void;
        static EndTooltip() :void;
        static BeginPopup(p0: cstring, p1?: number) :boolean;
        static BeginPopupContextItem(p0?: cstring, p1?: number) :boolean;
        static BeginPopupContextWindow(p0?: cstring, p1?: number) :boolean;
        static BeginPopupContextVoid(p0?: cstring, p1?: number) :boolean;
        static BeginPopupModal(p0: cstring, p1?: $Ref<boolean>, p2?: number) :boolean;
        static EndPopup() :void;
        static OpenPopupOnItemClick(p0?: cstring, p1?: number) :void;
        static IsPopupOpen(p0: cstring, p1: number) :boolean;
        static CloseCurrentPopup() :void;
        static Columns(p0?: number, p1?: cstring, p2?: boolean) :void;
        static NextColumn() :void;
        static GetColumnIndex() :number;
        static GetColumnWidth(p0?: number) :number;
        static SetColumnWidth(p0: number, p1: number) :void;
        static GetColumnOffset(p0?: number) :number;
        static SetColumnOffset(p0: number, p1: number) :void;
        static GetColumnsCount() :number;
        static BeginTabBar(p0: cstring, p1?: number) :boolean;
        static EndTabBar() :void;
        static BeginTabItem(p0: cstring, p1?: $Ref<boolean>, p2?: number) :boolean;
        static EndTabItem() :void;
        static SetTabItemClosed(p0: cstring) :void;
        static LogToTTY(p0?: number) :void;
        static LogToFile(p0?: number, p1?: cstring) :void;
        static LogToClipboard(p0?: number) :void;
        static LogFinish() :void;
        static LogButtons() :void;
        static BeginDragDropSource(p0?: number) :boolean;
        static SetDragDropPayload(p0: cstring, p1: ArrayBuffer, p2: bigint, p3?: number) :boolean;
        static EndDragDropSource() :void;
        static BeginDragDropTarget() :boolean;
        static AcceptDragDropPayload(p0: cstring, p1?: number) :ImGuiPayload;
        static EndDragDropTarget() :void;
        static GetDragDropPayload() :ImGuiPayload;
        static PushClipRect(p0: ImVec2, p1: ImVec2, p2: boolean) :void;
        static PopClipRect() :void;
        static SetItemDefaultFocus() :void;
        static SetKeyboardFocusHere(p0?: number) :void;
        static IsItemHovered(p0?: number) :boolean;
        static IsItemActive() :boolean;
        static IsItemFocused() :boolean;
        static IsItemClicked(p0?: number) :boolean;
        static IsItemVisible() :boolean;
        static IsItemEdited() :boolean;
        static IsItemActivated() :boolean;
        static IsItemDeactivated() :boolean;
        static IsItemDeactivatedAfterEdit() :boolean;
        static IsItemToggledOpen() :boolean;
        static IsAnyItemHovered() :boolean;
        static IsAnyItemActive() :boolean;
        static IsAnyItemFocused() :boolean;
        static GetItemRectMin() :ImVec2;
        static GetItemRectMax() :ImVec2;
        static GetItemRectSize() :ImVec2;
        static SetItemAllowOverlap() :void;
        static IsRectVisible(p0: ImVec2) :boolean;
        static IsRectVisible(p0: ImVec2, p1: ImVec2) :boolean;
        static GetTime() :number;
        static GetFrameCount() :number;
        static GetDrawListSharedData() :ImDrawListSharedData;
        static GetStyleColorName(p0: number) :cstring;
        static SetStateStorage(p0: ImGuiStorage) :void;
        static GetStateStorage() :ImGuiStorage;
        static CalcTextSize(p0: cstring, p1?: cstring, p2?: boolean, p3?: number) :ImVec2;
        static CalcListClipping(p0: number, p1: number, p2: $Ref<number>, p3: $Ref<number>) :void;
        static BeginChildFrame(p0: number, p1: ImVec2, p2?: number) :boolean;
        static EndChildFrame() :void;
        static ColorConvertU32ToFloat4(p0: number) :ImVec4;
        static ColorConvertFloat4ToU32(p0: ImVec4) :number;
        static ColorConvertRGBtoHSV(p0: number, p1: number, p2: number, p3: $Ref<number>, p4: $Ref<number>, p5: $Ref<number>) :void;
        static ColorConvertHSVtoRGB(p0: number, p1: number, p2: number, p3: $Ref<number>, p4: $Ref<number>, p5: $Ref<number>) :void;
        static GetKeyIndex(p0: number) :number;
        static IsKeyDown(p0: number) :boolean;
        static IsKeyPressed(p0: number, p1?: boolean) :boolean;
        static IsKeyReleased(p0: number) :boolean;
        static GetKeyPressedAmount(p0: number, p1: number, p2: number) :number;
        static IsMouseDown(p0: number) :boolean;
        static IsAnyMouseDown() :boolean;
        static IsMouseClicked(p0: number, p1?: boolean) :boolean;
        static IsMouseDoubleClicked(p0: number) :boolean;
        static IsMouseReleased(p0: number) :boolean;
        static IsMouseDragging(p0?: number, p1?: number) :boolean;
        static IsMouseHoveringRect(p0: ImVec2, p1: ImVec2, p2?: boolean) :boolean;
        static IsMousePosValid(p0?: ImVec2) :boolean;
        static GetMousePos() :ImVec2;
        static GetMousePosOnOpeningCurrentPopup() :ImVec2;
        static GetMouseDragDelta(p0?: number, p1?: number) :ImVec2;
        static ResetMouseDragDelta(p0?: number) :void;
        static GetMouseCursor() :number;
        static SetMouseCursor(p0: number) :void;
        static CaptureKeyboardFromApp(p0?: boolean) :void;
        static CaptureMouseFromApp(p0?: boolean) :void;
        static GetClipboardText() :cstring;
        static SetClipboardText(p0: cstring) :void;
        static LoadIniSettingsFromDisk(p0: cstring) :void;
        static LoadIniSettingsFromMemory(p0: cstring, p1?: bigint) :void;
        static SaveIniSettingsToDisk(p0: cstring) :void;
        static SaveIniSettingsToMemory(p0?: $Ref<bigint>) :cstring;
        static MemAlloc(p0: bigint) :ArrayBuffer;
        static MemFree(p0: ArrayBuffer) :void;
    }

    class ImGuiContext {
    }

    class ImGuiIO {
        ConfigFlags: number;
        BackendFlags: number;
        DisplaySize: ImVec2;
        DeltaTime: number;
        IniSavingRate: number;
        IniFilename: cstring;
        LogFilename: cstring;
        MouseDoubleClickTime: number;
        MouseDoubleClickMaxDist: number;
        MouseDragThreshold: number;
        KeyMap: ArrayBuffer;
        KeyRepeatDelay: number;
        KeyRepeatRate: number;
        UserData: ArrayBuffer;
        Fonts: ImFontAtlas;
        FontGlobalScale: number;
        FontAllowUserScaling: boolean;
        FontDefault: ImFont;
        DisplayFramebufferScale: ImVec2;
        MouseDrawCursor: boolean;
        ConfigMacOSXBehaviors: boolean;
        ConfigInputTextCursorBlink: boolean;
        ConfigWindowsResizeFromEdges: boolean;
        ConfigWindowsMoveFromTitleBarOnly: boolean;
        BackendPlatformName: cstring;
        BackendRendererName: cstring;
        BackendPlatformUserData: ArrayBuffer;
        BackendRendererUserData: ArrayBuffer;
        BackendLanguageUserData: ArrayBuffer;
        ClipboardUserData: ArrayBuffer;
        MousePos: ImVec2;
        MouseDown: ArrayBuffer;
        MouseWheel: number;
        MouseWheelH: number;
        KeyCtrl: boolean;
        KeyShift: boolean;
        KeyAlt: boolean;
        KeySuper: boolean;
        KeysDown: ArrayBuffer;
        NavInputs: ArrayBuffer;
        WantCaptureMouse: boolean;
        WantCaptureKeyboard: boolean;
        WantTextInput: boolean;
        WantSetMousePos: boolean;
        WantSaveIniSettings: boolean;
        NavActive: boolean;
        NavVisible: boolean;
        Framerate: number;
        MetricsRenderVertices: number;
        MetricsRenderIndices: number;
        MetricsRenderWindows: number;
        MetricsActiveWindows: number;
        MetricsActiveAllocations: number;
        MouseDelta: ImVec2;
        MousePosPrev: ImVec2;
        MouseClickedTime: ArrayBuffer;
        MouseClicked: ArrayBuffer;
        MouseDoubleClicked: ArrayBuffer;
        MouseReleased: ArrayBuffer;
        MouseDownOwned: ArrayBuffer;
        MouseDownWasDoubleClick: ArrayBuffer;
        MouseDownDuration: ArrayBuffer;
        MouseDownDurationPrev: ArrayBuffer;
        MouseDragMaxDistanceSqr: ArrayBuffer;
        KeysDownDuration: ArrayBuffer;
        KeysDownDurationPrev: ArrayBuffer;
        NavInputsDownDuration: ArrayBuffer;
        NavInputsDownDurationPrev: ArrayBuffer;
    }

    class ImGuiInputTextCallbackData {
        EventFlag: number;
        Flags: number;
        EventChar: number;
        EventKey: number;
        Buf: number;
        BufTextLen: number;
        BufSize: number;
        BufDirty: boolean;
        CursorPos: number;
        SelectionStart: number;
        SelectionEnd: number;
    }

    class ImGuiPayload {
        constructor();
        Data: ArrayBuffer;
        DataSize: number;
        SourceId: number;
        SourceParentId: number;
        DataFrameCount: number;
        DataType: ArrayBuffer;
        Preview: boolean;
        Delivery: boolean;
    }

    class ImGuiStorage {
    }

    class ImGuiStyle {
        Alpha: number;
        WindowPadding: ImVec2;
        WindowRounding: number;
        WindowBorderSize: number;
        WindowMinSize: ImVec2;
        WindowTitleAlign: ImVec2;
        WindowMenuButtonPosition: number;
        ChildRounding: number;
        ChildBorderSize: number;
        PopupRounding: number;
        PopupBorderSize: number;
        FramePadding: ImVec2;
        FrameRounding: number;
        FrameBorderSize: number;
        ItemSpacing: ImVec2;
        ItemInnerSpacing: ImVec2;
        TouchExtraPadding: ImVec2;
        IndentSpacing: number;
        ColumnsMinSpacing: number;
        ScrollbarSize: number;
        ScrollbarRounding: number;
        GrabMinSize: number;
        GrabRounding: number;
        TabRounding: number;
        TabBorderSize: number;
        ColorButtonPosition: number;
        ButtonTextAlign: ImVec2;
        SelectableTextAlign: ImVec2;
        DisplayWindowPadding: ImVec2;
        DisplaySafeAreaPadding: ImVec2;
        MouseCursorScale: number;
        AntiAliasedLines: boolean;
        AntiAliasedFill: boolean;
        CurveTessellationTol: number;
    }

    class ImVec2 {
        constructor();
        constructor(p0: number, p1: number);
        x: number;
        y: number;
    }

    class ImVec4 {
        constructor();
        constructor(p0: number, p1: number, p2: number, p3: number);
        x: number;
        y: number;
        z: number;
        w: number;
    }

    class UEImGui {
        static AddGlobalWindow(p0: () => boolean, p1?: UE.Object) :number;
        static RemoveGlobalWindow(p0: number, p1?: UE.Object) :void;
        static DrawSmallWidgetDemo() :void;
        static AddDetailCustomization(p0: UE.Class, p1: (p0:UE.Object) => void) :void;
        static RemoveDetailCustomization(p0: UE.Class) :void;
        static BeginDetail() :void;
        static EndDetail() :void;
    }

}
