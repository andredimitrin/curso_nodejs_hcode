console.log(`Nome do Arquivo: `, __filename);
console.log(`Diretório do Arquivo: `, __dirname);
console.log('Diretorio em que foi invocado: ', process.cwd());
console.log(`Parâmetros de execução: `, process.argv);
console.log(`Ambiente do Servidor: `, process.platform);
console.log(`Sistema Operacional do Servidor: `, process.env.OS);
console.log(`Nome do Usuario: `, process.env.USERNAME);
console.log(`Idioma: `, process.env.LANG);
console.log(`Nome do server: `, process.env.COMPUTERNAME);




switch(process.argv[2]){
    case '-a':
        console.log('Execute rotina principal');
        break;

    case '-i':
        console.log('Execute rotina de Instalação');
        break;

    case '-q':
        console.log('Encerrando Apliocação');
        process.exit(); //interrompe imediamente a execução
        break;
    default:
        console.log('Opção inválida');
}

