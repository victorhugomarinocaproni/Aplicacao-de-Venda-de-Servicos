class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaCartao();
        this.criarTabelaServicos();
        this.criarTabelaPedidos();
        this.criarTabelaUtilizacaoPedidos();
        this.criarTabelaRecompensas();
        this.criarTabelaUtilizacaoRecompensas();
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
            cod_servico varchar(10) not null PRIMARY KEY,
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

    criarTabelaUtilizacaoPedidos(){
        const sql = `CREATE TABLE utilizacao_pedidos(
            cod_utilizacao_ped int PRIMARY KEY AUTO_INCREMENT,
            data_utilizacao_ped date,
            cod_pedido int not null,
            foreign key (cod_pedido) references pedidos(cod_pedido)
        );`;
        this.conexao.query(sql, error => {
            if(error){
                console.log("Tabela de utilizacao_pedidos já existe");
                return;
            }
            console.log("Tabela de utilizacao_pedidos criada com êxito!");
        });
    }

    criarTabelaRecompensas(){
        const sql = `CREATE TABLE recompensas(
            cod_recompensa int PRIMARY KEY AUTO_INCREMENT,
            data_recebimento date,
            cartao_id int not null,
            nome varchar(20),
            abreviacao varchar(20),
            status_recompensa char(1),
            foreign key (cartao_id) references cartoes(cartao_id)
        );`
        this.conexao.query(sql, error => {
            if(error){
                console.log("Tabela de recompensas já existe");
                return;
            }
            console.log("Tabela de recompensas criada com êxito!");
        });
    }

    criarTabelaUtilizacaoRecompensas(){
        const sql = `CREATE TABLE utilizacao_recompensas(
            cod_utilizacao_rec int PRIMARY KEY AUTO_INCREMENT,
            data_utilizacao_rec date,
            cod_recompensa int not null,
            foreign key (cod_recompensa) references recompensas(cod_recompensa)
        );`;
        this.conexao.query(sql, error => {
            if(error){
                console.log("Tabela de utilizacao_recompensas já existe");
                return;
            }
            console.log("Tabela de utilizacao_recompensas criada com êxito!");
        });
    }

}

module.exports = new Tabelas();