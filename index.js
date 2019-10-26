class jogos{
    constructor(qtdDezenas, totalJogos){
        dezenasValidas = [6,7,8,9,10]
        this.public().setdezenas(qtdDezenas)
        this.public().settotalJogos(totalJogos)
    }
    _private(){
        var dezenas
        var resultado
        var totalJogos
        var jogos
        
        this.getjogos = function() { 
            return jogos;
        }
        this.getresultado = function() { 
            return resultado;
        }
        this.getArray = function(qtdDezenas) {
            var result = []
            while (result.length < qtdDezenas) {
                let number = Math.floor(Math.random() * 6) + 1  
                if(!result.includes(number)){
                    result.push(number)
                }
            }
            return result.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (b > a) {
                    return -1;
                }
                return 0;
            })
        }
    }

    public(){
        this.getTotal = (()=>{
            var total = gettotalJogos()
            var result = []
            for (let i = 0; i < total; i++) {
                const number = this._private().getArray(i);
                result.push(number)
            }
            this._private().jogos = result
        })
        this.setResult = (()=>{
            result = this._private().getArray(6);
        })
        this.getdezenas = (()=>{
            return dezenas;
        })
                
        this.gettotalJogos = (()=>{
            return totalJogos;
        })
        
        
        this.setdezenas = ((value)=>{
            if(dezenasValidas.includes(value)){
                this.dezenas = value;
            }else{
                throw console.error("Valor nao permitido");
                
            }
        })
        this.settotalJogos = ((value)=>{
            this.totalJogos = value;
        })

        this.confere = (()=>{
            var jogos = _private.getjogos()
            var result = _private.getresultado()
            var response = "<!DOCTYPE html><html><body><h2>RESULTADO DA LOTERIA</h2><table style='width:100%'><tr><th>Jogo</th><th>Desenas Sorteadas</th></tr><tr><td>"
            for (let i = 0; i < jogos.length; i++) {
                response += JSON.stringify(jogos) 
                response += '</td><tr>'
                var valor = 0
                for (let j = 0; j < jogos[i].length; j++) {
                    if(result.includes(jogos[i][j]))
                        valor ++
                }
                response += valor
                response += '</td></tr>'
                
            }
            response += '</table></body></html>'
            console.log(response)
            return response;
        })
        
    }
}