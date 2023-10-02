
        const file_import_button = document.querySelector('#import-text-file');
        const file_download_button = document.querySelector('#file_download_button');
        var text = document.querySelector('#text');
        const fontSize = document.querySelector('#font_size_changer');
        const bold = document.querySelector('.ri-bold');
        const italic = document.querySelector('.ri-italic');
        const underline = document.querySelector('.ri-underline');
        const alignLeft = document.querySelector('.ri-align-left');
        const alignCenter = document.querySelector('.ri-align-center');
        const alignRight = document.querySelector('.ri-align-right');
        const upperAndlower = document.querySelector('.ri-font-size');
        const textClear = document.querySelector('.ri-format-clear');
        const color = document.querySelector('input[type=color]');
        
        file_import_button.addEventListener('change',()=>{
            const file = file_import_button.files[0];
            const reader = new FileReader();
            reader.addEventListener('load',()=>{
                text.value = reader.result;
            });
            reader.readAsText(file);
        });
        file_download_button.addEventListener('click',()=>{
            const a = document.createElement('a');
            const file = new Blob([text.value],{type:'text/plain'});
            a.href = URL.createObjectURL(file);
            a.download = 'text.txt';
            a.click();
        });

        fontSize.addEventListener('change',()=>{
            text.style.fontSize = fontSize.value+'px';
        });
        bold.addEventListener('click', () => {
            if(text.style.fontWeight == 'bold'){
                text.style.fontWeight = 'normal';
                bold.style.backgroundColor = '#fff';
            }else{
                text.style.fontWeight = 'bold';
                bold.style.backgroundColor = '#e6e6e6';
            }
        });        
        
        italic.addEventListener('click',()=>{
            if(text.style.fontStyle == 'italic'){
                text.style.fontStyle = 'normal';
                italic.style.backgroundColor = '#fff';
            }else{
                text.style.fontStyle = 'italic';
                italic.style.backgroundColor = '#e6e6e6';
            }
        });
        
        underline.addEventListener('click',()=>{
            if(text.style.textDecoration == 'underline'){
                text.style.textDecoration = 'none';
                underline.style.backgroundColor = '#fff';
            }else{
                text.style.textDecoration = 'underline';
                underline.style.backgroundColor = '#e6e6e6';
            }
        });
        
        alignLeft.addEventListener('click',()=>{
            if(text.style.textAlign == 'center' || text.style.textAlign == 'right'){
                text.style.textAlign = 'left';
                alignLeft.style.backgroundColor = '#e6e6e6';
                alignCenter.style.backgroundColor = '#fff';
                alignRight.style.backgroundColor = '#fff';
            }
            else{
                text.style.textAlign = 'left';
                alignLeft.style.backgroundColor = '#e6e6e6';
            }
        });
        
        alignCenter.addEventListener('click',()=>{
            if(text.style.textAlign == 'left' || text.style.textAlign == 'right'){
                text.style.textAlign = 'center';
                alignCenter.style.backgroundColor = '#e6e6e6';
                alignLeft.style.backgroundColor = '#fff';
                alignRight.style.backgroundColor = '#fff';
            }
            else{
                text.style.textAlign = 'center';
                alignCenter.style.backgroundColor = '#e6e6e6';
            }   
        });
        
        alignRight.addEventListener('click',()=>{
            if(text.style.textAlign == 'left' || text.style.textAlign == 'center'){
                text.style.textAlign = 'right';
                alignRight.style.backgroundColor = '#e6e6e6';
                alignLeft.style.backgroundColor = '#fff';
                alignCenter.style.backgroundColor = '#fff';
            }
            else{
                text.style.textAlign = 'right';
                alignRight.style.backgroundColor = '#e6e6e6';
            }
        });
        
        upperAndlower.addEventListener('click',()=>{
            if(text.style.textTransform == 'uppercase'){
                text.style.textTransform = 'lowercase';
                upperAndlower.style.backgroundColor = '#fff';
            }else{
                text.style.textTransform = 'uppercase';
                upperAndlower.style.backgroundColor = '#e6e6e6';
            }
        });
        
        textClear.addEventListener('click',()=>{
            text.style.color = '#000';
            color.value = '#000';
        });
        
        color.addEventListener('change',()=>{
            text.style.color = color.value;
        });