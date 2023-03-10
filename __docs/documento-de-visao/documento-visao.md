# Documento Visão

Histórico da Revisão
| Data | Versão | Descrição | Autor |
|------------|-------|--------------------------------------------|------------|
| 17/02/2023 | 1.0.0 |Gerador de Acórdãos para o CRPS |pauloh.pires|

## Sumário

- [1. Definição do problema](#1-definição-do-problema)
    - [1.1. Cenário atual](#11-cenário-atual)
    - [1.2. Objetivo de negócio](#12-objetivo-de-negócio)
    - [1.3. Métricas de sucesso](#13-métricas-de-sucesso)
- [2. Descrição da Solução](#2-descrição-da-solução)
- [3. Escopo e limitações](#3-escopo-e-limitações)
    - [3.1. Contexto do sistema](#31-contexto-do-sistema)
    - [3.2. Features principais](#32-features-principais)
    - [3.3. Escopo das próximas releases](#33-escopo-das-próximas-releases)
    - [3.4. Limitações e exclusões](#34-limitações-e-exclusões)
- [4. Contexto de negócio](#4-contexto-de-negócio)
- [4.1. Perfil dos interessados](#41-perfil-dos-interessados)
- [5. Diagrama de Instalação](#5-diagrama-de-instalação)
    

## 1. Definição do problema

### 1.1. Cenário atual

Cada processo analisado de aposentadoria leva em média duas à quatro horas para ser analisado pelo conselheiro. Esse tempo denota um tempo de mais ou menos 50% à 20% na elaboração da redação final.

Ao elaborar um despacho, os Conselheiros usam arquivos modelo, onde, para cada decisão, eles registram textos que são sempre os mesmos. Para repetir esses textos eles usam outros arquivos nos quais têm registrados os textos padrão de cada decisão, copiam e colam em no despacho final.

Todo esse processo é muito demorado e o texto final tem pouca variância em relação aos textos padrão.

### 1.2. Objetivo de negócio

* Reduzir o tempo de trabalho na coleta de textos base
* Padronizar a redação

### 1.3. Métricas de sucesso

* Redução do tempo de elaboração do despacho em 70%
* Padronizar os textos de acórdãos em 80%

## 2. Descrição da Solução

Frente ao tempo dedicado pelos Conselheiros em formatar o documento e em escrever os textos que são basicamente sempre os mesmos, o Conselho de Recurso idealizou uma solução na qual o Conselheiro forneça os parâmetros de cada decisão e suas variáveis e o sistema retorne um despacho formatado, o qual ainda pode ser editado pelo Conselheiro caso deseje adaptar algo que varie para o caso específico

## 3. Escopo e limitações

### 3.1. Contexto do sistema

![diagrama de contexto](diagrama-de-contexto.drawio.svg)

### 3.2. Features principais

* Resposta de formulário
* Editor de formulário
* Copiar o texto do relatório

### 3.3. Escopo das próximas releases
* Login com usuário e senha LDAP
* Gestão de usuários
* Permite criar vários formulários
* Painel de formulários
* Compartilhar formulários
* API de formulário permite chamar o formulário como uma API
* API retorna o despacho html ou pdf
* Plugin para questões que trazem dados dos sistemas corporativos

### 3.4. Limitações e exclusões

* Está fora deste projeto integrações com sistemas corporativos. Essa integração deverá ser realizada por plugin quando desenvolvida essa funcionalidade

## 4. Contexto de negócio

### 4.1. Perfil dos interessados

| Papel | Descrição | Usuário do sistema | Representante |
|-------|-----------|--------------------|---------------|
| Presidente do CRPS |  |não |Borsi|
| Presidente de Câmara de Recursos |  |sim |Paulo Victor|
| Conselheiros do CRPS |  |sim | - |
| Chefe de Recursos |  |não |Alessandra|

# 5. Diagrama de Instalação

![diagrama de instalacao](diagrama-de-instalacao.drawio.svg)
