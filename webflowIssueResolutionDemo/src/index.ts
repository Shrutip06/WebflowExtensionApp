document.getElementById("lorem").onsubmit = async (event) => {
  event.preventDefault()
  // Get the currently selected element in the Designer
  const el = await webflow.getSelectedElement()
  if (el && el.textContent) {
    // If we found the element and it has the ability to update the text content,
    // replace it with some placeholder text
    el.setTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua."
    )
    // Finally, save the changes to the element & they will be reflected in the Designer
    await el.save()
  }
}


//for demo making it non generic for single use only
 function createWarningTextAreaStyle() : any {
    const styleName = "WarningTextStyle"

    const textColor = 'red'
    const textSize  = '2em'
    const textFont  =  'Serif'

    //TOOD: check if style exists then return that or update. else create the style
    const style = webflow.createStyle(styleName)
    style.setProperties({'color' : textColor, 'font-size' : textSize, 'font-family' : textFont})
    style.save()
}


document.getElementById("lorem").onsubmit = async (event) => {
  event.preventDefault()
  // Get the text area loaded in the designer
  const el = await webflow.getSelectedElement()
  if (el && el.textContent){
    //ensure the style exits if not then create.
    createWarningTextAreaStyle()

    // If we found the element and it is the form text area element
    const style = await webflow.getStyleByName("WarningTextStyle")

    el.setStyles([style])

    await el.save()
  }
}

