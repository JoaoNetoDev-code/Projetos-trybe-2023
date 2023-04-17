window.onload =() => {
    const setCorDeFunto = (color) => {
        let content  =document.querySelector('.content')
        content.style.backgroundColor = color
        localStorage.setItem('backgroundColor', color)
    }

    const setCorText = (color) => {
        let paragraph = document.getElementsByClassName('paragraph')[0];
        paragraph.style.color = color;
        localStorage.setItem('textColor',color );
    }

    const setFontSize = (size) => {
        let paragraph = document.querySelector('.paragraph');
        paragraph.style.setFontSize = size;
        localStorage.setItem('setFontSize', size);
    }

    const setLine = (height) => {
        let paragraph = document.querySelector('.paragraph')
        paragraph.style.lineHeight = height;
        localStorage.setItem('lineHeight', height);
    }

    const setFontFamily = (FontFamily) => {
        let paragraph = document.getElementsByClassName('paragraph')[0];
        paragraph.style.FontFamily = FontFamily;
        localStorage.setItem('fontFamily', FontFamily);
    }

    let fontButtonColor = document.querySelectorAll('#background-color>button');
    fontButtonColor
}

