Create database TG

Use TG

Create table cad_user(
id_user int primary key not null auto_increment,
user varchar(30) not null,
senha varchar(16) not null
)
Create table alunos(
id_aluno int primary key not null auto_increment,
nome_completo varchar(180),
cpf varchar(11),
rg varchar(9),
orgao_expedidor varchar(15),
estado varchar(2),
cep varchar(10),
rua varchar(180),
numero_resid varchar(5),
bairro varchar(50),
complemento varchar(50),
telefone varchar(10),
celular varchar(11),
sexo varchar(3),
deficiencia boolean,
tipo_deficiencia varchar(35),
data_nascimento date
)

create table certificados(
id_certificado int primary key not null auto_increment,
id_prof_um int,
id_prof_dois int,
data_emissao date,
carga_horaria int,
id_aluno int
)

create table horarios(
id_horario int primary key not null auto_increment,
dia varchar(3),
hr_inicio time,
hr_fim time 
)

create table presencas(
id_presenca int primary key not null auto_increment,
tipo_presenca varchar(15),
data_chamada date,
id_horario int,
id_aluno int
)

create table matriculas(
id_matricula int primary key not null auto_increment, 
data_matricula date,
id_horario_um int,
id_horario_dois int,
status_matricula varchar(15),
modulo_atual varchar(20),
id_aluno int
)

-- Criar as chaves estrangeiras
-- Criar tabela de Permissoes
