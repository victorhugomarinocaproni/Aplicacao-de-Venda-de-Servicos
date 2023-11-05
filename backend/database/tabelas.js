class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaCartao();
        this.criarTabelaServicos();
        this.criarTabelaPedidos();
    }

    criarTabelaCartao(){
        
        const sql = `CREATE TABLE cartoes(cartao_id int not null PRIMARY KEY);`;
        this.conexao.query(sql, error => {
            if(error){
                console.log("Tabela cartões já existe!");
                return;
            }
            console.log("Tabela cartões criada com sucesso!");
        });
    }

    criarTabelaServicos(){
        const sql = `CREATE TABLE servicos(
            cod_servico varchar(5) not null PRIMARY KEY,
            tipo_servico varchar(15),
            desc_servico varchar(350)
        );`;
        this.conexao.query(sql, error => {
            if(error){
                console.log("Tabela serviços já existe");
                return;
            }
            console.log("Tabela serviços criada com êxito!");
        });
    }

    criarTabelaPedidos(){
        const sql = `CREATE TABLE pedidos(
            cod_pedido int not null PRIMARY KEY AUTO_INCREMENT,
            data_pedido date,
            status_pedido char(1),
            cartao_id int not null,
            cod_servico varchar(5) not null,
            foreign key (cartao_id) references cartoes(cartao_id),
            foreign key (cod_servico) references servicos(cod_servico)
        );`;
        this.conexao.query(sql, error => {
            if(error){
                console.log("Tabela de Pedidos já existe");
                return;
            }
            console.log("Tabela de Pedidos criada com êxito!");
        });
    }
}

module.exports = new Tabelas();