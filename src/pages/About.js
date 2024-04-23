import React from 'react';
import './About.css';

function About() {
    return (
        React.createElement('div', { className: 'container' },
            React.createElement('h1', null, 'About'),
            React.createElement('h3', null, 'SOBRE'),
            React.createElement('p', { className: 'texto' },
                `O abandono de cães e gatos na cidade do Recife, em Pernambuco, é um problema alarmente que clama por atenção e ação imediata! Nas ruas da cidade, é comum encontrar animais desamparados, perdidos e famintos, vagando em busca de um abrigo e comida, esses seres inocentes, que deveriam receber amor e cuidado, são vitmas da negligência humana e da falta de politicas eficazes de controle e proteção animal. É preciso incentivar a adoção responsável e o cuidado com os animais de estimação, promovendo uma cultura de respeito e compaixão pelos seres vivos que compartilham conosco o espaço urbano. Logo, levando em consideração tais pontos, o "E.I.T.A! Recife", programa que identifica desafios da cidade do Recife e cria um ambiente propício para realizar conexões capazes de implementar soluções inovadoras para a problemática, trouxe o tema - Como podemos reduzir o abandono de cães e gatos na cidade do Recife, identificando e registrando cada um deles de forma escalável e mudando a cultura da população no trato desses animais? - e visando tal desafio, nosso time trouxe uma inovadora solução. Visamos objetivar um aplicativo chamado "Pet Help" que visa oferecer as funções de cadastro do animal em questão, assim como disponibiliza também para o usuário a opção de notificar o desaparecimento de seu pet, em atribuição, uma das partes mais importantes do nosso app é a oportunidade de realizar a adoção de algum animal cadastrado ou informado no nosso sistema, contendo também outras funcionalidades que serão expostas ao discorrer de sua utilização.`
            ),

            React.createElement('h3', null, 'EQUIPE'),
            React.createElement('p', { style: { fontSize: '16px', fontFamily: 'Helvetica', textAlign: 'justify' } },
                React.createElement('br'),
                'José Gabriel Gadiolli Lourenço da Paixão  | 01603195',
                React.createElement('br'),
                'Matheus José dos Santos Silva             | 01597670',
                React.createElement('br'),
                'Rebecca Costa Florêncio Wanderley         | 01590738'
            ),

            React.createElement('h3', { className: 'git' },
                React.createElement('a', { href: 'https://github.com/matheusjos29/Uni-o-Animal_WEB', target: '_blank', rel: 'noopener noreferrer' }, 'Link GitHub')
            )
        )
    );
}

export default About;
