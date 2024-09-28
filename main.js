constnumeroSenha = document.querySelector('.parametro-senha__texto');
lettamanhaSenha =12;
numeroSenha.textContent = tamanhoSenha;
contletrasMaiúsculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
constletrasMinúsculos = 'abcdefghijklmnopqrstuvwxyz'
contnumeros = '0123456789'
constsimbolos= '!@%*?'
contbotoes = document.querySelectorAll('.parametro-senha_botao');
constcampoSenha = documentquerySelectorAll('.parametro-senha__botao');
constcheckbox = documentquerySelectorAll('#campo-senha');
constforcaSenha = documentquerySelector('.forca');
botoes[0].onclick = diminuiTamanho;
botoes[1].omclick = aumentaTamanho;

functiondiminuiTamanho(){
    if (tamanhoSenha>1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}