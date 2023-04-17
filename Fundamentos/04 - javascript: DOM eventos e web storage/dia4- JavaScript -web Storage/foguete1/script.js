window.onload =() => {

    const setCorDeFundo = (cor) => {

        let content = document.querySelector('.content');
        content.style.backgroundColor = cor
        localStorage.setItem('backgroundColor',cor);
    }

    const setCorText = (cor) => {

        let paragraph = document.querySelectorAll('.paragraph');

        for (let index =0;index < paragraph.length;index +=1) {
        paragraph[index].style.color = cor
        }

        localStorage.setItem('corText',cor );
    }

    const setFontSize = (size) => {

        let paragraph = document.querySelectorAll('.paragraph');

        for ( let index = 0; index < paragraph.length; index +=1) {
        paragraph[index].style.fontSize = size
        }

        localStorage.setItem('fontSize', size);
    }

    const setLine = (height) => {

        let paragraph = document.querySelectorAll('.paragraph')

        for ( let index =0 ; index <  paragraph.length; index +=1) {
            paragraph[index].style.lineHeight = height
        }

        localStorage.setItem('lineHeight', height);
    }

    const setFontFamily = (fontFamily) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index =0 ;index < paragraph.length ;index +=1) {
            paragraph[index].style.fontFamily = fontFamily
        }

        localStorage.setItem('fontFamily', fontFamily);
    }

    let setbackgroundColorButton = document.querySelectorAll('#background-color>button');

        for (let index =0; index < setbackgroundColorButton.length;index +=1) {
        setbackgroundColorButton[index].addEventListener('click', (event) => {
            setCorDeFundo(event.target.innerHTML)
        })
    }

    let setColorText = document.querySelectorAll("#font-color>button")
    for (let index = 0; index < setColorText.length; index += 1) {
          setColorText[index].addEventListener("click", (event) => {
        setCorText(event.target.innerHTML)
      })
    }

    let fontSizeButton = document.querySelectorAll('#font-size>button');

    for (let index =0; index < fontSizeButton.length; index +=1) {
        fontSizeButton[index].addEventListener('click', (event) => {
            setFontSize(event.target.innerHTML);
        })
    }

    let setHeightButton = document.querySelectorAll('#line-height>button');

    for (let index =0; index < setHeightButton.length; index +=1) {
        setHeightButton[index].addEventListener('click', (event) => {
        setLine(event.target.innerHTML);
        })
    }

    let fontFamilyButton = document.querySelectorAll('#font-family>button');

    for (let index =0;index < fontFamilyButton.length; index +=1) {
        fontFamilyButton[index].addEventListener('click', (event) => {
            setFontFamily(event.target.innerHTML);
        })
    }

    const iniciar = () => {

        let backgroundColor =localStorage.getItem('backgroundColor');
        if (backgroundColor) setCorDeFundo(backgroundColor);
    
        let corText = localStorage.getItem('corText');
        if (corText) setCorText(corText);
    
        let fontSize = localStorage.getItem('fontSize');
        if(fontSize) setFontSize(fontSize);
    
        let lineHeight = localStorage.getItem('lineHeight');
        if(lineHeight) setLine(lineHeight);
    
        let fontFamily = localStorage.getItem('fontFamily');
        if (fontFamily) setFontFamily(fontFamily);
    }

    iniciar()
}