/**
 * Interface de um Removedor de HTML que consiga receber um texto com html e retornar seu texto sem as marcações HTML. Esta interface é uma porta, que é concretizada em algum adaptador de tecnologia específica na camada de Infraestrutura
 */
export interface RemoveHtml {
    /**
     * Recebe uma string de um texto em html e retorna uma string do texto sem as marcações html
     * @param htmlString
     */
    remover(htmlString: string): string;
}
