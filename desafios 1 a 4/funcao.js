class Valores{
    constructor ()
    {
            this.id = 1;
            this.arrayValores = [];
    }

    salvar()
    {
       let valores = this.lerDados();

       if(this.validaCampos(valores))
        { this.adicionar(valores);
        }
       
        this.imprimir();
    }

    imprimir()
    {
        let i = 0;
        while (this.arrayValores.length > i)
        {
            i++;
            console.log(this.arrayValores);
        }
        
        if(this.arrayValores.length > 6)
        {
      {document.getElementById('imprimir').innerHTML = "Valores suficientes. <br>"};
        
        }
    }



    adicionar(valores)
    {
        this.arrayValores.push(valores);
        this.id++;

    }

    lerDados()
    {
        let valores = {}
        
        valores.valoresAdicionados = document.getElementById('valores').value;
        valores.id = this.id;
        return valores;
    }

    validaCampos(valores)
    {
        let msg = '';

        if(valores.valoresAdicionados == '')
        {
            msg += 'informe um número';
        }
        if(msg != '')
        {
            alert(msg);
            return(false);
        }
        return true;

    }

    
}

var valores = new Valores();