var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.getElementById("lorem").onsubmit = (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    // Get the currently selected element in the Designer
    const el = yield webflow.getSelectedElement();
    if (el && el.textContent) {
        // If we found the element and it has the ability to update the text content,
        // replace it with some placeholder text
        el.setTextContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        // Finally, save the changes to the element & they will be reflected in the Designer
        yield el.save();
    }
});
//for demo making it non generic for single use only
function createWarningTextAreaStyle() {
    const styleName = "WarningTextStyle";
    const textColor = 'red';
    const textSize = '2em';
    const textFont = 'Serif';
    //TOOD: check if style exists then return that or update. else create the style
    const style = webflow.createStyle(styleName);
    style.setProperties({ 'color': textColor, 'font-size': textSize, 'font-family': textFont });
    style.save();
}
document.getElementById("lorem").onsubmit = (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    // Get the text area loaded in the designer
    const el = yield webflow.getSelectedElement();
    if (el && el.textContent) {
        //ensure the style exits if not then create.
        createWarningTextAreaStyle();
        // If we found the element and it is the form text area element
        const style = yield webflow.getStyleByName("WarningTextStyle");
        el.setStyles([style]);
        yield el.save();
    }
});
